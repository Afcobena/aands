// DEPENDENCIES
import Image from 'next/image';

// COMPONENTS
import ButtonDetails from '@/components/tokens/buttons/DetailsBtn/DetailsBtn';

// RENDER
export default function ProductCard(props) {
	const { key, product, description, imageProduct, code } = props;

	return (
		<div key={key} className='product--card'>
			<div className='product--card__image'>
				<Image
					src={imageProduct}
					alt={`${code} icon`}
					width={1000}
					height={1000}
				/>
			</div>

			<div className='product--card__content'>
				<h3>{product}</h3>
				<p>{description}</p>
			</div>

			<div className='product--card__button'>
				<ButtonDetails link={`/products/${code}`} />
			</div>
		</div>
	);
}
