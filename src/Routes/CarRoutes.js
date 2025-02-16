const express = require("express");
const CarController = require("../controller/CarController");
const{isloggedin,isAdmin}=require("../Validation/AuthValidation");
const router = express.Router();

// Route to create a new car
router.post("/",isloggedin,isAdmin, CarController.createCar);

// Route to delete a car by ID
router.delete("/:id",isloggedin,isAdmin, CarController.deleteCarById);

// Route to get a car by ID
router.get("/:id",isloggedin, CarController.getCarById);

// Route to get a list of cars based on search query
router.get("/",isloggedin, CarController.getCarList);

// Route to get cars by FuelType
router.get("/fuel/:fuelType",isloggedin, CarController.getCarsByFuelType);

// Route to get cars by BodyType
router.get("/body/:bodyType",isloggedin, CarController.getCarsByBodyType);

// Route to get cars by Maximum Kilometers Driven
router.get("/kilometers",isloggedin, CarController.getCarsByMaxKilometerDriven);

// Route to get cars by Transmission Type
router.get("/transmission/:transmission",isloggedin, CarController.getCarsByTransmissionType);

// Route to get cars by Maximum Price
router.get("/price",isloggedin, CarController.getCarsByMaxPrice);

module.exports = router;
