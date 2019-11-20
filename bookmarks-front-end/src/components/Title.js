import React, { Component } from 'react'

class Title extends Component {
    render() {
        let styleobj = { fontSize: 100 }
        return (
            <div>
                <h1 className="fontsize">Bookmarks</h1>
            </div>
        )
    }
}

export default Title