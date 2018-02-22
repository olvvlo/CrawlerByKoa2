const cheerio = require('../utils/httpUtils')

module.exports = {
  async getCategoryList (path) {
    const $ = await cheerio(path)
    const list = $("#content li").length ? $("#content li") : $("#studio_content_left li");
    const aResult = []
    for (let i = 2; i < list.length; i++) {
      const obj = {}
      obj.id = 10000 + i
      obj.title = list.eq(i).find('a').attr('title')
      obj.pubdate = list.eq(i).find('span').text()
      obj.link = '/detail' + list.eq(i).find('a').attr('href')
      aResult.push(obj)
    }
    return aResult
  }
}