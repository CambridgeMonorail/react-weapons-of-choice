import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@rwoc/shared/components/ui/card';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
  contact: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'John Doe',
    role: 'Project Lead',
    photo: 'https://via.placeholder.com/150',
    bio: 'John is a seasoned developer with over 10 years of experience in full-stack development.',
    contact: 'john.doe@example.com',
  },
  {
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    photo: 'https://via.placeholder.com/150',
    bio: 'Jane is a creative designer who specializes in user experience and interface design.',
    contact: 'jane.smith@example.com',
  },
  {
    name: 'Alice Johnson',
    role: 'Frontend Developer',
    photo: 'https://via.placeholder.com/150',
    bio: 'Alice is a frontend developer with a passion for building responsive and accessible web applications.',
    contact: 'alice.johnson@example.com',
  },
];

const AboutPage: FC = () => {
  return (
    <div className="space-y-8 p-5 space-x-8">
      <section className="px-5">
        <h2 className="text-3xl font-bold mb-4 text-primary">Mission and Vision</h2>
        <p>
          Our mission is to revolutionize the way developers build applications by providing a robust and intuitive boilerplate. Our vision is to create a community-driven project that continuously evolves to meet the needs of developers worldwide.
        </p>
      </section>

      <section >
        <h2 className="text-3xl font-bold mb-4 text-primary">Team Introduction</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.map((member) => (
            <Card key={member.name}>
              <CardHeader>
                <img src={member.photo} alt={member.name} className="w-full h-auto mb-4 rounded-lg" />
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{member.bio}</p>
                <p className="mt-2 text-sm text-muted">{member.contact}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-5">
        <h2 className="text-3xl font-bold mb-4 text-primary">Timeline</h2>
        <p>
          Explore the key milestones and evolution of our project from inception to the present day.
        </p>
      </section>
    </div>
  );
};

export { AboutPage };
