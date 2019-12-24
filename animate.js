
    var now = new Date( );//创建日期对象
    var now_year = now.getFullYear();
    var now_month=now.getMonth()+1;
    var now_date= now.getDate();
    var imgs = document.getElementsByTagName("img");
    var mass= document.getElementsByTagName("mass");
    var introduce = document.getElementsByClassName("introduce");
    var introduces = document.getElementsByClassName("introduces");
    var massage = document.getElementsByClassName("massage");
    var traveldata = document.getElementsByClassName("traveldata");
    var blog_name = document.getElementsByClassName("blog_name");
    var pp = document.getElementById("p");
    var blog_win = document.getElementById("blog_win").children[1];
    var blog_read = document.getElementById("blog_read").children[1];
    var blog_comment = document.getElementById("blog_comment").children[1];
    var  blog_passage = document.getElementById("blog_passage");

   console.log(blog_passage);
    var blog_win_interval;
    var blog_read_interval;
    var blog_comment_interval;
    blog_passage.onmouseout=function(){
        clearInterval(blog_win_interval);
        clearInterval(blog_read_interval);
        clearInterval(blog_comment_interval);

        blog_win.innerHTML=24;
        blog_read.innerHTML=224;
        blog_comment.innerHTML=48;
    }
    blog_passage.onmouseover=function(){
        blog_win.innerHTML=1;
        blog_read.innerHTML=1;
        blog_comment.innerHTML=1;
        blog_win_interval=setInterval(function(){
            blog_win.innerHTML++;
            if(parseInt(blog_win.innerHTML)==24){
                clearInterval(blog_win_interval);
            }
        },200);
        blog_read_interval=setInterval(function(){
            blog_read.innerHTML=parseInt(blog_read.innerHTML)+5;
            if(parseInt(blog_read.innerHTML)>224){
                blog_read.innerHTML=224;
                clearInterval(blog_read_interval);
                return;
            }
        },100);
        blog_comment_interval=setInterval(function(){
            blog_comment.innerHTML++;
            if(parseInt(blog_comment.innerHTML)>48){
                blog_comment.innerHTML=48;
                clearInterval(blog_comment_interval);
            }
        },100);
    }
    var temp = 1;
    function motion(){	
	  animate(pp,{left:900-temp},function(){ 
			  if(temp>1300){//回退 
				  p.style.left = "1200px";			  
				  temp=1;
			  }
			  temp+=10;		
		  });
  }
  setInterval(motion,100);
    for(var i=0;i<blog_name.length;++i){
        // console.log(blog_name[i].children[0]);
        blog_name[i].children[0].onmouseover =function(){
            this.style.color="rgb(254,147,31)";
            this.style.border="2px solid rgb(254,147,31)";
        }
        blog_name[i].children[0].onmouseout=function(){
            this.style.color="#000";
            this.style.border="1px solid #ccc";
        }


    }

    for(var i=0;i<traveldata.length;++i){
        traveldata[i].innerHTML = "&nbsp"+now_year+"-"+now_month+"-"+now_date;
    }

    for(var i=0;i<massage.length;++i){
            massage[i].children[0].onmouseover = function(){
            console.log(this.parentNode);
            this.style.color="#fff";
            this.parentNode.style.backgroundColor="rgb(254,147,31)";
            }
            massage[i].children[0].onmouseout = function(){
            console.log(this.parentNode);
            this.style.color="rgb(254,147,31)";
            this.parentNode.style.backgroundColor="#fff";
            }
    }
    for(var i=0;i<introduces.length;++i){
        var str = introduces[i].innerHTML;
        str = str.slice(0,100)+"...";
        introduce[i].innerHTML = str;
        var styObj = getComputedStyle(introduces[i]);
        var styObj2 = getComputedStyle(introduce[i]);
    }
    var interval;
    for(var i=0;i<imgs.length;++i){//设置图片的缩放 用animate函数实现 图片相对与盒子的位置改变
        imgs[i].onmouseover = function(){ //鼠标划上、划下      
            animate(this,{left:-60,right:-60,top:-30,bottom:-40,width:400,height:260});
        }
        imgs[i].onmouseout = function(){
            animate(this,{left:0,right:0,top:0,bottom:0,width:330,height:200}) ;
    }
    }
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 3;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
	






























	// function getStyle(obj, attr){
	// 	if(obj.currentStyle){
	// 		return isNaN(parseFloat(obj.currentStyle[attr])) ? obj.style[attr]=0 : obj.currentStyle[attr];
	// 	} else {
	// 		return isNaN(parseFloat(getComputedStyle(obj, null)[attr])) ? obj.style[attr]=0 : getComputedStyle(obj, null)[attr];
	// 	}
	// }
	
	// function animate(obj,json,callback){
	// 	if(obj.isMoving){
	// 		return;
	// 	}else{
	// 		obj.isMoving = true;
	// 	}
	// 	var a=0,b=0;
	// 	for(var attr in json){
	// 		a++;
	// 		(function(attr){
	// 			var timer = setInterval(function(){
	// 				var now = 0;
	// 				if(attr == 'opacity'){
	// 					now = parseInt( parseFloat(getStyle(obj,attr)) * 100 );
	// 				}else{
	// 					now = parseInt( getStyle(obj,attr) );
	// 				}
	// 				var speed = ( json[attr] - now ) / 6;
	// 				speed = speed>0?Math.ceil(speed):Math.floor(speed);
	// 				if(now == json[attr]){
	// 					clearInterval(timer);
	// 					b++;
	// 					if(a==b){
	// 						callback&&callback();
	// 						obj.isMoving = false;
	// 					}
	// 				}else{
	// 					if(attr == 'opacity'){
	// 						obj.style.opacity = ( now + speed ) / 100;
	// 					}else{
	// 						obj.style[attr] = now + speed + 'px';
	// 					}
	// 				}
	// 			},30);
	// 		})(attr);
			
	// 	}
	// }
