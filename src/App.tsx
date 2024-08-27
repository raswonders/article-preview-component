import { useState } from "react";
import article from "./data.json";

function App() {
  const [shareOpen, setShareOpen] = useState(false);

  function toggleShare() {
    setShareOpen((prev) => !prev);
  }

  return (
    <>
      <article className="my-[74px] mx-6 flex flex-col gap-8 rounded-[10px] overflow-hidden bg-white shadow-[0px_40px_40px_-10px_rgba(201,213,225,0.50)]">
        <header className="">
          <img
            src={article.image.url}
            alt={article.image.alt}
            className="max-h-[200px] w-full object-cover object-center"
          />
        </header>
        <section className="px-8 space-y-3">
          <h1 className="font-bold">{article.title}</h1>
          <p className="font-medium text-sm text-[#6E8098]">
            {article.content}
          </p>
        </section>
        <footer className="relative px-8 py-5">
          <div className="flex items-center gap-4">
            <img
              src={article.author.image.url}
              alt={article.author.image.alt}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="text-sm font-bold">{article.author.name}</h2>
              <h3 className="text-sm text-[#9DAEC2]">{article.author.date}</h3>
            </div>
            <button
              className="ml-auto rounded-full shrink-0"
              onClick={toggleShare}
            >
              <img src="/assets/icon-share.svg" alt="Share icon" className="" />
            </button>
          </div>

          {shareOpen && (
            <div className="absolute px-8 py-5 inset-0 flex items-center bg-[#48556A] text-white gap-5">
              <span className="text-sm tracking-[5px] text-[#9DAEC2] uppercase">
                Share
              </span>
              <img
                src="/assets/icon-facebook.svg"
                alt="Facebook icon"
                className="h-5 w-5"
              />
              <img
                src="/assets/icon-twitter.svg"
                alt="Twitter icon"
                className="h-5 w-5"
              />
              <img
                src="/assets/icon-pinterest.svg"
                alt="Pinterest icon"
                className="h-5 w-5"
              />
              <button
                className="ml-auto rounded-full shrink-0"
                onClick={toggleShare}
              >
                <img
                  src="/assets/icon-share-active.svg"
                  alt="Share icon"
                  className=""
                />
              </button>
            </div>
          )}
        </footer>
      </article>
    </>
  );
}

export default App;
