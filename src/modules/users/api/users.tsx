export const getCurrentUser = async () => {
	return { name: 'me' };
};

export const getUserById = async (id: string) => {
	return { name: 'userById=' + id };
};

