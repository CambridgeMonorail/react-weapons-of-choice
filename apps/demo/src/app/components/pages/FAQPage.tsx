import { useState, useEffect, ChangeEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Input } from '@rwoc/shadcnui';

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
    question: 'How can I set up React Weapons of Choice?',
    answer: `
      1. Clone the repository.
      2. Install dependencies.
      3. Start the development server.
    `,
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
    <div className="p-6 m-4 space-y-6 bg-background text-foreground">
      <h1 className="text-5xl font-bold mb-6 text-primary">FAQ</h1>
      <section>
        <h2 className="text-3xl font-bold mb-4 text-primary">Common Questions</h2>
        <p className="mb-4 text-lg">Here are answers to the most common questions about React Weapons of Choice.</p>
        <Input
          type="text"
          placeholder="Search for questions..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="mb-4 border border-gray-300 shadow-sm"
          aria-label="Search FAQs"
        />
        <div className="grid grid-cols-1 gap-6">
          {filteredFaqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-lg hover:scale-105 transition-transform duration-300 rounded-lg border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 whitespace-pre-line">{faq.answer}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
