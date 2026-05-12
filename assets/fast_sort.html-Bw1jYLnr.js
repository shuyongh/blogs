import{_ as s,c as a,a as i,o as e}from"./app-gl049hv5.js";const l={};function p(r,n){return e(),a("div",null,[...n[0]||(n[0]=[i(`<h2 id="思想" tabindex="-1"><a class="header-anchor" href="#思想"><span>思想</span></a></h2><ol><li>从数列中挑出一个元素，称为&quot;基准&quot;（pivot），</li><li>重新排序数列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（相同的数可以到任何一边）。在这个分区结束之后，该基准就处于数列的中间位置。这个称为分区（partition）操作。</li><li>递归地（recursively）把小于基准值元素的子数列和大于基准值元素的子数列排序。 <img src="https://shuyongh.github.io/imgs/fast_sort.webp" alt=""></li></ol><h2 id="实现方案" tabindex="-1"><a class="header-anchor" href="#实现方案"><span>实现方案</span></a></h2><h3 id="c语言" tabindex="-1"><a class="header-anchor" href="#c语言"><span>C语言</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>typedef struct _Range {</span></span>
<span class="line"><span>    int start, end;</span></span>
<span class="line"><span>} Range;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Range new_Range(int s, int e) {</span></span>
<span class="line"><span>    Range r;</span></span>
<span class="line"><span>    r.start = s;</span></span>
<span class="line"><span>    r.end = e;</span></span>
<span class="line"><span>    return r;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void swap(int *x, int *y) {</span></span>
<span class="line"><span>    int t = *x;</span></span>
<span class="line"><span>    *x = *y;</span></span>
<span class="line"><span>    *y = t;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void quick_sort(int arr[], const int len) {</span></span>
<span class="line"><span>    if (len &lt;= 0)</span></span>
<span class="line"><span>        return; // 避免len等於負值時引發段錯誤（Segment Fault）</span></span>
<span class="line"><span>    // r[]模擬列表,p為數量,r[p++]為push,r[--p]為pop且取得元素</span></span>
<span class="line"><span>    Range r[len];</span></span>
<span class="line"><span>    int p = 0;</span></span>
<span class="line"><span>    r[p++] = new_Range(0, len - 1);</span></span>
<span class="line"><span>    while (p) {</span></span>
<span class="line"><span>        Range range = r[--p];</span></span>
<span class="line"><span>        if (range.start &gt;= range.end)</span></span>
<span class="line"><span>            continue;</span></span>
<span class="line"><span>        int mid = arr[(range.start + range.end) / 2]; // 選取中間點為基準點</span></span>
<span class="line"><span>        int left = range.start, right = range.end;</span></span>
<span class="line"><span>        do {</span></span>
<span class="line"><span>            while (arr[left] &lt; mid) ++left;   // 檢測基準點左側是否符合要求</span></span>
<span class="line"><span>            while (arr[right] &gt; mid) --right; //檢測基準點右側是否符合要求</span></span>
<span class="line"><span>            if (left &lt;= right) {</span></span>
<span class="line"><span>                swap(&amp;arr[left], &amp;arr[right]);</span></span>
<span class="line"><span>                left++;</span></span>
<span class="line"><span>                right--;               // 移動指針以繼續</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } while (left &lt;= right);</span></span>
<span class="line"><span>        if (range.start &lt; right) r[p++] = new_Range(range.start, right);</span></span>
<span class="line"><span>        if (range.end &gt; left) r[p++] = new_Range(left, range.end);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>优化方案： 坏时间复杂度为 O(n²)（如数组已近乎有序时），但可通过随机化或&quot;三数取中&quot;优化。 时间复杂度</p><ul><li>分解：每次将列表分成两半，需要 O(log n) 层递归。</li><li>合并：每层递归需要 O(n) 的时间来合并子列表。</li><li>总时间复杂度：O(n log n)。</li></ul><p>空间复杂度 O(n)，归并排序需要额外的空间来存储临时列表。</p></div>`,6)])])}const d=s(l,[["render",p]]),c=JSON.parse('{"path":"/notes/four/data_structure/sort/fast_sort.html","title":"快速排序 | 数据结构","lang":"zh-CN","frontmatter":{"title":"快速排序","createTime":"2025/12/04 16:02:18"},"readingTime":{"minutes":1.56,"words":469},"git":{"createdTime":1773989486000,"updatedTime":1778502836000,"contributors":[{"name":"syh","username":"syh","email":"syh@qq.com","commits":3,"avatar":"https://avatars.githubusercontent.com/syh?v=4","url":"https://github.com/syh"},{"name":"舒永好","username":"","email":"shuyonghao@guoshenghuaxing.com","commits":1,"avatar":"https://gravatar.com/avatar/4b1c3f37ea707968be73c631a79de33afd360724ce87bf8f9dcacd67d14df92c?d=retro"}]},"filePathRelative":"notes/four/data_structure/sort/fast_sort.md","headers":[]}');export{d as comp,c as data};
