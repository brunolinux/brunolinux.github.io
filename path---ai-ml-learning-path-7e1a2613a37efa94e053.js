webpackJsonp([67972624922266],{814:function(e,t){e.exports={data:{post:{id:"F:/program/BlogSite/content/posts/2018-12-04--AI-ML-Learning-Path/index.md absPath of file >>> MarkdownRemark",html:'<h2>1. Python 入门篇</h2>\n<ul>\n<li>\n<p><a href="https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000">廖雪峰的 Python 教程</a> </p>\n<p>推荐看到 正则表达式就可以了，前面如果不懂，可以利用丰富的网上资源查找资料，不用只局限一篇博客</p>\n</li>\n<li>\n<p>书籍: <a href="www.dsf.unica.it/~fiore/LearningPython.pdf">Learning Python</a> </p>\n<p>这本书非常值得推荐，感觉写的很详细，但可能对初学者不太友好。</p>\n<p>我在学了 Python 很久后才看到这本书的，感觉很多原先不懂的地方这里都解释得很清楚 </p>\n<p>我的博客中关于 Python 语法部分大多数都是总结自这本书 </p>\n</li>\n<li>\n<p>Numpy, Scikit-learn, Matplotlib 学习: <a href="https://www.scipy-lectures.org/">Scipy Lecture Note</a> (很遗憾缺少 Pandas 库)</p>\n</li>\n<li>\n<p>Python 可视化: <a href="https://python-graph-gallery.com/">Python graph gallery</a></p>\n<p>注: 我的博客中讲解 seaborn 的部分来自这个网址</p>\n</li>\n</ul>\n<p>注: </p>\n<ol>\n<li>\n<p>如何寻找有用的 Python 库，不重复造轮子 .</p>\n<p><a href="https://github.com/jobbole/awesome-python-cn">awesome-python-cn</a></p>\n</li>\n<li>\n<p>这里强烈建议读完前两个，后面关于库的使用，可以在项目中学，后面在 Kaggle 篇会解释</p>\n</li>\n</ol>\n<!--more-->\n<h2>2. Machine learning 入门篇</h2>\n<ul>\n<li>\n<p>Coursera 的课程 <a href="https://www.coursera.org/learn/machine-learning/home/welcome">Machine Learning</a> 和 <a href="https://www.coursera.org/learn/neural-networks-deep-learning/home/welcome">Deeplearning.ai</a> (一共有 5 节课)，注意这两门课在 youtube 都有视频，但没有课后作业。我觉得这门课的精华之处就在课后作业，值得好好做一做。前者用 Matlab/Octave，后者用 Python Jupyter。</p>\n</li>\n<li>\n<p>还有台湾大学林宏毅教授的视频 : </p>\n<p><a href="http://speech.ee.ntu.edu.tw/~tlkagk/courses.html">http://speech.ee.ntu.edu.tw/~tlkagk/courses.html</a></p>\n<p>(我还没有看，但感觉很不错，我也得抓紧看下)</p>\n</li>\n<li>\n<p><a href="http://www.fast.ai/">Fast.ai</a> : 对新手入门很好，先跑例程，可以直接看到效果，但没有过多解释背后的数学原理，不然课程怎么叫 fast ai。</p>\n</li>\n<li>\n<p>李沐的 <a href="https://zh.gluon.ai/index.html">动手学深度学习</a> : MXNet 框架</p>\n<p><strong>注:</strong> </p>\n<ol>\n<li>\n<p>如果对矩阵求导不熟悉，可以参见我的博客 ，请注意 vectorization 的思想非常重要</p>\n</li>\n<li>\n<p>如果线性代数忘了，就算没有忘，也请多看看这个网站: <a href="https://ccjou.wordpress.com/">https://ccjou.wordpress.com/</a> (可能需要梯子)</p>\n</li>\n</ol>\n<p> 或者 MIT 的课程 : <a href="https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/video-lectures/lecture-1-the-geometry-of-linear-equations/">Linear algebra</a> 以及对应的教材，理解各种矩阵分解和四个子空间</p>\n<ol start="3">\n<li>如果对数学理论感兴趣，可以补充看这几个方面的书籍: </li>\n</ol>\n<p> 凸优化: <a href="https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf">Convex optimization</a></p>\n<p> 实变函数和泛函分析: 有点啃不动，有人想学可以一起啊</p>\n<p> 数值分析感觉也挺重要的，庆幸我在研究生的时候学过，梯度下降就在这门课讲过，以及范数等</p>\n</li>\n<li>\n<p>如果对传统的机器学习感兴趣，推荐 <a href="http://scikit-learn.org/stable/index.html">Scikit-learn</a> 库。如果对算法的原理感兴趣，基本上上面这个库的 Tutorial 和 User Guide 都覆盖了，可以看下。</p>\n</li>\n<li>\n<p>入门后的书籍推荐: </p>\n<ul>\n<li>Bishop 的 <a href="http://users.isr.ist.utl.pt/~wurmd/Livros/school/Bishop%20-%20Pattern%20Recognition%20And%20Machine%20Learning%20-%20Springer%20%202006.pdf">Pattern Recognition and Machine Learning</a>  (我正在努力阅读中 :cry: ) </li>\n<li>后面可能还有 … </li>\n</ul>\n</li>\n<li>\n<p>后续还有 GAN 对抗生成网络 推荐</p>\n</li>\n</ul>\n<h2>3. Computer Vision 推荐</h2>\n<ul>\n<li>\n<p>OpenCV 库  (图像处理库)</p>\n<p>推荐书籍:  <a href="http://www.bogotobogo.com/cplusplus/files/OReilly%20Learning%20OpenCV.pdf">Learning OpenCV3</a> </p>\n<p>但还是建议 “在用中学”</p>\n</li>\n<li>\n<p>斯坦福大学课程: </p>\n<ul>\n<li><a href="http://vision.stanford.edu/teaching/cs131_fall1718/syllabus.html">CS131</a> : introductory course for computer vision</li>\n<li>CS231a: advanced computer vision</li>\n<li>CS231n: deep learning and convolution neural networks </li>\n</ul>\n</li>\n</ul>\n<h2>4. Pytorch 学习</h2>\n<ul>\n<li>\n<p><a href="https://pytorch.org/tutorials/">官网 Tutorial</a></p>\n</li>\n<li>\n<p>知乎一篇干货: <a href="https://zhuanlan.zhihu.com/p/28475866">PyTorch项目代码与资源列表 | 资源下载</a></p>\n<p>但这里大概率会有一个坑，等你们学会 Pytorch 就知道了，这里先不说</p>\n</li>\n</ul>\n<h2>5. Kaggle 篇</h2>\n<p>终于到了 Kaggle 篇，如果前面的 Numpy, Pandas 都没有学过，这里推荐两篇文章: </p>\n<ul>\n<li><a href="https://www.kaggle.com/kanncaa1/data-sciencetutorial-for-beginners/">data science tutorial for beginner</a></li>\n<li><a href="https://www.kaggle.com/kanncaa1/machine-learning-tutorial-for-beginners">Machine learning tutorial for beginner</a></li>\n</ul>\n<p>在实操几个题目，就可以愉快地玩耍了</p>\n<ul>\n<li><a href="https://dnc1994.com/2016/04/rank-10-percent-in-first-kaggle-competition/">如何在 Kaggle 首战中进入前 10%</a> 这篇文章对传统的结构化数据竞赛非常有帮助</li>\n</ul>\n<h2>6. 我的想法</h2>\n<p>我想在这个暑假创建一个网站，用于展示 神经网络的各种应用，可以和用户交互，比如用户在写字板写入数字，可以自动识别。比如 YoLo 实时物体识别。或者也可以动态展示神经网络的原理。所以在学 Django (一个 Python 的 Web 框架)，慢慢来吧，有兴趣的小伙伴可以加入哦。</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"1. Python 入门篇"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000"},children:[{type:"text",value:"廖雪峰的 Python 教程"}]},{type:"text",value:" "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"推荐看到 正则表达式就可以了，前面如果不懂，可以利用丰富的网上资源查找资料，不用只局限一篇博客"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"书籍: "},{type:"element",tagName:"a",properties:{href:"www.dsf.unica.it/~fiore/LearningPython.pdf"},children:[{type:"text",value:"Learning Python"}]},{type:"text",value:" "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"这本书非常值得推荐，感觉写的很详细，但可能对初学者不太友好。"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"我在学了 Python 很久后才看到这本书的，感觉很多原先不懂的地方这里都解释得很清楚 "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"我的博客中关于 Python 语法部分大多数都是总结自这本书 "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Numpy, Scikit-learn, Matplotlib 学习: "},{type:"element",tagName:"a",properties:{href:"https://www.scipy-lectures.org/"},children:[{type:"text",value:"Scipy Lecture Note"}]},{type:"text",value:" (很遗憾缺少 Pandas 库)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Python 可视化: "},{type:"element",tagName:"a",properties:{href:"https://python-graph-gallery.com/"},children:[{type:"text",value:"Python graph gallery"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"注: 我的博客中讲解 seaborn 的部分来自这个网址"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"注: "}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"如何寻找有用的 Python 库，不重复造轮子 ."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/jobbole/awesome-python-cn"},children:[{type:"text",value:"awesome-python-cn"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"这里强烈建议读完前两个，后面关于库的使用，可以在项目中学，后面在 Kaggle 篇会解释"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"comment",value:"more"},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"2. Machine learning 入门篇"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Coursera 的课程 "},{type:"element",tagName:"a",properties:{href:"https://www.coursera.org/learn/machine-learning/home/welcome"},children:[{type:"text",value:"Machine Learning"}]},{type:"text",value:" 和 "},{type:"element",tagName:"a",properties:{href:"https://www.coursera.org/learn/neural-networks-deep-learning/home/welcome"},children:[{type:"text",value:"Deeplearning.ai"}]},{type:"text",value:" (一共有 5 节课)，注意这两门课在 youtube 都有视频，但没有课后作业。我觉得这门课的精华之处就在课后作业，值得好好做一做。前者用 Matlab/Octave，后者用 Python Jupyter。"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"还有台湾大学林宏毅教授的视频 : "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://speech.ee.ntu.edu.tw/~tlkagk/courses.html"},children:[{type:"text",value:"http://speech.ee.ntu.edu.tw/~tlkagk/courses.html"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"(我还没有看，但感觉很不错，我也得抓紧看下)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://www.fast.ai/"},children:[{type:"text",value:"Fast.ai"}]},{type:"text",value:" : 对新手入门很好，先跑例程，可以直接看到效果，但没有过多解释背后的数学原理，不然课程怎么叫 fast ai。"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"李沐的 "},{type:"element",tagName:"a",properties:{href:"https://zh.gluon.ai/index.html"},children:[{type:"text",value:"动手学深度学习"}]},{type:"text",value:" : MXNet 框架"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"注:"}]},{type:"text",value:" "}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"如果对矩阵求导不熟悉，可以参见我的博客 ，请注意 vectorization 的思想非常重要"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"如果线性代数忘了，就算没有忘，也请多看看这个网站: "},{type:"element",tagName:"a",properties:{href:"https://ccjou.wordpress.com/"},children:[{type:"text",value:"https://ccjou.wordpress.com/"}]},{type:"text",value:" (可能需要梯子)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:" 或者 MIT 的课程 : "},{type:"element",tagName:"a",properties:{href:"https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/video-lectures/lecture-1-the-geometry-of-linear-equations/"},children:[{type:"text",value:"Linear algebra"}]},{type:"text",value:" 以及对应的教材，理解各种矩阵分解和四个子空间"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{start:3},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"如果对数学理论感兴趣，可以补充看这几个方面的书籍: "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:" 凸优化: "},{type:"element",tagName:"a",properties:{href:"https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"},children:[{type:"text",value:"Convex optimization"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:" 实变函数和泛函分析: 有点啃不动，有人想学可以一起啊"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:" 数值分析感觉也挺重要的，庆幸我在研究生的时候学过，梯度下降就在这门课讲过，以及范数等"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"如果对传统的机器学习感兴趣，推荐 "},{type:"element",tagName:"a",properties:{href:"http://scikit-learn.org/stable/index.html"},children:[{type:"text",value:"Scikit-learn"}]},{type:"text",value:" 库。如果对算法的原理感兴趣，基本上上面这个库的 Tutorial 和 User Guide 都覆盖了，可以看下。"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"入门后的书籍推荐: "}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Bishop 的 "},{type:"element",tagName:"a",properties:{href:"http://users.isr.ist.utl.pt/~wurmd/Livros/school/Bishop%20-%20Pattern%20Recognition%20And%20Machine%20Learning%20-%20Springer%20%202006.pdf"},children:[{type:"text",value:"Pattern Recognition and Machine Learning"}]},{type:"text",value:"  (我正在努力阅读中 :cry: ) "}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"后面可能还有 … "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"后续还有 GAN 对抗生成网络 推荐"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"3. Computer Vision 推荐"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"OpenCV 库  (图像处理库)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"推荐书籍:  "},{type:"element",tagName:"a",properties:{href:"http://www.bogotobogo.com/cplusplus/files/OReilly%20Learning%20OpenCV.pdf"},children:[{type:"text",value:"Learning OpenCV3"}]},{type:"text",value:" "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"但还是建议 “在用中学”"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"斯坦福大学课程: "}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://vision.stanford.edu/teaching/cs131_fall1718/syllabus.html"},children:[{type:"text",value:"CS131"}]},{type:"text",value:" : introductory course for computer vision"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"CS231a: advanced computer vision"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"CS231n: deep learning and convolution neural networks "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"4. Pytorch 学习"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://pytorch.org/tutorials/"},children:[{type:"text",value:"官网 Tutorial"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"知乎一篇干货: "},{type:"element",tagName:"a",properties:{href:"https://zhuanlan.zhihu.com/p/28475866"},children:[{type:"text",value:"PyTorch项目代码与资源列表 | 资源下载"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"但这里大概率会有一个坑，等你们学会 Pytorch 就知道了，这里先不说"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"5. Kaggle 篇"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"终于到了 Kaggle 篇，如果前面的 Numpy, Pandas 都没有学过，这里推荐两篇文章: "}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.kaggle.com/kanncaa1/data-sciencetutorial-for-beginners/"},children:[{type:"text",value:"data science tutorial for beginner"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.kaggle.com/kanncaa1/machine-learning-tutorial-for-beginners"},children:[{type:"text",value:"Machine learning tutorial for beginner"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"在实操几个题目，就可以愉快地玩耍了"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://dnc1994.com/2016/04/rank-10-percent-in-first-kaggle-competition/"},children:[{type:"text",value:"如何在 Kaggle 首战中进入前 10%"}]},{type:"text",value:" 这篇文章对传统的结构化数据竞赛非常有帮助"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"6. 我的想法"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"我想在这个暑假创建一个网站，用于展示 神经网络的各种应用，可以和用户交互，比如用户在写字板写入数字，可以自动识别。比如 YoLo 实时物体识别。或者也可以动态展示神经网络的原理。所以在学 Django (一个 Python 的 Web 框架)，慢慢来吧，有兴趣的小伙伴可以加入哦。"}]}],data:{quirksMode:!1}},fields:{slug:"/AI-ML-Learning-Path/",prefix:"2018-12-04"},frontmatter:{title:"AI ML Learning Path",subTitle:"机器学习新手学习路线",cover:{childImageSharp:{resize:{src:"/static/ai-f89a04b44bc8c4f392f9256e7c1a247c-ada8c.jpg"}}}}},author:{id:"F:/program/BlogSite/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>我是一名数据工程师，对硬件有浓厚的兴趣。</p>"},footnote:{id:"F:/program/BlogSite/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>this is a site built by <a href="https://www.gatsbyjs.org/">GatsbyJS</a>, ReactJs, CSS in JS</li>\n<li>delivered by <a href="https://pages.github.com/">Github Page</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/AI-ML-Learning-Path/"}}}});
//# sourceMappingURL=path---ai-ml-learning-path-7e1a2613a37efa94e053.js.map