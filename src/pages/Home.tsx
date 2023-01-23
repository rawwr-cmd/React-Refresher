import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import "./Home.css";

const Home = () => {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/articles");

  return (
    <div className="home">
      <h1 className="h1">Articles</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {articles &&
        articles.map(
          (article: { id: string; title: string; author: string }) => (
            <div key={article.id} className="card">
              <h3>{article.title}</h3>
              <p>{article.author}</p>
              <Link to={`/articles/${article.id}`}>Read me..</Link>
            </div>
          )
        )}
    </div>
  );
};

export default Home;
