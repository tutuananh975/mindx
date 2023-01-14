
function NotAddExpense({hadleShowFormAddExpense}) {
    return (
        <div style={{ display: 'flex'}}>
            <button className="btn-add-expense" onClick={hadleShowFormAddExpense}>
                ADD NEW EXPENSE
            </button>
        </div>
    )
}

export default NotAddExpense