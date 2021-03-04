import { useState } from 'react';
import Error from './Error';

const Question = ({ setBudget, setRemaining, setShowQuestion }) => {
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false);
    const addBudget = (e) => {
        e.preventDefault();

        if (quantity <= 0 || isNaN(quantity)) {
            setError(true);
            return;
        }
        setError(false);
        setBudget(quantity);
        setRemaining(quantity);
        setShowQuestion(false);
    };

    return (
        <>
            <h2>What is your budget</h2>

            {error && <Error message='The budget must be higher than zero' />}

            <form onSubmit={addBudget}>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='budget'
                    onChange={(e) => setQuantity(+e.target.value)}
                    value={quantity}
                />
                <input
                    type='submit'
                    value='Define budget'
                    className='button-primary u-full-width'
                />
            </form>
        </>
    );
};

export default Question;
