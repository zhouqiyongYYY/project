/*
Navicat MySQL Data Transfer

Source Server         : gouwuwuyou
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : username

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-13 18:06:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for carlist
-- ----------------------------
DROP TABLE IF EXISTS `carlist`;
CREATE TABLE `carlist` (
  `imgurl` varchar(255) DEFAULT NULL,
  `uname` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `jianshu` varchar(255) DEFAULT NULL,
  `guid` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of carlist
-- ----------------------------
INSERT INTO `carlist` VALUES ('http://localhost:8888/src/images/car3.jpg', 'Gucci Dressage Original GG', '120.69', '1', '24236');
INSERT INTO `carlist` VALUES ('http://localhost:8888/src/images/car2.jpg', 'Gucci Dressage Original GG', '120.69', '1', '24235');
INSERT INTO `carlist` VALUES ('http://localhost:8888/src/images/car2.jpg', 'Gucci Dressage Original GG', '120.69', '1', '24235');

-- ----------------------------
-- Table structure for carlist_ul
-- ----------------------------
DROP TABLE IF EXISTS `carlist_ul`;
CREATE TABLE `carlist_ul` (
  `uname` varchar(255) DEFAULT NULL,
  `guid` varchar(11) NOT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `jianshu` decimal(10,0) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`guid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of carlist_ul
-- ----------------------------
INSERT INTO `carlist_ul` VALUES ('Gucci Dressage Original GG', '24235', '../images/car2.jpg', '1', '120.69');
INSERT INTO `carlist_ul` VALUES ('Gucci Dressage Original GG', '24236', '../images/car3.jpg', '1', '120.69');
INSERT INTO `carlist_ul` VALUES ('Gucci Dressage Original GG', '24237', '../images/car4.jpg', '1', '120.69');
INSERT INTO `carlist_ul` VALUES ('Gucci Dressage Original GG', '24238', '../images/car5.jpg', '1', '120.69');
INSERT INTO `carlist_ul` VALUES ('Gucci Dressage Original GG', '24239', '../images/car6.jpg', '1', '120.69');
INSERT INTO `carlist_ul` VALUES ('Gucci Dressage Original GG', '24240', '../images/car1.jpg', '1', '120.69');

-- ----------------------------
-- Table structure for detail_list
-- ----------------------------
DROP TABLE IF EXISTS `detail_list`;
CREATE TABLE `detail_list` (
  `id` int(11) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `tittle` varchar(255) NOT NULL,
  `nowprice` decimal(10,2) NOT NULL,
  `passprice` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`,`imgurl`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of detail_list
-- ----------------------------
INSERT INTO `detail_list` VALUES ('1', '../images/d01.jpg', '【青蛙王子】儿童滋润宝宝面霜2瓶l', '19.90', '29.90');
INSERT INTO `detail_list` VALUES ('2', '../images/d02.jpg', '【新券】萃植轩-皂液洗衣液瓶装4斤装', '9.90', '14.90');
INSERT INTO `detail_list` VALUES ('3', '../images/d03.jpg', '新券【好吉利】卫生纸无芯卷纸4层12卷', '8.90', '9.90');
INSERT INTO `detail_list` VALUES ('4', '../images/d04.jpg', '【2条】丹吉娅天鹅绒中厚打底瘦腿袜', '8.50', '18.50');
INSERT INTO `detail_list` VALUES ('5', '../images/d05.jpg', '【隆力奇旗舰店】去屑洗发水400ml', '5.99', '10.99');
INSERT INTO `detail_list` VALUES ('6', '../images/d06.jpg', '新疆特级红枣【拍3份3斤！超大个】', '24.80', '49.80');
INSERT INTO `detail_list` VALUES ('7', '../images/d07.jpg', '迪奥同款！2支装！滋润补水无色润唇膏', '5.90', '10.90');
INSERT INTO `detail_list` VALUES ('8', '../images/d08.jpg', '【3双装】加绒加厚中筒保暖雪地袜', '9.90', '14.90');
INSERT INTO `detail_list` VALUES ('9', '../images/d09.jpg', '3色可选！无痕无钢圈运动内衣', '9.90', '10.90');
INSERT INTO `detail_list` VALUES ('10', '../images/d10.jpg', '4.9超高评分！ 防爆充电式仿兔毛热水袋', '11.90', '21.90');
INSERT INTO `detail_list` VALUES ('11', '../images/d11.jpg', '【俞兆林】男士加绒加厚保暖裤羊毛护膝', '19.90', '29.90');
INSERT INTO `detail_list` VALUES ('12', '../images/d12.jpg', '【拍4件】黄冰糖瓶共1400g', '16.80', '19.80');
INSERT INTO `detail_list` VALUES ('13', '../images/d13.jpg', '网红徽太狼正宗黄山烧饼24个', '6.90', '16.90');
INSERT INTO `detail_list` VALUES ('14', '../images/d02.jpg', '御泥坊三合一黑面膜40片拍两件更划算', '69.80', '89.80');
INSERT INTO `detail_list` VALUES ('15', '../images/d15.jpg', '芬展旗舰店 老北京祛湿足贴50贴', '9.80', '15.80');

-- ----------------------------
-- Table structure for imglist
-- ----------------------------
DROP TABLE IF EXISTS `imglist`;
CREATE TABLE `imglist` (
  `id` int(11) NOT NULL,
  `imgsrc` varchar(255) NOT NULL,
  `tittle` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of imglist
-- ----------------------------
INSERT INTO `imglist` VALUES ('1', '../images/001.jpg', '\r\n【南极人袜子10双】高档精品棉袜', '12.60');
INSERT INTO `imglist` VALUES ('2', '../images/002.jpg', '【拍对选项送抽纸】定制纸盒', '1.00');
INSERT INTO `imglist` VALUES ('3', '../images/003.jpg', '【情侣款】秋冬季可爱居家男女棉拖鞋', '5.80');
INSERT INTO `imglist` VALUES ('4', '../images/004.jpg', '月销46万+【买二送一】一次性口罩50只', '5.10');
INSERT INTO `imglist` VALUES ('5', '../images/005.jpg', '\r\n【吉登】声波电动牙刷免充电', '11.90');
INSERT INTO `imglist` VALUES ('6', '../images/006.jpg', '雪玲妃 卸妆水500ml+20片化妆棉', '5.10');

-- ----------------------------
-- Table structure for lingquan
-- ----------------------------
DROP TABLE IF EXISTS `lingquan`;
CREATE TABLE `lingquan` (
  `id` int(11) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `tittle` varchar(255) DEFAULT NULL,
  `nowprice` decimal(10,2) DEFAULT NULL,
  `passprice` decimal(10,2) DEFAULT NULL,
  `quan` varchar(255) DEFAULT NULL,
  `yiling` varchar(255) DEFAULT NULL,
  `xiaoliang` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`,`imgurl`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lingquan
-- ----------------------------
INSERT INTO `lingquan` VALUES ('1', '../images/q1.jpg', '赵丽颖代言！植护纯木婴儿抽纸10包', '10.10', '15.10', '98000', '2000', '1299642');
INSERT INTO `lingquan` VALUES ('2', '../images/q2.jpg', '【南极人袜子10双】高档精品棉袜', '12.60', '15.60', '32000', '68000', '716087');
INSERT INTO `lingquan` VALUES ('3', '../images/q3.jpg', '\r\n【南极人10双】优质棉袜时尚商务', '12.60', '15.60', '59400', '600', '570946');
INSERT INTO `lingquan` VALUES ('4', '../images/q4.jpg', '【拍对选项送抽纸】定制纸盒', '1.50', '2.50', '9600', '5400', '544345');
INSERT INTO `lingquan` VALUES ('5', '../images/q5.jpg', '\r\n【类目Top1】秋冬保暖防滑情侣棉拖鞋', '5.80', '6.80', '29200', '10800', '499434');
INSERT INTO `lingquan` VALUES ('6', '../images/q6.jpg', '【吉登】声波电动牙刷成人免充电', '11.90', '12.90', '99964', '36', '467813');

-- ----------------------------
-- Table structure for shouye
-- ----------------------------
DROP TABLE IF EXISTS `shouye`;
CREATE TABLE `shouye` (
  `id` int(240) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `nowprice` decimal(10,2) DEFAULT NULL,
  `passprice` decimal(10,2) DEFAULT NULL,
  `tittle` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`,`imgurl`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shouye
-- ----------------------------
INSERT INTO `shouye` VALUES ('1', '../images/s01.jpg', '19.90', '25.90', '【买1送1】小黑裙香氛弹力素238g');
INSERT INTO `shouye` VALUES ('2', '../images/s02.jpg', '13.80', '15.80', '铂晨静音挂钟 简约时钟客厅卧室钟表');
INSERT INTO `shouye` VALUES ('3', '../images/s03.jpg', '29.90', '35.90', '【全尺码】儿童加厚羽绒棉服');
INSERT INTO `shouye` VALUES ('4', '../images/s04.jpg', '9.90', '15.90', 'kaga情侣超细软毛牙刷8支独立装');
INSERT INTO `shouye` VALUES ('5', '../images/s05.jpg', '24.00', '30.00', '【双面小包包】少女宽带斜挎单肩包');
INSERT INTO `shouye` VALUES ('6', '../images/s06.jpg', '14.90', '16.00', '【小红书】韩版简约潮流学生女士手表防水');
INSERT INTO `shouye` VALUES ('7', '../images/s07.jpg', '11.50', '14.50', '【康师傅】经典香辣牛肉面方便面5连包');
INSERT INTO `shouye` VALUES ('8', '../images/s08.jpg', '22.80', '26.00', '玻尿酸黑面膜睡眠免洗补水保湿滋润清');
INSERT INTO `shouye` VALUES ('9', '../images/s09.jpg', '39.60', '35.60', '2018春秋新款青年休闲裤男直筒修身型');
INSERT INTO `shouye` VALUES ('10', '../images/s10.jpg', '25.00', '30.00', '【4双装】男士春夏五指袜男纯棉短筒');
INSERT INTO `shouye` VALUES ('11', '../images/s11.jpg', '5.80', '8.80', '启蒙机器人战神兼容乐高变形金刚启');
INSERT INTO `shouye` VALUES ('12', '../images/s12.jpg', '9.90', '15.90', '可莱丝彩虹春雨蜜罐蜂蜜洗面奶');
INSERT INTO `shouye` VALUES ('13', '../images/s13.jpg', '59.90', '49.90', '伟臣潮牌大码男装纯色短袖T恤');
INSERT INTO `shouye` VALUES ('14', '../images/s14.jpg', '15.00', '18.00', '杜蕾斯避孕套情趣超薄螺纹装组合');
INSERT INTO `shouye` VALUES ('15', '../images/s15.jpg', '49.00', '55.00', '男士洗面奶美白祛痘控油去黑头补水');
INSERT INTO `shouye` VALUES ('16', '../images/s16.jpg', '68.00', '72.00', '2018新款拖鞋女外穿夏平底凉拖');
INSERT INTO `shouye` VALUES ('17', '../images/s17.jpg', '49.00', '55.00', '【巨云】透气运动鞋儿童休闲鞋');
INSERT INTO `shouye` VALUES ('18', '../images/s18.jpg', '18.60', '25.00', '贝亲NUK玻璃PPSU便携式保温套');
INSERT INTO `shouye` VALUES ('19', '../images/s19.jpg', '24.90', '28.00', '【网红推荐】纯棉中腰内裤防走光内裤');
INSERT INTO `shouye` VALUES ('20', '../images/s20.jpg', '23.00', '26.00', '悦翔V753真皮汽车钥匙包套');
INSERT INTO `shouye` VALUES ('21', '../images/s21.jpg', '28.00', '35.00', '韩版英伦风百搭平底马丁靴女');
INSERT INTO `shouye` VALUES ('22', '../images/s22.jpg', '6.90', '7.80', '绿萝多肉植物通用浓缩营养液1斤装');
INSERT INTO `shouye` VALUES ('23', '../images/s23.jpg', '18.90', '20.90', '【纳诺神蜂】可吞咽防蛀儿童牙膏70g*4');
INSERT INTO `shouye` VALUES ('24', '../images/s24.jpg', '69.00', '75.00', '伟臣潮牌大码长袖T恤加肥加大');
INSERT INTO `shouye` VALUES ('25', '../images/s25.jpg', '25.90', '49.00', '家用大功率吹风机冷热风电吹风');
INSERT INTO `shouye` VALUES ('26', '../images/s26.jpg', '118.00', '138.00', '新款太阳镜偏光情侣墨镜潮人蛤蟆镜');
INSERT INTO `shouye` VALUES ('27', '../images/s27.jpg', '6.90', '9.90', '复古男士运动休闲跑步阿甘板鞋子');
INSERT INTO `shouye` VALUES ('28', '../images/s28.jpg', '123.00', '129.00', '【番茄派】喵星人植物护手霜3支');
INSERT INTO `shouye` VALUES ('29', '../images/s29.jpg', '13.90', '15.90', '皮具护理油擦洗皮沙发皮革清洗剂');
INSERT INTO `shouye` VALUES ('30', '../images/s30.jpg', '89.00', '95.00', '【汤臣倍健】维生素C+E 钙铁锌等保健品');
INSERT INTO `shouye` VALUES ('31', '../images/s31.jpg', '29.90', '30.90', '健身包女健身潮短途旅行包手提大容量训练包');
INSERT INTO `shouye` VALUES ('32', '../images/s32.jpg', '69.00', '79.00', '妇炎洁私处护理液150ml*2瓶送毛巾\r\n妇炎洁私处护理液150ml*2瓶送毛巾');
INSERT INTO `shouye` VALUES ('33', '../images/s33.jpg', '19.90', '20.60', '【利仁】电饼铛春卷皮烙饼机煎饼锅');
INSERT INTO `shouye` VALUES ('34', '../images/s34.jpg', '2.20', '4.00', '【标域】便携迷你usb充电香薰加湿器');
INSERT INTO `shouye` VALUES ('35', '../images/s35.jpg', '34.90', '38.00', '【送3包抽纸】家用手工缝纫针线');
INSERT INTO `shouye` VALUES ('36', '../images/s36.jpg', '9.90', '34.90', '德国原装进口棉柔卫生巾组合装4包57片装');
INSERT INTO `shouye` VALUES ('37', '../images/s37.jpg', '24.90', '26.00', '【2瓶装】小白鞋神器泡沫清洗剂');
INSERT INTO `shouye` VALUES ('38', '../images/s38.jpg', '28.00', '35.90', '2018款斯柯达新明锐汽车钥匙套');
INSERT INTO `shouye` VALUES ('39', '../images/s39.jpg', '30.50', '32.00', '浴室卫生间地垫吸水门垫定制地毯');
INSERT INTO `shouye` VALUES ('40', '../images/s40.jpg', '24.50', '29.20', '网红零食香酥脆枣包装');
INSERT INTO `shouye` VALUES ('41', '../images/s81.jpg', '30.00', '35.00', '【正品向大大】防震无痕运动内衣套装女文胸');
INSERT INTO `shouye` VALUES ('42', '../images/s82.jpg', '40.00', '50.00', '【送笔记本】四年级上语+数2本达标卷');
INSERT INTO `shouye` VALUES ('43', '../images/s83.jpg', '17.90', '20.00', 'Glasslock钢化玻璃水杯牛奶杯');
INSERT INTO `shouye` VALUES ('44', '../images/s84.jpg', '248.00', '268.00', '2018秋冬新款洋气外套短裤套装');
INSERT INTO `shouye` VALUES ('45', '../images/s85.jpg', '149.00', '169.00', '2018女拼色条纹加厚运动棉袄外套');
INSERT INTO `shouye` VALUES ('46', '../images/s86.jpg', '49.00', '69.00', '女士秋衣秋裤女纯棉套装少女保暖内衣薄款');
INSERT INTO `shouye` VALUES ('47', '../images/s87.jpg', '99.00', '102.00', '2018流行女装新款修身镂空中长款');
INSERT INTO `shouye` VALUES ('48', '../images/s88', '59.00', '69.00', '秋冬季港味原创潮流学生宽松紧腰牛仔裤\r\n秋冬季港味原创潮流学生宽松紧腰牛仔裤\r\n秋冬季港味原创潮流学生宽松紧腰牛仔裤');

-- ----------------------------
-- Table structure for userlist
-- ----------------------------
DROP TABLE IF EXISTS `userlist`;
CREATE TABLE `userlist` (
  `usrname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`usrname`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userlist
-- ----------------------------
INSERT INTO `userlist` VALUES ('yong999', 'qwer123');
INSERT INTO `userlist` VALUES ('yong888', 'qwer123');
INSERT INTO `userlist` VALUES ('yong777', 'qwer123');
INSERT INTO `userlist` VALUES ('yong666', 'qwe1234');
INSERT INTO `userlist` VALUES ('yong111', 'asd123');
INSERT INTO `userlist` VALUES ('asd123', 'asd123');
INSERT INTO `userlist` VALUES ('yong321', 'asd123');
INSERT INTO `userlist` VALUES ('yong159', 'asd123');
INSERT INTO `userlist` VALUES ('zxc123', 'asd111');
INSERT INTO `userlist` VALUES ('asd666', 'asd666');
SET FOREIGN_KEY_CHECKS=1;
