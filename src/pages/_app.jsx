import Layout from '../components/layout/Layout';
import { ModalWrapper } from '../context/ModalContext';

import '../styles/styles.scss';

export default function App({ Component, pageProps }) {
	return (
		/* 			<div id='smooth-wrapper'>
				<div id='smooth-content'> */
		<ModalWrapper>
			<Layout value>
				<Component {...pageProps} />
			</Layout>
		</ModalWrapper>
	);
}
