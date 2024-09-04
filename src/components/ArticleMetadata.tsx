import { useState } from "react";
import { SharePopover } from "./SharePopover";
import { ShareBar } from "./ShareBar";

interface Props {
  author: {
    name: string;
    date: string;
    image: { [key: string]: string };
  };
}

export function ArticleMetadata({ author }: Props) {
  const [open, setOpen] = useState(false);

  function toggleShare() {
    setOpen((prev) => !prev);
  }

  return (
    <footer className="px-8 lg:px-10 py-5 lg:pb-10 relative">
      <div className="flex items-center gap-4">
        <img
          src={author.image.url}
          alt={author.image.alt}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2 className="text-sm font-bold">{author.name}</h2>
          <h3 className="text-sm text-light-gray">{author.date}</h3>
        </div>

        <div className="relative ml-auto">
          <button
            className="rounded-full shrink-0 align-middle"
            onClick={toggleShare}
          >
            {open ? (
              <img src="/assets/icon-share-active.svg" alt="Share icon" />
            ) : (
              <img src="/assets/icon-share.svg" alt="Share icon" />
            )}
          </button>
          <SharePopover open={open} />
        </div>
      </div>
      <ShareBar open={open} handleClick={toggleShare} />
    </footer>
  );
  // return <Popover.Root defaultOpen={false}></Popover.Root>;
}
