# ASSETS FOLDER STRUCTURE

This file shows you exactly what files you need to add to make your website work.

## 📁 Complete Folder Structure

```
assets/
├── images/
│   ├── profile-picture.jpg          # Your professional headshot (400x400px)
│   ├── favicon.png                  # Browser tab icon (32x32px)
│   ├── web-dev-featured.jpg         # Featured web dev work (800x600px)
│   │
│   ├── gallery/
│   │   ├── design-1.jpg through design-8.jpg      # Your graphic designs
│   │   ├── photo-1.jpg through photo-8.jpg        # Your photography
│   │   ├── gallery1-1.jpg through gallery1-12.jpg # Gallery 1 images
│   │   └── gallery2-1.jpg through gallery2-10.jpg # Gallery 2 images
│   │
│   ├── projects/
│   │   ├── 540-co.png
│   │   ├── wilmington-marine.png
│   │   ├── seven-rubies.png
│   │   ├── jungle-rapids.png
│   │   ├── jungle-rapids-marketing.png
│   │   ├── marblehead.png
│   │   ├── glory-foods.png
│   │   ├── peanut-patch.png
│   │   ├── daniel-mccrorie.png
│   │   ├── sr-remodeling.png
│   │   └── evident-view.png
│   │
│   ├── music/
│   │   ├── run-dmt-logo.png         # Album art style (500x500px)
│   │   ├── pplprsn-logo.png
│   │   ├── sobo-logo.png
│   │   └── deemster-logo.png
│   │
│   └── videos/
│       ├── video-thumb-1.jpg        # Video thumbnails (800x600px)
│       ├── video-thumb-2.jpg
│       ├── video-thumb-3.jpg
│       └── video-thumb-4.jpg
│
├── logos/
│   ├── logo.png                     # Main site logo (200x50px, transparent)
│   ├── marblehead-logo.png          # Client logos for project pages
│   ├── 540-logo.png
│   ├── daniel-mccrorie-logo.png
│   ├── sr-remodeling-logo.png
│   └── evident-view-logo.png
│
├── videos/                          # Optional: actual video files
│   ├── video-1.mp4
│   ├── video-2.mp4
│   └── ...
│
├── audio/                           # Audio files for player
│   ├── track1.mp3
│   ├── track2.mp3
│   └── ...
│
└── documents/
    ├── resume.pdf                   # Your resume
    └── work-history.pdf             # Work history document
```

## 🖼️ Image Size Recommendations

### Profile Picture
- **Size:** 400x400px
- **Format:** JPG or PNG
- **Type:** Professional headshot

### Logo
- **Size:** 200x50px (or similar aspect ratio)
- **Format:** PNG with transparent background
- **Type:** Your personal or company logo

### Favicon
- **Size:** 32x32px or 64x64px
- **Format:** PNG or ICO
- **Type:** Simplified version of your logo

### Project Images
- **Size:** 800x600px (landscape)
- **Format:** JPG or PNG
- **Type:** Screenshots, mockups, or logos

### Gallery Images
- **Size:** 1200x800px
- **Format:** JPG
- **Type:** High quality photos/designs

### Music Logos
- **Size:** 500x500px (square)
- **Format:** JPG or PNG
- **Type:** Album art style

### Video Thumbnails
- **Size:** 800x600px or 1280x720px
- **Format:** JPG
- **Type:** Frame from video or custom thumbnail

## 📝 How to Create These Folders

### Option 1: Manual Creation
1. Create the main `assets` folder in your project root
2. Create subfolders as shown above
3. Add placeholder images initially
4. Replace with real images later

### Option 2: Using Command Line

**On Mac/Linux:**
```bash
mkdir -p assets/{images/{gallery,projects,music,videos},logos,videos,audio,documents}
```

**On Windows (PowerShell):**
```powershell
New-Item -ItemType Directory -Path "assets/images/gallery" -Force
New-Item -ItemType Directory -Path "assets/images/projects" -Force
New-Item -ItemType Directory -Path "assets/images/music" -Force
New-Item -ItemType Directory -Path "assets/images/videos" -Force
New-Item -ItemType Directory -Path "assets/logos" -Force
New-Item -ItemType Directory -Path "assets/videos" -Force
New-Item -ItemType Directory -Path "assets/audio" -Force
New-Item -ItemType Directory -Path "assets/documents" -Force
```

## 🎨 Using Placeholder Images

If you don't have all images ready, use placeholder services:

### Placeholder Services
- **General Images:** https://via.placeholder.com/800x600
- **Profile Pictures:** https://i.pravatar.cc/400
- **UI/UX Mockups:** https://picsum.photos/800/600

### Example HTML:
```html
<!-- Temporary placeholder -->
<img src="https://via.placeholder.com/800x600" alt="Project Screenshot">

<!-- Replace with actual file when ready -->
<img src="assets/images/projects/your-project.png" alt="Project Screenshot">
```

## ✅ Checklist Before Launch

### Required Files (Must Have)
- [ ] `assets/logos/logo.png` - Site logo
- [ ] `assets/images/profile-picture.jpg` - Your photo
- [ ] `assets/images/favicon.png` - Favicon
- [ ] `assets/documents/resume.pdf` - Your resume

### Project Images (Highly Recommended)
- [ ] All project logos in `assets/images/projects/`
- [ ] All company logos in `assets/logos/`

### Gallery Images (If Using Gallery)
- [ ] At least 8 images in `assets/images/gallery/`
- [ ] Images for Gallery 1 and Gallery 2

### Music Content (If Using Music Section)
- [ ] Music project logos in `assets/images/music/`
- [ ] Spotify embed codes added to HTML

### Optional Files
- [ ] Video files or thumbnails
- [ ] Audio files for audio player
- [ ] Work history PDF

## 🚀 Quick Start with Minimal Files

To get started quickly, you only need:

1. **Logo** (200x50px PNG)
2. **Profile Picture** (400x400px JPG)
3. **Favicon** (32x32px PNG)
4. **Resume** (PDF)
5. **At least one project screenshot** for each section

Add more content as you develop the site!

## 💡 Tips

### File Naming
- Use lowercase
- Use hyphens instead of spaces
- Be descriptive: `marblehead-jewelry-homepage.png` not `img1.png`

### File Formats
- **Photos:** JPG (smaller file size)
- **Graphics with transparency:** PNG
- **Logo:** PNG with transparency
- **Documents:** PDF

### File Size Optimization
- Compress images before uploading
- Recommended tools:
  - TinyPNG (https://tinypng.com/)
  - Squoosh (https://squoosh.app/)
  - ImageOptim (Mac)

### Organization
- Keep source files separate from web files
- Name files consistently
- Group related files together

---

**Need help?** Refer to SETUP_GUIDE.md for detailed instructions.
