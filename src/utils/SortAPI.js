const SortAPI = (personer) => {
    return (
        personer.data.sort((a, b) => {
            let comparsion = 0;
            if (a.employee_name > b.employee_name) {
                comparsion = 1;
            } else if (a.employee_name < b.employee_name) {
                comparsion = -1;
            }
            return comparsion;
        })
    )
};
export default SortAPI;
