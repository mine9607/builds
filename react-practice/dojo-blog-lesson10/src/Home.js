import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1, date: "03/02/23" },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3 },
  ]);

  const [name, setName] = useState("mario");

  //defining the delete functionality
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  //creating a useEffect hook with a name dependency so the useEffect is fired only when name changes
  useEffect(() => {
    console.log("use effect ran");
    console.log(name);
  }, [name]);

  //defining the Bloglist component and defining custom properties "blogs" and "title"
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <button onClick={() => setName("brian")}>change name</button>
      <p>{name}</p>
      {/*       <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs!"
        handleDelete={handleDelete}
      /> */}
    </div>
  );
};

export default Home;
