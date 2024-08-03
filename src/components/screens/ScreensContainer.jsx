import React, { useRef, useEffect, useContext, useState } from 'react';
import MyContext from '../../MyContext';

import Screen from './Screen';
import AboutMe from './AboutMe';
import Websites from './Websites';
import Contact from './Contact';
import Skills from './Skills';
import WebsitesMobile from './WebsitesMobile';
import ContactMobile from './ContactMobile';
import SkillsMobile from './SkillsMobile';

const ScreensContainer = () => {
  const { selTab, animate } = useContext(MyContext);
  const containerRef = useRef(null);

  const [ isMobileView, setIsMobileView ] = useState (false);

  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current;
      if (container) {
        container.style.width = `${window.innerWidth * 4}px`;
        setIsMobileView(window.innerWidth < 768);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const moveAmount = selTab * -25;
      container.style.transform = `translateX(${moveAmount}%)`;
    }
  }, [selTab]);

  return (
    <div className="w-screen h-90vh overflow-x-hidden pt-16">
      <div ref={containerRef} className="flex h-full transition-transform duration-300 ease-in-out">
        <div className="w-screen">
          <Screen>
            <AboutMe />
          </Screen>
        </div>
        <div className="w-screen">
          <Screen>
            {isMobileView ? <WebsitesMobile /> : <Websites />}
          </Screen>
        </div>
        <div className="w-screen">
          <Screen>
            {isMobileView ? <SkillsMobile /> : <Skills />}
          </Screen>
        </div>
        <div className="w-screen">
          <Screen>
            {isMobileView ? <ContactMobile /> : <Contact />}
          </Screen>
        </div>
      </div>
    </div>
  );
};

export default ScreensContainer;
