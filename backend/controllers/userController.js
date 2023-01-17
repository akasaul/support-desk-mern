//@desc register a new user
// @route /api/users
// @access Public 

const registerUser = (req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password) {
        res.status(400);
        throw new Error('Please Include all the fields')
    }

    res.send('Register Route')  
};

//@desc Login a user
// @route /api/users/login  
// @access Public 
const loginUser = (req, res) => {
    res.send('Login Route');
}

module.exports = {
    registerUser,
    loginUser
}