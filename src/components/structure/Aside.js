import React from 'react';
import { Link } from "react-router-dom";
import Switch from 'react-switch';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { RiProjector2Line, RiBuilding2Line } from 'react-icons/ri';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { TiContacts } from 'react-icons/ti'; 
import { BiMessageDetail } from 'react-icons/bi';
import { MdBusinessCenter } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import sidebarBg from '../../assets/sb-background4.jpg';
import light from '../../assets/lightwood.jpg';
import headerIcon from '../../assets/funkis.png';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Aside = ({ image, collapsed, toggled, lang, handleToggleSidebar, handleCollapsedChange, handleLangChange,}) => {
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
              padding: '20px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 18,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >

              <div className="aside-icon">
                <Link to="/" className="aside-icon" >
                  NYARP BYGG AB
                </Link>
              </div>
          </div>
          <div
              style={{
                position: 'absolute',
                top: '43px',
                left: '24px',
                fontSize: 13,
                color: "#ffffff",
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                marginBottom: '10px'
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
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<AiOutlineInfoCircle />} onClick={() => handleToggleSidebar(false)} > 
              <Link to="/om">Om oss</Link>
            </MenuItem>
            <MenuItem icon={<RiBuilding2Line />} onClick={() => handleToggleSidebar(false)} > 
              <Link to="/tjanster">Tj??nster</Link>
            </MenuItem>
            <MenuItem icon={<RiProjector2Line />} onClick={() => handleToggleSidebar(false)} > 
              <Link to="/projekt">Genomf??rda <br /> uppdrag</Link>
            </MenuItem>
            <MenuItem  icon={<TiContacts />} onClick={() => handleToggleSidebar(false)} >
              <Link to="/kontakt">Kontakt</Link>
            </MenuItem>
          </Menu>
        </SidebarContent>

        <SidebarFooter>
          <div className="sidebar-btn-wrapper" style={{ padding: '20px 24px', }}>
            <a href="https://www.google.com/maps/place/V%C3%A4ttergatan+25C,+564+32+Bankeryd/@57.8582882,14.1329079,17z/data=!3m1!4b1!4m5!3m4!1s0x465a693528155a1d:0x1d019fed1ecf9879!8m2!3d57.8582882!4d14.1350966" target="_blank" className="sidebar-btn" rel="noopener noreferrer">
            <FiMapPin />
            <span>Bankeryd</span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
  );
};

export default Aside;
