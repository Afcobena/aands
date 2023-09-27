// COMPONENTS
import Footer from '@/components/navigation/Footer/Footer';
import Navbar from '@/components/navigation/Navbar/Navbar';

// RENDER
export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
