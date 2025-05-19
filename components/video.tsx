import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Video({ url }: { url: string }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative pt-[60%]">
      {isClient && (
        <ReactPlayer
          className="absolute top-0 left-0"
          url={url}
          width="100%"
          height="100%"
          loop
          controls
          playing
          muted
          config={{
            file: {
              attributes: {
                controlsList: "nodownload",
              },
            },
          }}
        />
      )}
    </div>
  );
}
