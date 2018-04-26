import express from 'express'
import {User} from '../model/models'

let router = express.Router()

router.route("/")
    .get((req, res) => {
        User.findAll().then(users => {
            res.status(200).json(users).send()
        })
    })

    .post((req, res) => {
        User.create(req.body).then(user => {
            res.status(201).json(user).send()
        }).catch(e => {
            res.status(400).json({error: "preencha o campo nome"})
        })
    })

export default router