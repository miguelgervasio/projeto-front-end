import React from 'react';
import './index.css';
import { HomePage } from './pages/home';
import './breakpoints/responsive.css'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/main';

class App extends React.Component {

  render() {
    return (
      <>

        <AppRouter />

      </>
    )
  }
}

export default App;
