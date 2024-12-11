const jsonServer = require('json-server')

const healthManagementServer = jsonServer.create()

const middleware = jsonServer.defaults()

const router = jsonServer.router('db.json')

healthManagementServer.use(middleware)

healthManagementServer.use(router)

const PORT = 4000 || process.env.PORT

healthManagementServer.listen(PORT,()=>{
    console.log(`Server running successsfully at port number ${PORT}`);
    
})