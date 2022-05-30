function takeShower(){
    return "Showering!"
}

function eatBreakfast(){
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random()*items.length)];
}
function wakeUp() {
    let firstStep = takeShower()
    console.log(firstStep)
    
    let secondStep = eatBreakfast()
    console.log(secondStep)

    console.log("Ok ready to go to work!")
}

wakeUp()