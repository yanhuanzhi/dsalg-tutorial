(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{343:function(s,t,a){s.exports=a.p+"assets/img/image-20210101173349039.6492184a.png"},564:function(s,t,a){"use strict";a.r(t);var n=a(20),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"图的深度优先遍历介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图的深度优先遍历介绍"}},[s._v("#")]),s._v(" 图的深度优先遍历介绍")]),s._v(" "),n("p",[s._v("所谓图的遍历，则是 "),n("strong",[s._v("对节点的访问")]),s._v("。一个图有很多个节点，如何遍历这些节点，需要特定策略，一般有两种访问策略：")]),s._v(" "),n("ol",[n("li",[s._v("深度优先遍历（DFS，Depth First Search）")]),s._v(" "),n("li",[s._v("广度优先遍历（BFS，Broad First Search）")])]),s._v(" "),n("h2",{attrs:{id:"深度优先遍历基本思想"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#深度优先遍历基本思想"}},[s._v("#")]),s._v(" 深度优先遍历基本思想")]),s._v(" "),n("p",[s._v("图的深度优先搜索（Depth First Search），简称 DFS。")]),s._v(" "),n("p",[s._v("从初始访问节点出发，初始访问节点可能有多个 "),n("strong",[s._v("邻接节点")]),s._v("（直连），深度优先遍历的策略为：")]),s._v(" "),n("ul",[n("li",[s._v("首先访问第一个邻接节点")]),s._v(" "),n("li",[s._v("然后以这个 "),n("strong",[s._v("被访问的邻接节点作为初始节点")])]),s._v(" "),n("li",[s._v("然后循环这个操作。")])]),s._v(" "),n("p",[s._v("可以这样理解：每次都在访问完 "),n("strong",[s._v("当前节点")]),s._v(" 后，首先 "),n("strong",[s._v("访问当前节点的第一个邻接节点")]),s._v("。")]),s._v(" "),n("p",[s._v("可以看到：这样的访问策略是 "),n("strong",[s._v("优先往纵向")]),s._v(" 挖掘深入，而 "),n("strong",[s._v("不是")]),s._v(" 对一个节点的所有邻接节点进行 "),n("strong",[s._v("横向访问")]),s._v("。")]),s._v(" "),n("p",[s._v("那么显然深度优先搜索是一个 "),n("strong",[s._v("递归过程")])]),s._v(" "),n("h2",{attrs:{id:"深度优先遍历算法步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#深度优先遍历算法步骤"}},[s._v("#")]),s._v(" 深度优先遍历算法步骤")]),s._v(" "),n("p",[s._v("基本思想看完，可能还是不清楚是如何遍历的，看看他的遍历步骤：")]),s._v(" "),n("ol",[n("li",[s._v("访问初始节点 v，并标记节点 v 为已访问")]),s._v(" "),n("li",[s._v("查找节点 v 的第一个邻接（直连）节点 w")]),s._v(" "),n("li",[s._v("如果节点 w 不存在，"),n("strong",[s._v("则回到第 1 步")]),s._v("，然后从 v 的下一个节点继续")]),s._v(" "),n("li",[s._v("如果节点 w 存在：\n"),n("ol",[n("li",[s._v("未被访问过，则对 w 进行深度优先遍历递归（即把 w 当做另一个 v，执行步骤 123）")]),s._v(" "),n("li",[s._v("如果已经被访问过：查找节点 v 的 w 邻接节点的下一个邻接节点，转到步骤 3")])])])]),s._v(" "),n("p",[n("img",{attrs:{src:a(343),alt:"image-20210101173349039"}})]),s._v(" "),n("p",[s._v("以上图作为例子：添加节点的顺序为 A、B、C、D、E。")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("添加节点的顺序为 A、B、C、D、E。那么第一个初始节点就是 A")])]),s._v(" "),n("li",[n("p",[s._v("访问 A，输出 A，并标记为已访问")])]),s._v(" "),n("li",[n("p",[s._v("查找 A 的下一个邻接节点：")]),s._v(" "),n("p",[s._v("从 "),n("code",[s._v("0，0")]),s._v(" 开始找，直到找到 "),n("code",[s._v("0,1 = 1")]),s._v(" 即 B，")]),s._v(" "),n("p",[s._v("如果 B 没有被访问过，则以 B 为基础递归 B。")])]),s._v(" "),n("li",[n("p",[s._v("递归：访问 B，输出 B，并标记为已访问")])]),s._v(" "),n("li",[n("p",[s._v("查找 B 的下一个邻接节点：")]),s._v(" "),n("p",[s._v("从 "),n("code",[s._v("1,0")]),s._v(" 开始找，直到找到 "),n("code",[s._v("1,2 = 1")]),s._v(" 即 C，")]),s._v(" "),n("p",[s._v("如果 C 没有被访问过，则以 C 为基础递归 C")])]),s._v(" "),n("li",[n("p",[s._v("递归：访问 C ，输出 C，并标记为已访问")])]),s._v(" "),n("li",[n("p",[s._v("查找 C 的下一个邻接节点：")]),s._v(" "),n("p",[s._v("从 "),n("code",[s._v("2,0")]),s._v(" 开始找，找到 "),n("code",[s._v("2,4")]),s._v(" 都没有找到有直连的；这里会退出递归 C，从而回到递归 B")])]),s._v(" "),n("li",[n("p",[s._v("由于循环并未结束：会判断找到的 C，已经被访问过。则从 B 为基础查找下一个：")]),s._v(" "),n("p",[s._v("也就是从 "),n("code",[s._v("1,2+1")]),s._v(" 即 "),n("code",[s._v("1,3 = 1")]),s._v("，即 "),n("code",[s._v("B,D")]),s._v(" B 直连 D")])]),s._v(" "),n("li",[n("p",[s._v("递归访问 D，输出 D，并标记为已访问")]),s._v(" "),n("p",[s._v("从 "),n("code",[s._v("3,0")]),s._v(" 开始找，找到 "),n("code",[s._v("3,4")]),s._v(" 都没有找到与 D 直连的下一个，则退出 D 递归")])]),s._v(" "),n("li",[n("p",[s._v("回到了递归 B，由于循环未结束，会判断 D ，已经被访问过，则从 B 为基础查找下一个")]),s._v(" "),n("p",[s._v("也就是从 "),n("code",[s._v("1,3+1")]),s._v(" 即 "),n("code",[s._v("1,4 = 1")]),s._v(" ，即 "),n("code",[s._v("B,E")]),s._v(" B 直连 E")])]),s._v(" "),n("li",[n("p",[s._v("递归访问 E，输出 E，并标记为已访问")])]),s._v(" "),n("li",[n("p",[s._v("查找 E 的下一个节点，由于 E 是最后一个，退出递归 E，回到了递归 B")])]),s._v(" "),n("li",[n("p",[s._v("回到了递归 B，由于循环未结束，会判断 E，已经被访问过，则从 B 为基础查找下一个，也未找到")])]),s._v(" "),n("li",[n("p",[s._v("回到了递归 A，由于循环未结束，会判断 B，已经被访问过，则从 A 为基础查找下一个")]),s._v(" "),n("p",[s._v("查找到 C，A 与 C 直连，由于 C 已经被访问过，则继续以 A 为基础查找下一个，把 A 可能链接的点查找完成，没有，则退出递归 A")])]),s._v(" "),n("li",[n("p",[s._v("这时，"),n("strong",[s._v("已经跳出了第一次初始点 A 的深度优先查找")]),s._v(" ，按照插入顶点的顺序，下一个节点为 B，从 B 开始深度优先查找")]),s._v(" "),n("p",[s._v("这里先判定：是否已经访问过，肯定已经访问过了，直接跳过 深度优先查找")])]),s._v(" "),n("li",[n("p",[s._v("由于 B 已经被访问过，那么直接下一个 C，发现 C 也被访问过")])]),s._v(" "),n("li",[n("p",[s._v("后面的都被访问过了，则直接完成。")])])]),s._v(" "),n("p",[s._v("思路小节：")]),s._v(" "),n("ol",[n("li",[s._v("先从一个初始节点开发深度优先查找")]),s._v(" "),n("li",[s._v("然后找到该节点的第一个邻接节点，找到则继续深度优先")]),s._v(" "),n("li",[s._v("如果找不到，则会 "),n("strong",[s._v("回溯")]),s._v("：那么尝试该节点的其他路径是否可以连通。")]),s._v(" "),n("li",[s._v("直到回溯到最顶层，然后退出该次 "),n("strong",[s._v("深度优先查找函数")]),s._v("。挑选下一个初始节点如果没有访问过，则调用深度优先函数")])]),s._v(" "),n("h2",{attrs:{id:"代码实现为"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码实现为"}},[s._v("#")]),s._v(" 代码实现为")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n         * 存放顶点是否已经访问过，下标对应顶点插入列表的下标\n         */")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" isVisiteds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n         * 深度遍历\n         */")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" vertexs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果已经访问过，则跳过")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("isVisiteds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("continue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 没有访问过，则以此节点为基础进行深度遍历")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n         * 深度优先遍历\n         *\n         * @param i 当前是以，顶点插入列表中的哪一个顶点进行深度优先查找\n         */")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出自己，并标记为已访问过")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vertexs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('" -> "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            isVisiteds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查找此节点的第一个邻接节点")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" w "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getFirstNeighbor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果找到了 w ，则对 w 进行深度优先遍历")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("w "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 已经访问过，")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("isVisiteds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("w"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    w "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getNextNeighbor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" w"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("w"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n         * 查找第一个邻接节点\n         *\n         * @param i\n         * @return 如果找到，则返回具体的下标\n         */")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getFirstNeighbor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" vertexs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("edges"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n         * 如果 w 节点被访问过，则查找 i 节点的下一个 邻接节点（就不是第一个节点了）\n         *\n         * @param i\n         * @param w\n         * @return\n         */")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getNextNeighbor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" w"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" w "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" vertexs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("edges"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br")])]),n("p",[s._v("测试代码")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Test")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dfsTest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" vertexValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"B"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"E"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Grap")]),s._v(" grap "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Grap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" value "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" vertexValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            grap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("insertVertex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a,b  a,c  b,c  b,d  b,e")]),s._v("\n        grap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("insertEdge")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        grap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("insertEdge")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        grap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("insertEdge")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        grap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("insertEdge")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        grap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("insertEdge")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        grap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("showGraph")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        grap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("测试输出")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  A B C D E \nA 0 1 1 0 0 \nB 1 0 1 1 1 \nC 1 1 0 0 0 \nD 0 1 0 0 0 \nE 0 1 0 0 0 \n\nA -> B -> C -> D -> E ->\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("这里的难点，一定不要以为直接按照添加的顶点顺序输出就行，虽然这里结果看上去是添加的顶点顺序，实际上它是有查找第一个邻接节点，不存在则回溯到上一层，直到回溯到初始节点。 这里有一个回溯的流程。")]),s._v(" "),n("p",[s._v("简单总结如下：")]),s._v(" "),n("ol",[n("li",[s._v("每次只找第一个邻接节点（纵向）")]),s._v(" "),n("li",[s._v("找不到，则返回到上一层，上一层。然后开始 横向找非第一个邻接节点")]),s._v(" "),n("li",[s._v("然后不断的找第一个，然后回溯（横向找下一个）。的流程")])]),s._v(" "),n("p",[s._v("通过上面的例子，你可能会发现：在循环的时候，把 A 作为参数调用 深度优先搜索，整个图就遍历完成了，那为什么还需要外面一层循环呢？")]),s._v(" "),n("p",[s._v("这个问题你想象一下：你看一个地铁图的时候，假设有 2 个地铁站 G、H，没有和其他节点连接，只有 "),n("code",[s._v("G→H")]),s._v(" 相连了，那么上面的列子，最外层的循环就起作用了。简单说就是：当一个点，不能间接的到达某一个点，那么就需要外层的这个循环来工作。")])])}),[],!1,null,null,null);t.default=e.exports}}]);