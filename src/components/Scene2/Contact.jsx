import React from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

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
					<span className='circle_text'>h960502hhj@gmail.com</span>
				</div>
				<p id='github' className='github' onClick={moveLocation}>
					github
				</p>
			</ContactArea>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	padding: 2rem;
`;

const Arrow = styled.div`
	position: relative;
	margin-left: 60rem;
	width: 0.1rem;

	.curve {
		border: 2px solid #b78897;
		border-color: transparent transparent transparent #b78897;
		height: 10rem;
		width: 10rem;
		border-radius: 230px 0 0 150px;
	}

	.point {
		position: absolute;
		left: 1.1rem;
		top: 8.7rem;

		::before,
		::after {
			border: 1px solid #b78897;
			height: 25px;
			content: '';
			position: absolute;
		}

		::before {
			top: -11px;
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
	display: inline-block;
	align-items: right;
	height: 8rem;
	padding: 1rem;

	.circle {
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

		--b: 0.1em;
		--c: #7d97b8;

		color: #0000;
		padding-block: var(--b);
		background: linear-gradient(var(--c) 50%, #000 0) 0%
				calc(100% - var(--_p, 0%)) / 100% 200%,
			linear-gradient(var(--c) 0 0) 0% var(--_p, 0%) / var(--_p, 0%) var(--b)
				no-repeat;
		-webkit-background-clip: text, padding-box;
		background-clip: text, padding-box;
		transition: 0.3s var(--_s, 0s) linear,
			background-size 0.3s calc(0.3s - var(--_s, 0s));

		::hover {
			--_p: 100%;
			--_s: 0.3s;
		}
	}
`;

export default Contact;
