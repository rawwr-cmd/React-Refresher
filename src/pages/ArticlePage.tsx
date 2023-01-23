import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

export default function ArticlePage() {
  const { articleId } = useParams();
  const url = `http://localhost:3000/articles/${articleId}`;

  const { data: article, isPending, error } = useFetch(url);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      //redirect
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [navigate, error]);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>By {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
