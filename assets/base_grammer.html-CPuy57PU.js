import{_ as n,c as i,a,o as l}from"./app-gl049hv5.js";const e={};function p(d,s){return l(),i("div",null,[...s[0]||(s[0]=[a(`<h2 id="基本结构" tabindex="-1"><a class="header-anchor" href="#基本结构"><span>基本结构</span></a></h2><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-c"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">include</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">stdio.h</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&gt;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   // 头文件包含</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">define</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> PI</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 3.14159</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 宏定义</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 函数声明</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">         // 主函数</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 变量声明</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> num1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> num2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> sum</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 用户输入</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Enter two integers: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    scanf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">%d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> %d</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &amp;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">num1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &amp;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">num2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 函数调用</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    sum </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">num1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> num2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 输出结果</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Sum: </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">%d\\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> sum</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 返回 0 表示程序成功执行</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 函数定义</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> a </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="头文件" tabindex="-1"><a class="header-anchor" href="#头文件"><span>头文件</span></a></h3><p>头文件通常在程序的开头使用 #include 指令包含。头文件提供了函数和库的声明，如标准输入输出库 &lt;stdio.h&gt;、标准库 &lt;stdlib.h&gt; 等。它们定义了函数、宏、常量等使程序能够使用预定义的库函数。 示例：#include &lt;stdio.h&gt; 使用预处理指令 #include 可以引用用户和系统头文件。它的形式有以下两种： 这种形式用于引用系统头文件。它在系统目录的标准列表中搜索名为 file 的文件。在编译源代码时，您可以通过 -I 选项把目录前置在该列表前。</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-c"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">include</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">file</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这种形式用于引用用户头文件。它在包含当前文件的目录中搜索名为 file 的文件。在编译源代码时，您可以通过 -I 选项把目录前置在该列表前。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>#include &quot;file&quot;</span></span>
<span class="line"><span>\`\`\`c</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 宏定义</span></span>
<span class="line"><span></span></span>
<span class="line"><span>宏是通过 #define 指令定义的符号常量或代码片段。宏在编译前由预处理器替换为其定义的内容。常用于定义常量或者复杂的代码块。</span></span>
<span class="line"><span>示例：#define PI 3.14159</span></span>
<span class="line"><span>### 函数声明</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 C 语言中，函数的声明必须在函数定义或调用之前。声明提供了函数的返回类型、函数名和参数列表，以便编译器知道如何调用该函数。</span></span>
<span class="line"><span>示例：int add(int a, int b);</span></span>
<span class="line"><span>### 主函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main() 函数是 C 程序的入口点，每个 C 程序都必须包含一个 main() 函数。程序从 main() 开始执行，返回值通常为 0 表示程序成功执行。</span></span>
<span class="line"><span>示例：int main() { ... }</span></span>
<span class="line"><span>### 变量声明</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 C 程序中，所有变量必须在使用前声明。变量可以在 main() 函数中声明，也可以在其他函数中或全局声明。</span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>printf(&quot;Enter two integers: &quot;);</span></span>
<span class="line"><span>sum = add(num1, num2);</span></span>
<span class="line"><span>### 语句和表达式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语句是 C 程序的基本执行单元，通常是函数调用、赋值、控制语句（如 if、for 等）或表达式。表达式是由变量、操作符和常量组成的代码片段。</span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>printf(&quot;Enter two integers: &quot;);</span></span>
<span class="line"><span>sum = add(num1, num2);</span></span>
<span class="line"><span>### 控制流语句</span></span>
<span class="line"><span></span></span>
<span class="line"><span>控制流语句用于控制程序执行的顺序，包括 if、for、while、do-while 等循环和条件分支语句。</span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>if (num1 &gt; num2) {</span></span>
<span class="line"><span>    printf(&quot;num1 is greater than num2&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>### 函数定义</span></span>
<span class="line"><span></span></span>
<span class="line"><span>函数定义包含实际的函数体，它描述了函数的具体实现。函数通常包含参数、局部变量和返回值。</span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span>int add(int a, int b) {</span></span>
<span class="line"><span>    return a + b;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>### 返回语句</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return 语句用于终止函数的执行，并将控制权交还给调用函数。main() 函数的返回值通常是 0 表示正常执行。</span></span>
<span class="line"><span>示例：return 0;</span></span>
<span class="line"><span>## 分隔符</span></span>
<span class="line"><span>分隔符用于分隔语句和表达式，常见的分隔符包括：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 逗号 , ：用于分隔变量声明或函数参数。</span></span>
<span class="line"><span>- 分号 ; ：用于结束语句。</span></span>
<span class="line"><span>- 括号：</span></span>
<span class="line"><span>    - 圆括号 () 用于分组表达式、函数调用。</span></span>
<span class="line"><span>    - 花括号 {} 用于定义代码块。</span></span>
<span class="line"><span>    - 方括号 [] 用于数组下标。</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>## 注释</span></span>
<span class="line"><span>C 语言有两种注释方式：</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>// 单行注释</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>以 // 开始的单行注释，这种注释可以单独占一行。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>/* 单行注释 <em>/ /</em> 多行注释 多行注释 多行注释 */</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>/* */ 这种格式的注释可以单行或多行。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>// 这是单行注释</p><p>/* 这是多行注释 它可以跨越多行 */</p><p>int main() { // 打印一条消息 printf(&quot;Hello, World!\\n&quot;); return 0; }</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>## 标识符</span></span>
<span class="line"><span>::: note</span></span>
<span class="line"><span>标识符是程序中变量、函数、数组等的名字。标识符由字母（大写或小写）、数字和下划线组成，但第一个字符必须是字母或下划线，不能是数字。</span></span>
<span class="line"><span>一个标识符以字母 A-Z 或 a-z 或下划线 _ 开始，后跟零个或多个字母、下划线和数字（0-9）。</span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>C 标识符内不允许出现标点字符，比如 @、$ 和 %。C 是区分大小写的编程语言。因此，在 C 中，Manpower 和 manpower 是两个不同的标识符。下面列出几个有效的标识符：</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mohd zara abc move_name a_123 myname50 _temp j a23b9 retVal</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span></span></span>
<span class="line"><span>## 运算符（Operators）</span></span>
<span class="line"><span>运算符用于执行各种操作，如算术运算、逻辑运算、比较运算等。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>C 语言中的运算符种类繁多，常见的包括：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- **算术运算符**：\`+\`, \`-\`, \`*\`, \`/\`, \`%\`</span></span>
<span class="line"><span>- **关系运算符**：\`==\`, \`!=\`, \`&gt;\`, \`&lt;\`, \`&gt;=\`, \`&lt;=\`</span></span>
<span class="line"><span>- **逻辑运算符**：\`&amp;&amp;\`, \`||\`, \`!\`</span></span>
<span class="line"><span>- **位运算符**：\`&amp;\`, \`|\`, \`^\`, \`~\`, \`&lt;&lt;\`, \`&gt;&gt;\`</span></span>
<span class="line"><span>- **赋值运算符**：\`=\`, \`+=\`, \`-=\`, \`*=\`, \`/=\`, \`%=\`</span></span>
<span class="line"><span>- **其他运算符**：\`sizeof\`, \`?:\`, \`&amp;\`, \`*\`, \`-&gt;\`, \`.\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>##　关键字</span></span>
<span class="line"><span>下表列出了 C 中的保留字。这些保留字不能作为常量名、变量名或其他标识符名称。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 关键字   | 说明                                                         |</span></span>
<span class="line"><span>| :------- | :----------------------------------------------------------- |</span></span>
<span class="line"><span>| auto     | 声明自动变量                                                 |</span></span>
<span class="line"><span>| break    | 跳出当前循环                                                 |</span></span>
<span class="line"><span>| case     | 开关语句分支                                                 |</span></span>
<span class="line"><span>| char     | 声明字符型变量或函数返回值类型                               |</span></span>
<span class="line"><span>| const    | 定义常量，如果一个变量被 const 修饰，那么它的值就不能再被改变 |</span></span>
<span class="line"><span>| continue | 结束当前循环，开始下一轮循环                                 |</span></span>
<span class="line"><span>| default  | 开关语句中的&quot;其它&quot;分支                                       |</span></span>
<span class="line"><span>| do       | 循环语句的循环体                                             |</span></span>
<span class="line"><span>| double   | 声明双精度浮点型变量或函数返回值类型                         |</span></span>
<span class="line"><span>| else     | 条件语句否定分支（与 if 连用）                               |</span></span>
<span class="line"><span>| enum     | 声明枚举类型                                                 |</span></span>
<span class="line"><span>| extern   | 声明变量或函数是在其它文件或本文件的其他位置定义             |</span></span>
<span class="line"><span>| float    | 声明浮点型变量或函数返回值类型                               |</span></span>
<span class="line"><span>| for      | 一种循环语句                                                 |</span></span>
<span class="line"><span>| goto     | 无条件跳转语句                                               |</span></span>
<span class="line"><span>| if       | 条件语句                                                     |</span></span>
<span class="line"><span>| int      | 声明整型变量或函数                                           |</span></span>
<span class="line"><span>| long     | 声明长整型变量或函数返回值类型                               |</span></span>
<span class="line"><span>| register | 声明寄存器变量                                               |</span></span>
<span class="line"><span>| return   | 子程序返回语句（可以带参数，也可不带参数）                   |</span></span>
<span class="line"><span>| short    | 声明短整型变量或函数                                         |</span></span>
<span class="line"><span>| signed   | 声明有符号类型变量或函数                                     |</span></span>
<span class="line"><span>| sizeof   | 计算数据类型或变量长度（即所占字节数）                       |</span></span>
<span class="line"><span>| static   | 声明静态变量                                                 |</span></span>
<span class="line"><span>| struct   | 声明结构体类型                                               |</span></span>
<span class="line"><span>| switch   | 用于开关语句                                                 |</span></span>
<span class="line"><span>| typedef  | 用以给数据类型取别名                                         |</span></span>
<span class="line"><span>| unsigned | 声明无符号类型变量或函数                                     |</span></span>
<span class="line"><span>| union    | 声明共用体类型                                               |</span></span>
<span class="line"><span>| void     | 声明函数无返回值或无参数，声明无类型指针                     |</span></span>
<span class="line"><span>| volatile | 说明变量在程序执行中可被隐含地改变                           |</span></span>
<span class="line"><span>| while    | 循环语句的循环条件                                           |</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)])])}const h=n(e,[["render",p]]),r=JSON.parse('{"path":"/notes/backend/c/base/base_grammer.html","title":"基础语法 | C","lang":"zh-CN","frontmatter":{"title":"基础语法","createTime":"2025/11/11 13:44:00"},"readingTime":{"minutes":5.61,"words":1683},"git":{"createdTime":1773989486000,"updatedTime":1778037570000,"contributors":[{"name":"syh","username":"syh","email":"syh@qq.com","commits":2,"avatar":"https://avatars.githubusercontent.com/syh?v=4","url":"https://github.com/syh"},{"name":"舒永好","username":"","email":"shuyonghao@guoshenghuaxing.com","commits":1,"avatar":"https://gravatar.com/avatar/4b1c3f37ea707968be73c631a79de33afd360724ce87bf8f9dcacd67d14df92c?d=retro"}]},"filePathRelative":"notes/backend/c/base/base_grammer.md","headers":[]}');export{h as comp,r as data};
