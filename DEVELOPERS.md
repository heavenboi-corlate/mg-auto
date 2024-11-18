# MG Automobile - Developer Documentation

This document provides technical details and guidelines for developers working on the MG Automobile project.

## Project Architecture

```
src/
├── api/          # API integration and services
├── app/          # App-wide configurations
├── assets/       # Static assets (images, fonts)
├── components/   # React components
│   ├── common/   # Reusable components
│   └── features/ # Feature-specific components
├── hooks/        # Custom React hooks
├── layouts/      # Layout components
├── utils/        # Utility functions
└── main.jsx     # Application entry point
```

## Component Structure

### Feature Components
Feature components are located in `src/components/features/` and represent major sections of the application:
- `Service.jsx` - Service catalog with animation integration
- `AboutUs.jsx` - Company information section
- `Testimonials.jsx` - Customer reviews section

### Common Components
Reusable components are in `src/components/common/`:
- `ErrorBoundary.jsx` - Error handling wrapper
- Other utility components

## State Management

The application uses React's built-in state management with:
- Local component state using `useState`
- Memoization using `useCallback` and `memo`
- Custom hooks for shared logic

## Animation System

We use Framer Motion for animations with standardized variants:
```javascript
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" }
};
```

## Styling

### Tailwind CSS Configuration
- Custom theme configuration in `tailwind.config.js`
- Responsive design breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

### CSS Guidelines
1. Use Tailwind utility classes as primary styling method
2. Custom CSS should be minimal and placed in `src/index.css`
3. Follow mobile-first approach

## Performance Optimization

1. Component Optimization:
   - Use `memo` for components that receive stable props
   - Implement `useCallback` for event handlers
   - Lazy load components when appropriate

2. Asset Optimization:
   - Use appropriate image formats and sizes
   - Implement lazy loading for images
   - Optimize SVG icons

## Email Integration

### Setup
1. Configure Resend API key in `.env`:
   ```
   VITE_RESEND_API_KEY=your_resend_api_key
   ```

2. Email templates are located in `src/emails/`

### Development
Run email development server:
```bash
npm run email
```

## Testing

### Unit Testing
- Use Vitest for unit testing
- Test files should be co-located with components
- Follow naming convention: `ComponentName.test.jsx`

### E2E Testing (Future Implementation)
- Plan to implement Cypress for E2E testing
- Test files will be located in `cypress/e2e/`

## Git Workflow

1. Branch Naming:
   - feature/feature-name
   - bugfix/bug-description
   - hotfix/issue-description

2. Commit Messages:
   - feat: Add new feature
   - fix: Bug fix
   - docs: Documentation changes
   - style: Code style changes
   - refactor: Code refactoring
   - test: Test changes
   - chore: Build process or auxiliary tool changes

3. Pull Request Process:
   - Create feature branch
   - Make changes
   - Run tests
   - Submit PR with description
   - Request review
   - Merge after approval

## Development Environment Setup

1. IDE Configuration:
   - VSCode recommended
   - Install ESLint and Prettier extensions
   - Use workspace settings in `.vscode/`

2. Recommended VSCode Extensions:
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense
   - ES7+ React/Redux/React-Native snippets

## Build and Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deployment
The project is configured for Netlify deployment:
- Configuration in `netlify.toml`
- Automatic deployment on main branch updates
- Environment variables must be set in Netlify dashboard

## Troubleshooting

Common Issues:
1. Node version mismatch
   - Solution: Use nvm to switch to correct version

2. Build failures
   - Check Node version
   - Clear node_modules and package-lock.json
   - Run fresh install

3. Email development server issues
   - Verify Resend API key
   - Check email template syntax

## Contributing

1. Review existing issues or create new one
2. Fork repository
3. Create feature branch
4. Make changes
5. Submit pull request
6. Wait for review and address feedback

## Code Style Guide

1. Use ES6+ features
2. Follow React best practices
3. Implement proper error handling
4. Add JSDoc comments for complex functions
5. Use meaningful variable and function names
6. Keep components focused and single-responsibility
7. Implement proper prop-types or TypeScript interfaces
