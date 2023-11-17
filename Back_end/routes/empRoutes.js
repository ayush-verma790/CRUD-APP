const express=require("express");
const router=express.Router();

const {createEmployeeData}=require("../controllers/createEmployeeData");
const {getEmployeeData}=require("../controllers/getEmployeeData");
const {updateEmployeeData}=require("../controllers/updateEmployeeData");


router.post("/create",createEmployeeData);
router.get("/fetch",getEmployeeData);
router.put("/update/:id",updateEmployeeData);
module.exports=router;