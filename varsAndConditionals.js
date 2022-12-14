/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Anakin and Obiwan.
*/ 

let obiwanAtk = 25
let anakinAtk = 35

if(obiwanAtk > anakinAtk){
    console.log(`Obiwan destroyed the chosen one`)
} else if(anakinAtk > obiwanAtk) {
    console.log(`The chosen one is the chosen one for a reason`)
} else {
    console.log(`They are both equally strong`)
}

let obiHealth = 100
let obiDef = 0

obiDef += 25 

if(obiHealth <= anakinAtk - obiDef){
    console.log(`Obiwan met his match`)
} else {
    obiHealth -= anakinAtk - obiDef
    console.log(`Obiwan health is now ${obiHealth}`)
}

if(obiHealth + 50 >= 100){
    obiHealth = 100
    console.log(`Obi is back to full health`)
} else {
    obiHealth += 50
    console.log(`Obi recovers health and is now at ${obiHealth}`)
}

let cointoss = true

if(cointoss === true){
    console.log(`The fight goes on`)
} else {
    console.log(`Obiwan retreats`)
}

for(let i = 0; i < 5; i++){
     obiHealth -= anakinAtk - obiDef
    console.log(`Obiwans health is now ${obiHealth}`)
}

while(obiHealth > 0){
    obiHealth -= anakinAtk - obiDef
    console.log(`Obiwans health is now ${obiHealth}`)

    if(obiHealth <= 0){
        console.log(`Obiwan dies to the chosen one`)
    }
}

console.log(`Pretty good fight if you ask me`)
