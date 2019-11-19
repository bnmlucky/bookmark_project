import React, { Component } from 'react'

class BookmarkLine extends Component {

    deleteBookmark(id) {
        this.props.deleteBookmark(id)
    }

    render() {
        return (
            <div>
                <a href={this.props.url} target="_blank" rel="noopener noreferrer" >
                    {this.props.title}
                </a>
                <button onClick={this.deleteBookmark.bind(this, this.props.id)}>Delete</button>
            </div>
        )
    }
}

export default BookmarkLine