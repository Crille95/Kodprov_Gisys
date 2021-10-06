import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
    header: {
        margin: "0",
        textAlign: "center",
        background: "black",
        color: "#66FCF1",
        fontSize: "40px",
        paddingBottom: "5px",
    },
    headerInfo: {
        margin: "0",
        textAlign: "center",
        background: "black",
        color: "#66FCF1",
        fontSize: "20px",
        paddingBottom: "10px",
    }

}));

export default function NavBar() {
    const classes = useStyles();
    return (
        <>
            <h1 className={classes.header}>Anställda hos Christoffer</h1>
            <h2 className={classes.headerInfo}>Tryck på namnet på någon av de anställda för att få mer info</h2>
        </>
    )
}
