import { FC } from "react";

export const TermsAndConditionsPage: FC = () => {
  return (
    <div className="p-8 bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-6 text-primary">Terms and Conditions</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-secondary">Introduction</h2>
        <p>
          Welcome to <span className="font-semibold">React Weapons of Choice</span>! These Terms
          and Conditions govern your use of our website, accessible via the provided routes in our
          SPA. By using this application, you agree to comply with these terms. If you do not agree,
          you should discontinue use immediately.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-secondary">Intellectual Property Rights</h2>
        <p>
          All content on this website, including but not limited to code, components, design, and
          documentation, is owned by <span className="font-semibold">React Weapons of Choice</span>.
          You may not reuse or redistribute this content without explicit permission, except as
          allowed under open-source licenses.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-secondary">Acceptable Use</h2>
        <p>Users are expected to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Abide by all applicable laws and regulations.</li>
          <li>Avoid introducing harmful content, such as malicious code or spam.</li>
          <li>
            Use the application responsibly, respecting others' privacy and data security.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-secondary">Privacy Policy</h2>
        <p>
          We value your privacy. Please refer to our{" "}
          <a href="/privacy-policy" className="text-accent underline">
            Privacy Policy
          </a>{" "}
          for information on data collection, use, and security practices.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-secondary">Disclaimer</h2>
        <p>
          The content provided within this application is for informational purposes only. We make
          no guarantees regarding the accuracy or completeness of the information. Use at your own
          risk.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-secondary">Governing Law</h2>
        <p>
          These Terms and Conditions are governed by the laws of [Your Jurisdiction]. All disputes
          shall be resolved in the courts of [Your Jurisdiction].
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-secondary">Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms and Conditions. Changes will be posted to this
          page, and continued use of the website constitutes agreement to the revised terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-secondary">Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us at{" "}
          <a href="mailto:contact@rwoc.dev" className="text-accent underline">
            contact@rwoc.dev
          </a>
          .
        </p>
      </section>
    </div>
  );
};
