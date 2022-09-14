import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GolablStyles';
import { THEME_STYLES } from './styles/THEME_STYLES';
import Router from './components/Router/Router';

function App() {
  const [showMobileDevice, setShowMobileDevice] = useState(true);

  return (
    <ThemeProvider theme={THEME_STYLES}>
      <GlobalStyles />
      <Router
        showMobileDevice={showMobileDevice}
        setShowMobileDevice={setShowMobileDevice}
      />
    </ThemeProvider>
  );
}

export default App;
