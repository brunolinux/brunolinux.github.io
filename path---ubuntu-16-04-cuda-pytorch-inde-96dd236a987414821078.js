webpackJsonp([19632969134503],{808:function(e,t){e.exports={data:{post:{id:"F:/program/BlogSite/content/posts/2018-12-04--Ubuntu-16.04-cuda-+-pytorch/inde.md absPath of file >>> MarkdownRemark",html:'<h2>1. 安装 Ubuntu 16.04</h2>\n<p>这一步就不说了，网上很多教程，几点建议: </p>\n<ol>\n<li>请不要尝试 Ubuntu 18.04，新版本 bug 比较多</li>\n<li>下载地址: <a href="http://releases.ubuntu.com/16.04/ubuntu-16.04.4-desktop-amd64.iso.torrent?_ga=2.113724035.542278924.1526910108-1913394428.1521797668">Ubuntu 16.04 Desktop (64-bit)</a></li>\n<li>系统语言选英文，主要是有助于 shell 切换目录</li>\n<li>请设置开机密码</li>\n</ol>\n<p>安装好可以更新一下，</p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell">sudo apt-get update\nsudo apt-get upgrade</code></pre>\n      </div>\n<!--more-->\n<h2>2. 安装 Nividia GPU driver</h2>\n<p>我的 GPU 是 Gtx 1060 6G 版本，安装步骤如下: </p>\n<ol>\n<li>\n<p>添加内核补丁 <em>liquorix</em>，Ubuntu 官方的内核为 4.13版本，和 驱动有冲突，会造成上面的问题，这里本人亲自踩坑. </p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell">sudo add-apt-repository ppa:damentz/liquorix\nsudo apt update\nsudo apt install linux-image-liquorix-amd64 linux-headers-liquorix-amd64 firmware-linux-free</code></pre>\n      </div>\n</li>\n<li>\n<p>添加 GPU driver repository </p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell">sudo add-apt-repository ppa:graphics-drivers/ppa\nsudo apt-get update\nsudo apt-get install nvidia-387*</code></pre>\n      </div>\n<p>这里提醒下，</p>\n<ul>\n<li>如果去 Nvidia 官网下载 <code class="language-text">.run</code>  或者 <code class="language-text">.bin</code> 安装驱动，非常容易死机，强烈不推荐</li>\n<li>也不安装 系统的addtional driver提供的384.111驱动或其他版本驱动，非常容易不成功</li>\n<li>我当时安装的是 387.34 驱动，可能不同的机器会有所不同，这里没有测试，最新的是 390 驱动</li>\n</ul>\n<p>如果安装失败，可以查看日志 <code class="language-text">/var/log/nvidia-installer.log</code> </p>\n<p>比如后面提到 cuda 安装时，如果直接安装 cuda 自带的驱动，可能会出错，这里贴出错误信息: </p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell">Building module:\ncleaning build area....\n&#39;make&#39; -j4 NV_EXCLUDE_BUILD_MODULES=&#39;&#39; KERNEL_UNAME=4.13.0-32-generic modules...........(bad exit status: 2)\nERROR (dkms apport): binary package for nvidia: 387.26 not found\nError! Bad return status for module build on kernel: 4.13.0-32-generic (x86_64)\nConsult /var/lib/dkms/nvidia/387.26/build/make.log for more information.</code></pre>\n      </div>\n<p>显然出错原因是因为 387.26 驱动和 内核不兼容，需要安装其他驱动</p>\n</li>\n</ol>\n<p>   <strong>另外</strong>, 额外知识补充: </p>\n<ol>\n<li>\n<p>opengl 是一套 GPU 使用协议，和它竞争的是 Microsoft 的 Diret ，以及最新的 Vulkan</p>\n</li>\n<li>\n<p>mesa, nvidia, amd, intel 都提供各自的 opengl 具体实现方案，其中 mesa 提供的是完全软件层面的实现，没有和物理显卡打交道</p>\n</li>\n<li>\n<p>重启电脑测试</p>\n<p>如果开机在登陆界面输入密码后，无法登陆，几乎可以确定驱动安装失败 ，卸载步骤如下 (这里时间太久远，没有测试，参考 <a href="https://askubuntu.com/questions/206283/how-can-i-uninstall-a-nvidia-driver-completely">这里</a> ) </p>\n<ol>\n<li>\n<p><code class="language-text">Ctrl + Alt + F1</code> 进入管理台 ，输入用户名和密码登陆</p>\n</li>\n<li>\n<p><code class="language-text">dpkg -l | grep -i nvidia</code> 查看所有 nvidia 安装包</p>\n</li>\n<li>\n<p><code class="language-text">sudo apt-get remove --purge nvidia-*</code> 卸载所有的驱动</p>\n</li>\n<li>\n<p><code class="language-text">sudo apt-get install ubuntu-desktop</code> 重新安装 桌面</p>\n</li>\n<li>\n<p><code class="language-text">sudo rm /etc/X11/xorg.conf</code> 删除 xorg 配置文件</p>\n</li>\n<li>\n<p>将 nouveau 驱动 (就是前面提到的 mesa 完全软件层面实现 opengl ) 解除屏蔽</p>\n</li>\n</ol>\n<p>  <code class="language-text">echo &#39;nouveau&#39; | sudo tee -a /etc/modules</code> </p>\n<p>如果进入系统，<code class="language-text">Ctrl + Alt + T</code> 打开 terminal ，输入 <code class="language-text">nvidia-smi</code> ，如果出现显存使用情况，说明安装成功； 或者系统软件有 <code class="language-text">nvidia setting</code> ，点开可以看到 GPU 运行状态。</p>\n</li>\n</ol>\n<h2>3. 安装 cuda 9.2</h2>\n<p>官网依次选择: Linux -> x86_64 -> Ubuntu -> 16.04 -> runfile (local)。 </p>\n<p>这里给出下载地址: </p>\n<p><a href="https://developer.nvidia.com/compute/cuda/9.2/Prod/local_installers/cuda_9.2.88_396.26_linux">https://developer.nvidia.com/compute/cuda/9.2/Prod/local<em>installers/cuda</em>9.2.88<em>396.26</em>linux</a></p>\n<p>注意两点: </p>\n<ol>\n<li>\n<p>如果安装的是 Tensorflow, 则只能使用 cuda 9.0 版本</p>\n<p>下图展示了 tensorflow 版本和 cuda 版本的对应关系</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/cuda-tensorflow-a17ae1a0a4695a3db1831098886e4ba5-a1901.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75.14450867052024%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAACCElEQVQoz31SaW/TQBT0Ly+iglJQxIdyt6WporSlSPwhjiapHe+99u7aXh9BYtabEIoQkmV5/d6bmTezycn8y5P3s4OTi4NX08N3s5eXnw/fzo7PricXt8fnN49eTyfT26cf5kenV5Ppp8dvLp+fXz87uzo6nb/4eJMsVunXH8u7VcZVkRGGR5V2meaL+1QVlgn9fbFislim6293S8JVRjiOaU5lYRIpFWVcSl033rnKuXqz+alLo3QxDBvvW86lbzutC85F03i0dV1fVU0/DAkTck0oF6puWl2YorRtN3CpGBe+7V3VoOrqBg05YdbVaMB8URqAJISy1X0KchzwC0/XD0JpykQLhjoM4w2sdZ7bqi7NdhhyIBt9HDUwl8YZ67p+I1UhpIIE9MWSVJoxjg8AgcZVNaATxgBJ0d34dmS2kRmrRmZCWDXKRhtmylG2jsyUsjTNIvy/d86J28omVe2hDp1oCztDHtbGG4e9bA3ZOspGcSc7fFjg+c7YCtBJgFyT/zHD7arBFg+YzchMGUuzdYTHzjAz7ozhndts5zaBEHDCHbS1YA5uU44rAZ6Hbuu/3d4mYmuEamw0jIOZhBj8Pme5Z87HnLkIoaCntC5CxKh4ts5HVP87Ki7/lE0hlAsJlDBsXJQdmHFj85yCqvGQbVHbyhbIeYBDyALDIZTxkpTBqjjc/wIjtzbF4NEcbgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="cuda tensorflow"\n        title=""\n        src="/static/cuda-tensorflow-a17ae1a0a4695a3db1831098886e4ba5-48538.png"\n        srcset="/static/cuda-tensorflow-a17ae1a0a4695a3db1831098886e4ba5-bed0f.png 200w,\n/static/cuda-tensorflow-a17ae1a0a4695a3db1831098886e4ba5-5fd34.png 400w,\n/static/cuda-tensorflow-a17ae1a0a4695a3db1831098886e4ba5-48538.png 800w,\n/static/cuda-tensorflow-a17ae1a0a4695a3db1831098886e4ba5-a1901.png 865w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n</li>\n<li>\n<p>安装过程中，千万别安装 cuda 自带的 gpu driver，这里只安装 cuda toolkit 和 cuda samplecode</p>\n</li>\n</ol>\n<p>安装步骤如下: ( 其中 cuda_xxx.run 就是前面下载的安装包)</p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell">sudo sh cuda_xxx.run </code></pre>\n      </div>\n<p>出现信息，安装前面的说明来即可</p>\n<p>安装结束，测试 cuda ，步骤如下: </p>\n<ol>\n<li>\n<p><code class="language-text">Ctrl + Alt + T</code> 打开 terminal</p>\n</li>\n<li>\n<p>安装 opengl 头文件，用于后面的编译</p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell">sudo apt-get install freeglut3-dev libx11-dev libgles2-mesa-dev</code></pre>\n      </div>\n</li>\n<li>\n<p>切换到安装时指定的 samplecode 根目录</p>\n</li>\n<li>\n<p>执行 <code class="language-text">make -j4</code> ，这一步一般耗时较长，可能需要十几分钟，</p>\n</li>\n<li>\n<p>结束后切换到 cuda samplecode 根目录 的 <code class="language-text">bin</code> 子目录，里面有所有的测试程序，比如: <code class="language-text">./deviceQuery</code> , <code class="language-text">./nbody</code> 等</p>\n</li>\n</ol>\n<h3>3.1 卸载 CUDA</h3>\n<p>直接删除安装目录就好了</p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell">sudo rm -rf /usr/local/cuda-9.2</code></pre>\n      </div>\n<p>如果有 symblic link 指向 <code class="language-text">/use/local/cuda</code> ，则把该文件也删除</p>\n<p>如果安装了 CUDA 9.2 Samples, 那么也要在指定的安装位置删除该目录</p>\n<h2>4. 安装 Anaconda + pytorch</h2>\n<p>Anaconda 下载地址: <a href="https://repo.anaconda.com/archive/Anaconda3-5.1.0-Linux-x86_64.sh">https://repo.anaconda.com/archive/Anaconda3-5.1.0-Linux-x86_64.sh</a> </p>\n<p>这里选择最新的Python 3 版本的即可，安装过程很简单</p>\n<p>安装 Pytorch </p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell">conda install pytorch torchvision -c pytorch</code></pre>\n      </div>\n<p>如果需要其他库，使用 <code class="language-text">pip</code> 或者 <code class="language-text">conda</code> 安装即可</p>\n<h3>5. 查看安装版本</h3>\n<p>如果安装很久，忘了自己安装的 cuda 或者 cudnn 版本，可以用如下方式查看: </p>\n<p>cuda 版本 </p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell">cat /usr/local/cuda/version.txt</code></pre>\n      </div>\n<p>cudnn 版本 </p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell">cat /usr/local/cuda/include/cudnn.h | grep CUDNN_MAJOR -A 2</code></pre>\n      </div>',htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"1. 安装 Ubuntu 16.04"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"这一步就不说了，网上很多教程，几点建议: "}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"请不要尝试 Ubuntu 18.04，新版本 bug 比较多"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"下载地址: "},{type:"element",tagName:"a",properties:{href:"http://releases.ubuntu.com/16.04/ubuntu-16.04.4-desktop-amd64.iso.torrent?_ga=2.113724035.542278924.1526910108-1913394428.1521797668"},children:[{type:"text",value:"Ubuntu 16.04 Desktop (64-bit)"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"系统语言选英文，主要是有助于 shell 切换目录"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"请设置开机密码"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"安装好可以更新一下，"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:"sudo apt-get update\nsudo apt-get upgrade"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"comment",value:"more"},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"2. 安装 Nividia GPU driver"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"我的 GPU 是 Gtx 1060 6G 版本，安装步骤如下: "}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"添加内核补丁 "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"liquorix"}]},{type:"text",value:"，Ubuntu 官方的内核为 4.13版本，和 驱动有冲突，会造成上面的问题，这里本人亲自踩坑. "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:"sudo add-apt-repository ppa:damentz/liquorix\nsudo apt update\nsudo apt install linux-image-liquorix-amd64 linux-headers-liquorix-amd64 firmware-linux-free"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"添加 GPU driver repository "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:"sudo add-apt-repository ppa:graphics-drivers/ppa\nsudo apt-get update\nsudo apt-get install nvidia-387*"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"这里提醒下，"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"如果去 Nvidia 官网下载 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:".run"}]},{type:"text",value:"  或者 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:".bin"}]},{type:"text",value:" 安装驱动，非常容易死机，强烈不推荐"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"也不安装 系统的addtional driver提供的384.111驱动或其他版本驱动，非常容易不成功"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"我当时安装的是 387.34 驱动，可能不同的机器会有所不同，这里没有测试，最新的是 390 驱动"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"如果安装失败，可以查看日志 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"/var/log/nvidia-installer.log"}]},{type:"text",value:" "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"比如后面提到 cuda 安装时，如果直接安装 cuda 自带的驱动，可能会出错，这里贴出错误信息: "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:"Building module:\ncleaning build area....\n'make' -j4 NV_EXCLUDE_BUILD_MODULES='' KERNEL_UNAME=4.13.0-32-generic modules...........(bad exit status: 2)\nERROR (dkms apport): binary package for nvidia: 387.26 not found\nError! Bad return status for module build on kernel: 4.13.0-32-generic (x86_64)\nConsult /var/lib/dkms/nvidia/387.26/build/make.log for more information."}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"显然出错原因是因为 387.26 驱动和 内核不兼容，需要安装其他驱动"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"   "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"另外"}]},{type:"text",value:", 额外知识补充: "}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"opengl 是一套 GPU 使用协议，和它竞争的是 Microsoft 的 Diret ，以及最新的 Vulkan"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"mesa, nvidia, amd, intel 都提供各自的 opengl 具体实现方案，其中 mesa 提供的是完全软件层面的实现，没有和物理显卡打交道"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"重启电脑测试"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"如果开机在登陆界面输入密码后，无法登陆，几乎可以确定驱动安装失败 ，卸载步骤如下 (这里时间太久远，没有测试，参考 "},{type:"element",tagName:"a",properties:{href:"https://askubuntu.com/questions/206283/how-can-i-uninstall-a-nvidia-driver-completely"},children:[{type:"text",value:"这里"}]},{type:"text",value:" ) "}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Ctrl + Alt + F1"}]},{type:"text",value:" 进入管理台 ，输入用户名和密码登陆"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"dpkg -l | grep -i nvidia"}]},{type:"text",value:" 查看所有 nvidia 安装包"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"sudo apt-get remove --purge nvidia-*"}]},{type:"text",value:" 卸载所有的驱动"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"sudo apt-get install ubuntu-desktop"}]},{type:"text",value:" 重新安装 桌面"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"sudo rm /etc/X11/xorg.conf"}]},{type:"text",value:" 删除 xorg 配置文件"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"将 nouveau 驱动 (就是前面提到的 mesa 完全软件层面实现 opengl ) 解除屏蔽"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"  "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"echo 'nouveau' | sudo tee -a /etc/modules"}]},{type:"text",value:" "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"如果进入系统，"},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Ctrl + Alt + T"}]},{type:"text",value:" 打开 terminal ，输入 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"nvidia-smi"}]},{type:"text",value:" ，如果出现显存使用情况，说明安装成功； 或者系统软件有 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"nvidia setting"}]},{type:"text",value:" ，点开可以看到 GPU 运行状态。"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"3. 安装 cuda 9.2"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"官网依次选择: Linux -> x86_64 -> Ubuntu -> 16.04 -> runfile (local)。 "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"这里给出下载地址: "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://developer.nvidia.com/compute/cuda/9.2/Prod/local_installers/cuda_9.2.88_396.26_linux"},children:[{type:"text",value:"https://developer.nvidia.com/compute/cuda/9.2/Prod/local"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"installers/cuda"}]},{type:"text",value:"9.2.88"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"396.26"}]},{type:"text",value:"linux"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"注意两点: "}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"如果安装的是 Tensorflow, 则只能使用 cuda 9.0 版本"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"下图展示了 tensorflow 版本和 cuda 版本的对应关系"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/cuda-tensorflow-a17ae1a0a4695a3db1831098886e4ba5-a1901.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 75.14450867052024%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAACCElEQVQoz31SaW/TQBT0Ly+iglJQxIdyt6WporSlSPwhjiapHe+99u7aXh9BYtabEIoQkmV5/d6bmTezycn8y5P3s4OTi4NX08N3s5eXnw/fzo7PricXt8fnN49eTyfT26cf5kenV5Ppp8dvLp+fXz87uzo6nb/4eJMsVunXH8u7VcZVkRGGR5V2meaL+1QVlgn9fbFislim6293S8JVRjiOaU5lYRIpFWVcSl033rnKuXqz+alLo3QxDBvvW86lbzutC85F03i0dV1fVU0/DAkTck0oF6puWl2YorRtN3CpGBe+7V3VoOrqBg05YdbVaMB8URqAJISy1X0KchzwC0/XD0JpykQLhjoM4w2sdZ7bqi7NdhhyIBt9HDUwl8YZ67p+I1UhpIIE9MWSVJoxjg8AgcZVNaATxgBJ0d34dmS2kRmrRmZCWDXKRhtmylG2jsyUsjTNIvy/d86J28omVe2hDp1oCztDHtbGG4e9bA3ZOspGcSc7fFjg+c7YCtBJgFyT/zHD7arBFg+YzchMGUuzdYTHzjAz7ozhndts5zaBEHDCHbS1YA5uU44rAZ6Hbuu/3d4mYmuEamw0jIOZhBj8Pme5Z87HnLkIoaCntC5CxKh4ts5HVP87Ki7/lE0hlAsJlDBsXJQdmHFj85yCqvGQbVHbyhbIeYBDyALDIZTxkpTBqjjc/wIjtzbF4NEcbgAAAABJRU5ErkJggg=='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"cuda tensorflow",title:"",src:"/static/cuda-tensorflow-a17ae1a0a4695a3db1831098886e4ba5-48538.png",srcSet:["/static/cuda-tensorflow-a17ae1a0a4695a3db1831098886e4ba5-bed0f.png 200w","/static/cuda-tensorflow-a17ae1a0a4695a3db1831098886e4ba5-5fd34.png 400w","/static/cuda-tensorflow-a17ae1a0a4695a3db1831098886e4ba5-48538.png 800w","/static/cuda-tensorflow-a17ae1a0a4695a3db1831098886e4ba5-a1901.png 865w"],sizes:["(max-width:","800px)","100vw,","800px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"安装过程中，千万别安装 cuda 自带的 gpu driver，这里只安装 cuda toolkit 和 cuda samplecode"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"安装步骤如下: ( 其中 cuda_xxx.run 就是前面下载的安装包)"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:"sudo sh cuda_xxx.run "}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"出现信息，安装前面的说明来即可"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"安装结束，测试 cuda ，步骤如下: "}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Ctrl + Alt + T"}]},{type:"text",value:" 打开 terminal"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"安装 opengl 头文件，用于后面的编译"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:"sudo apt-get install freeglut3-dev libx11-dev libgles2-mesa-dev"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"切换到安装时指定的 samplecode 根目录"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"执行 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"make -j4"}]},{type:"text",value:" ，这一步一般耗时较长，可能需要十几分钟，"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"结束后切换到 cuda samplecode 根目录 的 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"bin"}]},{type:"text",value:" 子目录，里面有所有的测试程序，比如: "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"./deviceQuery"}]},{type:"text",value:" , "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"./nbody"}]},{type:"text",value:" 等"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"3.1 卸载 CUDA"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"直接删除安装目录就好了"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:"sudo rm -rf /usr/local/cuda-9.2"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"如果有 symblic link 指向 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"/use/local/cuda"}]},{type:"text",value:" ，则把该文件也删除"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"如果安装了 CUDA 9.2 Samples, 那么也要在指定的安装位置删除该目录"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"4. 安装 Anaconda + pytorch"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Anaconda 下载地址: "},{type:"element",tagName:"a",properties:{href:"https://repo.anaconda.com/archive/Anaconda3-5.1.0-Linux-x86_64.sh"},children:[{type:"text",value:"https://repo.anaconda.com/archive/Anaconda3-5.1.0-Linux-x86_64.sh"}]},{type:"text",value:" "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"这里选择最新的Python 3 版本的即可，安装过程很简单"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"安装 Pytorch "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:"conda install pytorch torchvision -c pytorch"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"如果需要其他库，使用 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"pip"}]},{type:"text",value:" 或者 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"conda"}]},{type:"text",value:" 安装即可"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"5. 查看安装版本"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"如果安装很久，忘了自己安装的 cuda 或者 cudnn 版本，可以用如下方式查看: "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"cuda 版本 "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:"cat /usr/local/cuda/version.txt"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"cudnn 版本 "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:"cat /usr/local/cuda/include/cudnn.h | grep CUDNN_MAJOR -A 2"}]}]},{type:"text",value:"\n      "}]}],data:{quirksMode:!1}},fields:{slug:"/Ubuntu-16.04-cuda-+-pytorch/inde/",prefix:"2018-12-04"},frontmatter:{title:"Ubuntu 16.04 cuda + pytorch",subTitle:"Ubuntu 16.04 系统 安装 cuda , pytorch 流程",cover:{childImageSharp:{resize:{src:"/static/NVIDIA_CUDA-a8eed72c9503cf265dbb6f5ed84d0400-ada8c.jpg"}}}}},author:{id:"F:/program/BlogSite/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>我是一名数据工程师，对硬件有浓厚的兴趣。</p>"},footnote:{id:"F:/program/BlogSite/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>this is a site built by <a href="https://www.gatsbyjs.org/">GatsbyJS</a>, ReactJs, CSS in JS</li>\n<li>delivered by <a href="https://pages.github.com/">Github Page</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/Ubuntu-16.04-cuda-+-pytorch/inde/"}}}});
//# sourceMappingURL=path---ubuntu-16-04-cuda-pytorch-inde-96dd236a987414821078.js.map