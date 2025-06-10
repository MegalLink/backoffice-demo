# Kushki Backoffice Demo

A React application built with TypeScript and Vite for merchant configuration and report generation.

## Features

- **Merchant Configuration**: Form for configuring merchant settings and report generation
- **Email Management**: Dynamic email input with chip-based display
- **Execution Modes**: Support for on-demand and scheduled report generation
- **Date Range Selection**: Conditional date picker for on-demand reports
- **API Integration**: Axios-based client with React Query for state management
- **Material-UI**: Custom Kushki theme with modern design components

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Material-UI (MUI)** for UI components
- **React Hook Form** for form management
- **React Query** for server state management
- **Axios** for HTTP client
- **Day.js** for date handling

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd backoffice-demo
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file:

```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:

```
VITE_API_URL=http://localhost:5678
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Lint

Run ESLint:

```bash
npm run lint
```

### Preview

Preview production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── date/           # Date picker components
│   ├── email/          # Email input and chips
│   ├── form/           # Form field components
│   └── merchant/       # Merchant form
├── constants/          # Application constants
├── hooks/              # Custom React hooks
├── services/           # API services
├── theme/              # MUI theme configuration
└── types/              # TypeScript type definitions
```

## Architecture

The project follows **Scream Architecture** principles:

- Components are organized by feature
- Clear separation of concerns
- Reusable and composable components
- Type-safe interfaces throughout

## API Endpoints

- **On-demand reports**: `POST /webhook/reports`
- **Scheduled reports**: `POST /webhook/schedule`

## Contributing

1. Follow the existing code style
2. Use TypeScript for type safety
3. Create small, focused components
4. Apply SOLID principles
5. Avoid unnecessary comments in code
