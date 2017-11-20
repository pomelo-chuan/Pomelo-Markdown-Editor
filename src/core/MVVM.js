export default class MVVM {
    constructor(options) {
        this.input = options.input
        this.output = options.output
        let data = this.data = options.data
        let key = null
        //解析节点，找到节点的model属性
        Array.from(this.input.attributes).forEach((attr) => {
            if (attr.name == 'model') {
                key = attr.value
            }
        })

        if (key && data[key]) {
            let value = data[key]
            this.input.value = value
            this.output.textContent = value
            //开始绑定
            this.defineReactive(data, key, value)
        }
    }

    defineReactive(data, key, val) {
        //对节点的值监听
        this.input.addEventListener('input', (e) => {
            this.data[key] = e.target.value
        }, false)
        //将data对象中的值转换为getter和setter
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: false,
            get: () => val,
            set: (newVal) => {
                if (newVal === val) {
                    return
                }
                val = newVal
                //通知视图更新
                this.notify(newVal)
            }
        })
    }
    notify(val) {
        this.output.textContent = val
    }
}

// import MVVM from './core/MVVM';
// new MVVM({
//     input:document.getElementById('input'),
//     output:document.getElementById('output'),
//     data:{
//         someStr:'hello world'
//     }
// })

{/* <label for="input">输入:</label>
<input type="text" id="input" model="someStr">
<br>
<span>输出:</span>
<span id="output"></span> */}