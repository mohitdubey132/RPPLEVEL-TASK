const app = require('./app')
const {createDatabase} = require('./config/database')
const jwt = require('jsonwebtoken')
createDatabase();
/*
const server = app.listen(process.env.PORT,()=>{
    console.log(`server is listening on port ${process.env.PORT}`)
   // console.log(typeof process.env.JWT_SECRET)
});
*/
const server = app.listen(4000,()=>{
    console.log('server is listening on 4000')
});
demo= jwt.sign({ id: "thfhdyf" }, process.env.JWT_SECRET||"vndsnsdnfndifsdcfis",{ expiresIn: String("8h"),});
console.log(demo)
process.on('unhandledRejection',()=>{
    console.log("unhandledRejectionerror")
    console.log("shouting down the server ")
    server.close(()=>{
          process.exit(1);
      });
});