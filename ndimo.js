const _0x1e1537=_0x57f2;(function(_0x364955,_0x55cbfd){const _0xf8b1be=_0x57f2,_0x44f9ae=_0x364955();while(!![]){try{const _0x7692f5=parseInt(_0xf8b1be(0xf3))/0x1*(parseInt(_0xf8b1be(0xea))/0x2)+parseInt(_0xf8b1be(0xd6))/0x3+-parseInt(_0xf8b1be(0x107))/0x4*(-parseInt(_0xf8b1be(0x102))/0x5)+-parseInt(_0xf8b1be(0xef))/0x6+parseInt(_0xf8b1be(0xf1))/0x7*(-parseInt(_0xf8b1be(0xf5))/0x8)+-parseInt(_0xf8b1be(0x11c))/0x9+parseInt(_0xf8b1be(0xf9))/0xa;if(_0x7692f5===_0x55cbfd)break;else _0x44f9ae['push'](_0x44f9ae['shift']());}catch(_0x2c8abb){_0x44f9ae['push'](_0x44f9ae['shift']());}}}(_0x4b37,0xcf06b));export const cumSum=(_0x26a7a6=>_0x1e7be7=>_0x26a7a6+=_0x1e7be7)(0x0);export function cumSum2(_0x4aa9b8,_0x5cf0c3=!![]){var _0x257683,_0x433b01;_0x5cf0c3?(_0x257683=[0x0],_0x433b01=_0x4aa9b8['length']):(_0x257683=[_0x4aa9b8[0x0]],_0x433b01=_0x4aa9b8['length']);for(let _0x2d1143=0x1;_0x2d1143<_0x433b01;_0x2d1143++){_0x5cf0c3?_0x257683[_0x2d1143]=_0x257683[_0x2d1143-0x1]+_0x4aa9b8[_0x2d1143-0x1]:_0x257683[_0x2d1143]=_0x257683[_0x2d1143-0x1]+_0x4aa9b8[_0x2d1143];}return _0x257683;}export function meshgrid(_0x286de6,_0x49ae23,_0x437ba=[0x0,0x0],_0x523ff4=!![]){const _0x21b5a7=_0x57f2;var _0x4b919b=_0x49ae23[_0x21b5a7(0xd1)],_0x19c869=_0x286de6[_0x21b5a7(0xd1)],_0x2fc188=cumSum(_0x286de6),_0x4eda83=cumSum(_0x49ae23),_0x4adb02=Group[_0x21b5a7(0x11e)](math[_0x21b5a7(0xdc)](_0x4b919b,_0x19c869)['_data']),_0x2987cc=Group[_0x21b5a7(0x11e)](math[_0x21b5a7(0xdc)](_0x4b919b,_0x19c869)[_0x21b5a7(0xe6)]);if(_0x523ff4)for(let _0x4fd75e=0x0;_0x4fd75e<_0x4b919b;_0x4fd75e++){for(let _0x326696=0x0;_0x326696<_0x19c869;_0x326696++){_0x4adb02[_0x4fd75e][_0x326696]=_0x2fc188[_0x326696]+_0x437ba[0x0],_0x4adb02[_0x4fd75e][_0x326696]=_0x4eda83[_0x4fd75e]+_0x437ba[0x1];}}return[_0x4adb02,_0x2987cc];}export function intSlide(_0x34b3c4,_0x49cfe9,_0x3b36b4,_0x2b0774){const _0x3c8f11=_0x57f2;var _0x4e551e=[],_0x523746=[];for(let _0x1c3a43=0x0;_0x1c3a43<_0x2b0774;_0x1c3a43++){_0x4e551e[_0x1c3a43]=_0x49cfe9[_0x3c8f11(0x106)](_0x1c3a43/_0x2b0774)[_0x3c8f11(0xfa)](_0x3b36b4[_0x3c8f11(0x106)]((_0x2b0774-_0x1c3a43)/_0x2b0774)),_0x523746[_0x1c3a43]=Pt[_0x3c8f11(0x115)](_0x4e551e[_0x1c3a43]['$subtract'](_0x34b3c4));}var _0x28bec0=_0x523746[_0x3c8f11(0xd9)]()[_0x3c8f11(0xf4)];return[_0x4e551e[_0x28bec0],_0x28bec0];}export function aa2v(_0x4a5624,_0x383d50,_0x1ee68b){const _0x1c25eb=_0x57f2;let _0x5368cb=Group[_0x1c25eb(0x11e)]([[math['cos'](theta),-math['sin'](theta)],[math[_0x1c25eb(0xeb)](theta),math['cos'](theta)]]),_0x522b78=Group[_0x1c25eb(0x11e)]([[_0x4a5624,0x0],[0x0,_0x383d50]]);return np['array']([[np[_0x1c25eb(0x11b)](theta),-np['sin'](theta)],[np['sin'](theta),np[_0x1c25eb(0x11b)](theta)]]),_0x5368cb[_0x1c25eb(0x114)](_0x522b78['$matrixMultiply'](_0x5368cb[_0x1c25eb(0xfb)]()));}export function v2aa(_0xe03eef){const _0x5d4cf6=_0x57f2;let _0x10e8e5=_0xe03eef[0x0][0x0]*_0xe03eef[0x0][0x0]+_0xe03eef[0x0][0x1]*_0xe03eef[0x0][0x1],_0x2ff159=_0xe03eef[0x1][0x0]*_0xe03eef[0x1][0x0]+_0xe03eef[0x1][0x1]*_0xe03eef[0x1][0x1],_0x34d053=_0xe03eef[0x0][0x0]*_0xe03eef[0x1][0x0]+_0xe03eef[0x0][0x1]*_0xe03eef[0x1][0x1],_0x43ac81=0.5*(_0x10e8e5+_0x2ff159),_0x5ce419=0.5*(_0x10e8e5-_0x2ff159),_0x46a837=_0x34d053,_0x27c399=math[_0x5d4cf6(0x11a)](_0x5ce419*_0x5ce419+_0x46a837*_0x46a837),_0x4157ba=math[_0x5d4cf6(0xe0)](_0x46a837,_0x5ce419+_0x27c399),_0x1aa01b=math['sqrt'](_0x43ac81+_0x27c399),_0x2125f8=math[_0x5d4cf6(0x11a)](_0x43ac81-_0x27c399);return[_0x1aa01b,_0x2125f8,_0x4157ba];}export function symEig(_0x18e5b3){const _0xf9cebd=_0x57f2;let _0x597b0e=_0x18e5b3[0x0][0x0],_0x5ac345=_0x18e5b3[0x0][0x1],_0x53ed52=_0x18e5b3[0x1][0x0],_0x131c2e=_0x18e5b3[0x1][0x1],_0x5e3561=0.5*(_0x597b0e+_0x131c2e),_0x35f6a0=0.5*(_0x597b0e-_0x131c2e),_0x419f57=0.5*(_0x5ac345+_0x53ed52),_0x4f091f=0.5*(_0x53ed52-_0x5ac345),_0x428479=math[_0xf9cebd(0x11a)](_0x35f6a0*_0x35f6a0+_0x419f57*_0x419f57-_0x4f091f*_0x4f091f),_0x43efe0=Group[_0xf9cebd(0x11e)]([[_0x35f6a0+_0x428479,_0x419f57+_0x4f091f],[_0x419f57-_0x4f091f,-_0x35f6a0-_0x428479]]),_0x537ef8=_0x5e3561+_0x428479,_0x2a512d=_0x5e3561-_0x428479;return[_0x43efe0,[_0x537ef8,_0x2a512d]];}export function coord2n(_0x492294,_0x26e4a7,_0x4e1e18=_0x1e1537(0xd2),_0x55e5d0=_0x1e1537(0x10a),_0x18e25b=_0x1e1537(0x100),_0x5bbf1b=0.1){const _0x1f9814=_0x1e1537;let _0x35ddbd=_0x26e4a7[_0x1f9814(0xd1)],_0xb54c54=_0x26e4a7[0x0][_0x1f9814(0xd1)],_0xee1fb2=_0x492294;var _0x156eeb,_0x92d2c2,_0x36fbe1,_0x51142f,_0x413a03,_0x315ccc,_0x2bfaf9,_0x2a48a5,_0x15290f,_0xd2f168,_0x4b1b39,_0x199ab8,_0x37513b,_0x1df774,_0x37e86c,_0x10a61d,_0x27f99c,_0xbfd74f,_0x31e891,_0x4b2853;if(_0x4e1e18==_0x1f9814(0x108))_0x36fbe1=_0x26e4a7['clone'](),_0x51142f=_0x26e4a7[_0x1f9814(0xfb)](),_0x413a03=Group[_0x1f9814(0x11e)]([math[_0x1f9814(0xdc)](_0x35ddbd)[_0x1f9814(0xe6)],math[_0x1f9814(0xdc)](_0x35ddbd)[_0x1f9814(0xe6)]]),_0x315ccc=Group[_0x1f9814(0x11e)]([math[_0x1f9814(0xdc)](_0x35ddbd)[_0x1f9814(0xe6)],math[_0x1f9814(0xdc)](_0x35ddbd)[_0x1f9814(0xe6)]]),_0x315ccc[0x0]=_0x36fbe1['map'](_0x30bb63=>math[_0x1f9814(0xd0)](_0x30bb63[_0x1f9814(0x10a)](_0x492294))),_0x413a03[0x0]=_0x315ccc[0x0]['map'](_0x4dbade=>math[_0x1f9814(0x100)](_0x5bbf1b*_0x4dbade)),_0x2bfaf9=math[_0x1f9814(0x10e)](_0x413a03[0x0]),_0x413a03[0x0]=_0x413a03[0x0]['map'](_0x5ee65b=>_0x5ee65b/_0x2bfaf9),_0x15290f=_0x36fbe1['$zip']()[_0x1f9814(0x104)](_0x4c2fb6=>_0x4c2fb6[_0x1f9814(0x10a)](_0x413a03[0x0])),_0x36fbe1=_0x36fbe1[_0x1f9814(0x104)](_0x142c7f=>_0x142c7f[_0x1f9814(0xd3)](_0x15290f)),_0xee1fb2=_0x492294[_0x1f9814(0xd3)](_0x15290f),_0x315ccc[0x1]=_0x36fbe1[_0x1f9814(0x104)](_0x3cec5b=>math[_0x1f9814(0xd0)](_0x3cec5b[_0x1f9814(0x10a)](_0xee1fb2))),_0x413a03[0x1]=_0x315ccc[0x1][_0x1f9814(0x104)](_0x5ac7b5=>math['exp'](_0x5bbf1b*_0x5ac7b5)),_0x2a48a5=math['sum'](_0x413a03[0x1]),_0x413a03[0x1]=_0x413a03[0x1][_0x1f9814(0x104)](_0x4fd1c1=>_0x4fd1c1/_0x2a48a5),_0xd2f168=_0x51142f[_0x1f9814(0x104)](_0x5b3719=>_0x5b3719[_0x1f9814(0x10a)](_0x413a03[0x0])),_0x4b1b39=_0x51142f[_0x1f9814(0x104)](_0x348154=>_0x348154['dot'](_0x413a03[0x1])),_0x199ab8=Group[_0x1f9814(0xd4)]([_0xd2f168,_0x4b1b39]),_0x199ab8=_0x199ab8[_0x1f9814(0xfb)](),_0x1df774=_0x199ab8[0x0][0x0]*_0x199ab8[0x1][0x1]-_0x199ab8[0x0][0x1]*_0x199ab8[0x1][0x0],_0x37513b=Group[_0x1f9814(0x11e)]([[_0x199ab8[0x1][0x1]/_0x1df774,-_0x199ab8[0x0][0x1]/_0x1df774],[-_0x199ab8[0x1][0x0]/_0x1df774,_0x199ab8[0x0][0x0]/_0x1df774]]),_0x156eeb=Group[_0x1f9814(0xd4)](_0x37513b['map'](_0x3fd1ae=>_0x3fd1ae[_0x1f9814(0x10a)](_0x492294))),_0x92d2c2=Group[_0x1f9814(0xd4)]([_0x413a03['$zip']()[_0x1f9814(0x104)](_0x9e814a=>_0x9e814a[_0x1f9814(0x10a)](_0x156eeb))]);else{if(_0x4e1e18==_0x1f9814(0xde))_0x37e86c=_0x26e4a7[_0x1f9814(0xfc)](),_0x10a61d=_0x37e86c[_0x1f9814(0xfb)](),_0x27f99c=new Pt(_0x37e86c[_0x1f9814(0x104)](_0x963ab7=>math[_0x1f9814(0x11a)](math[_0x1f9814(0xd0)](_0x963ab7[_0x1f9814(0x10a)](_0x492294))))),_0xbfd74f=Group[_0x1f9814(0x11e)](math[_0x1f9814(0x119)](_0x27f99c[_0x1f9814(0x118)]())),_0x10a61d=_0x10a61d[_0x1f9814(0x114)](_0xbfd74f),_0x37e86c=_0x10a61d[_0x1f9814(0xfb)](),_0x199ab8=_0x10a61d[_0x1f9814(0x114)](_0x37e86c),_0x1df774=_0x199ab8[0x0][0x0]*_0x199ab8[0x1][0x1]-_0x199ab8[0x0][0x1]*_0x199ab8[0x1][0x0],_0x37513b=Group['fromArray']([[_0x199ab8[0x1][0x1]/_0x1df774,-_0x199ab8[0x0][0x1]/_0x1df774],[-_0x199ab8[0x1][0x0]/_0x1df774,_0x199ab8[0x0][0x0]/_0x1df774]]),_0x92d2c2=Group[_0x1f9814(0xd4)]([_0xbfd74f['$matrixMultiply'](_0x37e86c)[_0x1f9814(0x114)](_0x37513b)['map'](_0x57a41e=>_0x57a41e[_0x1f9814(0x10a)](_0x492294))]);else _0x4e1e18=='2norm'&&(_0x37e86c=_0x26e4a7[_0x1f9814(0xfc)](),_0x10a61d=_0x37e86c[_0x1f9814(0xfb)](),_0x199ab8=_0x10a61d[_0x1f9814(0x114)](_0x37e86c),_0x1df774=_0x199ab8[0x0][0x0]*_0x199ab8[0x1][0x1]-_0x199ab8[0x0][0x1]*_0x199ab8[0x1][0x0],_0x37513b=Group['fromArray']([[_0x199ab8[0x1][0x1]/_0x1df774,-_0x199ab8[0x0][0x1]/_0x1df774],[-_0x199ab8[0x1][0x0]/_0x1df774,_0x199ab8[0x0][0x0]/_0x1df774]]),_0x92d2c2=Group[_0x1f9814(0xd4)]([_0x37e86c[_0x1f9814(0x114)](_0x37513b)['map'](_0x312dfc=>_0x312dfc[_0x1f9814(0x10a)](_0x492294))]));}return _0x92d2c2;}export function OLD_convexComb2n(_0x458fbd,_0x4f7f1f){const _0x52cccc=_0x1e1537;let _0x51fc97=0x32,_0x4bfd03=0x3,_0x20910e=0.01,_0xf50af6=0.1,_0x4260ca=0.01,_0x509850=new Pt(_0x458fbd[0x0],_0x458fbd[0x1],0x1),_0x59151a=_0x4f7f1f['length'],_0x9e2c2=_0x4f7f1f[0x0][_0x52cccc(0xd1)],_0x312ccf=_0x4f7f1f[_0x52cccc(0xfb)]()[_0x52cccc(0x104)](_0x3c79cb=>{return _0x3c79cb['$subtract'](_0x458fbd)['magnitude']();}),_0x1c2a44=_0x312ccf['map'](_0x58e959=>{const _0x191fce=_0x52cccc;return math[_0x191fce(0x100)](_0x4bfd03/(_0x58e959*_0x4260ca));}),_0x5bc080=_0x1c2a44[_0x52cccc(0x112)]((_0x81a0e7,_0x2b2b15)=>{return _0x81a0e7+_0x2b2b15;}),_0x276c19=new Pt(_0x1c2a44[_0x52cccc(0x104)](_0x2f1c3c=>_0x2f1c3c/_0x5bc080)),_0x6a571e=_0x509850[_0x52cccc(0xdd)](_0x4f7f1f[_0x52cccc(0x104)](_0x5b3c97=>_0x5b3c97[_0x52cccc(0x10a)](_0x276c19))),_0x137cfc=_0x276c19['clone'](),_0x3fc4dd=new Pt(math[_0x52cccc(0xdc)](_0x59151a+0x1)[_0x52cccc(0xe6)]),_0x4a20ac=_0x4f7f1f[_0x52cccc(0xfc)]();_0x4a20ac[_0x52cccc(0xe3)](new Pt(math['ones'](_0x9e2c2)[_0x52cccc(0xe6)]));if(_0x9e2c2==0x1)_0x137cfc=new Pt([0x1]);else{if(_0x9e2c2==0x2){let _0x482eed=_0x4a20ac[0x0][0x0],_0x507b0f=_0x4a20ac[0x0][0x1],_0xc5c51b=_0x4a20ac[0x1][0x0],_0x446b18=_0x4a20ac[0x1][0x1],_0x5e7a9c=Group[_0x52cccc(0x11e)]([[_0x482eed-_0x507b0f,_0xc5c51b-_0x446b18],[_0x446b18-_0xc5c51b,_0x482eed-_0x507b0f]]);_0x5e7a9c[_0x52cccc(0x10d)]((_0x482eed-_0x507b0f)*(_0x482eed-_0x507b0f)+(_0x446b18-_0xc5c51b)*(_0x446b18-_0xc5c51b));let _0x3c51a4=_0x5e7a9c[_0x52cccc(0x104)](_0x1c51c9=>_0x1c51c9[_0x52cccc(0x10a)](new Pt(_0x509850[0x0]-_0x507b0f,_0x509850[0x1]-_0x446b18)))[0x0];_0x3c51a4=math[_0x52cccc(0xd9)](0x1,math[_0x52cccc(0x10b)](_0x3c51a4,0x0)),_0x137cfc=new Pt(_0x3c51a4,0x1-_0x3c51a4);}else{if(_0x9e2c2==0x3){let _0x18c53e=_0x4a20ac[0x0][0x0],_0x403875=_0x4a20ac[0x0][0x1],_0x26bc87=_0x4a20ac[0x0][0x2],_0x502d71=_0x4a20ac[0x1][0x0],_0x3521b7=_0x4a20ac[0x1][0x1],_0x3ea3ff=_0x4a20ac[0x1][0x2],_0x397666=_0x4a20ac[0x2][0x0],_0x4d0fa8=_0x4a20ac[0x2][0x1],_0x3419fc=_0x4a20ac[0x2][0x2],_0x4dedab=Group[_0x52cccc(0x11e)]([[_0x3521b7*_0x3419fc-_0x3ea3ff*_0x4d0fa8,_0x26bc87*_0x4d0fa8-_0x403875*_0x3419fc,_0x403875*_0x3ea3ff-_0x26bc87*_0x3521b7],[_0x3ea3ff*_0x397666-_0x502d71*_0x3419fc,_0x18c53e*_0x3419fc-_0x26bc87*_0x397666,_0x26bc87*_0x502d71-_0x18c53e*_0x3ea3ff],[_0x502d71*_0x4d0fa8-_0x3521b7*_0x397666,_0x403875*_0x397666-_0x18c53e*_0x4d0fa8,_0x18c53e*_0x3521b7-_0x403875*_0x502d71]]);_0x4dedab[_0x52cccc(0x10d)](_0x18c53e*(_0x3521b7*_0x3419fc-_0x3ea3ff*_0x4d0fa8)-_0x403875*(_0x502d71*_0x3419fc-_0x3ea3ff*_0x397666)+_0x26bc87*(_0x502d71*_0x4d0fa8-_0x3521b7*_0x397666)),_0x137cfc=new Pt(_0x4dedab[_0x52cccc(0x104)](_0x463dfb=>_0x463dfb[_0x52cccc(0x10a)](new Pt(_0x509850[0x0],_0x509850[0x1],0x1))));}else{for(let _0x5c67fb=0x0,_0x30d662=_0x51fc97;_0x5c67fb<_0x30d662;_0x5c67fb++){let _0x22d6cf=_0x137cfc['$add'](_0x276c19),_0xc44f2d=_0x22d6cf[_0x52cccc(0x106)](_0x22d6cf),_0x26d4b2=_0xc44f2d['$divide'](_0xc44f2d[_0x52cccc(0xfa)](_0x20910e)),_0x8fdded=_0x4a20ac[_0x52cccc(0x114)](_0x4a20ac[_0x52cccc(0x104)](_0x5113ac=>_0x5113ac[_0x52cccc(0x106)](_0x26d4b2))['$zip']()),_0x40c47d=_0x8fdded[0x0][0x0],_0x4780ce=_0x8fdded[0x0][0x1],_0x1bcdba=_0x8fdded[0x0][0x2],_0x1a4c9a=_0x8fdded[0x1][0x0],_0x5373d8=_0x8fdded[0x1][0x1],_0x55d327=_0x8fdded[0x1][0x2],_0x2b9ff9=_0x8fdded[0x2][0x0],_0x28b7d6=_0x8fdded[0x2][0x1],_0x15c1a1=_0x8fdded[0x2][0x2],_0x5b240b=Group[_0x52cccc(0x11e)]([[_0x5373d8*_0x15c1a1-_0x55d327*_0x28b7d6,_0x1bcdba*_0x28b7d6-_0x4780ce*_0x15c1a1,_0x4780ce*_0x55d327-_0x1bcdba*_0x5373d8],[_0x55d327*_0x2b9ff9-_0x1a4c9a*_0x15c1a1,_0x40c47d*_0x15c1a1-_0x1bcdba*_0x2b9ff9,_0x1bcdba*_0x1a4c9a-_0x40c47d*_0x55d327],[_0x1a4c9a*_0x28b7d6-_0x5373d8*_0x2b9ff9,_0x4780ce*_0x2b9ff9-_0x40c47d*_0x28b7d6,_0x40c47d*_0x5373d8-_0x4780ce*_0x1a4c9a]]);_0x5b240b[_0x52cccc(0x10d)](_0x40c47d*(_0x5373d8*_0x15c1a1-_0x55d327*_0x28b7d6)-_0x4780ce*(_0x1a4c9a*_0x15c1a1-_0x55d327*_0x2b9ff9)+_0x1bcdba*(_0x1a4c9a*_0x28b7d6-_0x5373d8*_0x2b9ff9));let _0x131be4=new Pt(_0x4a20ac['$zip']()['map'](_0x16d0b8=>_0x16d0b8[_0x52cccc(0x10a)](_0x3fc4dd)));_0x131be4['add'](_0x137cfc[_0x52cccc(0xdd)](_0xc44f2d[_0x52cccc(0x104)](_0x5f4d98=>_0x20910e/_0x5f4d98)));let _0x208a8d=new Pt(_0x4a20ac[_0x52cccc(0x104)](_0x1eb207=>_0x1eb207[_0x52cccc(0x10a)](_0x137cfc))[_0x52cccc(0xd3)](_0x6a571e)),_0x557a4d=new Pt(_0x131be4['$subtract'](_0x4a20ac[_0x52cccc(0xfb)]()[_0x52cccc(0x114)](_0x5b240b[_0x52cccc(0x114)](_0x4a20ac))[_0x52cccc(0x104)](_0xbc878=>_0xbc878[_0x52cccc(0x10a)](_0x131be4[_0x52cccc(0x106)](_0x26d4b2)))));_0x557a4d[_0x52cccc(0xdb)](_0x26d4b2);let _0x3fee83=new Pt(_0x26d4b2[_0x52cccc(0x106)](_0x4a20ac['$zip']()['$matrixMultiply'](_0x5b240b)[_0x52cccc(0x104)](_0x14be87=>_0x14be87[_0x52cccc(0x10a)](_0x208a8d)))),_0x587da4=new Pt(_0x5b240b['$matrixMultiply'](_0x4a20ac)[_0x52cccc(0x104)](_0x1f33b2=>_0x1f33b2[_0x52cccc(0x10a)](_0x131be4[_0x52cccc(0x106)](_0x26d4b2)))),_0x2b2473=new Pt(_0x5b240b['map'](_0x45a530=>_0x45a530[_0x52cccc(0x10a)](_0x208a8d[_0x52cccc(0x106)](-0x1))));_0x137cfc[_0x52cccc(0xd3)](_0x557a4d[_0x52cccc(0xfa)](_0x3fee83)['$multiply'](_0xf50af6)),_0x3fc4dd[_0x52cccc(0xd3)](_0x587da4[_0x52cccc(0xfa)](_0x2b2473)['$multiply'](_0xf50af6));}_0x137cfc[_0x52cccc(0xf6)](_0x276c19);let _0x230ef6=_0x137cfc[_0x52cccc(0x112)]((_0x5834f1,_0xb685e5)=>{return _0x5834f1+_0xb685e5;});_0x137cfc=_0x137cfc[_0x52cccc(0x104)](_0xe61849=>_0xe61849/_0x230ef6);}}}return _0x137cfc;}export function simpCorners(_0x4a26b3){const _0x501cda=_0x1e1537;let _0x2d731f=[[]];for(let _0x1bf7df=0x1;_0x1bf7df<=_0x4a26b3;_0x1bf7df++){_0x2d731f[_0x1bf7df]=Group[_0x501cda(0x11e)](math['identity'](_0x1bf7df)[_0x501cda(0xe6)]);}return _0x2d731f;}export function simpEdges(_0x4aa19b,_0x2f03c7){const _0x2e1618=_0x1e1537;var _0x457a33;let _0x39c045=[];for(let _0x4d9b0d=0x2;_0x4d9b0d<=_0x2f03c7;_0x4d9b0d++){for(let _0x30dcbf=0x0;_0x30dcbf<_0x39c045['length'];_0x30dcbf++){_0x39c045[_0x30dcbf][0x0]=_0x39c045[_0x30dcbf][0x0][_0x2e1618(0xcd)](0x0),_0x39c045[_0x30dcbf][0x1]=_0x39c045[_0x30dcbf][0x1][_0x2e1618(0xcd)](0x0);}_0x457a33=Group['fromArray'](math['identity'](_0x4d9b0d)[_0x2e1618(0xe6)]),_0x39c045=_0x39c045[_0x2e1618(0x111)](Polygon[_0x2e1618(0xe2)](_0x457a33,_0x4d9b0d-0x1));}return _0x39c045;}export function ball1Corners(_0x1cf305){const _0x574fd7=_0x1e1537;let _0x4861c9=[[]];_0x4861c9[0x1]=Group[_0x574fd7(0x11e)]([[0x1],[-0x1]]);for(let _0x1ce6cd=0x2;_0x1ce6cd<=_0x1cf305;_0x1ce6cd++){let _0x3f2b93=Group[_0x574fd7(0x11e)](math['identity'](_0x1ce6cd)['_data']),_0x1df727=_0x3f2b93[_0x574fd7(0x104)](_0x673601=>_0x673601[_0x574fd7(0x106)](-0x1));_0x4861c9[_0x1ce6cd]=_0x3f2b93[_0x574fd7(0x111)](_0x1df727);}return _0x4861c9;}export function ball1Edges(_0x2c4f58){const _0x30cdf3=_0x1e1537;var _0xf11aa6,_0x2905c5,_0x102a1c,_0x3a860e,_0x5e2b54,_0x4957c5,_0x4edf83;_0x4edf83=[];if(_0x2c4f58>=0x2)for(let _0x852fe9=0x2;_0x852fe9<=_0x2c4f58;_0x852fe9++){for(let _0x9dd075=0x0;_0x9dd075<_0x4edf83[_0x30cdf3(0xd1)];_0x9dd075++){_0x4edf83[_0x9dd075][0x0]=_0x4edf83[_0x9dd075][0x0]['$concat'](0x0),_0x4edf83[_0x9dd075][0x1]=_0x4edf83[_0x9dd075][0x1][_0x30cdf3(0xcd)](0x0);}_0xf11aa6=Group[_0x30cdf3(0x11e)](math[_0x30cdf3(0xee)](_0x852fe9)[_0x30cdf3(0xe6)]),_0x3a860e=_0xf11aa6[_0x30cdf3(0xdf)](0x0,_0x852fe9-0x1),_0x5e2b54=_0x3a860e[_0x30cdf3(0x104)](_0x24cc1b=>_0x24cc1b[_0x30cdf3(0x106)](-0x1)),_0x4957c5=_0xf11aa6[_0x852fe9-0x1],_0xf11aa6=_0x3a860e[_0x30cdf3(0x111)](_0x5e2b54),_0x2905c5=_0xf11aa6[_0x30cdf3(0x111)](_0x4957c5),_0x102a1c=_0xf11aa6[_0x30cdf3(0x111)](_0x4957c5[_0x30cdf3(0x106)](-0x1)),_0x4edf83=_0x4edf83[_0x30cdf3(0x111)](Polygon[_0x30cdf3(0xe2)](_0x2905c5,0x2*(_0x852fe9-0x1))),_0x4edf83=_0x4edf83[_0x30cdf3(0x111)](Polygon[_0x30cdf3(0xe2)](_0x102a1c,0x2*(_0x852fe9-0x1)));}return _0x4edf83;}export function cubeCorners(_0xfe977f){const _0x239abb=_0x1e1537;var _0x253155=[[]],_0x2af71b,_0x4fd80d,_0x4cf595;if(_0xfe977f>=0x1){let _0x2a0185=new Group([0x0,0x1]);_0x253155[0x1]=_0x2a0185,_0x253155[0x1]=_0x253155[0x1][_0x239abb(0xfb)]();if(_0xfe977f>=0x2)for(let _0x3f3388=0x2;_0x3f3388<=_0xfe977f;_0x3f3388++){_0x2af71b=_0x253155[_0x3f3388-0x1][_0x239abb(0xfb)]()[_0x239abb(0xfc)](),_0x4fd80d=_0x2af71b[_0x239abb(0x111)](new Group(math[_0x239abb(0xdc)](_0x2af71b[0x0][_0x239abb(0xd1)])[_0x239abb(0xe6)])),_0x4cf595=_0x2af71b['concat'](new Group(math[_0x239abb(0xfe)](_0x2af71b[0x0][_0x239abb(0xd1)])[_0x239abb(0xe6)])),_0x253155[_0x3f3388]=_0x4fd80d[_0x239abb(0xfb)]()[_0x239abb(0x111)](_0x4cf595[_0x239abb(0xfb)]());}}return _0x253155;}export function cubeEdges(_0x5aff92,_0x45526e,_0x309a67=_0x1e1537(0xe2)){const _0xe9fc05=_0x1e1537;var _0x18004e=[[]],_0x37099d=[],_0x4a0e88,_0x11c137,_0x111fde,_0x7de898,_0x29776b,_0x203fef,_0x191834,_0x2b1f7b,_0x3de334,_0x19848d,_0x18e2cc,_0x2636dd;if(_0x309a67==_0xe9fc05(0xe2))for(let _0x2a4016=0x0;_0x2a4016<_0x5aff92[_0xe9fc05(0xd1)];_0x2a4016++){_0x4a0e88=new Group(_0x5aff92[_0x2a4016]);for(let _0x403adb=0x0;_0x403adb<_0x4a0e88[0x0][_0xe9fc05(0xd1)];_0x403adb++){if(_0x4a0e88[0x0][_0x403adb]==0x1){let _0x347b58=_0x4a0e88[0x0][_0xe9fc05(0xfc)]();_0x347b58[_0x403adb]=0x0,_0x4a0e88['push'](_0x347b58);}}let _0xbb9c96=Polygon['network'](_0x4a0e88,0x0);_0x37099d=_0x37099d[_0xe9fc05(0x111)](_0xbb9c96);}else{if(_0x309a67==_0xe9fc05(0xf7)){if(_0x45526e==0x0)_0x203fef=[[]],_0x19848d=[[]];else{if(_0x45526e==0x1)_0x203fef=Polygon[_0xe9fc05(0xe2)](Group[_0xe9fc05(0xd4)](_0x5aff92[0x1]),0x0),_0x19848d=Group[_0xe9fc05(0x11e)]([[0x0]]);else{_0x203fef=Polygon[_0xe9fc05(0xe2)](Group[_0xe9fc05(0xd4)](_0x5aff92[0x1]),0x0),_0x19848d=Group[_0xe9fc05(0x11e)]([[],[0x0]]);for(let _0x14c3c5=0x1;_0x14c3c5<_0x45526e;_0x14c3c5++){_0x111fde=_0x5aff92[_0x14c3c5],_0x7de898=_0x111fde[_0xe9fc05(0x104)](_0x2697b1=>_0x2697b1[_0xe9fc05(0xcd)](0x0)),_0x29776b=_0x111fde[_0xe9fc05(0x104)](_0x40917a=>_0x40917a['$concat'](0x1)),_0x191834=_0x203fef['map'](_0x448287=>Group[_0xe9fc05(0xd4)]([_0x448287[0x0][_0xe9fc05(0xcd)](0x0),_0x448287[0x1]['$concat'](0x0)])),_0x2b1f7b=_0x203fef[_0xe9fc05(0x104)](_0x1f9517=>Group[_0xe9fc05(0xd4)]([_0x1f9517[0x0][_0xe9fc05(0xcd)](0x1),_0x1f9517[0x1]['$concat'](0x1)])),_0x3de334=_0x111fde['map']((_0x2faec9,_0xfebaa4)=>Group[_0xe9fc05(0xd4)]([_0x7de898[_0xfebaa4],_0x29776b[_0xfebaa4]])),_0x18e2cc=_0x191834[_0xe9fc05(0xd1)],_0x2636dd=_0x2b1f7b[_0xe9fc05(0xd1)],_0x203fef=_0x191834[_0xe9fc05(0x111)](_0x2b1f7b)['concat'](_0x3de334);for(let _0x340b2d=0x1;_0x340b2d<_0x14c3c5+0x1;_0x340b2d++){_0x19848d[_0x340b2d]=new Pt(_0x19848d[_0x340b2d][_0xe9fc05(0x118)]()[_0xe9fc05(0x111)](_0x19848d[_0x340b2d][_0xe9fc05(0x104)](_0x26a5ca=>_0x26a5ca+_0x18e2cc)[_0xe9fc05(0x118)]()));}_0x19848d[_0xe9fc05(0xe3)](new Pt(_0x3de334[_0xe9fc05(0x104)]((_0x2a0673,_0x3a6804)=>_0x18e2cc+_0x2636dd+_0x3a6804)));}}}_0x45526e>0x1&&(_0x19848d=_0x19848d['slice'](0x1,_0x19848d['length'])),_0x37099d=_0x203fef,_0x18004e=_0x19848d;}}var _0x2ca31f={'cubee':_0x37099d,'cubeei':_0x18004e};return _0x2ca31f;}export function intersectPtsPt(_0x536564,_0x5d7d11){const _0x4a9a11=_0x1e1537;return _0x536564[Polygon[_0x4a9a11(0x109)](_0x536564,_0x5d7d11)];}export function intersectPolyPt(_0x5c72b0,_0x5428d9){const _0x394075=_0x1e1537;let _0x346647=_0x5c72b0[_0x394075(0xfc)]();_0x346647[_0x394075(0xe3)](_0x5c72b0[0x0]);let _0x2c0f10=Curve[_0x394075(0x110)](_0x346647,0x64,0x0);var _0x189305=_0x5428d9;return!Polygon[_0x394075(0xe4)](_0x5c72b0,_0x5428d9)&&(_0x189305=_0x2c0f10[Polygon[_0x394075(0x109)](_0x2c0f10,_0x5428d9)]),_0x189305;}export const indexOfAll=(_0x3bb22a,_0x1febd7)=>_0x3bb22a[_0x1e1537(0x112)]((_0x6e41f9,_0x3195e9,_0x487575)=>_0x3195e9===_0x1febd7?[..._0x6e41f9,_0x487575]:_0x6e41f9,[]);export function integrateMDP(_0x3c91d4,_0x33f653,_0x20df97,_0x46260b,_0x3f010f,_0x28dc4c,_0x4c4478,_0x4b2447){const _0x39e9dc=_0x1e1537;var _0x3ffb41={},_0x48267b=[],_0x4393e5=[],_0x4437a5=[],_0x55ce8b=[],_0x32966f=[],_0x4e9230=[],_0x537a4f=[],_0x40f751=[],_0x3969b9=[],_0x2854eb=[],_0x4caecb=[],_0x5b923f=[],_0x992aba=[],_0x379169=[],_0x540f1e=[],_0x257df4=[],_0x4d33e2=[],_0x3a7286=[];for(let _0x4aa281=0x0;_0x4aa281<_0x4b2447;_0x4aa281++){_0x48267b[_0x4aa281]=[_0x20df97[_0x4aa281]['$matrixMultiply'](_0x46260b)['$matrixMultiply'](_0x3f010f)],_0x4393e5[_0x4aa281]=[_0x46260b[_0x39e9dc(0x114)](_0x3f010f[_0x39e9dc(0x114)](_0x20df97[_0x4aa281]))],_0x4437a5[_0x4aa281]=[_0x3f010f['$matrixMultiply'](_0x20df97[_0x4aa281]['$matrixMultiply'](_0x46260b))],_0x55ce8b[_0x4aa281]=[_0x3c91d4],_0x32966f[_0x4aa281]=[_0x55ce8b[_0x4aa281][0x0][_0x39e9dc(0x114)](_0x20df97[_0x4aa281])],_0x4e9230[_0x4aa281]=[_0x32966f[_0x4aa281][0x0][_0x39e9dc(0x114)](_0x46260b)];for(let _0x2f6eca=0x0;_0x2f6eca<_0x28dc4c;_0x2f6eca++){_0x48267b[_0x4aa281][_0x2f6eca+0x1]=_0x48267b[_0x4aa281][0x0][_0x39e9dc(0x114)](_0x48267b[_0x4aa281][_0x2f6eca]),_0x4393e5[_0x4aa281][_0x2f6eca+0x1]=_0x4393e5[_0x4aa281][0x0][_0x39e9dc(0x114)](_0x4393e5[_0x4aa281][_0x2f6eca]),_0x4437a5[_0x4aa281][_0x2f6eca+0x1]=_0x4437a5[_0x4aa281][0x0][_0x39e9dc(0x114)](_0x4437a5[_0x4aa281][_0x2f6eca]),_0x55ce8b[_0x4aa281][_0x2f6eca+0x1]=_0x55ce8b[_0x4aa281][0x0][_0x39e9dc(0x114)](_0x48267b[_0x4aa281][_0x2f6eca]),_0x32966f[_0x4aa281][_0x2f6eca+0x1]=_0x32966f[_0x4aa281][0x0][_0x39e9dc(0x114)](_0x4393e5[_0x4aa281][_0x2f6eca]),_0x4e9230[_0x4aa281][_0x2f6eca+0x1]=_0x4e9230[_0x4aa281][0x0][_0x39e9dc(0x114)](_0x4437a5[_0x4aa281][_0x2f6eca]);}_0x537a4f[_0x4aa281]=_0x55ce8b[_0x4aa281][_0x28dc4c-0x1][0x0],_0x40f751[_0x4aa281]=_0x32966f[_0x4aa281][_0x28dc4c-0x1][0x0],_0x3969b9[_0x4aa281]=_0x4e9230[_0x4aa281][_0x28dc4c-0x1][0x0];}_0x2854eb=[_0x33f653[_0x39e9dc(0x114)](_0x46260b)[_0x39e9dc(0x114)](_0x3f010f)],_0x4caecb=[_0x46260b['$matrixMultiply'](_0x3f010f[_0x39e9dc(0x114)](_0x33f653))],_0x5b923f=[_0x3f010f[_0x39e9dc(0x114)](_0x33f653[_0x39e9dc(0x114)](_0x46260b))],_0x992aba=[_0x3c91d4],_0x540f1e=[_0x992aba[0x0][_0x39e9dc(0x114)](_0x33f653)],_0x379169=[_0x540f1e[0x0]['$matrixMultiply'](_0x46260b)];for(let _0x414231=0x0;_0x414231<_0x28dc4c;_0x414231++){_0x2854eb[_0x414231+0x1]=_0x2854eb[0x0][_0x39e9dc(0x114)](_0x2854eb[_0x414231]),_0x4caecb[_0x414231+0x1]=_0x4caecb[0x0][_0x39e9dc(0x114)](_0x4caecb[_0x414231]),_0x5b923f[_0x414231+0x1]=_0x5b923f[0x0][_0x39e9dc(0x114)](_0x5b923f[_0x414231]),_0x992aba[_0x414231+0x1]=_0x992aba[0x0][_0x39e9dc(0x114)](_0x2854eb[_0x414231]),_0x540f1e[_0x414231+0x1]=_0x540f1e[0x0][_0x39e9dc(0x114)](_0x4caecb[_0x414231]),_0x379169[_0x414231+0x1]=_0x379169[0x0][_0x39e9dc(0x114)](_0x5b923f[_0x414231]);}return _0x257df4=_0x992aba[_0x28dc4c-0x1][0x0],_0x3a7286=_0x540f1e[_0x28dc4c-0x1][0x0],_0x4d33e2=_0x379169[_0x28dc4c-0x1][0x0],_0x3ffb41['Mts']=_0x48267b,_0x3ffb41[_0x39e9dc(0x101)]=_0x4393e5,_0x3ffb41[_0x39e9dc(0x11d)]=_0x4437a5,_0x3ffb41[_0x39e9dc(0xfd)]=_0x55ce8b,_0x3ffb41[_0x39e9dc(0x10f)]=_0x32966f,_0x3ffb41[_0x39e9dc(0xd7)]=_0x4e9230,_0x3ffb41[_0x39e9dc(0xd5)]=_0x537a4f,_0x3ffb41['ys']=_0x40f751,_0x3ffb41['xs']=_0x3969b9,_0x3ffb41['Mt']=_0x2854eb,_0x3ffb41['Nt']=_0x4caecb,_0x3ffb41['Kt']=_0x5b923f,_0x3ffb41[_0x39e9dc(0xf2)]=_0x992aba,_0x3ffb41['yt']=_0x540f1e,_0x3ffb41['xt']=_0x379169,_0x3ffb41[_0x39e9dc(0xda)]=_0x257df4,_0x3ffb41['y']=_0x3a7286,_0x3ffb41['x']=_0x4d33e2,_0x3ffb41;}function _0x57f2(_0x2c2786,_0x45adc5){const _0x4b376a=_0x4b37();return _0x57f2=function(_0x57f2a4,_0x3f3a20){_0x57f2a4=_0x57f2a4-0xcd;let _0x3d4ba4=_0x4b376a[_0x57f2a4];return _0x3d4ba4;},_0x57f2(_0x2c2786,_0x45adc5);}export function convexComb2n(_0x556d04,_0x2534c4){const _0x156d48=_0x1e1537;let _0x3d689b=0x32,_0x281401=0x3,_0x1333c0=0.01,_0x3ad28a=0.1,_0x21156e=0.01,_0x3d18da=new Pt(_0x556d04[0x0],_0x556d04[0x1],0x1),_0x2a5022=_0x2534c4[_0x156d48(0xd1)],_0x3dbb74=_0x2534c4[0x0][_0x156d48(0xd1)],_0x5071be=_0x2534c4['$zip']()['map'](_0x1e3e70=>{const _0x30b64c=_0x156d48;return _0x1e3e70[_0x30b64c(0xdd)](_0x556d04)['magnitude']();}),_0x447c8a=_0x5071be[_0x156d48(0x104)](_0x423580=>{return math['exp'](_0x281401/(_0x423580*_0x21156e));}),_0x5744e5=_0x447c8a[_0x156d48(0x112)]((_0x2f2018,_0x3a3e83)=>{return _0x2f2018+_0x3a3e83;}),_0x443785=new Pt(_0x447c8a['map'](_0x16e37c=>_0x16e37c/_0x5744e5)),_0x9241e4=_0x3d18da[_0x156d48(0xdd)](_0x2534c4[_0x156d48(0x104)](_0x539582=>_0x539582['dot'](_0x443785))),_0x43bd5f=_0x443785[_0x156d48(0xfc)](),_0x3be836=new Pt(math[_0x156d48(0xdc)](_0x2a5022+0x1)[_0x156d48(0xe6)]),_0x308cba=_0x2534c4[_0x156d48(0xfc)]();_0x308cba[_0x156d48(0xe3)](new Pt(math['ones'](_0x3dbb74)[_0x156d48(0xe6)]));if(_0x3dbb74==0x1)_0x43bd5f=new Pt([0x1]);else{if(_0x3dbb74==0x2){let _0x890016=_0x308cba[0x0][0x0],_0x5c0ec0=_0x308cba[0x0][0x1],_0x280fb9=_0x308cba[0x1][0x0],_0x14a36f=_0x308cba[0x1][0x1],_0x43c9dd=Group['fromArray']([[_0x890016-_0x5c0ec0,_0x280fb9-_0x14a36f],[_0x14a36f-_0x280fb9,_0x890016-_0x5c0ec0]]);_0x43c9dd['divide']((_0x890016-_0x5c0ec0)*(_0x890016-_0x5c0ec0)+(_0x14a36f-_0x280fb9)*(_0x14a36f-_0x280fb9));let _0x5d433d=_0x43c9dd['map'](_0x2006d1=>_0x2006d1[_0x156d48(0x10a)](new Pt(_0x3d18da[0x0]-_0x5c0ec0,_0x3d18da[0x1]-_0x14a36f)))[0x0];_0x5d433d=math[_0x156d48(0xd9)](0x1,math['max'](_0x5d433d,0x0)),_0x43bd5f=new Pt(_0x5d433d,0x1-_0x5d433d);}else{if(_0x3dbb74==0x3){let _0x3a86bd=_0x308cba[0x0][0x0],_0x1a5d78=_0x308cba[0x0][0x1],_0x13ed86=_0x308cba[0x0][0x2],_0x41a71e=_0x308cba[0x1][0x0],_0x34f54d=_0x308cba[0x1][0x1],_0x2d5aa0=_0x308cba[0x1][0x2],_0x392ed0=_0x308cba[0x2][0x0],_0xd3ee3a=_0x308cba[0x2][0x1],_0x345e76=_0x308cba[0x2][0x2],_0x478b66=Group[_0x156d48(0x11e)]([[_0x34f54d*_0x345e76-_0x2d5aa0*_0xd3ee3a,_0x13ed86*_0xd3ee3a-_0x1a5d78*_0x345e76,_0x1a5d78*_0x2d5aa0-_0x13ed86*_0x34f54d],[_0x2d5aa0*_0x392ed0-_0x41a71e*_0x345e76,_0x3a86bd*_0x345e76-_0x13ed86*_0x392ed0,_0x13ed86*_0x41a71e-_0x3a86bd*_0x2d5aa0],[_0x41a71e*_0xd3ee3a-_0x34f54d*_0x392ed0,_0x1a5d78*_0x392ed0-_0x3a86bd*_0xd3ee3a,_0x3a86bd*_0x34f54d-_0x1a5d78*_0x41a71e]]);_0x478b66[_0x156d48(0x10d)](_0x3a86bd*(_0x34f54d*_0x345e76-_0x2d5aa0*_0xd3ee3a)-_0x1a5d78*(_0x41a71e*_0x345e76-_0x2d5aa0*_0x392ed0)+_0x13ed86*(_0x41a71e*_0xd3ee3a-_0x34f54d*_0x392ed0)),_0x43bd5f=new Pt(_0x478b66[_0x156d48(0x104)](_0xfb911e=>_0xfb911e[_0x156d48(0x10a)](new Pt(_0x3d18da[0x0],_0x3d18da[0x1],0x1))));}else{for(let _0x37f814=0x0,_0x59d4d3=_0x3d689b;_0x37f814<_0x59d4d3;_0x37f814++){let _0xd5651d=_0x43bd5f[_0x156d48(0xfa)](_0x443785),_0x49f6f3=_0xd5651d[_0x156d48(0x106)](_0xd5651d),_0x12ae2e=_0x49f6f3[_0x156d48(0xe7)](_0x49f6f3[_0x156d48(0xfa)](_0x1333c0)),_0x595b34=_0x308cba[_0x156d48(0x114)](_0x308cba[_0x156d48(0x104)](_0x28bb6b=>_0x28bb6b[_0x156d48(0x106)](_0x12ae2e))[_0x156d48(0xfb)]()),_0x1aafa1=_0x595b34[0x0][0x0],_0x555c2e=_0x595b34[0x0][0x1],_0x2aa6f8=_0x595b34[0x0][0x2],_0x20d979=_0x595b34[0x1][0x0],_0x3e1aad=_0x595b34[0x1][0x1],_0x4dfdc2=_0x595b34[0x1][0x2],_0x26d482=_0x595b34[0x2][0x0],_0x5c0019=_0x595b34[0x2][0x1],_0xb11902=_0x595b34[0x2][0x2],_0x145da5=Group['fromArray']([[_0x3e1aad*_0xb11902-_0x4dfdc2*_0x5c0019,_0x2aa6f8*_0x5c0019-_0x555c2e*_0xb11902,_0x555c2e*_0x4dfdc2-_0x2aa6f8*_0x3e1aad],[_0x4dfdc2*_0x26d482-_0x20d979*_0xb11902,_0x1aafa1*_0xb11902-_0x2aa6f8*_0x26d482,_0x2aa6f8*_0x20d979-_0x1aafa1*_0x4dfdc2],[_0x20d979*_0x5c0019-_0x3e1aad*_0x26d482,_0x555c2e*_0x26d482-_0x1aafa1*_0x5c0019,_0x1aafa1*_0x3e1aad-_0x555c2e*_0x20d979]]);_0x145da5['divide'](_0x1aafa1*(_0x3e1aad*_0xb11902-_0x4dfdc2*_0x5c0019)-_0x555c2e*(_0x20d979*_0xb11902-_0x4dfdc2*_0x26d482)+_0x2aa6f8*(_0x20d979*_0x5c0019-_0x3e1aad*_0x26d482));let _0x52f4b9=new Pt(_0x308cba['$zip']()['map'](_0x532c92=>_0x532c92[_0x156d48(0x10a)](_0x3be836)));_0x52f4b9[_0x156d48(0xf6)](_0x43bd5f['$subtract'](_0x49f6f3['map'](_0xaa2f7c=>_0x1333c0/_0xaa2f7c)));let _0x4d5a0f=new Pt(_0x308cba[_0x156d48(0x104)](_0x4adc42=>_0x4adc42['dot'](_0x43bd5f))[_0x156d48(0xd3)](_0x9241e4)),_0x5ce971=new Pt(_0x52f4b9[_0x156d48(0xdd)](_0x308cba[_0x156d48(0xfb)]()[_0x156d48(0x114)](_0x145da5[_0x156d48(0x114)](_0x308cba))['map'](_0x4c7b94=>_0x4c7b94[_0x156d48(0x10a)](_0x52f4b9[_0x156d48(0x106)](_0x12ae2e)))));_0x5ce971[_0x156d48(0xdb)](_0x12ae2e);let _0x333294=new Pt(_0x12ae2e[_0x156d48(0x106)](_0x308cba[_0x156d48(0xfb)]()[_0x156d48(0x114)](_0x145da5)['map'](_0x5d9f7c=>_0x5d9f7c[_0x156d48(0x10a)](_0x4d5a0f)))),_0x1e26d6=new Pt(_0x145da5[_0x156d48(0x114)](_0x308cba)[_0x156d48(0x104)](_0x3a2f19=>_0x3a2f19[_0x156d48(0x10a)](_0x52f4b9[_0x156d48(0x106)](_0x12ae2e)))),_0x827240=new Pt(_0x145da5[_0x156d48(0x104)](_0x5a8b22=>_0x5a8b22[_0x156d48(0x10a)](_0x4d5a0f['$multiply'](-0x1))));_0x43bd5f[_0x156d48(0xd3)](_0x5ce971[_0x156d48(0xfa)](_0x333294)['$multiply'](_0x3ad28a)),_0x3be836['subtract'](_0x1e26d6['$add'](_0x827240)[_0x156d48(0x106)](_0x3ad28a));}_0x43bd5f[_0x156d48(0xf6)](_0x443785);let _0x4d8a21=_0x43bd5f[_0x156d48(0x112)]((_0x1e0e95,_0x2f428f)=>{return _0x1e0e95+_0x2f428f;});_0x43bd5f=_0x43bd5f[_0x156d48(0x104)](_0x448a16=>_0x448a16/_0x4d8a21);}}}return _0x43bd5f;}export function tagEdges(_0x39ae8b,_0x368a36){const _0xcfdec3=_0x1e1537;var _0x3264d9={};_0x3264d9['selfLoops']=[],_0x3264d9['bothWays']=[],_0x3264d9[_0xcfdec3(0x10c)]=[];for(let _0x39e030=0x0;_0x39e030<_0x39ae8b['length'];_0x39e030++){if(_0x39ae8b[_0x39e030]==_0x368a36[_0x39e030])_0x3264d9[_0xcfdec3(0xff)][_0xcfdec3(0xe3)](_0x39e030);else indexOfAll(_0x368a36,_0x39ae8b[_0x39e030])[_0xcfdec3(0x104)](_0x5085b6=>_0x39ae8b[_0x5085b6])['includes'](_0x368a36[_0x39e030])&&_0x39ae8b[_0x39e030]!=_0x368a36[_0x39e030]?_0x3264d9[_0xcfdec3(0xce)][_0xcfdec3(0xe3)](_0x39e030):_0x3264d9['oneWay'][_0xcfdec3(0xe3)](_0x39e030);}return _0x3264d9;}export function drawArrow(_0xa37fbc,_0x44ee5c,_0x5609a2,_0x53a3ed,_0x281cd2,_0x53f868){const _0x5ec592=_0x1e1537;var _0xd23569,_0x39f12d;const _0x2f88a9=new Pt(math[_0x5ec592(0xec)](0x0,0x1,0.01)[_0x5ec592(0xe6)]);var _0x4afa09,_0x1a5e8a,_0x31b779,_0x3232db,_0x432751,_0x4363f6,_0x3a2c74;const _0x2965c9=Group[_0x5ec592(0x11e)]([[0x0,-0x1],[0x1,0x0]]),_0x4a9ce2=0xa,_0x3de5ac=0x14,_0x511922=0.65,_0x1eacc8=0x2*3.1415*0.05,_0xcaa7b6=Group[_0x5ec592(0x11e)]([[_0x3de5ac,0x0],[_0x3de5ac*math[_0x5ec592(0x11b)](_0x1eacc8),_0x3de5ac*math[_0x5ec592(0xeb)](_0x1eacc8)],[(_0x3de5ac+0x2*_0x511922)*math[_0x5ec592(0x11b)](_0x1eacc8),(_0x3de5ac+0x2*_0x511922)*math[_0x5ec592(0xeb)](_0x1eacc8)],[_0x3de5ac+0x2*_0x511922,0x0]]);var _0x436c12=Group['fromArray']([[0x0,0x1],[0x0,0x2],[0x3,0x0],[0x0,0x0]]),_0x5b25ae=Group[_0x5ec592(0x11e)]([[0x0,0x1],[0x0,0x2],[0x3,0x0],[0x0,-0x2],[0x0,-0x1]]),_0x1950ac=Group[_0x5ec592(0x11e)]([[0x0,0x0],[0x0,0x1]]),_0xec1d8a=Group[_0x5ec592(0x11e)]([[0x0,-0x1],[0x0,0x1]]);let _0x4e2539=Group[_0x5ec592(0x11e)]([[0x1-_0x53a3ed[0x0],_0x53a3ed[0x0]],[0x1-_0x53a3ed[0x1],_0x53a3ed[0x1]]]);if(_0x53f868=='o')_0x3a2c74=_0x4e2539[_0x5ec592(0x114)](new Group(_0xa37fbc,_0x44ee5c)),_0x31b779=_0x3a2c74[0x1][_0x5ec592(0xdd)](_0x3a2c74[0x0]),_0xd23569=_0x5b25ae[_0x5ec592(0x104)](_0x2058a1=>_0x2058a1[_0x5ec592(0x106)](_0x4a9ce2*_0x281cd2)['$add']([_0x31b779[_0x5ec592(0x115)]()-_0x5b25ae[0x2][0x0]*_0x4a9ce2*_0x281cd2,0x0])),_0x39f12d=new Group(_0xd23569[_0xd23569['length']-0x1],_0xec1d8a[0x0][_0x5ec592(0x106)](_0x4a9ce2*_0x281cd2),_0xec1d8a[0x1]['$multiply'](_0x4a9ce2*_0x281cd2),_0xd23569[0x0]),_0x432751=-math['atan2'](_0x31b779[0x1],_0x31b779[0x0]),_0x4363f6=[[math[_0x5ec592(0x11b)](_0x432751),-math[_0x5ec592(0xeb)](_0x432751)],[math[_0x5ec592(0xeb)](_0x432751),math[_0x5ec592(0x11b)](_0x432751)]],_0xd23569=_0xd23569[_0x5ec592(0x114)](_0x4363f6),_0x39f12d=_0x39f12d[_0x5ec592(0x114)](_0x4363f6),_0xd23569['add'](_0x3a2c74[0x0]),_0x39f12d['add'](_0x3a2c74[0x0]);else{if(_0x53f868=='b')_0x3a2c74=_0x4e2539[_0x5ec592(0x114)](new Group(_0xa37fbc,_0x44ee5c)),_0x31b779=_0x3a2c74[0x1][_0x5ec592(0xdd)](_0x3a2c74[0x0]),_0xd23569=_0x436c12[_0x5ec592(0x104)](_0x502128=>_0x502128['$multiply'](_0x4a9ce2*_0x281cd2)[_0x5ec592(0xfa)]([_0x31b779['magnitude']()-_0x5b25ae[0x2][0x0]*_0x4a9ce2*_0x281cd2,0x0])),_0x39f12d=new Group(_0xd23569[_0xd23569[_0x5ec592(0xd1)]-0x1],_0x1950ac[0x0]['$multiply'](_0x4a9ce2*_0x281cd2),_0x1950ac[0x1]['$multiply'](_0x4a9ce2*_0x281cd2),_0xd23569[0x0]),_0x432751=-math[_0x5ec592(0xe0)](_0x31b779[0x1],_0x31b779[0x0]),_0x4363f6=[[math[_0x5ec592(0x11b)](_0x432751),-math[_0x5ec592(0xeb)](_0x432751)],[math['sin'](_0x432751),math[_0x5ec592(0x11b)](_0x432751)]],_0xd23569=_0xd23569[_0x5ec592(0x114)](_0x4363f6),_0x39f12d=_0x39f12d['$matrixMultiply'](_0x4363f6),_0xd23569[_0x5ec592(0xf6)](_0x3a2c74[0x0]),_0x39f12d[_0x5ec592(0xf6)](_0x3a2c74[0x0]);else{if(_0x53f868=='s'){let _0xd62824=0x2*3.1415*_0x53a3ed[0x0],_0x32e910=0x2*3.1415*_0x53a3ed[0x1],_0x54aad9=_0xa37fbc['$subtract'](_0x5609a2)['$unit'](),_0x66e577=new Pt(_0x54aad9[0x1],-_0x54aad9[0x0])['$unit'](),_0x4afe6d=new Group(_0x54aad9,_0x66e577),_0x3dacd9=_0x2f88a9[_0x5ec592(0x106)](_0x32e910-_0xd62824),_0x55a313=_0x3dacd9['map'](_0x3c8fe6=>math[_0x5ec592(0x11b)](-_0x3c8fe6)),_0x1b74e7=_0x3dacd9[_0x5ec592(0x104)](_0x4263d7=>math[_0x5ec592(0xeb)](-_0x4263d7)),_0x4b82cb=new Group(_0x55a313,_0x1b74e7)[_0x5ec592(0xfb)](),_0x20feac=_0x4b82cb[_0x5ec592(0x104)](_0x45ab6a=>_0x45ab6a[_0x5ec592(0x106)](_0x3de5ac)),_0x2416e7=_0x4b82cb[_0x5ec592(0x104)](_0x187e82=>_0x187e82['$multiply'](_0x3de5ac+0x2*_0x511922*_0x4a9ce2*_0x281cd2)),_0x44465d=_0x5b25ae['map'](_0x4d767a=>_0x4d767a['$multiply'](_0x511922*_0x4a9ce2*_0x281cd2));_0x44465d=_0x44465d[_0x5ec592(0x114)]([[0x0,0x1],[-0x1,0x0]]),_0x44465d=_0x44465d[_0x5ec592(0x104)](_0x39ec26=>_0x39ec26[_0x5ec592(0xfa)]([_0x511922*_0x4a9ce2*_0x281cd2+_0x3de5ac,0x0])),_0xd23569=_0x44465d[_0x5ec592(0xfc)](),_0x39f12d=_0x2416e7[_0x5ec592(0x111)](_0x20feac[_0x5ec592(0x113)]()),_0xd23569=_0xd23569[_0x5ec592(0x114)](_0x4afe6d),_0x39f12d=_0x39f12d['$matrixMultiply'](_0x4afe6d),_0x4363f6=[[math['cos'](_0x32e910),-math[_0x5ec592(0xeb)](_0x32e910)],[math[_0x5ec592(0xeb)](_0x32e910),math['cos'](_0x32e910)]],_0xd23569=_0xd23569[_0x5ec592(0x114)](_0x4363f6),_0x39f12d=_0x39f12d['$matrixMultiply'](_0x4363f6),_0xd23569=_0xd23569[_0x5ec592(0x104)](_0x5927ef=>_0x5927ef[_0x5ec592(0xfa)](_0x5609a2[_0x5ec592(0xfa)](_0xa37fbc[_0x5ec592(0xdd)](_0x5609a2)[_0x5ec592(0x106)](1.4)))),_0x39f12d=_0x39f12d['map'](_0x1e6711=>_0x1e6711[_0x5ec592(0xfa)](_0x5609a2[_0x5ec592(0xfa)](_0xa37fbc[_0x5ec592(0xdd)](_0x5609a2)[_0x5ec592(0x106)](1.4))));}}}return[_0xd23569,_0x39f12d];}function _0x4b37(){const _0x34cbc9=['sin','range','lam','identity','7223076huHbCX','value','7hXLBmG','rhot','15205QEpEZK','index','10069144AREIpk','add','regular','includes','4359440UOUgzL','$add','$zip','clone','rhots','ones','selfLoops','exp','Nts','2925LpfcWF','from','map','lamUp','$multiply','10204ezIfSh','softmax','nearestPt','dot','max','oneWay','divide','sum','yts','cardinal','concat','reduce','reverse','$matrixMultiply','magnitude','inv','lamOpt','toArray','diag','sqrt','cos','7562331njvOSt','Kts','fromArray','$concat','bothWays','polygon','abs','length','2norm','subtract','fromPtArray','rhos','2333919EokSxB','xts','maxValue','min','rho','multiply','zeros','$subtract','w2norm','slice','atan2','rgba(100,100,255,0.8)','network','push','hasIntersectPoint','viOpt','_data','$divide','rgba(200,200,200,0.2)','fill','190ypnMkb'];_0x4b37=function(){return _0x34cbc9;};return _0x4b37();}export function drawGraph(_0x197d88,_0x5c6076,_0x3519fb,_0x51ebd9,_0x192a97,_0x157ad0,_0x5920a0,_0x168ba9){const _0x3d3b51=_0x1e1537;let _0x5cbcc5,_0x5cb96e,_0x1728df;for(let _0x3f7a7d=0x0;_0x3f7a7d<_0x51ebd9[_0x3d3b51(0xd1)];_0x3f7a7d++){if(_0x168ba9[_0x3d3b51(0xf8)](_0x3f7a7d))_0x5cbcc5=[0.1,0.9],_0x1728df=drawArrow(_0x5c6076[_0x51ebd9[_0x3f7a7d]],_0x5c6076[_0x192a97[_0x3f7a7d]],_0x3519fb,_0x5cbcc5,0x1,'b'),_0x5cb96e=_0x1728df[0x0][_0x3d3b51(0x111)](_0x1728df[0x1]),_0x197d88[_0x3d3b51(0xe9)](_0x3d3b51(0xe8))['polygon'](_0x5cb96e);else{if(_0x157ad0[_0x3d3b51(0xf8)](_0x3f7a7d))_0x5cbcc5=[-0.45,0.3],_0x1728df=drawArrow(_0x5c6076[_0x51ebd9[_0x3f7a7d]],_0x5c6076[_0x192a97[_0x3f7a7d]],_0x3519fb,_0x5cbcc5,0x1,'s'),_0x5cb96e=_0x1728df[0x0]['concat'](_0x1728df[0x1]),_0x197d88[_0x3d3b51(0xe9)](_0x3d3b51(0xe8))[_0x3d3b51(0xcf)](_0x5cb96e);else _0x5920a0[_0x3d3b51(0xf8)](_0x3f7a7d)&&(_0x5cbcc5=[0.1,0.9],_0x1728df=drawArrow(_0x5c6076[_0x51ebd9[_0x3f7a7d]],_0x5c6076[_0x192a97[_0x3f7a7d]],_0x3519fb,_0x5cbcc5,0x1,'o'),_0x5cb96e=_0x1728df[0x0]['concat'](_0x1728df[0x1]),_0x197d88[_0x3d3b51(0xe9)](_0x3d3b51(0xe8))[_0x3d3b51(0xcf)](_0x5cb96e));}}}export function drawFlow(_0x322f9d,_0x5e5fcc,_0x57ad28,_0x4fe440,_0x9893cf,_0x9fb1bd,_0x27cfcf,_0x41c1b1,_0x5f34d1){const _0x20ad67=_0x1e1537;let _0x3c164f,_0x260fee,_0x2da2ac;for(let _0xb1c152=0x0;_0xb1c152<_0x4fe440[_0x20ad67(0xd1)];_0xb1c152++){let _0x40b26e=[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8][_0xb1c152];if(_0x41c1b1['includes'](_0xb1c152))_0x3c164f=[0.1,0.9],_0x2da2ac=drawArrow(_0x5e5fcc[_0x4fe440[_0xb1c152]][_0x20ad67(0xdd)](_0x57ad28)[_0x20ad67(0x106)](0.5)['$add'](gcenter),_0x5e5fcc[_0x9893cf[_0xb1c152]][_0x20ad67(0xdd)](_0x57ad28)[_0x20ad67(0x106)](0.5)['$add'](gcenter),gcenter,_0x3c164f,_0x5f34d1[_0xb1c152],'b'),_0x260fee=_0x2da2ac[0x0]['concat'](_0x2da2ac[0x1]),_0x322f9d[_0x20ad67(0xe9)](_0x20ad67(0xe1))['polygon'](_0x260fee);else{if(_0x27cfcf[_0x20ad67(0xf8)](_0xb1c152))_0x3c164f=[0.1,0.9],_0x260fee=drawArrow(_0x5e5fcc[_0x4fe440[_0xb1c152]][_0x20ad67(0xdd)](_0x57ad28)[_0x20ad67(0x106)](0.5)['$add'](gcenter),_0x5e5fcc[_0x9893cf[_0xb1c152]]['$subtract'](_0x57ad28)[_0x20ad67(0x106)](0.5)[_0x20ad67(0xfa)](gcenter),gcenter,_0x3c164f,_0x5f34d1[_0xb1c152],'o'),_0x260fee=_0x2da2ac[0x0][_0x20ad67(0x111)](_0x2da2ac[0x1]),_0x322f9d[_0x20ad67(0xe9)](_0x20ad67(0xe1))[_0x20ad67(0xcf)](_0x260fee);else _0x9fb1bd['includes'](_0xb1c152)&&(_0x3c164f=[-0.45,0.3],_0x2da2ac=drawArrow(_0x5e5fcc[_0x4fe440[_0xb1c152]][_0x20ad67(0xdd)](_0x57ad28)['$multiply'](0.5)[_0x20ad67(0xfa)](gcenter),_0x5e5fcc[_0x9893cf[_0xb1c152]][_0x20ad67(0xdd)](_0x57ad28)[_0x20ad67(0x106)](0.5)['$add'](gcenter),gcenter,_0x3c164f,_0x5f34d1[_0xb1c152],'s'),_0x260fee=_0x2da2ac[0x0][_0x20ad67(0x111)](_0x2da2ac[0x1]),_0x322f9d['fill']('rgba(100,100,255,0.8)')[_0x20ad67(0xcf)](_0x260fee));}}}export function markovOpt(_0x1b86b0,_0x32f995,_0x1c5651,_0xb12ac){const _0xc645f8=_0x1e1537;var _0x4d1cef,_0x3132ec,_0x3d08d7,_0xb72910={},_0x4cb030=new Pt(0x1,0x1,0x1),_0x4f260e=Group[_0xc645f8(0x11e)]([[0x1,0x0,0x0],[0x0,0x1,0x0],[0x0,0x0,0x1]]);_0x4d1cef=new Pt(_0x32f995[_0xc645f8(0x104)](_0x381602=>_0x381602[_0xc645f8(0x10a)](_0x1b86b0))),_0x4d1cef=_0x4d1cef[_0xc645f8(0xd8)]();let _0x595b81=_0x4d1cef[_0xc645f8(0xf4)],_0x408be6=_0x4d1cef[_0xc645f8(0xf0)];_0x4d1cef=_0x1b86b0[_0xc645f8(0xdd)](_0x408be6);let _0x5b78b7=_0xb12ac[_0x595b81]['$matrixMultiply'](_0x1c5651);_0x3d08d7=[_0x4f260e[0x0]],_0x5b78b7=_0x5b78b7[_0xc645f8(0x104)]((_0x10093a,_0x5afdec)=>Array[_0xc645f8(0x103)](_0x10093a[_0xc645f8(0x106)](-0x1)[_0xc645f8(0xfa)](_0x4f260e[_0x5afdec])[_0xc645f8(0xfa)](_0x3d08d7[0x0][_0xc645f8(0x106)](_0x4cb030[_0x5afdec])))),_0x5b78b7=Array[_0xc645f8(0x103)](_0x5b78b7);let _0x5d6f27=Group['fromArray'](math[_0xc645f8(0x116)](_0x5b78b7));_0x4d1cef=_0xb12ac[_0x595b81][_0xc645f8(0x104)](_0x4ca021=>_0x4ca021[_0xc645f8(0x10a)](_0x4d1cef));let _0x3754f7=new Pt(_0x5d6f27[_0xc645f8(0x104)](_0x28b5da=>_0x28b5da[_0xc645f8(0x10a)](_0x4d1cef))),_0x1f18d4=_0x3754f7[_0xc645f8(0xfa)](_0x408be6),_0x28ce55=0x1;return _0xb72910[_0xc645f8(0x117)]=_0x408be6,_0xb72910[_0xc645f8(0xe5)]=_0x3754f7,_0xb72910['voOpt']=_0x1f18d4,_0xb72910;}export function markovUp(_0x2584a0,_0x51dad9,_0x156c45,_0x1862a1,_0x512be2,_0x36a9d1){const _0x42bffc=_0x1e1537;var _0x27e108,_0x103c9,_0x2a098b,_0x4046d6,_0x318430={};return _0x27e108=_0x2584a0,_0x27e108=_0x27e108[_0x42bffc(0xfa)](_0x1862a1['map'](_0x2fed8c=>_0x2fed8c[_0x42bffc(0x10a)](_0x156c45))),_0x27e108=_0x27e108[_0x42bffc(0xdd)](_0x512be2[_0x42bffc(0x104)](_0x211184=>_0x211184[_0x42bffc(0x10a)](_0x156c45))),_0x103c9=_0x27e108[_0x42bffc(0xd8)]()['value'],_0x2a098b=math[_0x42bffc(0x10b)](_0x2a098b,_0x103c9),_0x4046d6=_0x27e108[_0x42bffc(0x106)](-0x1)[_0x42bffc(0xfa)](_0x2a098b+0.0001),_0x318430[_0x42bffc(0xed)]=_0x2a098b,_0x318430[_0x42bffc(0x105)]=_0x103c9,_0x318430['mu']=_0x4046d6,_0x318430;}