import Image from 'next/image';

import OfficeImg from '/public/images/assets/office.svg';

export default function Story({ className, dataSpeed }) {
	return (
		<section id='story' className={`story ${className}`} data-speed={dataSpeed}>
			<div className='story__container'>
				<h2>Our Story (so far...)</h2>
				<div className='story__content'>
					<div className='story__content--image'>
						<Image src={OfficeImg} alt='office graphics' width={500} />
					</div>
					<div className='story__content--text'>
						<p>
							A&S Lifts has a rich history in the elevator industry, with a
							background steeped in innovation and customer satisfaction.
							Founded in 2019, A&S Lifts quickly established itself as a
							reputable and reliable provider of elevator installation,
							maintenance, and modernization services.
						</p>
						<p>
							Over the past four years,A&S Lifts has transformed from a modest
							local business to a prominent player in the national and
							international elevator industry. What sets A&S Lifts apart is
							their unwavering commitment to quality, safety, and cutting-edge
							technology. They continuously strive to deliver state-of-the-art
							elevator solutions that meet the evolving needs of their clients.
						</p>
						<p>
							A&S Lifts boasts a team of highly skilled and experienced
							engineers, technicians, and customer service representatives.
							Every member of their team is dedicated to ensuring that each
							project, whether it be a new installation or maintenance endeavor,
							is executed seamlessly and to the highest standards.
						</p>
						<p>
							Customer satisfaction is at the core of A&S Lifts' business
							philosophy. They prioritize open communication, transparent
							pricing, and prompt responses to client queries or concerns. A&S
							Lifts' dedication to superior customer service has earned them a
							loyal following and numerous long-term partnerships with clients
							across various industries.
						</p>
						<p>
							As the elevator industry continues to evolve, A&S Lifts remains at
							the forefront of innovation. They actively invest in research and
							development, consistently seeking out new technologies and
							advancements that enhance elevator safety, energy efficiency, and
							user experience.
						</p>
						<p>
							With a commendable track record and an unwavering commitment to
							excellence, A&S Lifts is well-positioned to continue shaping the
							future of the elevator industry for years to come.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
