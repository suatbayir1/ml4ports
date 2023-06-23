# Getting Started with ML4PORT UI

### Install Dependencies

To download the libraries used in the ui project, the `yarn install` command should be run.

### Set config file

Before starting the ui, a file named `.env` should be created under the `src` folder and the variable information that appears below should be set.

```
# Server Variables
NEXT_PUBLIC_JWT_EXPIRATION= 5m
NEXT_PUBLIC_JWT_SECRET= dd5f3089-40c3-403d-af14-d0c228b05cb4
NEXT_PUBLIC_JWT_REFRESH_TOKEN_SECRET= 7c4c1c50-3230-45bf-9eae-c9b2e401c767
NEXT_PUBLIC_API_URL = http://localhost:5000/api
NEXT_PUBLIC_API_MODELS_URL = http://localhost:5000/models
```

### Start API

To start the ui, `yarn dev` command must be run in the root directory. After running the command the following output should be obtained.

```
info  - automatically enabled Fast Refresh for 1 custom loader
event - compiled client and server successfully in 4.7s (1708 modules)
wait  - compiling / (client and server)...
event - compiled client and server successfully in 585 ms (1711 modules)
wait  - compiling /dashboards/crm...
event - compiled client and server successfully in 998 ms (1796 modules)
```
