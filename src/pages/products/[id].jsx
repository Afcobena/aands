// DEPENDENCIES
import { useRouter } from 'next/router';

// COMPONENTS
import ProductDetails from '@/components/cards/ProductDetails/ProductDetails';

// DATA
import { productData } from '@/data/products';

// RENDER
export default function DetailsPage() {
	const router = useRouter();
	const { id } = router.query;
	// Double check id meaning

	if (!router.isReady) {
		return <div>Loading...</div>;
	}

	const details = productData.filter(detail => {
		return detail.code === id;
	})[0];

	return (
		<>
			<div className='product--dynamic'>
				<ProductDetails details={details} />
			</div>
		</>
	);
}
