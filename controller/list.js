const listModel = require('../model/list')

module.exports = {
  async getCategoryList (ctx, next) {
    const path = '/' + ctx.params[0]
    const result = await listModel.getCategoryList(path)
    ctx.body = {
      list: result ? result : []
    }
  }
}