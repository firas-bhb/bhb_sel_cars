const router = require('express').Router();
const {getAll,getOne,remove,update,add}=require('../controllers/cars.controller')


router.get("/getAll", getAll);
router.get("/getOne/:id",getOne)
router.post("/add",add)
router.patch("/:id",update)
router.delete("/:id",remove)





module.exports = router;
