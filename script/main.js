$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:50, //Отступ от элемента справа в 50px
        nav:true, //Отключение навигации
        autoplay:true, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:5000, //Время смены слайда
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    if(document.location.pathname == "/admin"){
        document.querySelector('#z').addEventListener("click",function(){
            document.querySelector('#news-id-wrapper').style.display ='block';
            document.querySelector('#table-wrapper').style.display ='none';
            document.querySelector('#calendar-wrapper').style.display ='none';
            document.querySelector('#slaider-wrapper').style.display ='none';
            document.querySelector('#games-wrapper').style.display ='none';
             document.querySelector('#addallnews').style.display ='none';
            document.querySelector('#turtable').style.display ='none';
        })
        $( 'textarea.editor' ).ckeditor();
        document.querySelector('#table').addEventListener("click",function(){
            document.querySelector('#table-wrapper').style.display ='block';
            document.querySelector('#news-id-wrapper').style.display ='none';
            document.querySelector('#calendar-wrapper').style.display ='none';
            document.querySelector('#slaider-wrapper').style.display ='none';
            document.querySelector('#games-wrapper').style.display ='none';
            document.querySelector('#addallnews').style.display ='none';
            document.querySelector('#turtable').style.display ='none';
        })
        document.querySelector('#calendar').addEventListener("click",function(){
            document.querySelector('#calendar-wrapper').style.display ='block';
            document.querySelector('#news-id-wrapper').style.display ='none';
            document.querySelector('#table-wrapper').style.display ='none';
            document.querySelector('#slaider-wrapper').style.display ='none';
            document.querySelector('#games-wrapper').style.display ='none';
            document.querySelector('#addallnews').style.display ='none';
            document.querySelector('#turtable').style.display ='none';
        })
        document.querySelector('#slaider').addEventListener("click",function(){
            document.querySelector('#slaider-wrapper').style.display ='block';
            document.querySelector('#table-wrapper').style.display ='none';
            document.querySelector('#news-id-wrapper').style.display ='none';
            document.querySelector('#calendar-wrapper').style.display ='none';
            document.querySelector('#games-wrapper').style.display ='none';
            document.querySelector('#addallnews').style.display ='none';
            document.querySelector('#turtable').style.display ='none';
        })
        document.querySelector('#gamer').addEventListener("click",function(){
            document.querySelector('#games-wrapper').style.display ='block';
            document.querySelector('#table-wrapper').style.display ='none';
            document.querySelector('#news-id-wrapper').style.display ='none';
            document.querySelector('#calendar-wrapper').style.display ='none';
            document.querySelector('#slaider-wrapper').style.display ='none';
            document.querySelector('#addallnews').style.display ='none';
            document.querySelector('#turtable').style.display ='none';
        })
        document.querySelector('#allnews').addEventListener("click",function(){
            document.querySelector('#games-wrapper').style.display ='none';
            document.querySelector('#table-wrapper').style.display ='none';
            document.querySelector('#news-id-wrapper').style.display ='none';
            document.querySelector('#calendar-wrapper').style.display ='none';
            document.querySelector('#slaider-wrapper').style.display ='none';
            document.querySelector('#addallnews').style.display ='block';
            document.querySelector('#turtable').style.display ='none';
        })
        document.querySelector('#changetable').addEventListener("click",function(){
            document.querySelector('#games-wrapper').style.display ='none';
            document.querySelector('#table-wrapper').style.display ='none';
            document.querySelector('#news-id-wrapper').style.display ='none';
            document.querySelector('#calendar-wrapper').style.display ='none';
            document.querySelector('#slaider-wrapper').style.display ='none';
            document.querySelector('#addallnews').style.display ='none';
            document.querySelector('#turtable').style.display ='block';

        })
        document.querySelector('#Keeperbtn').addEventListener("click",function(){
            var Gcomand = document.querySelector('.Gcomand');
            var player = document.querySelector('.newplayer').cloneNode(true);
            player.classList.remove("newplayer");
            player.className = "player gate";
            Gcomand.appendChild(player);
        })
        document.querySelector('#Backbtn').addEventListener("click",function(){
            var back = document.querySelector('#back');
            var player = document.querySelector('.newplayer').cloneNode(true);
            player.classList.remove("newplayer");
            player.className = "player defender";
            back.appendChild(player);
        })
        document.querySelector('#Halfbtn').addEventListener("click",function(){
            var halfback = document.querySelector('#halfback');
            var player = document.querySelector('.newplayer').cloneNode(true);
            player.classList.remove("newplayer");
            player.className = "player hdefender";
            halfback.appendChild(player);
        })
        document.querySelector('#Forvardbtn').addEventListener("click",function(){
            var halfback = document.querySelector('#attack');
            var player = document.querySelector('.newplayer').cloneNode(true);
            player.classList.remove("newplayer");
            player.className = "player attack";
            halfback.appendChild(player);
        })
        $('.btn.sendPlayer').click(function(){
            var  players = [$('.gate'),$('.defender'),$('.hdefender'),$('.attack')];
            playerFormation(players);
        })
        function playerFormation(players){
            var arrGate = [];
            for(var i=0;i<players[0].length;i++){
                arrGate[i] = {name:$(players[0][i]).find("#name").val(),number:$(players[0][i]).find("#number").val(),img:$(players[0][i]).find("#screen").prop("files")};
            }
            var arrDefender = [];
            for(var i=0;i<players[1].length;i++){
                arrDefender[i] = {name:$(players[1][i]).find("#name").val(),number:$(players[1][i]).find("#number").val(),img:$(players[1][i]).find("#screen").prop("files")};
            }
            var arrHdefender = [];
            for(var i=0;i<players[2].length;i++){
                arrHdefender[i] = {name:$(players[2][i]).find("#name").val(),number:$(players[2][i]).find("#number").val(),img:$(players[2][i]).find("#screen").prop("files")};
            }
            var arrAttack = [];
            for(var i=0;i<players[3].length;i++){
                arrAttack[i] = {name:$(players[3][i]).find("#name").val(),number:$(players[3][i]).find("#number").val(),img:$(players[3][i]).find("#screen").prop("files")};
            }
            console.log(arrGate);
            var fdata = new FormData();
            fdata.append('gate', JSON.stringify(arrGate));
            console.log(fdata.get('gate'));
            fdata.append('defender', JSON.stringify(arrDefender));
            fdata.append('hdefender', JSON.stringify(arrHdefender));
            fdata.append('attack', JSON.stringify(arrAttack));
            console.log(fdata.get('gate'));
            $.ajax({
                url:'/addPlayers',
                type:'POST',
                data:fdata,
                async: false,
                cache: false,
                contentType: false,
                processData: false
            }).done(function(res){
                    if(res)
                        alert("Data sending");
            })
        }
    }
    //////////LOGGIN PAGE/////////////
    $('.btn.login').click(function(){
        if($('#login').val() && $('#password').val()){
           $.ajax({
               url:'/login',
               type:'POST',
               data:{
                   login:$('#login').val(),
                   password:$('#password').val()
               },success:function(res){
                   if(res)
                        document.location = "/admin";
               }
           })
        }
        else{
            alert("Вы ввели не все значения")
        }
    });

