import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-10 items-center bg-white rounded-lg shadow-lg p-8 border border-mint">
      <div className="flex flex-col items-center mb-8">
        <Image src="/dumas/dumasHoldingCameraFront.jpg" alt="Bobby Wallace Portrait" width={220} height={220} className="rounded-full border-4 border-purple mb-4" />
        <h1 className="text-3xl font-bold text-purple mb-2">Bobby Wallace</h1>
        <h2 className="text-lg text-gray mb-2">Director, Writer at Bobby Wallace Productions</h2>
        <p className="italic text-pink mb-4">Just different! I've had an eventfully BLESSED life!</p>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h3 className="text-xl font-semibold text-purple mb-2">My Story</h3>
        <p className="text-gray">
          At 5 I walked home from preschool (3 blocks) with a key letting myself in and fixed lunch for myself and my great grandfather. My parents and I then moved to a new town where I was picked on and ridiculed for the texture of my hair (white boy hair), the music I listen to (Everything from Jim Croce, Aerosmith, Elton John to EPMD, Big Daddy Kane, Nipsey Mozzy), the movies (can't by me love, BMX bandits, the never ending story, Star Wars, a clockwork orange, Bugsy making) and shows I watched (the twilight zone, the honeymooners, Alfred Hitchcock hour, Benny hill, Cheers) having friends of all races and ethnicities, not having money for Jordan's and cool clothes from grades 5-9.
        </p>
        <p className="text-gray">
          I went off to college played football, was a three time all American and broke every single school record. I was a professional athlete and played in countries like Germany and Sweden. I was a director of a group home, managed an insurance company, and owned a gym!
        </p>
        <p className="text-gray">
          Needless to say………I HAVE A UNIQUE PERSPECTIVE OF THE WORLD!
        </p>
        <h3 className="text-xl font-semibold text-purple mt-4 mb-2">My Filmmaking Philosophy</h3>
        <p className="text-gray">
          My intent is to tell stories from my unique perspective and how I see the world. I would hear directors say they had to find their voice and that's what less seasoned filmmakers needed to do. I often wondered what that meant…… making my first short film I've come to realize it's knowing what makes you….. you! Effectively conveying your message…. Making clear what your vision is, telling your story as you see it. I'm not sure how's other directors envision things but, I think visually, I see what I write! As other artists such as painters, musicians and photographers are limited in their expressions, directing encompasses it all….. photography, music, tones, color of the day or night, tempo of the conversation, flow of the visuals, timing……. IT'S AMAZING…
        </p>
        <p className="text-gray">
          My greatest gift is my imagination…. Huge in part to be grounded almost all the time when I was younger (Lololol). Next is my work ethic and dedication which I believe I acquired during my playing career. My goal is simple: to win an Oscar by bringing people closer together over a tub of popcorn, cherry slushees and A Bobby Wallace Production…. See you there!
        </p>
      </div>
    </div>
  );
} 