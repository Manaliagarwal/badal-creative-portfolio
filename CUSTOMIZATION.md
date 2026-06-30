# 🎨 Customization Guide

Complete guide to customize your portfolio with your own content, colors, and branding.

## Table of Contents
1. [Quick Start Checklist](#quick-start-checklist)
2. [Personal Information](#personal-information)
3. [Color Scheme](#color-scheme)
4. [Content Updates](#content-updates)
5. [Images & Media](#images--media)
6. [Social Links](#social-links)
7. [Projects & Portfolio](#projects--portfolio)
8. [Advanced Customization](#advanced-customization)

---

## Quick Start Checklist

### Essential Updates (Do These First!)
- [ ] Update name in all pages
- [ ] Change email address
- [ ] Update phone number
- [ ] Replace social media links
- [ ] Add your resume PDF
- [ ] Update location/address
- [ ] Customize hero text
- [ ] Update services/skills
- [ ] Add your projects
- [ ] Replace testimonials

---

## Personal Information

### 1. Name & Logo
**Location**: All HTML files, `<header>` section

```html
<!-- Find and replace -->
<div class="logo">Badal Agarwal</div>

<!-- With your name -->
<div class="logo">Your Name</div>
```

### 2. Email Address
**Location**: All HTML files

Find and replace all instances:
```html
<!-- Old -->
<a href="mailto:badalagrawal99@gmail.com">badalagrawal99@gmail.com</a>

<!-- New -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
```

### 3. Phone Number
**Location**: All HTML files

```html
<!-- Old -->
<a href="tel:+918529698371">+91 8529698371</a>

<!-- New -->
<a href="tel:+1234567890">+1 234 567 890</a>
```

### 4. Location
**Location**: `contact.html`, `about.html`

```html
<!-- Old -->
<p>Pune, Maharashtra, India</p>

<!-- New -->
<p>Your City, State, Country</p>
```

---

## Color Scheme

### Primary Colors
**Location**: `css/style.css` (top of file)

```css
:root {
  /* Background Colors */
  --bg-primary: #0a0e27;      /* Main background */
  --bg-secondary: #151932;    /* Secondary background */
  --bg-card: rgba(255,255,255,0.03); /* Card background */

  /* Accent Colors - CUSTOMIZE THESE */
  --accent-purple: #8b5cf6;   /* Primary brand color */
  --accent-blue: #3b82f6;     /* Secondary accent */
  --accent-cyan: #06b6d4;     /* Tertiary accent */
  --accent-green: #10b981;    /* Success/highlight */

  /* Text Colors */
  --text-primary: #ffffff;    /* Main text */
  --text-secondary: #94a3b8;  /* Secondary text */
  --text-muted: #64748b;      /* Muted text */
}
```

### Popular Color Schemes

#### Professional Blue
```css
--accent-purple: #2563eb;
--accent-blue: #3b82f6;
--accent-cyan: #0ea5e9;
--accent-green: #06b6d4;
```

#### Creative Purple
```css
--accent-purple: #9333ea;
--accent-blue: #a855f7;
--accent-cyan: #c026d3;
--accent-green: #d946ef;
```

#### Warm Orange
```css
--accent-purple: #f97316;
--accent-blue: #fb923c;
--accent-cyan: #fdba74;
--accent-green: #fbbf24;
```

#### Elegant Gold
```css
--accent-purple: #eab308;
--accent-blue: #f59e0b;
--accent-cyan: #fbbf24;
--accent-green: #fcd34d;
```

### Gradient Updates
Find gradient backgrounds and update colors:
```css
/* Hero Title Gradient */
background: linear-gradient(135deg, #YOUR_COLOR_1, #YOUR_COLOR_2, #YOUR_COLOR_3);
```

---

## Content Updates

### 1. Hero Section
**Location**: `index.html`

```html
<section class="hero">
  <h1 class="fade-in">
    Your Compelling Headline Here
  </h1>

  <p class="fade-in">
    Your Professional Title • Key Skill 1 • Key Skill 2 • Key Skill 3
  </p>
</section>
```

**Tips**:
- Keep headline under 15 words
- Use action words (craft, create, design, build)
- Focus on value proposition

### 2. Services/Skills
**Location**: `index.html` - "What I Do" section

```html
<div class="card fade-in">
  <i class="fas fa-your-icon"></i>
  <h3>Your Service Name</h3>
  <p>Description of what you offer and how it helps clients.</p>
</div>
```

### 3. Statistics
**Location**: `index.html` - Statistics section

```html
<div class="stat-item">
  <span class="stat-number">100+</span>
  <span class="stat-label">Your Achievement</span>
</div>
```

### 4. Skills Progress Bars
**Location**: `index.html` - Skills section

```html
<div class="skill-item">
  <div class="skill-header">
    <span class="skill-name"><i class="fas fa-check-circle"></i> Your Skill</span>
    <span class="skill-percentage">90%</span>
  </div>
  <div class="skill-bar">
    <div class="skill-progress" data-percentage="90"></div>
  </div>
</div>
```

### 5. About Me Story
**Location**: `about.html`

Replace the content in the "My Story" section with your own narrative:
- Your background
- What you do
- Your passion
- What makes you unique

### 6. Timeline/Experience
**Location**: `about.html`

```html
<div class="timeline-item">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="timeline-date"><i class="fas fa-calendar"></i> 2020 - Present</div>
    <h3>Your Job Title</h3>
    <p>Company Name</p>
    <p style="margin-top: 10px; color: var(--text-secondary);">
      Description of your role and achievements.
    </p>
  </div>
</div>
```

---

## Images & Media

### 1. Hero Image
**Location**: `index.html`

```html
<!-- Replace URL with your image -->
<img class="img fade-in"
     src="https://your-image-url.com/hero-image.jpg"
     alt="Descriptive alt text">
```

**Recommended Size**: 1200x600px or 1920x1080px

### 2. Profile Picture
**Location**: `about.html`

```html
<img src="assets/images/your-photo.jpg"
     alt="Your Name"
     class="img">
```

**Recommended Size**: 600x600px (square)

### 3. Project Images
**Location**: `projects.html`

```html
<img src="assets/images/project-name.jpg"
     alt="Project Name"
     class="project-image">
```

**Recommended Size**: 800x500px (16:10 ratio)

### 4. Add Local Images
Create directory structure:
```
assets/
├── images/
│   ├── hero.jpg
│   ├── profile.jpg
│   ├── project-1.jpg
│   ├── project-2.jpg
│   └── ...
└── BadalResumepdf.pdf
```

### Image Optimization Tips
- Use WebP format when possible
- Compress images (TinyPNG, ImageOptim)
- Max file size: 200KB per image
- Use descriptive alt text for SEO

---

## Social Links

### 1. Update All Social Links
**Location**: All HTML files (footer and dedicated sections)

```html
<!-- LinkedIn -->
<a href="https://www.linkedin.com/in/YOUR-PROFILE" target="_blank">

<!-- Instagram -->
<a href="https://www.instagram.com/YOUR-HANDLE" target="_blank">

<!-- GitHub -->
<a href="https://github.com/YOUR-USERNAME" target="_blank">

<!-- Twitter -->
<a href="https://twitter.com/YOUR-HANDLE" target="_blank">
```

### 2. Add New Social Platform
**Location**: Footer in all HTML files

```html
<a href="https://platform.com/yourprofile" target="_blank" class="social-icon">
  <i class="fab fa-platform-icon"></i>
</a>
```

Find icon names at [Font Awesome](https://fontawesome.com/icons)

---

## Projects & Portfolio

### 1. Add New Project Card
**Location**: `projects.html`

```html
<div class="project-card fade-in hover-zoom">
  <img src="path/to/project-image.jpg"
       alt="Project Name"
       class="project-image">
  <div class="project-content">
    <div class="project-tags">
      <span class="tag">Tag 1</span>
      <span class="tag">Tag 2</span>
      <span class="tag">Tag 3</span>
    </div>
    <h3><i class="fas fa-icon"></i> Project Name</h3>
    <p>Project description and key achievements.</p>
    <p style="margin-top: 15px; color: var(--accent-cyan);">
      <i class="fas fa-eye"></i> Metric 1 •
      <i class="fas fa-heart"></i> Metric 2 •
      <i class="fas fa-star"></i> Metric 3
    </p>
  </div>
</div>
```

### 2. Remove Placeholder Content
Search for and remove/replace:
- Generic project descriptions
- Sample statistics
- Placeholder testimonials
- Demo links

---

## Testimonials

### Update Client Testimonials
**Location**: `index.html`

```html
<div class="testimonial-card fade-in">
  <img src="https://i.pravatar.cc/150?img=1" alt="Client Name" class="testimonial-avatar">
  <p class="testimonial-text">
    "Your client's testimonial quote here."
  </p>
  <p class="testimonial-author">Client Name</p>
  <p class="testimonial-role">Client Title & Company</p>
</div>
```

**Tips**:
- Use real client photos if possible
- Keep quotes concise (2-3 sentences)
- Include client's position and company
- Get permission before publishing

---

## Advanced Customization

### 1. Add Custom Fonts

```html
<!-- In <head> of HTML files -->
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

```css
/* In style.css */
body {
  font-family: 'YourFont', sans-serif;
}
```

### 2. Custom Animations

```css
/* In style.css */
@keyframes yourCustomAnimation {
  from { /* start state */ }
  to { /* end state */ }
}

.your-element {
  animation: yourCustomAnimation 1s ease;
}
```

### 3. Add New Page

1. Create `new-page.html`
2. Copy header/footer from existing page
3. Add content in middle
4. Update navigation in all files:

```html
<nav>
  <!-- Add your new page link -->
  <a href="new-page.html"><i class="fas fa-icon"></i> New Page</a>
</nav>
```

### 4. Modify Layout

Grid system is flexible:
```css
.grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* Change 300px to adjust card width */
}

.grid-2 {
  grid-template-columns: repeat(2, 1fr);
  /* For 2 columns */
}

.grid-4 {
  grid-template-columns: repeat(4, 1fr);
  /* For 4 columns */
}
```

### 5. Custom Favicon

1. Generate favicon: [Favicon Generator](https://favicon.io/)
2. Save to `assets/favicon.png`
3. Add to `<head>`:

```html
<link rel="icon" type="image/png" href="assets/favicon.png">
```

---

## Testing Checklist

After customization:
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Contact form validates
- [ ] Mobile view looks good
- [ ] Navigation works on all pages
- [ ] Social links open correctly
- [ ] Resume downloads
- [ ] No console errors
- [ ] SEO meta tags updated
- [ ] Analytics tracking (if added)

---

## Common Mistakes to Avoid

1. ❌ Broken image links
2. ❌ Outdated contact information
3. ❌ Dead social media links
4. ❌ Generic placeholder text
5. ❌ Inconsistent branding colors
6. ❌ Poor quality images
7. ❌ Missing alt text on images
8. ❌ Forgetting to update footer
9. ❌ Not testing on mobile
10. ❌ Leaving TODO comments in code

---

## Resources

### Design Inspiration
- [Awwwards](https://www.awwwards.com/)
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)

### Icons
- [Font Awesome](https://fontawesome.com/)
- [Heroicons](https://heroicons.com/)
- [Feather Icons](https://feathericons.com/)

### Colors
- [Coolors](https://coolors.co/)
- [Adobe Color](https://color.adobe.com/)
- [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)

### Images
- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)
- [Pixabay](https://pixabay.com/)

### Fonts
- [Google Fonts](https://fonts.google.com/)
- [Font Pair](https://fontpair.co/)

---

## Need Help?

If you get stuck:
1. Check browser console for errors
2. Verify file paths are correct
3. Test one change at a time
4. Use browser dev tools to inspect elements
5. Refer to original files for reference

---

**Pro Tip**: Make changes incrementally and test frequently. Keep a backup of the original files before major customizations.

**Version Control**: Use Git to track your changes and easily revert if needed.

---

*Happy Customizing! 🎨*

*Last Updated: June 2026*
