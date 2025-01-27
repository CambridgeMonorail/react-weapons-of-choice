import { FC } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@erisfy/shadcnui';

const BlogPage: FC = () => {
  return (
    <div className="p-6 m-4 space-y-6 container mx-auto bg-background text-foreground">
      <h1 className="text-5xl font-bold mb-6 text-primary">Blog</h1>
      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-semibold mb-2 text-primary">
              Article Listings
            </CardTitle>
            <CardDescription>
              Stay updated with our latest blog posts, featuring summaries and
              publication dates.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>
      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-semibold mb-2 text-primary">
              Categories and Tags
            </CardTitle>
            <CardDescription>
              Navigate through our content using categories and tags to find
              topics of interest.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>
      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-semibold mb-2 text-primary">
              Search Functionality
            </CardTitle>
            <CardDescription>
              Search for specific topics or articles using the search bar.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>
    </div>
  );
};

export { BlogPage };
