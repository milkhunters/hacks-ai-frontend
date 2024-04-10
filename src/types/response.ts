export type BaseResponse<T> = {
	content: T | null;
	error: BaseError | null;
};

type BaseError = {
	type: number;
	content: string;
};
