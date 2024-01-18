// This error happens bc the file is treated as a script then a module.
// Modules have their own scopes and Scripts have the global scope.
export {};
let message = "hello World two";
console.log(message);
let x;
const y = 20;
x = 10;
const sum = x + y;

// Different types
// string, number, boolean

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Alex";

let sentence: string = `My name is ${name} I am a beginner in Typescript`;

let n: null = null;
let u: undefined = undefined;

let isNew: boolean | null = null;
let myName: string | undefined = undefined;

isNew = false;
myName = "jose";

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ["chris", 22];

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

let randomValue: any = 10;
randomValue = true;
randomValue = "Yo";

let myVariable: any = 10;

let myUnknownVariable: unknown = 6;
myUnknownVariable as string;

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

function add(num1: number, num2: number) {
  return num1 + num2;
}
add(5, 10);

// add(5, "10");

// Optional Parameters
function sub(num1: number, num2?: number) {
  if (num2) {
    return num1 - num2;
  } else {
    return num1;
  }
}

sub(4);

// Interface
interface Person {
  firstName: string;
  lastName: string;
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "Bruce",
  lastName: "Wayne",
};

fullName(p);

// Class & Access Modifiers

class Employee {
  employeeName: string;
  constructor(name: string) {
    this.employeeName = name;
  }
  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("Alex");

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manager delegating tasks`);
  }
}

let m1 = new Manager("Kevin");
m1.greet();
console.log(m1.employeeName);

//Access Modifiers
// Public, Private, protected
