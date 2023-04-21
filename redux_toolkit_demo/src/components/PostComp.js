import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postRedux";

export default function PostComp() {
  const posts = useSelector((state) => state.postsArr.posts);
//   const {posts, loading} = useSelector((state) => state.postsArr);
  const dispatch = useDispatch();
  console.log(posts);
//   console.log(loading)

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <div>PostsComp</div>
      <ul>
        {posts.length !== 0 ? posts.map((post) => <li key={post.id}>{post.title}</li>) : []}
      </ul>
    </>
  );
}
