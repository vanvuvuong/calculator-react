import operation from './operation';

function calculate(result, buttonName) {
    const operationList = ['%', '÷', '+', '-', '×'];
    if (buttonName === 'AC') {
        return {
            total: '',
            next: '',
            operation: ''
        };
    }
    else if (buttonName === '+/-') {
        return {
            total: parseFloat(result.total) * -1,
            next: parseFloat(result.next) * -1,
            operation: result.operation
        };
    }
    else if (!operationList.includes(buttonName) && buttonName !== '=') {
        if (buttonName === '.' && !result.next.toString().includes('.')) {
            return {
                total: result.total,
                next: result.next + '.',
                operation: result.operation
            };
        }
        else if (buttonName !== '.') {
            result.next += '' + buttonName;
        }
    }
    else if (operationList.includes(buttonName)) {
        result.total = result.next || result.total;
        result.next = null;
        result.operation = buttonName;
    };
    if (buttonName === '=') {
        result = operation(result.total, result.next, result.operation)
    }
    console.log(result);
    return {
        total: result.total,
        next: result.next || 0,
        operation: result.operation || ''
    };
};
export default calculate;