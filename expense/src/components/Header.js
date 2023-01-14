import AddExpense from "./AddExpense";
import NotAddExpense from "./NotAddExpense";
import { useState } from "react";


function Header({handlePostExpenseUpParent}) {
    const [isAddExpense, setIsAddExpense] = useState(false);

    function handlePostExpense(dataPost) {
        handlePostExpenseUpParent(dataPost);
    }

    function hadleShowFormAddExpense() {
        setIsAddExpense(true);   
    }

    function closeForm(e) {
        e.preventDefault();
        setIsAddExpense(false);
    }

    return (
        <div className="container-header">
            {isAddExpense ? <AddExpense handlePostExpense = {handlePostExpense} closeForm = {closeForm}/> : <NotAddExpense hadleShowFormAddExpense = {hadleShowFormAddExpense}/> }
        </div>  
    )
}

export default Header