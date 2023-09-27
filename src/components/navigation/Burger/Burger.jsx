// DEPENDENCIES
import { useState } from 'react';

// COMPONENTS
import ButtonContact from '@/components/tokens/buttons/ContactBtn/ContactBtn';
import ProductsBtn from '@/components/tokens/buttons/ProductsBtn/ProductsBtn';
import { MenuToggle } from '../MenuToggle/MenuToggle';

// CONTEXT
import { useModal } from '../../../context/ModalContext';
// import Modal from '../../tokens/modal/Modal';

// BURGER COMPONENT
export default function Burger() {
	const [isOpen, setIsOpen] = useState(false);
	const { /* openModal, */ setOpenModal } = useModal();

	// Function to handle opening menu in burger
	const toggle = () => setIsOpen(!isOpen);

	// Function to close the menu clicking on the buttons
	const handleClose = () => {
		setIsOpen(false);
	};

	// Handle modal toggle clicking User Links anchor
	const handleModalToggle = () => {
		setOpenModal(prevState => !prevState);
	};

	return (
		<div className='burger'>
			<MenuToggle isOpen={isOpen} toggle={toggle} />
			{isOpen && (
				<div className='burger__wrapper'>
					<ul className='burger__list'>
						<li>
							<a onClick={handleModalToggle}>User Links</a>
						</li>
					</ul>
					<div className='burger__btns'>
						<ProductsBtn handleClose={handleClose} />
						<ButtonContact handleClose={handleClose} />
					</div>
				</div>
			)}
		</div>
	);
}
