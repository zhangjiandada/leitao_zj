$(function(){
    var currentpage = 1;
    var pagesize = 5;
    render()
    function render(){
        $.ajax({
            type:'get',
            url:'/user/queryUser',
            data:{
                page: currentpage,
                pageSize: pagesize
            },
            dataType:'json',
            success:function(res){
                // console.log(res);
                var htmlStr = template('tpl',res)
                $('.keng').html(htmlStr)
    
                // $("#pagintor").bootstrapPaginator({
                //     bootstrapMajorVersion:3,//默认是2，如果是bootstrap3版本，这个参数必填
                //     currentPage:1,//当前页
                //     totalPages:10,//总页数
                //     size:"small",//设置控件的大小，mini, small, normal,large
                //     onPageClicked:function(event, originalEvent, type,page){
                //       //为按钮绑定点击事件 page:当前点击的按钮值
                //     }
                //   });
                $('#pagintor').bootstrapPaginator({
                    bootstrapMajorVersion:3,
                    currentPage:currentpage,
                    totalPages:Math.ceil(res.total/pagesize),
                    onPageClicked:function(a,b,c,page){
                        currentpage = page;
                        render();
                    }
                })
                
            }
        })
    }
})