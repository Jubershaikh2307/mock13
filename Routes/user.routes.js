const express = require('express');
const { userModel } = require('../Models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = express()

User.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await userModel.findOne({ email })
        const verified = bcrypt.compareSync(password, user.password);
        if(verified){
            const token=await jwt.sign({email},"secret");
            return res.send({token:token,responce:1,role:user.role})
        }else{
            return res.send("Check Username and Password");
        }
    } catch (error) {
        return res.send("Check Username and Password");
    }
})

User.post("/signup", async (req, res) => {
    const { fullname, email, password} = req.body
    try {
        let role=""
        if(email.includes("@masaischool.com")){
            role="admin"
        }else{
            role="user"
        }
        const passwordHash = bcrypt.hashSync(password, 10);
        const new_user = new userModel({
            fullname,
            email,
            password:passwordHash,
            role
        })
        console.log(new_user);
        await new_user.save()
        return res.send({responce:1,status:"pass"})
    } catch (error) {
        return res.send(err)
    }
})

User.post("/signup", async (req, res) => {
    const { fullname, email, password} = req.body
    try {
        let role=""
        if(email.includes("@masaischool.com")){
            role="admin"
        }else{
            role="user"
        }
        const passwordHash = bcrypt.hashSync(password, 10);
        const new_user = new userModel({
            fullname,
            email,
            password:passwordHash,
            role
        })
        console.log(new_user);
        await new_user.save()
        return res.send({responce:1,status:"pass"})
    } catch (error) {
        return res.send(err)
    }
})



module.exports = { User }