# 🚀 Deployment Guide

Complete guide to deploy your Badal Creative Portfolio to various platforms.

## Table of Contents
1. [AWS S3 + CloudFront](#aws-s3--cloudfront)
2. [Netlify](#netlify)
3. [Vercel](#vercel)
4. [GitHub Pages](#github-pages)
5. [Firebase Hosting](#firebase-hosting)

---

## AWS S3 + CloudFront

### Prerequisites
- AWS Account
- AWS CLI installed
- Domain name (optional)

### Step 1: Create S3 Bucket
```bash
# Create bucket (replace with your bucket name)
aws s3 mb s3://badal-portfolio-2026

# Enable static website hosting
aws s3 website s3://badal-portfolio-2026 --index-document index.html --error-document index.html
```

### Step 2: Update Bucket Policy
Create a file `bucket-policy.json`:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::badal-portfolio-2026/*"
    }
  ]
}
```

Apply the policy:
```bash
aws s3api put-bucket-policy --bucket badal-portfolio-2026 --policy file://bucket-policy.json
```

### Step 3: Upload Files
```bash
# Upload all files
aws s3 sync . s3://badal-portfolio-2026 --exclude ".git/*" --exclude "*.md"

# Set correct content types
aws s3 cp s3://badal-portfolio-2026 s3://badal-portfolio-2026 \
  --recursive \
  --exclude "*" \
  --include "*.html" \
  --content-type "text/html" \
  --metadata-directive REPLACE
```

### Step 4: Setup CloudFront (Optional but Recommended)
```bash
# Create CloudFront distribution
aws cloudfront create-distribution \
  --origin-domain-name badal-portfolio-2026.s3-website-us-east-1.amazonaws.com \
  --default-root-object index.html
```

### Cost Estimate
- S3 Storage: ~$0.023/GB/month
- CloudFront: First 50GB free, then $0.085/GB
- Estimated monthly cost: $1-5 for portfolio site

---

## Netlify

### Method 1: Drag & Drop (Easiest)
1. Go to [Netlify](https://app.netlify.com)
2. Sign up / Log in
3. Drag your project folder to the upload area
4. Done! Your site is live in seconds

### Method 2: Git Integration (Recommended)
1. Push your code to GitHub
2. Go to Netlify Dashboard
3. Click "New site from Git"
4. Connect your GitHub repository
5. Configure build settings:
   - Build command: (leave empty)
   - Publish directory: `/`
6. Click "Deploy site"

### Custom Domain Setup
1. Go to Site Settings > Domain Management
2. Click "Add custom domain"
3. Follow DNS configuration instructions
4. Enable HTTPS (automatic)

### Netlify.toml Configuration
Create `netlify.toml` in your root:
```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "no-referrer"
```

---

## Vercel

### Method 1: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to your project
cd badal-creative-portfolio

# Deploy
vercel

# Follow the prompts
```

### Method 2: GitHub Integration
1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Connect GitHub and select repository
5. Click "Deploy"

### vercel.json Configuration
```json
{
  "version": 2,
  "builds": [
    {
      "src": "*.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

---

## GitHub Pages

### Step 1: Prepare Repository
```bash
# Initialize git if not already
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Enhanced portfolio"

# Add remote
git remote add origin https://github.com/yourusername/badal-portfolio.git

# Push to main
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "GitHub Pages" section
3. Select branch: `main`
4. Select folder: `/root`
5. Click Save

### Step 3: Access Your Site
- URL: `https://yourusername.github.io/badal-portfolio/`
- Custom domain: Add CNAME file with your domain

### Using gh-pages Branch (Alternative)
```bash
# Create gh-pages branch
git checkout -b gh-pages

# Push to gh-pages
git push origin gh-pages

# Switch back to main
git checkout main
```

### GitHub Actions for Auto-Deploy
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
          publish_dir: .
```

---

## Firebase Hosting

### Step 1: Install Firebase CLI
```bash
npm install -g firebase-tools

# Login to Firebase
firebase login
```

### Step 2: Initialize Firebase
```bash
# In your project directory
firebase init hosting

# Select:
# - Use existing project or create new
# - Public directory: . (current directory)
# - Single page app: No
# - GitHub auto-deploy: Optional
```

### Step 3: Deploy
```bash
firebase deploy --only hosting
```

### firebase.json Configuration
```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=3600"
          }
        ]
      }
    ]
  }
}
```

---

## Pre-Deployment Checklist

### ✅ Content Review
- [ ] Update all personal information
- [ ] Add your resume PDF to assets folder
- [ ] Replace placeholder images with your content
- [ ] Update social media links
- [ ] Verify email and phone numbers
- [ ] Test all external links

### ✅ Technical Checks
- [ ] Minify CSS and JS (optional)
- [ ] Optimize images
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Check console for errors
- [ ] Verify all pages load correctly
- [ ] Test form submission
- [ ] Check loading times

### ✅ SEO & Analytics
- [ ] Update meta descriptions
- [ ] Add Open Graph tags
- [ ] Setup Google Analytics
- [ ] Submit sitemap to Google
- [ ] Add robots.txt
- [ ] Test SEO with Lighthouse

### ✅ Security
- [ ] Enable HTTPS
- [ ] Add security headers
- [ ] Validate form inputs
- [ ] Remove any sensitive data
- [ ] Test XSS vulnerabilities

---

## Post-Deployment

### Monitor Performance
- Use Google PageSpeed Insights
- Check Lighthouse scores
- Monitor with Google Analytics
- Set up uptime monitoring

### Update Content Regularly
- Add new projects
- Update testimonials
- Keep skills current
- Refresh blog content (if added)

### Backup
- Keep local copy
- Use version control (Git)
- Export analytics data
- Document major changes

---

## Troubleshooting

### Issue: 404 Errors on Page Refresh
**Solution**: Configure server redirects or use hash routing

### Issue: Images Not Loading
**Solution**: Check file paths are relative, verify file names match case

### Issue: Slow Loading
**Solution**: Optimize images, enable CDN, minimize CSS/JS

### Issue: Mobile Display Issues
**Solution**: Test responsive breakpoints, check viewport meta tag

### Issue: Form Not Working
**Solution**: Implement backend endpoint or use service like Formspree

---

## Need Help?

- **AWS**: [AWS Documentation](https://docs.aws.amazon.com/)
- **Netlify**: [Netlify Docs](https://docs.netlify.com/)
- **Vercel**: [Vercel Documentation](https://vercel.com/docs)
- **GitHub Pages**: [GitHub Pages Guide](https://pages.github.com/)
- **Firebase**: [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)

---

**Pro Tip**: Start with Netlify or Vercel for the easiest deployment experience. They're free, fast, and provide automatic HTTPS.

**Best for Production**: AWS S3 + CloudFront for maximum control and scalability.

**Best for Beginners**: Netlify drag-and-drop deployment.

---

*Last Updated: June 2026*
