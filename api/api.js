var express = require('express');
var router = express.Router();


// Require controller modules.
var student_controller = require('../controllers/studentController');




/// STUDENT ROUTES ///


// GET request for one student.
router.get('/student/:id', student_controller.student_detail);

// GET request for list of all student items.
router.get('/students', student_controller.student_list);


// GET request for list of all student items.
router.delete('/student/:id', student_controller.student_delete);



/*

// GET request for creating a student. NOTE This must come before routes that display student (uses id).
router.get('/student/create', student_controller.student_create_get);

// POST request for creating student.
router.post('/student/create', student_controller.student_create_post);

// GET request to delete student.
router.get('/student/:id/delete', student_controller.student_delete_get);

// POST request to delete student.
router.post('/student/:id/delete', student_controller.student_delete_post);

// GET request to update student.
router.get('/student/:id/update', student_controller.student_update_get);

// POST request to update student.
router.post('/student/:id/update', student_controller.student_update_post);


*/





module.exports = router;