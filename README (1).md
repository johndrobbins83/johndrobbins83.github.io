# John D. Robbins Professional Portfolio Website

## Project Overview
Professional portfolio website showcasing project management, web development, art/design, and music projects.

## Technology Stack
- HTML5, CSS3, JavaScript
- GitHub Pages hosting
- Cloudflare R2 for assets
- Custom domain via Cloudflare

## Site Structure
```
/
├── index.html                 # Homepage
├── project-management.html    # Project Management page
├── web-development.html       # Web Development page
├── art-design-video.html      # Art & Design page
├── music-audio.html           # Music & Audio page
├── gallery.html               # Photo gallery
├── css/
│   ├── main.css              # Main stylesheet
│   └── responsive.css        # Responsive styles
├── js/
│   ├── main.js               # Main JavaScript
│   ├── gallery.js            # Gallery functionality
│   └── music-popup.js        # Music popup modal
├── assets/
│   ├── images/               # Site images
│   ├── videos/               # Video files
│   ├── audio/                # Audio files
│   └── logos/                # Company/project logos
└── README.md                 # This file
```

## Color Palette
- Light Gray: #D1D1D1
- Off White: #DBDBDB
- Sky Blue: #85C7F2
- Dark Gray: #636363
- Charcoal: #4C4C4C

## Separate Domains
- Main site: sevenrubies.com (or your chosen domain)
- PPLPRSN: Will be separate domain
- RUN DMT: Will be separate domain

## Setup Instructions

### 1. Initial GitHub Setup
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [your-repo-url]
git push -u origin main
```

### 2. GitHub Pages Configuration
- Go to repository Settings
- Navigate to Pages
- Source: Deploy from main branch
- Folder: / (root)

### 3. Cloudflare Configuration
- Point your domain DNS to GitHub Pages
- Configure R2 bucket for media assets
- Set up custom domain in GitHub Pages settings

## Content Placeholders
Throughout the HTML files, you'll find clearly marked sections like:
```html
<!-- REPLACE: Add your profile picture here -->
<!-- REPLACE: Add logo image -->
<!-- WIDGET: Spotify embed code goes here -->
```

## Development Workflow
1. Edit files locally
2. Test in browser
3. Commit changes: `git add . && git commit -m "Description"`
4. Push to GitHub: `git push`
5. Changes go live automatically via GitHub Pages

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile responsive

## Contact
John D. Robbins
johndrobbins83@gmail.com
