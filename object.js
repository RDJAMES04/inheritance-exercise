const characterObj = {
   
    attack: (target) => {console.log(target.name +  " takes damage ")},
    
    heal: (target) => {console.log(target.name +  " is healed ")
    
    }
}

let player1 = Object.create(characterObj,{name:{value: 'Sam'}})
let player2 = Object.create(characterObj,{name:{value: 'Pam'}})

player1.attack(player2)
player2.heal(player2)

