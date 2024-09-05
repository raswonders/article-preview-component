import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";

interface Props {
  isMobile: boolean;
  author: {
    name: string;
    date: string;
    image: { [key: string]: string };
  };
}

export function ArticleMetadata({ author, isMobile }: Props) {
  const [isShareOpen, setIsShareOpen] = useState(false);

  function handleOpenChange(open: boolean) {
    setIsShareOpen(open);
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
    <Popover.Root onOpenChange={handleOpenChange}>
      <footer
        className={`relative px-8 lg:px-10 py-5 lg:pb-10 rounded-b-[10px] ${isMobile && isShareOpen ? "bg-dark-gray text-white" : ""}`}
      >
        <div className="flex items-center gap-4 h-10">
          {isMobile && isShareOpen ? shareContent : metadata}
          <div className="relative ml-auto">
            <Popover.Trigger asChild>
              <button className="rounded-full shrink-0 align-middle">
                {isShareOpen ? (
                  <img src="/assets/icon-share-active.svg" alt="Share icon" />
                ) : (
                  <img src="/assets/icon-share.svg" alt="Share icon" />
                )}
              </button>
            </Popover.Trigger>
          </div>
        </div>
      </footer>
      {!isMobile && (
        <Popover.Portal>
          <Popover.Content
            side="top"
            sideOffset={20}
            className="relative px-8 py-4 flex gap-4 items-center bg-dark-gray rounded-[10px] shadow-[0px_10px_10px_rgba(201,213,225,0.50)]"
          >
            <div className="absolute -bottom-[10px] right-1/2 translate-x-1/2 border-t-dark-gray border-t-[12px] border-x-[12px] border-x-transparent"></div>
            {shareContent}
          </Popover.Content>
        </Popover.Portal>
      )}
    </Popover.Root>
  );
}
