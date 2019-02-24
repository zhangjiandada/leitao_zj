
$(function(){
// 判断是否登录

    $.ajax({
        type:"get",
        url:"/employee/checkRootLogin",
        dataType:"json",
        success:function(res){
            // console.log(res);
            
            if(res.error === 400){
                location.href = "login.html"
            }
        }
    
    });
    //菜单
    var $meun =$('.first-i');
    console.log($meun);
    $meun.on('click',function(){
        $('.l_aside').toggleClass('hiddenm'),
        $('.l_main').toggleClass('hiddenm'),
        $('.m-top').toggleClass('hiddenm')
    });
    //退出功能
    $('.secend-i').on('click',function(){
            $('#loginout').modal('show')
        
    });
    $('.modal-footer .btn:first-child').on('click',function(){
        $('#loginout').modal('hide')
    })
    $('.modal-footer .btn:last-child').on('click',function(){
       $.ajax({
            type:'get',
            url:"/employee/employeeLogout",
            dataType:'json',
            success:function(res){
                if(res.success){
                    location.href="login.html"
                }
            }
        })
    });
    $('.cagetor').on('click',function(){
        $('.cagetor').next().stop().slideToggle()
    })



})


