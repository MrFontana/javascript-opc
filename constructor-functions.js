'use strict'; 
(function() {
	// JAVASCRIPT CLASSES
	function Person(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.isAdult = function() {
			return this.age >= 18;
		},
		Object.defineProperty(this, 'fullName', {
			get: function() {
				return this.firstName + ' ' + this.lastName
			},
			set: function(fullName) {
				var nameParts = fullName.split(' ');
				this.firstName = nameParts[0];
				this.lastName = nameParts[1];
			},
			enumerable: true
		});
	}

	function Student(firstName, lastName, age) {
		Person.call(this, firstName, lastName, age);
		this._enrolledCourses = [];

		this.enroll = function(courseId) {
			this._enrolledCourses.push(courseId);
		};

		this.getCourses = function() {
			return this.fullName + "'s enrolled courses are: " +
			this._enrolledCourses.join(', ');
		};
	}
	Student.prototype = Object.create(Person.prototype);
	Student.prototype.constructor = Student;



})();