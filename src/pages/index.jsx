// Import from node_modules
import Head from 'next/head';

// Components
import Events from '@/components/sections/Events/Events';
import Features from '@/components/sections/Features/Features';
import Hero from '@/components/sections/Hero/Hero';
import Last from '@/components/sections/Last/Last';
import Partners from '@/components/sections/Partners/Partners';
import Social from '@/components/sections/Social/Social';
import Story from '@/components/sections/Story/Story';
import Team from '@/components/sections/Team/Team';
import Separator from '@/components/tokens/decorators/Separator/Separator';

// Context
import { useModal } from '../context/ModalContext';

export default function Home() {
	const {openModal} = useModal();

	return (
		<>
			<Head>
				<title>A&S Lifts</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			{/* add ref={main} inside main element */}
			{/* <main id='smooth-wrapper'>
				<div id='smooth-content'> */}
				<div className='main--home' style={openModal ? {filter: 'blur(7px)'} : undefined}>
					{/* Hero section */}
					<Hero className='gsap__hero' dataSpeed='1' />
					{/* Partners section */}
					<Partners className='gsap__partners' dataSpeed='1' />
					{/* Separator */}
					<Separator className='gsap__separator' dataSpeed='1' />
					{/* Features section */}
					<Features className='gsap__features' dataSpeed='1' />
					{/* Separator */}
					<Separator />
					{/* Social section */}
					<Social className='gsap__social' dataSpeed='1' />
					{/* Separator */}
					<Separator />
					{/* Story section */}
					<Story className='gsap__story' dataSpeed='1' />
					{/* Separator */}
					<Separator />
					{/* Team section */}
					<Team className='gsap__team' dataSpeed='1' />
					{/* Separator */}
					<Separator />
					{/* Events section */}
					<Events />
					{/* Last action section */}
					<Last className='gsap__last' dataSpeed='1' />
				</div>
		</>
	);
}
