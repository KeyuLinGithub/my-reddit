import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      sortBy:'relevance'};
    this.handleItemChange=this.handleItemChange.bind(this);
    this.handleSortByChange=this.handleSortByChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleItemChange(event) {
    this.setState({item: event.target.value});
  }
  handleSortByChange(event){
    this.setState({sortBy: event.target.value});
  }
  handleSubmit(event) {
    console.log('new search: ' + this.state.item+", "+this.state.sortBy);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">

          <input type="text" class="form-control " id="inputItem" value={this.state.value} onChange={this.handleItemChange} placeholder="What's in your mind?" />
        </div>
        <div class="form-group">
          <label class="radio-inline"><input type="radio" name="optradio" value="relevance" checked={this.state.sortBy==='relevance'} onChange={this.handleSortByChange} />relevance</label>
          <label class="radio-inline"><input type="radio" name="optradio" value="hot" checked={this.state.sortBy==='hot'} onChange={this.handleSortByChange} />hot</label>
          <label class="radio-inline"><input type="radio" name="optradio" value="top" checked={this.state.sortBy==='top'} onChange={this.handleSortByChange} />top</label>
          <label class="radio-inline"><input type="radio" name="optradio" value="new" checked={this.state.sortBy==='new'} onChange={this.handleSortByChange} />newest</label>
        </div>
        <button type="submit" class="btn btn-dark btn-block mt-4">Search</button>
      </form>
    );
  }
}

export default Search;
