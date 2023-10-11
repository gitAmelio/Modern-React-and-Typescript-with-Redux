import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'; 
import App from './App.tsx'
import './index.css'
import { store } from './store/index.ts';

const el = document.getElementById('root');

const root = createRoot(el!);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
