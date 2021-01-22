const express = require("express")
const peopleRouter = require("./people/people-router")

const server = express()

server.use(express.json())

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong"
    })
})