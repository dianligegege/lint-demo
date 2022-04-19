1. 安装后 ./node_modules/.bin/eslint --init 使用cli 初始化
2. env里指定了es6后，不仅应用es6语法，还默认可以使用es6的全局变量,在解析器配置里写 `{ "parserOptions": { "ecmaVersion": 6 } }`只能应用es6的预发，不自动启用es6全局变量
3. globals 里配置自己添加的全局变量 writable 和 readonly
4. rules 里 off warn error 分别对应 0 1 2
5. rules里配置一个插件里的某一个规则写成 `"plugin1/rule1": "error"`
6. 插件名称可以省略 `eslint-plugin-` 前缀, extends里的可以省略前缀 `eslint-config-`
7. 如果同一目录下 .eslintrc 和 package.json 同时存在，.eslintrc 优先级高会被使用，package.json 文件将不会被使用，但是不是同一目录的话会把两种整合一下
8. eslint 是从子文件往父文件往外找，知道找到根目录，但是如果一个配置文件里有`root: true`的话就不往外找了
9. rules 中的规则相同，并且优先级恒定高于 extends
10. extends 里可以看成是 rules 整合成一个包直接引过来，plugins是只是加载了插件，想要使用plugins里的哪一条还要单独在extends里说明
11. settings 可以看成你设置的plugins 的上下文，就是说引用的plugins是可以配置的话就从settings里给他传值，具体传什么就看plugins里怎么写的了
12. 规范用 airbnb 或者 standard，airbnb用的比较熟悉



```js
"settings": {
    "jsdoc": {
        "preferredTypes": {
            "object": "Object" // jsdoc 的类型那里如果是对象会写成 “Object”
        },
        "tagNamePreference": {
            "returns": "return1" // jsdoc return 会变成 “return1”
        }
    }
},

 /**
 * @param {Object} state 12
 * @date 2022-04-16 1212
 * @return1 {Object} data
 */
```