import { useState } from "react";
import article from "./data.json";
import { SharePopover } from "./components/SharePopover";
import { ShareBar } from "./components/ShareBar";

function App() {
  const [shareOpen, setShareOpen] = useState(false);

  function toggleShare() {
    setShareOpen((prev) => !prev);
  }

  return (
    <div className="min-h-screen grid justify-center items-start lg:place-content-center">
      <article className="my-[74px] mx-6 max-w-[520px] lg:max-w-[730px] flex flex-col lg:flex-row gap-8 lg:gap-0 rounded-[10px] bg-white shadow-[0px_40px_40px_-10px_rgba(201,213,225,0.50)]">
        <header>
          <img
            src={article.image.url}
            alt={article.image.alt}
            className="rounded-t-[10px] lg:rounded-r-none lg:rounded-l-[10px] max-h-[200px] lg:max-h-none  w-full lg:min-w-[280px] lg:h-full object-cover object-center"
          />
        </header>
        <section className="space-y-3 lg:pt-5">
          <h2 className="px-8 font-bold">{article.title}</h2>
          <p className="px-8 font-medium text-sm text-[#6E8098]">
            {article.content}
          </p>

          <footer className="px-8 py-5 relative">
            <div className="flex items-center gap-4">
              <img
                src={article.author.image.url}
                alt={article.author.image.alt}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="text-sm font-bold">{article.author.name}</h2>
                <h3 className="text-sm text-light-gray">
                  {article.author.date}
                </h3>
              </div>

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
                <SharePopover open={shareOpen} />
              </div>
            </div>
            <ShareBar open={shareOpen} handleClick={toggleShare} />
          </footer>
        </section>
      </article>
    </div>
  );
}

export default App;
