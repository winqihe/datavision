/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : hotel

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 25/04/2021 23:34:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for dish
-- ----------------------------
DROP TABLE IF EXISTS `dish`;
CREATE TABLE `dish`  (
  `id` int NOT NULL COMMENT '主键',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '菜名',
  `price` int NULL DEFAULT NULL COMMENT '价格',
  `category` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '菜类',
  `rating` int NULL DEFAULT NULL COMMENT '评分',
  `waittime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '等待时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dish
-- ----------------------------
INSERT INTO `dish` VALUES (1, '香辣猪蹄', 46, '经典菜', 1291, '2021-04-25 19:32:00');
INSERT INTO `dish` VALUES (2, '鱼香肉丝', 33, '特色菜', 634, '2021-04-25 19:33:00');
INSERT INTO `dish` VALUES (3, '咸烧白', 27, '家常菜', 363, '2021-04-25 19:31:00');
INSERT INTO `dish` VALUES (4, '麻婆豆腐', 19, '家常菜', 361, '2021-04-25 19:34:00');
INSERT INTO `dish` VALUES (5, '青椒回锅肉', 32, '经典菜', 291, '2021-04-25 19:32:00');
INSERT INTO `dish` VALUES (6, '鸡米芽菜', 22, '特色菜', 211, '2021/04/25,19:32:00');
INSERT INTO `dish` VALUES (7, '宫保鸡丁', 44, '经典菜', 289, '2021/04/25,19:32:00');
INSERT INTO `dish` VALUES (8, '酱香卤鸭', 53, '特色菜', 208, '2021/04/25,19:32:00');
INSERT INTO `dish` VALUES (9, '红烧肉', 41, '家常菜', 177, '2021/04/25,19:32:00');
INSERT INTO `dish` VALUES (10, '豆瓣鲜鱼', 30, '特色菜', 135, '2021/04/25,19:32:00');
INSERT INTO `dish` VALUES (11, '冰淇凌', 3, '冷饮', 129, '2021/04/25,19:32:00');
INSERT INTO `dish` VALUES (12, '咖啡', 3, '热饮', 107, '2021/04/25,19:32:00');
INSERT INTO `dish` VALUES (13, '可乐', 2, '冷饮', 96, '2021/04/25,19:32:00');
INSERT INTO `dish` VALUES (14, '绿茶', 2, '冷饮', 86, '2021/04/25,19:32:00');
INSERT INTO `dish` VALUES (15, '奶茶', 5, '热饮', 80, '2021/04/25,19:32:00');
INSERT INTO `dish` VALUES (16, '盖浇饭', 10, '主食', 69, '2021/04/25,19:32:00');
INSERT INTO `dish` VALUES (17, '牛肉面', 9, '主食', 75, '2021/04/25,19:32:00');
INSERT INTO `dish` VALUES (18, '番茄鸡蛋面', 8, '主食', 51, '2021/04/25,19:32:00');

-- ----------------------------
-- Table structure for health
-- ----------------------------
DROP TABLE IF EXISTS `health`;
CREATE TABLE `health`  (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `value` int NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of health
-- ----------------------------
INSERT INTO `health` VALUES ('空气细菌总数', 11, 1);
INSERT INTO `health` VALUES ('PM2.5', 12, 2);
INSERT INTO `health` VALUES ('一氧化碳', 8, 3);
INSERT INTO `health` VALUES ('PM10', 10, 4);
INSERT INTO `health` VALUES ('空气温度', 19, 5);
INSERT INTO `health` VALUES ('二氧化碳', 14, 6);
INSERT INTO `health` VALUES ('甲醛', 6, 7);

SET FOREIGN_KEY_CHECKS = 1;
