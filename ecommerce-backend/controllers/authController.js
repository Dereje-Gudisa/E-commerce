const User = require('../models/User');

const registerUser = async (req, res) => {
    const { name, email, password, phone } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' })
        }

        const user = await User.create({ 
            name, 
            email, 
            password, 
            phone
        });

        // send a success response
        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
            }
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await User.findOne({ email });
        if(!user){
            return res.status(401).json({message: 'Invalid email or password'})
        }

        if(user.password !== password){
            return res.status(401).json({message: 'Invalid email or password'})
        }

        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone
            }
        });
    } catch (error) {
    res.status(500).json({ message: error.message })
}};

module.exports = { registerUser, loginUser };