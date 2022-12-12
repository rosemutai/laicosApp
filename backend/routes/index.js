const express = require("express");
const Authentication = express.Router();

const Login = require("./login");
const Register = require("./signup");
const Profile = require("./profile");

Authentication.use("", Login, Register, Profile);

module.exports = Authentication;