const Solve= async(expression)=>{
    const body = JSON.stringify({
        expression: expression,
      });

    const response = await fetch("/api/calculator", {
        method: 'POST',
        body: body
    })
    
    const answer = await response.json()

    return answer.data

}

export { Solve }