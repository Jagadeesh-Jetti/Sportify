const express = require("express");
const app = express();

const dataBase = require("./db");
const BookingRouter = require("./routers/booking.router");
const OwnerRouter = require("./routers/owner.router");
const PlayerRouter = require("./routers/player.router");
const VenueRouter = require("./routers/venue.router");

app.use(express.json());

dataBase();

app.use("/bookings", BookingRouter);
app.use("/owner", OwnerRouter);
app.use("/player", PlayerRouter);
app.use("/venue", VenueRouter);

app.get("/", (req, res) => {
  res.send("Sportify Backend");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Sportify backend started");
});
