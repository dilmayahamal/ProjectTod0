import app from './src/app'
import { envConfig } from './src/config/config'
import connectToDb from './src/config/db'
import {Server} from 'socket.io'


// .on --- Client to request data in server [line] & .emit -- Client response to data in server [pathaune]
// todo is event name

function startServer(){
     connectToDb()
    const port = envConfig.port || 4000
    const server = app.listen(port,()=>{
        console.log(`Server has started at port[${port}]`)
    })
    const io = new Server(server)
    io.on("connection",(socket)=>{
       socket.on("todo",(data)=>{ 
       console.log(data)
       socket.emit("response",{
        message : "Data received"
       })
    })
        console.log("Someone connected (client)")
    })
}

startServer()