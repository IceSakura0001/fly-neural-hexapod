# NBS 六足机器人 V5 URDF

来自 `长方形布局实验/装配体/NBSV5.Test.SLDASM`，通过 SolidWorks 导出整机 STEP 后生成。

## 使用哪个文件

- `nbs_hexapod.urdf`：通用版本，网格使用相对于文件所在目录的 `meshes/` 路径。适合支持相对网格路径的仿真器和机器人软件。
- `nbs_hexapod_ros.urdf`：ROS 版本，使用 `package://nbs_hexapod_description/meshes/`。
- `mujoco_drop_test.xml`：已验证的 MuJoCo 浮动基座示例；初始基座抬高 0.5 m，加入地面和重力，没有控制器。这个示例用于验证动力学加载，机器人会自由落下。
- `load_mujoco.py`：兼容 Windows 中文路径的 MuJoCo 加载器。
- `initial_pose.png`：从 CAD 网格绘制的初始姿态。
- `mass_properties.csv`：各连杆质量、局部质心和质心处惯量，SI 单位。
- `geometry_manifest.json`：原始零件到连杆的映射、体积、单位质量惯量和装配变换。
- `validation_report.json`：验证结果。

移动模型时，请连同 `meshes/` 文件夹一起移动。原始 SolidWorks 文件没有修改。

安装 MuJoCo 后，可在当前目录运行 `python load_mujoco.py` 打开落地示例，或运行 `python load_mujoco.py --headless --seconds 3` 做无界面测试。直接测试 URDF 使用 `python load_mujoco.py nbs_hexapod.urdf --headless`；导入 URDF 时 MuJoCo 默认固定根节点。此加载器通过内存传入 XML 和网格，兼容当前中文目录名。

## 结构和坐标

25 个连杆，24 个关节，其中 18 个 `continuous`，6 个 `fixed`。

每条腿：`base_link → hip → thigh → calf → foot`。Foot 与 Calf 固定连接。Hip、Thigh 内的电机随所属连杆运动；Body 内的六个电机归入 base_link。共保留 43 个 CAD 零件实例。

所有关节角为 0 时，精确还原导出时的 SolidWorks 初始装配姿态。所有长度由 CAD 毫米转换为米。根坐标系保留顶层装配体轴方向：Z 向上，选取 +X 为前、+Y 为左。模型本身没有额外的地面固定关节。

| 前缀 | 位置 | SolidWorks 实例 | Hip 轴 XY，m |
|---|---|---|---|
| lf | 左前 | Leg&lt;6&gt; | (0.23, 0.23) |
| lm | 左中 | Leg&lt;1&gt; | (0, 0.23) |
| lr | 左后 | Leg&lt;2&gt; | (-0.23, 0.23) |
| rf | 右前 | Leg&lt;5&gt; | (0.23, -0.23) |
| rm | 右中 | Leg&lt;4&gt; | (0, -0.23) |
| rr | 右后 | Leg&lt;3&gt; | (-0.23, -0.23) |

Hip 转轴为 +Z，正方向是从上方看逆时针；Thigh 和 Calf 转轴沿前后方向，左侧 +X、右侧 -X，所以初始姿态下两侧正转都使足端抬高。轴线取自实际圆柱配合几何；轴线上原点的选取不改变旋转运动。

Hip 原点高度为 0；Thigh 轴高度为 0.065 m；Thigh 到 Calf 的轴间距为 0.25 m；Calf 轴到 Foot 球心的距离为 0.35 m。Foot 球半径为 0.02 m。

按用户要求，**未设置关节角度限位、扭矩上限或转速上限**，URDF 中无 `limit` 元素。未添加驱动器、控制器、摩擦或阻尼假设。

## 质量与惯量

按用户指定，所有零件统一视为均匀 6061 铝合金，密度 **2700 kg/m³**。包括简化电机、Foot 和机身实体。体积、质心、惯量来自精确 CAD BRep 实体积分，不依赖碰撞凸包或显示三角网格的体积。

采用 `mass = density × volume`；组合连杆通过旋转惯量张量和平行轴定理合并各零件。URDF 的惯量均表达在连杆坐标轴方向、位于对应质心处，单位 kg·m²，完整保留非对角项。

**整机计算质量：107.634776965 kg**。其中机身零件为 64.091300863 kg，单个简化电机为 0.814300816 kg。这是当前实体形体按统一密度计算的结果；实体机身块没有被自行改成空心结构。

密度资料可参考 [Hydro 的 6061 数据表](https://www.hydro.com/globalassets/01-products--services/extruded-profiles/americas/ena-resources/alloy-data-sheets/hydro_2019_data_sheet_6061.pdf) 和 [INL 材料报告中的 6061 密度表](https://inldigitallibrary.inl.gov/sites/sti/sti/5922043.pdf)。

显示网格为米单位 STL。碰撞几何使用分解后的凸体，保留机身和支架的主要凹形结构；简化电机采用精确尺寸圆柱，Foot 采用精确尺寸球。凸分解仍是碰撞近似，不影响质量与惯量计算。

## 修改材料密度或质量

编辑 `dynamics_parameters.json` 后运行：

```text
python update_dynamics.py
```

此脚本仅需要 Python 3 标准库，会同步更新两个 URDF 的质量和惯量。`part_mass_overrides_kg` 可以对一种零件设置单件质量，默认空字典，全部按密度与体积计算。若修改参数，`mass_properties.csv`、MuJoCo 示例和验证报告是交付时的快照，需要另行重新生成。

## ROS 2 显示

将整个文件夹复制到 ROS 2 工作区 `src/nbs_hexapod_description` 后：

```bash
colcon build --packages-select nbs_hexapod_description
source install/setup.bash
ros2 launch nbs_hexapod_description display.launch.py
```

需要安装 `robot_state_publisher`、`joint_state_publisher_gui` 和 `rviz2`。关节滑块的 UI 显示范围不会写入 URDF 作为机械限位。此处提供了显示启动文件，未在本机安装 ROS 2 进行运行测试。

## 验证范围

- URDF 解析和结构验证通过，全部引用网格存在且封闭。
- 25 个连杆均具有正质量；惯量正定并满足主惯量三角不等式。
- 零位连杆与网格变换对 CAD 的最大数值差约 4.97×10⁻¹²；STL 使用单精度坐标，另有正常的网格离散误差。
- 六条腿的三条转轴均通过足端运动数值差分检查。
- MuJoCo 3.16.0：原 URDF 固定基座积分 2000 步；浮动基座落地示例以 0.001 s 步长积分 3000 步。状态数值有限，物理引擎警告为 0。

没有添加步态、执行器和接触参数标定；使用仿真器默认接触参数。指定的初始姿态是展平状态，自由关节在重力下不会自动保持此姿态。
