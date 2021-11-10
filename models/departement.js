const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DepartmentSchema = new Schema ({
   
    departmentName: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports =Departement = mongoose.model('Departement', DepartmentSchema)