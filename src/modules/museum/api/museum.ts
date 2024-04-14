import { BaseResponse } from "@/types/response";
import { MuseumCard } from "../types/cards";
import { encodeEmpty, encodeJson, makeReadRequest, makeWriteRequest } from "@/lib/api";

const MUSEUM_API_URL = 'museum/';

type UploadSearchFileCredentials = {
  filename: string,
  content_type: string
}

type UploadUrlFields = {
  "Content-Type": string;
  key: string;
  "x-amz-algorithm": string;
  "x-amz-credential": string;
  "x-amz-date": string;
  policy: string;
  "x-amz-signature": string;
};

type UploadUrlResponse = {
  file_id: string;
  upload_url: {
    url: string;
    fields: UploadUrlFields;
  };
};

type GetItemCredentials = {
  itemId: string;
  fileId: string;
}

type Content = {
  id: string;
  filename: string;
  content_type: string;
  url: string;
  created_at: string;
  updated_at: string;
}

export const getUserItems = async (): Promise<BaseResponse<Array<MuseumCard>>> => {
  return makeReadRequest(MUSEUM_API_URL + 'exhibit', { page: '1', per_page: '10', order_by: 'created_at', state: '0' })
};

export const uploadSearchFileUrl = async (data: UploadSearchFileCredentials): Promise<BaseResponse<UploadUrlResponse>> => {
  return makeWriteRequest(MUSEUM_API_URL + 'img_searcher', encodeJson(data))
};

export const uploadFileOnS3 = async (data: { fields: UploadUrlFields, file: File, url: string }): Promise<{error: boolean}> => {
  const formData = new FormData();

  for (let [key, value] of Object.entries(data.fields)) {
    formData.append(key, value);
  }

  formData.append("file", data.file);

  const response = await fetch(data.url, {
    method: "POST",
    body: formData,
  });

  return {error: !response.ok}
};

export const makeSearchTask = async (fileId: string): Promise<BaseResponse<null>>  => {
  return makeWriteRequest(MUSEUM_API_URL + 'img_searcher/task/' + fileId, encodeEmpty());
};

export const getSearchItems = async (fileId: string): Promise<BaseResponse<Array<MuseumCard>>> => {
  return makeReadRequest(MUSEUM_API_URL + 'img_searcher/task/' + fileId);
};

export const getItem = async ({itemId, fileId}: GetItemCredentials): Promise<BaseResponse<Content>> => {
  return makeReadRequest(MUSEUM_API_URL + 'exhibit/files/' + itemId + '/' + fileId, {'download': 'false'})
};