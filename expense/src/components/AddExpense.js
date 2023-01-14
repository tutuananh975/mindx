import { useState } from "react"

function AddExpense({ closeForm, handlePostExpense }) {
    const [form, setForm] = useState({ name: '', amount: '', date: '' })

    function handleChangeInputs(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function postExpenseToApi(dataPost,callback) {
        fetch('https://6393488a11ed187986b12203.mockapi.io/expenses', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dataPost)
        })
        .then(res => res.json())
        .then(callback)
    }
    const postExpenseUpHeader = () => {
        if (form.name && form.amount && form.date) {
            let date = new Date(form.date)
            const dataPost = {
                name: form.name,
                amount: form.amount,
                date: date
            }
        postExpenseToApi(dataPost, function(dataPost) {
            handlePostExpense(dataPost);
        });
        
        }
    }
    return (
        <form style={{ width: '100%' }}>
            <div className="input-add-expense">
                <label>Name</label>
                <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChangeInputs}
                    placeholder="Enter name here ...">
                </input>
            </div>
            <div className="input-add-expense">
                <label>Amount</label>
                <input
                    type='number'
                    name='amount'
                    value={form.amount}
                    onChange={handleChangeInputs}
                    placeholder="Enter amount here"
                >
                </input>
            </div>
            <div className="input-add-expense">
                <label>Date</label>
                <input
                    type='date'
                    name='date'
                    value={form.date}
                    onChange={handleChangeInputs}
                    placeholder="dd/mm/yy"
                >
                </input>
            </div>
            <div className="group-btn-add-expense">
                <button
                    type="button"
                    className="btn-add-expense"
                    onClick={postExpenseUpHeader}
                >
                    ADD
                </button>
                <button className="btn-cancel-expense"
                    onClick={closeForm}
                >
                    CANCEL
                </button>
            </div>
        </form>
    )
}

export default AddExpense