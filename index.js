function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun())

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(effect="*"){
    return ((adjective="special") => `You are ${effect}${adjective}${effect}!`)
}
console.log(wrapAdjective("99")("superduper"))
// code your solution here
