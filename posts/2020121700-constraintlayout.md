---
title: 'ConstraintLayout 知识记录（Android）'

date: '2020-12-17'

label: 'Android,ConstraintLayout'

---

1. 直接约束：constraintStart_toStartOf，constraintWidth/Height=true，0dp为matchConstraint
2. 多个View权重：weight（vertical，horizontal）
3. 文字基线对准：toBaseLineOf
4. 圆形布局（以某个View为圆心）：Angle，Radius
5. bias（偏移）：view在整个约束范围内的位置百分比
6. goneMargin：goneMargin
7. chainStyle（多个view链式约束）：packed，spread（默认），spread_inside
8. dimensionRatio：宽高比，"2:1"（宽高其中一个为0dp，另外根据比例计算）,“W,2:1”（宽高两个都为0dp，W值根据H来计算）
9. percent：“0.3”（view占整个parent的百分比，constraintWidth_percent）
10. GuideLine控件：辅助线（orientation，constraintGuide_percent）
11. Group控件：referenced_ids="id1,id2,id3"，整体控制显示隐藏
12. Layer控件：referenced_ids，控制整体移动旋转
13. Barrier控件（屏障，栅栏）：referenced_ids，barrierDirection，多个view的整体边界
14. 自定义ConstraintHelper控件：在updatePostLayout回调方法（view加载完成）中统一处理view，比如做动画，注意要使用referencedIds获取子View
15. PlaceHolder控件：setContentId（id），使用另外一个view取代holder的位置，（第一次设置，移动到空位置，后续再setContentId是两个已存在的view位置替换）
16. ConstraintSet：类似Layoutparam
```
val constraintLayout = view as ConstraintLayout
val constraintSet = ConstraintSet().apply {
    clone(constraintLayout)
    connect(
        R.id.twitter,
        ConstraintSet.BOTTOM,
        ConstraintSet.PARENT_ID,
        ConstraintSet.BOTTOM
    )
}
constraintSet.applyTo(constraintLayout)
```
17. 自定义VirtualLayout控件：updatePreLayout（）在布局之前，统一设置ConstraintSet
18. Flow控件（继承VirtualLayout抽象类）：表格控件，verticalGap（间距），wrapMode（样式，aligned，chain）
19. 同样的界面元素，在两个layout文件中，展示不同的样式：
```
val constraintLayout = view as ConstraintLayout
val constraintSet = ConstraintSet().apply {
     isForceId = true //id对不上也行？
     clone(context, R.layout.XXX)
}
constraintSet.applyTo(constraintLayout)
```
20. 自动实现的动画：
```
TransitionManager.beginDelayedTransition(constraintLayout)
```
