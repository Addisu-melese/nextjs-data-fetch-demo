const jsonServer=require("json-server/lib/server");
const server=jsonServer.create();
const router=jsonServer.router("db.json");
const middleware=jsonServer.defaults();
server.use(middleware);
server.use((req,res,next)=>{
    console.log("Resquest start");
    res.header("Access-ontrol-Allow-Origin","*");
    res.header(
        "Access-ontrol-Allow-Method",
        "GET,POST,PUT,DELETE,PATCH,OPTIONS"
    );
    res.header(
        "Access-ontrol-Allow-Headers",
        "origin,X-Requested-With,Content-Type,Accept"
    );
    next();
});
server.use(router);
server.listen(3001,()=>{
    console.log("Jeson Server is running");
})