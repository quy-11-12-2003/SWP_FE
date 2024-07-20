import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom'
import Router from './routes';
import NotistackProvider from './components/NotistackProvider';

function App() {
  return (
    <BrowserRouter>
      <NotistackProvider>
        <CssBaseline />
        <Router />
      </NotistackProvider>
    </BrowserRouter>
  );
}

export default App;
