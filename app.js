"use strict";
// video-1
// let surname :string = 'Azizbek'
// let classic :boolean = true
// let age :Number = 15
// console.log(surname);
// console.log(classic);
// console.log(age);
// video-2
// const narx: number = 15000
// const chegirma: number = 5000
// const ayrilganchegirma: Number = narx - chegirma
// console.log(ayrilganchegirma)
// video -3
function Azizbek(name, lastname) {
    return `${name} ${lastname}`;
}
const chekad = (age) => {
    if (age >= 18) {
        return true;
    }
    return false;
};
const odam = Azizbek("azizbek", "akramov");
console.log(odam);
const add = chekad(17);
console.log(add);
