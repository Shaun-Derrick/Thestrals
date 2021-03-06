var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")

//to import routes
var indexRouter = require("./routes/index")
var usersRouter = require("./routes/users")
var tagsRouter = require("./routes/tags")

// to call the express function
var app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "jade")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// app.use(express.static(path.join(__dirname, 'public'))); Changed to build for deployment
app.use(express.static(path.join(__dirname, "../client/build")))

//only requests to / will be sent to "indexRouter"
app.use("/", indexRouter)

//only requests to /users will be sent to "usersRouter"
app.use("/Fuzes", usersRouter)

//only requests to /Tags will be sent to "tagsRouter"
app.use("/Tags", tagsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

module.exports = app
