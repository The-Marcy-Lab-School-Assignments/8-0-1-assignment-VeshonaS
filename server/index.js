const express = require('express')
const path = require('path')

const app = express()
const pathToDist =  path.join(__dirname, '../vite-project/dist')
const serveStatic = express.static(pathToDist)

const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next(); // Passes the request to the next middleware/controller
};


app.use(logRoutes)
app.use(serveStatic)

const PORT = 8080
app.listen(PORT , () =>{
  console.log(`server running on http://localhost:${PORT}`)
})