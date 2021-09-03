const expressValidator = require("express-validator");

const user =(req, res) => {
	res.json({
		status: "OK",
		message: "No users yet",
	})       
}

const addUser= (req, res) => {
    const addUser1 = req.body;
	res.json({
		status: "OK",
		message: "User added ",
        data: addUser1,
	});
    console.log(addUser)
    }

    const a = (req, res) => {
        const userName1= req.params.username;
        res.json({
            status: "OK",
            message: "No usersName yet",
            data: userName1,
        });
    };
module.exports = {
	user: user,
    addUser: addUser,
    a: a,
}