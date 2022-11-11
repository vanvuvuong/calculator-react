function operation(first, second, operation) {
    let total = null, next = null;
    switch (operation) {
        case '+':
            total = parseFloat(first) + parseFloat(second);
            break;
        case '-':
            total = parseFloat(first) - parseFloat(second);
            break;
        case '×':
            total = parseFloat(first) * parseFloat(second);
            break;
        case '÷':
            total = parseFloat(first) / parseFloat(second);
            break;
        case '%':
            total = parseFloat(next) / 100;
            break;
        default:
            break;
    }
    return {
        total: total,
        next: null,
        operation: operation
    }
};
export default operation;