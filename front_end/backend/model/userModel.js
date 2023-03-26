const mongoose = require('mongoose');
const validator = require('validate');
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'name is required '],
        maxLength: [30, 'name can extend from 30 charactors'],
        minLength: 4
    },
    email: {
        type: String,
        required: [true, 'please enter email'],
        unique: true,
      //  validate: [validator.isEmail, 'enter valid email']
    },
    password: {
        type: String,
        maxLength: [15, 'password can not go 1 charactors'],
        select: false,
        required: true
    },
    role:{
        type :String,
        enum : ['vistor','admain'],
        default:"vistor"
    }

});

// password hashing 
userSchema.pre("save", async function (next) {

    if (!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);
});

// compair password to login new user

userSchema.methods.comparePassword = async function (enterdPassword) {
    return await bcrypt.compare(enterdPassword, this.password)

}
// JWT TOKEN
userSchema.methods.getJWTToken =  ()=> {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET||"vndsnsdnfndifsdcfis",{ expiresIn: String("8h"),});
  };
  
//{
//    expiresIn: process.env.COOKIE_EXPIRE||5000,

module.exports = mongoose.model('user', userSchema);