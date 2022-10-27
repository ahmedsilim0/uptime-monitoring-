#  [NodeJS Uptime Monitoring ](#)
> This app Performs to allows users to view and bid on pets.

# Setting things #

To get the Node server running:
- `Download Node.js` [here](https://nodejs.org/en/download/)
- `npm install` to install all required dependencies
-  Use MongoDb cloud 
- for your .env
    - MONGO_DB_URI="your mongodb link"
    - PORT=2022 "or any port you want"
 
 # Project Overview
- `index.js` - The entry point to the application.
- `startups` - Contain all files that we need to start with (mongoconnectino , all routes ,...).
- `routes` - Folder contains seperate apis.
- `contorllers` - Folder that have all connections between routes and servcies .
- `services` - This folder contains main core functions.
- `models` - This folder contains the data models (mysql model - mongodb model)
- `middleware` - This folder contains all authorizations.
- `validators` - This folder contains validation for the api to check data first in routing  before inserting or working with the db using service .
- `utils` - This folder contians all reusable (funcitons - constant)
- `helper` - Folder created for only helping me to create so users and pets

## Dependencies

```json
[
   "express", "body-parser", "joi", "custom-env","mongoose", "nodemon"
]
```
