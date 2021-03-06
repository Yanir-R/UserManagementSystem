const fastify = require("fastify");
const PORT = process.env.PORT || 3001;
const PRELOAD = process.env.PRELOAD_DATA || false;
const db = require("./config/db");
const fileSystem = require("fs");
const routes = require("./routes/collectionRoutes");
const Users = require("./model/Users");
const app = fastify({
  logger: true,
});

app.register(db);
app.register(require("fastify-cors"), {
  origin: true,
});
routes.forEach((route, index) => {
  app.route(route);
});

const start = async () => {
  try {
    await app.listen(PORT);
    app.log.info(`server listening on ${app.server.address().port}`);

    if (PRELOAD) {
      let data = fileSystem.readFileSync("./data/users.json", "utf8");
      let documents = JSON.parse(data);
      const dataExist = await Users.findOne();
      if (!dataExist) {
        try {
          Users.insertMany(documents);
        } catch (err) {
          console.log(err);
        }
      }
    }
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
