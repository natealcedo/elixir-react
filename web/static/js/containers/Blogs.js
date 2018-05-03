import React from "react";
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
    } = await axios.get("/blogs");

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
    return <div>{posts}</div>;
  }
}

export default Blogs;
