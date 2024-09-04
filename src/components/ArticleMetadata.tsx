import { useState } from "react";
import { SharePopover } from "./SharePopover";

interface Props {
  author: {
    name: string;
    date: string;
    image: { [key: string]: string };
  };
}

export function ArticleMetadata({ author }: Props) {
  const [shareOpen, setShareOpen] = useState(false);

  function toggleShare() {
    setShareOpen((prev) => !prev);
  }

  const shareContent = (
    <>
      <span className="text-sm tracking-[5px] text-[#9DAEC2] uppercase">
        Share
      </span>
      <img
        src="/assets/icon-facebook.svg"
        alt="Facebook icon"
        className="min-w-5"
      />
      <img
        src="/assets/icon-twitter.svg"
        alt="Twitter icon"
        className="min-w-5"
      />
      <img
        src="/assets/icon-pinterest.svg"
        alt="Pinterest icon"
        className="min-w-5"
      />
    </>
  );

  const metadata = (
    <>
      <img
        src={author.image.url}
        alt={author.image.alt}
        className="w-10 h-10 rounded-full"
      />
      <div>
        <h2 className="text-sm font-bold">{author.name}</h2>
        <h3 className="text-sm text-light-gray">{author.date}</h3>
      </div>
    </>
  );

  return (
    <footer
      className={`relative px-8 lg:px-10 py-5 lg:pb-10 rounded-b-[10px] ${shareOpen ? "bg-dark-gray text-white" : ""}`}
    >
      <div className="flex items-center gap-4 h-10">
        {shareOpen ? shareContent : metadata}
        <div className="relative ml-auto">
          <button
            className="rounded-full shrink-0 align-middle"
            onClick={toggleShare}
          >
            {shareOpen ? (
              <img src="/assets/icon-share-active.svg" alt="Share icon" />
            ) : (
              <img src="/assets/icon-share.svg" alt="Share icon" />
            )}
          </button>
          <SharePopover open={shareOpen}>{shareContent}</SharePopover>
        </div>
      </div>
    </footer>
  );
  // return <Popover.Root defaultOpen={false}></Popover.Root>;
}
