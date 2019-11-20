import React, { Component } from 'react';

import './App.css';
import NewBookmark from './components/NewBookmark'
import BookmarkList from './components/BookmarkList'
import Title from './components/Title'
import Backend from './Backend'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookmarks: []
    }
    this.getBookmarks = this.getBookmarks.bind(this)
    this.addBookmark = this.addBookmark.bind(this);
    this.deleteBookmark = this.deleteBookmark.bind(this);
    this.updateBookmark = this.updateBookmark.bind(this);
    this.refresh = this.refresh.bind(this);

    this.backend = new Backend();
  }

  componentDidMount() {
    this.getBookmarks()
  }

  async getBookmarks() {
    const bookmarks = await this.backend.getBookmarks()
    this.setState({
      bookmarks: bookmarks
    });
  }

  async refresh() {
    await this.getBookmarks()
  }

  async addBookmark(title, url) {
    await this.backend.addBookmark(title, url)
    this.refresh()

  }

  async deleteBookmark(id) {
    await this.backend.deleteBookmark(id)
    this.refresh()
  }

  async updateBookmark(id, completed) {
    await this.backend.updateBookmark(id, completed)
    this.refresh()
  }

  render() {
    return (
      <div>
        <Title />
        <NewBookmark addBookmark={this.addBookmark} />
        <BookmarkList
          bookmarks={this.state.bookmarks}
          deleteBookmark={this.deleteBookmark}
          updateBookmark={this.updateBookmark} />
      </div>
    )
  }
}

export default App;
