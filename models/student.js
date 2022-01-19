

class StudentModel {
	constructor() {
		this.initialize();
	}


	initialize() {
		this.studentList = 
			[
				{ id: 1, name: 'Chris Gammill', class: 'Junior', major: 'Engineering' },
				{ id: 2, name: 'Amy Zion', class: 'Junior', major: 'Computer Science' },
				{ id: 3, name: 'Kenneth Findley', class: 'Senior', major: 'Computer Science' },
				{ id: 4, name: 'Jason Kastounis', class: 'Senior', major: 'Computer Science' },
				
			];
	}

	getAllStudents() {
		return this.studentList;
	}

	getStudentById(id) {

		return this.studentList.find(id => {
			return id == id
		})
	}

	deleteStudentById(studentId) {
		this.studentList = this.studentList.filter(function(student){return student.id != studentId});
	}
	


}

module.exports = StudentModel;