const commonModel = require('../model/common')

module.exports = {
  async getCommonList (ctx, next) {
    const result = await commonModel.getCommonList()
    ctx.body = result
  }
}
