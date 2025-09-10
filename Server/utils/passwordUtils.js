const bcrypt = require('bcrypt');

// Hash a password before storing in database
async function hashPassword(plainPassword) {
    try {
        const saltRounds = 12; //generate salt with 12 rounds
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds); //hash the password
        return hashedPassword; 
    } catch (error) {
        console.error('Error hashing password:', error);
        throw error;
    }
}

// Verify a password against its hash
async function verifyPassword(plainPassword, hashedPassword) {
    try {
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword); //compare the password user sent, and the hashedpassword
        return isMatch;
    } catch (error) {
        console.error('Error verifying password:', error);
        throw error;
    }
}

module.exports = {
    hashPassword,
    verifyPassword
};
