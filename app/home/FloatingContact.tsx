export default function FloatingContact(){
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
      <a href="tel:+919900000000" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg" aria-label="Call">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12.97.39 1.92.78 2.79a2 2 0 0 1-.45 2.11L9.91 10.09a16 16 0 0 0 6 6l1.47-1.47a2 2 0 0 1 2.11-.45c.87.39 1.82.66 2.79.78A2 2 0 0 1 22 16.92z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </a>
      <a href="https://wa.me/919900000000" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white-1000 shadow-lg" aria-label="WhatsApp">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
  <path 
    d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .18 5.33.18 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.88-5.33 11.88-11.9 0-3.17-1.23-6.15-3.43-8.44z" 
    stroke="#fff" 
    strokeWidth="1.2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  />
  <path 
    d="M16.2 14.6c-.2.55-1.15 1.05-1.6 1.1-.4.05-.9.07-1.45-.1-.35-.12-.8-.27-1.4-.53-2.45-1.06-4.05-3.52-4.18-3.7-.12-.17-1-1.32-1-2.52 0-1.2.63-1.8.85-2.05.23-.25.5-.32.67-.32.17 0 .35 0 .5.01.16.01.38-.06.6.46.2.5.7 1.73.76 1.86.06.12.1.27.02.42-.07.15-.12.25-.25.4-.12.15-.25.33-.35.44-.12.12-.25.25-.1.5.15.25.67 1.1 1.43 1.78.98.88 1.8 1.15 2.05 1.28.25.12.4.1.55-.07.15-.17.65-.75.82-1.02.17-.27.35-.22.6-.12.25.1 1.6.75 1.87.88.27.12.45.2.52.32.07.12.07.7-.13 1.25z"
    stroke="#fff"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
      </a>
    </div>
  )
}
