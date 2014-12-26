// JavaScript Document

function yanzheng(){
	var nm = document.getElementById("myname").value;
	var pw = document.getElementById("password").value; 
	var kid = document.getElementById("nickname").value;
	var ym = document.getElementById("check").value;
	
	if(null == nm||"" == nm || nm >16 || nm <6){
		alert("用户名不合法！！");
		return;
		
		}
	if(null == pw ||""==pw||pw>12||pw<4){
	alert("密码不合法！！");
	return;
	
	}
	
	if(kid==""){alert("昵称不合法！！");return;}
    if("cm2hq" != ym){
		alert("验证码不正确！！");
		return;
		}
	alert("数据已提交，注册成功！！");
	
	}

	function check_mobile(mobile){

		if(mobile.length != 11 || isNaN(mobile)){

			return false;

		}

		mobile = mobile.substr(0,3);

		//号段

		var hd = new Array('130','131','132','133','134','135','136','137','138','139','150','151','152','153','154','155','156','157','158','159','180','181','182','183','184','185','186','187','188','189');

		var i = hd.length;

		while (i--) {

			if (hd[i] == mobile) {

			return true;

			}   

		}   

		return false;

}
//验证邮箱是否正确

function check_email(email){

	var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

	if(!reg.test(email)){

		return false;

	}else{

		return true;

	}

}