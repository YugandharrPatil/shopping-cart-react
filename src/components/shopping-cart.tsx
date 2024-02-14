import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shopping-cart-context";
import storeItems from "../data/items.json";
import formatCurrency from "../utils/format-currency";
import CartItem from "./cart-item";

export default function ShoppingCart({ isOpen }: { isOpen: boolean }) {
	const { closeCart, cartItems } = useShoppingCart();

	return (
		<Offcanvas show={isOpen} onHide={closeCart} placement="end">
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Cart</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Stack gap={3}>
					{cartItems.map((item) => (
						<CartItem key={item.id} {...item} />
					))}
					<div className="ms-auto fw-bold fs-5">
						Total{" "}
						{formatCurrency(
							cartItems.reduce((total, cartItem) => {
								const item = storeItems.find((i) => i.id === cartItem.id);
								return total + (item?.price || 0) * cartItem.quantity;
							}, 0)
						)}
					</div>
				</Stack>
			</Offcanvas.Body>
		</Offcanvas>
	);
}
