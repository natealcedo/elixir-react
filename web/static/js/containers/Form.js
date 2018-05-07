import React from "react";
import axios from "axios";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      subtitle: "",
      image: "",
      link: "",
      author: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    await axios.post("/api/blogs", {
      blogs: this.state
    });
  };

  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
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
              value={this.state.title}
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
              value={this.state.subtitle}
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
              value={this.state.image}
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
              value={this.state.link}
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
              value={this.state.author}
            />
          </div>
        </div>
        <button type="submit" className="button is-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
