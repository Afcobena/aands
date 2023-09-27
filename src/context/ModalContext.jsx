import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

const useModal = () => {
	const context = useContext(ModalContext);
	return context;
};

function ModalWrapper({ children }) {
	const [openModal, setOpenModal] = useState(false);

	return (
		<ModalContext.Provider
			value={{
				openModal,
        setOpenModal
			}}
		>
			{children}
		</ModalContext.Provider>
	);
}

export { ModalContext, ModalWrapper, useModal };