import Util from "../util"
import * as error from '../config/index'

const util = Util.getInstance()

/**
 * 统计页面性能
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
     * 打点
     */
    clickLog() {
        
    }

}