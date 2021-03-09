import React from 'react';
import { Link } from "react-router-dom";
import Switch from 'react-switch';
import { useIntl } from 'react-intl';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { RiProjector2Line } from 'react-icons/ri';
import { AiOutlineHome, AiOutlineSearch, AiOutlineInfoCircle } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { MdBusinessCenter } from 'react-icons/md';
import sidebarBg from '../../assets/sb-background4.jpg';
import headerIcon from '../../assets/nyarpbygg-icon-white.png';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import '../../styles/Aside.css';

const Aside = ({ image, collapsed, toggled, lang, handleToggleSidebar, handleCollapsedChange, handleLangChange,}) => {
  const intl = useIntl();
  return (
      <ProSidebar
        image={image ? sidebarBg : false}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: '24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <div className="aside-icon">
              <img src={headerIcon} />
            </div>
          </div>
          <div
              style={{
                paddingLeft: '24px',
                fontSize: 13,
                color: "#ffffff",
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
                <Switch
                height={16}
                width={30}
                checkedIcon={<BsArrowRight />}
                uncheckedIcon={<BsArrowLeft />}
                onChange={handleCollapsedChange}
                checked={collapsed}
                onColor="#353532"
                offColor="#353532"
                onHandleColor= "#ffffff" 
                offHandleColor= "#ffffff" 
                />
            </div>
            <div            
                style={{
                  paddingLeft: '24px',
                  paddingBottom: '24px',
                  textTransform: 'uppercase',
                  fontSize: 10,
                  color: "#ffffff", 
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                <Switch
                height={16}
                width={30}
                checkedIcon={"En"}
                uncheckedIcon={"Se"}
                onChange={handleLangChange}
                checked={lang}
                onColor="#353532"
                offColor="#353532"
                onHandleColor= "#ffffff" 
                offHandleColor= "#ffffff" 
                />
            </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<AiOutlineHome />} onClick={() => handleToggleSidebar(false)} > 
              <Link to="/">Hem</Link>
            </MenuItem>
            <MenuItem icon={<RiProjector2Line />} onClick={() => handleToggleSidebar(false)} > 
              <Link to="/projekt">Projekt</Link>
            </MenuItem>
            <MenuItem icon={<AiOutlineInfoCircle />} onClick={() => handleToggleSidebar(false)} > 
              <Link to="/om">Om</Link>
            </MenuItem>
            <MenuItem  icon={<BiMessageDetail />} onClick={() => handleToggleSidebar(false)} >
              <Link to="/kontakt">Kontakt</Link>
            </MenuItem>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: 'center' }}>
          <div className="sidebar-btn-wrapper" style={{ padding: '20px 24px', }}>
            <a href="https://www.allabolag.se/5593027369/nyarp-bygg-ab" target="_blank" className="sidebar-btn" rel="noopener noreferrer">
              <MdBusinessCenter />
              <span> Org: 559302-7369</span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
  );
};

export default Aside;
