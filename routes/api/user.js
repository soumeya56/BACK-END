const express= require('express')
const router = express.Router()
const User = require('../../models/user')
router.get('/',(req,res)=>{
     User.find()
    .then((user)=>res.json(user))
    .catch(err=>res.json('find error: '+err)) 
   /* res.send('hello').catch(err=>res.json('Save error: '+err))*/
})
 router.post('/',(req, res)=>{ 
    const newUser = new User({
        email : req.body.email,
        password : req.body.password
    })
    newUser
        .save()
        .then(user => res.json({success : true,user}))
        .catch(err=>res.json('Save error: '+err))
 })
 router.delete('/:id',(req, res)=>{
        User.findById(req.params.id)
        .then((user)=> {
            User.remove().then(()=> res.json({success : true}) )
        } )
        .catch(err=> {
            res.status(404).json({success : false,id: req.params.id, msg : err})
        })
})
module.exports= router;