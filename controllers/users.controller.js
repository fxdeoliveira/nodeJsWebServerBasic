const { response, request } = require('express');
const bcyptjs = require('bcryptjs');
const User = require('../models/user');
const { validationResult } = require('express-validator');

const usersGet = async(req = request, res = response) => {

    const {q, name = 'Not name'} = req.query;

    const  users = await User.find();

    res.json({
        users
    })
}

const usersPut = async(req, res = response) => {

    const id = req.params.id; 
    const {_id, password, google, email, ...rest} = req.body;

    if(password){
        const salt = bcyptjs.genSaltSync();
        rest.password = bcyptjs.hashSync(password, salt);  
    }

    const user = await User.findByIdAndUpdate(id, rest);

    res.json({
        ok: 'put= controller',
        user
    })
}

const usersPost = async(req, res = response) => {

  
    const {name, password, email, role} =  req.body;
    const user = new User({name, password, email, role});
    
    const emailExist = await User.findOne({email});
    if(emailExist){
        return res.status(400).json({
            msg: 'Ese correo esta en uso'
        })
    }

    const salt = bcyptjs.genSaltSync();
    user.password = bcyptjs.hashSync(password, salt);


    await user.save();

    res.json(user);
}

const usersPatch = (req, res = response) => {
    res.json({
        ok: 'patch= controller',
        number: '1'
    })
}

const usersDelete = (req, res = response) => {
    res.json({
        ok: 'delete= controller',
        number: '1'
    })
}


module.exports = {
    usersGet,
    usersDelete,
    usersPatch,
    usersPost,
    usersPut
}