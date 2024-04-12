import { makeReadRequest } from "@/lib/api";
import { BaseResponse } from "@/types/response";
import { UserResponse } from "../types/response";

const USER_API_URL = 'ums/user'

export const getCurrentUser = async (): Promise<BaseResponse<UserResponse>> => {
	return makeReadRequest(USER_API_URL);
};

