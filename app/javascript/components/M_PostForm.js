import React from "react"
import PropTypes from "prop-types"
class M_PostForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: props.post.title ? props.post.title : '',
        description: props.post.content ? props.post.content : '',
        category : props.post.category.id ? props.post.category.id : '1',

      };
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleCategoryChange = this.handleCategoryChange.bind(this);


    }
    handleNameChange(e) {
      this.setState({ name: e.target.value });
    }
    handleDescriptionChange(e) {
      this.setState({ description: e.target.value });
    }
    handleCategoryChange(e) {
      this.setState({ category: e.target.value });
    }


    render() {
      return (
        <div className='M_PostForm'>
          <label>Name</label>
          <input
            type="text"
            name="post[name]"
            value={this.state.name}
            onChange={this.handleNameChange}
          />

          <label>Description</label>
          <input
            type="text"
            name="post[description]"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />

          <label>Description</label>
          <input
            type="select"
            name="post[category]"
            value={this.state.category_id}
            onChange={this.handleCategoryChange}
          />

          <input type="submit" value="update" />
        </div>
      );
    }
  }

export default M_PostForm
