export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-10">
            <h1 className="text-4xl font-bold text-center mb-6 text-blue-400">Contact KV Audio</h1>
            <p className="text-gray-400 text-center mb-8">Reach out to us for inquiries, rentals, or support.</p>

            <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-lg">
                <form className="flex flex-col space-y-4">
                    <div>
                        <label className="block text-sm text-gray-300">Name</label>
                        <input type="text" className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-300">Email</label>
                        <input type="email" className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-300">Message</label>
                        <textarea className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message..." rows="4"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition">Send Message</button>
                </form>
            </div>

            <div className="mt-10 text-center">
                <p className="text-gray-400">Or contact us via</p>
                <p className="mt-2 text-lg font-semibold text-blue-400">📞 +94 77 123 4567</p>
                <p className="text-lg font-semibold text-blue-400">📧 info@kvaudio.com</p>
            </div>

            <div className="mt-6 flex space-x-6">
                <a href="#" className="text-blue-400 hover:text-blue-500 text-2xl">🔵 Facebook</a>
                <a href="#" className="text-blue-400 hover:text-blue-500 text-2xl">📷 Instagram</a>
                <a href="#" className="text-blue-400 hover:text-blue-500 text-2xl">🐦 Twitter</a>
            </div>
        </div>
    );
}
