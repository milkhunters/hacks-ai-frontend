export type MuseumCard = {
	id: string,
  title: string,
	poster: string,
	owner_id: string,
	tags: Array<{title: string}>
};

export type MuseumItem = {
  id: string;
  title: string;
  content: string;
  poster: string; 
  views: number;
  likes_count: number;
  tags: { id: string; title: string }[];
  state: number;
  owner_id: string;
  created_at: string;
  updated_at: string;
}