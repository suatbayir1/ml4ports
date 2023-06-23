# Getting Started with ML4PORT API

### Install Dependencies

To download the libraries used in the API project, the `npm install` command should be run.

### Set config file

Before starting the API, a file named `config.env` should be created under the `server/config/env` folder and the variable information that appears below should be set.

```
# Server Variables
# Server Variables
PORT = 5000
NODE_ENV = development

# MongoDB URI
MONGO_URI = mongodb://127.0.0.1:27017/smart_ports

# JSON Web Token
JWT_SECRET_KEY = <YOUR-JWT-SECRET-KEY>
JWT_EXPIRE = <YOUR-JWT-EXPIRE-TIME>

# Cookie
JWT_COOKIE = <YOUR-JWT-COOKIE>

# REDIS
REDIS_CACHE_EXPIRE_TIME = 60000
```

### Start API

To start the API, `npm install` command must be run in the root directory. After running the command the following output should be obtained.

```
> server@1.0.0 start
> nodemon server.js

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Redis Client Connected!
App started on 5000 : development
mongodb connection successful
Connected to MSSQL
```
