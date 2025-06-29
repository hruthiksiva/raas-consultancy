# RAAS Consulting Website

A modern, mobile-responsive React.js website built with Vite, Tailwind CSS, and React Router DOM.

## Features

- 🚀 **Fast Development** - Built with Vite for lightning-fast development
- 📱 **Mobile Responsive** - Fully responsive design that works on all devices
- 🎨 **Modern UI** - Clean and professional design using Tailwind CSS
- 🧭 **Client-side Routing** - Smooth navigation with React Router DOM v6+
- 🏗️ **Component-based Architecture** - Reusable components for maintainability

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation component with mobile menu
│   └── Header.jsx      # Reusable page header component
├── layouts/
│   └── MainLayout.jsx  # Main layout wrapper
├── pages/
│   ├── Home.jsx        # Home page
│   ├── About.jsx       # About Us page
│   ├── Services.jsx    # Services page
│   ├── Faqs.jsx        # FAQs page
│   ├── Blogs.jsx       # Blog page
│   └── Contact.jsx     # Contact Us page
├── App.jsx             # Main app component with routing
├── main.jsx            # App entry point
└── index.css           # Global styles with Tailwind
```

## Pages

- **Home** (`/`) - Welcome page
- **About Us** (`/about`) - Company information
- **Services** (`/services`) - Services offered
- **FAQs** (`/faqs`) - Frequently asked questions
- **Blogs** (`/blogs`) - Blog articles
- **Contact Us** (`/contact`) - Contact information

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd raas-consulting
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### Hostinger Deployment

This project is configured for static hosting on Hostinger. Follow these steps:

1. **Build the project:**
```bash
npm run build
```

2. **Upload to Hostinger:**
   - Log in to your Hostinger control panel
   - Navigate to File Manager
   - Upload the contents of the `dist` folder to your `public_html` directory
   - Make sure to upload all files and folders from the `dist` directory

3. **Configure for SPA Routing:**
   - Create a `.htaccess` file in your `public_html` directory with the following content:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

This configuration ensures that client-side routing works correctly on Hostinger's Apache servers.

### Alternative Deployment Options

- **Netlify**: Connect your repository and set build command to `npm run build`
- **Vercel**: Connect your repository and deploy automatically
- **GitHub Pages**: Use the `gh-pages` package for deployment

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Customization

### Styling
- Modify `tailwind.config.js` to customize Tailwind CSS
- Update `src/index.css` for global styles
- Edit component-specific styles in their respective files

### Content
- Update page content in the respective page components
- Modify navigation items in `src/components/Navbar.jsx`
- Customize the header component in `src/components/Header.jsx`

### Routing
- Add new routes in `src/App.jsx`
- Create corresponding page components in `src/pages/`
- Update navigation items in the Navbar component

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team.
