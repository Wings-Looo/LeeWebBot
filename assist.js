// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://zwfw.hubei.gov.cn/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  console.log("url : " + window.URL);
  window.addEventListener('load', function () {

    var url = this.document.URL;
    console.log("currenturl : " + url);
    if (url == "http://zwfw.hubei.gov.cn/") {
      //  <a href="/webview/tszq/tszq.html" target="_blank" bfdi="335">查看更多</a>
      var element = this.document.querySelector("a[href=\'/webview/tszq/tszq.html\']")
      console.log("currentElement : " + element);
      if (element) {
        element.click();
      }
    } else if (url.includes("webview/tszq/tszq.html")) {
      // <a href="javascript:void(0)" onclick="gowl('/webview/tzgc/index.html',false)" bfdi="261"><p bfdi="262"><span bfdi="263">投资/工程建设项目审批</span><img src="/images/newIndex/index_tszq/shangxin_new.png" alt="" bfdi="264"></p><p bfdi="265">“投资项目联审平台（联审）”和“工程项目审批改革平台（工改）”</p><p style="display:none;" bfdi="266"><img src="/images/newIndex/index_tszq/xh_new.png" alt="" bfdi="267"><span bfdi="268">127项服务</span></p><p bfdi="269"><button bfdi="270">去看看</button><img style="width:20px;height:10px" src="/images/newIndex/index_tszq/qkk_new.png" alt="" bfdi="271"></p><img class="pic-bg" src="/images/newIndex/index_tszq/gcjs_new.png" alt="" bfdi="272"></a>
      // "http://zwfw.hubei.gov.cn/webview/tszq/tszq.html"
      var element = this.document.querySelector("a[onclick=\"gowl('/webview/tzgc/index.html',false)\"]");
      console.log("currentElement : " + element);
      if (element) {
        element.click();
      }
    } else if (url.includes("/webview/tzgc/index.html")) {
      // "http://zwfw.hubei.gov.cn/webview/tzgc/index.html"
      // <a class="lspt_wyb" onclick="checkLoginTo('/webview/tzxm/tzxm.html')" bfdi="114">我要办</a>
      var element = this.document.querySelector("a[onclick=\"checkLoginTo('/webview/tzxm/tzxm.html')\"]");
      console.log("currentElement : " + element);
      if (element) {
        element.click();
      }
    } 
    
    // else if (url.includes("app/hb/hb_aiapp/declareNewProject")) {
    //   // "http://zwfw.hubei.gov.cn/web/jiekou/open_platform_forms/056/079/zwwService-eef08ffc260badcedd0911e96e2d41ef/24/dist/index.html#/app/hb/hb_aiapp/declareNewProject"
      
    // }
    
    else if (url.includes("app/hb/hb_aiapp/declare")) {
      // "http://zwfw.hubei.gov.cn/web/jiekou/open_platform_forms/056/079/zwwService-eef08ffc260badcedd0911e96e2d41ef/24/dist/index.html#/app/hb/hb_aiapp/declare"
      // <span class="declare-wrapper-menus-item-btns-text">申报新项目</span>
      
      document.querySelectorAll(".declare-wrapper-menus-item-btns-text").forEach(element => {
        var content = element.innerHTML;
        console.log("content : " + content);
        if (content == "申报新项目") {
          console.log("currentElement : " + element);
          element.click();
        }

      });

      var targetNode = document.getElementById('bf_body');

      var success = true;;
      const mouseEvt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
      })
      var observe = new MutationObserver(function (mutations, observe) {

        var element = document.querySelector(".ivu-cascader-rel");
        console.log("currentElement : " + element);
        // <div class=""><input type="hidden"> <div class="dsh-control-define"><span class="dsh-control-define-nodata">请选择所属行政区划</span></div></div>
        if (element)  {
         
          console.log("dispatchEvent : " + element);
          success = true
          element.dispatchEvent(mouseEvt);
        }

        // console.log("dom chg")
      });
      observe.observe(targetNode, { attributes: true, childList: true, subtree: true });


      // <div class="DshFormItem-control"> 

    } 



  });

  // Your code here...
})();
