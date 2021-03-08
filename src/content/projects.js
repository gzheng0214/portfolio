/*
 * @Author: Gavin
 * @Date:   2021-02-10 02:49:10
 * @Last Modified by:   Gavin
 * @Last Modified time: 2021-02-25 04:17:23
 */

import covid19 from "../images/covid19.png";
import burger_shack from "../images/burger_shack.png";
import personal_website from "../images/personal_website.png";
import calculator from "../images/calculator.png";

const projects = [
  {
    title: "Covid19",
    description:
      "A project I worked on that uses COVID19 API and REST Countries API to fetch COVID19 data of countries, and uses Highcharts API to format the data.",
    skills: ["html", "css/scss", "javascript"],
    img: covid19,
    url: {
      github: "https://github.com/gzheng0214/COVID19",
      demo: "https://covid19.gzheng.dev/",
    },
  },
  {
    title: "Burger Shack",
    description:
      "A responsive website I created for a fictional burger restaurant. I practiced with various CSS properties and implemented various JavaScript functions.",
    skills: ["html", "css/scss", "javascript"],
    img: burger_shack,
    url: {
      github: "https://github.com/gzheng0214/theburgershack",
      demo: "https://burgershack.gzheng.dev/",
    },
  },
  {
    title: "Portfolio",
    description:
      "This page! First big project I built with ReactJS. The project informations are passed in through a JSON file, allowing generation of components for easy maintanence.",
    skills: ["html", "css/scss", "javascript", "React"],
    img: personal_website,
    url: {
      github: "https://github.com/gzheng0214/portfolio",
      demo: "https://gzheng.dev/",
    },
  },
  {
    title: "Calculator",
    description:
      "Calculator displays the 10 most recent calculations and stores results in localStorage. I used Socket.io to send calculations to each user on the page.",
    skills: ["html", "css/scss", "javascript", "React", "Node.js"],
    img: calculator,
    url: {
      github: "https://github.com/gzheng0214/SezzleCalculator",
      demo: "https://gzheng0214sezzlecalculator.herokuapp.com/",
    },
  },
];

export default projects;
