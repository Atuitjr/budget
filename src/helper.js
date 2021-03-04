export const checkBudget = (budget, remainingBudget) => {
    let styleClass;
    if (budget / 4 > remainingBudget) {
        styleClass = 'alert alert-danger';
    } else if (budget / 2 > remainingBudget) {
        styleClass = 'alert alert-warning';
    } else styleClass = 'alert alert-success';
    return styleClass;
};
