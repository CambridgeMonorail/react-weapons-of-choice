import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@rwoc/shared/components/ui/card';
import { Input } from '@rwoc/shared/components/ui/input';
import { Textarea } from '@rwoc/shared/components/ui/textarea';
import { Button } from '@rwoc/shared/components/ui/button';

const ContactPage: React.FC = () => {
  return (
    <div className="space-y-8 px-4">
      <section>
        <h2 className="text-3xl font-bold mb-4">Contact Form</h2>
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>Have questions or feedback? Fill out the form below, and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Input id="name" type="text" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" rows={4} required />
              </div>
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Information</h2>
        <p>Reach out to us via email or follow us on social media for the latest updates.</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Map Integration</h2>
        <p>Find our office location on the map below.</p>
        {/* Optional: Add map integration here */}
      </section>
    </div>
  );
};

export default ContactPage;
