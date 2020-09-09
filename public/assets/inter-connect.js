//here  in public/assets we are writing beacuse it executes in client side 
$(document).ready(function(){
    $('form').on('submit',function(){
        var item=$('form input');
        var lstitem={name:name.val(),password:password.val()};
        
        $.ajax({
            type:'POST',
            url:'/admin',
            data:lstitem,
            success:function(data){
                location.reload();
            }
        });
        return false;
    });

    //which item as clicked
    //which item as clicked
    var list= $('<li class="addcart"></li>');
    $('li').on('click',function(){
        var item=$(this).text().replace(/ /g,"-");
        $.ajax({
            type:'GET',
            url:'/mainpage/'+item,
            success:function(data){
                location.reload();
            }
        });
    });
   /* var newEl = $('<div class="cart"></div>');
    newEL.on('click',function(){
        $.ajax({
            type:'GET',
            url:'/mainpage',
            success:function(data){
                location.reload();
            }
        })
    })*/
});