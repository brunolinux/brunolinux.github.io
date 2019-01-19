webpackJsonp([60335399758886],{259:function(e,c){e.exports={data:{posts:{edges:[{node:{excerpt:"本文介绍如何利用 numpy 进行数组合并(concatenate), 分割 (split), 插入 (insert) 和删除 (delete)。由于 Numpy 通过 c 语言实现，因此它进行数组并，割，增，删操作的速度远远快于 Pandas 库。 因此如果想对 Pandas…",fields:{slug:"/Numpy concatenate, stack, split, insert, delete/",prefix:"2019-01-19"},frontmatter:{title:"Numpy concatenate, stack, split, insert, delete",subTitle:"numpy 数组合并，分割，插入和删除",category:"Numpy & Pandas",cover:{children:[{__typename:"ImageSharp",resolutions:{width:90,height:90,src:"/static/cover-b7318a7477b8c8b45211ae158b2f285a-6d4e8.png",srcSet:"/static/cover-b7318a7477b8c8b45211ae158b2f285a-6d4e8.png 1x,\n/static/cover-b7318a7477b8c8b45211ae158b2f285a-ded4e.png 1.5x,\n/static/cover-b7318a7477b8c8b45211ae158b2f285a-59342.png 2x,\n/static/cover-b7318a7477b8c8b45211ae158b2f285a-92edc.png 3x",srcWebp:"/static/cover-b7318a7477b8c8b45211ae158b2f285a-9a16c.webp",srcSetWebp:"/static/cover-b7318a7477b8c8b45211ae158b2f285a-9a16c.webp 1x,\n/static/cover-b7318a7477b8c8b45211ae158b2f285a-c1dac.webp 1.5x,\n/static/cover-b7318a7477b8c8b45211ae158b2f285a-cd83a.webp 2x,\n/static/cover-b7318a7477b8c8b45211ae158b2f285a-abaa1.webp 3x"}}]}}}},{node:{excerpt:"numpy 中，数组合并，分割，插入或者删除等操作会涉及到维度变化。但在数据不变的情况下，我们也可以对数据重组，进行维度变化。 1. 升维 1.1   就是   的别名，通常用于切片操作 (slicing operation…",fields:{slug:"/Numpy dimension operation/",prefix:"2019-01-19"},frontmatter:{title:"",subTitle:null,category:null,cover:null}}},{node:{excerpt:"在一维信号处理中，我们利用傅里叶变换实现信号从时域到频域的变换。现在在二维图像信号中，我们学习了空间频率的概念，自然可以想到，可以利用二维傅里叶变换实现空间到空间频率的转换。注意关于频谱 中心化 和 可视化 在文末有提及到。 1. 1D Fourier Transform…",fields:{slug:"/2D-FFT/",prefix:"2018-12-10"},frontmatter:{title:"2D FFT",subTitle:"二维傅里叶变换介绍：空间和空间频率",category:"DIP",cover:{children:[{__typename:"ImageSharp",resolutions:{width:90,height:90,src:"/static/2d_fft_cover-4ad30f3f24a5586fa3779ca825d5e541-6d4e8.png",srcSet:"/static/2d_fft_cover-4ad30f3f24a5586fa3779ca825d5e541-6d4e8.png 1x,\n/static/2d_fft_cover-4ad30f3f24a5586fa3779ca825d5e541-ded4e.png 1.5x,\n/static/2d_fft_cover-4ad30f3f24a5586fa3779ca825d5e541-59342.png 2x,\n/static/2d_fft_cover-4ad30f3f24a5586fa3779ca825d5e541-92edc.png 3x",srcWebp:"/static/2d_fft_cover-4ad30f3f24a5586fa3779ca825d5e541-9a16c.webp",srcSetWebp:"/static/2d_fft_cover-4ad30f3f24a5586fa3779ca825d5e541-9a16c.webp 1x,\n/static/2d_fft_cover-4ad30f3f24a5586fa3779ca825d5e541-c1dac.webp 1.5x,\n/static/2d_fft_cover-4ad30f3f24a5586fa3779ca825d5e541-cd83a.webp 2x,\n/static/2d_fft_cover-4ad30f3f24a5586fa3779ca825d5e541-abaa1.webp 3x"}}]}}}},{node:{excerpt:"在学习尺度空间 (spatial frequency) 之前，需要了解空间频率的概念 1. 视角 (visual angle) 视觉科学家利用度数 (degrees or minutes) 或者物体在视网膜占据的视角 (visual angle…",fields:{slug:"/spatial-frequency/",prefix:"2018-12-10"},frontmatter:{title:"spatial frequency",subTitle:"空间频率介绍",category:"DIP",cover:{children:[{__typename:"ImageSharp",resolutions:{width:90,height:90,src:"/static/dip_cover-314c6033d7856b495817769ce17d3b97-9e3e1.jpg",srcSet:"/static/dip_cover-314c6033d7856b495817769ce17d3b97-9e3e1.jpg 1x,\n/static/dip_cover-314c6033d7856b495817769ce17d3b97-670ee.jpg 1.5x,\n/static/dip_cover-314c6033d7856b495817769ce17d3b97-e72f0.jpg 2x,\n/static/dip_cover-314c6033d7856b495817769ce17d3b97-a0b5c.jpg 3x",srcWebp:"/static/dip_cover-314c6033d7856b495817769ce17d3b97-dc95d.webp",srcSetWebp:"/static/dip_cover-314c6033d7856b495817769ce17d3b97-dc95d.webp 1x,\n/static/dip_cover-314c6033d7856b495817769ce17d3b97-23c19.webp 1.5x,\n/static/dip_cover-314c6033d7856b495817769ce17d3b97-312b2.webp 2x,\n/static/dip_cover-314c6033d7856b495817769ce17d3b97-aa8fc.webp 3x"}}]}}}},{node:{excerpt:"在学习数字信号处理的时候，卷积是个让人又恨又爱的东西，一方面很难理解它的真实效果，初次接触非常难以建模，另一方面在信号处理中又十分常见。本文将介绍一下卷积的特点，以及离散系统的线性卷积和循环卷积运算，如何利用 FFT 计算卷积 1. 卷积 (convolution…",fields:{slug:"/1D-convolution/",prefix:"2018-12-08"},frontmatter:{title:"1D convolution",subTitle:"数字信号处理的一维卷积运算",category:"DSP",cover:{children:[{__typename:"ImageSharp",resolutions:{width:90,height:90,src:"/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-9e3e1.jpg",srcSet:"/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-9e3e1.jpg 1x,\n/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-670ee.jpg 1.5x,\n/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-e72f0.jpg 2x,\n/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-a0b5c.jpg 3x",srcWebp:"/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-dc95d.webp",srcSetWebp:"/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-dc95d.webp 1x,\n/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-23c19.webp 1.5x,\n/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-312b2.webp 2x,\n/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-aa8fc.webp 3x"}}]}}}},{node:{excerpt:"…",fields:{slug:"/FT-&-Laplace-Transform-&-Z-Transform/",prefix:"2018-12-08"},frontmatter:{title:"FT & Laplace Transform & Z Transform",subTitle:"傅里叶变换，拉普拉斯变换以及 Z 变换",category:"DSP",cover:{children:[{__typename:"ImageSharp",resolutions:{width:90,height:90,src:"/static/laplace_transform_cover-be402b550c4e8d2ff423bf0c67c43099-6d4e8.png",srcSet:"/static/laplace_transform_cover-be402b550c4e8d2ff423bf0c67c43099-6d4e8.png 1x,\n/static/laplace_transform_cover-be402b550c4e8d2ff423bf0c67c43099-ded4e.png 1.5x,\n/static/laplace_transform_cover-be402b550c4e8d2ff423bf0c67c43099-59342.png 2x,\n/static/laplace_transform_cover-be402b550c4e8d2ff423bf0c67c43099-92edc.png 3x",srcWebp:"/static/laplace_transform_cover-be402b550c4e8d2ff423bf0c67c43099-9a16c.webp",srcSetWebp:"/static/laplace_transform_cover-be402b550c4e8d2ff423bf0c67c43099-9a16c.webp 1x,\n/static/laplace_transform_cover-be402b550c4e8d2ff423bf0c67c43099-c1dac.webp 1.5x,\n/static/laplace_transform_cover-be402b550c4e8d2ff423bf0c67c43099-cd83a.webp 2x,\n/static/laplace_transform_cover-be402b550c4e8d2ff423bf0c67c43099-abaa1.webp 3x"}}]}}}},{node:{excerpt:"1. 系统的概念 凡是将信号加以变换以达到人们要求的各种设备都称为系统 用数学公式表示，将输入序列   映射成输出序列   的唯一变换或运算，用   表示，即 2. 线性移不变系统 2.1 线性性 线性性又称叠加原理 (superposition theorem…",fields:{slug:"/linear-time-invariant-system/",prefix:"2018-12-08"},frontmatter:{title:"Linear time invariant system",subTitle:"线性时不变系统介绍",category:"DSP",cover:{children:[{__typename:"ImageSharp",resolutions:{width:90,height:90,src:"/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-9e3e1.jpg",srcSet:"/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-9e3e1.jpg 1x,\n/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-670ee.jpg 1.5x,\n/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-e72f0.jpg 2x,\n/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-a0b5c.jpg 3x",srcWebp:"/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-dc95d.webp",srcSetWebp:"/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-dc95d.webp 1x,\n/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-23c19.webp 1.5x,\n/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-312b2.webp 2x,\n/static/dsp-cover-380963b4c5d6d12b797ac84afca2db56-aa8fc.webp 3x"}}]}}}},{node:{excerpt:"单纯地抽样和插值均会产生混叠，必须和低通滤波器配合使用，这是多相滤波器 (polyphase filter) 产生的基础。 1 抽样滤波器 根据前一节的知识， -Fold Decimation 只有在原始信号是 “Mth Band signal…",fields:{slug:"/polyphase-filter/",prefix:"2018-12-08"},frontmatter:{title:"polyphase filter",subTitle:"多相滤波器介绍",category:"DSP",cover:{children:[{__typename:"ImageSharp",resolutions:{width:90,height:90,src:"/static/digital_filter_cover-4cc04e4d67db5bcb60aba500616666f3-6d4e8.png",srcSet:"/static/digital_filter_cover-4cc04e4d67db5bcb60aba500616666f3-6d4e8.png 1x,\n/static/digital_filter_cover-4cc04e4d67db5bcb60aba500616666f3-ded4e.png 1.5x,\n/static/digital_filter_cover-4cc04e4d67db5bcb60aba500616666f3-59342.png 2x,\n/static/digital_filter_cover-4cc04e4d67db5bcb60aba500616666f3-92edc.png 3x",srcWebp:"/static/digital_filter_cover-4cc04e4d67db5bcb60aba500616666f3-9a16c.webp",srcSetWebp:"/static/digital_filter_cover-4cc04e4d67db5bcb60aba500616666f3-9a16c.webp 1x,\n/static/digital_filter_cover-4cc04e4d67db5bcb60aba500616666f3-c1dac.webp 1.5x,\n/static/digital_filter_cover-4cc04e4d67db5bcb60aba500616666f3-cd83a.webp 2x,\n/static/digital_filter_cover-4cc04e4d67db5bcb60aba500616666f3-abaa1.webp 3x"}}]}}}},{node:{excerpt:"傅里叶级数和傅里叶变换其实都是将原函数向 正交函数系 投影，在理解线性代数中正交向量的基础上，可以很快理解正交函数系的概念。 1. 预备知识 如果没有学过数值分析，可以跳过权函数，或者简单地理解为权函数 ，理解正交函数系的概念即可，因为这三种变换中权函数也都是为   的。 1.…",fields:{slug:"/FS-&-FFT/",prefix:"2018-12-08"},frontmatter:{title:"FS & FFT",subTitle:"傅里叶级数和傅里叶变换的关系",category:"DSP",cover:{children:[{__typename:"ImageSharp",resolutions:{width:90,height:90,src:"/static/fs-cover-ca5e384c179369edc3b89cddf5b2df09-6d4e8.png",srcSet:"/static/fs-cover-ca5e384c179369edc3b89cddf5b2df09-6d4e8.png 1x,\n/static/fs-cover-ca5e384c179369edc3b89cddf5b2df09-ded4e.png 1.5x,\n/static/fs-cover-ca5e384c179369edc3b89cddf5b2df09-59342.png 2x",srcWebp:"/static/fs-cover-ca5e384c179369edc3b89cddf5b2df09-9a16c.webp",srcSetWebp:"/static/fs-cover-ca5e384c179369edc3b89cddf5b2df09-9a16c.webp 1x,\n/static/fs-cover-ca5e384c179369edc3b89cddf5b2df09-c1dac.webp 1.5x,\n/static/fs-cover-ca5e384c179369edc3b89cddf5b2df09-cd83a.webp 2x"}}]}}}},{node:{excerpt:"…",fields:{slug:"/FT-DTFT-DTFS-&-DFT/",prefix:"2018-12-08"},frontmatter:{title:"FT DTFT DTFS & DFT",subTitle:"傅里叶变换和离散傅里叶变换介绍",category:"DSP",cover:{children:[{__typename:"ImageSharp",resolutions:{width:90,height:90,src:"/static/fs-cover-ca5e384c179369edc3b89cddf5b2df09-6d4e8.png",srcSet:"/static/fs-cover-ca5e384c179369edc3b89cddf5b2df09-6d4e8.png 1x,\n/static/fs-cover-ca5e384c179369edc3b89cddf5b2df09-ded4e.png 1.5x,\n/static/fs-cover-ca5e384c179369edc3b89cddf5b2df09-59342.png 2x",srcWebp:"/static/fs-cover-ca5e384c179369edc3b89cddf5b2df09-9a16c.webp",srcSetWebp:"/static/fs-cover-ca5e384c179369edc3b89cddf5b2df09-9a16c.webp 1x,\n/static/fs-cover-ca5e384c179369edc3b89cddf5b2df09-c1dac.webp 1.5x,\n/static/fs-cover-ca5e384c179369edc3b89cddf5b2df09-cd83a.webp 2x"}}]}}}},{node:{excerpt:"1. 矩阵偏导表示 首先要注意一个概念，numerator layout 和 denominator layout 的区别，下图展示了 6 种矩阵偏导的形式。但 numerator layout…",fields:{slug:"/matrix-derivative/",prefix:"2018-12-08"},frontmatter:{title:"matrix derivative",subTitle:"矩阵偏导介绍",category:"math",cover:{children:[{__typename:"ImageSharp",resolutions:{width:90,height:90,src:"/static/math-cover-e8ea255d97be55f4cfac0079c063f120-9e3e1.jpg",srcSet:"/static/math-cover-e8ea255d97be55f4cfac0079c063f120-9e3e1.jpg 1x,\n/static/math-cover-e8ea255d97be55f4cfac0079c063f120-670ee.jpg 1.5x,\n/static/math-cover-e8ea255d97be55f4cfac0079c063f120-e72f0.jpg 2x,\n/static/math-cover-e8ea255d97be55f4cfac0079c063f120-a0b5c.jpg 3x",srcWebp:"/static/math-cover-e8ea255d97be55f4cfac0079c063f120-dc95d.webp",srcSetWebp:"/static/math-cover-e8ea255d97be55f4cfac0079c063f120-dc95d.webp 1x,\n/static/math-cover-e8ea255d97be55f4cfac0079c063f120-23c19.webp 1.5x,\n/static/math-cover-e8ea255d97be55f4cfac0079c063f120-312b2.webp 2x,\n/static/math-cover-e8ea255d97be55f4cfac0079c063f120-aa8fc.webp 3x"}}]}}}},{node:{excerpt:"由于采样速率不匹配等原因，我们通常会对采集到的离散信号进行抽取(decimation)或者插值(interpolation)，或者在该过程中同时进行滤波操作 1. 梳状函数 (comb function) 1.…",fields:{slug:"/decimation-&-interpolation/",prefix:"2018-12-08"},frontmatter:{title:"decimation & interpolation",subTitle:"数字信号处理中的抽取和插值",category:"DSP",cover:{children:[{__typename:"ImageSharp",resolutions:{width:90,height:90,src:"/static/dsp-cover-4176efddcb5df9fd99dbcce58fbf5512-9e3e1.jpg",srcSet:"/static/dsp-cover-4176efddcb5df9fd99dbcce58fbf5512-9e3e1.jpg 1x,\n/static/dsp-cover-4176efddcb5df9fd99dbcce58fbf5512-670ee.jpg 1.5x,\n/static/dsp-cover-4176efddcb5df9fd99dbcce58fbf5512-e72f0.jpg 2x,\n/static/dsp-cover-4176efddcb5df9fd99dbcce58fbf5512-a0b5c.jpg 3x",srcWebp:"/static/dsp-cover-4176efddcb5df9fd99dbcce58fbf5512-dc95d.webp",srcSetWebp:"/static/dsp-cover-4176efddcb5df9fd99dbcce58fbf5512-dc95d.webp 1x,\n/static/dsp-cover-4176efddcb5df9fd99dbcce58fbf5512-23c19.webp 1.5x,\n/static/dsp-cover-4176efddcb5df9fd99dbcce58fbf5512-312b2.webp 2x,\n/static/dsp-cover-4176efddcb5df9fd99dbcce58fbf5512-aa8fc.webp 3x"}}]}}}},{node:{excerpt:"在  数字信号处理的卷积运算  基础上，本文介绍图像处理中的卷积运算。同时本文是续接在二维傅里叶变换之后。 在传统的一维数字信号处理中，有两种做法:  对于非实时信号，流程是    注意 : 实际计算中，信号进行 fft…",fields:{slug:"/Thinking-of-2D-convolution/",prefix:"2018-12-05"},frontmatter:{title:"Thinking of 2D convolution",subTitle:"二维卷积的介绍以及深度学习中的卷积层",category:"DIP",cover:{children:[{__typename:"ImageSharp",resolutions:{width:90,height:90,src:"/static/edge_conv-43097069e6b0f19a0c2658a8030e331b-6d4e8.png",srcSet:"/static/edge_conv-43097069e6b0f19a0c2658a8030e331b-6d4e8.png 1x,\n/static/edge_conv-43097069e6b0f19a0c2658a8030e331b-ded4e.png 1.5x,\n/static/edge_conv-43097069e6b0f19a0c2658a8030e331b-59342.png 2x,\n/static/edge_conv-43097069e6b0f19a0c2658a8030e331b-92edc.png 3x",srcWebp:"/static/edge_conv-43097069e6b0f19a0c2658a8030e331b-9a16c.webp",srcSetWebp:"/static/edge_conv-43097069e6b0f19a0c2658a8030e331b-9a16c.webp 1x,\n/static/edge_conv-43097069e6b0f19a0c2658a8030e331b-c1dac.webp 1.5x,\n/static/edge_conv-43097069e6b0f19a0c2658a8030e331b-cd83a.webp 2x,\n/static/edge_conv-43097069e6b0f19a0c2658a8030e331b-abaa1.webp 3x"}}]}}}},{node:{excerpt:"1. Python 入门篇 廖雪峰的 Python 教程   推荐看到 正则表达式就可以了，前面如果不懂，可以利用丰富的网上资源查找资料，不用只局限一篇博客 书籍:  Learning Python…",fields:{slug:"/AI-ML-Learning-Path/",prefix:"2018-12-04"},frontmatter:{title:"AI ML Learning Path",subTitle:"机器学习新手学习路线",category:"AI",cover:{children:[{__typename:"ImageSharp",resolutions:{width:90,height:90,src:"/static/ai-f89a04b44bc8c4f392f9256e7c1a247c-9e3e1.jpg",srcSet:"/static/ai-f89a04b44bc8c4f392f9256e7c1a247c-9e3e1.jpg 1x,\n/static/ai-f89a04b44bc8c4f392f9256e7c1a247c-670ee.jpg 1.5x,\n/static/ai-f89a04b44bc8c4f392f9256e7c1a247c-e72f0.jpg 2x,\n/static/ai-f89a04b44bc8c4f392f9256e7c1a247c-a0b5c.jpg 3x",srcWebp:"/static/ai-f89a04b44bc8c4f392f9256e7c1a247c-dc95d.webp",srcSetWebp:"/static/ai-f89a04b44bc8c4f392f9256e7c1a247c-dc95d.webp 1x,\n/static/ai-f89a04b44bc8c4f392f9256e7c1a247c-23c19.webp 1.5x,\n/static/ai-f89a04b44bc8c4f392f9256e7c1a247c-312b2.webp 2x,\n/static/ai-f89a04b44bc8c4f392f9256e7c1a247c-aa8fc.webp 3x"}}]}}}},{node:{excerpt:"在之前  矩阵偏导  一文中提到，我们通常采用 numerator layout 的格式表示偏导矩阵。 但是 !!!!!! 在 back propagation 中，我们应当采用 denominator layout…",fields:{slug:"/Back-propagation-based-on-matrix-derivative/",prefix:"2018-12-04"},frontmatter:{title:"Back propagation bases on matrix derivatite",subTitle:"利用矩阵偏导公式推导后向传播算法",category:"AI",cover:{children:[{__typename:"ImageSharp",resolutions:{width:90,height:90,src:"/static/bp-2c1d7428583927bc8ad4c2f14d770b75-9e3e1.jpg",srcSet:"/static/bp-2c1d7428583927bc8ad4c2f14d770b75-9e3e1.jpg 1x,\n/static/bp-2c1d7428583927bc8ad4c2f14d770b75-670ee.jpg 1.5x,\n/static/bp-2c1d7428583927bc8ad4c2f14d770b75-e72f0.jpg 2x,\n/static/bp-2c1d7428583927bc8ad4c2f14d770b75-a0b5c.jpg 3x",srcWebp:"/static/bp-2c1d7428583927bc8ad4c2f14d770b75-dc95d.webp",srcSetWebp:"/static/bp-2c1d7428583927bc8ad4c2f14d770b75-dc95d.webp 1x,\n/static/bp-2c1d7428583927bc8ad4c2f14d770b75-23c19.webp 1.5x,\n/static/bp-2c1d7428583927bc8ad4c2f14d770b75-312b2.webp 2x,\n/static/bp-2c1d7428583927bc8ad4c2f14d770b75-aa8fc.webp 3x"}}]}}}},{node:{excerpt:"在了解 全连接层反向传播的机理后，我在 Google 上找了一圈，都没有找到讲得很好的 CNN 反向传播的计算，本想通过研究 Pytorch 源码分析算法原理，发现 Pytorch 底层是调用 C 代码的，也就不了了之了。最近在学习 Darknet…",fields:{slug:"/DarkNet-CNN-Analyse/",prefix:"2018-12-04"},frontmatter:{title:"DarkNet CNN Analyse",subTitle:"介绍 DarkNet CNN 实现原理",category:"AI",cover:{children:[{__typename:"ImageSharp",resolutions:{width:90,height:90,src:"/static/darknet-a128141842710e6137de63943fa20758-6d4e8.png",srcSet:"/static/darknet-a128141842710e6137de63943fa20758-6d4e8.png 1x,\n/static/darknet-a128141842710e6137de63943fa20758-ded4e.png 1.5x,\n/static/darknet-a128141842710e6137de63943fa20758-59342.png 2x",srcWebp:"/static/darknet-a128141842710e6137de63943fa20758-9a16c.webp",srcSetWebp:"/static/darknet-a128141842710e6137de63943fa20758-9a16c.webp 1x,\n/static/darknet-a128141842710e6137de63943fa20758-c1dac.webp 1.5x,\n/static/darknet-a128141842710e6137de63943fa20758-cd83a.webp 2x"}}]}}}},{node:{excerpt:"本文主要介绍 Python 变量作用域 (Scope)。 1. 什么是 Scope 所谓作用域 (scope): 变量第一次赋值的位置决定了变量在代码中可见的范围，即变量能被使用的范围，这就是变量的作用域。  The place where you assign a name…",fields:{slug:"/python-scope/",prefix:"2018-12-04"},frontmatter:{title:"Python scope",subTitle:"Python 作用域 (变量使用范围)",category:"python",cover:{children:[{__typename:"ImageSharp",resolutions:{width:90,height:90,src:"/static/python_icon-c3425da5d7e58f0cf6ff6f59584493f2-9e3e1.jpg",srcSet:"/static/python_icon-c3425da5d7e58f0cf6ff6f59584493f2-9e3e1.jpg 1x,\n/static/python_icon-c3425da5d7e58f0cf6ff6f59584493f2-670ee.jpg 1.5x,\n/static/python_icon-c3425da5d7e58f0cf6ff6f59584493f2-e72f0.jpg 2x",srcWebp:"/static/python_icon-c3425da5d7e58f0cf6ff6f59584493f2-dc95d.webp",srcSetWebp:"/static/python_icon-c3425da5d7e58f0cf6ff6f59584493f2-dc95d.webp 1x,\n/static/python_icon-c3425da5d7e58f0cf6ff6f59584493f2-23c19.webp 1.5x,\n/static/python_icon-c3425da5d7e58f0cf6ff6f59584493f2-312b2.webp 2x"}}]}}}},{node:{excerpt:"最近在看 YoLo 源码的时候，发现原作者使用的是一个叫 DarkNet 的神经网络库，地址如下:  https://github.com/pjreddie/darknet Darknet is an open source neural network framework…",fields:{slug:"/DarkNet-Framework-Introduction/",prefix:"2018-12-04"},frontmatter:{title:"DarkNet Framework Introduction",subTitle:"介绍 DarkNet 神经网络框架的源码实现",category:"AI",cover:{children:[{__typename:"ImageSharp",resolutions:{width:90,height:90,src:"/static/darknet-a128141842710e6137de63943fa20758-6d4e8.png",srcSet:"/static/darknet-a128141842710e6137de63943fa20758-6d4e8.png 1x,\n/static/darknet-a128141842710e6137de63943fa20758-ded4e.png 1.5x,\n/static/darknet-a128141842710e6137de63943fa20758-59342.png 2x",srcWebp:"/static/darknet-a128141842710e6137de63943fa20758-9a16c.webp",srcSetWebp:"/static/darknet-a128141842710e6137de63943fa20758-9a16c.webp 1x,\n/static/darknet-a128141842710e6137de63943fa20758-c1dac.webp 1.5x,\n/static/darknet-a128141842710e6137de63943fa20758-cd83a.webp 2x"}}]}}}},{node:{excerpt:"1. 安装 Ubuntu 16.04 这一步就不说了，网上很多教程，几点建议:  请不要尝试 Ubuntu 18.04，新版本 bug 比较多 下载地址:  Ubuntu 16.04 Desktop (64-bit) 系统语言选英文，主要是有助于 shell…",fields:{slug:"/Ubuntu-16.04-cuda-+-pytorch/",prefix:"2018-12-04"},frontmatter:{title:"Ubuntu 16.04 cuda + pytorch",subTitle:"Ubuntu 16.04 系统 安装 cuda , pytorch 流程",category:"AI",cover:{children:[{__typename:"ImageSharp",resolutions:{width:90,height:90,src:"/static/NVIDIA_CUDA-a8eed72c9503cf265dbb6f5ed84d0400-9e3e1.jpg",srcSet:"/static/NVIDIA_CUDA-a8eed72c9503cf265dbb6f5ed84d0400-9e3e1.jpg 1x,\n/static/NVIDIA_CUDA-a8eed72c9503cf265dbb6f5ed84d0400-670ee.jpg 1.5x,\n/static/NVIDIA_CUDA-a8eed72c9503cf265dbb6f5ed84d0400-e72f0.jpg 2x,\n/static/NVIDIA_CUDA-a8eed72c9503cf265dbb6f5ed84d0400-a0b5c.jpg 3x",srcWebp:"/static/NVIDIA_CUDA-a8eed72c9503cf265dbb6f5ed84d0400-dc95d.webp",srcSetWebp:"/static/NVIDIA_CUDA-a8eed72c9503cf265dbb6f5ed84d0400-dc95d.webp 1x,\n/static/NVIDIA_CUDA-a8eed72c9503cf265dbb6f5ed84d0400-23c19.webp 1.5x,\n/static/NVIDIA_CUDA-a8eed72c9503cf265dbb6f5ed84d0400-312b2.webp 2x,\n/static/NVIDIA_CUDA-a8eed72c9503cf265dbb6f5ed84d0400-aa8fc.webp 3x"}}]}}}},{node:{excerpt:"之前的一篇博客  利用 matrix derivative 思考 back propagation  介绍了反向传播的公式推导。 主要公式如下:  看完公式，你应该知道，根据梯度下降，如果我们想更新第   层的   (weight) 和   (bias…",fields:{slug:"/a-primary-neural-network-framwork-by-python/",prefix:"2018-12-04"},frontmatter:{title:"a primary neural network framework by python",subTitle:"使用 Python 编写的一个初步的神经网络框架，包含后向传播",category:"AI",cover:{children:[{__typename:"ImageSharp",resolutions:{width:90,height:90,src:"/static/nn-cover-6ccbad2ba089eb26d198108e2aac6872-6d4e8.png",srcSet:"/static/nn-cover-6ccbad2ba089eb26d198108e2aac6872-6d4e8.png 1x,\n/static/nn-cover-6ccbad2ba089eb26d198108e2aac6872-ded4e.png 1.5x,\n/static/nn-cover-6ccbad2ba089eb26d198108e2aac6872-59342.png 2x,\n/static/nn-cover-6ccbad2ba089eb26d198108e2aac6872-92edc.png 3x",srcWebp:"/static/nn-cover-6ccbad2ba089eb26d198108e2aac6872-9a16c.webp",srcSetWebp:"/static/nn-cover-6ccbad2ba089eb26d198108e2aac6872-9a16c.webp 1x,\n/static/nn-cover-6ccbad2ba089eb26d198108e2aac6872-c1dac.webp 1.5x,\n/static/nn-cover-6ccbad2ba089eb26d198108e2aac6872-cd83a.webp 2x,\n/static/nn-cover-6ccbad2ba089eb26d198108e2aac6872-abaa1.webp 3x"}}]}}}}]},pages:{edges:[{node:{fields:{slug:"/about/",prefix:"1"},frontmatter:{title:"About",menuTitle:null}}},{node:{fields:{slug:"/cheatsheets/",prefix:"2"},frontmatter:{title:"快捷键和命令",menuTitle:"Cheatsheet"}}}]},parts:{edges:[{node:{html:"<p>我是一名数据工程师，对硬件有浓厚的兴趣。</p>",frontmatter:{title:"author"}}},{node:{html:'<ul>\n<li>this is a site built by <a href="https://www.gatsbyjs.org/">GatsbyJS</a>, ReactJs, CSS in JS</li>\n<li>delivered by <a href="https://pages.github.com/">Github Page</a></li>\n</ul>',frontmatter:{title:"footnote"}}},{node:{html:"<p>I am a data-science engineer with also interests in React and Hardware. </p>",frontmatter:{title:"info"}}}]}},layoutContext:{}}}});
//# sourceMappingURL=path----4263ed993e4dab39f165.js.map