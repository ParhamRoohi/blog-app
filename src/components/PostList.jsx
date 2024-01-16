export default function PostList({ list }) {
    return (
      <div className="post-list-container">
        <h2>Post List:</h2>
        {list.map((post) => {
          return (
            <div key={post.title} className="main-post-container">
              <div className="post-container">
                <div>Title: {post.title}</div>
                <div>Description: {post.description}</div>
                <div>Date: {post.date} </div>
              </div>
              <button class="delete-sign">X</button>
            </div>
          );
        })}
      </div>
    );
  }
 