
function Expense({expense}) {
    
    if (expense) {
        let date = new Date(expense.date).toString().split(' ')
        return (
            <div className="expense">
                <div className="desc-expense">
                    <div className="time-expense">
                        <div className="month-expense">{date[1]}</div>
                        <div className="year-expense">{date[3]}</div>
                        <div className="day-expense">{date[2]}</div>
                    </div>
                    <div className="name-expense">
                        {expense.name}
                    </div>
                </div>
                <div className="amout-expense">
                    ${expense.amount}
                </div>
            </div>
        )
    }
    
}

export default Expense