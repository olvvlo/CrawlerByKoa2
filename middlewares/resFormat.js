module.exports = async (ctx, next) => {
  await next()
  ctx.body = {
    ret: true,
    data: ctx.body ? ctx.body : {}
  }
}