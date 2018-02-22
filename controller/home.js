const homeModel = require('../model/home')

module.exports = {
  async getHomeList (ctx, next) {
    const result = await homeModel.getHomeList()
    ctx.body = {
      list: result ? result : []
    }
  }
}