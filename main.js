// main.js
mg.showUI(__html__); // 用于展示插件用户界面

console.log(mg.document.type); // 'DOCUMENT'

mg.ui.onmessage = (msg) => {
  console.log(msg); // { count: 3 }，假设用户在 input 框中输入数字 3

  const count = msg.count;
  for (let i = 0; i < count; i++) {
    // mg 是全局变量，用来访问 MasterGo 提供的 API 接口
    // mg.createEllipse() 可以创建椭圆图层
    mg.createEllipse();
  }
};
