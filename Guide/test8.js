const data = [
    {day:"5/05/46",whether:"sunny",temp:"27 C"},
    {day:"30/12/46",whether:"cloudy",temp:"28 C"},
    {day:"27/06/66",whether:"sunny",temp:"35 C"}
]

const result = data.map(e=>{
    return e.whether;
})

console.log(result);