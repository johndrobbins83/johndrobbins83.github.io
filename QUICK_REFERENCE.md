# QUICK REFERENCE GUIDE

## 🔍 Find & Replace

These are the most common things you'll need to update:

### 1. Replace ALL instances of:

| Search For | Replace With |
|------------|--------------|
| `johndrobbins83@gmail.com` | Your actual email |
| `https://linkedin.com/in/yourprofile` | Your LinkedIn URL |
| `Your full name` | Your actual name |
| `Seven Rubies` | Your brand name (if different) |

### 2. Search for these comments in ALL HTML files:

- `<!-- REPLACE: Add your logo -->`
- `<!-- REPLACE: Add your profile picture -->`
- `<!-- REPLACE: Add project logo/screenshot -->`
- `<!-- REPLACE: Add your LinkedIn URL -->`
- `<!-- WIDGET: Spotify embed code goes here -->`

## 📄 File Checklist by Page

### index.html (Homepage)
- [ ] Profile picture
- [ ] Professional summary text
- [ ] Project cards (8 total)
- [ ] Art gallery preview (3 images)
- [ ] Music project logos (4 total)
- [ ] Contact form

### project-management.html
- [ ] Work history summary
- [ ] Development projects (4+)
- [ ] Marketing projects (5+)
- [ ] All project logos/images
- [ ] Project descriptions and dates

### web-development.html
- [ ] Work history summary
- [ ] 5 detailed project cards
- [ ] Project logos
- [ ] Project descriptions with specs

### art-design-video.html
- [ ] Work history summary
- [ ] 8 design images
- [ ] 4 video thumbnails
- [ ] 8 photography images
- [ ] Links to gallery pages

### music-audio.html
- [ ] Work history summary
- [ ] 4 music project logos
- [ ] 4 Spotify embed codes
- [ ] Audio player tracks
- [ ] Soundcloud playlist embed

### gallery.html
- [ ] Gallery 1 images (8 preview + more for full)
- [ ] Gallery 2 images (8 preview + more for full)
- [ ] View All buttons working

## 🎨 Color Customization

**File:** `css/main.css` (lines 7-11)

```css
:root {
    --light-gray: #D1D1D1;    /* Background sections */
    --off-white: #DBDBDB;     /* Page background */
    --sky-blue: #85C7F2;      /* Buttons, links, highlights */
    --dark-gray: #636363;     /* Secondary text */
    --charcoal: #4C4C4C;      /* Primary text, headings */
}
```

## 🔗 Important URLs to Update

Search entire project for these and update:

1. **LinkedIn Profile**
   - Find: `https://linkedin.com/in/yourprofile`
   - Count: Appears in all pages (footer + header links)

2. **Resume PDF**
   - Find: `assets/documents/resume.pdf`
   - Make sure file exists!

3. **Work History PDF**
   - Find: `assets/documents/work-history.pdf`
   - Make sure file exists!

4. **Project URLs**
   - Update all `www.example.com` with actual project URLs
   - Make sure they open in new tabs (`target="_blank"`)

5. **Music Project Sites**
   - RUN DMT: Update with actual URL
   - PPLPRSN: Update with actual URL

## 🖼️ Image Priority Order

Add these images FIRST (required for site to look good):

1. **Logo** - `assets/logos/logo.png`
2. **Profile Picture** - `assets/images/profile-picture.jpg`
3. **Favicon** - `assets/images/favicon.png`
4. **Project Images** - At least one per project
5. **Music Logos** - 4 music project logos

Add these LATER (nice to have):

6. Gallery images
7. Video thumbnails
8. Additional project screenshots

## 🎵 Getting Spotify Embed Codes

1. Open Spotify (web or app)
2. Go to your artist profile/album/playlist
3. Click the **...** (three dots menu)
4. Click **Share**
5. Click **Embed**
6. Copy the entire `<iframe>` code
7. Paste into your HTML where indicated

**Example:**
```html
<iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/artist/YOUR_ARTIST_ID" 
        width="100%" height="580" frameBorder="0" 
        allowfullscreen="" loading="lazy">
</iframe>
```

## 🔊 Adding Audio Files

1. Export your audio as MP3
2. Name files clearly: `sound-design-1.mp3`, `podcast-intro.mp3`
3. Upload to `assets/audio/`
4. Update the track list in `music-audio.html`:

```html
<tr class="track-item" data-audio="assets/audio/YOUR-FILE.mp3">
    <td>1</td>
    <td>Track Title</td>
    <td>Artist Name</td>
    <td>Album Name</td>
    <td>3:26</td>
</tr>
```

## 💻 Git Commands Cheat Sheet

### First Time Setup
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
```

### Regular Updates
```bash
git add .
git commit -m "Updated project images"
git push
```

### Check Status
```bash
git status
```

### See What Changed
```bash
git diff
```

## 🚀 Deploy Checklist

Before pushing live:

### Content
- [ ] All placeholder text replaced
- [ ] All images added
- [ ] All links tested
- [ ] Contact form tested
- [ ] Spelling/grammar checked

### Technical
- [ ] All HTML files have unique titles
- [ ] All images have alt text
- [ ] All external links have `target="_blank"`
- [ ] Mobile menu works
- [ ] All pages tested on mobile
- [ ] Site tested in Chrome, Firefox, Safari

### Assets
- [ ] Resume PDF uploaded
- [ ] Logo added
- [ ] Profile picture added
- [ ] Favicon added
- [ ] Project images added

## 🐛 Quick Fixes

### Images Not Showing
**Check:**
1. File path is correct
2. File exists in the folder
3. File extension matches (`.jpg` not `.JPG`)
4. No typos in filename

### Mobile Menu Not Opening
**Check:**
1. Browser console for errors (F12)
2. `main.js` is loading
3. Clear browser cache

### Links Not Working
**Check:**
1. URL is complete (includes `https://`)
2. No trailing spaces
3. `target="_blank"` is present for external links

### Page Not Updating on GitHub Pages
**Solutions:**
1. Wait 5-10 minutes
2. Hard refresh: Ctrl+F5 (PC) or Cmd+Shift+R (Mac)
3. Clear browser cache
4. Check GitHub Actions for errors

## 📱 Contact Form Options

### Option 1: Formspree (Easiest)
1. Sign up at formspree.io
2. Get form endpoint
3. Update form action:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

### Option 2: EmailJS
1. Sign up at emailjs.com
2. Add their SDK
3. Configure email template
4. Update `main.js`

### Option 3: Netlify Forms (if hosting on Netlify)
Add `netlify` attribute to form:
```html
<form netlify>
```

## 🎯 Performance Tips

1. **Compress images** before uploading
   - Use TinyPNG.com
   - Target: < 500KB per image

2. **Lazy load images** (already implemented)

3. **Minimize code** before deployment (optional)
   - CSS: Use cssminifier.com
   - JS: Use jscompress.com

4. **Enable caching** in Cloudflare

## 📞 Support Resources

- **HTML Validator:** validator.w3.org
- **CSS Validator:** jigsaw.w3.org/css-validator
- **Image Compression:** tinypng.com
- **Placeholder Images:** placeholder.com
- **Git Guide:** git-scm.com/doc

---

**Remember:** Start with the basics (logo, profile pic, resume) and add more content gradually!
