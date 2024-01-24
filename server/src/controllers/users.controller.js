import UsersService from "../services/users.service.js";

export default class UsersController {

    static async create(data) {
        console.log('Creando usuario...');
        const newUser = await UsersService.createUser(data);
        console.log('Usuario creado correctamente ✅');
        return newUser;
    }

    static async get(query = {}) {
        console.log('Buscando usuarios...');
        const users = await UsersService.findAllUsers(query);
        console.log('Usuarios encontrados ✅');
        return users;
    }

    static async getById(uid) {
        console.log('Buscando usuario...');
        const user = await UsersService.findUserByid(uid);
        console.log('Usuario encontrado ✅');
        return user;
    }

    static async updateById(uid, data) {
        console.log('Actualizando usuario...');
        await UsersService.updateUserById({ _id: uid }, { $set: data });
        console.log('Usuario actualizado ✅');
    }

    static async deleteById(uid) {
        console.log('Eliminando usuario...');
        await UsersService.deleteUserById({ _id: uid });
        console.log('Usuario eliminado ✅');
    }
}