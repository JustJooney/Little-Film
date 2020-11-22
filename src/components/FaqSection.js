import {useState} from 'react';
import styled from 'styled-components';
import {About} from '../styles';
import Toggle from './Toggle';
import {AnimateSharedLayout, motion} from 'framer-motion';
import {useScroll} from './useScroll';
import {fade} from '../animation';

function FaqSection(){

	const [element, controls] = useScroll();

	return(
		<Faq variants={fade} ref={element} animate={controls} initial="hidden">
			
			<h2 >Any Questions <span>FAQ</span></h2>
			<AnimateSharedLayout>
				<Toggle title="How Do I Start?">
					<div className='answer'>	
						<p>Answer</p>
						<p>Answer</p>
					</div>
				</Toggle>
				<Toggle title="Daily Schedule">
					<div className='answer'>
						<p>Answer</p>
						<p>Answer</p>
					</div>
				</Toggle>
				<Toggle title='Different Payments'>
					<div className='answer'>
						<p>Answer</p>
						<p>Answer</p>
					</div>
				</Toggle>
				<Toggle title='What Products Do You Offer?'>
					<div className='answer'>
						<p>Answer</p>
						<p>Answer</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
		</Faq>
	);
}

const Faq = styled(About)`
	display: block;
	span{
		display: block;
	}
	h2{
		padding-bottom: 2rem;
		font-weight: lighter;
	}
	h4{
		cursor: pointer;
	}
	.faq-line{
		background: #cccccc;
		height: 0.2rem;
		margin: 2rem 0rem;
		width: 100%;
	}
	.question{
		padding: 2rem 0rem;
	}
	.answer{
		padding: 2rem 0rem;
		p{
			padding: 1rem 0rem;
		}
	}

`;

export default FaqSection;