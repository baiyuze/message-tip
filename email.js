import nodemailer from "nodemailer";
import { html } from "./htm.js";

export const sendEmail = (list, item) => {
  //引入模块 nodemailer

  const config = {
    // 163邮箱 为smtp.163.com
    host: "smtp.qq.com", //这是qq邮箱
    //端口
    port: 465,
    auth: {
      // 发件人邮箱账号
      user: "1347417308@qq.com",
      //发件人邮箱的授权码 这里可以通过qq邮箱获取 并且不唯一
      pass: "czehgujrcagahcea",
    },
  };

  const transporter = nodemailer.createTransport(config);

  const mail = {
    // 发件人 邮箱  '昵称<发件人邮箱>'
    from: "光光<1347417308@qq.com>",
    // 主题
    subject: item.title,
    // 收件人 的邮箱 可以是其他邮箱 不一定是qq邮箱
    to: "rwgweiguang@163.com",
    // 内容
    text: item.title,
    //这里可以添加html标签
    html: html(list),
  };

  transporter.sendMail(mail, function (error, info) {
    if (error) {
      return console.log(error);
    }
    transporter.close();
    console.log("邮件已发送:", info.response);
  });
};
