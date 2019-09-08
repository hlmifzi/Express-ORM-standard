import http from "http"
import config from "./config"
import app from "./app"

// server listen
http.createServer(app).listen(config.port, () => {
    console.log(`Server started on port ${config.port}`)
})