import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import useScroll from '../hooks/useScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const FloatButton = () => {
	const [isShowButton, setIsShowButton] = useState(false);

	const scrollToTop = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
	};

	const handleShowButton = useCallback(() => {
		if (window.scrollY > 500) {
			setIsShowButton(true);
		} else {
			setIsShowButton(false);
		}
	});

	useScroll(handleShowButton);

	return (
		isShowButton && (
			<Container>
				<button onClick={scrollToTop} type='button' className='topButton'>
					{' '}
					<FontAwesomeIcon icon={faArrowUp} size='xl' fixedWidth />
				</button>
			</Container>
		)
	);
};

const Container = styled.div`
	position: fixed;
	right: 3rem;
	bottom: 3rem;
	z-index: 1;

	.topButton {
		padding: 15px 13px;
		background-color: transparent;
		color: #b78897;
		border: 1.5px solid #b78897;
		border-radius: 50%;
		outline: none;
		cursor: pointer;

		&:hover {
			color: #fff;
			background-color: #b78897;
		}
	}
`;

export default FloatButton;
