const fastifyPlugin = require('fastify-plugin')
const mongoose = require('mongoose')

// Connect to DB
async function dbConnector(fastify, options) {
    try {
        const url = "mongodb://localhost:27017/projectz"
        const db = await mongoose
            .connect(url, {
                useNewUrlParser: true
            })
        console.log("Database is connected")
        fastify.decorate('mongo', db)
    } catch (err) {
        console.log(err)
    }
async function writeData (data, msgData ){
    db.collection('usersSiteList').insert(data, (error, record)=>{
        if (error) {throw error}
        console.log('data saved successfully')
    })

}
}
module.exports = fastifyPlugin(dbConnector)