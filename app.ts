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

// function Azizbek(name:string,lastname:string):string {
// 	return`${name} ${lastname}`
	
// }


// const chekad =(age:number):boolean =>{
// 	if (age >= 18) {
// 		return true
// 	}

// 	return false
// }

// const odam =Azizbek("azizbek","akramov")

// console.log(odam);

// const add = chekad(20)
// console.log(add);


// video-4

const people = {
	firstName:'Azizbek',
	lastName:'Akramov',
	city:'Jizzax',
	science: {
		history:'yomon',
		mathematics:'yaxshi'
	}
}

function azizbek(data:{firstName:string, lastname:string}):string {
	return`${data.firstName} ${data.lastname}`
}

const people1 = azizbek({firstName: people.firstName,lastname:people.lastName})
console.log(people1);



