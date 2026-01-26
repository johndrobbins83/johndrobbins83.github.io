# JOHN D. ROBBINS PORTFOLIO WEBSITE
## Complete Setup & Content Guide

---

## 📋 TABLE OF CONTENTS
1. [Quick Start](#quick-start)
2. [File Structure](#file-structure)
3. [Where to Add Your Content](#where-to-add-your-content)
4. [GitHub & Cloudflare Setup](#github--cloudflare-setup)
5. [Customization Guide](#customization-guide)
6. [Testing Checklist](#testing-checklist)

---

## 🚀 QUICK START

### Step 1: Upload to GitHub
```bash
# Navigate to your project folder
cd /path/to/your/portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio website commit"

# Connect to your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Step 3: Connect Cloudflare Domain
1. In Cloudflare, go to your domain's DNS settings
2. Add a CNAME record:
   - Name: `www` (or `@` for root domain)
   - Target: `YOUR_USERNAME.github.io`
3. In GitHub Pages settings, add your custom domain
4. Enable "Enforce HTTPS"

---

## 📁 FILE STRUCTURE

```
portfolio/
├── index.html                    # Homepage
├── project-management.html       # Project Management page
├── web-development.html          # Web Development page
├── art-design-video.html         # Art & Design page
├── music-audio.html              # Music & Audio page
├── gallery.html                  # Image Gallery page
├── README.md                     # Project documentation
├── SETUP_GUIDE.md               # This file
│
├── css/
│   ├── main.css                 # Main stylesheet
│   └── responsive.css           # Responsive/mobile styles
│
├── js/
│   ├── main.js                  # Core JavaScript
│   ├── gallery.js               # Gallery functionality
│   └── music-popup.js           # Music modals & audio player
│
└── assets/
    ├── images/
    │   ├── profile-picture.jpg  # Your profile photo
    │   ├── favicon.png          # Browser tab icon
    │   ├── gallery/             # Gallery images
    │   ├── projects/            # Project screenshots
    │   ├── music/               # Music project logos
    │   └── videos/              # Video thumbnails
    │
    ├── logos/
    │   └── logo.png             # Your main logo
    │
    ├── videos/                  # Video files (optional)
    │
    ├── audio/                   # Audio files
    │
    └── documents/
        ├── resume.pdf           # Your resume
        └── work-history.pdf     # Work history document
```

---

## 📝 WHERE TO ADD YOUR CONTENT

### 1. LOGO & BRANDING

**Location:** `assets/logos/logo.png`

**Where it appears:**
- Header navigation (all pages)
- Footer (all pages)

**Search for:** `<!-- REPLACE: Add your logo -->`

**Recommended size:** 200x50px (transparent background)

---

### 2. PROFILE PICTURE

**Location:** `assets/images/profile-picture.jpg`

**Where it appears:**
- Homepage hero section

**Search for:** `<!-- REPLACE: Add your profile picture -->`

**Recommended size:** 400x400px (square, professional photo)

---

### 3. FAVICON

**Location:** `assets/images/favicon.png`

**What it is:** The small icon that appears in browser tabs

**Recommended size:** 32x32px or 64x64px

---

### 4. PROJECT IMAGES

**Location:** `assets/images/projects/`

**Files needed:**
- `540-co.png`
- `wilmington-marine.png`
- `seven-rubies.png`
- `jungle-rapids.png`
- `marblehead.png`
- `glory-foods.png`
- `peanut-patch.png`
- `daniel-mccrorie.png`
- `sr-remodeling.png`
- `evident-view.png`

**Search for:** `<!-- REPLACE: Add project logo/screenshot -->`

**Recommended size:** 800x600px (landscape orientation)

---

### 5. GALLERY IMAGES

**Location:** `assets/images/gallery/`

**Categories:**
- `design-1.jpg` through `design-8.jpg` - Your graphic design work
- `photo-1.jpg` through `photo-8.jpg` - Your photography
- `gallery1-1.jpg` through `gallery1-12.jpg` - Gallery 1 collection
- `gallery2-1.jpg` through `gallery2-10.jpg` - Gallery 2 collection

**Search for:** `<!-- REPLACE: Add your design images -->`

**Recommended size:** 1200x800px

---

### 6. MUSIC PROJECT LOGOS

**Location:** `assets/images/music/`

**Files needed:**
- `run-dmt-logo.png`
- `pplprsn-logo.png`
- `sobo-logo.png`
- `deemster-logo.png`

**Search for:** `<!-- REPLACE: Add your music project logos -->`

**Recommended size:** 500x500px (square, album art style)

---

### 7. VIDEO CONTENT

**Location:** `assets/images/videos/` (thumbnails) or `assets/videos/` (actual videos)

**Files needed:**
- `video-thumb-1.jpg` through `video-thumb-4.jpg`

**Search for:** `<!-- REPLACE: Add your video thumbnails/embeds -->`

**Note:** You can either:
1. Upload video files to `assets/videos/` and use HTML5 video player
2. Link to YouTube/Vimeo
3. Use video thumbnails that link to external platforms

---

### 8. AUDIO FILES

**Location:** `assets/audio/`

**Files:** Your audio tracks (MP3 format recommended)

**Search for:** `<!-- REPLACE: Add your audio tracks -->`

**Note:** Audio files will play in the built-in audio player on the Music & Audio page

---

### 9. DOCUMENTS

**Location:** `assets/documents/`

**Files needed:**
- `resume.pdf` - Your resume
- `work-history.pdf` - Detailed work history

**Search for:** `<!-- REPLACE: Add your LinkedIn and Resume links -->`

---

### 10. SPOTIFY WIDGETS

**Location:** In the HTML files, search for `<!-- WIDGET: Spotify embed code goes here -->`

**How to get Spotify embed code:**
1. Go to your artist/album/playlist on Spotify
2. Click the "..." menu
3. Select "Share" → "Embed"
4. Copy the iframe code
5. Paste it where indicated

**Files with Spotify widgets:**
- `music-audio.html` (4 modals)

---

### 11. SOUNDCLOUD WIDGET

**Location:** `music-audio.html`, search for `<!-- WIDGET: Soundcloud Playlist Embed -->`

**How to get Soundcloud embed code:**
1. Go to your playlist on Soundcloud
2. Click "Share"
3. Click "Embed"
4. Copy the iframe code
5. Replace the placeholder URL

---

### 12. TEXT CONTENT

**Search for these in the HTML files:**

- `<!-- REPLACE: Add your professional summary -->`
- `<!-- REPLACE: Add summary text about your web development experience -->`
- `<!-- REPLACE: Add your summary of project management duties -->`
- `<!-- REPLACE: Add your summary of web development duties -->`
- `<!-- REPLACE: Add your summary of art/design duties -->`
- `<!-- REPLACE: Add your summary of music/audio duties -->`

**Update with your own descriptions and experiences.**

---

### 13. LINKS

**Search for:** `<!-- REPLACE: Add your LinkedIn URL -->`

**Update all instances of:**
- `https://linkedin.com/in/yourprofile` - Your actual LinkedIn URL
- Project URLs (make sure they're accurate)
- Social media links

---

## ⚙️ GITHUB & CLOUDFLARE SETUP

### GitHub Repository Setup

1. **Create a new repository** on GitHub
   - Go to github.com
   - Click "New repository"
   - Name it (e.g., "portfolio" or "johndrobbins-portfolio")
   - Make it public
   - Don't initialize with README (we already have one)

2. **Connect your local files**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Repository Settings → Pages
   - Source: main branch
   - Save

### Cloudflare R2 Setup (for large media files - OPTIONAL)

If you have many large images/videos, you can use Cloudflare R2:

1. **Create R2 bucket**
   - Go to Cloudflare Dashboard
   - R2 → Create bucket
   - Name it (e.g., "portfolio-media")

2. **Upload large files**
   - Upload videos, high-res images
   - Get public URLs

3. **Update HTML**
   - Replace local paths with R2 URLs
   - Example: `<img src="https://your-bucket.r2.dev/image.jpg">`

### Custom Domain Setup

1. **In Cloudflare DNS:**
   ```
   Type: CNAME
   Name: www (or @)
   Target: YOUR_USERNAME.github.io
   Proxy status: Proxied
   ```

2. **In GitHub Pages settings:**
   - Add custom domain: `www.yoursite.com`
   - Enable "Enforce HTTPS"

3. **Wait for DNS propagation** (can take 24-48 hours)

---

## 🎨 CUSTOMIZATION GUIDE

### Changing Colors

**File:** `css/main.css`

**Find the CSS Variables section:**
```css
:root {
    --light-gray: #D1D1D1;
    --off-white: #DBDBDB;
    --sky-blue: #85C7F2;
    --dark-gray: #636363;
    --charcoal: #4C4C4C;
}
```

**Change these hex values to your preferred colors.**

---

### Changing Fonts

**File:** `css/main.css`

**Find:**
```css
:root {
    --font-primary: 'Helvetica Neue', Arial, sans-serif;
    --font-heading: 'Georgia', serif;
}
```

**To use Google Fonts:**

1. Go to fonts.google.com
2. Select your fonts
3. Copy the `<link>` code
4. Add to `<head>` of all HTML files
5. Update the CSS variables

---

### Adding More Project Cards

**File:** Any project page (e.g., `project-management.html`)

**Find the projects grid:**
```html
<div class="projects-grid grid-2">
    <!-- Existing projects -->
</div>
```

**Copy an existing project card and modify:**
```html
<div class="project-card">
    <img src="assets/images/projects/NEW-PROJECT.png" alt="New Project" class="project-image">
    <div class="project-info">
        <h3>www.newproject.com</h3>
        <p><strong>Dates:</strong> Month Year - Month Year</p>
        <p><strong>Role:</strong> Your Role</p>
        <p><strong>Platform:</strong> Technology Used</p>
        <p><strong>Description:</strong> Project description here.</p>
        <a href="https://www.newproject.com" class="btn mt-2" target="_blank">View Project</a>
    </div>
</div>
```

---

### Adding More Gallery Categories

**File:** `gallery.html`

**Copy an entire gallery section and modify the IDs:**

```html
<section class="gallery-section section">
    <div class="container">
        <div class="gallery-header">
            <h2>Gallery 3</h2>
            <button class="view-all-btn" data-gallery="gallery3">View All</button>
        </div>
        
        <div class="gallery-preview" id="gallery3-preview">
            <!-- Add your images -->
        </div>
        
        <div class="gallery-full" id="gallery3-full">
            <!-- Add more images -->
        </div>
    </div>
</section>
```

---

### Contact Form Integration

**Current Setup:** The form shows a message but doesn't actually send emails.

**To make it functional:**

**Option 1: Use Formspree (Easiest)**
1. Go to formspree.io
2. Create free account
3. Get your form endpoint
4. Update the form in all HTML files:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: Use EmailJS**
1. Go to emailjs.com
2. Set up email service
3. Add EmailJS SDK to your site
4. Update `js/main.js` with EmailJS code

**Option 3: Backend API**
- Create your own backend with Node.js/Python/PHP
- Update the form submission handler in `js/main.js`

---

## ✅ TESTING CHECKLIST

Before going live, test these items:

### Desktop Testing
- [ ] All navigation links work
- [ ] All external links open in new tabs
- [ ] Contact form shows success/error messages
- [ ] All images load properly
- [ ] Gallery dropdown works
- [ ] Gallery lightbox works (click images)
- [ ] Music project modals open
- [ ] Audio player works
- [ ] Smooth scrolling works
- [ ] Footer links work

### Mobile Testing
- [ ] Mobile menu opens/closes
- [ ] All pages display properly on mobile
- [ ] Images are responsive
- [ ] Forms are easy to fill out on mobile
- [ ] Touch interactions work (modals, gallery)

### Browser Testing
Test in:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Content Checklist
- [ ] All images replaced with your actual images
- [ ] All text updated with your information
- [ ] All links updated with your URLs
- [ ] Resume PDF uploaded
- [ ] Profile picture added
- [ ] Logo added
- [ ] Favicon added
- [ ] LinkedIn URL updated
- [ ] Email address updated
- [ ] Spotify/Soundcloud widgets added

### SEO Checklist
- [ ] Page titles are unique and descriptive
- [ ] Meta descriptions added
- [ ] Alt text on all images
- [ ] Heading hierarchy is correct (H1 → H2 → H3)

---

## 🔧 COMMON ISSUES & SOLUTIONS

### Issue: Images not showing
**Solution:** 
- Check file paths are correct
- Ensure image files are in the correct folders
- Check file extensions match (`.jpg` vs `.JPG`)

### Issue: GitHub Pages not updating
**Solution:**
- Wait 5-10 minutes for changes to deploy
- Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
- Check GitHub Actions for build errors

### Issue: Custom domain not working
**Solution:**
- Wait 24-48 hours for DNS propagation
- Check Cloudflare DNS settings
- Verify CNAME file in repository

### Issue: Mobile menu not working
**Solution:**
- Check browser console for JavaScript errors
- Ensure `main.js` is loading properly

---

## 📞 NEED HELP?

If you run into issues:

1. Check browser console for errors (F12 → Console)
2. Validate HTML: validator.w3.org
3. Check GitHub repository Issues tab
4. Review this guide again

---

## 🎉 YOU'RE DONE!

Once you've:
1. ✅ Replaced all content
2. ✅ Uploaded to GitHub
3. ✅ Connected your domain
4. ✅ Tested everything

Your portfolio website is live! 🚀

---

**Last Updated:** January 2026
**Version:** 1.0
