import { useEffect, useRef } from 'react';

import ModalCard from '../../cards/ModalCard/ModalCard';

import { appsData } from '../../../data/apps.js';

// MODAL COMPONENT RENDERING
function Modal({ open, onClose }) {
	const modalRef = useRef(null);

	useEffect(() => {
		const handleOutsideClick = e => {
			const navbarLinkClicked =
				e.target.closest('.navbar__list a')
			if (
				modalRef.current &&
				!modalRef.current.contains(e.target) &&
				!navbarLinkClicked
			) {
				onClose();
			}
		};

		document.addEventListener('mousedown', handleOutsideClick);

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, [onClose]);

	if (!open) return null;
	return (
		<div className='modal' ref={modalRef} style={{ maxHeight: "80dvh", overflowY: "scroll" }}>
			<div className='modal__grid'>
				{appsData.map(eachCard => (
					<ModalCard key={eachCard.id} props={eachCard} />
				))}
			</div>
		</div>
	);
}

export default Modal;
