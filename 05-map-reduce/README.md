已知有一个数组，其中值只包括 null, 1, 2, 3。

``` javascript
const arr = [ null, null, 1, 3, null, 2, null, 1, null, null, 1, null, null ];
```

实现下列函数
``` javascript
function interpo(arr)
{
  return ...;
}
```

将上述数组转换成
[ 1, 1, 1, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1 ]

规则如下：
1) 如果首部为 null，则用第一个非 null 的值替换；
2）如果其他部位出现 null，则用前一个非 null 的值替换。

不允许使用 for 循环，尽量使用 map, reduce, find, findIndex 等 Array 成员方法。
