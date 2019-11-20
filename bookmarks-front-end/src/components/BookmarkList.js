import React, { Component } from 'react'
import BookmarkLine from './BookmarkLine'

class BookmarkList extends Component {
    render() {
        return (
            <ul style={{ listStyle: "none" }}>
                {this.props.bookmarks.map(item => {
                    return (
                        <li key={item._id}>
                            <BookmarkLine
                                id={item._id}
                                title={item.title}
                                url={item.url}
                                completed={item.completed}
                                deleteBookmark={this.props.deleteBookmark}
                                updateBookmark={this.props.updateBookmark} />
                        </li>)
                })}
            </ul>
        )
    }
}

export default BookmarkList