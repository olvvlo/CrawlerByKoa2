const cheerio = require('../utils/httpUtils')

module.exports = {
  async getCommonList () {
    const $ = await cheerio()
    const list = $("#title li")
    const aResult = [];
    for (let i = 0; i < list.length; i++) {
      const obj = {}
      obj.id = 10000 + i
      obj.title = list.eq(i).find('a').text()
      obj.link = '/list' + list.eq(i).find('a').attr('href')
      aResult.push(obj)
    }
    const category = $("#nav .navblock")
    const aCategory = []
    for (var i = 0; i < category.length; i++) {
      const oCate = {}
      oCate.title = category.eq(i).find('h2 a').text()
      oCate.link = '/list' + category.eq(i).find('h2 a').attr('href')
      const oList = category.eq(i).find('ul li')
      const cateList = []
      for (var j = 0; j < oList.length; j++) {
        const oSubCate = {}
        oSubCate.id = 10000 + j
        oSubCate.title = oList.eq(j).find('a').text()
        oSubCate.link = '/list' + oList.eq(j).find('a').attr('href')
        cateList.push(oSubCate)
      }
      oCate.list = cateList
      aCategory.push(oCate)
    }
    return {list: aResult, category: aCategory}
  }
}