import React from "react";

const mappings = [];

function mapping(check: () => boolean, action: () => void): void {
  if (check()) {
    action();
  }
}

function createMappings() {
  var home =  createHomMapping();
  var tszq =  createTSZQMapping();
  
  mappings.push(home);
  mappings.push(tszq);
}

function createHomMapping() {
  return mapping(() => {
    return document.URL == "http://zwfw.hubei.gov.cn/";
  }, () => {
    //  <a href="/webview/tszq/tszq.html" target="_blank" bfdi="335">查看更多</a>
    var element = document.querySelector("a[href=\'/webview/tszq/tszq.html\']") as HTMLElement;
    console.log("currentElement : " + element);
    if (element) {
      element.click();
    }
  });
}

function createTSZQMapping() {
  return mapping(() => {
    return document.URL.includes("webview/tszq/tszq.html")
  }, () => {
    // <a href="javascript:void(0)" onclick="gowl('/webview/tzgc/index.html',false)" bfdi="261"><p bfdi="262"><span bfdi="263">投资/工程建设项目审批</span><img src="/images/newIndex/index_tszq/shangxin_new.png" alt="" bfdi="264"></p><p bfdi="265">“投资项目联审平台（联审）”和“工程项目审批改革平台（工改）”</p><p style="display:none;" bfdi="266"><img src="/images/newIndex/index_tszq/xh_new.png" alt="" bfdi="267"><span bfdi="268">127项服务</span></p><p bfdi="269"><button bfdi="270">去看看</button><img style="width:20px;height:10px" src="/images/newIndex/index_tszq/qkk_new.png" alt="" bfdi="271"></p><img class="pic-bg" src="/images/newIndex/index_tszq/gcjs_new.png" alt="" bfdi="272"></a>
      // "http://zwfw.hubei.gov.cn/webview/tszq/tszq.html"
      var element = document.querySelector("a[onclick=\"gowl('/webview/tzgc/index.html',false)\"]") as HTMLElement;
      console.log("currentElement : " + element);
      if (element) {
        element.click();
      }
  });
}

function doInjectCallbacks() {
 

  console.log("url : " + window.URL);
  window.addEventListener('load', function () {

    var url = document.URL;
    console.log("currenturl : " + url);
    if (url == "http://zwfw.hubei.gov.cn/") {
      //  <a href="/webview/tszq/tszq.html" target="_blank" bfdi="335">查看更多</a>
      var element = document.querySelector("a[href=\'/webview/tszq/tszq.html\']") as HTMLElement;
      console.log("currentElement : " + element);
      if (element) {
        element.click();
      }
    } else if (url.includes("webview/tszq/tszq.html")) {
      // <a href="javascript:void(0)" onclick="gowl('/webview/tzgc/index.html',false)" bfdi="261"><p bfdi="262"><span bfdi="263">投资/工程建设项目审批</span><img src="/images/newIndex/index_tszq/shangxin_new.png" alt="" bfdi="264"></p><p bfdi="265">“投资项目联审平台（联审）”和“工程项目审批改革平台（工改）”</p><p style="display:none;" bfdi="266"><img src="/images/newIndex/index_tszq/xh_new.png" alt="" bfdi="267"><span bfdi="268">127项服务</span></p><p bfdi="269"><button bfdi="270">去看看</button><img style="width:20px;height:10px" src="/images/newIndex/index_tszq/qkk_new.png" alt="" bfdi="271"></p><img class="pic-bg" src="/images/newIndex/index_tszq/gcjs_new.png" alt="" bfdi="272"></a>
      // "http://zwfw.hubei.gov.cn/webview/tszq/tszq.html"
      var element = this.document.querySelector("a[onclick=\"gowl('/webview/tzgc/index.html',false)\"]") as HTMLElement;
      console.log("currentElement : " + element);
      if (element) {
        element.click();
      }
    } else if (url.includes("/webview/tzgc/index.html")) {
      // "http://zwfw.hubei.gov.cn/webview/tzgc/index.html"
      // <a class="lspt_wyb" onclick="checkLoginTo('/webview/tzxm/tzxm.html')" bfdi="114">我要办</a>
      var element = this.document.querySelector("a[onclick=\"checkLoginTo('/webview/tzxm/tzxm.html')\"]") as HTMLElement;
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
          (element as HTMLElement).click();
        }

      });

      var targetNode = document.getElementById('bf_body') as HTMLElement;

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
        if (element) {

          console.log("dispatchEvent : " + element);
          success = true
          element.dispatchEvent(mouseEvt);
        }

      });
      observe.observe(targetNode, { attributes: true, childList: true, subtree: true });



    }



  });
}

export function injectCallbacks() {
  doInjectCallbacks();
  createMappings;
  
  // mappings.

}

export default function App() {
  return (
    <div>
      <button className="fixed-button" onClick={() => alert("123")}>
        小组件
      </button>
    </div>
  );
}
