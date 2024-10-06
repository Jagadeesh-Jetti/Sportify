const express = require("express");
const BookingRouter = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const {
  createBooking,
  getBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/booking.controller");

BookingRouter.post("/", authMiddleware, createBooking);

BookingRouter.get("/:id", authMiddleware, getBooking);

BookingRouter.put("/:id", authMiddleware, updateBooking);

BookingRouter.delete("/:id", authMiddleware, deleteBooking);

module.exports = BookingRouter;
