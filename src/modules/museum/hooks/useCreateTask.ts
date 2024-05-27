import { useEffect, useState } from "react"
import { Task, getTaskData } from "../api/model"

export const useCreateModel = (taskId: string) => {

   const [status, setStatus] = useState('')
   const [url, setUrl] = useState('');
   const [progress, setProgress] = useState(0)

   useEffect(() => {
      if (taskId.length > 0 && status !== 'SUCCEEDED' && status !== 'FAILED') {
         const interval = setInterval(() => {
            getTaskData(taskId)
               .then((data: Response) => data.json()
                  .then((data: Task) => {
                     console.log('responce: ', data)
                     setStatus(data.status)
                     setProgress(data.progress)
                     if (data.status === "SUCCEEDED") {
                        setUrl(data.model_urls.glb);
                     }
                     if (data.status === 'FAILED' || data.status === 'SUCCEEDED') {
                        clearInterval(interval);
                     }
                  }))
         }, 5000)
      }

   }, [taskId])

   return {
      status, url, progress
   }
}