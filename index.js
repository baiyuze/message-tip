import { request } from "urllib";
import cheerio from "cheerio";
import { sendEmail } from "./email.js";
import axios from "axios";
import dayjs from "dayjs";
const getListHtml = async () => {
  try {
    const { res, data } = await request(
      "https://ae.gdufe.edu.cn/4840/list.htm",
      {
        headers: {
          "Content-Type": "text/html",
          "Cache-Control": "no-store",
        },
      }
    );
    if (res.status === 200) {
      const $ = cheerio.load(data.toString("utf8"));
      const listDom = $(".news_title a");
      const list = [];
      listDom.each((i, ele) => {
        const obj = {
          id: i,
          title: ele.children[0].data,
          href: `https://ae.gdufe.edu.cn${ele.attribs.href}`,
        };
        list.push(obj);
      });
      sendEmail(list, list[0]);
    }
  } catch (error) {
    console.log(error);
  }
};
console.log("已运行");
getListHtml();
setInterval(() => {
  const time = dayjs().format("HH:mm:ss");
  console.log(time, "-------");
  if (["12:00:00", "18:00:00"].includes(time)) {
    getListHtml();
  }
}, 1000);
