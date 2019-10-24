"curly": true, //for if do while 要有括号
"forin":true, //用for in 必须用if进行过滤
"import-blacklist":true, //允许使用import require导入具体的模块
"label-postion": true, //允许在do/for/while/swith中使用label
"no-arg":true, //不允许使用 argument.callee
"no-bitwise":true, //不允许使用按位运算符
"no-conditional-assignmen": true, //不允许在do-while/for/if/while判断语句中使用赋值语句
"no-construct": true, //不允许使用 String/Number/Boolean的构造函数
"no-debugger": true, //不允许使用debugger
"no-duplicate-super": true, //构造函数两次用super会发出警告
"no-empty":true, //不允许空的块
"no-eval": true, //不允许使用eval
"no-floating-promises": true, //必须正确处理promise的返回函数
"no-for-in-array": true, //不允许使用for in 遍历数组
"no-implicit-dependencies": true, //不允许在项目的package.json中导入未列为依赖项的模块
"no-inferred-empty-object-type": true, //不允许在函数和构造函数中使用{}的类型推断
"no-invalid-template-strings": true, //警告在非模板字符中使用${
"no-invalid-this": true, //不允许在非class中使用 this关键字
// "no-misused-new": true, //禁止定义构造函数或new class
"no-null-keyword": true, //不允许使用null关键字
// "no-object-literal-type-assertion": true, //禁止objext出现在类型断言表达式中
// "no-return-await": true, //不允许return await
// "arrow-parens":  true, //箭头函数定义的参数需要括号