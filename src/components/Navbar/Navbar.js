import React from 'react';
import { NavbarWrapper, NavWrapper } from './Navbar.style';
import LogoSvg from '../../Assets/Images/Logo.svg';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
	return (
		<NavbarWrapper>
			<img src={LogoSvg} alt='' className='logo' />
			<NavWrapper>
				<h3 className='nav__item'>Home</h3>
				<h3 className='nav__item'>Blog</h3>
				<h3 className='nav__item nav__item-dropdown'>
					Services
					<IoMdArrowDropdown className='dropdown-icon' />
					<div className='nav__item-menu'>
						<h5 className='nav__item-dropdown__item'>Website</h5>
						<h5 className='nav__item-dropdown__item'>Apps</h5>
					</div>
				</h3>
				<h3 className='nav__item nav__item-border'>Contact Us</h3>
			</NavWrapper>
		</NavbarWrapper>
	);
};

export default Navbar;
