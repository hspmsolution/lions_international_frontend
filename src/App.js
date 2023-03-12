import { useDispatch } from 'react-redux';
import { ADMIN } from './constants/actionTypes';
// routes
import Router from './routes';

// theme
import ThemeProvider from './admin/theme';
// components


// ----------------------------------------------------------------------

export default function App() {

  return (
    <ThemeProvider>
      <Router />
     
    </ThemeProvider>
  );
}
