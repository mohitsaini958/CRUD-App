const {Post,Update,Delete, GetData}=require("../controllers/CrudController");
const router=require('express').Router();

router.get('/',GetData)
router.post('/post',Post)
router.put('/update/:id',Update)
router.delete('/delete/:id',Delete)

module.exports=router