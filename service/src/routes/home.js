import express from 'express'
const os = require('os')

let router = express.Router()

router.route("/")
    .get((req, res) => {
        res.send("hostname: " + os.hostname())
    })

export default router