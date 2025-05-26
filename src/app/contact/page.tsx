export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-mint flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-purple mb-2">Contact Us</h1>
      <div className="text-gray mb-4">
        <p><span className="font-semibold">Phone:</span> (203) 540 7458</p>
        <p><span className="font-semibold">Email:</span> <a href="mailto:Vera@Bobbywallaceproductions.com" className="underline text-purple">Vera@Bobbywallaceproductions.com</a></p>
      </div>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="border border-gray rounded px-4 py-2" required />
        <input type="email" placeholder="Your Email" className="border border-gray rounded px-4 py-2" required />
        <textarea placeholder="Your Message" className="border border-gray rounded px-4 py-2" rows={4} required />
        <button type="submit" className="bg-purple text-white px-6 py-2 rounded hover:bg-mint hover:text-purple font-semibold transition">Send Message</button>
      </form>
    </div>
  );
} 