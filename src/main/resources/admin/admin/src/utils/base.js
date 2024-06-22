const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot3v5bn/",
            name: "springboot3v5bn",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot3v5bn/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "医院管理系统"
        } 
    }
}
export default base
