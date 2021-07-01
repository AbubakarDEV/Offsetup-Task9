import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import useStyles from "./style";
function Header() {
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.Appbar} position="relative">
                <Typography variant="h6" color="inherit" align="center">
                    Trello Clone Using React
                </Typography>
            </AppBar>
        </>
    );
}

export default Header