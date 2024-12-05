# React + TypeScript + Vite Demo

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Running the Application](#running-the-application)
5. [Folder Structure](#folder-structure)
6. [Contributing](#contributing)
7. [License](#license)

---

## Introduction

This is a demo project built with React + TypeScript + Vite + Chakra UI

---

## Technologies Used

- **Frontend Framework**: React + Vite
- **Programming Language**: TypeScript
- **Package Manager**: pnpm
- **Build Tools**: Vite configuration

---

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hygorzorak/react-demo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-demo
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```

---

## Running the Application

### Development Server

To start the development server, run:

```bash
pnpm run dev
```

The application will be available at `http://localhost:5173` by default (verify the port in your Vite configuration).

### Production Build

To build the application for production:

```bash
pnpm run build
```

The build files will be generated in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
pnpm run preview
```

---

## Folder Structure

```plaintext
.
├── public/                 # Static assets served directly
├── src/                    # Application source code
│   ├── assets/             # Static assets like images, fonts, etc.
│   ├── components/         # Reusable components
│   ├── pages/              # Page-level components or views
│   ├── styles/             # Global and component-specific styles
│   ├── utils/              # Utility functions and helpers
│   └── main.tsx            # Entry point for the application
├── README.md               # Project documentation
├── package.json            # Project metadata and scripts
├── pnpm-lock.yaml          # Lock file for pnpm dependencies
├── vite.config.ts          # Vite configuration file
├── tsconfig.json           # TypeScript configuration
├── tsconfig.app.json       # TypeScript configuration for the application
├── tsconfig.node.json      # TypeScript configuration for Node
├── eslint.config.js        # ESLint configuration file
└── index.html              # Main HTML file
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
