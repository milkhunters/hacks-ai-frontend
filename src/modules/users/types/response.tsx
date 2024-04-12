export type UserResponse = {
	id: string,
	email: string,
	first_name: string,
	last_name: string,
	role: {
		ic: number,
		title: string,
		permissions: Array<
			{
				id: string,
				title: string,
				created_at: string,
				updated_at: string,
			}
		>,
		created_at: string,
		updated_at: string,
	},
	state: string,
	created_at: string,
	updated_at: string,
};