// Funcation

function calculation() {
    let x = 500
    let y = 300
    let z = x-y
    let result = x + y + z
    console.log(result);
    
    
}

calculation()

// For loop

let teams =["Nipa", "Bably", "Rafi", "Barsha"]

for(let i = 0; i < teams.length; i++){
    console.log(teams[i]);
    
}

//Map 
let puja_days =["soptomi", "astomi", "nobomi", "doshomi"]


puja_days.map((item)=>{
    console.log(item);
    
})

//Funcation

function grattings(member) {
    let utterance = new SpeechSynthesisUtterance(`welcome ${member}`);
    speechSynthesis.speak(utterance); 
}

for(let i = 0; i < teams.length; i++){
    grattings(teams[i]);
    
}



