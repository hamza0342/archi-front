import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink} from './NavBarElements';
import {IconContext} from 'react-icons/lib';
import logo from '../../images/Logo A1 White.png';
import {animateScroll as scroll} from 'react-scroll';
import { Modal, Button, Card } from 'antd';
import '../../scss/homepage.scss';


const NavBar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
      };

    const handleCancel = () => {
    setIsModalVisible(false);
    };

    const changeNav = ()=> {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = ()=> {
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value={{ color: '#CA2128'}}>
        <Nav scrollNav = {scrollNav}>
            <NavbarContainer>
                <NavLogo to= '/' onClick={toggleHome}>
                    <img src={logo} height="65px" width="150px" alt="logo" />
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            About
                        </NavLinks>

                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Services
                        </NavLinks>
                        
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Contact
                        </NavLinks>
                        
                    </NavItem>
                </NavMenu>
                <NavBtn onClick={showModal}>
                    <NavBtnLink>
                        Sign-In
                    </NavBtnLink>
                </NavBtn>
                <Modal 
                title="ArchiWiz Sign-In" 
                visible={isModalVisible} 
                onCancel={handleCancel}  
                footer={null}
                width={1000}>
                    <Card>
                    <p>For Administrative priviliges and account usage. Sign-In here.</p>
                    <Button>
                       <Link to="/signin">
                       Admin Sign-In
                       </Link>
                    </Button>
                    </Card>
                    <br />
                    <Card>
                    <p>For contractors who wish to create a new project, or continue their already existing project. Sign-In here.</p>
                    <Button>
                        <Link to="/client/signin">
                            Contractor Sign-In
                       </Link>
                    </Button>
                    </Card>
                    <br />
                    <Card>
                    <p>For sub-contractors who are a part of an already running project. Sign-In here.</p>
                    <Button>
                        <Link to="/gc/signin">
                        Sub-Contractor Sign-In
                        </Link>
                    </Button>
                    </Card>
                </Modal>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default NavBar;
