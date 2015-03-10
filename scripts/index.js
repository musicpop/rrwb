// JavaScript Document




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