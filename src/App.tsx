import article from "./data.json";
import { ArticleMetadata } from "./components/ArticleMetadata";

function App() {
  return (
    <main className="min-h-screen grid justify-center items-start lg:place-content-center">
      <article className="my-[74px] mx-6 max-w-[520px] lg:max-w-[730px] flex flex-col lg:flex-row gap-8 lg:gap-0 rounded-[10px] bg-white shadow-[0px_40px_40px_-10px_rgba(201,213,225,0.50)]">
        <header>
          <img
            src={article.image.url}
            alt={article.image.alt}
            className="rounded-t-[10px] lg:rounded-r-none lg:rounded-l-[10px] max-h-[200px] lg:max-h-none  w-full lg:min-w-[280px] lg:h-full object-cover object-left"
          />
        </header>
        <section className="space-y-3 lg:pt-8">
          <h2 className="px-8 lg:px-10 font-bold lg:text-xl">
            {article.title}
          </h2>
          <p className="px-8 lg:px-10 font-medium text-sm text-[#6E8098]">
            {article.content}
          </p>
          <ArticleMetadata author={article.author} />
        </section>
      </article>
    </main>
  );
}

export default App;
