"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = "hello World two";
console.log(message);
var x;
var y = 20;
x = 10;
var sum = x + y;
// Different types
// string, number, boolean
var isBeginner = true;
var total = 0;
var name = "Alex";
var sentence = "My name is ".concat(name, " I am a beginner in Typescript");
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
isNew = false;
myName = "jose";
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["chris", 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var randomValue = 10;
randomValue = true;
randomValue = "Yo";
var myVariable = 10;
var myUnknownVariable = 6;
myUnknownVariable;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// add(5, "10");
// Optional Parameters
function sub(num1, num2) {
    if (num2) {
        return num1 - num2;
    }
    else {
        return num1;
    }
}
sub(4);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "Bruce",
    lastName: "Wayne",
};
fullName(p);
// Class & Access Modifiers
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee("Alex");
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Kevin");
m1.greet();
console.log(m1.employeeName);
//Access Modifiers
// Public, Private, protected
