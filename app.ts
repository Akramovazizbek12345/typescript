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

// const people = {
// 	firstName:'Azizbek',
// 	lastName:'Akramov',
// 	city:'Jizzax',
// 	science: {
// 		history:'yomon',
// 		mathematics:'yaxshi'
// 	}
// }

// function azizbek(data:{firstName:string, lastname:string}):string {
// 	return`${data.firstName} ${data.lastname}`
// }

// const people1 = azizbek({firstName: people.firstName,lastname:people.lastName})
// console.log(people1);


// video-5

// let car: String[] = ['Cobalt','Trakkar','Nexia 2']
// let number: number[] = [1,2,3,4,5,5]
// let bool:boolean[] =[true,false,true,false]

// let result =number.map(num => `Number: ${num}`)

// console.log(result);

// union types

// let car: String[] = ['Cobalt','Trakkar','Nexia 2']
// let number: number[] = [1,2,3,4,5]
// let bool:boolean[] =[true,false,true,false]

// let mixs:(number | string | boolean)[] = [1,'hello',2,'world',true,false]
// console.log(mixs);

// video-6

// const people: [string,number] =['azizbek',24]
// console.log(people[0]);
// console.log(people[1]);
// console.log(people[2]);     // xato


// union type
// let joylashuv: [number, string | number] = [98,'sdcefer']
// console.log("1",joylashuv);

// joylashuv = [12,55]
// console.log(joylashuv);


// function get():[string, number] {
// 	return ['azizbek',15]
// }

// const log = get()

// const [fullName, age] = log
// console.log(fullName,age);


// video-7

// let severid: readonly number[] = [1,2,3,4,5]

// severid.push(6)    // xato yuzaga keladi readonly ishlatganimiz uchun readonly qo'sholmimiz

// console.log(severid);


// let people: readonly [string,number] = ['azizbek',15]
// people[0] = 'islom'  // xato yuzaga keladi readonly ishlatganimiz uchun readonly qo'sholmimiz

// const [fullName,age ] = people

// console.log(fullName,age);

// video-8

// enum Direction {
// 	Up = 1,
// 	Down = 2,
// 	Left = 3,
// 	Right= 4,
// }

// enum Direction {
// 	Up = 'Up',
// 	Down = 'Down',
// 	Left = 'Left',
// 	Right = 'Right',
// }

// function get(direction:Direction) {
// 	if (direction === Direction.Up) {
// 		return 'Moving Up'
// 	}else if (direction === Direction.Down) {
// 		return 'moving Down'
// 	}else if (direction === Direction.Left) {
// 		return 'moving Left'
// 	}else if (direction === Direction.Right) {
// 		return 'moving Right'
// 	}
// }

// const moving = get(Direction.Up)
// console.log(moving);

// const dovn = get(Direction.Down)
// console.log(dovn);



// enum StatusPeople{
// 	kam = 123,
// 	ortacha = 250,
// 	kop = 500,
// }



// function get(people : number) {
// 	if (people === StatusPeople.kam) {
// 		console.log("yaxshi holat");
// 		return StatusPeople.kam
// 	}
// 	 if (people === StatusPeople.kop) {
// 		console.log("server qotishi mumkin");
// 		return StatusPeople.kop
// 	}
// 	return StatusPeople.ortacha
// }

// const page = get(100)

// if (page === StatusPeople.ortacha) {
// 	console.log("qotishi mumkin");
	
// }

// video-9

// let person: {
//   id: number
//   name: string
//   username: string
//   email: string
//   address: {
//     street: string
//     suite: string
//     city: string
//     zipcode: string
//     geo: {
//       lat: number
//       lng: number
//     }
//   }
//   phone: number
//   website: string
//   company: {
//     name: string
//     catchPhrase: string
//     bs: string
//   }
// } = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: -37.3159,
//       lng: 81.1496
//     }
//   },
//   phone: 17707368031,
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets"
//   }
// }


// video-4     mohirdev

// let yosh:number = 25;
// let long:number = 50;
// let fullName:string = "Akramov Azizbek"

// let digital:number[] = [1,2,3];
// let anotherdigital: Array<number> = [1,2,3];

// let people: { fullName:string, yosh:number} = {fullName:'Akramov Azizbek', yosh: 15}
// console.log(people.yosh);


// video-5     mohirdev

// function az(ab:number, cd:number) {
// 	return ab + cd;
// }

// console.log(az(10,15));
// console.log(az('azizbek',55)); // xato  chunki ab-string emas  



// function az(fullName:string):string {
// 	return `Hello ${fullName}`
// }

// console.log(az('Azizbek Akramovich'));


// function az(fullName:string):void {
// 	console.log(`Hello ${fullName}`);
// }

// console.log(az('Azizbek Akramovich'));


// interface

// interface Person{
// 	firstName:string;
// 	age:number;
// 	kasb:string;
// }

// let people:Person ={
// 	firstName:'azizbek',
// 	age:15,
// 	kasb:"IT"
// }



// video-6     mohirdev


// class People {
//   firstname: string;
//   age: number;

//   constructor(firstname: string, age: number) {
//     this.firstname = firstname;
//     this.age = age;
//   }

//   get() {
//     return `Hello, ${this.firstname}!`;
//   }
// }

// const person = new People('azizbek', 15);
// console.log(person.get());
