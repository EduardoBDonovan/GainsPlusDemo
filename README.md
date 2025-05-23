# Gains+ Demo

A fitness tracking application built with React and Vite.

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages. To deploy:

1. Make sure your repository is named exactly `gains+_demo` (case-sensitive)
2. Go to your repository settings
3. Navigate to "Pages" under "Code and automation"
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
   - Branch: Select "main"
5. Wait for the GitHub Actions workflow to complete (check the "Actions" tab)
6. Your site will be available at: `https://[your-username].github.io/gains+_demo/`

### Troubleshooting Deployment

If the deployment fails:

1. Check the GitHub Actions workflow logs for errors
2. Verify that your repository name matches exactly with the `base` in `vite.config.js`
3. Make sure you have enabled GitHub Pages in your repository settings
4. Ensure you have the necessary permissions in your repository

## Features

- Responsive design
- React Router for navigation
- Bootstrap for styling
- Mobile-friendly navigation
- Multiple pages with dynamic content

## Technologies Used

- React
- Vite
- React Router DOM
- Bootstrap
- GitHub Pages

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

 
