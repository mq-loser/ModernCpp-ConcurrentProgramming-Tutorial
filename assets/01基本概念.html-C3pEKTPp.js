import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,d as a,e as t,o as p,r as i}from"./app-C_GItsz4.js";const r={};function o(c,e){const n=i("Mermaid");return p(),s("div",null,[e[0]||(e[0]=a('<h1 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>  在我们谈起“<em>并发编程</em>”，其实可以直接简单理解为“<strong>多线程编程</strong>”，我知道你或许有疑问：“那多进程呢？” C++ 语言层面没有进程的概念，并发支持库也不涉及多进程，所以在本教程中，不用在意。</p><p>  我们主要使用标准 C++ 进行教学，也会稍微涉及一些其它库。</p><h2 id="并发" tabindex="-1"><a class="header-anchor" href="#并发"><span>并发</span></a></h2><p>并发，指两个或两个以上的独立活动同时发生。</p><p>并发在生活中随处可见，我们可以一边走路一边说话，也可以两只手同时做不同的动作，又或者一边看电视一边吃零食。</p><h2 id="在计算机中的并发" tabindex="-1"><a class="header-anchor" href="#在计算机中的并发"><span>在计算机中的并发</span></a></h2><p>计算机中的并发有两种方式：</p><ol><li><p>多核机器的真正<strong>并行</strong>。</p></li><li><p>单核机器的<strong>任务切换</strong>。</p></li></ol><p>  在早期，一些单核机器，它要想并发，执行多个任务，那就只能是任务切换，任务切换会给你一种“<strong>好像</strong>这些任务都在同时执行”的假象。只有硬件上是多核的，才能进行真正的并行，也就是真正的”<strong>同时执行任务</strong>“。</p><p>  在现在，我们日常使用的机器，基本上是二者都有。我们现在的 CPU 基本都是多核，而操作系统调度基本也一样有任务切换，因为要执行的任务非常之多，CPU 是很快的，但是核心却没有那么多，不可能每一个任务都单独给一个核心。大家可以打开自己电脑的任务管理器看一眼，进程至少上百个，线程更是上千。这基本不可能每一个任务分配一个核心，都并行，而且也没必要。正是任务切换使得这些后台任务可以运行，这样系统使用者就可以同时运行文字处理器、编译器、编辑器和 Web 浏览器。</p>',12)),t(n,{id:"mermaid-45",code:"eJxLL0osyFAIcbHmUgCC4tIkiIDS0yWzni3Y8WzOrqczVzyf1fJ8zvxnaxc/3bntxcIeJbBSEPAtzSnJdM4vSo1GVh4Ll3cOCDWMBhEoQkYgISMUIWOQkHEsF6bJCrq6dmBzcEsZ4ZYyRpgIMgMsHJJYnG0Y/WT37qddC9EcBpc3gsqjuRIubwyVBzoZJJeal8IFAPcdaKI="}),t(n,{id:"mermaid-46",code:"eJxLL0osyFAIcbHmUgCC4tIkiIDS096pzxbseDZn19OZK57Panmye/fTroVPO9qf9S5SAisFgeDMvPScVOf8otRoZPWxWBQo6OraKfgHRz+b3Ptk75znm3c/3z3/xYbmp7uWIVT7B4NVhSQWZxtGQ2w0fNa5/MXCnued7c/WbUWoBCuBGmlEwEwjuKFGUEONcBsKUewfbEzAUGO4ocZQQ40xDU3NS+HiAgCTxJpN"}),e[1]||(e[1]=a('<h2 id="并发与并行" tabindex="-1"><a class="header-anchor" href="#并发与并行"><span>并发与并行</span></a></h2><p>事实上，对于这两个术语，并没有非常公认的说法。</p><ol><li><p>有些人认为二者毫无关系，指代的东西完全不同。</p></li><li><p>有些人认为二者大多数时候是相同的，只是用于描述一些东西的时候关注点不同。</p></li></ol><p>我喜欢第二种，那我们就讲第二种。</p><p>对多线程来说，这两个概念大部分是重叠的。对于很多人来说，它们没有什么区别。<br> 这两个词是用来描述硬件同时执行多个任务的方式：</p><ul><li><p>“并行”更加注重性能。使用硬件提高数据处理速度时，会讨论程序的并行性。</p></li><li><p>当关注重点在于任务分离或任务响应时，会讨论程序的并发性。</p></li></ul><p>这两个术语存在的目的，就是为了区别多线程中不同的关注点。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>  概念从来不是我们的重点，尤其是某些说法准确性也一般，假设开发者对操作系统等知识有基本了解。</p><p>  我们也不打算<strong>特别介绍</strong>什么 C++ 并发库的历史发展、什么时候你该使用多线程、什么时候不该使用多线程... 类似问题应该是看你自己的，而我们回到代码上即可。</p>',10))])}const h=l(r,[["render",o],["__file","01基本概念.html.vue"]]),g=JSON.parse('{"path":"/md/01%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html","title":"基本概念","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"并发","slug":"并发","link":"#并发","children":[]},{"level":2,"title":"在计算机中的并发","slug":"在计算机中的并发","link":"#在计算机中的并发","children":[]},{"level":2,"title":"并发与并行","slug":"并发与并行","link":"#并发与并行","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1709618654000,"updatedTime":1722709815000,"contributors":[{"name":"归故里","email":"3326284481@qq.com","commits":5},{"name":"mq白","email":"3326284481@qq.com","commits":3},{"name":"suzukaze","email":"1027743497@qq.com","commits":1}]},"readingTime":{"minutes":3.22,"words":965},"filePathRelative":"md/01基本概念.md","localizedDate":"2024年3月5日","excerpt":"\\n<h2>前言</h2>\\n<p>  在我们谈起“<em>并发编程</em>”，其实可以直接简单理解为“<strong>多线程编程</strong>”，我知道你或许有疑问：“那多进程呢？” C++ 语言层面没有进程的概念，并发支持库也不涉及多进程，所以在本教程中，不用在意。</p>\\n<p>  我们主要使用标准 C++ 进行教学，也会稍微涉及一些其它库。</p>\\n<h2>并发</h2>\\n<p>并发，指两个或两个以上的独立活动同时发生。</p>\\n<p>并发在生活中随处可见，我们可以一边走路一边说话，也可以两只手同时做不同的动作，又或者一边看电视一边吃零食。</p>\\n<h2>在计算机中的并发</h2>"}');export{h as comp,g as data};
