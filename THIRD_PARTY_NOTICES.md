# 数据与算法来源

## MaleCNS v1.0

数据提供方：HHMI Janelia FlyEM、University of Cambridge、MRC Laboratory of Molecular Biology、Google Research 及 MaleCNS 项目合作者。

来源：https://male-cns.janelia.org/ ，下载：https://male-cns.janelia.org/download/ 。

许可：Creative Commons Attribution 4.0 International，https://creativecommons.org/licenses/by/4.0/ 。

本项目的变更：选择下行/VNC 相关的已追踪细胞及其诱导子图；依预测递质赋予快速效应符号；将注释整理为运行时 JSON 与 CSR 数据；增加工程层感觉编码、肌群读出、机器人关节投影。未修改原始官方文件。完整 SHA256 在 metadata.json。缓存不是完整连接组，也不附带原始约 1.1 GB 权重表。

## LIF 模型参考

Shiu et al. (2024), A Drosophila computational brain model reveals sensorimotor processing. Nature 634, 210–219. https://doi.org/10.1038/s41586-024-07763-9 。

本项目的简化 LIF 内核和部分稳定化假设参考 HEREISCB/flybrain 的 brain.py / cpu.py / connectome.py，固定检视版本 c7878b9ee273564186acf8cbdef96289335efa5e，https://github.com/HEREISCB/flybrain/tree/c7878b9ee273564186acf8cbdef96289335efa5e 。本项目没有打包或运行上游完整应用。

以下保留上游 MIT 许可声明：

MIT License

Copyright (c) 2026 FlyBrain contributors
Portions copyright (c) 2026 tel0s (flyverse, https://github.com/tel-0s/flyverse), used under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
