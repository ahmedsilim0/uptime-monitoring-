#  [NodeJS Uptime Monitoring ](#)
> This app Performs to allows authorized users to enter URLs they want monitored, and get detailed uptime reports about their availability, average response time, and total uptime/downtime.

# Setting things #

To get the Node server running:
- `Download Node.js` [here](https://nodejs.org/en/download/)
- `npm install` to install all required dependencies
- Install MongoDB [instructions](https://docs.mongodb.com/manual/installation/#tutorials)
- for your .env file
  -DB_CONNECT= your db link
  -TOKEN_SECRET= your secret token
 
 # Project Overview
- `app.js` - The entry point to the application. This file defines our express server, requires the routers and some middlewares.
- `validation` - to validate the user accounts.
- `verfiyToken` -to verfiy user's token .
- `routes/` - Folder contains the route definitions for the app.
- `controllers/` - This folder contains main controllers.
- `public/` - This folder contains main styles .
- `models/` - This folder contains the data models.

## Dependencies

```json
[
    "dotenv", "express", "express-jwt", "joi", "jsonwebtoken","ping-monitor", "md5", "mongodb", "morgan", "path" ,"cookie-parser"
]
```
- [express](https://github.com/expressjs/express) - The server for handling and routing requests
- [mongodb](https://www.npmjs.com/package/mongodb) - The official MongoDB driver for Node.js. 
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
- [ping-monitor](https://www.npmjs.com/package/ping-monitor) -An uptime event emitter for http and tcp servers.
- [express-jwt](https://github.com/auth0/express-jwt) - Middleware for validating JWTs for authentication
- [Joi](https://github.com/sideway/joi) - A schema description language and data validator for JS.
- [dotenv](https://github.com/motdotla/dotenv) - A module to load environment variables from a .env file into process.env
- [morgan](https://github.com/expressjs/morgan#readme) - Request logger middleware
- [path](https://www.npmjs.com/package/path) - This is an exact copy of the NodeJS ’path’ module published to the NPM registry.
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
