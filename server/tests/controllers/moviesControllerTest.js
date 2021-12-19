import chai from "chai";
import sinon from "sinon";

import MovieModel from "../../models/movieModel.js";

import access_logger from "../../conf/access_logger.js";
import error_logger from "../../conf/error_logger.js";

import { getMoviesBySearch, getFavouriteMovies, getMovie, getMovies,
    createMovie, updateMovie, deleteMovie, favouriteMovie } from "../../controllers/moviesController.js";

/**
 *  Tests all methods in movieController.js file.
 */
describe("MoviesController", () => {
    describe("getMoviesBySearch", () => {
        it("should return movies by search query.", async () => {
            let req = {
                query: { searchQuery: "bEsT moVie" }
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 200);
                    return this;
                }
            };

            const query = new RegExp(req.query.searchQuery, "i");

            const callMock = sinon.mock(MovieModel).expects("find").once().withExactArgs({$or: [{ title: query }, { genres: { $in: query }}]}).returns(
                [
                    {
                        "_id": "111",
                        "title": "Best Movie",
                        "description": "Mock Description",
                        "releaseYear": "2022",
                        "director": "Mock Director",
                        "census": "PG-13",
                        "genres": [
                            "Action",
                            "Drama",
                        ],
                        "poster": "Mock Poster",
                        "showTimes": [
                            "01/01/2022T12:00",
                        ],
                        "favourites": [
                            "999",
                        ],
                        "runningTime": "150",
                    },
                ]
            );

            const resMock = sinon.mock(res).expects("json").once().withExactArgs({
                data: [
                        {
                            "_id": "111",
                            "title": "Best Movie",
                            "description": "Mock Description",
                            "releaseYear": "2022",
                            "director": "Mock Director",
                            "census": "PG-13",
                            "genres": [
                                "Action",
                                "Drama",
                            ],
                            "poster": "Mock Poster",
                            "showTimes": [
                                "01/01/2022T12:00",
                            ],
                            "favourites": [
                                "999",
                            ],
                            "runningTime": "150",
                        },
                    ]
            });
            const logMock = sinon.mock(access_logger).expects("log").once().withExactArgs("info", "getMoviesBySearch");

            await getMoviesBySearch(req, res);

            callMock.verify();
            resMock.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
    });
    describe("getFavouriteMovies", () => {
        it("should return one favourite movie.", async () => {
            let req = {
                userId: "999",
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 200);
                    return this;
                }
            };

            const callMock = sinon.mock(MovieModel).expects("find").once().withExactArgs().returns(
                [
                    {
                        "_id": "111",
                        "title": "Mock Title",
                        "description": "Mock Description",
                        "releaseYear": "2022",
                        "director": "Mock Director",
                        "census": "PG-13",
                        "genres": [
                            "Action",
                            "Drama",
                        ],
                        "poster": "Mock Poster",
                        "showTimes": [
                            "01/01/2022T12:00",
                        ],
                        "favourites": [
                            "999",
                        ],
                        "runningTime": "150",
                    },
                    {
                        "_id": "222",
                        "title": "Mock Title",
                        "description": "Mock Description",
                        "releaseYear": "2022",
                        "director": "Mock Director",
                        "census": "PG-13",
                        "genres": [
                            "Thriller",
                            "Sci-Fi",
                        ],
                        "poster": "Mock Poster",
                        "showTimes": [
                            "01/01/2022T12:00",
                        ],
                        "favourites": [
                            "888",
                        ],
                        "runningTime": "150",
                    },
                ]
            );
            const resMock = sinon.mock(res).expects("json").once().withExactArgs({
                 data:
                     [
                        {
                             "_id": "111",
                             "title": "Mock Title",
                             "description": "Mock Description",
                             "releaseYear": "2022",
                             "director": "Mock Director",
                             "census": "PG-13",
                             "genres": [
                                 "Action",
                                 "Drama",
                             ],
                             "poster": "Mock Poster",
                             "showTimes": [
                                 "01/01/2022T12:00",
                             ],
                             "favourites": [
                                 "999",
                             ],
                             "runningTime": "150",
                        },
                    ]
            });
            const logMock = sinon.mock(access_logger).expects("log").once().withExactArgs("info", "getFavouriteMovies");

            await getFavouriteMovies(req, res);

            callMock.verify();
            resMock.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
        it("should return all favourite movies.", async () => {
            let req = {
                userId: "999",
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 200);
                    return this;
                }
            };

            const callMock = sinon.mock(MovieModel).expects("find").once().withExactArgs().returns(
                [
                    {
                        "_id": "111",
                        "title": "Mock Title",
                        "description": "Mock Description",
                        "releaseYear": "2022",
                        "director": "Mock Director",
                        "census": "PG-13",
                        "genres": [
                            "Action",
                            "Drama",
                        ],
                        "poster": "Mock Poster",
                        "showTimes": [
                            "01/01/2022T12:00",
                        ],
                        "favourites": [
                            "999",
                        ],
                        "runningTime": "150",
                    },
                    {
                        "_id": "222",
                        "title": "Mock Title",
                        "description": "Mock Description",
                        "releaseYear": "2022",
                        "director": "Mock Director",
                        "census": "PG-13",
                        "genres": [
                            "Thriller",
                            "Sci-Fi",
                        ],
                        "poster": "Mock Poster",
                        "showTimes": [
                            "01/01/2022T12:00",
                        ],
                        "favourites": [
                            "999",
                        ],
                        "runningTime": "150",
                    },
                ]
            );
            const resMock = sinon.mock(res).expects("json").once().withExactArgs({
                data:
                    [
                        {
                            "_id": "111",
                            "title": "Mock Title",
                            "description": "Mock Description",
                            "releaseYear": "2022",
                            "director": "Mock Director",
                            "census": "PG-13",
                            "genres": [
                                "Action",
                                "Drama",
                            ],
                            "poster": "Mock Poster",
                            "showTimes": [
                                "01/01/2022T12:00",
                            ],
                            "favourites": [
                                "999",
                            ],
                            "runningTime": "150",
                        },
                        {
                            "_id": "222",
                            "title": "Mock Title",
                            "description": "Mock Description",
                            "releaseYear": "2022",
                            "director": "Mock Director",
                            "census": "PG-13",
                            "genres": [
                                "Thriller",
                                "Sci-Fi",
                            ],
                            "poster": "Mock Poster",
                            "showTimes": [
                                "01/01/2022T12:00",
                            ],
                            "favourites": [
                                "999",
                            ],
                            "runningTime": "150",
                        },
                    ]
            });
            const logMock = sinon.mock(access_logger).expects("log").withExactArgs("info", "getFavouriteMovies");

            await getFavouriteMovies(req, res);

            callMock.verify();
            resMock.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
        it("should return an empty array of favourite movies.", async () => {
            let req = {
                userId: "999",
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 200);
                    return this;
                }
            };

            const callMock = sinon.mock(MovieModel).expects("find").once().withExactArgs().returns(
                [
                    {
                        "_id": "111",
                        "title": "Mock Title",
                        "description": "Mock Description",
                        "releaseYear": "2022",
                        "director": "Mock Director",
                        "census": "PG-13",
                        "genres": [
                            "Action",
                            "Drama",
                        ],
                        "poster": "Mock Poster",
                        "showTimes": [
                            "01/01/2022T12:00",
                        ],
                        "favourites": [
                            "888",
                        ],
                        "runningTime": "150",
                    },
                    {
                        "_id": "222",
                        "title": "Mock Title",
                        "description": "Mock Description",
                        "releaseYear": "2022",
                        "director": "Mock Director",
                        "census": "PG-13",
                        "genres": [
                            "Thriller",
                            "Sci-Fi",
                        ],
                        "poster": "Mock Poster",
                        "showTimes": [
                            "01/01/2022T12:00",
                        ],
                        "favourites": [
                            "888",
                        ],
                        "runningTime": "150",
                    },
                ]
            );
            const resMock = sinon.mock(res).expects("json").once().withExactArgs({ data: [] });
            const logMock = sinon.mock(access_logger).expects("log").withExactArgs("info", "getFavouriteMovies");

            await getFavouriteMovies(req, res);

            callMock.verify();
            resMock.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
    });
    describe("getMovie", () => {
        it("should return a movie.", async () => {
            let req = {
                params: { id:  "111" }
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 200);
                    return this;
                }
            };

            const callMock = sinon.mock(MovieModel).expects("findById").once().withExactArgs("111").returns(
                {
                    "_id": "111",
                    "title": "Mock Title",
                    "description": "Mock Description",
                    "releaseYear": "2022",
                    "director": "Mock Director",
                    "census": "PG-13",
                    "genres": [
                        "Action",
                        "Drama",
                    ],
                    "poster": "Mock Poster",
                    "showTimes": [
                        "01/01/2022T12:00",
                    ],
                    "favourites": [
                        "999",
                    ],
                    "runningTime": "150",
                }
            );

            const resMock = sinon.mock(res).expects("json").once().withExactArgs(
                {
                    "_id": "111",
                    "title": "Mock Title",
                    "description": "Mock Description",
                    "releaseYear": "2022",
                    "director": "Mock Director",
                    "census": "PG-13",
                    "genres": [
                        "Action",
                        "Drama",
                    ],
                    "poster": "Mock Poster",
                    "showTimes": [
                        "01/01/2022T12:00",
                    ],
                    "favourites": [
                        "999",
                    ],
                    "runningTime": "150",
                }
            );
            const logMock = sinon.mock(access_logger).expects("log").once().withExactArgs("info", "getMovie");

            await getMovie(req, res);

            callMock.verify();
            resMock.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
        it("should throw an error on unsuccessful movie search.", async () => {
            let req = {
                params: { id:  "111" }
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 404);
                    return this;
                }
            };

            const resMock = sinon.mock(res).expects("json").once().withArgs();
            const logMock = sinon.mock(error_logger).expects("log").once().withArgs();

            await getMovie(req, res);

            resMock.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
    });
    describe("getMovies", () => {
        it("should return all movies.", async () => {
            let req = {};

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 200);
                    return this;
                }
            };

            const callMock = sinon.mock(MovieModel).expects("find").once().withExactArgs().returns(
                [
                    {
                        "_id": "111",
                        "title": "Mock Title",
                        "description": "Mock Description",
                        "releaseYear": "2022",
                        "director": "Mock Director",
                        "census": "PG-13",
                        "genres": [
                            "Action",
                            "Drama",
                        ],
                        "poster": "Mock Poster",
                        "showTimes": [
                            "01/01/2022T12:00",
                        ],
                        "favourites": [
                            "999",
                        ],
                        "runningTime": "150",
                    },
                    {
                        "_id": "222",
                        "title": "Mock Title",
                        "description": "Mock Description",
                        "releaseYear": "2022",
                        "director": "Mock Director",
                        "census": "PG-13",
                        "genres": [
                            "Thriller",
                            "Sci-Fi",
                        ],
                        "poster": "Mock Poster",
                        "showTimes": [
                            "01/01/2022T12:00",
                        ],
                        "favourites": [
                            "888",
                        ],
                        "runningTime": "150",
                    },
                ]
            );

            const resMock = sinon.mock(res).expects("json").once().withExactArgs(
                [
                    {
                        "_id": "111",
                        "title": "Mock Title",
                        "description": "Mock Description",
                        "releaseYear": "2022",
                        "director": "Mock Director",
                        "census": "PG-13",
                        "genres": [
                            "Action",
                            "Drama",
                        ],
                        "poster": "Mock Poster",
                        "showTimes": [
                            "01/01/2022T12:00",
                        ],
                        "favourites": [
                            "999",
                        ],
                        "runningTime": "150",
                    },
                    {
                        "_id": "222",
                        "title": "Mock Title",
                        "description": "Mock Description",
                        "releaseYear": "2022",
                        "director": "Mock Director",
                        "census": "PG-13",
                        "genres": [
                            "Thriller",
                            "Sci-Fi",
                        ],
                        "poster": "Mock Poster",
                        "showTimes": [
                            "01/01/2022T12:00",
                        ],
                        "favourites": [
                            "888",
                        ],
                        "runningTime": "150",
                    },
                ]
            );
            const logMock = sinon.mock(access_logger).expects("log").once().withExactArgs("info", "getMovies");

            await getMovies(req, res);

            callMock.verify();
            resMock.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
    });
    describe("createMovie", () => {
        it("should create a new movie.", async () => {
            let req = {
                body: {
                    title: "Mock Title",
                    description: "Mock Description",
                    releaseYear: "2022",
                    runningTime: "150",
                    director: "Mock Director",
                    census: "PG-13",
                    genres: [
                        "Action",
                        "Drama",
                    ],
                    poster: "Mock Poster",
                    showTimes: [],
                }
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 201);
                    return this;
                }
            };

            const callMock = sinon.mock(MovieModel).expects("create").once().withExactArgs({
                title: "Mock Title",
                description: "Mock Description",
                releaseYear: "2022",
                runningTime: "150",
                director: "Mock Director",
                census: "PG-13",
                genres: [
                    "Action",
                    "Drama",
                ],
                poster: "Mock Poster",
                showTimes: [],
            }).returns(
                {
                    "_id": "111",
                    "title": "Mock Title",
                    "description": "Mock Description",
                    "releaseYear": "2022",
                    "runningTime": "150",
                    "director": "Mock Director",
                    "census": "PG-13",
                    "genres": [
                        "Action",
                        "Drama",
                    ],
                    "poster": "Mock Poster",
                    "showTimes": [],
                    "favourites": [],
                }
            );

            const resMock = sinon.mock(res).expects("json").once().withExactArgs(
                {
                    "_id": "111",
                    "title": "Mock Title",
                    "description": "Mock Description",
                    "releaseYear": "2022",
                    "runningTime": "150",
                    "director": "Mock Director",
                    "census": "PG-13",
                    "genres": [
                        "Action",
                        "Drama",
                    ],
                    "poster": "Mock Poster",
                    "showTimes": [],
                    "favourites": [],
                }
            );
            const logMock = sinon.mock(access_logger).expects("log").once().withExactArgs("info", "createMovie");

            await createMovie(req, res);

            callMock.verify();
            resMock.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
        it("should throw an error because of missing parameters.", async () => {
            let req = {
                body: {
                    title: "Mock Title",
                    releaseYear: "2022",
                    runningTime: "150",
                }
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 404);
                    return this;
                }
            }

            const callMock = sinon.mock(MovieModel).expects("create").once().withExactArgs({
                title: "Mock Title",
                description: undefined,
                releaseYear: "2022",
                runningTime: "150",
                director: undefined,
                census: undefined,
                genres: undefined,
                poster: undefined,
                showTimes: undefined,
            });

            const logMock = sinon.mock(error_logger).expects("log").once().withArgs();

            await createMovie(req, res);

            callMock.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
    });
    describe("updateMovie", () => {
        it("should successfully update movie.", async () => {
            let req = {
                body: {
                    _id: "111222333444555666777888",
                    title: "Mock Title",
                    description: "Mock Description",
                    releaseYear: "2022",
                    runningTime: "150",
                    director: "Mock Director",
                    census: "PG-13",
                    genres: [
                        "Action",
                        "Drama",
                    ],
                    poster: "Mock Poster",
                    showTimes: [],
                    favourites: [],
                }
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 200);
                    return this;
                }
            };

            const callMock = sinon.mock(MovieModel).expects("findByIdAndUpdate").once().withExactArgs("111222333444555666777888",
                {
                    _id: '111222333444555666777888',
                    title: 'Mock Title',
                    description: 'Mock Description',
                    releaseYear: '2022',
                    runningTime: '150',
                    director: 'Mock Director',
                    census: 'PG-13',
                    genres: [ 'Action', 'Drama' ],
                    poster: 'Mock Poster',
                    showTimes: [],
                    favourites: []
                },
                { new: true }).returns(
                {
                    "_id": "111222333444555666777888",
                    "title": "Mock Title",
                    "description": "Mock Description",
                    "releaseYear": "2022",
                    "runningTime": "150",
                    "director": "Mock Director",
                    "census": "PG-13",
                    "genres": [
                        "Action",
                        "Drama",
                    ],
                    "poster": "Mock Poster",
                    "showTimes": [],
                    "favourites": [],
                }
            );

            const resMock = sinon.mock(res).expects("json").once().withExactArgs(
                {
                    "_id": "111222333444555666777888",
                    "title": "Mock Title",
                    "description": "Mock Description",
                    "releaseYear": "2022",
                    "runningTime": "150",
                    "director": "Mock Director",
                    "census": "PG-13",
                    "genres": [
                        "Action",
                        "Drama",
                    ],
                    "poster": "Mock Poster",
                    "showTimes": [],
                    "favourites": [],
                }
            );

            const logMock = sinon.mock(access_logger).expects("log").once().withExactArgs("info", "updateMovie");

            await updateMovie(req, res);

            callMock.verify();
            resMock.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
        it("should throw an error because of invalid id.", async () => {
            let req = {
                body: {
                    _id: "111",
                }
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 404);
                    return this;
                }
            };

            const logMock = sinon.mock(error_logger).expects("log").once().withExactArgs("error", `No movie with that id: ${"111"}`);

            await updateMovie(req, res);

            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
    });
    describe("deleteMovie", () => {
        it("should successfully delete movie.", async () => {
            let req = {
                params: { id: "111222333444555666777888", }
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 200);
                    return this;
                }
            };

            const callMock = sinon.mock(MovieModel).expects("findByIdAndRemove").once().withExactArgs("111222333444555666777888");
            const logMock = sinon.mock(access_logger).expects("log").once().withExactArgs("info", "deleteMovie");

            await deleteMovie(req, res);

            callMock.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
        it("should throw an error because of invalid id.", async () => {
            let req = {
                params: { id: "111", }
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 404);
                    return this;
                }
            };

            const logMock = sinon.mock(error_logger).expects("log").once().withExactArgs("error", `No movie with that id: ${"111"}`);

            await deleteMovie(req, res);

            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
    });
    describe("favouriteMovie", () => {
        it("should successfully like the movie.", async () => {
            let req = {
                params: { id: "111222333444555666777888", },
                userId: "999",
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 200);
                    return this;
                }
            };

            const callMock = sinon.mock(MovieModel).expects("findById").once()
                .withExactArgs("111222333444555666777888").returns(
                {
                    "_id": "111222333444555666777888",
                    "title": "Mock Title",
                    "description": "Mock Description",
                    "releaseYear": "2022",
                    "director": "Mock Director",
                    "census": "PG-13",
                    "genres": [
                        "Action",
                        "Drama",
                    ],
                    "poster": "Mock Poster",
                    "showTimes": [
                        "01/01/2022T12:00",
                    ],
                    "favourites": [],
                    "runningTime": "150",
                }
            );
            const callMockUpdate = sinon.mock(MovieModel).expects("findByIdAndUpdate").once()
                .withExactArgs("111222333444555666777888",
                    {
                        "_id": "111222333444555666777888",
                        "title": "Mock Title",
                        "description": "Mock Description",
                        "releaseYear": "2022",
                        "director": "Mock Director",
                        "census": "PG-13",
                        "genres": [
                            "Action",
                            "Drama",
                        ],
                        "poster": "Mock Poster",
                        "showTimes": [
                            "01/01/2022T12:00",
                        ],
                        "favourites": [
                            "999",
                        ],
                        "runningTime": "150",
                }, { new: true }).returns(
                    {
                        "_id": "111222333444555666777888",
                        "title": "Mock Title",
                        "description": "Mock Description",
                        "releaseYear": "2022",
                        "director": "Mock Director",
                        "census": "PG-13",
                        "genres": [
                            "Action",
                            "Drama",
                        ],
                        "poster": "Mock Poster",
                        "showTimes": [
                            "01/01/2022T12:00",
                        ],
                        "favourites": [
                            "999",
                        ],
                        "runningTime": "150",
                    }
            );
            const logMock = sinon.mock(access_logger).expects("log").once().withExactArgs("info", "favouriteMovie");

            await favouriteMovie(req, res);

            callMock.verify();
            callMockUpdate.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
        it("should successfully dislike the movie.", async () => {
            let req = {
                params: { id: "111222333444555666777888", },
                userId: "999",
            };

            let res = {
                json: function() {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 200);
                    return this;
                }
            };

            const callMock = sinon.mock(MovieModel).expects("findById").once()
                .withExactArgs("111222333444555666777888").returns(
                    {
                        "_id": "111222333444555666777888",
                        "title": "Mock Title",
                        "description": "Mock Description",
                        "releaseYear": "2022",
                        "director": "Mock Director",
                        "census": "PG-13",
                        "genres": [
                            "Action",
                            "Drama",
                        ],
                        "poster": "Mock Poster",
                        "showTimes": [
                            "01/01/2022T12:00",
                        ],
                        "favourites": [
                            "999",
                        ],
                        "runningTime": "150",
                    }
                );
            const callMockUpdate = sinon.mock(MovieModel).expects("findByIdAndUpdate").once()
                .withExactArgs("111222333444555666777888",
                    {
                        "_id": "111222333444555666777888",
                        "title": "Mock Title",
                        "description": "Mock Description",
                        "releaseYear": "2022",
                        "director": "Mock Director",
                        "census": "PG-13",
                        "genres": [
                            "Action",
                            "Drama",
                        ],
                        "poster": "Mock Poster",
                        "showTimes": [
                            "01/01/2022T12:00",
                        ],
                        "favourites": [],
                        "runningTime": "150",
                    }, { new: true }).returns(
                    {
                        "_id": "111222333444555666777888",
                        "title": "Mock Title",
                        "description": "Mock Description",
                        "releaseYear": "2022",
                        "director": "Mock Director",
                        "census": "PG-13",
                        "genres": [
                            "Action",
                            "Drama",
                        ],
                        "poster": "Mock Poster",
                        "showTimes": [
                            "01/01/2022T12:00",
                        ],
                        "favourites": [],
                        "runningTime": "150",
                    }
                );
            const logMock = sinon.mock(access_logger).expects("log").once().withExactArgs("info", "favouriteMovie");

            await favouriteMovie(req, res);

            callMock.verify();
            callMockUpdate.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
        it("should send back 'Unauthenticated' message.", async () => {
            let req = {
                params: { id: "111", }
            };

            let res = {
                json: function() {},
            };

            const callMock = sinon.mock(res).expects("json").once().withExactArgs({ message: "Unauthenticated"});

            await favouriteMovie(req, res);

            callMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
        it("should throw an error because of invalid id.", async () => {
            let req = {
                params: { id: "111", },
                userId: "999",
            };

            let res = {
                json: function(message) {},
                status: function(responseStatus) {
                    chai.assert.equal(responseStatus, 404);
                    return this;
                }
            };

            const callMock = sinon.mock(res).expects("json").once().withExactArgs(`No movie with that id: ${"111"}`);
            const logMock = sinon.mock(error_logger).expects("log").once().withExactArgs("error", `No movie with that id: ${"111"}`);

            await favouriteMovie(req, res);

            callMock.verify();
            logMock.verify();

            afterEach(()=> { sinon.verifyAndRestore(); });
        });
    });
});
