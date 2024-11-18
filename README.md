![MG Automobile Banner](https://github.com/heavenboi-corlate/mg-auto/blob/main/public/prod.png)

# MG Automobile

MG Automobile is a web application for managing and showcasing automotive services. It provides a user-friendly interface for customers to book services, view testimonials, and learn more about the company.

## Glossary

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
  - [Linting](#linting)
  - [Email Development](#email-development)
- [Deployment](#deployment)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contributors](#contributors)

## Features

- Modern, responsive design with smooth animations
- Service booking and management system
- Interactive service catalog with detailed descriptions
- Customer testimonials and reviews section
- About Us section highlighting company values and history
- Contact form with automated email responses
- Custom animations using Framer Motion
- Mobile-first design approach

## Technologies Used

- React 18.3
- Vite 5.4
- Tailwind CSS 3.4
- Framer Motion 11.11
- Lucide React 0.456
- React Email 3.0
- Resend 4.0
- React Icons 5.3

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (version 18 or higher)
- npm (version 9 or higher) `use node version manager, for node version management`

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/heavenboi-corlate/mg-auto.git
   ```
2. Navigate to the project directory:
   ```sh
   cd mg-auto
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables:
   - Copy `.env-example` to `.env`
   - Update the variables with your own values:
     ```
     VITE_RESEND_API_KEY=your_resend_api_key
     ```

### Running the Project

1. Start the development server:

   ```sh
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

2. To build the project for production:

   ```sh
   npm run build
   ```

   The built files will be in the `dist` directory.

3. To preview the production build:
   ```sh
   npm run preview
   ```

### Linting

To lint the project files, run:

```sh
npm run lint
```

### Email Development

To start the email development server, run:

```sh
npm run email
```

## Deployment

The project is configured to be deployed on Netlify. The build command is `npm run build` and the publish directory is `dist`.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## Contributors

- [Heaveboi-nigel](https://github.com/heavenboi-corlate)
- [Zalisile Stuli](https://github.com/bazileros)
