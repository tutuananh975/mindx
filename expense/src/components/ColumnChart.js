import { useEffect, useState } from "react"

function ColumnChart({month, year, expensesForYear}) {
    const [height, setHeight ] = useState({})
    useEffect(() => {   
        
        let expensesOfMonth = expensesForYear.filter(expense => {
            return Number(expense.date.split('-')[1]) === month.id
        })
        let amoutExpense = expensesOfMonth.reduce((total, expense) => {
            return total + Number(expense.amount)
        }, 0);
        setHeight(amoutExpense.toString())
    }, [year, expensesForYear, month])

    return (
        <div style={{width: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className="column">
                <div
                    className="percent"
                    style={{height: `${height}%`}}
                >
                </div>
            </div>
            <div className="month-desc">
                {month.month}
            </div>
        </div>
    )
}

export default ColumnChart