import Chart from "./Chart";
import Filter from "./Filter";
import ContainerExpense from "./ContainerExpense"
import { useEffect, useState } from "react";

function Body({getDataPost}) {
    const [year, setYear] = useState('');
    const [expensesForYear, setExpensesForYear] = useState([])

    useEffect(() => {
        setYear('2021')
    }, [])
    function changeInputUptoBody(newYear) {
        setYear(newYear);
    }

    function getExpensesForYear(expensesForYear) {
        setExpensesForYear(expensesForYear)
    } 
    return (
        <div className="container-body">
            <Filter changeInputUptoBody = {changeInputUptoBody}></Filter>
            <Chart year = {year} expensesForYear = {expensesForYear}></Chart>
            <ContainerExpense getExpensesForYear = {getExpensesForYear} dataPost={getDataPost} year = {year}></ContainerExpense>
        </div>
    )
}

export default Body;