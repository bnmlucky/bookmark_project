import React, { Component } from 'react'

class NewBoookmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            url: ''
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleUrlChange(event) {
        this.setState({ url: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.addBookmark(this.state.title, this.state.url);
        this.setState({
            title: '',
            url: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                    <input type="text"
                            id="title"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                            placeholder="Title"></input>
                    </label>
                    <label>
                        Url:
                    <input type="url"
                            id="url"
                            name="url"
                            value={this.state.url}
                            onChange={this.handleUrlChange}
                            placeholder="Url"></input>
                        <input type="submit" value="Add" />
                    </label>
                </form>
            </div>
        )
    }
}

export default NewBoookmark