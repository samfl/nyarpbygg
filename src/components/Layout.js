import React, { useState } from 'react';
import Aside from './structure/Aside';
import Main from './structure/Main';
import { BrowserRouter as Router } from 'react-router-dom'; 

function Layout({ setLocale }) {
  const [lang, setLang] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleLangChange = (checked) => {
    setLang(checked);
    setLocale(checked ? 'en' : 'se');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div style={{height: '100%'}} className={`app ${toggled ? '' : 'toggled'}`}>
      <Router>
          <Aside
            image={image}
            collapsed={collapsed}
            lang={lang}
            toggled={toggled}
            handleToggleSidebar={handleToggleSidebar}
            handleCollapsedChange={handleCollapsedChange}
            handleLangChange={handleLangChange}
          />
          <Main
            image={image}
            toggled={toggled}
            collapsed={collapsed}
            lang={lang}
            handleToggleSidebar={handleToggleSidebar}
            handleCollapsedChange={handleCollapsedChange}
            handleLangChange={handleLangChange}
            handleImageChange={handleImageChange}
          />
      </Router>
    </div>
  );
}

export default Layout;
