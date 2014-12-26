<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>更改头像</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
  <link rel="stylesheet" href="css/default.css" type="text/css"></link>
  <link rel="stylesheet" href="css/uploadify.css" type="text/css"></link>
  <link rel="stylesheet" href="css/jquery.Jcrop.css" type="text/css"></link>
  
 <script type="text/javascript" src="js/jquery.min.js"></script>
  <script type="text/javascript" src="js/jquery.color.js"></script>
  <script type="text/javascript" src="js/jquery.uploadify.v2.1.0.min.js"></script>
  <script type="text/javascript" src="js/swfobject.js"></script>
  <script type="text/javascript" src="js/fileupload.js"></script>
  <script type="text/javascript" src="js/jquery.Jcrop.js"></script>
  <script type="text/javascript" src="js/jQuery.UtrialAvatarCutter.js"></script>
    
  </head>
  <body>
  <div> </div>
   <div style="font-size: 15px;">图片文件:&nbsp&nbsp&nbsp<input type="file" name="file" id="file" /></div>
 	 <input type="button" id="uploadFile" value="上传文件">
           <input type="button" id="cancelUpload" value="取消上传">
     <hr style=width:370px;" align="left">
           <div id="fileList" style="height:51px;"></div> 
           <hr style=width:370px;" align="left">
    <div><h2>图片预览:</h2></div>
  <table>
  <tr>
  <!--  style="width: 200px; height: 150px; "  设置原始图片样式 -->
  	<td><img id="userimg"  style="width: 200px; height: 150px;" /></td>
  	<!--  style="width: 120px; height: 120px; overflow: hidden; margin-left: 5px;"  设置预览图片样式 -->
  	<td><div style="width: 120px; height: 120px; overflow: hidden; margin-left: 5px;" ><img id="preview" /></div></td>
  </tr>
  <tr>
  	<td>
  <input type="hidden" id="x" />
  <input type="hidden" id="y" />
  <input type="hidden" id="w" />
  <input type="hidden" id="h" />
  <input type="button" id="submit" value="保存图片" />
  	</td>
  </tr>
  </table>
  </body>
</html>
