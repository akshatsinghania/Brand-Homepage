import React, { useState } from 'react';
import { NavbarWrapper, NavWrapper } from './Navbar.style';
import LogoSvg from '../../Assets/Images/Logo.svg';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(window.innerWidth > 600);

	return (
		<NavbarWrapper>
			<img src={LogoSvg} alt='' className='logo' />
			{navOpen && (
				<NavWrapper className='nav'>
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
			)}
			<div className='phoneMenu'>
				<AiOutlineMenu onClick={() => setNavOpen(!navOpen)} />
			</div>
		</NavbarWrapper>
	);
};

export default Navbar;
