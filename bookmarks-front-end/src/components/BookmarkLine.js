import React, { Component } from 'react'

class BookmarkLine extends Component {

    deleteBookmark(id) {
        this.props.deleteBookmark(id)
    }

    updatedBookmark(id) {
        this.props.updatedBookmark(id)
    }

    render() {
        return (
            <div>
                <a href={this.props.url} target="_blank" rel="noopener noreferrer" >
                    {this.props.title}
                </a>
                <button onClick={this.deleteBookmark.bind(this, this.props.id)}>Delete</button>
                <button onClick={() => this.updatedBookmark(this.props.id, this.props.title, this.props.url)}>Edit</button>
            </div >
        )
    }
}

export default BookmarkLine