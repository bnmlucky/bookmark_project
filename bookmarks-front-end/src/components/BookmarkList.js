import React, { Component } from 'react'
import BookmarkLine from './BookmarkLine'

class BookmarkList extends Component {
    render() {
        return (
            <ul>
                {this.props.bookmarks.map(item => {
                    return (
                        <li key={item._id}>
                            <BookmarkLine id={item._id} title={item.title} url={item.url} deleteBookmark={this.props.deleteBookmark} />
                        </li>)
                })}
            </ul>
        )
    }
}

export default BookmarkList