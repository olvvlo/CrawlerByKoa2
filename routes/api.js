const router = require('koa-router')()
const homeController = require('../controller/home')
const commonController = require('../controller/common')
const detailController = require('../controller/detail')
const listController = require('../controller/list')

router.prefix('/api')

router.get('/home', homeController.getHomeList)
router.get('/common', commonController.getCommonList)
router.get('/detail/*', detailController.getDetail)
router.get('/list/*', listController.getCategoryList)

module.exports = router