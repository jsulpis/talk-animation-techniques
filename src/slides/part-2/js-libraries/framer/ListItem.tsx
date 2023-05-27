import { useMotionValue, Reorder } from "framer-motion";
import { useRaisedShadow } from "./useRaisedShadow";

interface Props {
	item: string;
}

export const ListItem = ({ item }: Props) => {
	const y = useMotionValue(0);
	const boxShadow = useRaisedShadow(y);

	return (
		<Reorder.Item
			value={item}
			id={item}
			style={{
				boxShadow,
				y,
				"-webkit-user-drag": "none",
				listStyle: "none",
				margin: 0,
				fontWeight: "500",
				fontSize: "1em",
				marginBottom: "10px",
				width: "100%",
				padding: ".5em 1em .5em .5em",
				position: "relative",
				background: "white",
				borderRadius: ".2rem",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				cursor: "grab",
			}}
		>
			<span>{item}</span>
		</Reorder.Item>
	);
};
