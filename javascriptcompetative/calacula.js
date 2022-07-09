let result;

const opr = prompt('Enter operator ( either +, -, * or / ): ');
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch (opr) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2}='${result}');
        break;

    case '-':
        result = number1 - number2;
        console.log(`
            $ { number1 } - $ { number2 } = $ { result }
            `);
        break;

    case '*':
        result = number1 * number2;
        console.log(`
            $ { number1 } * $ { number2 } = $ { result }
            `);
        break;

    case '/':
        result = number1 / number2;
        console.log(`
            $ { number1 }
            / ${number2} = ${result}`);
            break;

            default:
            console.log('Invalid opr');

        }
        8 /

            // program for a simple calculator
            let result;

        // take the operator input
        const operator = prompt('Enter operator ( either +, -, * or / ): ');

        // take the operand input
        const number1 = parseFloat(prompt('Enter first number: '));
        const number2 = parseFloat(prompt('Enter second number: '));

        switch (operator) {
            case '+':
                result = number1 + number2;
                console.log(`${number1} + ${number2} = ${result}`);
                break;

            case '-':
                result = number1 - number2;
                console.log(`${number1} - ${number2} = ${result}`);
                break;

            case '*':
                result = number1 * number2;
                console.log(`${number1} * ${number2} = ${result}`);
                break;

            case '/':
                result = number1 / number2;
                console.log(`${number1} / ${number2} = ${result}`);
                break;

            default:
                console.log('Invalid operator');
                break;
        }