const { Student } = require("../model/studentModel");

const createStudent = async (req, res) => {
    try {
        const { name, email, contactNumber } = req.body;
        const resume = req.file ? req.file.path : ""; // Check if file is uploaded and get its path
        const newStudent = new Student({ name, email, contactNumber, resume });
        await newStudent.save();
        // Include the creation timestamp in the response
        const createdDate = newStudent.createdAt;
        res.status(201).json({
            message: "Student created successfully",
            student: newStudent,
            createdAt: createdDate // Include the created date in the response
        });
    } catch (error) {
        console.error("Error creating student:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
const getallstudentinfo = async (req, res) => {
    try {
        const allStudents = await Student.find(); // Retrieve all student documents from the database
        const studentInfo = allStudents.map(student => ({
            name: student.name,
            contactNumber: student.contactNumber,
            resume: student.resume,
            createdAt: student.createdAt
        }));

        res.status(200).json( studentInfo );
    } catch (error) {
        console.error("Error fetching student information:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { createStudent, getallstudentinfo };
