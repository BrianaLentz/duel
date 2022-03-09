class Card{
    constructor(name, cost){
        this.name = name
        this.cost = cost
    }
}
class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power
        this.res = res
    }
    attack(target){
        if( target instanceof Unit ) {
            target.res -= this.power
        } else {
            throw new Error( "Target must be a unit!" );
        }
        
    }
}
const BlackBeltNinja = new Unit("Black Ninja", 4, 5, 4)

const RedBeltNinja = new Unit("Red Ninja", 3, 3, 4)
RedBeltNinja.attack(BlackBeltNinja)
console.log(BlackBeltNinja)



class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost)
        this.stat = stat
        this.magnitude = magnitude
        this.text = text
    }
    play(target){
        target[this.stat] += this.magnitude
    }
}

const HardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", +3)
HardAlgorithm.play(RedBeltNinja)
console.log(RedBeltNinja)

const upr = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2)
upr.play(RedBeltNinja)
console.log(RedBeltNinja)

const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", +2)
pairProgramming.play(RedBeltNinja)
console.log(RedBeltNinja)
