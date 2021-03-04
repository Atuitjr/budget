/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

function App() {
    const [budget, setBudget] = useState(0);
    const [remaining, setRemaining] = useState(0);
    const [showQuestion, setShowQuestion] = useState(true);

    const [expenses, setExpenses] = useState([]);
    const [expense, setExpense] = useState({});
    const [createExpense, setCreateExpense] = useState(false);

    useEffect(() => {
        if (createExpense) {
            setExpenses([...expenses, expense]);

            const remainingBudget = remaining - expense.quantity;
            setRemaining(remainingBudget);

            setCreateExpense(false);
        }
    }, [expense]);

    return (
        <div className='container'>
            <header>
                <h1>Weekly expense</h1>;
            </header>
            <div className='contenido-principal contenido'>
                {showQuestion ? (
                    <Question
                        setBudget={setBudget}
                        setRemaining={setRemaining}
                        setShowQuestion={setShowQuestion}
                    />
                ) : (
                    <div className='row'>
                        <div className='one-half column'>
                            <Form
                                setExpense={setExpense}
                                setCreateExpense={setCreateExpense}
                            />
                        </div>
                        <div className='one-half column'>
                            <List expenses={expenses} />
                            <BudgetControl
                                budget={budget}
                                remaining={remaining}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
