import React from "react";
import { createUseStyles } from 'react-jss';
import temporaryEmployeeImage from '../assets/employee.jpg';

const useStyles = createUseStyles((theme) => ({

    employeeInfoBox: {
        display: "grid",
        gridTemplateColumns: "40% 60%",
        background: "white",
        alignItems: "center",
    },
    employeeName: {
        margin: "10%",
        fontWeight: "bold",
        borderBottom: "1px solid",
    },
    employeeInfo: {
        margin: "10%",
        fontWeight: "bold",
        borderBottom: "1px solid",
    },
    employeeImage: {
        maxHeight: "200px",
    },
    hidden: {
        display: "none",
    }
}));


const EmployeeInfo = ({ person, pressedPerson }) => {
    const classes = useStyles();
    return (
        <>
            <div className={pressedPerson === person.id ? classes.employeeInfoBox: classes.hidden}>
                    <div><img className={classes.employeeImage} src={person.profile_image ? person.profile_image : temporaryEmployeeImage} alt="Employee"></img></div>
                    <div>
                        <div className={classes.employeeInfo}>Namn:  {person.employee_name}</div>
                        <div className={classes.employeeInfo}>Ålder: {person.employee_age}</div>
                        <div className={classes.employeeInfo}>Lön: {person.employee_salary} kr</div>
                    </div>
            </div>

        </>
    )
}
export default EmployeeInfo;
