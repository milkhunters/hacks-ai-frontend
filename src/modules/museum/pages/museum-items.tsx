import { MuseumCard } from "../types/cards";
import { MuseumItem } from "./museum-item";

export const MuseumItems = ({ items }: { items: Array<MuseumCard> | null }) => {
	return <>
		{items?.length ? items.map((item, index) => {
			return (
				<MuseumItem item={item} key={index} />
			);
		}) : <h1 className="text-3xl">Вы еще ничего не загрузили...</h1>}
	</>;
};
