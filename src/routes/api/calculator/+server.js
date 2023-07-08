import { json } from '@sveltejs/kit'
import { BreakDown, Parser } from '../../../lib/functions/miscs.js'; 
export async function POST(event) {
    const { expression } = await event.request.json();

    let index = BreakDown(expression)
    let num1 = Parser(expression.substring(0, index))
    let num2 = Parser(expression.substring(index + 1, expression.length))
    let operator = expression[index]
    let result = null

    switch(operator){
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;
        default:
            return json({msg: "Invalid operation"}, {status: 400})
    }

    return json({
        data: result
    })

}
