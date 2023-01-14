import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useContext } from 'react';
import { LoginContext } from './Provider';

function FormLogin() {
    const { changeIsLogin, user, changeUser, dictionary} = useContext(LoginContext);
    const [valueInput , setValueInput] = useState(user)
    const handleSubmit = () => {
        changeIsLogin(valueInput)
    }

    const handleSetUser = (e) => {
        setValueInput(e.target.value)
        changeUser(e.target.value);
    }

    return (
        <div
            className="modal m-auto"
            style={{ display: 'block', position: 'relative', top: '150px' }}
        >
            <Modal.Dialog>
                <Modal.Header className='bg-secondary text-center d-flex border-bottom border-dark border-2'>
                    <div className='m-auto fs-5 fw-semibold'>{dictionary.login}</div>
                </Modal.Header>

                <Modal.Body className='px-5 my-4 d-flex flex-column'>
                    <input 
                        className='form-control input-username mb-5' 
                        placeholder={dictionary.labelInput}
                        value={valueInput}
                        onChange= {(e) => handleSetUser(e)}
                    >
                    </input>
                    <Button variant="primary" onClick={handleSubmit}>{dictionary.login}</Button>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    )
}

export default FormLogin