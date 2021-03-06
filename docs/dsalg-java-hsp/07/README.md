# 排序算法

排序也称 **排序算法（Sort Algorithm）**，排序是将一组数据，依指定的顺序进行排列的过程。

## 排序的分类

分两类：内部排序、外部排序。

- 内部排序：

  指将需要处理的所有数据，都加载到 **内部存储器（内存）** 中进行排序

- 外部排序：

  **数据量过大**，无法全部加载到内存中，需要借助 **外部存储（文件等）**进行排序。

## 常见的排序分类

- 内部排序（内存）
  - 插入排序
    - [直接插入排序](./05.md)
    - [希尔排序](./06.md)
  - 选择排序
    - [简单选择排序](./04.md)
    - 堆排序
  - 交换排序
    - [冒泡排序](./03.md)
    - [快速排序](07.md)
  - [归并排序](./08.md)
  - [基数排序](./09.md)
- 外部排序（使用内存和外存结合）

## 本章内容导航

- [算法时间复杂度](./01.md)
- [算法空间复杂度](./02.md)
- [冒泡排序](./03.md)
- [选择排序](./04.md)
- [插入排序](./05.md)
- [希尔排序](./06.md)
- [快速排序](./07.md)
- [归并排序](./08.md)
- [基数排序](./09.md)
- [常用排序算法总结对比](./10.md)