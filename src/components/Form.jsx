import { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = ({ setExpense, setCreateExpense }) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false);

    const addExpenses = (e) => {
        e.preventDefault();
        if (name.trim() === '' || quantity < 0 || isNaN(quantity)) {
            setError(true);
            return;
        }
        setError(false);

        const newExpense = {
            name,
            quantity,
            id: shortid.generate(),
        };
        setExpense(newExpense);
        setCreateExpense(true);
        setName('');
        setQuantity(0);
    };
    return (
        <form onSubmit={addExpenses}>
            <h2>Add your expenses</h2>
            {error && <Error message='The expense is not correct' />}
            <div className='field'>
                <label>Expense Name</label>
                <input
                    type='text'
                    name=''
                    className='u-full-width'
                    placeholder='f.i. Transport'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='field'>
                <label>Expense quantity</label>
                <input
                    type='number'
                    name=''
                    className='u-full-width'
                    placeholder='f.i. 300'
                    value={quantity}
                    onChange={(e) => setQuantity(+e.target.value)}
                />
            </div>
            <input
                type='submit'
                value='Add expense'
                className='button-primary u-full-width'
            />
        </form>
    );
};

export default Form;
