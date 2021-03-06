/* eslint-disable */

import Util from './util/index'
import jsLog from './log/jsLog'
import rescourceLog from './log/rescourceLog'
import httpLog from './log/httpLog'
import Queue from './queue'
import Page from './log/page'
import ClickLog from './log/mvLog'

import './navigations/navigator-events'

let util = null

export default class Monitor {

    /**
     * 初始化
     * @param {*} options { monitorUser: {userId: 用户ID, firstUserParam: 用户自定义配置，secondUserParam: 第二个参数}, WEB_MONITOR_ID: 项目id, synRequestNum: 定时任务 }
     */
    constructor(options) {
        // 初始化框架基础参数
        this.options = (options === null || options === undefined || options === "") ?  options : {}

        let utilConfig = {
            monitorUser: this.options.monitorUser || {},
            WEB_MONITOR_ID: this.options.WEB_MONITOR_ID || "",
        }

        let queueConfig = {
            synRequestNum: this.options.synRequestNum || null
        }
        console.log(utilConfig)
        
        util = Util.getInstance(utilConfig)
        util.WEB_BASE_URL = options.monitorBaseUrl || ""
        Queue.getInstance('web', queueConfig)

        // window.localStorage.setItem('monitorBaseUrl', options.monitorBaseUrl || "")
        window.localStorage.setItem('monitorTimeout', options.monitorTimeout || 5000)

        this.init()
        // this.content()
        this.run()
    }

    /**
     * 初始化
     */
    init() {
        // 获取设备信息
        util.getDevice()
        // 存储唯一uuid
        util.getCustomerKey()
        // 存储ip地址
        util.getIp()
    }
    
    /**
     * 运行监听
     */
    run() {
        // 监控js
        jsLog.getInstance().recordJavaScriptError()
        // 资源监控
        rescourceLog.getInstance().recordResourceError()
        // http 请求监控
        httpLog.getInstance().recordHttpError()
        // 统计页面性能
        Page.getInstance().pagePerformance()
        // 点击
        ClickLog.getInstance().clickLog()

    }

    /**
     * 启动发送 pv
     * @return {?}
     */
    content() {

    }

}

/* eslint-enable */