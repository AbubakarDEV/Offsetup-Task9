import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import useStyles from "./Style";
function Footer() {
    const classes = useStyles();
    return (
        
            <Container className={classes.footer}>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Copyright @ Abubakar Jilani
                </Typography>
            </Container>
        
    );
}

export default Footer