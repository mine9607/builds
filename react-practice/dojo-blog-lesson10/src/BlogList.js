//create a re-usable component to be able to update the home content with

//note that the 'blogs' data from the home.js array is not defined in this file so a prop is used

//assigning the custom properties "blogs" and "title" to variables
//note the custom props can be destructured and defined in the parenthesis
const BlogList = ({ blogs, title, handleDelete }) => {
  /*   const blogs = props.blogs;
  const title = props.title; */

  //returning the HTML in a manner to display the properties defined above
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
