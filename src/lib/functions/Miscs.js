const Parser=(value)=>{
    if(value.includes(".")){
        return parseFloat(value)
    }else{
        return parseInt(value)
    }
}

const BreakDown=(expression)=>{
    let index = -1
    const operators=['+', '-', '/', '*']

    for(let i=0; i<operators.length; i++){
        const operatorIndex = expression.indexOf(operators[i])
        if(operatorIndex !== -1){
            index = operatorIndex
            break;
        }
    }
    return index
}

export {Parser, BreakDown}