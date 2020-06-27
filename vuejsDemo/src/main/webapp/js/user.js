new Vue({
    el: "#app",
    data:{
        user:{
            id:"",
            username:"",
            password:"",
            email:"",
            age:"",
            sex:""
        },
        userList:[]
    },
    methods:{
        findAll:function () {
            var _this = this;
            axios.get('/vuejsDemo_war_exploded/user/findAll.do')
                .then(function (response) {
                    // handle success
                    _this.userList=response.data;//响应的数据给userList赋值
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        },
        findById:function (userid) {
            var _this = this;
            axios.get('/vuejsDemo_war_exploded/user/findById.do',{params:{id:userid}})
                .then(function (response) {
                    // handle success
                    _this.user=response.data;//响应的数据给userList赋值
                    $("#myModal").modal("show");
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        },
        update:function (user) {
            console.log(user);

            var _this = this;
            axios.post('/vuejsDemo_war_exploded/user/updateUser.do', _this.user)
                .then(function (response) {
                    _this.findAll();
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    ,
    created:function () { //当我们页面加载的时候触发请求，查询所以
        this.findAll();

    }
});