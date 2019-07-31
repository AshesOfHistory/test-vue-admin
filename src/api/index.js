// const root = prosess.env.API_ROOT

// mock 语法
// {
//     "cname": "@cname",//中文人名
//     "id": "@id",//生成20 位数字
//     "title": "@ctitle",//中文title
//     "city": "@city",//中文城市
//     "ip": "@ip",//ip 地址
//     "email": "@email",//email
//     "url": "@url",//url
//     "cfirst": "@cfirst",//姓名，姓
//     "clast": "@clast",//姓名，名
//     "cword": "@cword('123456')",//123456 从中选取一个字符
//     "csentence": "@csentence(1,5)",//文字文段
//     "csentence5": "@csentence(5)",//文字文段
//     "cparagraph": "@cparagraph(1,3)",//文字文段
//     "string": "@string(11)",//输出11 个字符长度的字符串
//     "float": "@float(0,10)",//0 到 10 的浮点数
//     "int": "@integer(60,70)",//60 到 70 之间的整数
//     "boolean": "@boolean",//boolean 类型 true,false
//     "array|1-3": [{
//     "id": "@integer(1,10)",//整数 1到10 取整数
//     "name": "cname"
//     }],//数组（随机 1 到3个）
//     "array_sort_add|+1": ["1", "2", "3"],//数组1，2，3轮询输出
//     "boolean|1-2": true,//boolean 类型 true,false
//     "actionType|1": ['click_url', 'open_resource_detail', 'open_resource_search'],
//     "payload": function() {
//           var returnClickUrl = {
//             "linkUrl": "http://tob.zhisland.com/apph5"
//           };
//           var returnResourceDetail = {
//             "resourceId": "606"
//           };
//           var returnResourceSearch = {
//             "keyWords": "",
//             "tagCategory": "1",
//             "tag": "1"
//           };
//           var s = this.actionType == 'click_url' ? returnClickUrl : this.actionType == 'open_resource_detail' ? returnResourceDetail : returnResourceSearch;
//           return s;
//      }//function 返回设置返回的数据
//     }