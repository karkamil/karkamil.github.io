import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { PanoramaOutlined, LaptopMac, WorkOutlineOutlined, PhoneInTalkOutlined } from '@material-ui/icons';

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  display: flex;
  align-items: flex-end;
`

const Navbar = styled.div`
  position: fixed;
  margin-bottom: 75px;
  min-width: 10%;
  justify-content: space-between;
  display: none;
  display: ${props => props.state && "flex"};
  transform:scale(1.5);
  border: 1px solid grey;
  
`

const Icon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  transition: all 0.5s ease;
  &:hover {
    color: green;
    transform:scale(1.6);
    cursor: pointer;
  };
`



const NavbarX = () => {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);

  const [dt, setDt] = useState(new Date().getSeconds());

  const [menu, setMenu] = useState(false)

  useEffect(() => {
    if (menu) {

      const secTimer = setInterval( () => {
        setDt(new Date().getSeconds())
        setMenu(!true)    
      },3000)
      return () => clearInterval(secTimer);
    }
    console.log(dt, menu)
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[menu]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
        setMenu(true);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
        setMenu(true);
      }

      prevScrollY.current = currentScrollY;
      console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <Container>
      <Navbar state={menu}>
        <Icon>
          <PanoramaOutlined />
        </Icon>
        <Icon>
          <LaptopMac />
        </Icon>
        <Icon>
          <WorkOutlineOutlined/>
        </Icon>
        <Icon>
          <PhoneInTalkOutlined/>
        </Icon>
      </Navbar>
    </Container>
  )
}

export default NavbarX