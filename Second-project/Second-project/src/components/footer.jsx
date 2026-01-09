export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300 mt-16">
      <div className="px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white">🍽️ FoodZone</h2>
          <p className="mt-3 text-sm text-gray-400">
            Delicious food delivered fresh at your doorstep. Taste the love in every bite.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Menu</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Opening Hours</h3>
          <p className="text-sm">Mon - Fri: 10 AM - 10 PM</p>
          <p className="text-sm">Sat - Sun: 9 AM - 11 PM</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">📍 Muzaffarpur, Bihar</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">✉️ foodzone@gmail.com</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} FoodZone. All rights reserved.
      </div>
    </footer>
  );
}
