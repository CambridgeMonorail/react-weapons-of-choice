# Integration

Guides for integrating external services and platforms with your React application.

## Documents in this Section

### [Integrate Contentful](./integrate-contentful.md)
Step-by-step guide to integrating Contentful CMS for content management, including setup, content modeling, API configuration, and fetching content in React.

**Key Topics**: Contentful setup, content models, API keys, content delivery, React integration

---

### [Manage Keys and Tokens](./manage-keys-and-tokens.md)
Best practices for managing API keys, access tokens, and secrets securely in development and production environments.

**Key Topics**: Environment variables, secret management, security, .env files, CI/CD secrets

---

## Integration Best Practices

1. **Environment Variables** - Always use `.env` files for configuration
2. **Never Commit Secrets** - Add `.env` files to `.gitignore`
3. **Use Type Safety** - Create TypeScript types for API responses
4. **Error Handling** - Implement robust error handling for external services
5. **Testing** - Mock external services in tests

## Related Documentation

- **[Guides](../guides/)** - Implementation patterns and tutorials
- **[Maintenance](../maintenance/)** - Security considerations
- **[Contributing](../contributing/)** - Adding new integrations

---

[← Back to Documentation Index](../README.md)
