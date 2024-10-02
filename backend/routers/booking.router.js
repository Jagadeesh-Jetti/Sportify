const express = require("express");
const BookingRouter = express.Router();
const {
  createBooking,
  getBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/booking.controller");

BookingRouter.get("/:id", getBooking);

BookingRouter.post("/", createBooking);

BookingRouter.put("/:id", updateBooking);

BookingRouter.delete("/:id", deleteBooking);

module.exports = BookingRouter;
