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
    text: "特等奖",
    title: "iPad Pro",
    img: "../img/iPad_Pro.jpg"
  },
  {
    type: 2,
    count: 1,
    text: "一等奖",
    title: "Apple iPhone 15",
    img: "../img/Apple_iPhone_15.jpg"
  },
  {
    type: 3,
    count: 2,
    text: "二等奖",
    title: "大疆运动相机",
    img: "../img/Dji_action_camera.jpg"
  },
  {
    type: 4,
    count: 3,
    text: "三等奖",
    title: "大疆手持云台",
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
