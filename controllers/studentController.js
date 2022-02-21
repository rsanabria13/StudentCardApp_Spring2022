var StudentModel = require('../models/student');
studentModel = new StudentModel();


const path = require("path");


// Display list of all students.
exports.student_list = function(req, res) {
	students = studentModel.getAllStudents();
	res.send(students);	
};

// Display detail page for a specific student.
exports.student_detail = function(req, res) {
	student = studentModel.getStudentById(req.params.id);
	res.send(student);
};

// Delete a specific student.
exports.student_delete = function(req, res) {
	studentModel.deleteStudentById(req.params.id);
	result = {result:'success'}
    res.send(result);
};



//NOT IMPLEMENTED

// Display student create form on GET.
exports.student_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: student create GET');
};

// Handle student create on POST.
exports.student_create_post = function(req, res) {
    //if the data is JSON, access the data using req.body.<field> ie. req.body.name
    console.log(req.body);
    res.send('NOT IMPLEMENTED: student create POST');
};

// Display student delete form on GET.
exports.student_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: student delete GET');
};

// Handle student delete on POST.
exports.student_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: student delete POST');
};

// Display student update form on GET.
exports.student_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: student update GET');
};

// Handle student update on POST.
exports.student_update_post = function(req, res) {
    student = this.studentModel.updateStudent(req.params.id, req.params.body);
    result = {result : 'success'}
    res.send(result);
};