import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/base.scss';
import 'react-smooth-flow/style.min.css';

createRoot(document.getElementById('root')!).render(<App />);
