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
// const idsi =document.getElementById('idsi')
// const namesi =document.getElementById('namesi')
// const agesi = document.getElementById('agesi')
// const statusi =document.getElementById('statusi')
// const gradesi = document.getElementById('gradesi')
// enum StudentStatus {
// 	Active = 'Active',
// 	Graduated = 'Graduated',
// 	Dropped = 'Dropped',
// }
// interface Student {
// 	id: number
// 	name: string
// 	age: number
// 	status: string
// 	grades: Array<number>
// }
// const students: Student[] = [
// 	{
// 		id: 1,
// 		name: 'Ali',
// 		age: 20,
// 		status: StudentStatus.Active,
// 		grades: [80, 75, 90],
// 	},
// 	{
// 		id: 2,
// 		name: 'Laylo',
// 		age: 17,
// 		status: StudentStatus.Graduated,
// 		grades: [88, 92, 95],
// 	},
// 	{
// 		id: 3,
// 		name: 'Diyor',
// 		age: 22,
// 		status: StudentStatus.Dropped,
// 		grades: [60, 55, 70],
// 	},
// 	{
// 		id: 4,
// 		name: 'Malika',
// 		age: 19,
// 		status: StudentStatus.Active,
// 		grades: [100, 95, 98],
// 	},
// ]
// console.log('18 yoshdan kattalar')
// students
// 	.filter(az => az.age > 18)
// 	.forEach(az => {
// 		console.log(az.name)
// 	})
// console.log('')
// console.log('activlar')
// students
// 	.filter(az => az.status === 'Active')
// 	.forEach(az => {
// 		console.log(az.name)
// 	})
// console.log('');
// console.log('Ballar');
// students.forEach(az => {
// 	let kattason = Math.max(...az.grades)
// 	let indexz = az.grades.indexOf(kattason)
// 	let kichik = Math.min(...az.grades)
// 	let indexzz = az.grades.indexOf(kichik)
// 	delete az.grades[indexz]
// 	delete az.grades[indexzz]
//   let ochirish =  az.grades.filter(Boolean);
// 	console.log(`${az.name} ${ochirish}` )
// })
// console.log('');
// console.log("StudentSummary")
// students.forEach(az => {
// 	console.log('id   ' + az.id)
// 	console.log('name   ' + az.name)
// 	console.log('Yosh   ' + az.age)
// 	console.log('Status  ' + az.status)
// 	console.log('Grades  ' + az.grades)
// 	console.log('')
// })
// const arr = [
//   42, 3, 60, 7, 19, 85, 25, 42, 64, 76,
//   1, 99, 31, 17, 27, 33, 17, 49, 57, 4,
//   2, 5, 8, 9, 10, 11, 12, 13, 14, 15,
//   16, 18, 20, 21, 22, 23, 24, 26, 28, 29,
//   30, 32, 34, 35, 36, 37, 38, 39, 40, 41,
//   43, 44, 45, 46, 47, 48, 50, 51, 52, 53,
//   54, 55, 56, 58, 59, 60, 61, 62, 63, 65,
//   66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
//   77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
//   87, 88, 89, 90, 91, 92, 93, 94, 95, 96
// ].sort();
// const result =[]
// for (let i = 0; i < arr.length; i++) {
// 	if (arr.indexOf(arr[i]) === i) {
// 		result.push(arr[i])
// 	}
// }
// for (let b = 0; b < result.length; b++) {
// 	const az = result[b];
// 	console.log(az);
// }
// try {
//   let a = 10;
//   let b = 0;
//   let result = a / b;
//   if (b===0) {
//     throw new Error("nolga bo'linish mumkin emas!")
//   }
//   console.log("natija", result);
// } catch (error) {
//   console.log("xatolik yuz berdi:",(error as Error).message);
// }
// let statuscode:| 100 | 101 | 102 | 103
//     | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226
//     | 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308
//     | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409
//     | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 421
//     | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 451
//     | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;
// function statuscod(aziz:number):void {
//   if (aziz === statuscode) {
//   console.log(aziz);
// }else {
// console.log('error');
// }
// }
// statuscod(300)
// union type
// let aziz: string |number|boolean
// aziz ="fafa"
// aziz =155
// aziz= true
// function aziz(ali:string|number):void {
//   console.log(`this name is ${ali}`);
// }
// aziz("ffdgdf")
// aziz(125)
// function aziz(ali:string|number) {
//   if (typeof ali === 'string') {
//     return ali.toUpperCase()
//   }else if (typeof ali === 'number') {
//     return ali.toFixed()
//   }
// }
// console.log(aziz('fw'));
// console.log(aziz(456985));
// literal type
// let statuse: 'kam'|"o'rtacha" |"ko'p"
// statuse = 'kam'
// statuse ='o\'rtacha'
// // statuse = 'frwerfr' xato chunki unaqa qiymat berilmagan
// type javob = 'ha '|"yo'q" |"balki"
// let tanla:javob
// tanla ='yo\'q'
// tanla ='ha '
// tanla ='FHBDF' XATO CHUNKI FHBDF o'zgaruvchida berilmagan faqat berilganlardan foydalanamiz
// type aliases
// type Iydi = string|number
// let foydalanuvchi:Iydi
// foydalanuvchi = 244
// foydalanuvchi ="fsf"
// let boss:Iydi
// boss =5
// boss ='geer'
// type Az ={
//   name:string
//   last:string
//   age:number
// }
// type Za ={
//   work:string
// }
// type qoshilgan =Az &Za
// let ali:qoshilgan ={
//   name:'azizbek',
//   last:'akramov',
//   age:85,
//   work:'IT'
// }
// interface
// interface Person{
//   name:string
//   age:number
// }
// let persons:Person={
//   name:'azizbek',
//   age:15
// }
// void
// function az(ali:string):void {
//   console.log(ali);
// }
// az('hello world')
// unknown
// function az(ali:unknown) {
//   if (typeof ali === 'string') {
//     return ali.toUpperCase()
//   }if (typeof ali === 'number') {
//     return ali + 5
//   }
// }
// console.log(az('azizbek'));
// console.log(az(10));
// let az:unknown ='hello'
// let st:string =az as string
// console.log(st.toUpperCase());
// never
// function az(xabar: string): never {
//   throw new Error(xabar);
// }
// try {
//   let a = 10;
//   let b = 2;
//   let result = a / b;
//   if (b === 0) {
//     az("Nolga bo‘linish mumkin emas!");
//   }
//   console.log("natija:", result);
// } catch (error) {
//   console.log("Xatolik yuz berdi:", (error as Error).message);
// }
// null
let ism = null;
console.log(`ism: ${ism}`);
ism = 'azizbek';
console.log(`ism ${ism}`);
