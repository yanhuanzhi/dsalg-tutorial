(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{430:function(v,t,_){v.exports=_.p+"assets/img/image-20210102141247460.c140af98.png"},592:function(v,t,_){"use strict";_.r(t);var l=_(20),a=Object(l.a)({},(function(){var v=this,t=v.$createElement,l=v._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"图的广度优先遍历"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#图的广度优先遍历"}},[v._v("#")]),v._v(" 图的广度优先遍历")]),v._v(" "),l("p",[v._v("图的广度优先搜索（DFS，Broad First Search），类似于一个 分层搜索的过程，广度优先遍历需要使用一个队列以保持访问过的节点的顺序，以便按这个顺序来访问这些节点的邻接节点。")]),v._v(" "),l("h2",{attrs:{id:"算法步骤"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#算法步骤"}},[v._v("#")]),v._v(" 算法步骤")]),v._v(" "),l("ol",[l("li",[v._v("访问初始节点 v ，并标记节点 v 为已访问")]),v._v(" "),l("li",[v._v("节点 v 入队列")]),v._v(" "),l("li",[v._v("当队列非空时，继续执行，否则算法结束（仅对 v 的节点算法结束）。")]),v._v(" "),l("li",[v._v("出队列，取得队头的节点 u")]),v._v(" "),l("li",[v._v("查找节点 u 的第一个邻接节点 w")]),v._v(" "),l("li",[v._v("若节点 u 的邻接节点 w 不存在，则跳转到步骤 3；否则执行以下三个步骤：\n"),l("ol",[l("li",[v._v("若节点 w 尚未被访问，则访问节点 w 并标记为已访问")]),v._v(" "),l("li",[v._v("节点 w 入队列")]),v._v(" "),l("li",[v._v("查找节点 u 的继 w 邻接节点后的下一个邻接节点 w，转到步骤 6")])])])]),v._v(" "),l("p",[v._v("这里可以看到，与深度优先不同的是：")]),v._v(" "),l("ul",[l("li",[v._v("广度优先：找到第一个邻接节点，访问之后，会继续寻找这个节点的下一个邻接节点（非第一个）")]),v._v(" "),l("li",[v._v("深度优先：每次只找第一个邻接节点，然后以找到的节点作为基础找它的第一个邻接节点，如果找不到才回溯到上一层，寻找找它的下一个邻接节点（非第一个）")])]),v._v(" "),l("p",[l("img",{attrs:{src:_(430),alt:"image-20210102141247460"}})]),v._v(" "),l("p",[v._v("就如同上图：")]),v._v(" "),l("ul",[l("li",[v._v("左侧的是广度优先，先把 A 能直连的都访问完，再换下一个节点")]),v._v(" "),l("li",[v._v("右图是深度优先，每次都只访问第一个直连的节点，然后换节点继续，访问不到，则回退到上一层，找下一个直连节点")])])])}),[],!1,null,null,null);t.default=a.exports}}]);