import Image from 'next/image';

import BackArrow from '/public/icons/navigation/back.svg';
import ForwardArrow from '/public/icons/navigation/forward.svg';

function NavBtn({ images, selectedImg, setSelectedImg }) {
	const currentIndex = images.findIndex(image => image.id === selectedImg.id);

	const handlePrev = () => {
		const prevIndex = (currentIndex - 1 + images.length) % images.length;
		console.log(prevIndex);
		setSelectedImg(images[prevIndex]);
	};

	const handleNext = () => {
		const nextIndex = (currentIndex + 1) % images.length;
		setSelectedImg(images[nextIndex]);
	};

	return (
		<div className='nav--btn'>
			<button onClick={handlePrev}>
				<Image src={BackArrow} alt='back arrow icon' />
			</button>
			<button onClick={handleNext}>
				<Image src={ForwardArrow} alt='forward arrow icon' />
			</button>
		</div>
	);
}

export default NavBtn;
