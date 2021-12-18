import React, { useState } from "react";
import { Grow, Container } from "@material-ui/core";
import Movies from "../Movies/Movies"

/**
 * Exports website's search page element.
 *
 * @returns {JSX.Element} search page element.
 * @constructor
 */
const Search = () => {
    const setCurrentId = useState(null);

    return (
        <Grow in>
            <Container>
                <Movies setCurrentId={setCurrentId} />
            </Container>
        </Grow>
    );
}

export default Search;
