import React, { Component } from 'react'

class BookmarkLine extends Component {

    deleteBookmark(id) {
        this.props.deleteBookmark(id)
    }

    updateBookmark(id, completed) {
        this.props.updateBookmark(id, completed)
    }

    render() {
        return (
            <div class="doublecontainer">
                <div className="container">
                    <input
                        className="item checkbox"
                        type="checkbox"
                        checked={"checked" ? this.props.completed : ""}
                        onClick={() => this.updateBookmark(this.props.id, !this.props.completed)}
                        onChange={() => { }}>
                    </input>
                    <a className="item link" href={this.props.url} target="_blank" rel="noopener noreferrer" >
                        {this.props.title}
                    </a>
                    <button className="item btn-del" onClick={this.deleteBookmark.bind(this, this.props.id)}>Delete</button>

                </div >
            </div>
        )
    }
}

export default BookmarkLine