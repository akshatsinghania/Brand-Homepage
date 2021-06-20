import styled from 'styled-components';

export const NavbarWrapper = styled.div`
	position: fixed;
	display: flex;
	height: 12%;
	width: 100%;
	background-color: black;
	margin: 0.5% auto;
	.logo {
		margin: 1%;
		justify-self: left;
	}
`;
export const NavWrapper = styled.div`
	display: flex;
	width: 30%;
	margin-left: auto;
	align-items: center;
	justify-content: space-evenly;
	* {
		font-weight: 400;
	}
	.nav__item {
		text-transform: uppercase;
		color: #e5e5e5;
	}
	.nav__item-dropdown {
		.dropdown-icon {
			font-style: large;
		}
		.nav__item-menu {
			display: none;
			position: fixed;
		}
		:hover {
			.nav__item-menu {
				display: flex;
				flex-direction: column;
				background-color: black;
				text-align: center;
				padding: 2%;
			}
		}
	}
	.nav__item-border {
		border-style: solid;
		padding: 3%;
	}
`;
