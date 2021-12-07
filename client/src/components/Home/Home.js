import React from "react";
import { Grow, Container, Grid } from "@material-ui/core";

import Movies from "../Movies/Movies"

const Home = () => {
    return (
        <Grow in>
            <Container maxWidth="lg">
                <Grid>
                    <Movies />
                </Grid>
            </Container>
        </Grow>
    );
}

export default Home;