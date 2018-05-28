const mongoose = require("mongoose");
const User = require("../models/user");

function addUser(fname, lname, uname, pass) {
    //Forget about the Position in this part
    const userInfo = { fname, lname, uname, pass }; 
    const user = new User(userInfo);
    console.log("new user added")
    return user.save();
}

function getAllUsers( ) {
    return User.find({}).exec();
}

function findByUserName(username) {
    return user.findOne({ userName:usersname }).exec();
}

function addLocationBlog() {
    const locationBlogInfo = { info, pos: {longitude, latitude }, author};
    const newLocationBlog = new locationBlog(locationBlogInfo);
}   

/*
function likeLocationBlog() {
}

function addJobToUser() {
    //Don’t focus on the jobs unless you have a lot of time
}*/

module.exports = {
    addUser: addUser,
    getAllUsers: getAllUsers,
    findByUserName: findByUserName,
    addLocationBlog: addLocationBlog
}