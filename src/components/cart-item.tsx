import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shopping-cart-context";
import storeItems from "../data/items.json";
import formatCurrency from "../utils/format-currency";

export default function CartItem({ id, quantity }: { id: number; quantity: number }) {
	const { removeFromCart } = useShoppingCart();
	const item = storeItems.find((i) => i.id === id);
	if (item === null) return null;

	return (
		<Stack direction="horizontal" gap={2} className="d-flex align-items-center">
			<img src={item?.imgURL} style={{ width: "125px", height: "75px", objectFit: "cover" }} />
			<div className="me-auto">
				<div>
					{item?.name}{" "}
					{quantity > 1 && (
						<span className="text-muted" style={{ fontSize: "0.65rem" }}>
							x{quantity}
						</span>
					)}
				</div>
				<div className="text-muted" style={{ fontSize: "0.75rem" }}>
					{formatCurrency(item?.price as number)}
				</div>
			</div>
			<div className="">{formatCurrency((item?.price as number) * quantity)}</div>
			<Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item?.id as number)}>
				&times;
			</Button>
		</Stack>
	);
}
