const Expense = ({ expense }) => {
    const { name, quantity } = expense;
    return (
        <li className='gastos'>
            <p>
                {name}
                <span className='gasto'>$ {quantity}</span>
            </p>
        </li>
    );
};

export default Expense;
