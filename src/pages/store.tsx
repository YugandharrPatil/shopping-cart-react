import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/store-item";
import storeItems from "../data/items.json";

export default function StorePage() {
	return (
		<>
			<h1>Store</h1>
			<Row md={2} xs={1} lg={3} className="g-3">
				{storeItems.map((item) => (
					<Col key={item.id}>
						<StoreItem {...item} />
					</Col>
				))}
			</Row>
		</>
	);
}
