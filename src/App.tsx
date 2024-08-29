import { useState } from "react";
import article from "./data.json";

function App() {
  const [shareOpen, setShareOpen] = useState(false);

  function toggleShare() {
    setShareOpen((prev) => !prev);
  }

  return (
    <div className="min-h-screen lg:grid lg:place-content-center">
      <article className="my-[74px] mx-6 lg:max-w-[730px] flex flex-col lg:flex-row gap-8 lg:gap-0 rounded-[10px] bg-white shadow-[0px_40px_40px_-10px_rgba(201,213,225,0.50)]">
        <header className="">
          <img
            src={article.image.url}
            alt={article.image.alt}
            className="max-h-[200px] lg:max-h-none  w-full lg:min-w-[280px] lg:h-full object-cover object-center"
          />
        </header>
        <section className="space-y-3 lg:py-6">
          <h1 className="px-8 font-bold">{article.title}</h1>
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
                <h3 className="text-sm text-[#9DAEC2]">
                  {article.author.date}
                </h3>
              </div>

              <button
                className="relative ml-auto rounded-full shrink-0"
                onClick={toggleShare}
              >
                <img src="/assets/icon-share.svg" alt="Share icon" />
                {shareOpen && (
                  <div className="absolute right-1/2 translate-x-1/2 -top-4 -translate-y-full px-8 py-4 hidden lg:flex lg:gap-4 lg:items-center bg-dark-gray rounded-[10px] shadow-[0px_10px_10px_rgba(201,213,225,0.50)]">
                    <div className="absolute -bottom-[10px] right-1/2 translate-x-1/2 border-t-dark-gray border-t-[10px] border-x-[10px] border-x-transparent"></div>
                    <span className="text-xs tracking-[5px] text-[#9DAEC2] uppercase">
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
                  </div>
                )}
              </button>
            </div>

            {shareOpen && (
              <div className="absolute px-8 py-5 inset-0 flex lg:hidden items-center bg-[#48556A] text-white gap-5">
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
        </section>
      </article>
    </div>
  );
}

export default App;
