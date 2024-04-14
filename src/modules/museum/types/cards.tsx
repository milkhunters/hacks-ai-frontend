export type MuseumCard = {
	id: string,
  title: string,
	poster: string,
	owner_id: string,
	tags: Array<{title: string}>
};