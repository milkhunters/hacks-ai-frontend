export const API_MODEL_BASE_URL = "https://api.meshy.ai/v1/image-to-3d"
const REACT_APP_API_KEY = "msy_ZxiueYXAfbVCEGV4y2yF4wFyCYzeOfF5ojQk"
export type CreatedTask = {
   result: string,
}

export type Task = {
   id: string,
   model_urls: ModelUrls,
   thumbnail_url: string,
   prompt: string,
   art_style: string,
   negative_prompt: string,
   progress: number,
   started_at: number,
   created_at: number,
   finished_at: number,
   status: Status
   texture_urls: TextureUrls,
}

export type ModelUrls = {
   glb: string,
   fbx: string,
   obj: string,
   mtl: string,
   usdz: string,
}

type TextureUrls = {
   base_color: string,
}

type Status = "SUCCEEDED" | "PENDING" | "IN_PROGRESS" | "FAILED" | "EXPIRED"

export const createTask = async (image_url: string) => await fetch(
   API_MODEL_BASE_URL,
   {
      method: 'POST',
      headers: {
         'Authorization': `Bearer ${REACT_APP_API_KEY}`,
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         image_url,
         enable_pbr: true
      })
   },
)

export const getTaskData = async (taskId: string) => await fetch(
   `${API_MODEL_BASE_URL}/${taskId}`,
   {
      method: 'GET',
      headers: {
         'Authorization': `Bearer ${REACT_APP_API_KEY}`,
      },
   },
)