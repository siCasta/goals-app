require('dotenv').config()
const express = require('express')
const createError = require('http-errors')
const path = require('path')
const logger = require('morgan')

const apiRoute = require('./src/routes/index')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/', apiRoute)

app.use((req, res, next) => {
    next(createError(404))
})

app.use((err, req, res, next) => {
    const message = err.message
    const error = process.env.NODE_ENV === 'development' ? err : {}

    res.status(err.status || 500).json({
        message: message,
        status: error?.status,
        stack: error?.stack
    })
})

module.exports = app
