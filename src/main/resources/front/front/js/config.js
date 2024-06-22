
var projectName = '医院管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

]


var indexNav = [


{
	name: '内部论坛',
	url: './pages/forum/list.html'
}, 
{
	name: '医院公告',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springboot3v5bn/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"医生","menuJump":"列表","tableName":"yisheng"}],"menu":"医生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"护士","menuJump":"列表","tableName":"hushi"}],"menu":"护士管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"病床类别","menuJump":"列表","tableName":"bingchuangleibie"}],"menu":"病床类别管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"药品类别","menuJump":"列表","tableName":"yaopinleibie"}],"menu":"药品类别管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"科室信息","menuJump":"列表","tableName":"keshixinxi"}],"menu":"科室信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"内部论坛","tableName":"forum"}],"menu":"内部论坛"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"医院公告","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"病床","menuJump":"列表","tableName":"bingchuang"}],"menu":"病床管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"药房","menuJump":"列表","tableName":"yaofang"}],"menu":"药房管理"},{"child":[{"buttons":["新增","查看","修改","删除","开药"],"menu":"病人信息","menuJump":"列表","tableName":"bingrenxinxi"}],"menu":"病人信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"药方信息","menuJump":"列表","tableName":"yaofangxinxi"}],"menu":"药方信息管理"}],"frontMenu":[],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"医生","tableName":"yisheng"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"病床","menuJump":"列表","tableName":"bingchuang"}],"menu":"病床管理"},{"child":[{"buttons":["查看"],"menu":"药房","menuJump":"列表","tableName":"yaofang"}],"menu":"药房管理"},{"child":[{"buttons":["查看"],"menu":"病人信息","menuJump":"列表","tableName":"bingrenxinxi"}],"menu":"病人信息管理"},{"child":[{"buttons":["查看"],"menu":"药方信息","menuJump":"列表","tableName":"yaofangxinxi"}],"menu":"药方信息管理"}],"frontMenu":[],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"护士","tableName":"hushi"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
