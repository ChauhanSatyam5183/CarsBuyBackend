const CarService = require("../Service/CarService");

async function createCar(req, res) {

    console.log("CarController");
    try {
        const car = await CarService.createCar(req.body);
        return res.status(201).json({ success: true, data: car });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ success: false, message: error.reason });
    }
}

async function deleteCarById(req, res) {
    try {
        const car = await CarService.deleteCarById(req.params.id);
        return res.status(200).json({ success: true, data: car });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ success: false, message: error.reason });
    }
}


async function getCarById(req, res) {
    try {
        const car = await CarService.getCarById(req.params.id);
        return res.status(200).json({ success: true, data: car });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ success: false, message: error.reason });
    }
}

async function getCarList(req, res) {
    try {
        const cars = await CarService.getCarList(req.query.search);
        return res.status(200).json({ success: true, data: cars });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ success: false, message: error.reason });
    }
}


async function getCarsByFuelType(req, res) {
    try {
        const cars = await CarService.getCarsByFuelType(req.params.fuelType);
        return res.status(200).json({ success: true, data: cars });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ success: false, message: error.reason });
    }
}
 

async function getCarsByBodyType(req, res) {
    try {
        const cars = await CarService.getCarsByBodyType(req.params.bodyType);
        return res.status(200).json({ success: true, data: cars });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ success: false, message: error.reason });
    }
}

// Controller function to fetch cars by Maximum Kilometers Driven
async function getCarsByMaxKilometerDriven(req, res) {
    try {
        const cars = await CarService.getCarsByMaxKilometerDriven(req.query.maxKilometers);
        return res.status(200).json({ success: true, data: cars });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ success: false, message: error.reason });
    }
}

// Controller function to fetch cars by Transmission Type
async function getCarsByTransmissionType(req, res) {
    try {
        const cars = await CarService.getCarsByTransmissionType(req.params.transmission);
        return res.status(200).json({ success: true, data: cars });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ success: false, message: error.reason });
    }
}

// Controller function to fetch cars by Maximum Price
async function getCarsByMaxPrice(req, res) {
    try {
        const cars = await CarService.getCarsByMaxPrice(req.query.maxPrice);
        return res.status(200).json({ success: true, data: cars });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ success: false, message: error.reason });
    }
}

module.exports = {
    createCar,
    deleteCarById,
    getCarById,
    getCarList,
    getCarsByFuelType,
    getCarsByBodyType,
    getCarsByMaxKilometerDriven,
    getCarsByTransmissionType,
    getCarsByMaxPrice
};
