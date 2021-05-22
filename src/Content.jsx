import React from "react";

import { Grid } from "@material-ui/core";
import Features from "./Features";
import Details from "./Details";

const Content = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Features />
                <br />
                <br /> 
                <Details />
            </Grid>
              
        </Grid>
    )
}

export default Content;