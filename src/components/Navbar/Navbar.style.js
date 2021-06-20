import styled from 'styled-components';

export const NavbarWrapper = styled.div`
	position: sticky;
	display: flex;
	height: 12%;
	width: 100%;
	background-color: black;
	margin: 0.5% auto;
	color: #e5e5e5;
	align-items: center;
	.logo {
		margin: 1%;
		justify-self: left;
	}
	.phoneMenu {
		display: none;
	}
	@media only screen and (max-width: 600px) {
		.phoneMenu {
			display: block;
			margin-left: 50% !important;
			color: white;
			font-size: 200%;
			margin: 2%;
			z-index: 100;
		}
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
	@media only screen and (max-width: 600px) {
		position: fixed;
		top: 0;
		left: 0;
		flex-direction: column;
		background-color: black;
		width: 100%;
		height: 100%;
	}
`;
