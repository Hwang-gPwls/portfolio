import React from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import Scene1 from '../components/Scene1';
import Scene2 from '../components/Scene2';
import FloatButton from '../components/FloatButton';

const Main = () => {
	return (
		<div id='body' className='before-load'>
			<div>
				{/* <div className="loading">
          		<svg className="loading-circle">
            		<circle cx="50%" cy="50%" r="25"></circle>
          		</svg>
        		</div> */}
				<Container>
					<Header />
					<section className='scroll-section' id='scroll-section-0'>
						<Scene1 />
					</section>
					<section className='scroll-section' id='scroll-section-1'>
						<Scene2 />
					</section>
				</Container>
				<FloatButton />
			</div>
		</div>
	);
};

const Container = styled.div`
	width: 100%;
`;

export default Main;
