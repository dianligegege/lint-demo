<!-- @format -->

## 使用 yarn prerrter --write . 格式化后直接修改文件

可以添加备注 // prettier-ignore 来不应用 prettier

"printWidth": 40, // 每行长度
"tabWidth": 4, // 行前 tab 宽度
"useTabs": true, // 是否使用 tab 而不用 space
"semi": true, // 语句末尾是否加分号
"singleQuote": false, // 是否使用单引号
"quoteProps": "as-needed", // 对象的属性是否带引号，as-needed 需要带就带，consistent 都带，preserve 尊重你写的
"jsxSingleQuote": false, // jsx 里用单引号
"trailingComma": "es5", // 结尾是否加逗号，比如对象的最后一个属性 es5, none, all
"bracketSpacing": true, // 对象或者数组里是否带空格，比如括号的内侧，属性之间
"bracketSameLine": true, // html 起始标签的结尾> 后要不要换行, true 是不换行
"jsxBracketSameLine": false, //已弃用 jsx 的 bracketSameLine
"arrowParens": "alays", // 箭头函数是否带小括号 always 带（默认）， avoid 可以不带的时候不带
"rangeStart": 0, // 选择格式化的范围，一个是一个字符
"rangeEnd": 999999, // 选择格式化的范围，一个是一个字符
"parser": "babel", // 解析器，不用设置
"requirePragma": true, // 只格式化 在头部添加了特殊注释的文件
"insertPragma": true, // 格式化后在文件头部添加注释
"proseWrap": "preserve", // markdown 文件是否换行, always,never
"htmlWhitespaceSensitivity": "css", // [html 里标签和内容是否换行](https://juejin.cn/post/6844904194059534350)
"vueIndentScriptAndStyle": true, // vue 文件里边 style 标签和 script 标签的内容加上缩进
"endOfLine": "lf" // 换行符
"embeddedLanguageFormatting": "auto" // 是否格式化一些隐藏代码，比如 md 文件里的 js,js 文件里的 html

```js
const a = (a) => a;
```

## 可以分别配置

```json
{
	"semi": false,
	"overrides": [
		{
			"files": "*.test.js",
			"options": {
				"semi": true
			}
		},
		{
			"files": ["*.html", "legacy/**/*.js"],
			"options": {
				"tabWidth": 4
			}
		}
	]
}
```
