// DEPENDENCIES
import NavBtn from '@/components/tokens/buttons/NavBtn/NavBtn';
import PdfBtn from '@/components/tokens/buttons/PdfBtn/PdfBtn';
import Image from 'next/image';
import { useState } from 'react';

// RENDER
export default function ProductDetails({ details }) {
	const { product, longDescription, img, featureIcn, pdf } = details;
	const [selectedImg, setSelectedImg] = useState(img[0]);

	// Handle hover over thumbnail images
	const handleHover = newImg => {
		setSelectedImg(newImg);
	};

	// Handle line breaks
	function replaceWithBr() {
		return longDescription.replace(/\n/g, '<br /><br />');
	}

	return (
		<div className='product--details'>
			<div className='product--details__images'>
				<div className='product--details__carrousel'>
					{img.slice(0, 4).map(image => {
						return (
							<div className='product--details__carrousel--item' key={image.id}>
								<Image
									key={image.id}
									src={image.src}
									alt={image.alt}
									width={500}
									height={500}
									className={selectedImg.id === image.id ? 'active' : ''}
									onMouseOver={() => handleHover(image)}
								/>
							</div>
						);
					})}
				</div>

				{/* Main Image */}
				<div className='product--details__image'>
					<Image
						src={selectedImg.src}
						alt={selectedImg.alt}
						width={1000}
						height={1000}
					/>
					<NavBtn
						images={img}
						selectedImg={selectedImg}
						setSelectedImg={setSelectedImg}
					/>
				</div>
			</div>

			<div className='product--details__content'>
				<div className='product--details__content--text'>
					<h3>{product}</h3>
					<p dangerouslySetInnerHTML={{ __html: replaceWithBr() }} />
				</div>

				<PdfBtn pdf={pdf} />
			</div>
		</div>
	);
}
