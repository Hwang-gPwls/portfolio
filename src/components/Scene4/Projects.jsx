import React, { useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { DiamondFill, Stars } from 'react-bootstrap-icons';

const Projects = ({ projects }) => {
	const [item, setItem] = useState();

	const setProjectVal = (id) => {
		const project = projects.filter((project) => project.key === id)[0];

		const skills = project.skills.map((skill, idx) => (
			<div className='skill' key={idx.toString()}>
				{skill}
			</div>
		));

		const contents = project.contents.map((content, idx) => (
			<div className='content' key={idx.toString()}>
				<DiamondFill size='10' color='#4a6483' />
				<span>{content}</span>
			</div>
		));

		setItem(
			<div key={project.key} className='itembox'>
				<Date>
					{project.date}
					<Stars size='25' color='#A0ACBD' />
				</Date>
				<div className='wrapper_pin'>
					<div className='wrapper_pin_pin' />
				</div>
				<h3>About : </h3>
				<About>{project.about}</About>
				<h3>Skills : </h3>
				<Skills>{skills}</Skills>
				<Contents>{contents}</Contents>
			</div>,
		);
	};

	const hovalTitle = (e) => {
		let tl = gsap.timeline();
		tl.to(e.target, { y: -40, duration: 0.5 });
		tl.to(e.target, { y: 0, duration: 1 });

		setProjectVal(e.target.id);
	};

	return (
		<Container>
			<div className='wrapper'>
				<div className='wrapper_projects'>
					{projects.map((project, idx) => (
						<div key={idx.toString()} className='wrapper_title'>
							<Title id={project.key} onMouseOver={hovalTitle}>
								{project.title}
							</Title>
						</div>
					))}
				</div>
				<div className='wrapper_projects'>
					<Item>{item}</Item>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div`
	height: 77vh;
	border-left: 1.5px solid #7d97b8;
	border-right: 1.5px solid #7d97b8;
	border-bottom: 1.5px solid #7d97b8;

	.wrapper {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100%;
		padding: 0;

		&_projects {
			width: 100%;
			height: 100%;
			margin: 0;
			overflow-y: scroll;

			::-webkit-scrollbar {
				display: none;
			}

			&:not(:last-child) {
				border-right: 1.5px solid #7d97b8;
			}
		}
	}

	.wrapper_title {
		font-size: 0.5rem;
		width: 100%;
		height: 150px;

		&:not(:last-child) {
			border-bottom: 1.5px solid #7d97b8;
		}
	}
`;

const Title = styled.div`
	width: 100%;
	position: relative;
	top: 50px;
	text-align: center;
	color: transparent;
	font-size: 2rem;
	font-weight: bolder;
	-webkit-text-stroke: 1px #4a6483;

	&:hover {
		color: #4a6483;
		-webkit-text-stroke: 1px #ffffff;
	}
`;

const Item = styled.div`
	width: 100%;
	height: 100%;
	padding: 0 auto;

	&h3 {
		margin: 2rem 0 0 0;
		text-align: left;
		font-size: 1.3rem;
	}

	.itembox {
		padding: 3rem;
		color: #4a6483;
	}

	.wrapper_pin {
		width: 100%;
		display: flex;

		&_pin {
			width: 100%;
			height: 2px;
			margin: 0.3rem 0.5rem;
			background-color: #a0acbd;
		}
	}
`;

const Date = styled.div`
	font-size: 1.1rem;
	text-align: center;
	margin: 1rem 0;
`;

const About = styled.div`
	margin: 1rem;
	text-align: left;
	font-size: 1.2rem;
`;

const Skills = styled.div`
	display: flex;
	justify-content: left;
	margin: 1rem;

	.skill {
		height: 2rem;
		line-height: 2rem;
		padding: 0.5rem;
		border-radius: 1rem;
		border: 1px solid #3d4856;
		border-radius: 0.5rem;

		&:not(:first-child) {
			margin-left: 0.5rem;
		}
	}
`;

const Contents = styled.div`
	border: 1.5px solid #7d97b8;
	white-space: pre-line;
	padding: 1rem;
	margin: 2rem 0 0 0;
	line-height: 230%;
	font-size: 1.1rem;
	text-align: left;

	.content span {
		margin-left: 1.2rem;
	}
`;

export default React.memo(Projects);
