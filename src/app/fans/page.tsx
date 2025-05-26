'use client';
import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Fans() {
  useEffect(() => {
    // Load Instagram embed script
    if (typeof window !== 'undefined' && !document.getElementById('instagram-embed-script')) {
      const script = document.createElement('script');
      script.setAttribute('src', '//www.instagram.com/embed.js');
      script.setAttribute('async', '');
      script.setAttribute('id', 'instagram-embed-script');
      document.body.appendChild(script);
    } else if (
      typeof window !== 'undefined' &&
      (window as unknown as { instgrm?: { Embeds: { process: () => void } } }).instgrm
    ) {
      (window as unknown as { instgrm?: { Embeds: { process: () => void } } }).instgrm?.Embeds.process();
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-mint flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-purple-500 mb-2">For Fans</h1>
      <p className="text-gray-700 mb-4">Join the Bobby Wallace Productions family! Stay updated on new releases, events, and behind-the-scenes moments. Connect with us and other fans who love cinema as much as you do.</p>
      <form className="flex flex-col gap-4 mb-6">
        <input type="email" placeholder="Your Email for Newsletter" className="border border-gray-300 rounded px-4 py-2" required />
        <button type="submit" className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-teal-200 hover:text-purple-500 font-semibold transition">Sign Up</button>
      </form>
      <div className="flex flex-col gap-2 items-start mb-6">
        <a href="https://www.youtube.com/@BobbyWallaceProductions" target="_blank" rel="noopener noreferrer" className="text-purple-500 underline hover:text-teal-200 font-semibold">YouTube</a>
        <a href="https://www.instagram.com/bobbywallaceproductions/" target="_blank" rel="noopener noreferrer" className="text-pink-500 underline hover:text-teal-200 font-semibold">Instagram</a>
      </div>

      {/* Instagram Reels Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DJShywSumNH/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: 3, boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: 1, maxWidth: 320, minWidth: 220, padding: 0, width: '100%' }}></blockquote>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C9fDENIpD-I/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: 3, boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: 1, maxWidth: 320, minWidth: 220, padding: 0, width: '100%' }}></blockquote>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-purple-500 mb-4">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="col-span-1 sm:col-span-2 flex justify-center items-center">
            <video controls className="rounded-lg w-full max-w-xl h-[350px] object-cover">
              <source src="/logoBrand/logoVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Image src="/dumas/dumasHoldingCamera.jpg" alt="Dumas Holding Camera" width={400} height={500} className="rounded-lg object-cover w-full h-[350px]" />
          <Image src="/dumas/dumasHoldingCameraFront.jpg" alt="Dumas Holding Camera Front" width={400} height={500} className="rounded-lg object-cover w-full h-[350px]" />
          <Image src="/mathew7media/groupPhoto.png" alt="Group Photo" width={400} height={400} className="rounded-lg object-cover w-full h-[350px]" />
          <Image src="/mathew7media/Matthew7.jpeg" alt="Matthew7" width={400} height={500} className="rounded-lg object-cover w-full h-[350px]" />
          <Image src="/mathew7media/Wmembers.jpeg" alt="Behind the Scenes" width={400} height={400} className="rounded-lg object-cover w-full h-[350px]" />
          <Image src="/mathew7media/mathew7art.jpg" alt="Fan Art" width={400} height={400} className="rounded-lg object-cover w-full h-[350px]" />
        </div>
      </div>
    </div>
  );
} 