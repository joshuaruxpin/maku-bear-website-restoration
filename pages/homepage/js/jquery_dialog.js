var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

<!--
/*****************************************************************************

JQuery Dialog 2.0.1

[作者]
吴剑 http://luck0235.cnblogs.com/

[当前版本]
2.0.1

[历史记录]
2009-06-01：版本1.0.1发布。
2009-07-05：版本1.0.2，更新了一些明显的BUG，完全支持了IE系列浏览器。
2009-08-15：版本1.0.3，封装了标准DOM，多浏览器下兼容，样式美化，添加了阴影效果。
2009-11-05：版本2.0.0，基于JQuery全新封装，应用了JS的命名空间，避免了客户端id冲突。
			项目正式更名为JQuery Dialog，优化了拖拽的核心实现，完全支持跨浏览器。
2009-12-14：版本2.0.1，优化了核心的拖拽算法，分离出DragAndDrop类。
			修复了鼠标拖动过快Dialog停顿的BUG。
			修复了当Dialog宽或高大于页面时定位的BUG。
			修复了鼠标样式与拖拽控制区不精确的BUG。
			增加了配置项，JQuery缓存优化。
			将源代码进行了压缩，如需详细的代码注释请在我的BLOG回复您的Email地址。

*****************************************************************************/

var JqueryDialog = {
	
	//配置项
	//模态窗口背景色
	"cBackgroundColor"			:	"#ffffff",
	
	//边框尺寸(像素)
	"cBorderSize"				:	1,
	//边框颜色
	"cBorderColor"				:	"#ff9d3b",

	//Header背景色
	"cHeaderBackgroundColor"	:	"#ffffff",
	//右上角关闭显示文本
	"cCloseText"				:	"隐藏",
	//鼠标移上去时的提示文字
	"cCloseTitle"				:	"隐藏播放器",
	
	//Bottom背景色
	"cBottomBackgroundColor"	:	"#ffffff",

    //提交按钮文本
	"cSubmitText"				:	"",
	//取消按钮文本
	"cCancelText"				:	"",
	
Open:function(dialogTitle,iframeSrc,iframeWidth,iframeHeight){var _client_width=document.body.clientWidth;var _client_height=document.documentElement.scrollHeight;if(typeof($("#jd_shadow")[0])=="undefined"){$("body").prepend("<div id='jd_shadow'>&nbsp;</div>");var _jd_shadow=$("#jd_shadow");_jd_shadow.css("width",_client_width+"px");_jd_shadow.css("height",_client_height+"px");}if(typeof($("#jd_dialog")[0])!="undefined"){$("#jd_dialog").remove();}$("body").prepend("<div id='jd_dialog'></div>");var _jd_dialog=$("#jd_dialog");var _left=(_client_width-(iframeWidth+JqueryDialog.cBorderSize*2+5))/2;_jd_dialog.css("left",(_left<0?0:_left)+document.documentElement.scrollLeft+"px");var _top=(document.documentElement.clientHeight-(iframeHeight+JqueryDialog.cBorderSize*2+30+50+5))/2;_jd_dialog.css("top",(_top<0?0:_top)+document.documentElement.scrollTop+"px");_jd_dialog.append("<div id='jd_dialog_s'>&nbsp;</div>");var _jd_dialog_s=$("#jd_dialog_s");_jd_dialog_s.css("width",iframeWidth+JqueryDialog.cBorderSize*2+"px");_jd_dialog_s.css("height",iframeHeight+JqueryDialog.cBorderSize*2+30+50+"px");_jd_dialog.append("<div id='jd_dialog_m'></div>");var _jd_dialog_m=$("#jd_dialog_m");_jd_dialog_m.css("border",JqueryDialog.cBorderColor+" "+JqueryDialog.cBorderSize+"px solid");_jd_dialog_m.css("width",iframeWidth+"px");_jd_dialog_m.css("background-color",JqueryDialog.cBackgroundColor);_jd_dialog_m.append("<div id='jd_dialog_m_h'></div>");var _jd_dialog_m_h=$("#jd_dialog_m_h");_jd_dialog_m_h.css("background-color",JqueryDialog.cHeaderBackgroundColor);_jd_dialog_m_h.append("<span id='jd_dialog_m_h_l'>"+dialogTitle+"</span>");_jd_dialog_m_h.append("<span id='jd_dialog_m_h_r' title='"+JqueryDialog.cCloseTitle+"' onclick='JqueryDialog.Close();'>"+JqueryDialog.cCloseText+"</span>");_jd_dialog_m.append("<div id='jd_dialog_m_b'></div>");_jd_dialog_m.append("<div id='jd_dialog_m_b_1'>&nbsp;</div>");var _jd_dialog_m_b_1=$("#jd_dialog_m_b_1");_jd_dialog_m_b_1.css("top","30px");_jd_dialog_m_b_1.css("width",iframeWidth+"px");_jd_dialog_m_b_1.css("height",iframeHeight+"px");_jd_dialog_m_b_1.css("display","none");_jd_dialog_m.append("<div id='jd_dialog_m_b_2'></div>");$("#jd_dialog_m_b_2").append("<iframe id='jd_iframe' src='"+iframeSrc+"' scrolling='no' frameborder='0' width='"+iframeWidth+"' height='"+iframeHeight+"' />");_jd_dialog_m.append("<div id='jd_dialog_m_t' style='visibility:hidden; background-color:"+JqueryDialog.cBottomBackgroundColor+";'><input id='jd_submit' value='"+JqueryDialog.cSubmitText+"' type='button' onclick='JqueryDialog.Ok();' />&nbsp;&nbsp;<input id='jd_cancel' value='"+JqueryDialog.cCancelText+"' type='button' onclick='JqueryDialog.Close();' /></div>");DragAndDrop.Register(_jd_dialog[0],_jd_dialog_m_h[0]);},Close:function(){$("#jd_shadow").remove();$("#jd_dialog").remove();},Ok:function(){var frm=$("#jd_iframe");if(frm[0].contentWindow.Ok()){JqueryDialog.Close();}else{frm[0].focus();}},SubmitCompleted:function(alertMsg,isCloseDialog,isRefreshPage){if($.trim(alertMsg).length>0){alert(alertMsg);}if(isCloseDialog){JqueryDialog.Close();if(isRefreshPage){window.location.href=window.location.href;}}}};var DragAndDrop=function(){var _clientWidth;var _clientHeight;var _controlObj;var _dragObj;var _flag=false;var _dragObjCurrentLocation;var _mouseLastLocation;var getElementDocument=function(element){return element.ownerDocument||element.document;};var dragMouseDownHandler=function(evt){if(_dragObj){evt=evt||window.event;_clientWidth=document.body.clientWidth;_clientHeight=document.documentElement.scrollHeight;$("#jd_dialog_m_b_1").css("display","");_flag=true;_dragObjCurrentLocation={x:$(_dragObj).offset().left,y:$(_dragObj).offset().top};_mouseLastLocation={x:evt.screenX,y:evt.screenY};$(_controlObj.document).bind("mousemove",dragMouseMoveHandler);$(_controlObj.document).bind("mouseup",dragMouseUpHandler);if(evt.preventDefault)evt.preventDefault();else evt.returnValue=false;}};var dragMouseMoveHandler=function(evt){if(_flag){evt=evt||window.event;var _mouseCurrentLocation={x:evt.screenX,y:evt.screenY};_dragObjCurrentLocation.x=_dragObjCurrentLocation.x+(_mouseCurrentLocation.x-_mouseLastLocation.x);_dragObjCurrentLocation.y=_dragObjCurrentLocation.y+(_mouseCurrentLocation.y-_mouseLastLocation.y);_mouseLastLocation=_mouseCurrentLocation;$(_dragObj).css("left",_dragObjCurrentLocation.x+"px");$(_dragObj).css("top",_dragObjCurrentLocation.y+"px");if(evt.preventDefault)evt.preventDefault();else evt.returnValue=false;}};var dragMouseUpHandler=function(evt){if(_flag){evt=evt||window.event;$("#jd_dialog_m_b_1").css("display","none");cleanMouseHandlers();_flag=false;}};var cleanMouseHandlers=function(){if(_controlObj){$(_controlObj.document).unbind("mousemove");$(_controlObj.document).unbind("mouseup");}};return{Register:function(dragObj,controlObj){_dragObj=dragObj;_controlObj=controlObj;$(_controlObj).bind("mousedown",dragMouseDownHandler);}}}();
//-->

}
/*
     FILE ARCHIVED ON 08:18:30 Feb 03, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:09:55 Jun 01, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.553
  exclusion.robots: 0.027
  exclusion.robots.policy: 0.016
  esindex: 0.011
  cdx.remote: 12.579
  LoadShardBlock: 48.788 (3)
  PetaboxLoader3.datanode: 67.336 (4)
  load_resource: 95.762
  PetaboxLoader3.resolve: 58.049
*/