const fastify = require('fastify');

const PORT = process.env.PORT || 3001;
const db = require("./config/db")
const routes = require("./routes/collectionRoutes")


const app = fastify({
    logger: true
})

app.register(db)
app.register(require('fastify-cors'), { 
    origin: true
  })
routes.forEach((route, index) => {
    app.route(route)
})

const start = async () => {
    try {
        await app.listen(PORT)
        app.log.info(`server listening on ${app.server.address().port}`)

    } catch (err) {
        app.log.error(err)
        process.exit(1)

    }
}
start();