import { useEffect, useState } from "react";

interface LoaderProps {
   loadingText?: string;
   progress?: number;
}

export const Loader: React.FC<LoaderProps> = ({ loadingText = 'Загрузка...', progress }) => {

   const [flash, setFlash] = useState(false);

   useEffect(() => {
      const flashInterval = setInterval(() => {
         setFlash((prevFlash) => !prevFlash);
      }, 1000);

      return () => {
         clearInterval(flashInterval);
      };
   }, [progress]);

   return (
      <div className="flex flex-col items-center justify-center">
         <div className="mb-4 text-xl font-bold">{loadingText}</div>
         <div className="w-full h-4 bg-gray-200 rounded overflow-hidden relative">
            <div
               className={`h-full absolute top-0 left-0 ${flash ? 'opacity-80' : ''
                  }`}
               style={{
                  width: `${progress}%`,
                  transition: 'all 0.5s ease',
                  backgroundImage: `linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary))`,
               }}
            />
         </div>
      </div>
   );
};