//////////////////NEWS ADD//////////////////////////
    $('.btn.newsAdd').click(function(){
        if($('#titleNews') && $('#news') && $('#lowNews')){
            var file = $('#newsImg')[0].files[0];
            var reader = new FileReader();
            console.log(file)
            reader.readAsDataURL(file);
            reader.onloadend = function(){
                $.ajax({
                    url:'/addNews',
                    type:'POST',
                    data:{
                    title:$('#titleNews').val(),
                    content:$('#news').val(),
                    lowContent:$('#lowNews').val(),
                    img:file.name,
                    data:reader.result
                    }   
                }).done(function(res){
                    if(res)
                        location.reload();
                }).fail(function(err){
                    console.log(err);
                });
            }
        }
    });
//////////////////TABLE ADD//////////////////////////
    $('.btn#addTcommand').click(function(){
       if( $('#Tcommand') && $('#Tgames') && $('#Twin') && $('#Tdraw') && $('#Tloss') && $('#Tculled') && $('#Tomitted') && $('#Tpoint')){
           $.ajax({
               url:'/addTable',
               type:'POST',
               data:{
                Tcommand:$('#Tcommand').val(),
                Tgames:$('#Tgames').val(),
                Twin:$('#Twin').val(),
                Tdraw:$('#Tdraw').val(),
                Tloss:$('#Tloss').val(),
                Tculled:$('#Tculled').val(),
                Tomitted:$('#Tomitted').val(),
                Tpoint:$('#Tpoint').val()
               }
           }).done(function(res){
            if(res)
                location.reload();
        }).fail(function(err){
            console.log(err);
        });
       }
    })
//////////////////CALENDAR ADD//////////////////////////
    $('.btn#addCcalendar').click(function(){
        // if( $('#Ccommandone') && $('#Cscore') && $('#Ccomandtwo') && $('#Ctourney') && $('#Cstage') && $('#Cdate')){
            $.ajax({
                url:'/addCalendar',
                type:'POST',
                data:{
                    Ccommandone:$('#Ccommandone').val(),
                    Cscore:$('#Cscore').val(),
                    Ccomandtwo:$('#Ccomandtwo').val(),
                    Ctourney:$('#Ctourney').val(),
                    Cstage:$('#Cstage').val(),
                    Cdate:$('#Cdate').val()
                }
            }).done(function(res){
             if(res)
                 location.reload();
         }).fail(function(err){
             console.log(err);
         });
        // }
    })

//////////////////CALENDAR ADD//////////////////////////

    $('.btn#addSlaider').click(function(){
        var file = $('#imgSlider')[0].files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function(){
            $.ajax({
                url:'/addSlider',
                type:'POST',
                data:{
                    img:file.name,
                    data:reader.result
                }
            })
        }
    })
//////////////////TABLE DELL//////////////////////////
    $('.btn.dellTable').click(function(){
            $.ajax({
            url:'/dellTable',
            type:'POST',
            data:{
                id:$(this).attr('data-id')
            }
        })
    })
//////////////////NEWS DELL//////////////////////////
    $('.btn.dellite').click(function(){
            $.ajax({
            url:'/dellNews',
            type:'POST',
            data:{
                id:$(this).attr('data-id')
            }
        })
    })

});




