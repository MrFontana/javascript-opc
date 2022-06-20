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

	// Object Properties

	// let person = {
	// 	firstName: 'Kevin',
	// 	lastName: 'Fontana',
	// 	age: 32
	// }

	// for (let propertyName in person) {
	// 	display(propertyName + ': ' + person[propertyName]);
	// }

	// display(Object.getOwnPropertyDescriptor(person, 'firstName'));
	// OUTPUT
	// Object {
	// 	value: Kevin,
	// 	writable: true,
	// 	enumerable: true,
	// 	configurable: true
	// }

	// Modifying Object properties
	// Object.defineProperty(person, 'firstName', {writable: false})

	// display(Object.getOwnPropertyDescriptor(person, 'firstName'));
	// OUTPUT
	// Object {
	// 	value: Kevin,
	// 	writable: false,
	// 	enumerable: true,
	// 	configurable: true
	// }

	// Changing the object
	// let person = {
	// 	name: {
	// 		firstName: 'Kevin',
	// 		lastName: 'Fontana'
	// 	},
	// 	age: 32
	// };

	// Object.defineProperty(person, 'name', {writable: false})

	//You can't change the name property but you can change properties on the name property
	// i.e. you can change firstName and lastName
	// To avoid this you can use Object.freeze(person.name) and this will make it and it's properties not writable

	// person.name.firstName = 'Elijah';

	// display(person.name);

	// Enumerable examples
	// let person = {
	// 	firstName: 'Kevin',
	// 	lastName: 'Fontana',
	// 	age: 32
	// };

	// The firstName attribute is no longer Enumerable and therefore does not show up
	// Also effects the keys and serialization of the object
	// Object.defineProperty(person, 'firstName', {enumerable: false});

	// for (let propertyName in person) {
	// 	display(propertyName + ': ' + person[propertyName])
	// };

	// display(Object.keys(person));
	// display(JSON.stringify(person));
	// display(person.firstName);

	// Configurable examples
	// let person = {
	// 	firstName: 'Kevin',
	// 	lastName: 'Fontana',
	// 	age: 32
	// };

	// Object.defineProperty(person, 'firstName', {configurable: false});
	// Object.defineProperty(person, 'firstName', {enumerable: false});
	// OUTPUT Uncaught TypeError: Cannot redefine property: firstName
	// because we set this to unconfigurable
	// Strange behavior but when you change configurable to false, you cannot chagne it back to true again
	// weirder still, if you chagne it back to true and change writable to true it will get rid of the error

	// getters and setters examples
	let person = {
		name: {
			firstName: 'Kevin',
			lastName: 'Fontana'
		},
		age: 32
	};

	Object.defineProperty(person, 'fullName',
	{
		get: function() {
			return this.name.firstName + ' ' + this.name.lastName;
		},
		set: function(value) {
			var nameParts = value.split(' ');
			this.name.firstName = nameParts[0];
			this.name.lastName = nameParts[1];
		}
	});

	person.fullName = 'Fred Jones';

	display(person.fullName);
	display(person.name.firstName);
	display(person.name.lastName);
	
})();