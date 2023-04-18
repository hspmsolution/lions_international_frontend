import { useDispatch } from 'react-redux';
import { ADMIN } from './constants/actionTypes';
import Notify from './admin/utils/Notify';
// routes
import Router from './routes';

// theme
import ThemeProvider from './admin/theme';
import { slider } from './actions/client';
// components


// ----------------------------------------------------------------------

export default function App() {
  const dispatch=useDispatch();
  dispatch(slider());
  dispatch({type:ADMIN});
  return (
    <ThemeProvider>
      <Notify/>
      <Router />
     
    </ThemeProvider>
  );
}
