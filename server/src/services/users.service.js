import UsersDao from "../dao/user.dao.js";

export default class UsersService {
    static findAllUsers(filter = {}) {
        return UsersDao.get(filter);
    }

    static async createUser(payload) {
        console.log('Creando usuario...');
        const user = await UsersDao.create(payload);
        console.log(`Usuario creado correctamente ${user._id} ✅`);
        return user;
    }

    static findUserByid(uid) {
        return UsersDao.getById(uid);
    }

    static async updateUserById(uid, payload) {
        return UsersDao.updateById(uid, payload);
    }

    static async deleteUserById(uid) {
        return UsersDao.deleteById(uid);
    }
}