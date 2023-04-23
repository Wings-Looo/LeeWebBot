// ==UserScript==
// @name         Gov Assistant
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  湖北光伏项目备案小助手
// @author       Wings
// @match        http://zwfw.hubei.gov.cn/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      https://unpkg.com/react@18.2.0/umd/react.production.min.js
// @require      https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js
// @grant        none
// ==/UserScript==

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { injectCallbacks } from "./App";
import "./styles/index.css";

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);

const root = createRoot(rootElement);

root.render(<App />);

function run() {
  injectCallbacks();
}

run();