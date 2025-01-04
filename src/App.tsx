
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

export default function App() {
  return( 
  <MantineProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/auth/signup' element={<SignUp />}></Route>
        <Route path='/auth/signin' element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  </MantineProvider>
  );
}