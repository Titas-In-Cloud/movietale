import chai from "chai";
import sinon from "sinon";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "../../models/userModel.js";

import access_logger from "../../conf/access_logger.js";
import error_logger from "../../conf/error_logger.js";

import { login, register } from "../../controllers/userController.js";

describe("UserController", () => {
    describe("login", () => {
        it("should successfully login the user.", async () => {
            let req = {
                body: {
                    email: "mock@email.com",
                    password: "mockPassword",
                }
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 200);
                    return this;
                }
            };

            const callMock = sinon.mock(UserModel).expects("findOne").once().withExactArgs({ email: "mock@email.com" })
                .returns(
                    {
                        _id: "111",
                        name: "Mock Name",
                        email: "mock@email.com",
                        password: "$2a$12$u.4qjv02CfuFnUK6rPiwQ.g9Ug8bM7qyiLSb6krRod1cvNrEeWP8C",
                        role: "client",
                    }
                );
            const tokenMock = sinon.mock(jwt).expects("sign").returns("123");
            const resMock = sinon.mock(res).expects("json").once().withExactArgs({
                result: {
                        _id: "111",
                        name: "Mock Name",
                        email: "mock@email.com",
                        password: "$2a$12$u.4qjv02CfuFnUK6rPiwQ.g9Ug8bM7qyiLSb6krRod1cvNrEeWP8C",
                        role: "client",
                }, token: "123" });
            const logMock = sinon.mock(access_logger).expects("log").once().withExactArgs("info", "login");

            await login(req, res);

            callMock.verify();
            tokenMock.verify();
            resMock.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
        it("should throw an error because user does not exist.", async () => {
            let req = {
                body: {
                    email: "mock@email.com",
                    password: "mockPassword",
                }
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 404);
                    return this;
                }
            };

            const callMock = sinon.mock(UserModel).expects("findOne").once().withExactArgs({ email: "mock@email.com" }).returns();
            const resMock = sinon.mock(res).expects("json").once().withExactArgs({ message: "User doesn't exist." });
            const logMock = sinon.mock(error_logger).expects("log").once().withExactArgs("error", "[404] User doesn't exist.");

            await login(req, res);

            callMock.verify();
            resMock.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
        it("should throw an error because of invalid password.", async () => {
            let req = {
                body: {
                    email: "mock@email.com",
                    password: "mockPassword",
                }
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 400);
                    return this;
                }
            };

            const callMock = sinon.mock(UserModel).expects("findOne").once().withExactArgs({ email: "mock@email.com" })
                .returns(
                    {
                        _id: "111",
                        name: "Mock Name",
                        email: "mock@email.com",
                        password: "randomPassword",
                        role: "client",
                    }
                );
            const resMock = sinon.mock(res).expects("json").once().withExactArgs({ message: "Invalid password." });
            const logMock = sinon.mock(error_logger).expects("log").once().withExactArgs("error", "[400] Invalid password");

            await login(req, res);

            callMock.verify();
            resMock.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
    });
    describe("register", () => {
        it("should successfully register new user.", async () => {
            let req = {
                body: {
                    email: "mock@email.com",
                    password: "mockPassword",
                    confirmPassword: "mockPassword",
                    firstName: "firstMock",
                    lastName: "lastMock",
                }
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 200);
                    return this;
                }
            };

            const callMock = sinon.mock(UserModel).expects("findOne").once().withExactArgs({ email: "mock@email.com" }).returns();
            const callMockCreate = sinon.mock(UserModel).expects("create").once().withExactArgs(
                {
                    email: "mock@email.com",
                    password: "$2a$12$u.4qjv02CfuFnUK6rPiwQ.g9Ug8bM7qyiLSb6krRod1cvNrEeWP8C",
                    name: "firstMock lastMock",
                }
            ).returns(
                {
                    email: "mock@email.com",
                    password: "$2a$12$u.4qjv02CfuFnUK6rPiwQ.g9Ug8bM7qyiLSb6krRod1cvNrEeWP8C",
                    name: "firstMock lastMock",
                });
            const bcryptMock = sinon.mock(bcrypt).expects("hash")
                .returns("$2a$12$u.4qjv02CfuFnUK6rPiwQ.g9Ug8bM7qyiLSb6krRod1cvNrEeWP8C");
            const tokenMock = sinon.mock(jwt).expects("sign").returns("123");
            const resMock = sinon.mock(res).expects("json").once().withExactArgs({
                result: {
                    email: "mock@email.com",
                    password: "$2a$12$u.4qjv02CfuFnUK6rPiwQ.g9Ug8bM7qyiLSb6krRod1cvNrEeWP8C",
                    name: "firstMock lastMock",
                }, token: "123" });
            const logMock = sinon.mock(access_logger).expects("log").once().withExactArgs("info", "register");

            await register(req, res);

            callMock.verify();
            callMockCreate.verify();
            bcryptMock.verify();
            tokenMock.verify();
            resMock.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
        it("should throw an error because user already exists.", async () => {
            let req = {
                body: {
                    email: "mock@email.com",
                    password: "mockPassword",
                    confirmPassword: "mockPassword",
                    firstName: "firstMock",
                    lastName: "lastMock",
                }
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 401);
                    return this;
                }
            };

            const callMock = sinon.mock(UserModel).expects("findOne").once().withExactArgs({ email: "mock@email.com" })
                .returns({
                    body: {
                        email: "mock@email.com",
                        password: "mockPassword",
                        confirmPassword: "mockPassword",
                        firstName: "firstMock",
                        lastName: "lastMock",
                    }
                });
            const resMock = sinon.mock(res).expects("json").once().withExactArgs({ message: "User already exists" });
            const logMock = sinon.mock(error_logger).expects("log").once().withExactArgs("error", "[401] User already exists");

            await register(req, res);

            callMock.verify();
            resMock.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
        it("should throw an error because password do not match.", async () => {
            let req = {
                body: {
                    email: "mock@email.com",
                    password: "mockPassword",
                    confirmPassword: "betterPassword",
                    firstName: "firstMock",
                    lastName: "lastMock",
                }
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 409);
                    return this;
                }
            };

            const callMock = sinon.mock(UserModel).expects("findOne").once().withExactArgs({ email: "mock@email.com" }).returns();
            const resMock = sinon.mock(res).expects("json").once().withExactArgs({ message: "Passwords don't match" });
            const logMock = sinon.mock(error_logger).expects("log").once().withExactArgs("error", "[409] Passwords don't match");

            await register(req, res);

            callMock.verify();
            resMock.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
        it("should throw an error because password is too short.", async () => {
            let req = {
                body: {
                    email: "mock@email.com",
                    password: "mock",
                    confirmPassword: "mock",
                    firstName: "firstMock",
                    lastName: "lastMock",
                }
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 400);
                    return this;
                }
            };

            const callMock = sinon.mock(UserModel).expects("findOne").once().withExactArgs({ email: "mock@email.com" }).returns();
            const resMock = sinon.mock(res).expects("json").once().withExactArgs({ message: "Password should be minimum 6 characters" });
            const logMock = sinon.mock(error_logger).expects("log").once().withExactArgs("error", "[400] Password should be minimum 6 characters");

            await register(req, res);

            callMock.verify();
            resMock.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
    });
});
