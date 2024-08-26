import article from "./data.json";

function App() {
  return (
    <>
      <article className="">
        <header className="">
          <img src={article.image.url} alt={article.image.alt} className="" />
        </header>
        <section className="">
          <h1 className="">{article.title}</h1>
          <p className="">{article.content}</p>
        </section>
        <footer className="">
          <img
            src={article.author.image.url}
            alt={article.author.image.alt}
            className=""
          />
          <div className="">
            <h2 className="">{article.author.name}</h2>
            <h3 className="">{article.author.date}</h3>
          </div>
          <button className="">Share</button>
        </footer>
      </article>
    </>
  );
}

export default App;
