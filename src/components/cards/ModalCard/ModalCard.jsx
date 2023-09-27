// DEPENDENCIES
import Image from 'next/image';
import Link from 'next/link';
/* import AppleStore from '/public/logos/stores/apple.png';
import GoogleStore from '/public/logos/stores/google.png'; */

// MODAL CARD COMPONENT
export default function ModalCard({ props }) {
	return (
		<div className='modal--card' key={props.id}>
			<div className='modal--card__logo'>
				<Image src={props.img} alt={props.alt} width={500} height={500} />
			</div>

			<div className='modal--card__stores'>
				<h4>{props.product}</h4>
				<p>
					{props.link ? (
						<Link href={props.link}>
							<p>Link to User Access</p>
						</Link>
					) : (
						'Get the app at'
					)}
				</p>
				<div className='modal--card__stores--logos'>
					{props.linkGoogle && (
						<Link href={props.linkGoogle}>
							<Image
								src='/logos/stores/google.png'
								alt='Google Store Logo'
								width={604}
								height={200}
							/>
						</Link>
					)}
					{props.linkApple && (
						<Link href={props.linkApple}>
							<Image
								src='/logos/stores/apple.png'
								alt='Apple Store Logo'
								width={604}
								height={200}
							/>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
