// const path = require('path')
// const express = require('express')
// const app =  express()
// const indexRouter = require('./routers/index')
// const userRouter = require('./routers/users')

// app.set('views',path.join(__dirname,'views')) // 设置存放模板文件的目录
// app.set('view engine', 'ejs') // 设置模板引擎为ejs

// app.use('/',indexRouter)
// app.use('/users', userRouter)

// app.listen(3000)
/* 
express 中的中间件（middleware）就是用来处理请求的，当一个中间件处理完，可以通过调用 next() 传递给下一个中间件，
如果没有调用 next()，则请求不会往下传递，如内置的 res.render 其实就是渲染完 html 直接返回给客户端，
没有调用 next()，从而没有传递给下一个中间件。

通过 app.use 加载中间件，在中间件中通过 next 将请求传递到下一个中间件，next 可接受一个参数接收错误信息，
如果使用了 next(error)，则会返回错误而不会传递到下一个中间件，
*/
// const express = require('express')
// const app = express()

// app.use(function (req, res, next) {
//   console.log('1')
//   next(new Error('haha'))
// })

// app.use(function (req, res, next) {
//   console.log('2')
//   res.status(200).end()
// })

// app.listen(3000)
/*
  上面的例子中，应用程序为我们自动返回了错误栈信息（express 内置了一个默认的错误处理器），
  假如我们想手动控制返回的错误内容，则需要加载一个自定义错误处理的中间件
*/
const express = require('express')
const app = express()

app.use(function (req, res, next) {
  console.log('1')
  next(new Error('haha'))
})

app.use(function (req, res, next) {
  console.log('2')
  res.status(200).end()
})

//错误处理
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000)
/*
此时访问 localhost:3000，浏览器会显示 Something broke!。
*/