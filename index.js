const path = require('path')
const express = require('express')
const app =  express()
const indexRouter = require('./routers/index')
const userRouter = require('./routers/users')

app.set('views',path.join(__dirname,'views')) // 设置存放模板文件的目录
app.set('view engine', 'ejs') // 设置模板引擎为ejs

app.use('/',indexRouter)
app.use('/users', userRouter)

app.listen(3000)
