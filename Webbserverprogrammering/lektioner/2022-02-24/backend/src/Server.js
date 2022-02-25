import express from 'express'
import Configuration from "./configurations/Configuration.js";
import ApplyMiddlewares from "./configurations/ApplyMiddlewares.js";
import AliveRouts from "./routes/AliveRouts.js";
import UserRotes from "./routes/UserRotes.js";

// Initiate ExpressAPP
const app = express()
ApplyMiddlewares(app)

AliveRouts.routes(app)
UserRotes.routes(app)

//Start Server
Configuration.connectToPort(app)