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

// let ism:string|null =null
// console.log(`ism: ${ism}`) 

// ism ='azizbek'
// console.log(`ism ${ism}`);


// / class

// class Car {
//     name:string;
//     speed:number;

//     constructor(name: string,speed:number){
//         this.name = name
//         this.speed = speed
//     }
// }

// let nexia = new Car('nexia 2',200)
// console.log(nexia);

// let cobalt = new Car('cobalt',250)
// console.log(cobalt);

// constructor


// class Car {
//     name:string;
//     speed:number;
//     istrue:boolean

//     constructor(name: string ='Unknown',speed:number =0){
//         this.name = name
//         this.speed = speed
//         this.istrue=true
//     }
// }

// let nexia = new Car('nexia 2',200)
// console.log(nexia);

// let cobalt = new Car('cobalt',250)
// console.log(cobalt);





// class Car {
//   name!: string;
//   year!: Date;

//   constructor(name: string, year: Date);
//   constructor(data: { name: string; year: Date });

//   constructor(nameOrData: string | { name: string; year: Date }, year?: Date) {
//     if (typeof nameOrData === 'string') {
//       this.name = nameOrData;
//       this.year = year!;
//     } else if (typeof nameOrData === 'object') {
//       this.name = nameOrData.name;
//       this.year = nameOrData.year;
//     }
//   }
// }

// const toyota = new Car('Toyota', new Date('2001-11-01'));
// console.log(toyota);

// const chevrolet = new Car({
//   name: 'Chevrolet',
//   year: new Date('2001-11-01'),
// });
// console.log(chevrolet);


// getter va setter

// class Employee {
//   ssalary: number;

//   set salary(num: number) {
//     this.ssalary = num * 100;
//   }

//   get salary(): number {
//     return this.ssalary;
//   }
// }

// const john = new Employee();
// john.salary = 10;

// const salary = john.salary;
// console.log(salary);




// interface Hayvon{
//   tovush():void;
// }

// class It implements Hayvon {
//   tovush(): void {
//     console.log("Vov-vov!");
//   }
// }



// class Hayvon{
//   harakat(){
//     console.log("harakatlanyapti...");
//   }
// }

// class It extends Hayvon{
//   tovush(){
//     console.log("Vov!");
    
//   }
// }

// const it = new It()
// it.harakat();
// it.tovush();



// class Inson {
//   public ism:string;
//   private yosh:number;
//   protected millatt:string;

//   constructor(ism:string, yosh:number,millatt:string){
//     this.ism =ism
//     this.yosh=yosh
//     this.millatt = millatt
//   }
// }

// const inson = new Inson("mirfozil",21,'ozb')
// console.log(inson.ism);


// class mat{
//   static PI =3.14;

//   static Kvadrat (n:number):number{
//     return n*n
//   }
// }

// console.log(mat.PI);
// console.log(mat.Kvadrat(5));



// abstract class Hayvon{
//   abstract ovoz():void;
//   yur(){
//     console.log('Yur');
//   }
// }

// class It extends Hayvon{
//   ovoz(): void {
//     console.log("vov!");
//   }
// }

// const it = new It()
// it.ovoz()
// it.yur()


// class Foydalanuvchi{
//   ism:string;

//   constructor(ism:string){
//     this.ism=ism
//   }
//   salom(){
//     console.log(`${this.ism}`);
//   }
// }

// const foydalanuvchi = new Foydalanuvchi('aziz')
// foydalanuvchi.salom()


// class Person{
//   name:string
//   _age:number = 0;
//   constructor(name:string,age:number){
//     this.name = name
//     this._age = age
//   }
//   introduce():void{
//     console.log(`My name is ${this.name} I am years old ${this.age}`);
//   }
//   get age():number{
//     return this._age;
//   }
//   set age(value:number){
//     if (value <0) {
//       throw new Error("yosh 0 dan kichik bo'lmasligi kerak");
//     }
//     this.age =value;
//   }

// }

// const person = new Person('aziz',15)
// person.introduce()





// class Calculator{
//   add(a:number,b:number):number;
//   add(a:string,b:string):string
//   add(a:any,b:any):any{
//     return a + b
//   }
// }

// const calc = new Calculator();
// console.log(calc.add(5,10));
// console.log(calc.add('Salom','Azizbek'));



// interface Animal{
//   name:string;
//   makeSound():void;
// }

// class Dog implements Animal{
//   name: string;

//   constructor(name:string){
//     this.name=name
//   }
//   makeSound(): void {
//     console.log(`${this.name} Vov vov`);
//   }
// }

// const dog = new Dog('Bobik')
// dog.makeSound()

// function identity<T>(arg: T): T {
//   return arg;
// }

// const a = identity<string>("Salom");  // T bu yerda string
// const b = identity<number>(42);       // T bu yerda number


// function identity<T>(value: T): T {
//   return value;
// }

// myPromise
//   .then(result => {
//     console.log("Natija:", result);
//   })
//   .catch(error => {
//     console.error("Xatolik:", error);
//   });

// function identity<A>(value:A):A {
// 	return value
// }
// console.log( identity(typeof 'azizbek'));
// console.log(identity(typeof 123));

// function fetchUserName():Promise<string> {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//            resolve('azizbek') 
//         },1000);
//     })
// }
// fetchUserName().then(data =>
//     console.log(data));

// function showLenght<T extends {length:number}>(item:T):number {
// 	return item.length
// }

// console.log(showLenght([1,2,3,3,3,1]));
// console.log(showLenght('Azizbek'));

// class Product{
// 	name:string
// 	price:number

// 	constructor(name:string,price:number){
// 		this.name=name
// 		this.price=price
// 	}

// 	getInfo(){
// 		console.log(`Maxshulot:${this.name}---${this.price}$`);
// 	}
// }

// const p = new Product('cobalt',10000)
// p.getInfo()
const person={
	name:'azizbek',
	age:15
}

function logProperty<T,K extends keyof T>(obj:T,key:K):void{
	console.log(obj[key]);
}

logProperty(person,'name')
logProperty(person,'age')