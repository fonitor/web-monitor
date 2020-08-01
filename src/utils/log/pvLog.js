import Util from "../util"
import * as error from '../config/index'

const util = Util.getInstance()

/**
 * 统计页面性能
 */
export default class PvLog {

    constructor() {

    }

    /**
     * 单例
     * @return {?}
     */
    static getInstance() {
        if (!PvLog.instance) {
            PvLog.instance = new PvLog()
        }
        return PvLog.instance
    }

    /**
     * 打点
     */
    pvLog() {
        
    }

}