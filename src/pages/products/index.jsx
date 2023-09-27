// DEPENDENCIES
import { useState } from 'react';

// COMPONENTS
import ProductCard from '@/components/cards/ProductCard/ProductCard';
import ProductDetails from '@/components/cards/ProductDetails/ProductDetails';

// DATA
import { productData } from '@/data/products';

// RENDER
export default function Products() {
	const [selectedId, setSelectedId] = useState('');

	return (
		<>
			<div className='products'>
				{/* Single products <ProductCard /> */}
				{productData.map(eachCard => (
					<ProductCard
						selectedId={selectedId}
						setSelectedId={setSelectedId}
						key={eachCard.id}
						src={eachCard.src}
						alt={eachCard.alt}
						product={eachCard.product}
						description={eachCard.description}
						image={eachCard.img}
						code={eachCard.code}
					/>
				))}

				{/* <ProductDetails /> */}
				<>
					{selectedId && (
						<div
							onClick={() => setSelectedId(null)}
							className='layout-mini-modal-backdrop'
						>
							<ProductDetails />
						</div>
					)}
				</>
			</div>
		</>
	);
}
