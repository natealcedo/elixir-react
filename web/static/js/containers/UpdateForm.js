import React from "react";
import axios from "axios";

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.state = {
      id,
      blog: {
        title: "",
        subtitle: "",
        image: "",
        link: "",
        author: ""
      }
    };
  }

  async componentDidMount() {
    const {
      data: { blog }
    } = await axios.get(`/api/blogs/${this.state.id}`);
    this.setState({
      blog: { ...blog }
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    await axios.put(`/api/blogs/${this.state.id}`, {
      blogs: this.state.blog
    });
    this.props.history.push("/");
  };

  onChange = e => {
    e.preventDefault();
    this.setState({
      blog: {
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input"
              name="title"
              onChange={this.onChange}
              type="text"
              value={this.state.blog.title}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Subtitle</label>
          <div className="control">
            <input
              className="input"
              name="subtitle"
              onChange={this.onChange}
              type="text"
              value={this.state.blog.subtitle}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              className="input"
              name="image"
              onChange={this.onChange}
              placeholder="Enter Image URL"
              type="text"
              value={this.state.blog.image}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Link</label>
          <div className="control">
            <input
              className="input"
              name="link"
              onChange={this.onChange}
              type="text"
              value={this.state.blog.link}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Author</label>
          <div className="control">
            <input
              className="input"
              name="author"
              onChange={this.onChange}
              type="text"
              value={this.state.blog.author}
            />
          </div>
        </div>
        <button type="submit" className="button is-primary">
          Update
        </button>
      </form>
    );
  }
}

export default UpdateForm;

// the first truth is, whether we are conscious of it or not,
// we simply do not marry the person we wish to live with, we really marry the
// person we can't live without
