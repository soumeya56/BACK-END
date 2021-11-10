const express= require('express')
const router = express.Router()
const departement = require('../../models/departement')
router.get('/',(req,res)=>{
      Departement.find()
    .then((departement)=>res.json(departement))
    .catch(err=>res.json('find error: '+err))  
   /* res.send('sucess').catch(err=>res.json('Save error: '+err))*/
})
 router.post('/',(req, res)=>{ 
    const newDep = new Departement({
        departmentName: req.body.name
        
    })
    newDep
        .save()
        .then(departement => res.json({success : true,departement}))
        .catch(err=>res.json('Save error: '+err))
 })
 router.delete('/:id',(req, res)=>{
        Departement.findById(req.params.id)
        .then((dep)=> {
            Departement.remove().then(()=> res.json({success : true}) )
        } )
        .catch(err=> {
            res.status(404).json({success : false,id: req.params.id, msg : err})
        })
})
module.exports= router;