import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
    footer: {
        padding: "10px 0 10px 0",
        width: "100%",
        bottom: "0",
        height: "20px",
        background: "black",
        color: "#66FCF1",
        fontSize: "15px",
        textAlign: "center",
    }
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <>
            <footer className={classes.footer}>
                Copyright © 2021 Christoffer Mikaelsson
            </footer>
        </>
    )
}