// COMPONENTS
import FeatureLargeCard from '@/components/cards/FeatureLargeCard/FeatureLargeCard';
import FeatureSmallCard from '@/components/cards/FeatureSmallCard/FeatureSmallCard';

// Large Card Imports IMAGES
import nearkeyImage from '/public/images/products/nearkey/nearkey_4.png';
import switchImage from '/public/images/products/switch/switch_1.png';
import advertisimImage from '/public/images/products/advertisim/advertisim_3.png';
import gsrImage from '/public/images/products/gsr/gsr_5.png';
import gsmImage from '/public/images/products/gsm/gsm_5.png';

// Small Card Imported IMAGES
import friendlyIcon from '/public/icons/features/friendly.svg';
import connectivityIcon from '/public/icons/features/connectivity.svg';
import dotsVector from '/public/images/assets/spiral-dots.svg';
import wiresVector from '/public/images/assets/wires.svg';

// RENDER
export default function Features({ className, dataSpeed }) {
	return (
		<section className={`features ${className}`} data-speed={dataSpeed}>
			<div className='features__container'>
				<div className='features__header'>
					<h2>Features that deliver benefits</h2>
					<p>
						Our products offer increased efficiency with user friendly
						platforms, applications and <span>24/7</span> customer support.
					</p>
				</div>
				<div className='features__content'>
					<FeatureLargeCard
						className='features__container--grid-col-span-2'
						img1={gsrImage}
						img2={gsmImage}
						img3={advertisimImage}
						legend='Increased Efficiency'
						text='Technological lift products are designed with advanced safety features such as load sensors, emergency stop buttons, and automatic shut-off systems.'
					/>
					<FeatureSmallCard
						className='features__container--connectivity'
						imgBg={wiresVector}
						imgIcn={connectivityIcon}
						title='Connectivity'
						text='Our products offer connectivity solutions such as real-time data transmission, wireless access, and remote control.'
					/>
					<FeatureSmallCard
						className='communication'
						imgBg={dotsVector}
						imgIcn={friendlyIcon}
						title='User Friendly'
						text='User friendly dedicated platforms available 24 hours.'
					/>
					<FeatureLargeCard
						className='features__container--grid-col-span-2'
						img1={nearkeyImage}
						img2={switchImage}
						img3={advertisimImage}
						legend='Accesibility'
						text='Many technological lift products are designed with easy-to-access components and built-in diagnostics, making maintenance and repairs.'
					/>
				</div>
			</div>
		</section>
	);
}
