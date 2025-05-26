import Image from 'next/image';

export default function Mathew7() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-10 bg-white rounded-2xl shadow-lg p-8 border border-teal-200">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <Image src="/mathew7media/Mathew7Cover.png" alt="Mathew7 Cover" width={320} height={440} className="rounded-lg border border-gray-200" />
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-3xl font-serif font-bold text-purple-500 mb-2">Mathew7</h1>
          <p className="text-lg text-gray-700 mb-1"><span className="font-semibold">Genre:</span> Drama</p>
          <p className="text-lg text-gray-700 mb-3"><span className="font-semibold">Logline:</span> A man is unwilling to recognize his privilege even in the face of the undeniable… so he will be made to experience the contradiction.</p>
          <div className="mb-2">
            <h2 className="text-xl font-bold text-gray-800 mb-1">About the Film</h2>
            <p className="text-gray-700">
              Mathew7 is a powerful drama that explores privilege, perspective, and transformation. Directed and written by Bobby Wallace, the film challenges viewers to confront uncomfortable truths and experience the world through a new lens. With a talented cast and a unique vision, Mathew7 is a testament to the magic of cinema and storytelling.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-200 my-2" />

      {/* Trailer Section */}
      <section>
        <h2 className="text-xl font-bold text-purple-500 mb-3">Trailer</h2>
        <div className="w-full aspect-video rounded-lg overflow-hidden mb-4 border border-gray-200">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/V5f_uPQRp7k"
            title="Mathew7 Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <div className="w-full border-t border-gray-200 my-2" />

      {/* Gallery Section */}
      <section>
        <h2 className="text-xl font-bold text-purple-500 mb-3">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Image src="/mathew7media/Wmembers.jpeg" alt="Mathew7 Behind the Scenes" width={320} height={220} className="rounded-lg border border-gray-200" />
          <Image src="/mathew7media/mathew7art.jpg" alt="Mathew7 Art" width={220} height={220} className="rounded-lg border border-gray-200" />
          <Image src="/mathew7media/Matthew7.jpeg" alt="Matthew7 Still" width={320} height={220} className="rounded-lg border border-gray-200" />
          <Image src="/mathew7media/groupPhoto.png" alt="Group Photo" width={320} height={220} className="rounded-lg border border-gray-200" />
        </div>
      </section>
    </div>
  );
} 