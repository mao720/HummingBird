---
title: 'Android 架构分层'

date: '2017-02-17'

label: 'Android,System'

---

[Android HAL 架构规划](http://upload-images.jianshu.io/upload_images/3597719-260b7d18f1b65d33.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 参考： <br>
>[Android HAL(硬件抽象层)介绍以及调用](http://www.cnblogs.com/muhuacat/articles/5279293.html) <br>
>[Android硬件抽象层（HAL）概要介绍和学习计划](http://blog.csdn.net/luoshengyang/article/details/6567257)

Android 的 HAL（**Hardware Abstraction Layer硬件抽象层**）是Google因应厂商「希望不公开源码」的要求下，所推出的新观念，从这张架构图我们知道，HAL 的目的是为了把 Android framework 与 Linux kernel 完整「隔开」。

让 Android 不至过度依赖 Linux kernel，有点像是「kernel independent」的意思，让 Android framework 的开发能在不考虑驱动程序的前提下进行发展。
