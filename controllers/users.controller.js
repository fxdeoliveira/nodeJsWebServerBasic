const { response } = require('express');

const usersGet = (req, res = response) => {

    const params = req.query;

    res.json({
        ok: 'get= controller',
        number: '1',
        query
    })
}

const usersPut = (req, res = response) => {

    const id = req.params.id;
    res.json({
        ok: 'put= controller',
        number: '1',
        id
    })
}

const usersPost = (req, res = response) => {
    const body =  req.body;

    res.json({
        ok: 'post= controller',
        number: '1',
        body
    })
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