import React from 'react';

export default function Employees() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-mint flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-purple mb-2">Join Our Team</h1>
      <p className="text-gray mb-4">We&apos;re always looking for passionate, creative, and dedicated individuals to join Bobby Wallace Productions. Whether you&apos;re interested in film, production, writing, or support roles, we want to hear from you!</p>
      <h2 className="text-xl font-semibold text-purple mb-2">Opportunities</h2>
      <ul className="list-disc list-inside text-gray mb-4">
        <li>Open Positions (coming soon)</li>
        <li>Internships (coming soon)</li>
        <li>Collaborations &amp; Volunteering</li>
      </ul>
      <h2 className="text-xl font-semibold text-purple mb-2">Contact Us</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="border border-gray rounded px-4 py-2" required />
        <input type="email" placeholder="Your Email" className="border border-gray rounded px-4 py-2" required />
        <textarea placeholder="Tell us about yourself and your interest" className="border border-gray rounded px-4 py-2" rows={4} required />
        <button type="submit" className="bg-purple text-white px-6 py-2 rounded hover:bg-mint hover:text-purple font-semibold transition">Send Inquiry</button>
      </form>
    </div>
  );
} 