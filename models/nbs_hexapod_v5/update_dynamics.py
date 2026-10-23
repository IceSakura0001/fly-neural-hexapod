"""Update inertias and joint limits using Python 3 standard library only."""
import json, math, xml.etree.ElementTree as ET
from pathlib import Path
ROOT=Path(__file__).resolve().parent
def add(a,b): return [x+y for x,y in zip(a,b)]
def outer(a): return [[x*y for y in a] for x in a]
def fmt(v): return ' '.join(f'{x:.12g}' for x in v)
def main():
    cfg=json.loads((ROOT/'dynamics_parameters.json').read_text(encoding='utf-8'))
    geo=json.loads((ROOT/'geometry_manifest.json').read_text(encoding='utf-8'))
    tree=ET.parse(ROOT/'nbs_hexapod.urdf');robot=tree.getroot();total=0
    for link in robot.findall('link'):
        parts=geo['links'][link.attrib['name']]['parts']
        masses=[cfg.get('part_mass_overrides_kg',{}).get(p['type'],cfg['density_kg_m3']*p['volume_m3']) for p in parts]
        if any(m<=0 for m in masses):raise ValueError('All masses must be positive')
        mass=sum(masses);total+=mass
        com=[sum(m*p['com'][i] for m,p in zip(masses,parts))/mass for i in range(3)]
        I=[[0.0]*3 for _ in range(3)]
        for m,p in zip(masses,parts):
            d=[p['com'][i]-com[i] for i in range(3)];dd=sum(x*x for x in d)
            for i in range(3):
                for j in range(3):I[i][j]+=m*(p['inertia_per_kg'][i][j]+(dd if i==j else 0)-d[i]*d[j])
        old=link.find('inertial')
        if old is not None:link.remove(old)
        inert=ET.SubElement(link,'inertial');ET.SubElement(inert,'origin',xyz=fmt(com),rpy='0 0 0');ET.SubElement(inert,'mass',value=f'{mass:.12g}')
        ET.SubElement(inert,'inertia',**{k:f'{I[i][j]:.12g}' for k,i,j in [('ixx',0,0),('ixy',0,1),('ixz',0,2),('iyy',1,1),('iyz',1,2),('izz',2,2)]})
    # User requested continuous joints without position/effort/velocity limits.
    for joint in robot.findall('joint'):
        if joint.attrib['type']=='fixed':continue
        joint.set('type','continuous')
        for limit in joint.findall('limit'):joint.remove(limit)
    ET.indent(tree,space='  ');tree.write(ROOT/'nbs_hexapod.urdf',encoding='utf-8',xml_declaration=True)
    # ROS package URI variant, for RViz and other ROS consumers.
    for mesh in robot.findall('.//mesh'):
        mesh.set('filename','package://nbs_hexapod_description/'+mesh.get('filename'))
    tree.write(ROOT/'nbs_hexapod_ros.urdf',encoding='utf-8',xml_declaration=True)
    print(f'Updated 25 links; total calculated mass = {total:g} kg. Parameter status: {cfg["status"]}')
if __name__=='__main__':main()
