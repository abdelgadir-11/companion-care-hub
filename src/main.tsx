
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Use requestAnimationFrame to ensure DOM is fully loaded
requestAnimationFrame(() => {
  const root = document.getElementById("root");
  if (root) {
    createRoot(root).render(<App />);
  } else {
    console.error("Root element not found");
  }
});
