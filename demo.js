'use strict'; 
(function() {

	// let person = {
	// 	firstName: 'Kevin',
	// 	lastName: 'Fontana',
	// 	age: 32,
	// 	isAdult: function () {
	// 		return this.age >= 18;
	// 	}
	// };

	// display(person.isAdult());

	// function registerUser(firstName, lastName) {
	// 	let person = {
	// 		firstName, 
	// 		lastName
	// 	};
	// 	display(person);
	// }

	// registerUser('Kevin', 'Fontana');

	// Object literal function declaration shorthand
	// let person = {
	// 	firstName: 'Kevin',
	// 	lastName: 'Fontana',
	// 	age: 32,
	// 	isAdult() {
	// 		return this.age >= 18;
	// 	}
	// };

	// display(person.isAdult());

	// Looking into the built in JavaScript 'Object' functionality
	// let person = {
	// 	firstName: 'Kevin',
	// 	lastName: 'Fontana',
	// 	age: 32,
	// 	isAdult() {
	// 		return this.age >= 18;
	// 	}
	// };
	
	// Object.keys example
	// display(Object.keys(person));

	// Object.assign method
	// let person2 = {};

	// Object.assign(person2, person);

	// display(person2);

	// // Not equal because objects compare their position in memory, not the values contained within the objects
	// display(person1 === person2)

	// let healthStats = {
	// 	height: 68,
	// 	weight: 150
	// };
	
	// Merge healthStats into person object
	// Object.assign(person, healthStats);

	// function to merge the parameters that also mutates the original object
	// function mergeHealthStats(person, healthStats) {
	// 	return Object.assign(person, healthStats);
	// }

	// function to merge the parameters that DOES NOT mutate the original object.
	// But instaead creates a new object to be merged into
	// function mergeHealthStats(person, healthStats) {
	// 	return Object.assign({}, person, healthStats);
	// };

	// let mergedPerson = mergeHealthStats(person, healthStats);

	// // There is an uninteded consequence when using Object.assign in this way. 
	// // Object mutation occurs and mutates the original object
	// display(mergedPerson);
	// display(person);

	// Superfluous object creation which can be negated with Constructor functions
	// let kevin = {
	// 	firstName: 'Kevin',
	// 	lastName: 'Fontana',
	// 	age: 32,
	// 	isAdult() {
	// 		return this.age >= 18;
	// 	}
	// };

	// display(kevin.isAdult());

	// let elijah = {
	// 	firstName: 'Elijah',
	// 	lastName: 'Fontana',
	// 	age: 9,
	// 	isAdult() {
	// 		return this.age >= 18;
	// 	}
	// };

	// display(elijah.isAdult());

	// Constructor function example
	// function Person(firstName, lastName, age) {
	// 	this.firstName = firstName;
	// 	this.lastName = lastName;
	// 	this.age = age;
	// 	this.isAdult = function() {
	// 		return this.age >= 21;
	// 	}
	// }

	// let kevin = new Person('Kevin', 'Fontana', 29);
	// let elijah = new Person('Elijah', 'Fontana', 9);

	// display(kevin);
	// display(elijah);
	// display(kevin.isAdult());
	// display(elijah.isAdult());

	// Object.create example
	// let person = Object.create(
	// 	Object.prototype,
	// 	{
	// 		firstName: {
	// 			value: 'Jim',
	// 			enumerable: true,
	// 			writable: true,
	// 			configurable: true
	// 		},
	// 		lastName: {
	// 			value: 'Fontana',
	// 			enumerable: true,
	// 			writable: true,
	// 			configurable: true
	// 		},
	// 		age: {
	// 			value: 'Jim',
	// 			enumerable: true,
	// 			writable: true,
	// 			configurable: true
	// 		}
	// 	}
	// );

	// display(person);

})();