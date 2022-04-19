vscode 需要配合插件使用，这样在新建和保存的时候才能应用上配置的规则

indent_style：tab 为 hard-tabs，space 为 soft-tabs。
indent_size：设置整数表示规定每级缩进的列数和 soft-tabs 的宽度（译注：空格数）。如果设定为 tab，则会使用 tab_width 的值（如果已指定）。
tab_width：设置整数用于指定替代 tab 的列数。默认值就是 indent_size 的值，一般无需指定。
end_of_line：定义换行符，支持 lf、cr 和 crlf。
charset：编码格式，支持 latin1、utf-8、utf-8-bom、utf-16be 和 utf-16le，不建议使用 uft-8-bom。
trim_trailing_whitespace：设为 true 表示会除去换行行首的任意空白字符，false 反之。
insert_final_newline：设为 true 表明使文件以一个空白行结尾，false 反之。
root：表明是最顶层的配置文件，发现设为 true 时，才会停止查找.editorconfig 文件。

vscode的插件是这样操作的，有一些是保存的时候应用的，需要配置一下自动保存
indent_style
indent_size
tab_width
end_of_line (on save)
insert_final_newline (on save)
trim_trailing_whitespace (on save)