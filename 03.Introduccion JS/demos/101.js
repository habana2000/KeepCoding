// ejemplos de Strings
const role = "teacher";

// esto va a petar
/*
    Peta porque "role" esta definido como constante
    role = 'Student'

*/

console.log(role);

const teacherName = "Jordi";
const phrase1 = "The name of the teacher is " + teacherName; // usamos + para concatenar strings
const phrase2 = `The name of the teacher is ${teacherName}`; // o usar backticks `para usar la interpolación

console.log("phrase1 -->", phrase1);
console.log("phrase2 -->", phrase2);
console.log("phrase1 != phrase2 -->", phrase1 != phrase2);
console.log("phrase1 == phrase2 -->", phrase1 == phrase2);

/* Varios */

let coches3 = ["AUDI", "NISSAN", "SKODA"];
console.log(coches3, " --- ", coches3[0]);

/* Los arrays pueden tener dentro distintos tipos de datos */
coches3[0] = 23;
console.log(coches3, " --- ", coches3[0]);

/* Variables literales */

let mouseItem = {
  name: "MagicMouse",
  units: 12,
  price: 99,
  OS: ["Windows", "MAC", "Ubuntu"],
};
let keyboardItem = {
  name: "QWERTY",
  units: 23,
  price: 29.9,
  ISOCode: "ES",
  OS: ["Windows", "MAC", "Linux"],
  compatibleWith: {
    mouse: mouseItem,
    coches3,
  },
};

console.log("Available units:", keyboardItem.units > 0);
console.log(
  "Units of mouse compatible with keyboardItem",
  keyboardItem.compatibleWith.mouse.units
);
console.log("MouseItem has ISOCode ???", mouseItem.ISOCode); // mouseItem.ISOCode is undefined, porque no existe la propiedad

/*
JSON
{
    "name": "QWERTY",
    "units": "23",
    "price": "29.9",
    "ISOCode": "ES",
    "OS": ["Windows","MAC","Ubuntu"],
    "compatibleWith": {
        "mouse": "mouseItem"
    }
}
*/

/* switch */
for (let os of keyboardItem.OS) {
  if (os === "Windows") {
    console.log("Es Windows");
  } else if (os === "Linux") {
    console.log("Es Linux");
  } else {
    console.log("No es Windows ni Linux");
  }
}



