import userModel from "../models/user.model.js";

export default class UsersDao {
    static get(criteria = {}) {
        return userModel.find(criteria);
    }

    static create(data) {
        return userModel.create(data);
    }

    static getById(uid) {
        return userModel.findById(uid);
    }

    static updateById(uid, data) {
        return userModel.updateOne({ _id: uid }, { $set: data });
    }

    static deleteById(uid) {
        return userModel.deleteOne(uid)
    }
}