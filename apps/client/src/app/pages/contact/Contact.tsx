import { FC } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  Input,
  Textarea,
  Button,
} from '@erisfy/shadcnui';

const ContactPage: FC = () => {
  return (
    <div className="p-6 m-4 space-y-6 container mx-auto bg-background text-foreground">
      <h1 className="text-5xl font-bold mb-6 text-primary">Contact</h1>
      <section>
        <h2 className="text-3xl font-bold mb-4 text-primary">Contact Form</h2>
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Have questions or feedback? Fill out the form below, and we'll get
              back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted"
                >
                  Name
                </label>
                <Input id="name" type="text" required aria-label="Name" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted"
                >
                  Email
                </label>
                <Input id="email" type="email" required aria-label="Email" />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted"
                >
                  Message
                </label>
                <Textarea id="message" rows={4} required aria-label="Message" />
              </div>
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 text-primary">Information</h2>
        <p>
          Reach out to us via email or follow us on social media for the latest
          updates.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 text-primary">
          Map Integration
        </h2>
        <p>Find our office location on the map below.</p>
        {/* Optional: Add map integration here */}
      </section>
    </div>
  );
};

export { ContactPage };
