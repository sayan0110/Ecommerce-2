const express = require('express')
const app = express()
const db = require("./config/mongoose-connection")
const ownersRouter = require("./routes/ownersRouter")
const usersRouter = require("./routes/usersRouter")
const productRouter = require("./routes/productRouter")
const cookieParser = require('cookie-parser')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs")

// app.get('/', (req, res) => {
//     res.render("index")
// })
app.use("/owner",ownersRouter);
app.use("/user",usersRouter);
app.use("/products",productRouter);
app.listen(3000);