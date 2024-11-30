import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div className="p-6 m-4 space-y-6 container mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-primary">Blog</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-primary">Article Listings</h2>
        <p>Stay updated with our latest blog posts, featuring summaries and publication dates.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-primary">Categories and Tags</h2>
        <p>Navigate through our content using categories and tags to find topics of interest.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-primary">Search Functionality</h2>
        <p>Search for specific topics or articles using the search bar.</p>
      </section>
    </div>
  );
};

export default BlogPage;
