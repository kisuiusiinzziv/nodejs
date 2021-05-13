//默认当前文件申明的变量只能在当前文件中访问，除挂载到gobal上 (暂时)
var foo = 'bar';
console.log(foo);
console.log(global.foo) //undefined