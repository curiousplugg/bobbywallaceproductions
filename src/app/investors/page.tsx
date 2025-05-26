export default function Investors() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-mint flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-purple mb-2">For Investors</h1>
      <p className="text-gray mb-4">
        At Bobby Wallace Productions, our vision is to win multiple Oscars and bring people closer together through the magic of cinema. By supporting us, you become part of a movement that values storytelling, diversity, and community impact. Your investment helps us create award-winning films, provide jobs, and inspire the next generation of filmmakers.
      </p>
      <h2 className="text-xl font-semibold text-purple mb-2">Why Invest?</h2>
      <ul className="list-disc list-inside text-gray mb-4">
        <li>Support unique, diverse, and powerful storytelling</li>
        <li>Be part of a growing, visionary production company</li>
        <li>Help bring a production studio to Bridgeport, CT</li>
        <li>Enable employment and youth opportunities in cinema</li>
      </ul>
      <h2 className="text-xl font-semibold text-purple mb-2">Contact Us</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="border border-gray rounded px-4 py-2" required />
        <input type="email" placeholder="Your Email" className="border border-gray rounded px-4 py-2" required />
        <textarea placeholder="Your Message" className="border border-gray rounded px-4 py-2" rows={4} required />
        <button type="submit" className="bg-purple text-white px-6 py-2 rounded hover:bg-mint hover:text-purple font-semibold transition">Send Inquiry</button>
      </form>
    </div>
  );
} 