import React from 'react';
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-400 p-10">
        <div className="max-w-5xl mx-auto">
        <div className="flex justify-around items-center bg-gray-900 text-white p-4">
  {/* Email Subscription */}
  <div className="flex space-x-2">
    <input
    type="email"
    placeholder="Enter your email"
    className="px-4 py-2 rounded-md text-white bg-gray-900 border-2 border-white focus:outline-none"
    />

    <button className="bg-blue-600  px-4 py-2 rounded-md hover:bg-red-700">
      Subscribe
    </button>
  </div>

  {/* Contact Information */}
  <p>
    Questions? Call{" "}
    <a href="tel:000-800-919-1743" className="underline">
      000-800-919-1743
    </a>
  </p>
</div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ul>
              <li className="mb-2"><a href="#" className="underline">FAQ</a></li>
              <li className="mb-2"><a href="#" className="underline">Privacy</a></li>
            </ul>
            <ul>
              <li className="mb-2"><a href="#" className="underline">Help Centre</a></li>
              <li className="mb-2"><a href="#" className="underline">Cookie Preferences</a></li>
            </ul>
            <ul>
              <li className="mb-2"><a href="#" className="underline">Ways to Watch</a></li>
              <li className="mb-2"><a href="#" className="underline">Only on FixItFreak</a></li>
            </ul>
            <ul>
              <li className="mb-2"><a href="#" className="underline">Terms of Use</a></li>
              <li className="mb-2"><a href="#" className="underline">Contact Us</a></li>
            </ul>
          </div>
  
          {/* Language Selector */}
          <div className="mt-6">
            <button className="px-4 py-2 border border-gray-500 rounded-md flex items-center">
              <span className="mr-2">🌐</span> English ▼
            </button>
          </div>
  
          <p className="mt-4">FixItFreak India</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  