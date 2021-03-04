import { checkBudget } from '../helper';

const BudgetControl = ({ budget, remaining }) => {
    return (
        <>
            <div className='alert alert-primary'>budget: ${budget}</div>
            <div className={checkBudget(budget, remaining)}>
                remaining: ${remaining}
            </div>
        </>
    );
};

export default BudgetControl;
