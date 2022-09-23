const express = require("express");
const app = express();

//API's operations: CRUD (Create, Read, Update, Delete)
//HTTP METHOD: GET, POST, PUT, PATCH, DELETE

//GET endpoint: /api/getStudent
app.get("/api/getStudent", (req, res) => {
	const students = ["Khang", "Khai", "Minh"];

	res.json(students);
});

//PORT: 3000, 3001, 3002, 3003, 5001, 8080, 8081
app.listen(3000 || process.env.PORT, () => {
	console.log("Running");
});
