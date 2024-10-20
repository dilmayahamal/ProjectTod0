import app from './src/app'
import { envConfig } from './src/config/config'
import connectToDb from './src/config/db'
import {Server} from 'socket.io'


function startServer(){
     connectToDb()
    const port = envConfig.port || 4000
    const server = app.listen(port,()=>{
        console.log(`Server has started at port[${port}]`)
    })
    const io = new Server(server)
    io.on("connection",(socket)=>{
       socket.emit("message",{
        name : "Dilmaya Hamal"
       })
        console.log("Someone connected (client)")
    })
    
}

startServer()