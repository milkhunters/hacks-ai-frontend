export type MuseumCard = {
	id: string,
  title: string,
	poster: string,
	views: number,
	likes_count: number,
	owner_id: string,
	tags: Array<{id: string, title: string}>,
	state: number,
	created_at: string,
	updated_at: string,
};