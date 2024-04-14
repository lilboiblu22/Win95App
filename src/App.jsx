import './App.css'
import { styleReset } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';

import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';


import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import EnriquePage from './EnriquePage'; // Make sure the path is correct
import VictoriaPage from './VictoriaPage'; // Make sure the path is correct

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

function App() {

  return (
    <Router>
      <ThemeProvider theme={original}>
        <GlobalStyles />
        <div className="topnav">
          <Link to="/"><li>Home</li></Link>
          <Link to="/enrique"><li>Enrique's Page</li></Link>
          <Link to="/victoria"><li>Victoria's Page</li></Link>
        </div>
        <Routes>
          <Route path="/" element={
          <div>
            <h1>Welcome to the Home Page</h1>
            <br />
            <p>Click on the links above to visit Enrique's or Victoria's page</p>
            <br />
            <p> We'll be updating with cool stuff we find online.</p>
          </div>


          } />
          <Route path="/enrique" element={<EnriquePage />} />
          <Route path="/victoria" element={<VictoriaPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  )
  
}

export default App
