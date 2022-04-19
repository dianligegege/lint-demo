## prettier 和 eslint 里配置的规则不一致怎么办？

安装 eslint-config-prettier，然后在 eslintrc 中的 extends 里配置上，这样会按先后顺序来应用：
顺序 rules > estends 里后边的 > estends 里前边的

配置好后 yarn prettier --write . 看看效果

还要安装 `eslint-plugin-prettier`, 然后在rule里配置上 `"prettier/prettier": "error"`,这样会把prettier的错通过eslint显示出来
