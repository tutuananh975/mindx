import { useEffect, useState } from "react";
import Expense from "./Expense";

function ContainerExpense({ year, dataPost, getExpensesForYear }) {
    const [allExpenses, setAllExpenses] = useState([]);
    const [expensesForYear, setExpensesForYear] = useState([]);
    

    useEffect(() => {
        fetch('https://6393488a11ed187986b12203.mockapi.io/expenses')
            .then(res => res.json())
            .then(data => {
                setAllExpenses(data)
            });
    }, [])

    useEffect(() => {
        
        if (dataPost.name) {
            setAllExpenses((prev) => [...prev, dataPost]);
        }
    }, [dataPost])

    useEffect(() => {
        getExpensesForYear(expensesForYear)
    }, [expensesForYear, getExpensesForYear])

    useEffect(() => {
        let expenses = allExpenses.filter(expense => {
            return expense.date.toString().split('-')[0] === year;
        })
        setExpensesForYear((expenses));
    }, [year, allExpenses]);

    return (
        <div className="container-expense">
            {expensesForYear.map((expense, index) => {
                return <Expense key={index} expense={expense}></Expense>
            })}
        </div>
    )
}

export default ContainerExpense

