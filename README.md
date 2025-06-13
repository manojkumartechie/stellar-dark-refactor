# Manoj Kumar K - Portfolio Website

A modern, responsive portfolio website showcasing data science and AI engineering expertise. Built with vanilla HTML, CSS, and JavaScript for optimal performance and GitHub Pages compatibility.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Theme**: Toggle between themes with persistent preference storage
- **Interactive Elements**: Smooth animations, typing effects, and hover interactions
- **Project Filtering**: Filter projects by category (AI/ML, Analytics, FinTech)
- **Modern UI**: Glass morphism effects, gradient backgrounds, and smooth transitions
- **Performance Optimized**: Vanilla JavaScript, no heavy frameworks
- **SEO Friendly**: Semantic HTML structure and meta tags

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Variables, CSS Animations
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Inter)
- **Deployment**: GitHub Pages ready

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── main.js            # JavaScript functionality
├── README.md          # Project documentation
└── assets/            # Images and other assets (if needed)
```

## 🚀 Deployment to GitHub Pages

### Method 1: Deploy from main branch

1. **Create a new repository** on GitHub (e.g., `your-username.github.io` or `portfolio`)

2. **Clone and add files**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   
   # Copy all files (index.html, styles.css, main.js, README.md) to this directory
   
   git add .
   git commit -m "Initial portfolio deployment"
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access your site**:
   - Your site will be available at: `https://your-username.github.io/your-repo-name/`
   - For `username.github.io` repos: `https://your-username.github.io/`

### Method 2: Deploy from docs folder

1. Create a `docs` folder in your repository
2. Move all files (index.html, styles.css, main.js) to the `docs` folder
3. In GitHub Pages settings, select "main" branch and "/docs" folder

### Method 3: Deploy using GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

## 🎨 Customization

### Personal Information
Edit the following in `index.html`:
- Name and title in the hero section
- Contact information
- Social media links
- Resume link

### Projects
Modify the `projects` array in `main.js`:
```javascript
const projects = [
    {
        title: "Your Project Name",
        category: "ai", // ai, analytics, fintech
        description: "Project description...",
        technologies: ["Tech1", "Tech2"],
        github: "https://github.com/username/repo",
        demo: "https://your-demo-link.com"
    }
    // Add more projects...
];
```

### Skills
Update the `skills` object in `main.js`:
```javascript
const skills = {
    "Category Name": {
        icon: "fas fa-icon-name",
        skills: ["Skill1", "Skill2", "Skill3"]
    }
    // Add more categories...
};
```

### Styling
Customize colors and themes in `styles.css`:
```css
:root {
    --primary-color: #3b82f6;
    --secondary-color: #8b5cf6;
    --accent-color: #06b6d4;
    /* Modify other CSS variables */
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Features

- **Lightweight**: No external frameworks or heavy libraries
- **Fast Loading**: Optimized CSS and JavaScript
- **Responsive Images**: Scalable vector icons
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **Local Storage**: Theme preference persistence

## 🔧 Development

To run locally:

1. Clone the repository
2. Open `index.html` in your browser
3. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have http-server installed)
   npx http-server
   
   # PHP
   php -S localhost:8000
   ```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: manojkumar9384@outlook.com
- **LinkedIn**: [manojkumartechie](https://www.linkedin.com/in/manojkumartechie/)
- **GitHub**: [manojkumartechie](https://github.com/manojkumartechie)

---

⭐ Star this repository if you found it helpful!