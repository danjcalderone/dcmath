const _0x13c791=_0x11c2;(function(_0x292f5b,_0x21b49c){const _0x2f9b09=_0x11c2,_0x4bbc23=_0x292f5b();while(!![]){try{const _0x514e92=parseInt(_0x2f9b09(0xca))/0x1*(parseInt(_0x2f9b09(0xd8))/0x2)+-parseInt(_0x2f9b09(0xee))/0x3*(parseInt(_0x2f9b09(0xd7))/0x4)+-parseInt(_0x2f9b09(0x138))/0x5+parseInt(_0x2f9b09(0x122))/0x6+parseInt(_0x2f9b09(0x12c))/0x7+-parseInt(_0x2f9b09(0xfc))/0x8*(-parseInt(_0x2f9b09(0xc7))/0x9)+parseInt(_0x2f9b09(0xac))/0xa*(-parseInt(_0x2f9b09(0xc9))/0xb);if(_0x514e92===_0x21b49c)break;else _0x4bbc23['push'](_0x4bbc23['shift']());}catch(_0x50959e){_0x4bbc23['push'](_0x4bbc23['shift']());}}}(_0xda95,0x3012c));import{NDRAW,ndraw,writeMatrix}from'./ndrawo.js';import{coord2n,cumSum,cumSum2}from'./ndimo.js';Pts[_0x13c791(0xb9)](window);export var space=new CanvasSpace('#hypershape');export var container=_0x13c791(0xb1);function _0x11c2(_0x1c6e82,_0x5f3def){const _0xda9559=_0xda95();return _0x11c2=function(_0x11c261,_0x47f38e){_0x11c261=_0x11c261-0xa3;let _0xb72d29=_0xda9559[_0x11c261];return _0xb72d29;},_0x11c2(_0x1c6e82,_0x5f3def);}export var form=space[_0x13c791(0xc8)]();export var pens={'pen0':{'sz':0xa,'lw':0x2,'lrgba':_0x13c791(0x12e),'frgba':'rgba(0,0,0,0.1)'},'pen1':{'sz':0xa,'lw':0x2,'lrgba':_0x13c791(0x12e),'frgba':'rgba(0,0,0,0.1)'},'hpen1':{'sz':0xa,'lw':0x6,'lrgba':_0x13c791(0x12e),'frgba':_0x13c791(0xfa)},'hpen2':{'sz':0xa,'lw':0x4,'lrgba':_0x13c791(0xfd),'frgba':'rgba(200,0,0,0.1)'},'hpen3':{'sz':0xa,'lw':0x1,'lrgba':_0x13c791(0x12e),'frgba':_0x13c791(0xfa)},'pen2':{'sz':0xa,'lw':0x2,'lrgba':_0x13c791(0x12e),'frgba':'rgba(0,0,0,0.1)'},'pen3':{'sz':0xa,'lw':0x2,'lrgba':_0x13c791(0x12e),'frgba':_0x13c791(0xfa)}};export var obj1={'name':_0x13c791(0xd6),'container':_0x13c791(0xb1),'sx':0x5,'scale':0x19,'objNames':[_0x13c791(0xb0),_0x13c791(0xad),_0x13c791(0x139),_0x13c791(0x106)],'resize':function(){const _0x83a7d2=_0x13c791;for(let _0x4d54d5=0x0;_0x4d54d5<this[_0x83a7d2(0x100)][_0x83a7d2(0xf8)];_0x4d54d5++){let _0x217aca=this[_0x83a7d2(0x100)][_0x4d54d5];for(const _0xc17665 in this[_0x217aca]){!([_0x83a7d2(0xdf),_0x83a7d2(0x116),_0x83a7d2(0x11a)]['indexOf'](_0xc17665)>=0x0)&&(this[_0x217aca][_0xc17665]['sx']=this[_0x217aca][_0xc17665][_0x83a7d2(0xe0)]*this['sx']);}}},'Cobj':{'pens':pens,'coords':{'on':![],'type':_0x13c791(0xf3),'sx0':0x1,'sx':0x1,'orig':_0x13c791(0xc3),'axes':_0x13c791(0x11e),'hon':!![],'hind':[],'hpen':'pen1'}},'Dobj':{'pens':pens,'coords':{'on':![],'type':_0x13c791(0xf3),'sx0':0x1,'sx':0x1,'orig':_0x13c791(0xc3),'axes':'axes1','hon':!![],'hind':[0x0],'hpen':_0x13c791(0x10a)}},'AXIS1':{'dims':[0x3,0x3],'maxdims':[0x8,0x8],'pens':pens,'pts':{'on':![],'type':_0x13c791(0xc4),'sx0':0x1,'sx':0x1,'orig':'orig1','axes':_0x13c791(0x134),'pen':_0x13c791(0xc1)},'axes1':{'on':!![],'type':'stems','sx0':0x1*0.7,'sx':0x1*0.7,'orig':_0x13c791(0xe1),'axes':_0x13c791(0x13d),'pen':_0x13c791(0xf5)},'hulls':{'on':!![],'type':_0x13c791(0xcd),'sx0':0x1,'sx':0x1,'orig':_0x13c791(0xe1),'axes':_0x13c791(0x13d),'pen':_0x13c791(0xf5)},'simps':{'on':![],'type':_0x13c791(0xed),'sx0':0x1,'sx':0x1,'orig':_0x13c791(0xe1),'axes':_0x13c791(0x13d),'pen':_0x13c791(0xf5)},'spheres':{'type':'spheres','on':![],'sx0':0x1,'sx':0x1,'orig':_0x13c791(0xe1),'axes':_0x13c791(0x13d),'pen':'pen0'},'cubes':{'type':_0x13c791(0x12b),'on':![],'sx0':0x1,'sx':0x1,'orig':_0x13c791(0xe1),'axes':_0x13c791(0x13d),'pen':'pen0'},'update':function(){const _0x2de6cd=_0x13c791;obj1[_0x2de6cd(0x139)][_0x2de6cd(0xc4)]['on']=![],obj1[_0x2de6cd(0x139)][_0x2de6cd(0xcd)]['on']=![],obj1[_0x2de6cd(0x139)][_0x2de6cd(0xed)]['on']=![],obj1[_0x2de6cd(0x139)][_0x2de6cd(0x12b)]['on']=![],obj1['AXIS1'][_0x2de6cd(0xba)]['on']=![];let _0x203a34=obj1['levers']['lever2'][_0x2de6cd(0xdd)];_0x203a34==0x0&&(this[_0x2de6cd(0xc4)]['on']=!![]),_0x203a34==0x1&&(this[_0x2de6cd(0xcd)]['on']=!![],this['simps']['on']=!![]),_0x203a34==0x2&&(this[_0x2de6cd(0x12b)]['on']=!![]),_0x203a34==0x3&&(this[_0x2de6cd(0xba)]['on']=!![]);}},'Aobj':{'dims':[0x3,0x3],'maxdims':[0x8,0x8],'pens':pens,'pts':{'on':![],'type':_0x13c791(0xc4),'sx0':0x1,'sx':0x1,'orig':_0x13c791(0xc3),'axes':_0x13c791(0x134),'pen':'pen1'},'axes1':{'on':!![],'type':_0x13c791(0xbc),'sx0':0x1*0.7,'sx':0x1*0.7,'orig':'orig1','axes':_0x13c791(0x134),'pen':_0x13c791(0xf5)},'stems':{'on':![],'type':_0x13c791(0xbc),'sx0':0x1,'sx':0x1,'orig':_0x13c791(0xc3),'axes':'axes1','pen':_0x13c791(0xf5),'hon':!![],'hpen':_0x13c791(0xe8),'hind':[]},'boxes':{'on':![],'type':'boxes','sx0':0x1,'sx':0x1,'orig':_0x13c791(0x111),'shifts':_0x13c791(0x13f),'dims':'dim1','hon':!![],'hpen':_0x13c791(0xf7),'hind':[]},'lines':{'on':![],'type':_0x13c791(0x10b),'sx0':0x1,'sx':0x1,'orig':_0x13c791(0xc3),'axes':_0x13c791(0x134),'pen':_0x13c791(0xf5)},'arrows':{'on':![],'type':_0x13c791(0xbd),'sx0':0x1,'sx':0x1,'orig':_0x13c791(0xc3),'axes':_0x13c791(0x134),'pen':_0x13c791(0xf5)},'hulls':{'on':!![],'type':_0x13c791(0xcd),'sx':0x1,'sx':0x1,'orig':_0x13c791(0xc3),'axes':_0x13c791(0x134),'pen':_0x13c791(0xf5)},'simps':{'on':![],'type':'simps','sx0':0x1,'sx':0x1,'orig':_0x13c791(0xc3),'axes':'axes1','pen':_0x13c791(0xf5)},'spheres':{'type':_0x13c791(0xba),'on':![],'sx0':0x1,'sx':0x1,'orig':'orig1','axes':_0x13c791(0x134),'pen':'pen0'},'cubes':{'type':_0x13c791(0x12b),'on':![],'sx0':0x1,'sx':0x1,'orig':_0x13c791(0xc3),'axes':_0x13c791(0x134),'pen':'pen0'},'cube_highlights':{'type':_0x13c791(0x131),'on':![],'sx0':0x1,'sx':0x1,'orig':_0x13c791(0xc3),'axes':_0x13c791(0x134),'hon':![],'hind':[0x1],'hpen':_0x13c791(0xe8)},'update':function(){const _0x1cf299=_0x13c791;obj1[_0x1cf299(0x106)][_0x1cf299(0xc4)]['on']=![],obj1[_0x1cf299(0x106)][_0x1cf299(0xcd)]['on']=![],obj1['Aobj']['simps']['on']=![],obj1['Aobj'][_0x1cf299(0x12b)]['on']=![],obj1['Aobj'][_0x1cf299(0xba)]['on']=![];let _0x164ed0=obj1[_0x1cf299(0xe4)][_0x1cf299(0xd9)][_0x1cf299(0xdd)];_0x164ed0==0x0&&(this[_0x1cf299(0xc4)]['on']=!![]),_0x164ed0==0x1&&(this[_0x1cf299(0xcd)]['on']=!![],this['simps']['on']=!![]),_0x164ed0==0x2&&(this[_0x1cf299(0x12b)]['on']=!![]),_0x164ed0==0x3&&(this[_0x1cf299(0xba)]['on']=!![]);}},'equations':{'sx':0x1,'sx0':0x1,'resize':function(){const _0x383883=_0x13c791;for(const _0x587052 in this[_0x383883(0xb6)]){this[_0x383883(0xb6)][_0x587052]['sx']=this['matrices'][_0x587052][_0x383883(0xe0)]*obj1['sx'];}},'vals':0x0,'loc':[-0xc8,0xc8],'widths':[0x41,0x0,0x0],'heights':[0x0],'wbuff':0x2,'hbuff':0x0,'wmargins':[],'hmargins':[],'show':math['zeros'](0x1,0x3)[_0x13c791(0x103)],'matrices':{'y':{'vals':0x0,'sx0':0x1,'sx':0x1,'loc':[0x0,0x0],'loc_inds':[0x0,0x0],'shift':[0x0,0x0],'dims':[0x1,0x1],'maxdims':[0x2,0x1],'widths':[0x41],'heights':[0x1e,0x1e],'wbuff':0x2,'hbuff':0x2,'wmargins':[0x0,0x1e],'hmargins':[0x0,0x0],'show':math['zeros'](0x2,0x1)[_0x13c791(0x103)],'symbol':'y','use_vals':![],'use_inds':!![]},'ycol':{'vals':0x0,'sx0':0x1,'sx':0x1,'loc':[0x0,0x0],'loc_inds':[0x0,0x0],'shift':[0x0,0x0],'dims':[0x1,0x1],'maxdims':[0x1,0x1],'widths':[0x41],'heights':[0x3c],'wbuff':0x2,'hbuff':0x2,'wmargins':[0x0,0x1e],'hmargins':[0x0,0x0],'show':math['zeros'](0x1,0x1)[_0x13c791(0x103)],'symbol':'y','use_vals':![],'use_inds':!![]},'cols':{'vals':0x0,'sx0':0x1,'sx':0x1,'loc':[0x0,0x0],'loc_inds':[0x1,0x0],'shift':[0x0,0x0],'dims':[0x1,0x1],'maxdims':[0x2,0x8],'widths':[0x32,0x32,0x32,0x32,0x32,0x32,0x32,0x32],'heights':[0x3c],'wbuff':0x2,'hbuff':0x2,'wmargins':[0x0,0x0],'hmargins':[0x0,0x0],'show':math[_0x13c791(0xc2)](0x1,0x3)[_0x13c791(0x103)],'symbol':null,'use_vals':![],'use_inds':!![]},'A':{'vals':0x0,'sx0':0x1,'sx':0x1,'loc':[0x0,0x0],'loc_inds':[0x1,0x0],'shift':[0x0,0x0],'dims':[0x1,0x1],'maxdims':[0x2,0x8],'widths':[0x32,0x32,0x32,0x32,0x32,0x32,0x32,0x32],'heights':[0x1e,0x1e],'wbuff':0x2,'hbuff':0x2,'wmargins':[0x0,0x0],'hmargins':[0x0,0x0],'show':math[_0x13c791(0xc2)](0x2,0x8)[_0x13c791(0x103)],'symbol':'A','use_vals':![],'use_inds':!![]},'x':{'vals':0x0,'sx0':0x1,'sx':0x1,'loc':[0x0,0x0],'loc_inds':[0x2,0x0],'shift':[0x0,0x0],'dims':[0x1,0x1],'maxdims':[0x8,0x1],'widths':[0x28],'heights':[0x19,0x19,0x19,0x19,0x19,0x19,0x19,0x19],'wbuff':0x2,'hbuff':0x2,'wmargins':[0x0,0x0],'hmargins':[0x0,0x0],'show':math['zeros'](0x8,0x1)[_0x13c791(0x103)],'symbol':'x','use_vals':![],'use_inds':!![]},'xcol':{'vals':0x0,'sx0':0x1,'sx':0x1,'loc':[0x0,0x0],'loc_inds':[0x2,0x0],'shift':[0x0,0x0],'dims':[0x1,0x1],'maxdims':[0x1,0x1],'widths':[0x28],'heights':[0x28],'wbuff':0x2,'hbuff':0x2,'wmargins':[0x0,0x0],'hmargins':[0x0,0x0],'show':math[_0x13c791(0xc2)](0x1,0x1)[_0x13c791(0x103)],'symbol':'x','use_vals':![],'use_inds':!![]}},'make':function(){const _0x312f78=_0x13c791;let _0x190df9={'y':null,'ycol':null,'A':null,'cols':null,'x':null},_0x76a537=[[0x0,0x0],[0x1,0x1]];for(const _0xda139c in _0x190df9){this['matrices'][_0xda139c][_0x312f78(0xd4)]=this[_0x312f78(0xb6)][_0xda139c][_0x312f78(0xe7)][_0x312f78(0xa7)]((_0x3d9cce,_0x51d7ef)=>this[_0x312f78(0xb6)][_0xda139c][_0x312f78(0x104)]['map']((_0x567865,_0x3fe924)=>{const _0x2c4243=_0x312f78;let _0x48a9da=UIDragger[_0x2c4243(0xbf)](_0x76a537);return _0x48a9da[_0x2c4243(0xa4)]((_0x19da4d,_0x5f2f8f)=>console['log'](_0x2c4243(0x123))),_0x48a9da[_0x2c4243(0x137)](_0x1000ba=>{const _0x57456c=_0x2c4243;this[_0x57456c(0xb6)][_0xda139c][_0x57456c(0x10e)][_0x51d7ef][_0x3fe924]=0x1;},_0x283706=>{const _0x3f389f=_0x2c4243;this[_0x3f389f(0xb6)][_0xda139c][_0x3f389f(0x10e)][_0x51d7ef][_0x3fe924]=0x0;}),_0x48a9da;}));}this[_0x312f78(0xb6)]['x']['vals']=this[_0x312f78(0xb6)]['x']['heights'][_0x312f78(0xa7)]((_0x2e2405,_0x2c149c)=>this[_0x312f78(0xb6)]['x']['widths'][_0x312f78(0xa7)]((_0x5be748,_0x1160b0)=>{const _0x5a477d=_0x312f78;let _0x26d542=UIDragger['fromRectangle'](_0x76a537);return _0x26d542[_0x5a477d(0xa4)]((_0x2443fd,_0x1d5179)=>{const _0x59e0cc=_0x5a477d;obj1['dd'][_0x59e0cc(0x13e)]['modified']=!![],obj1[_0x59e0cc(0xad)][_0x59e0cc(0xf3)][_0x59e0cc(0xde)]=[0x0];let _0x2fbb0a=0.01*(space[_0x59e0cc(0x11d)][0x1]-_0x2443fd[_0x59e0cc(0xaa)][0x0][0x1]);obj1['dd'][_0x59e0cc(0x13e)][_0x59e0cc(0xb4)][0x0][_0x2c149c]=obj1['dd']['vec1'][_0x59e0cc(0xd4)][0x0][_0x2c149c]+_0x2fbb0a;}),_0x26d542[_0x5a477d(0x137)](_0x23aa1f=>{const _0x7231b6=_0x5a477d;this[_0x7231b6(0xb6)]['x'][_0x7231b6(0x10e)][_0x2c149c][_0x1160b0]=0x1,obj1[_0x7231b6(0x106)][_0x7231b6(0x131)][_0x7231b6(0xaf)]=!![],obj1[_0x7231b6(0x106)]['cube_highlights'][_0x7231b6(0xde)]=[_0x2c149c];},_0x8dacfd=>{const _0x2114f0=_0x5a477d;this['matrices']['x'][_0x2114f0(0x10e)][_0x2c149c][_0x1160b0]=0x0,obj1[_0x2114f0(0x106)][_0x2114f0(0x131)]['hon']=![],obj1['Aobj'][_0x2114f0(0x131)][_0x2114f0(0xde)]=[];}),_0x26d542;})),this[_0x312f78(0xb6)][_0x312f78(0xc0)][_0x312f78(0xd4)]=this[_0x312f78(0xb6)]['xcol'][_0x312f78(0xe7)][_0x312f78(0xa7)]((_0x5a6b1e,_0x4150f6)=>this[_0x312f78(0xb6)][_0x312f78(0xc0)][_0x312f78(0x104)][_0x312f78(0xa7)]((_0x54f11f,_0x3e993f)=>{const _0x51599d=_0x312f78;let _0xc75c73=UIDragger[_0x51599d(0xbf)](_0x76a537);return _0xc75c73['onDrag']((_0x57abc4,_0x235c58)=>{}),_0xc75c73[_0x51599d(0x137)](_0x371c20=>{const _0x50503a=_0x51599d;this[_0x50503a(0xb6)]['xcol'][_0x50503a(0x10e)][_0x4150f6][_0x3e993f]=0x1,obj1[_0x50503a(0xad)][_0x50503a(0xf3)][_0x50503a(0xde)]=[0x0];},_0x16919c=>{const _0x53ccac=_0x51599d;this[_0x53ccac(0xb6)][_0x53ccac(0xc0)][_0x53ccac(0x10e)][_0x4150f6][_0x3e993f]=0x0,obj1['Dobj']['coords']['hind']=[];}),_0xc75c73;}));},'update':function(){const _0x17e073=_0x13c791;this[_0x17e073(0xb6)]['y'][_0x17e073(0x116)][0x0]=obj1[_0x17e073(0x106)][_0x17e073(0x116)][0x0],this[_0x17e073(0xb6)]['A'][_0x17e073(0x116)]=obj1[_0x17e073(0x106)]['dims'],this[_0x17e073(0xb6)][_0x17e073(0xbe)]['dims'][0x1]=obj1[_0x17e073(0x106)]['dims'][0x1],this[_0x17e073(0xb6)]['x'][_0x17e073(0x116)][0x0]=obj1['Aobj'][_0x17e073(0x116)][0x1];for(const _0x30f31a in this['matrices']){let _0x34559e=this[_0x17e073(0xb6)][_0x30f31a][_0x17e073(0x13a)];obj1['equations'][_0x17e073(0x104)][_0x34559e[0x0]]=math[_0x17e073(0xeb)](this['matrices'][_0x30f31a][_0x17e073(0x104)][_0x17e073(0x128)](0x0,this[_0x17e073(0xb6)][_0x30f31a][_0x17e073(0x116)][0x1])),obj1[_0x17e073(0xb7)][_0x17e073(0xe7)][_0x34559e[0x1]]=math['sum'](this['matrices'][_0x30f31a][_0x17e073(0xe7)]['slice'](0x0,this[_0x17e073(0xb6)][_0x30f31a]['dims'][0x0]));}let _0x3d63ac=obj1['equations'][_0x17e073(0x104)],_0x2beda1=obj1['equations'][_0x17e073(0xe7)];var _0x59cfbb=obj1[_0x17e073(0xb7)][_0x17e073(0x12d)],_0x41ef92=obj1[_0x17e073(0xb7)][_0x17e073(0xd0)];let _0x42c0c7=cumSum2(_0x3d63ac)[_0x17e073(0xa7)](_0x515818=>_0x515818+obj1[_0x17e073(0xb7)][_0x17e073(0x117)][0x0]),_0x52153f=cumSum2(_0x2beda1)[_0x17e073(0xa7)](_0x395f66=>_0x395f66+obj1['equations'][_0x17e073(0x117)][0x1]);for(const _0x383ba5 in this[_0x17e073(0xb6)]){if(!(_0x383ba5===_0x17e073(0xc0))){let _0x4d3570=_0x42c0c7[this['matrices'][_0x383ba5]['loc_inds'][0x0]],_0x4d821e=_0x52153f[this[_0x17e073(0xb6)][_0x383ba5][_0x17e073(0x13a)][0x1]];this['matrices'][_0x383ba5]['loc']=[_0x4d3570,_0x4d821e];let _0x2fb33d=this['matrices'][_0x383ba5]['heights'][_0x17e073(0x128)](0x0,this[_0x17e073(0xb6)][_0x383ba5][_0x17e073(0x116)][0x0]),_0x5b214d=this[_0x17e073(0xb6)][_0x383ba5]['widths'][_0x17e073(0x128)](0x0,this[_0x17e073(0xb6)][_0x383ba5][_0x17e073(0x116)][0x1]),_0x4fd526=this[_0x17e073(0xb6)][_0x383ba5][_0x17e073(0x12d)],_0x1f2354=this[_0x17e073(0xb6)][_0x383ba5]['hbuff'],_0x4473ad=cumSum2(_0x5b214d)[_0x17e073(0xa7)](_0xf5675d=>_0xf5675d+_0x4d3570),_0x3f3a8e=cumSum2(_0x2fb33d)['map'](_0x14ef48=>_0x14ef48+_0x4d821e);this[_0x17e073(0xb6)][_0x383ba5][_0x17e073(0xd4)][_0x17e073(0xa7)]((_0x17a8e0,_0x30f789)=>_0x17a8e0[_0x17e073(0xa7)]((_0x4a1d81,_0x7fa211)=>{const _0x267f4d=_0x17e073;let _0x15f8de=[math[_0x267f4d(0x102)](_0x4fd526,this[_0x267f4d(0xb6)][_0x383ba5][_0x267f4d(0xa8)][0x0]),math[_0x267f4d(0x102)](_0x4fd526,this[_0x267f4d(0xb6)][_0x383ba5][_0x267f4d(0xa8)][0x1])],_0x45bad3=[math[_0x267f4d(0x102)](_0x1f2354,this[_0x267f4d(0xb6)][_0x383ba5][_0x267f4d(0x13b)][0x0]),math[_0x267f4d(0x102)](_0x1f2354,this['matrices'][_0x383ba5]['hmargins'][0x1])];_0x4a1d81[_0x267f4d(0xaa)][0x0]['to']([_0x4473ad[_0x7fa211]+_0x15f8de[0x0],_0x3f3a8e[_0x30f789]+_0x45bad3[0x0]]),_0x4a1d81[_0x267f4d(0xaa)][0x1]['to']([_0x4473ad[_0x7fa211]+_0x5b214d[_0x7fa211]-_0x15f8de[0x1],_0x3f3a8e[_0x30f789]+_0x2fb33d[_0x30f789]-_0x45bad3[0x1]]);}));}}this[_0x17e073(0xb6)]['xcol'][_0x17e073(0xd4)][_0x17e073(0xa7)]((_0x98de4d,_0x5d96d7)=>_0x98de4d[_0x17e073(0xa7)]((_0x57fbb3,_0x23f623)=>{const _0x4b459e=_0x17e073;let _0x56ea5f=[math[_0x4b459e(0x102)](this['matrices'][_0x4b459e(0xc0)][_0x4b459e(0x12d)],this[_0x4b459e(0xb6)]['xcol'][_0x4b459e(0xa8)][0x0]),math[_0x4b459e(0x102)](this[_0x4b459e(0xb6)][_0x4b459e(0xc0)][_0x4b459e(0x12d)],this['matrices'][_0x4b459e(0xc0)][_0x4b459e(0xa8)][0x1])],_0x55ff9b=[math[_0x4b459e(0x102)](this[_0x4b459e(0xb6)][_0x4b459e(0xc0)][_0x4b459e(0xd0)],this[_0x4b459e(0xb6)][_0x4b459e(0xc0)][_0x4b459e(0x13b)][0x0]),math[_0x4b459e(0x102)](this[_0x4b459e(0xb6)][_0x4b459e(0xc0)][_0x4b459e(0xd0)],this[_0x4b459e(0xb6)]['xcol']['hmargins'][0x1])],_0x276fec=math[_0x4b459e(0xeb)](this['matrices']['x'][_0x4b459e(0xe7)][_0x4b459e(0x128)](0x0,this[_0x4b459e(0xb6)]['x'][_0x4b459e(0x116)][0x0])),_0xa37de1=this['matrices'][_0x4b459e(0xc0)]['widths'][0x0],_0x514311=_0x42c0c7[this['matrices']['x'][_0x4b459e(0x13a)][0x0]],_0x1c6da4=_0x52153f[this['matrices']['x'][_0x4b459e(0x13a)][0x1]];_0x57fbb3[_0x4b459e(0xaa)][0x0]['to']([_0x514311+_0x56ea5f[0x0],_0x1c6da4+_0x55ff9b[0x0]]),_0x57fbb3['group'][0x1]['to']([_0x514311+_0xa37de1-_0x56ea5f[0x1],_0x1c6da4+_0x276fec-_0x55ff9b[0x1]]);}));},'render':function(){const _0x303de8=_0x13c791;form[_0x303de8(0x135)]('rgba(0,0,200,0.2)'),this[_0x303de8(0xb6)]['y'][_0x303de8(0xd4)][_0x303de8(0xa7)]((_0x4c1f3c,_0x429582)=>_0x4c1f3c['map']((_0x27f17b,_0x1d9aa7)=>{const _0x4f7b0a=_0x303de8;this[_0x4f7b0a(0xb6)]['y'][_0x4f7b0a(0x10e)][_0x429582][_0x1d9aa7]==0x1&&_0x27f17b[_0x4f7b0a(0xd2)](_0x4ce80c=>form[_0x4f7b0a(0xfe)](_0x4ce80c));})),this[_0x303de8(0xb6)][_0x303de8(0x125)]['vals'][_0x303de8(0xa7)]((_0x2a9dcd,_0x149077)=>_0x2a9dcd[_0x303de8(0xa7)]((_0x1df737,_0x382937)=>{const _0x4b404d=_0x303de8;this[_0x4b404d(0xb6)][_0x4b404d(0x125)][_0x4b404d(0x10e)][_0x149077][_0x382937]==0x1&&_0x1df737[_0x4b404d(0xd2)](_0x39f952=>form['rect'](_0x39f952));})),form[_0x303de8(0x135)]('rgba(0,0,200,0.2)'),this['matrices'][_0x303de8(0xbe)]['vals'][_0x303de8(0xa7)]((_0x509816,_0x125819)=>_0x509816[_0x303de8(0x128)](0x0,this[_0x303de8(0xb6)][_0x303de8(0xbe)][_0x303de8(0x116)][0x1])['map']((_0x5bb160,_0x19c310)=>{const _0x31eb94=_0x303de8;this[_0x31eb94(0xb6)][_0x31eb94(0xbe)][_0x31eb94(0x10e)][_0x125819][_0x19c310]==0x1&&_0x5bb160[_0x31eb94(0xd2)](_0x419845=>form[_0x31eb94(0xfe)](_0x419845));})),form[_0x303de8(0x135)](_0x303de8(0xf0)),this[_0x303de8(0xb6)]['A'][_0x303de8(0xd4)][_0x303de8(0xa7)]((_0x218c37,_0x57bd77)=>_0x218c37[_0x303de8(0x128)](0x0,this[_0x303de8(0xb6)]['A'][_0x303de8(0x116)][0x1])['map']((_0x35de4b,_0x1e8f08)=>{const _0x131690=_0x303de8;this[_0x131690(0xb6)]['A']['show'][_0x57bd77][_0x1e8f08]==0x1&&_0x35de4b[_0x131690(0xd2)](_0x4acb9d=>form['rect'](_0x4acb9d));})),form[_0x303de8(0x135)]('rgba(0,0,200,0.3)'),this[_0x303de8(0xb6)]['x'][_0x303de8(0xd4)]['slice'](0x0,this[_0x303de8(0xb6)]['x']['dims'][0x0])[_0x303de8(0xa7)]((_0x3369fd,_0x14e1b3)=>_0x3369fd[_0x303de8(0xa7)]((_0x37bc6d,_0x1e4541)=>{const _0x56fd5f=_0x303de8;this[_0x56fd5f(0xb6)]['x'][_0x56fd5f(0x10e)][_0x14e1b3][_0x1e4541]==0x1&&_0x37bc6d[_0x56fd5f(0xd2)](_0x7d2860=>form[_0x56fd5f(0xfe)](_0x7d2860));})),this[_0x303de8(0xb6)][_0x303de8(0xc0)][_0x303de8(0xd4)][_0x303de8(0x128)](0x0,this[_0x303de8(0xb6)]['x']['dims'][0x0])[_0x303de8(0xa7)]((_0x4e61c0,_0x58b32e)=>_0x4e61c0[_0x303de8(0xa7)]((_0x1cbb46,_0x25746b)=>{const _0x1b5448=_0x303de8;this[_0x1b5448(0xb6)][_0x1b5448(0xc0)][_0x1b5448(0x10e)][_0x58b32e][_0x25746b]==0x1&&_0x1cbb46['render'](_0x7ad1a1=>form['rect'](_0x7ad1a1));}));},'write':function(){const _0x17e309=_0x13c791;let _0x3c035d=0x2,_0x33c45d=obj1[_0x17e309(0x106)][_0x17e309(0x116)][0x1];ystr=writeMatrix(_0x3c035d,0x1,'y',![],![]),xstr=writeMatrix(_0x33c45d,0x1,'x',![],![]),Astr=writeMatrix(_0x3c035d,_0x33c45d,'A',![],obj1[_0x17e309(0x127)][_0x17e309(0x134)]),Cstr=_0x17e309(0x140)+Astr,document[_0x17e309(0xf2)]('y')[_0x17e309(0x112)]=_0x17e309(0x10f)+ystr+_0x17e309(0x115),document['getElementById']('A')[_0x17e309(0x112)]=_0x17e309(0x10f)+Astr+_0x17e309(0xf1),document['getElementById']('x')[_0x17e309(0x112)]=_0x17e309(0x10f)+xstr+_0x17e309(0xf1);let _0xad5d9e=document[_0x17e309(0xf2)](_0x17e309(0xd6))[_0x17e309(0x12f)],_0x158aad=document[_0x17e309(0xf2)](_0x17e309(0xd6))['offsetLeft'],_0x3b3c07=obj1['equations'][_0x17e309(0xb6)]['y'][_0x17e309(0x117)][0x0]+_0x158aad,_0x4ed002=obj1[_0x17e309(0xb7)][_0x17e309(0xb6)]['A'][_0x17e309(0x117)][0x0]+_0x158aad,_0x2b4a2d=obj1[_0x17e309(0xb7)][_0x17e309(0xb6)]['x'][_0x17e309(0x117)][0x0]+_0x158aad,_0x5141e4=obj1['equations'][_0x17e309(0xb6)]['y'][_0x17e309(0x117)][0x1]+_0xad5d9e-0xc,_0x180109=obj1['equations']['matrices']['A'][_0x17e309(0x117)][0x1]+_0xad5d9e-0xc,_0x148785=obj1[_0x17e309(0xb7)][_0x17e309(0xb6)]['x'][_0x17e309(0x117)][0x1]+_0xad5d9e-0xc;document['getElementById']('y')['style'][_0x17e309(0xd1)]=String(_0x3b3c07)+'px',document[_0x17e309(0xf2)]('A')[_0x17e309(0xcb)][_0x17e309(0xd1)]=String(_0x4ed002)+'px',document[_0x17e309(0xf2)]('x')['style'][_0x17e309(0xd1)]=String(_0x2b4a2d)+'px',document[_0x17e309(0xf2)]('y')[_0x17e309(0xcb)][_0x17e309(0xbb)]=String(_0x5141e4)+'px',document[_0x17e309(0xf2)]('A')[_0x17e309(0xcb)]['top']=String(_0x180109)+'px',document['getElementById']('x')[_0x17e309(0xcb)]['top']=String(_0x148785)+'px',renderMathInElement(document[_0x17e309(0xf2)]('y')),renderMathInElement(document[_0x17e309(0xf2)]('A')),renderMathInElement(document[_0x17e309(0xf2)]('x'));}},'handlers':{'pens':pens,'handlerNames':[_0x13c791(0x134),'axes2','pt'],'resize':function(){const _0x1d288c=_0x13c791;for(let _0x5779f2=0x0;_0x5779f2<this[_0x1d288c(0xae)][_0x1d288c(0xf8)];_0x5779f2++){let _0x42cb2a=this['handlerNames'][_0x5779f2];this[_0x42cb2a]['sx']=this[_0x42cb2a][_0x1d288c(0xe0)]*obj1['sx'];}},'axes1':{'vals':0x0,'type':_0x13c791(0xc4),'sx0':0x1,'sx':0x1,'orig':_0x13c791(0xc3),'axes':_0x13c791(0x134),'onDrag':0x0,'onHover':0x0,'offHover':0x0,'pen':_0x13c791(0xc1),'make':function(){const _0x3d8dbf=_0x13c791;let _0x58e368=obj1[_0x3d8dbf(0x133)][_0x3d8dbf(0x134)][_0x3d8dbf(0xa7)](_0x4673a3=>_0x4673a3[_0x3d8dbf(0xa6)](this['sx'])['$add'](obj1[_0x3d8dbf(0x136)][_0x3d8dbf(0xc3)]));this['vals']=_0x58e368[_0x3d8dbf(0xa7)]((_0x4aa4fa,_0x5e9b92)=>{const _0x22dce8=_0x3d8dbf;let _0xe45ba2=UIDragger['fromCircle']([_0x4aa4fa,[0x7,0x7]]);return _0xe45ba2[_0x22dce8(0xa4)]((_0x4f3a93,_0x195237)=>{const _0x1f7471=_0x22dce8;obj1['_AXES'][_0x1f7471(0x134)][_0x5e9b92]=space[_0x1f7471(0x11d)][_0x1f7471(0xb8)](obj1[_0x1f7471(0x136)][_0x1f7471(0xc3)])[_0x1f7471(0xa6)](0x1/this['sx']);}),_0xe45ba2[_0x22dce8(0x137)](_0x35c4d9=>{const _0x25b9ec=_0x22dce8;obj1[_0x25b9ec(0x106)][_0x25b9ec(0xbc)]['hind']=[_0x5e9b92],obj1[_0x25b9ec(0xb0)][_0x25b9ec(0xf3)]['hind']=[_0x5e9b92],obj1[_0x25b9ec(0xb7)][_0x25b9ec(0xb6)][_0x25b9ec(0xbe)][_0x25b9ec(0x10e)][0x0][_0x5e9b92]=0x1,_0x35c4d9[_0x25b9ec(0xaa)][0x1][_0x25b9ec(0x108)](1.7);},_0x2eccbb=>{const _0x57bd9e=_0x22dce8;obj1[_0x57bd9e(0x106)][_0x57bd9e(0xbc)][_0x57bd9e(0xde)]=[],obj1['Cobj']['coords']['hind']=[],obj1[_0x57bd9e(0xb7)][_0x57bd9e(0xb6)][_0x57bd9e(0xbe)][_0x57bd9e(0x10e)][0x0][_0x5e9b92]=0x0,_0x2eccbb[_0x57bd9e(0xaa)][0x1]['scale'](0x1/1.7);}),_0xe45ba2;});}},'axes2':{'vals':0x0,'type':_0x13c791(0xc4),'sx0':0x1,'sx':0x1,'orig':'orig1','axes':_0x13c791(0x134),'onDrag':0x0,'onHover':0x0,'offHover':0x0,'pen':'pen1','onDrag':null,'onHover':null,'offHover':null,'update':null,'render':null,'make':function(){const _0x225bb6=_0x13c791;let _0x438c21=obj1[_0x225bb6(0x133)][_0x225bb6(0x134)][_0x225bb6(0xa7)](_0x599991=>_0x599991[_0x225bb6(0xa6)](-this['sx'])[_0x225bb6(0x124)](obj1['ORIG'][_0x225bb6(0xc3)]));this['vals']=_0x438c21['map']((_0x33f72d,_0x30bf9c)=>{const _0x703668=_0x225bb6;let _0x2694b2=UIDragger[_0x703668(0x11c)]([_0x33f72d,[0x7,0x7]]);return _0x2694b2[_0x703668(0xa4)]((_0x99eb41,_0x3057c5)=>{const _0x3e5553=_0x703668;obj1[_0x3e5553(0x133)][_0x3e5553(0x134)][_0x30bf9c]=space[_0x3e5553(0x11d)]['$subtract'](obj1[_0x3e5553(0x136)][_0x3e5553(0xc3)])['$multiply'](-0x1/this['sx']);}),_0x2694b2['onHover'](_0x13ef71=>{const _0x120c49=_0x703668;_0x13ef71[_0x120c49(0xaa)][0x1]['scale'](1.7),obj1[_0x120c49(0x106)]['stems'][_0x120c49(0xde)]=[_0x30bf9c];},_0x2ccf28=>{const _0xb02547=_0x703668;_0x2ccf28[_0xb02547(0xaa)][0x1][_0xb02547(0x108)](0x1/1.7),obj1[_0xb02547(0x106)][_0xb02547(0xbc)]['hind']=[];}),_0x2694b2;});}},'pt':{'vals':0x0,'type':'pts','sx0':0x1,'sx':0x1,'orig':_0x13c791(0xc3),'axes':_0x13c791(0x134),'pen':_0x13c791(0xc1),'onDrag':null,'onHover':null,'offHover':null,'update':null,'render':null,'make':function(){const _0x4b435c=_0x13c791;let _0x5023d7=obj1[_0x4b435c(0xcc)][_0x4b435c(0x109)][_0x4b435c(0xa7)](_0x468f9b=>_0x468f9b[_0x4b435c(0xa6)](this['sx'])['$add'](obj1[_0x4b435c(0x136)][_0x4b435c(0xc3)]));this['vals']=_0x5023d7['map']((_0x197165,_0x1f25f1)=>{const _0x1ef9cc=_0x4b435c;let _0x3596de=UIDragger[_0x1ef9cc(0x11c)]([_0x197165,[0x5,0x5]]);return _0x3596de[_0x1ef9cc(0xa4)]((_0x4eeb10,_0x4cbe1e)=>{const _0x5688d5=_0x1ef9cc;obj1[_0x5688d5(0xcc)][_0x5688d5(0x109)][_0x1f25f1]=space[_0x5688d5(0x11d)]['$subtract'](obj1[_0x5688d5(0x136)][_0x5688d5(0xc3)])['$divide'](this['sx']),obj1['dd'][_0x5688d5(0x13e)][_0x5688d5(0x12a)]=![];}),_0x3596de['onHover'](_0x50b4c9=>{const _0x4fbc96=_0x1ef9cc;_0x50b4c9[_0x4fbc96(0xaa)][0x1][_0x4fbc96(0x108)](1.7),obj1['Dobj']['coords'][_0x4fbc96(0xde)]=[_0x1f25f1];},_0xe75385=>{const _0x5f4d7c=_0x1ef9cc;_0xe75385['group'][0x1][_0x5f4d7c(0x108)](0x1/1.7),obj1[_0x5f4d7c(0xad)]['coords'][_0x5f4d7c(0xde)]=[];}),_0x3596de;});}},'update':function(){const _0x34477d=_0x13c791;let _0x36d38b=obj1[_0x34477d(0x133)][_0x34477d(0x134)]['map'](_0x2f949f=>_0x2f949f[_0x34477d(0xa6)](this['axes1']['sx'])['$add'](obj1['ORIG']['orig1'])),_0x1e9321=obj1[_0x34477d(0x133)][_0x34477d(0x134)]['map'](_0x47b6db=>_0x47b6db[_0x34477d(0xa6)](-this[_0x34477d(0x13d)]['sx'])[_0x34477d(0x124)](obj1[_0x34477d(0x136)][_0x34477d(0xc3)]));this[_0x34477d(0x134)][_0x34477d(0xd4)][_0x34477d(0xa7)]((_0x4a7895,_0x3b5bc4)=>_0x4a7895[_0x34477d(0xaa)][0x0]['to'](_0x36d38b[_0x3b5bc4])),this['axes2']['vals'][_0x34477d(0xa7)]((_0x3e799c,_0x2c26de)=>_0x3e799c['group'][0x0]['to'](_0x1e9321[_0x2c26de]));},'render':function(){const _0x3206ab=_0x13c791;form['fillOnly'](_0x3206ab(0x10c)),this[_0x3206ab(0x134)][_0x3206ab(0xd4)]['slice'](0x0,obj1[_0x3206ab(0x106)][_0x3206ab(0x116)][0x1]-0x1+0x1)[_0x3206ab(0xe5)](_0x13a07a=>_0x13a07a[_0x3206ab(0xd2)](_0x58ab3c=>form[_0x3206ab(0x126)](_0x58ab3c))),obj1[_0x3206ab(0xe4)]['lever2'][_0x3206ab(0xdd)]==0x3&&(form[_0x3206ab(0x135)](_0x3206ab(0xdc)),this[_0x3206ab(0x13d)][_0x3206ab(0xd4)][_0x3206ab(0x128)](0x0,obj1[_0x3206ab(0x106)][_0x3206ab(0x116)][0x1]-0x1+0x1)[_0x3206ab(0xe5)](_0x52d877=>_0x52d877[_0x3206ab(0xd2)](_0x2b7ea4=>form['circle'](_0x2b7ea4))));}},'levers':{'pens':pens,'leverNames':[_0x13c791(0xe6),_0x13c791(0xd9)],'resize':function(){const _0x2e489f=_0x13c791;for(let _0x2006d0=0x0;_0x2006d0<this[_0x2e489f(0x11f)][_0x2e489f(0xf8)];_0x2006d0++){let _0x409a5b=this[_0x2e489f(0x11f)][_0x2006d0];this[_0x409a5b]['sx']=obj1['sx']*this[_0x409a5b][_0x2e489f(0xe0)];}},'lever1':{'vals':0x0,'ind':0x2,'type':'pts','sx0':0x1,'sx':0x1,'orig':_0x13c791(0xc3),'axes':_0x13c791(0x134),'pen':'pen1','onDrag':null,'onHover':null,'offHover':null,'update':null,'render':null,'make':function(){const _0x5b69c6=_0x13c791;let _0x11345d=obj1[_0x5b69c6(0x129)][_0x5b69c6(0x110)][0x0][_0x5b69c6(0xa6)](this['sx'])['$add'](obj1[_0x5b69c6(0x101)][_0x5b69c6(0xc6)]);this['vals']=UIDragger[_0x5b69c6(0x11c)]([_0x11345d,[0x7,0x7]]),this[_0x5b69c6(0xd4)][_0x5b69c6(0xa4)]((_0x42bd4e,_0x64a3cf)=>{const _0x57da04=_0x5b69c6;let _0x5a4104=obj1[_0x57da04(0x129)][_0x57da04(0x110)][_0x57da04(0xa7)](_0x2e8bd9=>_0x2e8bd9[_0x57da04(0xa6)](this['sx'])[_0x57da04(0x124)](obj1[_0x57da04(0x101)]['base1']));this[_0x57da04(0xdd)]=Polygon[_0x57da04(0x13c)](_0x5a4104,space[_0x57da04(0x11d)]),obj1[_0x57da04(0x106)][_0x57da04(0x116)][0x1]=this['ind']+0x1;}),this[_0x5b69c6(0xd4)][_0x5b69c6(0x137)](_0x3cba7f=>_0x3cba7f[_0x5b69c6(0xaa)][0x1]['scale'](1.7),_0x1a41f8=>_0x1a41f8[_0x5b69c6(0xaa)][0x1][_0x5b69c6(0x108)](0x1/1.7));}},'lever2':{'vals':0x0,'ind':0x2,'type':_0x13c791(0xc4),'sx0':0x1,'sx':0x1,'orig':_0x13c791(0xc3),'axes':_0x13c791(0x134),'pen':'pen1','onDrag':null,'onHover':null,'offHover':null,'update':null,'render':null,'make':function(){const _0x256cc3=_0x13c791;let _0x394a02=obj1['CTRLS']['ctrl2'][0x0][_0x256cc3(0xa6)](this['sx'])['$add'](obj1[_0x256cc3(0x101)][_0x256cc3(0x114)]);this[_0x256cc3(0xd4)]=UIDragger[_0x256cc3(0x11c)]([_0x394a02,[0x7,0x7]]),this['vals'][_0x256cc3(0xa4)]((_0x382919,_0x4d5c02)=>{const _0x51743b=_0x256cc3;let _0x52dae0=obj1[_0x51743b(0x129)]['ctrl2']['map'](_0x3931cb=>_0x3931cb['$multiply'](this['sx'])[_0x51743b(0x124)](obj1[_0x51743b(0x101)][_0x51743b(0x114)]));this[_0x51743b(0xdd)]=Polygon['nearestPt'](_0x52dae0,space[_0x51743b(0x11d)]);}),this[_0x256cc3(0xd4)][_0x256cc3(0x137)](_0x1a6036=>_0x1a6036[_0x256cc3(0xaa)][0x1]['scale'](1.7),_0x4bcf99=>_0x4bcf99[_0x256cc3(0xaa)][0x1][_0x256cc3(0x108)](0x1/1.7));}},'update':function(){const _0x7d7d9b=_0x13c791;let _0x2cd3db=obj1['CTRLS'][_0x7d7d9b(0x110)][this[_0x7d7d9b(0xe6)][_0x7d7d9b(0xdd)]][_0x7d7d9b(0xa6)](this['lever1']['sx'])[_0x7d7d9b(0x124)](obj1[_0x7d7d9b(0x101)][_0x7d7d9b(0xc6)]);this[_0x7d7d9b(0xe6)][_0x7d7d9b(0xd4)][_0x7d7d9b(0xaa)][0x0]['to'](_0x2cd3db);let _0x4de28e=obj1[_0x7d7d9b(0x129)][_0x7d7d9b(0xb3)][this['lever2'][_0x7d7d9b(0xdd)]][_0x7d7d9b(0xa6)](this[_0x7d7d9b(0xd9)]['sx'])['$add'](obj1[_0x7d7d9b(0x101)][_0x7d7d9b(0x114)]);this[_0x7d7d9b(0xd9)]['vals']['group'][0x0]['to'](_0x4de28e);},'render':function(){const _0x286ef8=_0x13c791;let _0x338aae=obj1['CTRLS'][_0x286ef8(0x110)][0x0][_0x286ef8(0xa6)](this[_0x286ef8(0xe6)]['sx'])[_0x286ef8(0x124)](obj1[_0x286ef8(0x101)]['base1']),_0x2fc81c=obj1[_0x286ef8(0x129)][_0x286ef8(0x110)][obj1['CTRLS']['ctrl1'][_0x286ef8(0xf8)]-0x1][_0x286ef8(0xa6)](this[_0x286ef8(0xe6)]['sx'])[_0x286ef8(0x124)](obj1[_0x286ef8(0x101)]['base1']);form[_0x286ef8(0xa9)](_0x286ef8(0xf4),0x6)['line']([_0x338aae,_0x2fc81c]),form[_0x286ef8(0x135)]('rgba(0,0,0,0.8)'),this['lever1'][_0x286ef8(0xd4)][_0x286ef8(0xd2)](_0x2141ab=>form[_0x286ef8(0x126)](_0x2141ab));if(!![]){let _0x5f5e0e=obj1[_0x286ef8(0x133)]['axes1'][_0x286ef8(0xf8)],_0x4d8dc2=pens[_0x286ef8(0xc1)],_0x14c643=1.5;for(var _0x3076ad=0x0;_0x3076ad<_0x5f5e0e;_0x3076ad++){let _0x5b56e6=Group[_0x286ef8(0xda)](math[_0x286ef8(0xab)](_0x3076ad+0x1)[_0x286ef8(0x103)])['map'](_0x3ae03e=>_0x3ae03e[_0x286ef8(0xa5)](0.1*this[_0x286ef8(0xe6)]['sx'])),_0x5568cd=obj1[_0x286ef8(0x119)]['axes1'][_0x286ef8(0x128)](0x0,_0x3076ad+0x1),_0x387009=obj1[_0x286ef8(0x129)][_0x286ef8(0x110)][_0x3076ad]['$multiply'](this['lever1']['sx'])['$add']([0x0,-0x5*this[_0x286ef8(0xe6)]['sx']]),_0x3aec59=obj1[_0x286ef8(0x101)]['base1'][_0x286ef8(0x124)](_0x387009);ndraw(form,_0x5b56e6,_0x286ef8(0xbc),_0x14c643,_0x3aec59,_0x5568cd,_0x4d8dc2);}}let _0x4286ac=obj1['CTRLS'][_0x286ef8(0xb3)][0x0][_0x286ef8(0xa6)](this[_0x286ef8(0xd9)]['sx'])[_0x286ef8(0x124)](obj1[_0x286ef8(0x101)][_0x286ef8(0x114)]),_0x2b764b=obj1[_0x286ef8(0x129)][_0x286ef8(0xb3)][obj1[_0x286ef8(0x129)]['ctrl2'][_0x286ef8(0xf8)]-0x1]['$multiply'](this['lever2']['sx'])[_0x286ef8(0x124)](obj1[_0x286ef8(0x101)][_0x286ef8(0x114)]);form[_0x286ef8(0xa9)](_0x286ef8(0xf4),0x6)['line']([_0x4286ac,_0x2b764b]),form['fillOnly'](_0x286ef8(0xb2)),this[_0x286ef8(0xd9)]['vals']['render'](_0x1f7cbe=>form[_0x286ef8(0x126)](_0x1f7cbe));if(!![]){let _0x250125=obj1['AXES'][_0x286ef8(0x134)][_0x286ef8(0xf8)],_0x3ad5f9=Group[_0x286ef8(0xda)](math['identity'](_0x250125)[_0x286ef8(0x103)])[_0x286ef8(0xa7)](_0x99c3be=>_0x99c3be[_0x286ef8(0xa5)](0.1*this['lever2']['sx'])),_0x3cd7af=[0x7*this[_0x286ef8(0xd9)]['sx'],0x0],_0x71fac0=obj1[_0x286ef8(0x119)]['axes1'][_0x286ef8(0x128)](0x0,_0x250125),_0x11febe=pens['pen1'],_0x5a5f9d=1.5,_0x2635f8=obj1[_0x286ef8(0x129)][_0x286ef8(0xb3)][0x0]['$multiply'](this['lever2']['sx']),_0x10d874=obj1[_0x286ef8(0x101)]['base2'][_0x286ef8(0x124)](_0x3cd7af)[_0x286ef8(0x124)](_0x2635f8);ndraw(form,_0x3ad5f9,_0x286ef8(0xc4),_0x5a5f9d,_0x10d874,_0x71fac0,_0x11febe),_0x2635f8=obj1[_0x286ef8(0x129)][_0x286ef8(0xb3)][0x1][_0x286ef8(0xa6)](this['lever2']['sx']),_0x10d874=obj1['BASE'][_0x286ef8(0x114)][_0x286ef8(0x124)](_0x3cd7af)['$add'](_0x2635f8),ndraw(form,_0x3ad5f9,_0x286ef8(0xed),_0x5a5f9d,_0x10d874,_0x71fac0,_0x11febe),_0x2635f8=obj1[_0x286ef8(0x129)][_0x286ef8(0xb3)][0x2]['$multiply'](this['lever2']['sx']),_0x10d874=obj1[_0x286ef8(0x101)][_0x286ef8(0x114)][_0x286ef8(0x124)](_0x3cd7af)['$add'](_0x2635f8),ndraw(form,_0x3ad5f9,_0x286ef8(0x12b),_0x5a5f9d,_0x10d874,_0x71fac0,_0x11febe),_0x2635f8=obj1[_0x286ef8(0x129)][_0x286ef8(0xb3)][0x3][_0x286ef8(0xa6)](this[_0x286ef8(0xd9)]['sx']),_0x10d874=obj1['BASE'][_0x286ef8(0x114)][_0x286ef8(0x124)](_0x3cd7af)[_0x286ef8(0x124)](_0x2635f8),ndraw(form,_0x3ad5f9,'spheres',_0x5a5f9d,_0x10d874,_0x71fac0,_0x11febe);}}},'CTRLS':{'ctrl1':Group[_0x13c791(0xda)]([[0x0,0x0],[0x5,0x0],[0xa,0x0],[0xf,0x0],[0x14,0x0],[0x19,0x0],[0x1e,0x0],[0x23,0x0]]),'ctrl2':Group[_0x13c791(0xda)]([[0x0,0x0],[0x0,0xa],[0x0,0x14],[0x0,0x1e]]),'ctrl3':Group[_0x13c791(0xda)]([[0x0,0x0],[0xa,0x0],[0x14,0x0],[0x1e,0x0]])},'center0':new Pt([0x28,0x1e]),'BASE0':{'base1':new Pt([-0xf,0x1e]),'base2':new Pt([0x1e,-0xf]),'base3':new Pt([0x0,0x0])},'ORIG0':{'orig1':new Pt([0x0,0x0]),'orig2':new Pt([0x0,0x0]),'orig3':new Pt([0x0,0x0])},'center':new Pt([0x0,0x0]),'BASE':{'base1':new Pt([0x0,0x0]),'base2':new Pt([0x0,0x0]),'base3':new Pt([0x0,0x0])},'ORIG':{'orig1':new Pt([0x0,0x0]),'orig2':new Pt([0x0,0x0]),'orig3':new Pt([0x0,0x0])},'SHIFT':{'shift1':0x0,'shift2':0x0,'shift3':Group[_0x13c791(0xda)]([[0x0,0x0],[0x0,0x0],[0x0,0x0],[0x0,0x0],[0x0,0x0],[0x0,0x0],[0x0,0x0],[0x0,0x0]])},'DIM':{'dim1':Group[_0x13c791(0xda)]([[0x28,0x2f],[0x28,0x2f],[0x28,0x2f],[0x28,0x2f],[0x28,0x2f],[0x28,0x2f],[0x28,0x2f],[0x28,0x2f]])},'PTS':{'pt1':Group[_0x13c791(0xda)]([[0x14,0x14]]),'pt2':null},'dd':{'vec1':{'vals':null,'newvals':null,'modified':![]}},'_AXES':{'axes1':Group[_0x13c791(0xda)]([[0xa,0x0],[0x0,-0xa],[-0xa,0xa],[-0xa,-0xa],[0xa,0xa],[-0xa,0x0],[0x0,0xa],[0xa,-0xa]]),'axes2':Group[_0x13c791(0xda)]([[0xa,0x0],[0x0,-0xa],[-0xa,0xa],[-0xa,-0xa],[0xa,0xa],[-0xa,0x0],[0x0,0xa],[0xa,-0xa]]),'axes3':Group[_0x13c791(0xda)]([[-0xa,0xa],[0xa,0xa],[0xa,0x0]]),'axes4':Group[_0x13c791(0xda)]([[-0xa,0xa],[0xa,0xa],[0xa,0x0]]),'axes5':Group[_0x13c791(0xda)]([[0x1,0x0],[0x0,0x1]])},'AXES':{'axes1':0x0,'axes2':0x0,'axes3':0x0,'axes4':0x0,'axes5':Group['fromArray']([[0x1,0x0],[0x0,0x1]])},'initAXES':{'axes1':Group[_0x13c791(0xda)]([[0xa,0x0],[0x0,0xa],[-0xa,-0xa],[-0xa,0xa],[0x5,-0x5],[0x5,0x5],[-0x5,0x5],[0x2,-0x2]])}};obj1[_0x13c791(0x127)][_0x13c791(0x134)]=obj1[_0x13c791(0x133)]['axes1']['clone'](),obj1['initAXES'][_0x13c791(0x134)]=obj1[_0x13c791(0x133)][_0x13c791(0x134)][_0x13c791(0xd5)](),obj1['SHIFT']['shift1']=obj1['CTRLS'][_0x13c791(0x110)]['map'](_0x2fc842=>_0x2fc842['$add'](obj1['BASE'][_0x13c791(0xc6)])[_0x13c791(0x124)]([0x0,-0x28])),obj1['SHIFT'][_0x13c791(0x121)]=obj1[_0x13c791(0x129)]['ctrl2'][_0x13c791(0xa7)](_0x4ff257=>_0x4ff257['$add'](obj1[_0x13c791(0x101)]['base2'])['$add']([0x28,0x0]));var dd=0x30;obj1[_0x13c791(0x107)][_0x13c791(0x13f)]=obj1[_0x13c791(0x107)][_0x13c791(0x13f)][_0x13c791(0xa7)]((_0x2f7df4,_0x4694a4)=>_0x2f7df4[_0x13c791(0x124)]([_0x4694a4*dd,0x0])),space[_0x13c791(0x10d)]({'bgcolor':_0x13c791(0xcf),'resize':!![],'retina':!![]});var ystr,xstr,Astr,Bstr,Cstr;function _0xda95(){const _0x12a01e=['modified','cubes','2239580uFIrsq','wbuff','rgba(0,0,0,0.7)','offsetTop','bindMouse','cube_highlights','ctx','_AXES','axes1','fillOnly','ORIG','onHover','823570cLVdjM','AXIS1','loc_inds','hmargins','nearestPt','axes2','vec1','shift3','A\x20=\x20','make','onDrag','multiply','$multiply','map','wmargins','stroke','group','identity','4454990CsYYpe','Dobj','handlerNames','hon','Cobj','hypershape-container','rgba(0,0,0,0.8)','ctrl2','newvals','offsetLeft','matrices','equations','$subtract','namespace','spheres','top','stems','arrows','cols','fromRectangle','xcol','pen1','zeros','orig1','pts','offsetHeight','base1','1526958ptGcxx','getForm','11lNAnvg','1PJJjoR','style','PTS','hulls','ready','rgba(0,\x200,\x20255,\x200)','hbuff','left','render','bindTouch','vals','clone','hypershape','4sDbGeW','480010kGeNNJ','lever2','fromArray','container','rgba(200,0,0,0.4)','ind','hind','pens','sx0','orig2','handlers','height','levers','forEach','lever1','heights','hpen1','name','track','sum','DIM','simps','252525bPCuGa','update','rgba(0,0,200,0.3)','\x20$$','getElementById','coords','rgba(0,\x200,\x200,\x200.8)','pen0','resize','hpen2','length','center','rgba(0,0,0,0.1)','canvas','8vaDefF','rgba(200,0,0,0.7)','rect','play','objNames','BASE','max','_data','widths','ORIG0','Aobj','SHIFT','scale','pt1','hpen3','lines','rgba(200,0,0,0.8)','setup','show','$$\x20','ctrl1','orig3','innerHTML','BASE0','base2','\x20\x20=\x20\x20$$','dims','loc','min','initAXES','maxdims','width','fromCircle','pointer','axes5','leverNames','offsetWidth','shift2','970134KPWojr','drag...','$add','ycol','circle','AXES','slice','CTRLS'];_0xda95=function(){return _0x12a01e;};return _0xda95();}const aspect=0x1;var xlim,ylim,ss,A=Group[_0x13c791(0xda)](math[_0x13c791(0xab)](obj1[_0x13c791(0x127)][_0x13c791(0x134)][_0x13c791(0xf8)])['_data']);space['add']({'start':(_0x448564,_0x82a28f)=>{const _0x78e6b=_0x13c791;let _0x246db7=obj1[_0x78e6b(0x106)][_0x78e6b(0x116)][0x1]-0x1,_0x1264d0=document[_0x78e6b(0xf2)](obj1[_0x78e6b(0xe9)])[_0x78e6b(0x12f)],_0x4a18e0=document[_0x78e6b(0xf2)](obj1['name'])[_0x78e6b(0xb5)],_0x5c2a08=document[_0x78e6b(0xf2)](obj1[_0x78e6b(0xdb)])[_0x78e6b(0x120)],_0x2cca8d=document[_0x78e6b(0xf2)](obj1[_0x78e6b(0xdb)])[_0x78e6b(0xc5)];_0x82a28f[_0x78e6b(0x132)][_0x78e6b(0xfb)][_0x78e6b(0x11b)]=_0x5c2a08,_0x82a28f[_0x78e6b(0x132)]['canvas'][_0x78e6b(0xe3)]=_0x2cca8d,obj1['sx']=math[_0x78e6b(0x118)](_0x5c2a08,_0x2cca8d)/obj1[_0x78e6b(0x108)],obj1[_0x78e6b(0xf9)]=new Pt([0.5*_0x5c2a08,0.5*_0x2cca8d]);for(const _0x3d46cb in obj1[_0x78e6b(0x136)]){obj1[_0x78e6b(0x136)][_0x3d46cb]=obj1[_0x78e6b(0xf9)]['$add'](obj1[_0x78e6b(0x105)][_0x3d46cb][_0x78e6b(0xa6)](obj1['sx']));}for(const _0x22d9f7 in obj1['BASE']){obj1[_0x78e6b(0x101)][_0x22d9f7]=obj1[_0x78e6b(0xf9)][_0x78e6b(0x124)](obj1[_0x78e6b(0x113)][_0x22d9f7][_0x78e6b(0xa6)](obj1['sx']));}obj1['handlers']['axes1']['make'](),obj1[_0x78e6b(0xe2)][_0x78e6b(0x13d)]['make'](),obj1[_0x78e6b(0xe4)]['lever1'][_0x78e6b(0xa3)](),obj1[_0x78e6b(0xe4)]['lever2'][_0x78e6b(0xa3)](),obj1['sx']=math[_0x78e6b(0x118)](_0x82a28f[_0x78e6b(0x11b)],_0x82a28f[_0x78e6b(0xe3)])/obj1[_0x78e6b(0x108)],obj1['resize'](),obj1['handlers'][_0x78e6b(0xf6)](),obj1[_0x78e6b(0xe4)][_0x78e6b(0xf6)](),obj1[_0x78e6b(0xb7)][_0x78e6b(0xf6)]();},'animate':(_0x546829,_0x59a62f)=>{const _0x5306bb=_0x13c791;let _0x4bd64b=document['getElementById'](obj1['container'])[_0x5306bb(0x120)],_0x3c3dda=document['getElementById'](obj1['container'])[_0x5306bb(0xc5)];space[_0x5306bb(0x132)][_0x5306bb(0xfb)][_0x5306bb(0x11b)]=_0x4bd64b,space[_0x5306bb(0x132)][_0x5306bb(0xfb)]['height']=_0x3c3dda,obj1['sx']=math['min'](_0x4bd64b,_0x3c3dda)/obj1[_0x5306bb(0x108)],obj1['center']=new Pt([0.5*_0x4bd64b,0.5*_0x3c3dda]),obj1['Aobj'][_0x5306bb(0xef)]();let _0xa6688e=obj1['Aobj'][_0x5306bb(0x116)][0x1]-0x1;obj1[_0x5306bb(0x127)][_0x5306bb(0x134)]=obj1[_0x5306bb(0x133)][_0x5306bb(0x134)][_0x5306bb(0x128)](0x0,_0xa6688e+0x1),obj1['AXES']['axes2']=obj1['_AXES'][_0x5306bb(0x13d)][_0x5306bb(0x128)](0x0,_0xa6688e+0x1),obj1[_0x5306bb(0xe2)][_0x5306bb(0xef)](),obj1[_0x5306bb(0xe2)][_0x5306bb(0xd2)](),obj1['levers'][_0x5306bb(0xef)](),obj1[_0x5306bb(0xe4)][_0x5306bb(0xd2)]();let _0x2dfbc9=A[_0x5306bb(0x128)](0x0,_0xa6688e+0x1);NDRAW(_0x2dfbc9,obj1[_0x5306bb(0x106)],form,obj1[_0x5306bb(0x136)],obj1[_0x5306bb(0x133)],null,obj1[_0x5306bb(0x107)],obj1[_0x5306bb(0xec)]);},'action':(_0x2e8018,_0x38c85f,_0x2a5e8d)=>{const _0x50b747=_0x13c791;let _0x5b2fc8=obj1[_0x50b747(0x106)][_0x50b747(0x116)][0x1]-0x1;UI['track'](obj1['handlers'][_0x50b747(0x134)][_0x50b747(0xd4)][_0x50b747(0x128)](0x0,_0x5b2fc8+0x1),_0x2e8018,new Pt(_0x38c85f,_0x2a5e8d)),obj1[_0x50b747(0xe4)]['lever2'][_0x50b747(0xdd)]==0x3&&UI[_0x50b747(0xea)](obj1['handlers'][_0x50b747(0x13d)][_0x50b747(0xd4)][_0x50b747(0x128)](0x0,_0x5b2fc8+0x1),_0x2e8018,new Pt(_0x38c85f,_0x2a5e8d)),UI[_0x50b747(0xea)](obj1['handlers']['pt'][_0x50b747(0xd4)],_0x2e8018,new Pt(_0x38c85f,_0x2a5e8d)),UI['track']([obj1['levers'][_0x50b747(0xe6)][_0x50b747(0xd4)]],_0x2e8018,new Pt(_0x38c85f,_0x2a5e8d)),UI[_0x50b747(0xea)]([obj1[_0x50b747(0xe4)][_0x50b747(0xd9)][_0x50b747(0xd4)]],_0x2e8018,new Pt(_0x38c85f,_0x2a5e8d));},'resize':(_0x38594b,_0x362dc8)=>{const _0x46727b=_0x13c791;if(form[_0x46727b(0xce)]){let _0x335e74=document[_0x46727b(0xf2)](obj1[_0x46727b(0xdb)])['offsetWidth'],_0x4b1498=document[_0x46727b(0xf2)](obj1[_0x46727b(0xdb)])[_0x46727b(0xc5)];space[_0x46727b(0x132)][_0x46727b(0xfb)][_0x46727b(0x11b)]=_0x335e74,space['ctx']['canvas'][_0x46727b(0xe3)]=_0x4b1498,obj1['sx']=math['min'](_0x335e74,_0x4b1498)/obj1[_0x46727b(0x108)],obj1[_0x46727b(0xf9)]=new Pt([0.5*_0x335e74,0.5*_0x4b1498]);for(const _0x49051d in obj1[_0x46727b(0x136)]){obj1[_0x46727b(0x136)][_0x49051d]=obj1[_0x46727b(0xf9)]['$add'](obj1[_0x46727b(0x105)][_0x49051d]['$multiply'](obj1['sx']));}for(const _0x530d98 in obj1[_0x46727b(0x101)]){obj1['BASE'][_0x530d98]=obj1[_0x46727b(0xf9)]['$add'](obj1[_0x46727b(0x113)][_0x530d98]['$multiply'](obj1['sx']));}obj1[_0x46727b(0xf6)](),obj1[_0x46727b(0xe2)]['resize'](),obj1['levers'][_0x46727b(0xf6)](),obj1[_0x46727b(0xb7)][_0x46727b(0xf6)]();}}}),space[_0x13c791(0x130)]()[_0x13c791(0xd3)]()[_0x13c791(0xff)]();