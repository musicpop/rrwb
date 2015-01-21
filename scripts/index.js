// JavaScript Document



//登陆
function login(){
	var usrname=document.getElementById("usrname");
	var password=document.getElementById("password");
	usrname.value=usrname.value.replace(/\s{1,}/g,"");
	if (usrname.value==""){
		alert("请输入账户！");
		usrname.focus();
		return;
	}
	if (password.value==""){
		alert("请输入密码！");
		password.focus();
		return;
	}
	$.ajax({
		url: '/crud/user/login',
		type: 'POST',
		dataType: 'json',
		data: {user_email: usrname.value,pwd:password.value},
	})
	.done(function(response) {
		if(response.rows == 1 ){
			location.href('home.html');		
		}else{

			alert("用户名或密码错误");
		}
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
}

function getWindowParam(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}
/**

 * 替换字符串中的字段.

 * @param {String} str 模版字符串

 * @param {Object} o json data

 * @param {RegExp} [regexp] 匹配字符串的正则表达式

 */

function substitute(str,o,regexp){

  return  str.replace(regexp || /\\?\{([^{}]+)\}/g, function (match, name) {

    return (o[name] === undefined) ? '' : o[name];

  });

}