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

	// OBJECT LITERAL FUNCTION DECLARATION SHORT HAND
	// let person = {
	// 	firstName: 'Kevin',
	// 	lastName: 'Fontana',
	// 	age: 32,
	// 	isAdult() {
	// 		return this.age >= 18;
	// 	}
	// };

	// display(person.isAdult());

	// LOOKING INTO THE BUILT IN JAVASCRIPT 'OBJECT' FUNCTIONALITY
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

	// // NOT EQUAL BECAUSE OBJECTS COMPARE THEIR POSITION IN MEMORY, NOT THE VALUES CONTAINED WITHIN THE OBJECTS
	// display(person1 === person2)

	// let healthStats = {
	// 	height: 68,
	// 	weight: 150
	// };
	
	// MERGE HEALTHSTATS INTO PERSON OBJECT
	// Object.assign(person, healthStats);

	// FUNCTION TO MERGE THE PARAMETERS THAT ALSO MUTATES THE ORIGINAL OBJECT
	// function mergeHealthStats(person, healthStats) {
	// 	return Object.assign(person, healthStats);
	// }

	// FUNCTION TO MERGE THE PARAMETERS THAT DOES NOT MUTATE THE ORIGINAL OBJECT.
	// BUT INSTAEAD CREATES A NEW OBJECT TO BE MERGED INTO
	// function mergeHealthStats(person, healthStats) {
	// 	return Object.assign({}, person, healthStats);
	// };

	// let mergedPerson = mergeHealthStats(person, healthStats);

	// // THERE IS AN UNINTEDED CONSEQUENCE WHEN USING OBJECT.ASSIGN IN THIS WAY. 
	// // OBJECT MUTATION OCCURS AND MUTATES THE ORIGINAL OBJECT
	// display(mergedPerson);
	// display(person);

	// SUPERFLUOUS OBJECT CREATION WHICH CAN BE NEGATED WITH CONSTRUCTOR FUNCTIONS
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

	// MODIFYING OBJECT PROPERTIES
	// Object.defineProperty(person, 'firstName', {writable: false})

	// display(Object.getOwnPropertyDescriptor(person, 'firstName'));
	// OUTPUT
	// Object {
	// 	value: Kevin,
	// 	writable: false,
	// 	enumerable: true,
	// 	configurable: true
	// }

	// CHANGING THE OBJECT
	// let person = {
	// 	name: {
	// 		firstName: 'Kevin',
	// 		lastName: 'Fontana'
	// 	},
	// 	age: 32
	// };

	// Object.defineProperty(person, 'name', {writable: false})

	// YOU CAN'T CHANGE THE NAME PROPERTY BUT YOU CAN CHANGE PROPERTIES ON THE NAME PROPERTY
	// I.E. YOU CAN CHANGE FIRSTNAME AND LASTNAME
	// TO AVOID THIS YOU CAN USE OBJECT.FREEZE(PERSON.NAME) AND THIS WILL MAKE IT AND IT'S PROPERTIES NOT WRITABLE

	// person.name.firstName = 'Elijah';

	// display(person.name);

	// ENUMERABLE EXAMPLES
	// let person = {
	// 	firstName: 'Kevin',
	// 	lastName: 'Fontana',
	// 	age: 32
	// };

	// THE FIRSTNAME ATTRIBUTE IS NO LONGER ENUMERABLE AND THEREFORE DOES NOT SHOW UP
	// ALSO EFFECTS THE KEYS AND SERIALIZATION OF THE OBJECT
	// Object.defineProperty(person, 'firstName', {enumerable: false});

	// for (let propertyName in person) {
	// 	display(propertyName + ': ' + person[propertyName])
	// };

	// display(Object.keys(person));
	// display(JSON.stringify(person));
	// display(person.firstName);

	// CONFIGURABLE EXAMPLES
	// let person = {
	// 	firstName: 'Kevin',
	// 	lastName: 'Fontana',
	// 	age: 32
	// };

	// Object.defineProperty(person, 'firstName', {configurable: false});
	// Object.defineProperty(person, 'firstName', {enumerable: false});
	// OUTPUT Uncaught TypeError: Cannot redefine property: firstName
	// BECAUSE WE SET THIS TO UNCONFIGURABLE
	// STRANGE BEHAVIOR BUT WHEN YOU CHANGE CONFIGURABLE TO FALSE, YOU CANNOT CHAGNE IT BACK TO TRUE AGAIN
	// WEIRDER STILL, IF YOU CHAGNE IT BACK TO TRUE AND CHANGE WRITABLE TO TRUE IT WILL GET RID OF THE ERROR

	// GETTERS AND SETTERS EXAMPLES
	// let person = {
	// 	name: {
	// 		firstName: 'Kevin',
	// 		lastName: 'Fontana'
	// 	},
	// 	age: 32
	// };

	// Object.defineProperty(person, 'fullName',
	// {
	// 	get: function() {
	// 		return this.name.firstName + ' ' + this.name.lastName;
	// 	},
	// 	set: function(value) {
	// 		var nameParts = value.split(' ');
	// 		this.name.firstName = nameParts[0];
	// 		this.name.lastName = nameParts[1];
	// 	}
	// });

	// person.fullName = 'Fred Jones';

	// display(person.fullName);
	// display(person.name.firstName);
	// display(person.name.lastName);

	// PROTOTYPES
	// let myFunction = function() { };
	// display(myFunction.prototype);
	// OUTPUT:
	// myFunction {
	// }

	// let person = {firstName: 'Kevin'};
	// display(person.prototype);
	// OUTPUT:
	// undefined

	// display(person.__proto__);
	// OUTPUT:
	// Object {
	// }

	// A FUNCTIONS PROTOTYPE DEFINITION
	// A FUNCTIONS PROROTYPE IS THE OBJECT INSTANCE THAT WILL BECOME THE PRORTYPE FOR ALL OBJECTS CREATED USING 
	// THIS FUNCTION AS A CONSTRUCTOR.

	// AN OBJECTS PROTOTYPE DEFINITION
	// AN OBJECTS PROTOTYPE IS THE OBJECT INSTANCE FROM WHICH THE OBJECT IS IS INHERITED

	// EACH INSTANCE IS TIED TO THE ORIGINAL OBJECT

	// function Person(firstName, lastName) {
	// 	this.firstName = firstName;
	// 	this.lastName = lastName;
	// }

	// display(Person.prototype);
	// // OUTPUT:
	// // Person { }

	// let kevin = new Person('Kevin', 'Fontana');

	// display(kevin.__proto__);
	// // OUTPUT:
	// // Person { }

	// display(Person.prototype === kevin.__proto__);
	// // OUTPUT: TRUE
	// // MIND BLOWING, IF TWO OBJECTS ARE EQUAL IT IS BECAUSE THEY ARE ACTUALLY THE SAME OBJECT INSTANCE IN MEMORY

	// // PROOF OF THE OBJECT BEING THE SAME IN MEMORY
	// Person.prototype.age = 32;

	// display(kevin.__proto__);
	// display(Person.prototype === kevin.__proto__);
	// // OUTPUT NOW SHOWS AGE: 32 ON EACH OUTPUT

	// let elijah = new Person('Elijah', 'Fontana');
	// elijah.__proto__.age = 9;
	// // ALL INSTANCES NOW OUTPUT AGE: 9

	// function Person(firstName, lastName) {
	// 	this.firstName = firstName;
	// 	this.lastName = lastName;
	// }

	// Person.prototype.age = 32;

	// let kevin = new Person('Kevin', 'Fontana');
	// let elijah = new Person('Elijah', 'Fontana');

	// // SET TO SHOW BELOW EXAMPLE
	// // elijah.age = 9

	// // display(kevin.age);

	// // PROTO STILL HAS ACCESS TO ORIGINAL VALUE
	// // JS LOOKS AT OBJECT TO SEE IF IT HAS A VALUE, IF NONE IS FOUND IT ASKS PROTOTYPE FOR A VALUE
	// // display(elijah.age); // 9
	// // display(elijah.__proto__.age); // 32

	// display(kevin.hasOwnProperty('age')); // HASOWNPROPERTY WILL LOOK AT THE OBJECT AND SEE IF IT HAS THIS PROPERTY ON THE OBJECT ITSELF
	// display(kevin.age); // OUTPUTS PROTOTYPE AGE OF 32
	
	// // ADDING ACTUAL AGE TO THIS OBJECT
	// kevin.age = 19;
	// display(kevin.age); // OUTPUTS PROTOTYPE AGE OF 32

	// function Person(firstName, lastName) {
	// 	this.firstName = firstName;
	// 	this.lastName = lastName;
	// };

	// Person.prototype.age = 29;

	// var kevin = new Person('Kevin', 'Fontana');
	// var elijah = new Person('Elijah', 'Fontana');

	// // SET NEW OBJECT WITH AGE PROPERTY
	// // THIS DOESN'T CHANGE THE TWO OBJECTS BELOW BUT IT DOES CHANGE THE PERSON.PROTOTYPE 
	// // AND THEREFORE ANY NEWLY CREATED OBJECTS AFTER THIS CHANGE
	// Person.prototype = { age: 18 };

	// var jacob = new Person('Jacob', 'Fontana');

	// display(kevin.age);
	// display(elijah.age);
	// display(Person.prototype);
	// // OUTPUT:
	// // Object {
	// // 	age: 18
	// // }
	// display(jacob.age); // this was created after the change to the Person.prototype and will reflect the new age

	// // OBJECT INHERITANCE
	// function Person(firstName, lastName) {
	// 	this.firstName = firstName;
	// 	this.lastName = lastName;
	// };

	// Person.prototype.age = 4;

	// let kevin = new Person('Kevin', 'Fontana');

	// // PROTOTYPE CHAIN
	// // BY DEFAULT: ALL OBJECTS IN JAVASCRIPT INHERIT FROM OBJECT AND OBJECT HAS NO PROTOTYPE
	// display(kevin.__proto__); // Person { age: 4 }
	// display(kevin.__proto__.__proto__); // Object { }
	// display(kevin.__proto__.__proto__.__proto__); // Null

	// MORE MEANINGFUL INHERITANCE CHAIN EXAMPLE
	// function Person(firstName, lastName, age) {
	// 	this.firstName = firstName;
	// 	this.lastName = lastName;
	// 	this.age = age;
	// 	Object.defineProperty(this, 'fullName', {
	// 		get: function() {
	// 			return this.firstName + ' ' + this.lastName
	// 		},
	// 		enumerable: true
	// 	});
	// }

	// EXAMPLE: STUDENT ENROLLMENT

	// STUDENT CONSTRUCTOR FUNCTION QITH ENROLLED COURSES PROPERTY
	// function Student(firstName, lastName, age) {
	// 	Person.call(this, firstName, lastName, age);
	// 	this._enrolledCourses = [];

	// 	this.enroll = function(courseId) {
	// 		this._enrolledCourses.push(courseId);
	// 	};

	// 	this.getCourses = function() {
	// 		return this.fullName + "'s enrolled courses are: " +
	// 		this._enrolledCourses.join(', ');
	// 	};
	// }
	// Student.prototype = Object.create(Person.prototype);
	// Student.prototype.constructor = Student;

	// let kevin = new Student('Kevin', 'Fontana', 32);

	// kevin.enroll('CS205');
	// kevin.enroll('MA101');
	// kevin.enroll('PS101');
	// PROTOTYPE CHAIN
	// display(kevin); // OUTPUT: ( Not displaying the Person properties before addin them to the Student constructor )
	// Student {
	// 	_enrolledCourses:
	// 	enroll: function(courseId) { this._enrolledCourses.push(courseId); }
	// 	getCourses: function() { }
	// }

	// AFTER ADDING PERSON.CALL TO STUDENT CONSTRUCTOR
	// Student {
	// 	firstName: Kevin
	// 	lastName: Fontana
	// 	age: 32
	// 	fullName: Kevin Fontana
	// 	_enrolledCourses:
	// 	enroll: function(courseId) { this._enrolledCourses.push(courseId); }
	// 	getCourses: function() { }
	// }
	// display(kevin.__proto__); // Student { } 
	// display(kevin.__proto__.__proto__); // Person { }
	// display(kevin.getCourses());

	// JAVASCRIPT CLASS VERSION OF THE ABOVE CODE

	class Person {
		constructor(firstName, lastName, age) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.age = age;
		}

		// STATIC PROPERTY EXAMPLE
		static adultAge = 18;

		get fullName() {
			return this.firstName + ' ' + this.lastName
		}
		set fullName(fullName) {
			var nameParts = fullName.split(' ');
			this.firstName = nameParts[0];
			this.lastName = nameParts[1];
		}

		isAdult() {
			return this.age >= 18;
		}
	};

	// STATIC EXAMPLE OUTPUT
	display(Person.adultAge);

	class Student extends Person {
		constructor(firstName, lastName, age) {
			super(firstName, lastName, age);
			this._enrolledCourses = [];
		}

		// STATIC FUNCTION EXAMPLE
		static fromPerson(person) {
			return new Student(person.firstName, person.lastName, person.age);
		}

		enroll(courseId) {
			this._enrolledCourses.push(courseId);
		}

		getCourses() {
			return this.fullName + "'s enrolled courses are: " +
			this._enrolledCourses.join(', ');
		}
	};

	let kevin = new Person('Kevin', 'Fontana', 32);
	
	// EXAMPLE OF USING A STATIC FUNCTION
	let kevinStudent = Student.fromPerson(kevin);

	display(kevinStudent);

})();