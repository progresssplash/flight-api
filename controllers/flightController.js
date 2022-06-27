const {Flight} = require("../models/Flight");
const {v4: uuid} = require("uuid");

// Get All Flights

exports.getFlight = async (req, res) => {
    try{
        const flights = Flight;
        res.status(200).json({
            message: "All Flights",
            flights: Flight
        })
    } catch (err) {
        res.status(500).json({ message: err});
    }

};

// Getting A Single Flight

exports.getSingleFlight = async (req, res) => {
    try {
            let id = req.params.id;
            const getSingle = Flight.find((getSingle) => getSingle.id === id);
            res.status(200).json({
                message: "Flight Booked",
                getSingle
            });

    } catch(err) {
        res.status(500).json({ message: err});
    }
};

// Creating A User

exports.createFlight = async (req, res) => {
    try {
        const {id, title, time, price, date} = await req.body;
        const newFlight = {
            id: uuid(),
            title,
            time,
            price,
            date
        };
        const newBook = Flight.push(newFlight);
        res.status(201).json({
            message: "Successfully booked a flight",
            newFlight
        })

    } catch(err) {
        res.status(500).json({ message: err});
    }
};

// Update A Flight

exports.updateFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const update = Flight.find((update) => update.id === id);
        const {title, time, price, date} = await req.body;
        update.title = title;
        update.time = time;
        update.price = price;
        update.date = date;
        res.status(200).json({
            message: "Flight has been updated",
            update
        });
    } catch(err) {
        res.status(500).json({ message: err.message});
    }
}

// Delete Flight

exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const deleteFlight = Flight.find((deleteFlight) => deleteFlight.id === id);
        Flight.splice(Flight.indexOf(deleteFlight), 1);
        res.status(200).json({
            message: "User Deleted",
        });
    } catch(err) {
        res.status(500).json({message: err.message });
    }
}
