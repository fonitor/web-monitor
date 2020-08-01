import Util from "../util"
import * as error from '../config/index'

const util = Util.getInstance()

/**
 * 统计页面点击位置
 */
export default class ClickLog {

    constructor() {

    }

    /**
     * 单例
     * @return {?}
     */
    static getInstance() {
        if (!ClickLog.instance) {
            ClickLog.instance = new ClickLog()
        }
        return ClickLog.instance
    }

    /**
     * 打点 (汇报整体页面具体，汇出热力图) 可根据是否绘制热力图开关+后端页面选择进行上报
     * clientX、clientY 点击位置距离当前body可视区域的x，y坐标
     * pageX、pageY 对于整个页面来说，包括了被卷去的body部分的长度
     * screenX、screenY 点击位置距离当前电脑屏幕的x，y坐标
     * offsetX、offsetY 相对于带有定位的父盒子的x，y坐标
     */
    clickLog() {
        let OFFLINE_MILL = 15 * 60 * 1000 // 15分钟不操作认为不在线
        let SEND_MILL = 5 * 1000 // 每5s打点一次

        window.addEventListener('click', (e) => {
            let now = Date.now()
            let  duration = now - lastTime
            let lastTime = null
            if (duration > OFFLINE_MILL) {
                lastTime = Date.now()
            } else if (duration > SEND_MILL) { // 用户在线时长
                lastTime = Date.now()
            }
            
        })
    }

}