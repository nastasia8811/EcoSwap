import { Box, Container,TextField } from '@mui/material';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import {logo} from "./icons";
import {useState} from "react";


const Header = () => {
const [modalAuthor, setModalAuthor]= useState(false)
    const handleClick = () => {
        setModalAuthor(true)
        console.log("hi")
    }

    return (
        <header className="header">
            <Container maxWidth="xl">
                <Box className="header__wrapper">
                    <Box className="header__wrapper-logo">
                        <Link to="/" className="logo">
                            {logo}
                        </Link>
                    </Box>
                    <Box className="header__wrapper-menu">
                        <NavLink to="/about" className="header__wrapper-menu-item">
                          About us
                        </NavLink>
                        <NavLink to="/blog" className="header__wrapper-menu-item">
                           Blog
                        </NavLink>
                        <NavLink to="/events" className="header__wrapper-menu-item">
                            Events
                        </NavLink>
                        <NavLink to="/authorization" className="header__wrapper-menu-item" onClick={handleClick}>
                            authorization
                        </NavLink>
                    </Box>
                    {/*<Box className="header__wrapper-input">*/}
                    {/*    <Box className="header__wrapper-input-search">*/}
                    {/*        {circum}*/}
                    {/*    </Box>*/}
                    {/*</Box>*/}

                </Box>

            </Container>
        </header>
);
};
export default Header;