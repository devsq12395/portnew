import { useContext, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';
import './App.css';

import NavBar from './components/objects/NarBar';
import MyContext from './MyContext';

import ScreensContainer from './components/screens/ScreensContainer';

function App() {
  const [count, setCount] = useState(0);
  const {selTab, setSelTab} = useContext(MyContext);

  return (
    <>
      <div>
        <NavBar />
        <ScreensContainer />
      </div>
    </>
  )
}

export default App
