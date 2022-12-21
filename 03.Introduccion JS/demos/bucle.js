/* Do-While */

let i=1

do {
    console.log("Hello",i++)
} while (i<5)

/* for */

const fighters = ["Bud Spencer", "Chuck Norris", "Van Damme"]

console.log("---> for (ini, mientras, inc)")
for (let i = 0; i<fighters.length; i++) {
    const fighter= fighters[i];
    console.log(fighter);
}

console.log("---> for (ini, mientras, inc) ... DECRECIENTE !!!")
for (let i = fighters.length; i>0; i--) {
    const fighter= fighters[i-1];
    console.log(fighter);
}

console.log("---> for in")
for (let i in fighters) {
    const fighter= fighters[i];
    console.log(fighter);
}

console.log("---> for of")
for (let fighter of fighters) {
    console.log(fighter);
}

/* While */

let j=0
while(j<3) {
    console.log(j,"-",fighters[j])
    j++
}

