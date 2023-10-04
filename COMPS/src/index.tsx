import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'
import { NavigationProvider } from './context/navigation';
import Link from './components/Link';


const element = document.getElementById('root');

const root = createRoot(element!);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
)
