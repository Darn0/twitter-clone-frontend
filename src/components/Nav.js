import React from "react";
import styled from "styled-components";
import { useQuery } from '@apollo/react-hooks';
import Logout from "./Logout";
import { Link, NavLink } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import { USER } from '../queries';
import {
	Logo,
	HomeIcon,
	ExploreIcon,
	NotificationIcon,
	ProfileIcon,
	BmIcon
} from "./Icons";

const Wrapper = styled.nav`
	width: 17.6%;
	padding: 1rem;
	border-right: 1px solid ${props => props.theme.tertiaryColor};
	height: 100vh;
	position: fixed;
	font-weight: 500;

	svg {
		width: 28px;
		height: 28px;
		margin-right: 0.5rem;
		position: relative;
		color: ${props => props.theme.accentColor};
		top: 7px;
	}

	.logo {
		margin-bottom: 1.3rem;
	}

	li {
		margin-bottom: 2rem;
	}

	.selected,
	.selected svg {
		color: ${props => props.theme.accentColor};
		fill: ${props => props.theme.accentColor};
	}

	@media screen and (max-width: 1110px) {
		width: 10%;

		span {
			display: none;
		}

		button {
			display: none;
		}
	}

	@media screen and (max-width: 530px) {
	}
`;

const Nav = () => {
	const { data: { user } } = useQuery(USER);

	return (
		<Wrapper>
			<ul>
				<Link to="/">
					<h3 className="logo">
						<Logo />
					</h3>
				</Link>
				<li>
					<NavLink exact activeClassName="selected" to="/">
						<HomeIcon /> <span>Home</span>
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="selected" to="/explore">
						<ExploreIcon /> <span>Explore</span>
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="selected " to="/notifications">
						<NotificationIcon /> <span>Notifications</span>
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="selected" to="/bookmarks">
						<BmIcon /> <span>Bookmarks</span>
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="selected" to={`/${user.handle}`}>
						<ProfileIcon /> <span>Profile</span>
					</NavLink>
				</li>
				<li>
					<Logout />
				</li>
				<li style={{ display: "none" }}>
					<ToggleTheme />
				</li>
			</ul>
		</Wrapper>
	);
};

export default Nav;
