import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';

const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);


export const createHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

export const isValidPassword = (password, user) => {
    return bcrypt.compareSync(password, user.password)
}

