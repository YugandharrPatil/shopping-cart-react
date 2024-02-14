import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import { ShoppingCartProvider } from "./context/shopping-cart-context";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import StorePage from "./pages/store";

export default function App() {
	return (
		<ShoppingCartProvider>
			<Container className="mb-4">
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/store" element={<StorePage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</Container>
		</ShoppingCartProvider>
	);
}
