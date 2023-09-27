// DEPENDENCIES
import Image from 'next/image';
import Link from 'next/link';

// COMPONENTS
import ButtonCall from '@/components/tokens/buttons/CallBtn/CallBtn';
import Form from '@/components/utils/Form/Form';
import Map from '@/components/utils/Map/Map';

// IMAGES
import CallIcon from '/public/icons/details/call.svg';
import EmailIcon from '/public/icons/details/email.svg';
import MapIcon from '/public/icons/details/map.svg';

// CONTACT COMPONENT RENDER
export default function Contact() {
	return (
		<>
			<div className='contact'>
				<div className='contact__container'>
					<h3>Get in touch!</h3>
					<div className='contact__content'>
						<div className='contact__touch'>
							<div className='contact__links'>
								<div className='contact__links--email'>
									<Image src={EmailIcon} alt='email icon' />
									<Link href='mailto:info@aandslifts.co.uk'>
										info@aandslifts.co.uk
									</Link>
								</div>
								<div className='contact__links--call'>
									<Image src={CallIcon} alt='phone icon' />
									<div className='contact__links--buttons'>
										<ButtonCall tel='tel:+447394699196' text='Call Jose' />
										<ButtonCall tel='tel:+447507200480' text='Call David' />
									</div>
								</div>
								<div className='contact__links--map'>
									<Image src={MapIcon} alt='map icon' />
									<Link href='https://www.google.com/maps/place/51.537793731262134+-0.7068510371442662/@51.537793731262134,-0.7068510371442662,15z}'>
										<span>
											Sheephouse Road <br /> Maidenhead SL6 8HA <br /> London
										</span>
									</Link>
								</div>
								<Map />
							</div>
						</div>
						<div className='contact__form'>
							<Form />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
