import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  links: {
    github?: string;
    linkedin?: string;
    email?: string;
    website?: string;
  };
}

export function AboutUs() {
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Harinda Fernando",
      role: "Research Supervisor",
      image: "/images/harindaf-1710311664.jpg",
      description: "Assistant Professor, Faculty of Computing, Sri Lanka Institute of Information Technology",
      links: {
        email: "harinda.f@sliit.lk",
        linkedin: "https://www.linkedin.com/in/harinda-fernando-7655bb67/"
      }
    },
    {
      name: "Mr. Kavinga Abeywardena",
      role: "Co-Supervisor",
      image: "/images/kavingay-1697037288.jpg",
      description: "Senior Lecturer, Faculty of Computing, Sri Lanka Institute of Information Technology",
      links: {
        email: "kavinga.y@sliit.lk",
        linkedin: "https://www.linkedin.com/in/kavinga-yapa-abeywardena-a1386361"
      }
    },
    {
      name: "N. Premakanthan",
      role: "Researcher",
      image: "/images/n_premakanthan.jpg",
      description: "it21197550@my.sliit.lk",
      links: {
        github: "https://github.com/Premakanthan-N",
        linkedin: "https://www.linkedin.com/in/premakanthan-n-b0b5b0227/",
        email: "it21197550@my.sliit.lk"
      }
    },
    {
      name: "D.S.C. Wijesuriya",
      role: "Researcher",
      image: "/images/dsc_wijesuriya.jpg",
      description: "it21155802@my.sliit.lk",
      links: {
        github: "https://github.com/Chamath428",
        linkedin: "https://www.linkedin.com/in/chamath-wijesuriya-b3b1b0227/",
        email: "it21155802@my.sliit.lk"
      }
    },
    {
      name: "P.G.E.J. Sandamal",
      role: "Researcher",
      image: "/images/pgej_sandamal.jpg",
      description: "it21166860@my.sliit.lk",
      links: {
        github: "https://github.com/JanithSandamal",
        linkedin: "https://www.linkedin.com/in/janith-sandamal-b3b1b0227/",
        email: "it21166860@my.sliit.lk"
      }
    },
    {
      name: "W.N. Dilsara",
      role: "Researcher",
      image: "/images/wn_dilsara.jpg",
      description: "it21182600@my.sliit.lk",
      links: {
        github: "https://github.com/Nuwanga-Wijamuni",
        linkedin: "https://www.linkedin.com/in/nuwanga-wijamuni-b3b1b0227/",
        email: "it21182600@my.sliit.lk"
      }
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Research Team</h2>
          <p className="text-xl text-gray-600">Dedicated researchers working on advancing medical AI security</p>
        </div>

        {/* Supervisors - Larger cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamMembers.slice(0, 2).map((member, index) => (
            <div 
              key={index}
              className="backdrop-blur-lg bg-white/40 border border-white/60 rounded-2xl p-8
                         shadow-[0_8px_16px_rgba(148,163,184,0.1)]
                         hover:shadow-[0_8px_24px_rgba(148,163,184,0.2)]
                         hover:bg-white/50
                         transition-all duration-300
                         group"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/80 shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-900 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    {member.links.linkedin && (
                      <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer"
                         className="text-gray-600 hover:text-blue-600 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.links.email && (
                      <a href={`mailto:${member.links.email}`}
                         className="text-gray-600 hover:text-blue-600 transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Members - Smaller cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.slice(2).map((member, index) => (
            <div 
              key={index}
              className="backdrop-blur-lg bg-white/40 border border-white/60 rounded-xl p-6
                         shadow-[0_8px_16px_rgba(148,163,184,0.1)]
                         hover:shadow-[0_8px_24px_rgba(148,163,184,0.2)]
                         hover:bg-white/50
                         transition-all duration-300
                         group"
            >
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/80 shadow-lg mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-900 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4 text-sm">{member.description}</p>
                <div className="flex gap-4 justify-center">
                  {member.links.github && (
                    <a href={member.links.github} target="_blank" rel="noopener noreferrer"
                       className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.links.linkedin && (
                    <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer"
                       className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blurred circles */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
}