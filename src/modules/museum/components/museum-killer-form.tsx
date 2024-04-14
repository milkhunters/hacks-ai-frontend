import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Delete, ImageIcon, PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getItem, getSearchItems, makeSearchTask, uploadFileOnS3, uploadSearchFileUrl } from "../api/museum";
import { toast } from "sonner";
import { MuseumCard } from "../types/cards";
import { Spinner } from "@/components/layouts/spinner";
import { MuseumItems } from "../pages/museum-items";

export const MuseumKillerForm = () => {
  const [fileId, setFileId] = useState<string>('');
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('')
  const [tags, setTags] = useState<string>('');

  const [findedItems, setFindedItems] = useState<Array<MuseumCard>>([]);
  const [isItemsLoading, setIsItemsLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target && event.target.files?.length) {
      const file = event.target.files[0];
      setUploadFile(file);
    }
  };

  const makeUploadUrlFile = async () => {
    setIsItemsLoading(true);
    const { content, error } = await uploadSearchFileUrl({ filename: uploadFile?.name ?? '', content_type: uploadFile?.type ?? '' })
    if (error) {
      toast.error(error.content);
      return;
    }

    if (content?.file_id) {
      setFileId(content.file_id);

      if (!uploadFile || !content.file_id) {
        toast.error('Неизвестная ошибка');
        return;
      }

      const { error: s3Error } = await uploadFileOnS3({ fields: content.upload_url.fields, file: uploadFile, url: content.upload_url.url });

      if (s3Error) {
        toast.error('Неизвестная ошибка');
        return;
      }

      const { error: makeTaskError } = await makeSearchTask(content?.file_id);

      if (makeTaskError) {
        toast.error(makeTaskError.content);
        return;
      }

      const id = setInterval(async () => {
        const { content: finded } = await getSearchItems(content?.file_id);
        if (finded) {
          for (let item of finded) {
            const { content: findedPoster } = await getItem({ itemId: item.id, fileId: item.poster });
            setFindedItems([...findedItems, { ...item, poster: findedPoster?.url ?? '' }])
          }
          clearInterval(id)
          setIsItemsLoading(false);
        }
      }, 1000)

    }
  }

  useEffect(() => {
    if (uploadFile) makeUploadUrlFile();

    return () => setFindedItems([]);

  }, [uploadFile]);

  return <>
    <Dialog>
      <DialogTrigger asChild>
        <Button >
          <PlusIcon size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[1900px] h-[800px]">
        <div className="flex justify-around w-full gap-6">
          <div className="grid items-center w-1/2 gap-4">
            <div className="flex items-center gap-2">
              <ImageIcon />
              <div className="grid gap-0.5">
                <h2 className="text-sm font-medium leading-none dark:text-gray-300">Загрузите изображение</h2>
                <p className="text-sm leading-none dark:text-gray-300">Вам необходимо загрузить изображение</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-md p-6 flex flex-col justify-between gap-4 w-full h-[700px] dark:border-gray-800">
              <div className="w-full h-32 rounded-md">
                {uploadFile && (
                  <img className="max-h-[400px]" src={URL.createObjectURL(uploadFile)} alt="Uploaded" />
                )}
              </div>

              <div className="flex flex-col gap-3">

                <div className="flex justify-between gap-2">
                  <Label htmlFor='picture'></Label>
                  <Input onChange={handleFileChange} id='picture' type='file' />
                  <Button onClick={() => setUploadFile(null)}><Delete /></Button>
                </div>

                {
                  uploadFile ? <>
                    <Input onChange={e => setTitle(e.target.value)} value={title} placeholder="Введите название" />
                    <Input onChange={e => setContent(e.target.value)} value={content} placeholder="Введите описание" />
                    <Input onChange={e => setTags(e.target.value)} value={tags} placeholder="Введите тэги через запятую" />
                    <Button onClick={makeUploadUrlFile}>Загрузить</Button>
                  </> : null
                }

              </div>
            </div>
          </div>
          <div className="grid items-center gap-2 w-1/2">
            <h3 className="text-lg font-bold leading-none dark:text-gray-100">Похожие экспонаты</h3>
            <div className="grid items-center justify-center grid-cols-2 gap-2 h-[500px] overflow-y-auto">
              {
                findedItems.length ? <>
                  <MuseumItems items={findedItems} />
                </> : isItemsLoading ? <Spinner /> : <h2>Пусто...</h2>
              }
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </>
};