﻿module.exports.index = function (req, res) {
    res.render('index', { title: 'Index' });
};

module.exports.books = function (req, res) {
    res.render('books', { title: 'Books', books: books });
};

module.exports.about = function (req, res) {
    res.render('about', { title: 'About' });
};


var books = [
    {
        id: 0,
        title: "深入浅出Node.js",
        info: "朴灵 / 人民邮电出版社 / 2013-12-1 / CNY 69.00",
        rating: 5,
        img: "https://img3.doubanio.com/mpic/s27269296.jpg",
        tags: ["node", "深入浅出"],
        brief: '本书从不同的视角介绍了 Node 内在的特点和结构。由首章Node 介绍为索引，涉及Node 的各个方面，主要内容包含模块机制的揭示、异步I/O 实现原理的展现、异步编程的探讨、内存控制的介绍、二进制数据Buffer 的细节、Node 中的网络编程基础、Node 中的Web 开发、进程间的消息传递、Node 测试以及通过Node 构建产品需要的注意事项。最后的附录介绍了Node 的安装、调试、编码规范和NPM 仓库等事宜。本书适合想深入了解 Node 的人员阅读。'
        ,ISBN: 9787115335500
    },
    {
        id: 1,
        title: "程序员修炼之道 : 从小工到专家",
        info: "Andrew Hunt、David Thomas / 马维达 / 电子工业出版社 / 2005-1 / 48.00元",
        rating: 5,
        img: "https://img3.doubanio.com/mpic/s3957863.jpg",
        tags: ["程序人生", "软件开发"],
        brief: '《程序员修炼之道》由一系列的独立的部分组成，涵盖的主题从个人责任、职业发展，直到用于使代码保持灵活、并且易于改编和复用的各种架构技术。利用许多富有娱乐性的奇闻轶事、有思想性的例子以及有趣的类比，全面阐释了软件开发的许多不同方面的最佳实践和重大陷阱。无论你是初学者，是有经验的程序员，还是软件项目经理，本书都适合你阅读。'
        ,ISBN: 9787505397194
    },
    {
        id: 2,
        title: "Getting MEAN with Mongo, Express, Angular, and Node",
        info: "Simon Holmes / Manning Publications / 2015-11-26 / USD 44.99",
        rating: 4,
        img: "https://img3.doubanio.com/mpic/s27676844.jpg",
        tags: ["node", "web开发", "编程"],
        brief: 'MEAN栈开发,比较详尽的的应用开发书籍'
        , ISBN: 9781617292033
    }
];

