import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    slug: 'mathew7',
    title: 'Mathew7',
    image: '/mathew7media/Mathew7Cover.png',
    description: 'A drama film by Bobby Wallace. A man is unwilling to recognize his privilege even in the face of the undeniable… so he will be made to experience the contradiction.',
  },
  // Add more projects here as needed
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-purple mb-8 text-center">Our Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="bg-white rounded-lg shadow-lg border border-mint hover:shadow-xl transition flex flex-col items-center p-4">
            <Image src={project.image} alt={project.title} width={320} height={220} className="rounded mb-4" />
            <h2 className="text-xl font-bold text-purple mb-2">{project.title}</h2>
            <p className="text-gray text-center">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
} 