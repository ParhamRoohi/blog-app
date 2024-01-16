import PostList from "./PostList";
import AddPost from "./AddPost";
import { useState } from "react";

const MyBlog = () => {
  const [postList, setPostList] = useState([]);
  const onAddNewPost = (newPost) => {
    const newPostValue = [...postList, newPost];
    setPostList(newPostValue);
  };
  const styles = {
    wrapper: { height: "1", width: "1", display: "flex", gap: "10px" },
  };
  return (
    <div className="main-container" style={styles.wrapper}>
      <AddPost onAdd={onAddNewPost} />
      <PostList list={postList} />
    </div>
  );
};

export default MyBlog;
