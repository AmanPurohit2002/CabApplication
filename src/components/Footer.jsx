import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark-200 p-4 mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2023 Cab System</p>
        <ul className="flex space-x-4 text-sm">
          <li>
            <a href="/some/valid/uri">Terms of Service</a>
          </li>
          <li>
            <a href="/some/valid/uri">Privacy Policy</a>
          </li>
          <li>
            <a href="/some/valid/uri">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
