interface Props {
  open: boolean;
  handleClick: () => void;
}

export function ShareBar({ open, handleClick }: Props) {
  return (
    open && (
      <div className="absolute px-8 py-5 rounded-b-[10px] inset-0 flex lg:hidden items-center bg-[#48556A] text-white gap-5">
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
        <button className="ml-auto rounded-full shrink-0" onClick={handleClick}>
          <img src="/assets/icon-share-active.svg" alt="Share icon" />
        </button>
      </div>
    )
  );
}
