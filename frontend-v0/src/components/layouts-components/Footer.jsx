export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sportify</h3>
            <p className="text-sm">
              Play your favorite sports anywhere, anytime. Discover venues,
              events, and connect with fellow enthusiasts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/features" className="hover:text-white">
                  Features
                </a>
              </li>
              <li className="mb-2">
                <a href="/pricing" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul>
              <li className="mb-2">Email: support@sportify.com</li>
              <li className="mb-2">Phone: +1 234 567 890</li>
              <li>Address: 123 Sportify St, City, Country</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3V2z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 2.075a10.325 10.325 0 01-3.036.86A5.4 5.4 0 0021.43.356a10.864 10.864 0 01-3.424 1.36A5.32 5.32 0 0015.35 0c-2.938 0-5.32 2.387-5.32 5.336 0 .418.047.827.137 1.217C6.699 6.303 3.548 4.16 1.58 1.016a5.472 5.472 0 00-.719 2.684c0 1.851.934 3.484 2.356 4.44a5.29 5.29 0 01-2.418-.665v.065c0 2.59 1.821 4.752 4.24 5.235a5.307 5.307 0 01-2.412.093c.681 2.15 2.65 3.717 4.98 3.761A10.743 10.743 0 010 20.577a15.19 15.19 0 008.212 2.404c9.849 0 15.244-8.182 15.244-15.274 0-.233-.005-.467-.014-.698A10.92 10.92 0 0024 3.785a10.58 10.58 0 01-3.05.846 5.411 5.411 0 002.38-2.952z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.93V12.5H8v-2h3V8.97a3.45 3.45 0 013.5-3.45h2v2h-2a1.5 1.5 0 00-1.5 1.5V10.5h3l-.5 2h-2.5v4.43A8.006 8.006 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Sportify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
