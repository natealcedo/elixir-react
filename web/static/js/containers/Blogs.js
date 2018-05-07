import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../presentationals/BlogCard";
import axios from "axios";

class Blogs extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      blogs: []
    };
  }
  async componentWillMount() {
    const {
      data: { blogs }
    } = await axios.get("/api/blogs");
    this.setState({
      blogs
    });
  }

  render() {
    const posts = this.state.blogs.map((blog, index) => (
      <BlogCard
        key={index}
        title={blog.title}
        subtitle={blog.subtitle}
        image={blog.image}
        link={blog.link}
        author={blog.author}
      />
    ));
    return (
      <div>
        <div
          className="is-primary is-large"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            padding: "10px 15px",
            background: "#00D1B2",
            color: "#FFFFFF"
          }}
        >
          <Link
            to="/create"
            style={{
              color: "white"
            }}
          >
            Create Blog Post
          </Link>
        </div>
        <div
          className="is-primary is-large"
          style={{
            position: "absolute",
            top: "80px",
            right: "10px",
            padding: "10px 15px",
            background: "#00D1B2"
          }}
        >
          <Link to="/update/2" style={{ color: "white" }}>
            Edit Blog Post
          </Link>
        </div>
        {posts}
      </div>
    );
  }
}

export default Blogs;
