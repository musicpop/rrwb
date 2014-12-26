// JavaScript Document

//Admin信息修改
function admin_modifying(){
	
	var id=document.getElementById("adminid");
	var name=document.getElementsById("adminname");
	var password=document.getElementById("adminpassword");
	var password2=document.getElementById("adminpassword2");

	if (password.value==""){
		alert("请输入密码！");
		password.focus();
		return;
	}
	if (password2.value==""){
		alert("请确认密码！");
		password2.focus();
		return;
	}
	if (password.value != password2.value){
		alert("两次输入的密码不一致，请重新输入！");
		password2.focus();
		password.focus();
		return;
	}
	location.href('adminModifyingServlet?adminid=id&adminname=name&adminpassword=password&adminpassword2=password2');
}

