'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _models = require('../model/models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route("/").get(function (req, res) {
    _models.User.findAll().then(function (users) {
        res.status(200).json(users).send();
    });
}).post(function (req, res) {
    _models.User.create(req.body).then(function (user) {
        res.status(201).json(user).send();
    }).catch(function (e) {
        res.status(400).json({ error: "preencha o campo nome" });
    });
});

exports.default = router;