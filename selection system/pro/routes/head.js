var express = require('express');
var router = express.Router();
var multer  = require('multer');
var logoName;

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");
		//给图片加上时间戳格式防止重名名
		//比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
	cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
	logoName = file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1];
  }
})
 
var upload = multer({ storage: storage })

/* GET users listing. */
// router.get('/chuang', function(req, res, next) {
//   res.send('33333');
// });
router.post('/head',upload.single('logo'),function(req, res, next) {

  	res.send(logoName);
});

module.exports = router;