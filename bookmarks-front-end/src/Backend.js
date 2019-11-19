import axios from 'axios'

class Backend {
  constructor() {
    this.backendUrl = "http://localhost:3003"
    this.bookmarksUrl = `${this.backendUrl}/bookmarks`
  }

  async getBookmarks() {
    const response = await axios(this.bookmarksUrl);
    return response.data;
  }

  async addBookmark(title, url) {
    await axios.post(this.bookmarksUrl,
      {
        title: title,
        url: url
      })
  }

  async deleteBookmark(id) {
    await axios.delete(`${this.bookmarksUrl}/${id}`)
  }
}

export default Backend;
