import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Github, Envelope } from 'react-bootstrap-icons';

const Contact = () => {
	const moveLocation = (e) => {
		debugger;
		if (e.target.id === 'github') {
			window.open('https://github.com/Hwang-gPwls');
		}

		if (e.target.id === 'contact') {
			window.open('mailto:h960502hhj@gmail.com');
		}
	};

	return (
		<Container>
			<Header>Contact :</Header>
			<ContactArea>
				<div className='wrapper'>
					<Envelope size='25' color='#b78897' />
					<input
						type='button'
						id='contact'
						className='contact'
						onClick={moveLocation}
						value='h960502hhj@gmail.com'
					/>
				</div>
				<div className='wrapper'>
					<Github size='25' color='#b78897' />
					<input
						type='button'
						id='github'
						className='contact'
						onClick={moveLocation}
						value='Hwang-gPwls'
					/>
				</div>
			</ContactArea>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 6.7vh;
	display: flex;
	flex-direction: row;
	margin-top: 2vh;
`;

const Header = styled.div`
	width: 40vw;
	height: 100%;
	text-align: right;
	margin-top: 2rem;
	margin-left: 48rem;
	font-size: 2.3vw;
	font-weight: bold;
	color: transparent;
	-webkit-text-stroke: 1.4px ${({ theme }) => theme.color.blue};
`;

const Jelly = keyframes`
25% {
  transform: scale(0.9, 1.1);
}

50% {
  transform: scale(1.1, 0.9);
}

75% {
  transform: scale(0.95, 1.05);
}
`;

const ContactArea = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	margin: 1.5rem 0 0 0.7rem;

	.wrapper {
		display: flex;
	}

	.contact {
		width: 15vw;
		cursor: pointer;
		margin: 0 0 0.5rem 0.4rem;
		padding: 0.4rem;

		text-align: center;
		color: ${({ theme }) => theme.color.white};
		background-color: ${({ theme }) => theme.color.peach};
		border: 0.7px solid ${({ theme }) => theme.color.pink};
		border-radius: 5px;

		&:hover {
			animation: ${Jelly} 0.5s;
		}
	}
`;

export default Contact;
