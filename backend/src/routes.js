const { Router } = require("express");

const UserController = require("./controllers/UserController");

const SessionController = require("./controllers/SessionController");
const QuoteController = require("./controllers/QuoteController");

const authMinddleWare = require("./middlewares/auth");

const CommerceController = require("./controllers/CommerceController");

const routes = Router();

routes.post("/session", SessionController.store);
routes.get("/user/:email", UserController.index);
routes.post("/user", UserController.store);
routes.get("/user", UserController.list);
routes.use(authMinddleWare);
routes.post("/commerce", CommerceController.store);
routes.get("/commerce", CommerceController.list);
routes.post("/quote", QuoteController.store);
routes.get("/quote/:id", QuoteController.index);
routes.get("/quote", QuoteController.list);
routes.get("/quote/:id", QuoteController.update);
routes.delete("/quote/:id", QuoteController.destroy);
routes.get("/commerce/:name", CommerceController.index);
routes.put("/user/:id", UserController.update);
routes.put("/commerce/:id", CommerceController.update);
routes.delete("/user/:id", UserController.destroy);
routes.delete("/commerce/:id", CommerceController.destroy);

module.exports = routes;
