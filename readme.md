### 固定头和列的表格实现 —— 小程序

基于 WePY 实现，大家可根据自身需要进行更改扩展。

#### 演示

![Gif 演示][1]

[演示视频地址>>][2]

#### 实现原理

![分层展示][3]

 1. 橙色和紫色区域组成了**横向滚动**的 `scroll-view`。
 2. 红色虚线区域是**纵向滚动**的 `scroll-view`。但由于绿色区域设置了 `pointer-events: none;`，即实际只能触摸橙色区域。通过在橙色区域绑定的 `scroll` 事件（纵向），实时设置绿色虚线区域的 `scrollTop`。
 3. 紫色区域是固定头部，绿色区域是固定列。左上角的绿色区域是横向与纵向共同固定的区域。

#### 实现要点

 1. 绑定了 `scroll` 事件的 `scroll-view` 要指定 `throttle: false`，否则回调函数有可能取不到最终位置的 `scrollTop` 值。官方文档目前未提及此属性，[参考资料>>][4]。
 2. 固定列需要设置 `pointer-events: none;`，实现点击穿透。使得 `tbody` 能触发 `scroll` 事件，而不是为固定列也绑定 `scroll` 事件。
 3. 找出每列的最大单元格作为该列的宽度，当然你也可以显式设置。

peace out!👋

#### 小程序 Bug

2019.09.03 更新  
当将该组件至于 Popup 弹框，且该弹框通过 `visibility: hidden/visible` 切换，那么在 **iOS** 中，会使固定列（`.table__fixed-columns`）的 `pointer-events: none` 失效。

 [1]: https://mini-program-table-1251477229.cos.ap-chengdu.myqcloud.com/Video_2019-07-04_141139-min.gif
 [2]: https://mini-program-table-1251477229.cos.ap-chengdu.myqcloud.com/table.mp4
 [3]: https://mini-program-table-1251477229.cos.ap-chengdu.myqcloud.com/analyse.png
 [4]: https://developers.weixin.qq.com/community/develop/doc/0008eeba9e0f9062b27780d9856c00?_at=1560441776584
