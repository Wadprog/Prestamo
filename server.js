const  express= require('express')
const  mongoose= require('mongoose')

const app= express()
app.use(express.json)

//Conecting to the database. 
const db= require('./config').mongoURI
mongoose
.connect(db)
.then(()=>console.log('Connected to Database From server.js'))
.catch(err=>console.log(`Database failled to be connected Error:${err}`))

//Use the routes 
app.use('/api/user',require('./routes/api/user'))
app.use('/api/client',require('./routes/api/client'))
app.use('/api/profile',require('./routes/api/profile'))
app.use('/api/loans',require('./routes/api/loans'))
app.use('/api/auth',require('./routes/api/auth'))

var PORT=PROCESS.ENV.PORT||5000
app.listen(PORT, (err)=> console.log(`Listening on port ${PORT}`))