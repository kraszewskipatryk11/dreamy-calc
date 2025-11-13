# 🌙 Sleepy Calc - Sleep Calculator

> Calculate the perfect bedtime based on 90-minute sleep cycles for optimal rest and productivity.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com/)

---

## ✨ Features

### 🛏️ Three Calculation Modes
- **When to Sleep?** - Calculate optimal bedtimes based on your wake-up time
- **When to Wake?** - Find the best wake-up times if you're going to bed now
- **Power Nap** - Quick 25-minute boost or full 90-minute cycle nap

### 🎨 Beautiful UI/UX
- ✅ **Dark/Light Mode** - System-aware theme with smooth transitions
- ✅ **Gradient Background** - Subtle navy-to-purple gradient in dark mode
- ✅ **Smooth Animations** - Framer Motion powered transitions
- ✅ **Custom Time Picker** - Scroll & drag with mouse or touch support
- ✅ **Responsive Design** - Optimized for mobile, tablet, and desktop

### 📱 Mobile-First
- ✅ **Touch Support** - Full gesture support for iOS & Android
- ✅ **Responsive Tabs** - Adaptive text and icons for small screens
- ✅ **PWA-Ready** - Fast loading and smooth experience

### 🔧 Technical Features
- ✅ **Dynamic Page Title** - Changes based on calculated results
- ✅ **Custom Favicon** - Moon emoji as site icon
- ✅ **Vercel Analytics** - Built-in traffic tracking
- ✅ **Terms & Privacy** - Full legal compliance page

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router & Turbopack |
| **React 19** | UI library with latest features |
| **TypeScript** | Type-safe development |
| **Tailwind CSS 4** | Utility-first styling with OKLCH colors |
| **shadcn/ui** | Premium UI components (New York style) |
| **Framer Motion** | Smooth animations & transitions |
| **next-themes** | Dark mode with system detection |
| **Lucide Icons** | Beautiful icon set |
| **Vercel Analytics** | Traffic & performance monitoring |

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/kraszewskipatryk11/dreamy-calc.git

# Navigate to project directory
cd dreamy-calc/my-app

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Project Structure

```
my-app/
├── app/
│   ├── layout.tsx          # Root layout with Analytics
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles & themes
│   ├── sleep-tips/         # Sleep tips page
│   └── terms-privacy/      # Legal page
├── components/
│   ├── header.tsx          # Navigation bar
│   ├── footer.tsx          # Footer with links
│   ├── sleep-calculator.tsx # Main calculator logic
│   ├── time-picker-scroll.tsx # Custom time input
│   ├── mode-toggle.tsx     # Dark mode toggle
│   └── ui/                 # shadcn/ui components
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

---

## 🧮 How It Works

### Sleep Cycle Science
The calculator is based on the **90-minute sleep cycle** theory:
- Each complete sleep cycle lasts ~90 minutes
- Waking at the end of a cycle = feeling refreshed
- Waking in the middle = feeling groggy

### Calculation Logic

**Bedtime Calculator:**
```typescript
// 6 cycles × 90 min + 15 min (fall asleep time)
totalMinutes = (cycles * 90) + 15
bedtime = wakeTime - totalMinutes
```

**Wake Time Calculator:**
```typescript
// Current time + 15 min + (cycles × 90 min)
wakeTime = now + 15 + (cycles * 90)
```

**Power Nap:**
- 25 minutes: Quick energy boost
- 90 minutes: Full sleep cycle

---

## 🎨 Design System

### Colors (OKLCH)
- **Background (Dark):** `oklch(0.129 0.042 264.695)` - Navy blue
- **Gradient End:** `oklch(0.15 0.055 290)` - Dark purple
- **Primary:** Adaptive blue/slate tones
- **Accent:** Purple highlights

### Typography
- **Sans:** Geist Sans (Vercel's font)
- **Mono:** Geist Mono

### Responsive Breakpoints
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Main calculator with 3 tabs |
| `/sleep-tips` | Educational content about sleep |
| `/terms-privacy` | Terms of use & privacy policy |

---

## 🔐 Privacy & Legal

- **No data collection** - Calculator inputs stay in your browser
- **Local storage only** - Theme preference saved locally
- **Analytics** - Anonymous traffic data via Vercel Analytics
- **GDPR/CCPA compliant** - See `/terms-privacy` page

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kraszewskipatryk11/dreamy-calc)

Or manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Variables
No environment variables required! 🎉

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Patryk Kraszewski**
- GitHub: [@kraszewskipatryk11](https://github.com/kraszewskipatryk11)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Vercel](https://vercel.com/) - Hosting & Analytics
- [Lucide](https://lucide.dev/) - Icon set
- Sleep science research from National Sleep Foundation

---

## 📊 Stats

![GitHub Stars](https://img.shields.io/github/stars/kraszewskipatryk11/dreamy-calc?style=social)
![GitHub Forks](https://img.shields.io/github/forks/kraszewskipatryk11/dreamy-calc?style=social)
![GitHub Issues](https://img.shields.io/github/issues/kraszewskipatryk11/dreamy-calc)

---

<div align="center">

### 💤 Sleep better, live better. 🌙✨

Made with ❤️ for better sleep

[Live Demo](https://sleepy-calc.com) • [Report Bug](https://github.com/kraszewskipatryk11/dreamy-calc/issues) • [Request Feature](https://github.com/kraszewskipatryk11/dreamy-calc/issues)

</div>
