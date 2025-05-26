import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 items-center justify-center w-full">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 w-full justify-between py-8">
        <div className="flex-1 flex flex-col gap-6 items-start md:items-start">
          <h1 className="text-5xl font-serif font-bold text-purple-500 mb-2 tracking-tight leading-tight">Welcome to Bobby Wallace Productions</h1>
          <p className="text-xl text-gray-700 max-w-xl leading-relaxed">
            Masters of escapism, providing our audience passage from the stress of everyday life. Experience the magic of cinema and storytelling that brings people together.
          </p>
          <span className="text-lg text-gray-500 italic mb-2">Award-winning stories. Unforgettable experiences.</span>
          <div className="flex gap-4 mt-4">
            <Link href="/projects" className="bg-purple-500 text-white px-8 py-3 rounded-lg shadow hover:bg-teal-200 hover:text-purple-500 font-semibold text-lg transition">See Our Work</Link>
            <Link href="/contact" className="bg-gray-100 text-purple-500 px-8 py-3 rounded-lg shadow hover:bg-purple-500 hover:text-white font-semibold text-lg transition">Contact Us</Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src="/logoBrand/Logo.png" alt="Bobby Wallace Productions Logo" width={260} height={260} className="rounded-xl shadow-lg border border-gray-200 bg-white" />
        </div>
      </section>

      <div className="w-full border-t border-gray-200 my-4" />

      {/* Mission Statement */}
      <section className="bg-gray-50 rounded-2xl p-10 w-full max-w-3xl text-center shadow-md border border-gray-100">
        <h2 className="text-2xl font-serif font-bold text-purple-500 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our affinity for cinema and tv goes beyond storytelling. We are masters of escapism, providing our audience passage from the stress of everyday life. There is a bond that occurs while sitting amongst each other, where we escape our differences and share an experience... that, is an extraordinary occurrence and the magic we look to cultivate at Bobby Wallace Productions.
        </p>
      </section>

      <div className="w-full border-t border-gray-200 my-4" />

      {/* Featured Project */}
      <section className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-10 bg-white rounded-2xl shadow-lg p-8 border border-teal-200">
        <div className="flex-1">
          <Image src="/mathew7media/Mathew7Cover.png" alt="Mathew7 Cover" width={400} height={300} className="rounded-lg border border-gray-200" />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="text-2xl font-serif font-bold text-purple-500 mb-1">Featured Project: Mathew7</h3>
          <p className="text-lg text-gray-700 mb-1">A film by Bobby Wallace</p>
          <p className="text-md text-gray-700 mb-1"><span className="font-semibold">Genre:</span> Drama</p>
          <p className="text-md text-gray-700 mb-1"><span className="font-semibold">Logline:</span> A man is unwilling to recognize his privilege even in the face of the undeniable… so he will be made to experience the contradiction.</p>
          <Link href="/projects/mathew7" className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-lg shadow hover:bg-teal-200 hover:text-purple-500 font-semibold transition w-max">Learn More</Link>
        </div>
      </section>
    </div>
  );
}
