const mongoose = require ('mongoose')
const Schema = mongoose.Schema ;

const UserSchema = new Schema({

    
    departement:
    {name :String
    },
    email:{
        type: String,
        required: true,
        unique : true 
    },
    password:{
        type: String,
        required: true
    },
    account:{
        name:String,
        phone:Number,
        dateNaiss:String,
       
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
 
module.exports = User = mongoose.model('User', UserSchema)