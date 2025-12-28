# Odai Ayyad - Personal Portfolio Website

A modern, responsive portfolio website with a Petronas cyan theme and Mercedes-AMG GT Black Series aesthetic.

## 🚀 Features

- **Modern Design**: Dark theme with Petronas turquoise/cyan accents
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-reveal animations, parallax effects, and interactive elements
- **Performance Optimized**: Pure HTML/CSS/JS - no frameworks required
- **GitHub Pages Ready**: Static site, ready for deployment

## 📁 Project Structure

```
portfolio/
├── index.html
├── css/
│   └── prism-flux-custom.css
├── js/
│   └── prism-flux-custom.js
├── assets/
│   ├── Odai_Ayyad_Resume.pdf
│   └── images/
│       ├── yolo-traffic.jpg
│       ├── youtube-agent.jpg
│       └── ml-models.jpg
└── README.md
```

## 🎨 Color Palette

- **Primary Accent**: `#01F5D1` (Petronas turquoise)
- **Secondary Accent**: `#34E4CB` (Petronas light)
- **Alternative Cyan**: `#00FFFF`, `#00FFEF`
- **Background**: Near-black with carbon fiber texture
- **Text**: White primary, gray secondary

## 📦 Setup Instructions

### 1. Local Development

1. Clone or download this repository
2. Place your resume PDF in `assets/` folder as `Odai_Ayyad_Resume.pdf`
3. Add project images to `assets/images/` folder:
   - `yolo-traffic.jpg` (YOLOv11 project)
   - `youtube-agent.jpg` (YouTube AI Agent)
   - `ml-models.jpg` (ML Models project)
4. Open `index.html` in your web browser

### 2. GitHub Pages Deployment

#### Option A: Using GitHub Desktop / Git

1. Create a new repository on GitHub (e.g., `odaiayyad.github.io`)
2. Clone the repository to your local machine
3. Copy all portfolio files into the repository folder
4. Commit and push:
   ```bash
   git add .
   git commit -m "Initial portfolio deployment"
   git push origin main
   ```
5. Go to repository Settings → Pages
6. Under "Source", select `main` branch
7. Click Save
8. Your site will be live at `https://odaiayyad.github.io`

#### Option B: Using GitHub Web Interface

1. Create a new repository on GitHub
2. Click "Upload files"
3. Drag and drop all your portfolio files
4. Commit the changes
5. Enable GitHub Pages in repository settings

### 3. Custom Domain (Optional)

1. Purchase a domain from any registrar
2. Add a `CNAME` file to your repository with your domain name
3. Configure DNS settings at your registrar:
   - Add an A record pointing to GitHub's IPs
   - Or add a CNAME record pointing to `odaiayyad.github.io`
4. Enable custom domain in GitHub Pages settings

## 🖼️ Image Requirements

### Project Images
Create or source images for your projects (recommended size: 800x600px or 16:9 aspect ratio):

- **yolo-traffic.jpg**: Traffic safety/computer vision imagery
- **youtube-agent.jpg**: YouTube/AI/analytics themed image
- **ml-models.jpg**: Machine learning/data science visualization

### Image Resources
You can find free high-quality images from:
- [Unsplash](https://unsplash.com) - Search for "AI", "technology", "data"
- [Pexels](https://pexels.com) - Free stock photos
- Create custom graphics using [Canva](https://canva.com)

### Placeholder Images
If you don't have images ready, you can use:
```html
<img src="https://via.placeholder.com/800x600/0a0a0a/01F5D1?text=Project+Image" alt="Project">
```

## ✏️ Customization

### Update Personal Information
Edit `index.html` to update:
- LinkedIn URL (line ~85)
- GitHub URL (line ~92)
- Email address (line ~99)
- Phone number (line ~465)

### Add/Remove Sections
Sections are clearly marked in `index.html`. You can:
- Comment out sections you don't need
- Duplicate project/course cards for more entries
- Adjust grid layouts in CSS

### Modify Colors
Edit `css/prism-flux-custom.css` root variables:
```css
:root {
    --petronas-cyan: #01F5D1;
    --petronas-light: #34E4CB;
    /* etc. */
}
```

## 🔧 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

The site is fully responsive with:
- Hamburger menu for mobile navigation
- Touch-friendly buttons and links
- Optimized font sizes
- Stacked layouts on small screens

## ⚡ Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Enable Caching**: GitHub Pages automatically handles this
3. **Minify Files**: Consider minifying CSS/JS for production
4. **Lazy Loading**: Images load as you scroll

## 🐛 Troubleshooting

### Images Not Loading
- Check file paths are correct
- Ensure images are in `assets/images/` folder
- Verify file names match exactly (case-sensitive)

### Animations Not Working
- Clear browser cache
- Check JavaScript console for errors
- Ensure `prism-flux-custom.js` is loaded

### Mobile Menu Not Opening
- Verify JavaScript is enabled
- Check that menu toggle ID matches in HTML/JS

## 📄 License

This portfolio template is customized for Odai Ayyad. Feel free to use as reference but please don't copy directly.

## 🤝 Credits

- Design inspired by TemplateMo Prism Flux 600
- Custom implementation by Claude (Anthropic)
- Built for: Odai Ayyad

## 📞 Contact

For questions or support:
- Email: odaiayyad24@ieee.org
- LinkedIn: [linkedin.com/in/odai-ayyad](https://linkedin.com/in/odai-ayyad)
- GitHub: [github.com/odaiayyad](https://github.com/odaiayyad)

---

**Last Updated**: December 2024
**Version**: 1.0.0