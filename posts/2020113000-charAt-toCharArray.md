---
title: 'String 的 charAt() 和 toCharArray() 遍历效率'

date: '2020-11-30'

label: 'Java,String,Algorithm'

---

背景：刷 leetcode 的时候，有时候需要遍历 String 中的 char，突然想到这个问题。

过程：
1. 网上搜了一下，说是 charAt() 效率高，[并且有代码验证。](https://www.cnblogs.com/lxcmyf/p/8805547.html)
2. 自己 copy 代码试了一下，发现有时候 charAt 效率高，有时候 toCharArray 效率高。
3. 找了做 c++ 的朋友指点了一下，优化 for 循环中的 length() 方法，charAt 和 toCharArray 的运行效率一下子拉开了差距。
4. 以前知道最好不要在 for 循环条件里面写方法，会影响效率，但是在实际业务代码里因为时间或者代码美观等原因，没有注意这个细节。在毫秒级别的运算，一个小小的细节就会导致结果逆转。

总结：
1. String 使用 charAt 比使用 toCharArray 遍历，效率要高。
2. 避免在 for 循环中使用 s.length() 方法，可以显著提升效率。
3. 虽然底层都调用了 C 语言的 Native 方法，toCharArray 多了复制数组的一个步骤，所以会慢，因为 String 的数据结构本来也是数组。
```
public static void test() {
        long t1 = 0;
        long t2 = 0;
        for (int m = 0; m < 100000; m++) {
            String s = "a";
            for (int i = 0; i < 1000; i++) {
                s += "a";
            }
            /****************toCharArray遍历*************/
            long start1 = System.currentTimeMillis();
            char[] arr = s.toCharArray();
            for (int i = 0; i < arr.length; i++) {
                char c = arr[i];
                //System.out.println(c);
                if (c == 'd') {
                    System.out.println(c);
                }
            }
            long end1 = System.currentTimeMillis();
            /****************charAt遍历******************/
            long start2 = System.currentTimeMillis();
            int length = s.length();
            for (int i = 0; i < length; i++) {
                char c = s.charAt(i);
                //System.out.println(c);
                if (c == 'd') {
                    System.out.println(c);
                }
            }
            long end2 = System.currentTimeMillis();

            t1 += (end1-start1);
            t2 += (end2-start2);
            //System.out.println(end1 - start1);
            //System.out.println(end2 - start2);
        }
        System.out.println(t1);
        System.out.println(t2);
    }
```
很快啊

2020/12/18补充：
有个 leetcode 题目，五十多个测试用例，同样 Java 代码，用 toCharArray 耗时 1ms，用 charAt 耗时2ms。
我在本地用 kotlin 试了一下，结果又是反过来了。
charAt 和 toCharArray 都是 Native 方法，java、android 各版本的实现可能不一致
以后 leetcode 做题还是用 toCharArray 好了。。。

2021/01/05补充：
Java源码中 String.length() 和安卓源码中 String.length() 的实现不一样。
安卓源码有对 String 压缩
