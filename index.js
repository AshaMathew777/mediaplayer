//1) import json server library
const jsonServer = require('json-server')


//2)create path for db.json file using router function  - for storing data
const router=jsonServer.router("db.json")

//3)create middle ware to convert json to js - defaults()
const middleware = jsonServer.defaults()


//4)create json server
const mediaPlayerserver = jsonServer.create()

//5)server should use middleware and router
mediaPlayerserver.use(middleware)
mediaPlayerserver.use(router)

//6)set port for server
 const PORT = 3000 || process.env.PORT


//7)run server
mediaPlayerserver.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
}) 