# New Lava-Lamp Menu

_Presented by Albert Yu_

---

## 最重要的是！！！

__谁规定的导航条（菜单）一定要用ul（无序列表）的？__

每一次都要去做 ul / li / a 的样式调整，真是烦也烦死了!

这一次我在HTML5的光辉照耀下尝试了不用无序列表的导航条，效果杠杠的！（）

然后我重写了鼎鼎有名的Lava-Lamp Menu，将其做成了一个jQuery插件，以方便在项目中快速部署和调整。

That is it!

---

## 插件自定义参数说明：

* overlap：浮动指示超出链接本身的高度，默认值：20  
  等同于上下边距各超出10px。

* speed：动态效果的速度，默认值：750  
  单位：毫秒（ms）

* effect：动态效果的种类，默认值：easeOutBack  
  可选用的效果参见： [jQuery UI手册][link-jQuery-ui]

* reset：浮动指示回到原始位置的时间，默认值：1500  
  单位：毫秒（ms）

* bgColor：浮动指示的背景颜色，默认值：#5ca2e2

---

## 参数调用方式

1 默认调用：

`$('nav').newLavaLampMenu();`
					
2 自定义调用（范例）：

    $('nav').newLavaLampMenu({
        overlap: 30, // 上下各15
        speed: 500, // 500ms
        effect: 'swing', // 摆动效果
        reset: 2000, // 2.5s
        bgColor: '#db70db' // #db70db
    });

---
					
__Note:__在IE9以下浏览器看起来会比较丑，因为本示例中仅含有最基本的CSS样式，想要美观的话可以自行调整CSS文件；  
IE9+及其他现代浏览器看起来会更舒服，至少我添加了一点点圆角在里面（CSS3 Only）。

[link-jQuery-ui]: http://jqueryui.com/demos/effect/#easing/