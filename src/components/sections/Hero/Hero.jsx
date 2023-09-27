import ButtonProducts from '../../tokens/buttons/ProductsBtn/ProductsBtn';

export default function Hero({className, dataSpeed}) {
	return (
		<section
			className={`hero ${className}`}
			data-speed={dataSpeed}
		>
			<div className='hero__message'>
				<h1>Innovative solutions for<br></br>
					the <span>lift</span> industry
				</h1>
				<p>We offer competitive wide range of <span>IoT</span> solutions to support our<br></br>customers in their technological evolution from our <br></br>acquired <span>knowledge</span> in the lift industry systems.</p>
			</div>
			<ButtonProducts />
		</section>
	)
}
