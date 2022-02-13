const express = require("express");
const { showUser,storeUser,userById,updateUser,deleteUser } = require("../controller/userController")

const router = express.Router();


router.get("/student",showUser);
router.get("/student/:id",userById);
router.post("/student",storeUser);
router.put("/student/:id",updateUser)
router.delete("/student/:id",deleteUser)



module.exports = router