# DeepAnalysis Frontend

## Overview
DeepAnalysis Frontend is a modern web application built with React and Vite, designed to provide an intuitive user interface for the DeepAnalysis automated data analysis service. This frontend application allows users to upload CSV files, monitor analysis progress, and view comprehensive analytical reports with interactive visualizations.

The frontend works in conjunction with the [DeepAnalysis Backend](https://github.com/aditya699/deep-analysis), which uses a system of intelligent agents to automatically analyze CSV files, identify key performance indicators (KPIs), generate visualizations, and produce comprehensive analytical reports.

## Features

- Modern, responsive user interface
- Real-time task status monitoring
- Interactive data visualizations
- File upload with progress tracking
- Comprehensive report viewing
- Error handling and user feedback
- Integration with AI-powered analysis agents

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: CSS Modules
- **Icons**: Font Awesome 6
- **Development**: ESLint for code quality

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager
- DeepAnalysis Backend service running (see [Backend Repository](https://github.com/aditya699/deep-analysis))

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/deep-analysis-frontend.git
cd deep-analysis-frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with the following variables:
```
VITE_API_BASE_URL=your_backend_api_url
```

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
deep-analysis-frontend/
├── src/
│   ├── components/     # Reusable React components
│   ├── assets/        # Static assets (images, fonts, etc.)
│   ├── App.jsx        # Main application component
│   ├── main.jsx       # Application entry point
│   └── index.css      # Global styles
├── public/            # Public static files
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
└── package.json       # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact

For support and inquiries: ab0358031@gmail.com