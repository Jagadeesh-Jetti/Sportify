import { useState } from "react";

export const Booking = () => {
  const [sport, setSport] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsBooked(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Book Your Venue
        </h2>

        <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
          {isBooked ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-500">
                Booking Confirmed!
              </h3>
              <p className="text-lg text-gray-700 mt-4">
                Your venue has been successfully booked.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Select Sport */}
              <div className="mb-6">
                <label
                  htmlFor="sport"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Select Sport
                </label>
                <select
                  id="sport"
                  value={sport}
                  onChange={(e) => setSport(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
                  required
                >
                  <option value="">Choose a sport</option>
                  <option value="Football">Football</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Tennis">Tennis</option>
                  <option value="Badminton">Badminton</option>
                  <option value="Cricket">Cricket</option>
                </select>
              </div>

              {/* Select Date */}
              <div className="mb-6">
                <label
                  htmlFor="date"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Select Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
                  required
                />
              </div>

              {/* Select Time */}
              <div className="mb-6">
                <label
                  htmlFor="time"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Select Time
                </label>
                <input
                  type="time"
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
                  required
                />
              </div>

              {/* Select Venue */}
              <div className="mb-6">
                <label
                  htmlFor="venue"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Choose Venue
                </label>
                <select
                  id="venue"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
                  required
                >
                  <option value="">Choose a venue</option>
                  <option value="City Sports Complex">
                    City Sports Complex
                  </option>
                  <option value="National Arena">National Arena</option>
                  <option value="Downtown Gym">Downtown Gym</option>
                  <option value="Riverside Field">Riverside Field</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-500 transition duration-300"
              >
                Book Now
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
