// JavaScript Document

//Admin��Ϣ�޸�
function admin_modifying(){
	
	var id=document.getElementById("adminid");
	var name=document.getElementsById("adminname");
	var password=document.getElementById("adminpassword");
	var password2=document.getElementById("adminpassword2");

	if (password.value==""){
		alert("���������룡");
		password.focus();
		return;
	}
	if (password2.value==""){
		alert("��ȷ�����룡");
		password2.focus();
		return;
	}
	if (password.value != password2.value){
		alert("������������벻һ�£����������룡");
		password2.focus();
		password.focus();
		return;
	}
	location.href('adminModifyingServlet?adminid=id&adminname=name&adminpassword=password&adminpassword2=password2');
}

