import { encodeEmpty, encodeJson, makeWriteRequest } from '@/lib/api';
import { SignInCredentials } from '../types/credentials';
import { BaseResponse } from '@/types/response';
import { UserResponse } from '@/modules/users/types/response';

const AUTH_API_URL = 'ums/auth'

export const signIn = async (data: SignInCredentials): Promise<BaseResponse<UserResponse>> => {
	return makeWriteRequest(AUTH_API_URL + '/signIn', encodeJson(data));
};

export const signOut = async ():Promise<BaseResponse<null>>  => {
	return makeWriteRequest(AUTH_API_URL + '/logout', encodeEmpty());
};
