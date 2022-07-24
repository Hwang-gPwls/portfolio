import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackgroundImg from '../../asset/images/noisy-texture.png';

const menuItems = [
	{
		key: 'about',
		title: 'About',
		link: '/',
	},
	{
		key: 'strenth',
		title: 'Strength',
		link: '/strength',
	},
	{
		key: 'projects',
		title: 'Projects',
		link: '/career',
	},
];

const Header = () => {
	return (
		<Container>
			<div className='nav'>
				{menuItems.map((item, idx) => (
					<Link to={item.link} key={idx.toString()}>
						<Menu key={item.key}>{item.title}</Menu>
					</Link>
				))}
			</div>
		</Container>
	);
};

const Container = styled.div`
	position: fixed;
	height: 44px;
	top: 0;
	left: 0;
	right: 0;
	padding: 1rem 2rem;
	margin: 8px;
	z-index: 10000;
	border-style: solid;
	border-width: 1px;
	border-color: #7d97b8;
	background-image: url(${BackgroundImg});
	background-color: #f9f0e0;
	opacity: 100;

	.nav {
		display: flex;
		align-items: center;
		max-width: 1000px;
		height: 100%;
		margin: 0 auto;
		justify-content: space-between;
	}
`;

const Menu = styled.span`
	text-decoration: none;
	display: inline-block;
	position: relative;
	font-size: 1.1rem;
	color: #7d97b8;

	&:before {
		content: '';
		position: absolute;
		right: 50%;
		bottom: 0;
		width: 0;
		height: 2px;
		background-color: #7d97b8;
		transition: all 0.5s;
	}

	&:after {
		content: '';
		position: absolute;
		left: 50%;
		bottom: 0;
		width: 0;
		height: 2px;
		background-color: #7d97b8;
		transition: all 0.5s;
	}

	&:hover&:before {
		width: 50%;
	}

	&:hover&:after {
		width: 50%;
	}
`;

export default Header;
