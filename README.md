# Onkar Sorde - Portfolio Website

A modern, responsive portfolio website built with React showcasing my projects, skills, and experience.

## 🚀 Live Demo

Visit the live site: [https://onkars18.github.io/masterPortfolio](https://onkars18.github.io/masterPortfolio)

## 📋 About

This portfolio website features:

- Clean and modern design
- Fully responsive layout
- Interactive UI components
- Project showcase
- Skills and experience sections
- Contact information
- Multiple theme options

## 🛠️ Built With

- **React** - Frontend framework
- **React Router** - Navigation
- **Styled Components** - Styling
- **GraphQL & Apollo** - Data fetching
- **React Reveal** - Animations
- **Chart.js** - Data visualization

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/OnkarS18/masterPortfolio.git
cd masterPortfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The site will open at `http://localhost:3000`

## 🔧 Configuration

### Personal Information

Edit `src/portfolio.js` to customize:

- Personal details and bio
- Skills and technologies
- Work experience
- Education
- Projects
- Certifications
- Social media links
- Contact information

### Theme Customization

Change the theme in `src/theme.js`:

```javascript
export const chosenTheme = blueTheme; // Change to your preferred theme
```

Available themes: `blueTheme`, `greenTheme`, `purpleTheme`, `redTheme`, `blackTheme`, `pinkTheme`, `violetTheme`, `tealTheme`, `orangeTheme`, `yellowTheme`

### GitHub Integration (Optional)

1. Create a `.env` file from `env.example`:

```bash
cp env.example .env
```

2. Add your GitHub credentials:

```
GITHUB_TOKEN=your_github_token
GITHUB_USERNAME=your_username
```

3. Fetch GitHub data:

```bash
node git_data_fetcher.mjs
```

## 📜 Available Scripts

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages

## 🚀 Deployment

### GitHub Pages

1. Update `homepage` in `package.json`:

```json
"homepage": "https://yourusername.github.io/repository-name"
```

2. Deploy:

```bash
npm run deploy
```

### Other Platforms

Build the project and deploy the `build` folder:

```bash
npm run build
```

## 📱 Features

- ✅ Responsive design for all devices
- ✅ Multiple theme options
- ✅ Smooth animations
- ✅ GitHub integration
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Easy to customize

## 🎨 Customization Guide

### Adding Projects

Edit the `experience` section in `src/portfolio.js`:

```javascript
{
  title: "Project Name",
  company: "Project Type",
  company_url: "#",
  logo_path: "logo.png",
  duration: "2024",
  location: "Location",
  description: "Project description...",
  color: "#0879bf",
}
```

### Adding Skills

Update the `skills` section in `src/portfolio.js`:

```javascript
softwareSkills: [
  {
    skillName: "JavaScript",
    fontAwesomeClassName: "simple-icons:javascript",
    style: {
      backgroundColor: "#000000",
      color: "#F7DF1E",
    },
  },
];
```

### Updating Social Links

Modify `socialMediaLinks` in `src/portfolio.js`:

```javascript
{
  name: "Github",
  link: "https://github.com/yourusername",
  fontAwesomeIcon: "fa-github",
  backgroundColor: "#181717",
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original template by [Ashutosh Hathidara](https://github.com/ashutosh1919/masterPortfolio)
- Icons from [Iconify](https://iconify.design/)
- Illustrations from [unDraw](https://undraw.co/)

## 📧 Contact

Onkar Sorde

- GitHub: [@OnkarS18](https://github.com/OnkarS18)
- LinkedIn: [Onkar Sorde](https://www.linkedin.com/in/onkar-sorde-a1a7a0257/)
- Email: onkarsorde18@gmail.com

---

⭐ Star this repo if you find it helpful!
