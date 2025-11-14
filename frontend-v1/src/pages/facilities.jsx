const facilitiesData = [
  {
    id: 1,
    name: 'Arena Pro Turf',
    location: 'Hitech City, Hyderabad',
    price: '₹499 / hour',
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1400',
  },
  {
    id: 2,
    name: 'Champion Badminton Court',
    location: 'Gachibowli, Hyderabad',
    price: '₹350 / hour',
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1600135713151-da1b4ea7ad55?q=80&w=1400',
  },
  {
    id: 3,
    name: 'Elite Indoor Sports Hub',
    location: 'Kondapur, Hyderabad',
    price: '₹599 / hour',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1400',
  },
];

export const Facilities = () => {
  return (
    <div className="min-h-screen bg-neutral-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-neutral-800 mb-6">
          Sport Facilities Near You
        </h1>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <input
            type="text"
            placeholder="Search for turfs, courts, stadiums..."
            className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="px-5 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Filters
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesData.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition border border-neutral-200 overflow-hidden"
            >
              <img
                src={facility.image}
                alt={facility.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-4 space-y-2">
                <h2 className="text-lg font-bold text-neutral-800">
                  {facility.name}
                </h2>

                <p className="text-sm text-neutral-500">{facility.location}</p>

                <p className="text-blue-600 font-semibold">{facility.price}</p>

                <p className="text-sm font-medium text-yellow-600">
                  ⭐ {facility.rating} / 5
                </p>

                <button className="w-full mt-3 bg-neutral-900 text-white py-2 rounded-lg hover:bg-neutral-800 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
