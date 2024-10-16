export const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center sm:py-12">
      <div className=" bg-white shadow-lg rounded-lg p-8 xs:p-0  mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-3xl mb-8 text-indigo-600 ">
          {/* Sportify */}
        </h1>

        <div className="bg-white rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7 ">
            <h2 className="text-3xl font-bold text-center mb-8">
              Login to Your Account
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-lg font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition duration-300"
              >
                Log In
              </button>
            </form>
          </div>

          <div className="py-5">
            <div className="text-center">
              <p className="text-gray-600">
                Do not have an account?
                <a
                  href="#"
                  className="text-indigo-600 font-medium hover:text-indigo-500"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
