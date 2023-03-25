// code your solution here
function saturdayFun(game = "roller-skate"){
    console.log(`This Saturday, i want to ${game}!`);
}

function mondayWork(role = "go to the office"){
    console.log(`I will ${role}.`)
}

function wrapAdjective(name = "special"){
    const greeting1 = "You are ";
    return function(){
        const greeting2 = "a dedicated programmer.";
        return function(){
            console.log(`${greeting1}${name}${greeting2}`);
        };
    };
}
console.log(wrapAdjective("Mumo")()());
