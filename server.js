const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

const db =require('./config/key').mongoURL
/*const items = require('./routes/api/items')
app.use('/api/items',items)*/

const user = require('./routes/api/user')
app.use('/api/user',user)

const departement = require('./routes/api/departement')
app.use('/api/departement',departement)
app.use(express.json())
//items employe departemnts.... 



mongoose
.connect(db)
.then(()=>console.log('MongoDB Connected..'))
.catch(err=>console.log('MongoDB error..'))

const port= process.env.PORT || 5000
app.listen(port, ()=>console.log(`Server running on ${port}`))


