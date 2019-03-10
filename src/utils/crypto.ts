import * as crypto from 'crypto'
import User from '../user/user.interface';

/**
 * generates random string of characters i.e salt
 * @function
 * @param {number} length - Length of the random string.
 */
function genRandomString(length: number){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
function sha512(string: string, salt: string){
    try {
        const hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
        hash.update(string);
        const value = hash.digest('hex');
        return {
            salt:salt,
            passwordHash:value
        };
        
    } catch (error) {
        throw error;
    }
};

/**
 * Retrun a salted sha512 encrypted password 
 * @function
 * @param {string} userpassword taken from the request body 
 */
export async function saltHashPassword(userpassword: string) {
    try {
        const salt = genRandomString(16); /** Gives us salt of length 8 */
        const passwordData = sha512(userpassword, salt);
        return {
            password:passwordData.passwordHash,
            salt:passwordData.salt
        }

    } catch (error) {
        throw error;
    }
}

/**
 * 
 * @function
 * @param {string} password 
 * @param {User} user 
 */
export async function compare(password:string, user: User){
    try {
        const encrypt = sha512(password,user.salt);
        return user.password == encrypt.passwordHash;
    } catch (error) {
        error.type = 'encrypt';
        error.message = 'Encryption not sucessfull';
        throw error;
    }
}