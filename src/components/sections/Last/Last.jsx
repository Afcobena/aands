import ButtonProducts from "../../tokens/buttons/ProductsBtn/ProductsBtn";

export default function Last({className, dataSpeed}) {
	return (
		<section
		 className={`last ${className}`}
		 data-speed={dataSpeed}
		>
			<div className='last__container'>
				<div className="last__text">
					<h2>Bulletproof your lift</h2>
					<h2>for the future</h2>
					<p>
						Are you ready to revolutionize your lifting experience? Let&apos;s work together to improve your technique and reach new heights in strength and performance.
					</p>
				</div>
				<div className="last__button">
					<ButtonProducts />
				</div>
			</div>
		</section>
	)
}

