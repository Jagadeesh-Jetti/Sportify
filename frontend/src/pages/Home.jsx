export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Welcome to Sportify
              </h1>
              <p className="mt-4 text-gray-700 text-lg">
                Discover venues, events, and connect with fellow enthusiasts to
                play your favorite sports anywhere, anytime.
              </p>
              <div className="mt-8">
                <a
                  href="/signup"
                  className="px-6 py-3 text-lg font-semibold bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-500 transition duration-300"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1599058917764-5ad30b24d18a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDczfDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080"
                alt="Sports"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
            Why Choose Sportify?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v8m0 0H8m4 0h4M8 12h8"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Find Venues
              </h3>
              <p className="mt-4 text-gray-600">
                Discover sports venues in your city with ease.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Meet Enthusiasts
              </h3>
              <p className="mt-4 text-gray-600">
                Connect with like-minded sports enthusiasts and grow your
                circle.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Play Anywhere
              </h3>
              <p className="mt-4 text-gray-600">
                Book and play at nearby venues, hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-600 py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-semibold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-8">
            Sign up today and enjoy a seamless sports experience.
          </p>
          <a
            href="/signup"
            className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
          >
            Join Sportify
          </a>
        </div>
      </section>
    </div>
  );
};
