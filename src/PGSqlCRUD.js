const express = require('express');
const Sequelize = require('sequelize');
const app = express();

app.use(express.json());

const dbUrl = 'postgres://webadmin:OTOyym22858@node50280-natjira.proen.app.ruk-com.cloud:11570/Books'

const sequelize = new Sequelize(dbUrl);