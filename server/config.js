/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "特别奖"
  },
  {
    type: 1,
    count: 1,
    text: "Special prize: \n",
    title: "iPad Pro",
    img: "../img/iPad_Pro.jpg"
  },
  {
    type: 2,
    count: 1,
    text: "Frist prize: \n",
    title: "Apple iPhone 15",
    img: "../img/Apple_iPhone_15.jpg"
  },
  {
    type: 3,
    count: 2,
    text: "The second prize: \n",
    title: "Dji - Motion camera",
    img: "../img/Dji_action_camera.jpg"
  },
  {
    type: 4,
    count: 3,
    text: "The third prize: \n",
    title: "Dji - Handheld gimbal",
    img: "../img/Dji_handheld_head.jpg"
  },
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 1, 1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "Conviva";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
