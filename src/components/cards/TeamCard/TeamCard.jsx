// DEPENDENCIES
import Image from 'next/image';

// DATA
import { teamData } from '@/data/team';

// RENDER
export default function TeamCard() {
	return (
		<div className='team__grid'>
			{teamData.map((data, key) => {
				return (
					<div key={key} className='team__card'>
						<div className='team__card--image'>
							<Image
								className='team__image'
								src={data.img}
								alt={data.alt}
								width={150}
								height={150}
							/>
						</div>
						<div className='team__card--content'>
							<h4>{data.name}</h4>
							<p>{data.description}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
