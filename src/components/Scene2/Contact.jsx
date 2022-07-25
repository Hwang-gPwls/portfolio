import React from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { Github } from 'react-bootstrap-icons';

const Contact = () => {
	const moveLocation = (e) => {
		if (e.target.id === 'github') {
			window.open('https://github.com/Hwang-gPwls');
		}

		if (e.target.id === 'contact') {
			window.open('mailto:h960502hhj@gmail.com');
		}
	};

	const onMouseOver = (e) => {
		let tl = gsap.timeline();
		tl.to(e.target, { y: -40, duration: 0.5 });
		tl.to(e.target, { y: 0, duration: 3 });
	};

	return (
		<Container>
			<Header>Contact :</Header>
			<Arrow>
				<div className='curve'></div>
				<div className='point'></div>
			</Arrow>
			<ContactArea>
				<div
					id='contact'
					className='circle'
					onMouseOver={onMouseOver}
					onClick={moveLocation}>
					<span className='circle_text'>E-MAIL</span>
				</div>
				<div id='github' className='github' onClick={moveLocation}>
					<Github size='60' color='#A0ACBD' />
				</div>
			</ContactArea>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	padding: 2rem;
`;

const Header = styled.div`
	font-size: 7.5vh;
	font-weight: bold;
	color: transparent;
	-webkit-text-stroke: 1.5px ${({ theme }) => theme.color.black};
`;

const Arrow = styled.div`
	position: relative;
	margin-left: 10rem;
	width: 0.1rem;

	.curve {
		border: 2px solid #b78897;
		border-color: transparent transparent transparent
			${({ theme }) => theme.color.pink};
		height: 8rem;
		width: 10rem;
		border-radius: 230px 0 0 150px;
	}

	.point {
		position: absolute;
		left: 0.85rem;
		top: 6.8rem;

		::before,
		::after {
			background-color: ${({ theme }) => theme.color.pink};
			border: 1px solid ${({ theme }) => theme.color.pink};
			height: 25px;
			content: '';
			position: absolute;
		}

		::before {
			top: -9px;
			left: -11px;
			transform: rotate(-74deg);
			-webkit-transform: rotate(-74deg);
			-moz-transform: rotate(-74deg);
			-ms-transform: rotate(-74deg);
		}

		::after {
			top: -20px;
			left: 5px;
			transform: rotate(12deg);
			-webkit-transform: rotate(12deg);
			-moz-transform: rotate(12deg);
			-ms-transform: rotate(12deg);
		}
	}
`;

const ContactArea = styled.div`
	width: 100%;
	padding: 1rem;

	.circle {
		margin-right: 100rem;
		width: 160px;
		height: 160px;
		border-radius: 70%;
		background-color: #b78897;
		text-align: center;
		line-height: 150px;
		margin: 0 0 0 60rem;

		&_text {
			font-size: 1rem;
			color: #ffffff;
			cursor: pointer;
		}
	}

	.github {
		font-size: 15px;
		width: 43px;
		margin: 0 0 0 70rem;
		cursor: pointer;
	}
`;

export default Contact;
