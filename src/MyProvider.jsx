import { useState } from "react";
import MyContext from "./MyContext";

const MyProvider = (props) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState (false);
  const [ selTab, setSelTab ] = useState (0);
  const [ animate, setAnimate ] = useState (0);
  const [ isMovTween, setIsMovTween ] = useState (0);

  const state = {
    isLoggedIn, setIsLoggedIn,
    selTab, setSelTab,
    animate, setAnimate,
    isMovTween, setIsMovTween
  };

  return (
    <MyContext.Provider value={state}>{props.children}</MyContext.Provider>
  );
};

export default MyProvider;
