import { useEffect, useState } from "react";
import axios from "axios";

const PostsPageContent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://app.localhost:80/api/posts")
      .then((response) => {
        // console.log(response.data);

        setPosts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Failed to load data ...", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>
                <em>{post.author}</em>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostsPageContent;
