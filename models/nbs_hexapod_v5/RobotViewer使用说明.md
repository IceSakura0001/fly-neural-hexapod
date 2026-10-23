# Robot Viewer 打开和关节检查

在 https://viewer.robotsfan.com/ 点击“加载文件夹”，选择本 URDF 文件夹，然后在左侧明确点击 **nbs_hexapod.urdf**。

整个文件夹还包含 MuJoCo 测试场景；本次实测发现，Robot Viewer 自动先打开 `mujoco_drop_test.xml`。该场景列表中的 `floating_base` 是六自由度浮动基座，不是腿部转轴，不适合用这个查看器的单一旋转滑块测试腿部运动。

正确选中主 URDF 后，活动关节列表从 `lm_hip_joint` 开始，不包含 `floating_base`。

- `*_hip_joint`：髋部绕竖直轴摆动，整条腿一起运动。
- `*_thigh_joint`：大腿抬升/下摆，小腿和足端随动。
- `*_calf_joint`：小腿屈伸，足端随动。
- `*_foot_fixed`：固定连接，足端不单独转动。

可以拖动左下角“关节”面板中的滑块，或修改关节当前角度输入框。截图中的绿色关节轴是可视化辅助；空白处拖动用于旋转视角。

本次检查已在 Robot Viewer 中加载主 URDF，实际调节髋关节并观察到腿部运动；页面也显示了左中腿的屈膝姿态。另用运动学解析器逐一将全部 18 个活动关节单独设置为 30°，足端均产生非零位移，结果见 `joint_motion_check.csv`。

URDF 文件本身未更改，也未添加角度限位、扭矩或转速设置。界面滑块显示的数值范围是查看器 UI 的调节范围，不是 URDF 的机械限位。
