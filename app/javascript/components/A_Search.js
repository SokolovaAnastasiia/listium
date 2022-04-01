import React from "react"
import PropTypes from "prop-types"
class A_Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className='A_Search' onSubmit={this.handleSubmit}>
          <input type="search" placeholder='Поиск' onChange={this.handleChange} />
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
export default A_Search
