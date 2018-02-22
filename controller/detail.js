const detailModel = require('../model/detail')

module.exports = {
  async getDetail (ctx, next) {
    const path = '/' + ctx.params[0]
    const result = await detailModel.getDetail(path)
    ctx.body = result
  }
}