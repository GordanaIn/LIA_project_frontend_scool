import React, {FC, ReactElement} from "react";
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./sections/components/landingStyle/LandingStyle";





const SchoolClient:FC<{}> = ():ReactElement => {
    const classes = useStyles();

    return(
        <div className={classes.root} >
            <Paper elevation={4} className={classes.paper}>
                <Typography variant={'h3'} className={classes.h3}>Support</Typography>
                <p className={classes.p}>The page is under construct </p>
            </Paper>
        </div>

    );
}
export default SchoolClient;
