// DEPENDENCIES
import Image from 'next/image';

// RENDER
export default function SocialCard(props) {
	const { id, comment, name, socialImg, img, stars } = props;

	return (
		<div key={id} className='social--card'>
			<div className='social--card__comment'>
				<p className='social--card--paragraph'>{comment}</p>
			</div>

			<div className='social--card__user'>
				<div className='social--card__user--persona'>
					<Image
						className='social--card__image'
						src={img}
						alt={`${name} photo`}
						width={50}
						height={50}
					/>
					<h5 className='social--card__name'>{name}</h5>
				</div>

				<div className='social--card__user--social'>
					<Image src={socialImg} alt='social icon' width={15} height={15} />
					<Image src={stars && stars} alt='stars' width={60} height={16} />
				</div>
			</div>
		</div>
	);
}
