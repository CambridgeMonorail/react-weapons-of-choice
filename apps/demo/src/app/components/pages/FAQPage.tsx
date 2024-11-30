import { useState, useEffect, ChangeEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@rwoc/shared/components/ui/card';
import { Input } from '@rwoc/shared/components/ui/input';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
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

export const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredFaqs, setFilteredFaqs] = useState<FAQ[]>(faqs);

  useEffect(() => {
    setFilteredFaqs(
      faqs.filter((faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-6 m-4 space-y-6">
      <h1 className="text-4xl font-bold mb-4 text-primary">FAQ</h1>
      <section>
        <h2 className="text-3xl font-bold mb-4 text-primary">Common Questions</h2>
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="mb-4"
          aria-label="Search FAQs"
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
