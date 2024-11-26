import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@rwoc/shared/components/ui/card';
import { Input } from '@rwoc/shared/components/ui/input';

const faqs = [
  {
    question: 'What is React Weapons of Choice?',
    answer: 'React Weapons of Choice is an open-source boilerplate designed for developers who want a fast, intuitive setup for SPAs.',
  },
  {
    question: 'How do I get started?',
    answer: 'Clone the repository, install dependencies, and start the development server.',
  },
  {
    question: 'What technologies are used?',
    answer: 'The boilerplate uses Nx, Tailwind CSS, and Shadcn UI components.',
  },
];

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />
        <div className="grid grid-cols-1 gap-4">
          {filteredFaqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{faq.answer}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
