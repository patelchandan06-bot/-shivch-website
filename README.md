# Shivch Bespoke — Website

Premium bespoke tailoring website for Shivch Bespoke, Ludhiana.

## 📁 Project Structure

```
shivch-bespoke/
├── index.html              # Homepage
├── css/
│   ├── style.css           # Main stylesheet
│   └── pages.css           # Inner pages stylesheet
├── js/
│   └── main.js             # Interactions & animations
├── images/                 # Add your images here (see below)
└── pages/
    ├── appointment.html    # Book Appointment
    ├── shirts.html         # Shirts collection
    ├── suits.html          # Suits collection
    ├── fabrics.html        # Fabrics
    ├── mtm.html            # Made to Measure
    ├── about.html          # About Us
    └── contact.html        # Contact
```

## 🖼️ Adding Your Images

Place images in the `/images/` folder with these exact filenames:

| Filename                  | Used In              | Recommended Size    |
|--------------------------|----------------------|---------------------|
| `hero-1.jpg`             | Hero slide 1         | 1920×1080px        |
| `hero-2.jpg`             | Hero slide 2         | 1920×1080px        |
| `hero-3.jpg`             | Hero slide 3         | 1920×1080px        |
| `mtm-suits.jpg`          | MTM section          | 900×600px          |
| `collection-shirts.jpg`  | Shirts collection    | 800×600px          |
| `collection-suits.jpg`   | Suits collection     | 800×600px          |
| `collection-fabrics.jpg` | Fabrics collection   | 800×600px          |

> Images degrade gracefully — dark gradient placeholders are shown until images are added.

## ✏️ Key Customisations

### 1. WhatsApp Number
Replace `91XXXXXXXXXX` with your actual number in all HTML files:
```html
<a href="https://wa.me/917856965582" ...>
```

### 2. Email Address
Replace `contact@shivch.com` with your real email in all files.

### 3. Address
Update the atelier address in the footer and contact page.

### 4. Brand Film / Video
In `index.html`, find `.modal-video-placeholder` and replace with an iframe:
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" ...></iframe>
```

### 5. Appointment Form
The form currently uses a browser alert for demo purposes.  
To make it functional, connect it to:
- **Formspree**: Replace the button handler with `<form action="https://formspree.io/f/YOUR_ID">`
- **EmailJS**: Add EmailJS SDK and call from the submit handler in `appointment.html`
- **Backend API**: POST the form data to your server

## 🎨 Design Tokens (CSS Variables)

All colors and fonts are in `css/style.css` under `:root`:

```css
--gold:      #C9A96E   /* Primary accent */
--black:     #0D0D0D   /* Dark backgrounds */
--cream:     #F2EDE6   /* Light section backgrounds */
--font-display: 'Cormorant Garamond'  /* Headings */
--font-body:    'Montserrat'          /* Body text */
```

## 🌐 Deployment

### GitHub Pages
1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your site will be live at `https://shivch.com`

### Custom Domain
A `CNAME` file is already included in the project root pointing to:
```
shivch.com
```

## 📱 Responsive
- ✅ Desktop (1440px+)
- ✅ Laptop (1024px)
- ✅ Tablet (768px)
- ✅ Mobile (375px+)

## 🔧 Pages to Complete
The following pages are scaffolded and need content added (follow the `shirts.html` pattern):
- `pages/suits.html`
- `pages/fabrics.html`
- `pages/mtm.html`
- `pages/about.html`
- `pages/contact.html`

---

© 2025 Shivch Bespoke. All rights reserved.
