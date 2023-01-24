const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jobModal } = require('../Models/admin.model');

const Job = express()

Job.post("/add", async (req, res) => {
    // name:String,
    // position:String,
    // contract:Number,
    // location:String
    const { name, position, contract,location} = req.body
    // console.log(name,position,contract,location);
    let new_form =new jobModal({
        name,
        position,
        location,
        contract
    })
    await new_form.save()
    // console.log(new_form);
})

Job.get("/get",async (req,res)=>{
    let arr= await jobModal.find()
    res.send(arr)
})

module.exports = { Job }