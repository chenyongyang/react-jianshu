const express = require('express');
let app = express();

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});

app.get('/api/headerlist', function (req, res) {
    res.end(JSON.stringify({
        success: true,
        data: ["行距杯2018征文", "区块链", "小程序", "vue", "毕业", "PHP", "故事", "flutter", "理财", "美食", "投稿", "手帐", "书法", "PPT", "穿搭", "打碗碗花", "简书", "姥姥的澎湖湾", "设计", "创业", "交友", "籽盐", "教育", "思维导图", "疯哥哥", "梅西", "时间管理", "golang", "连载", "自律", "职场", "考研", "慢世人", "悦欣", "一纸vr", "spring", "eos", "足球", "程序员", "林露含", "彩铅", "金融", "木风杂谈", "日更", "成长", "外婆是方言", "docker"]
    }));
});

app.get('/api/home', function (req, res) {
    res.end(JSON.stringify({
        success: true,
        data: []
    }));
});

app.get('/api/homeList?page=' + page, function (req, res) {
    res.end(JSON.stringify({
        success: true,
        data: []
    }));
});

app.listen(3001, function (req, res) {
    console.log(`server runs`);
});