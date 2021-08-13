---
title: 'Android 系统启动流程'

date: '2018-04-10'

label: 'Android,System'

---

>源码查看工具：Source Insight <br>
>参考：<br>
>[Android系统启动流程](http://blog.csdn.net/lp897225636/article/details/51263258) <br>
>[Android应用程序启动过程源代码分析](http://blog.csdn.net/luoshengyang/article/details/6689748) <br>
>[Android 7.0 ActivityManagerService(2) 启动Activity的过程：一](http://blog.csdn.net/gaugamela/article/details/53183216)

### Bootloader引导和Linux Kernel启动
- **Bootloader引导**
 - 路径：bootable/bootloader/*
 - 加电后，CPU先执行bootloader引导程序，正常启动系统，加载boot.img到RAM，然后执行，boot.img中包含内核。
 - 引导程序是在Android操作系统开始运行前的一个小程序。引导程序是运行的第一个程序，因此它是针对特定的主板与芯片的，不是Android操作系统的一部分。引导程序是OEM厂商或者运营商加锁和限制的地方。
 - 引导程序分两个阶段执行。第一个阶段，检测外部的RAM及加载对第二阶段有用的程序；第二阶段，引导程序设置网络、内存等。这些对于运行内核是必要的，为了达到特殊的目标，引导程序可以根据配置参数或者输入数据设置内核。
- **Linux Kernel启动**
 - 路径：kernel/*
 - 由bootloader加载kernel，kernel经自解压、初始化、载入built-in驱动程序，完成启动。Kernel启动后会创建若干内核线程（kernel thread），之后装入并执行程序/sbin/init/，载入init process，切换至user-  space。



### Android启动
Android从Linux系统启动有4个步骤：

1. init进程启动 ramdisk.so

2. Native服务启动

3. System Server，Android服务启动

4. Home启动
