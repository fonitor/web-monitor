import Util from "../util"
import * as error from '../config/index'

const util = Util.getInstance()

/**
 * 统计页面性能
 */
export default class Page {

    constructor() {

    }

    /**
     * 单例
     * @return {?}
     */
    static getInstance() {
        if (!Page.instance) {
            Page.instance = new Page()
        }
        return Page.instance
    }

    pagePerformance() {
        window.onload = () => {
            let performance = window.performance
            if (!performance) {
                // 当前浏览器不支持
                console.log('你的浏览器不支持 performance 接口');
                return;
            }
            let times = performance.timing.toJSON()
            // 发送页面性能指标数据, 上报内容 => 
            let perf = this._objectSpread({}, times, {
                url: "".concat(window.location.host).concat(window.location.pathname)
            })
            console.log(perf)

            // perf
            // log('perf', 20001, _objectSpread({}, times, {
            //     url: "".concat(window.location.host).concat(window.location.pathname)
            // }));
        }
    }

    /**
     * @param {*} target 
     */
    _objectSpread(target) {
        for (let i = 1; i < arguments.length; i++) {
            let source = arguments[i] != null ? arguments[i] : {}
            let ownKeys = Object.keys(source)
            if (typeof Object.getOwnPropertySymbols === 'function') {
                ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter((sym) => {
                    return Object.getOwnPropertyDescriptor(source, sym).enumerable
                }))
            }
            ownKeys.forEach((key) => {
                this._defineProperty(target, key, source[key])
            })
        }
        return target
    }

    /**
     * @param {*} obj 
     * @param {*} key 
     * @param {*} value 
     */
    _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true })
        } else {
            obj[key] = value
        } return obj
    }
}