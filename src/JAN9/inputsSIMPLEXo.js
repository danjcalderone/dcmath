var _0x4da45a=_0x5496;function _0x346d(){var _0x2052ef=['orig2','ones','$matrixMultiply','$matrixAdd','0,0,200','608dpzatp','matstack','simplex','6UYfTsj','stack','1280388BVKWti','matA','100,0,200','uptoMats','18850fXZZQH','2781862AeEXFG','200,0,0','86191rpzleF','mdim','26932829UYFQie','clone','mdimLock1','basic','pen_red','length','\x20\x5clambda\x20','9vMVIPR','matB','origA','pts','fromArray','identity','0,0,0','pen_blue','$zip','mSlider1','zeros','1410YMEJgo','axesA','_data','255,255,255','map','5429040WmGrFy','$multiply','1386763ujdgFZ'];_0x346d=function(){return _0x2052ef;};return _0x346d();}(function(_0xa6cbda,_0x4c689c){var _0x1f827e=_0x5496,_0x15057d=_0xa6cbda();while(!![]){try{var _0x2a69d2=-parseInt(_0x1f827e(0x183))/0x1+-parseInt(_0x1f827e(0x193))/0x2+-parseInt(_0x1f827e(0x18c))/0x3*(-parseInt(_0x1f827e(0x18e))/0x4)+-parseInt(_0x1f827e(0x192))/0x5*(-parseInt(_0x1f827e(0x1a9))/0x6)+-parseInt(_0x1f827e(0x195))/0x7*(parseInt(_0x1f827e(0x189))/0x8)+-parseInt(_0x1f827e(0x19e))/0x9*(-parseInt(_0x1f827e(0x181))/0xa)+parseInt(_0x1f827e(0x197))/0xb;if(_0x2a69d2===_0x4c689c)break;else _0x15057d['push'](_0x15057d['shift']());}catch(_0x498eff){_0x15057d['push'](_0x15057d['shift']());}}}(_0x346d,0xc44a5));import{linspace,cumSum2,meshgrid}from'/dcmath/src/JAN9/ndimo.js';export var figInputs={'name':_0x4da45a(0x18b),'container':'simplex-container','centerfrac':[0.4,0.55],'sx':0xa,'scale':0x64,'maxm':0xa,'maxn':0xa};var posx2=3.4,posx6=0x6,sx1=0x1,sx2=0x1,posx1=0x0,posy1=0x2,posy2=0x1,posy3=0x6,posy4=0x2,posy5=2.4,posy6=2.4,posy8=2.4,posy7=0x3,AAA,AAA1,AAA2;AAA2=math['zeros'](0x8,0x8)[_0x4da45a(0x17e)],AAA2=Group['fromArray'](AAA2),AAA2=AAA2[_0x4da45a(0x180)](_0x54f622=>_0x54f622['map'](_0x175327=>0x2*Math['random']()-0x1)),AAA2=AAA2[_0x4da45a(0x180)](_0x5f66c2=>_0x5f66c2['$multiply'](0.3)),AAA1=Group['fromArray'](math['identity'](0x8)[_0x4da45a(0x17e)]),AAA1=AAA1[_0x4da45a(0x180)](_0x3840ad=>_0x3840ad[_0x4da45a(0x182)](0.9)),AAA=AAA1[_0x4da45a(0x187)](AAA2);function _0x5496(_0x12f2a2,_0x1dca11){var _0x346d99=_0x346d();return _0x5496=function(_0x5496a1,_0x4fc9d6){_0x5496a1=_0x5496a1-0x17d;var _0x1ea5e4=_0x346d99[_0x5496a1];return _0x1ea5e4;},_0x5496(_0x12f2a2,_0x1dca11);}var xs=linspace(0x0,0x1,0xa),ys=linspace(0x0,0x1,0xa),CAM=Group[_0x4da45a(0x1a2)]([[0x0,0x1],[0x1,0x0]]),CAM2=Group[_0x4da45a(0x1a2)]([[0x1,0x0],[0x0,1.5]]),gridx=Group[_0x4da45a(0x1a2)](math['zeros'](ys['length'],xs[_0x4da45a(0x19c)])[_0x4da45a(0x17e)]),gridy=Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a8)](ys[_0x4da45a(0x19c)],xs[_0x4da45a(0x19c)])[_0x4da45a(0x17e)]),gridx2=Group[_0x4da45a(0x1a2)](math['zeros'](ys[_0x4da45a(0x19c)],xs[_0x4da45a(0x19c)])[_0x4da45a(0x17e)]),gridy2=Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a8)](ys[_0x4da45a(0x19c)],xs['length'])[_0x4da45a(0x17e)]);for(let i=0x0;i<ys[_0x4da45a(0x19c)];i++){for(let j=0x0;j<xs['length'];j++){let pt=Group[_0x4da45a(0x1a2)]([[xs[j],ys[i]]]);pt=pt['$matrixMultiply'](CAM),gridx[i][j]=pt[0x0][0x0],gridy[i][j]=pt[0x0][0x1];let pt2=pt['$matrixMultiply'](CAM2);gridx2[i][j]=pt2[0x0][0x0],gridy2[i][j]=pt2[0x0][0x1];}}var hdirectx=Group['fromArray'](math[_0x4da45a(0x1a8)](0xa,0xa)['_data']),hdirecty=Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0xa,0xa)[_0x4da45a(0x17e)]),vdirectx=Group[_0x4da45a(0x1a2)](math['ones'](0xa,0xa)[_0x4da45a(0x17e)]),vdirecty=Group[_0x4da45a(0x1a2)](math['zeros'](0xa,0xa)[_0x4da45a(0x17e)]),vertx=Group[_0x4da45a(0x1a2)](math['zeros'](0xa,0xa)[_0x4da45a(0x17e)]),verty=Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0xa,0xa)['_data']),SX=Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a8)](0xa,0xa)['_data'])['map'](_0x503f73=>_0x503f73[_0x4da45a(0x182)](0.2));export var channelInputs={'valsA':{'type':_0x4da45a(0x19a)},'colsA':{'type':'basic'},'valsB':{'type':'basic'}};export var styleInputs={'lines1':{'lc':'0,0,0','fc':_0x4da45a(0x1a4),'lw':0.02,'fa':0.1,'la':0.2},'icons1':{'lc':_0x4da45a(0x1a4),'fc':'0,0,0','lw':0.08,'fa':0.1,'la':0.4},'icons2':{'lc':_0x4da45a(0x1a4),'fc':_0x4da45a(0x1a4),'lw':0.04,'fa':0.2,'la':0.4},'shapes1':{'lc':_0x4da45a(0x1a4),'fc':_0x4da45a(0x1a4),'lw':0.01,'fa':0.1,'la':0.3},'axes1':{'lc':_0x4da45a(0x1a4),'fc':_0x4da45a(0x1a4),'lw':0.01,'fa':0.2,'la':0.4},'axes2':{'lc':'0,0,0','fc':'0,0,0','lw':0.01,'fa':0.2,'la':0.2},'axes3':{'lc':_0x4da45a(0x1a4),'fc':_0x4da45a(0x1a4),'lw':0.02,'fa':0.2,'la':0.8},'coords1':{'lc':_0x4da45a(0x17f),'fc':'0,0,200','lw':0.02,'fa':0.2,'la':0.5},'coords2':{'lc':'255,255,255','fc':'200,0,0','lw':0.02,'fa':0.1,'la':0.4},'coords3':{'lc':'255,255,255','fc':'100,0,200','lw':0.02,'fa':0.2,'la':0.5},'arrows1':{'lc':_0x4da45a(0x188),'fc':_0x4da45a(0x188),'lw':0.01,'fa':0.5,'la':0x1},'arrows2':{'lc':'200,0,0','fc':_0x4da45a(0x194),'lw':0.01,'fa':0.5,'la':0x1},'arrows3':{'lc':_0x4da45a(0x190),'fc':_0x4da45a(0x190),'lw':0.01,'fa':0.5,'la':0x1},'stacks1':{'lc':_0x4da45a(0x188),'fc':_0x4da45a(0x188),'lw':0.02,'fa':0.2,'la':0.5},'stacks2':{'lc':'200,0,0','fc':_0x4da45a(0x194),'lw':0.02,'fa':0.2,'la':0.5},'stacks3':{'lc':_0x4da45a(0x194),'fc':'200,0,0','lw':0.02,'fa':0.2,'la':0.5},'hovers1':{'lc':'0,0,200','fc':'0,0,200','lw':0.025,'fa':0.08,'la':0.3},'hovers2':{'lc':_0x4da45a(0x194),'fc':_0x4da45a(0x194),'lw':0.025,'fa':0.2,'la':0.5},'hovers3':{'lc':'0,0,0','fc':'100,0,200','lw':0.01,'fa':0.2,'la':0.5},'hovers4':{'lc':_0x4da45a(0x188),'fc':'0,0,200','lw':0.04,'fa':0.2,'la':0.5},'hovers5':{'lc':'200,0,0','fc':_0x4da45a(0x194),'lw':0.025,'fa':0.2,'la':0.2},'clicks1':{'lc':_0x4da45a(0x1a4),'fc':_0x4da45a(0x188),'lw':0.025,'fa':0.2,'la':0x1},'clicks2':{'lc':'0,0,0','fc':'200,0,0','lw':0.025,'fa':0.2,'la':0x1},'clicks3':{'lc':'0,0,0','fc':_0x4da45a(0x190),'lw':0.01,'fa':0.2,'la':0x1}};export var baseInputs={'AXES':{'axesA':Group[_0x4da45a(0x1a2)]([[0x1,0x0],[0x0,-0x1]])['map'](_0x3da747=>_0x3da747[_0x4da45a(0x182)](0x1)),'axes1':Group[_0x4da45a(0x1a2)]([[0x1,0x0],[0x0,-0x1]])[_0x4da45a(0x180)](_0x536641=>_0x536641[_0x4da45a(0x182)](0x1)),'axes2':Group[_0x4da45a(0x1a2)]([[0x1,0x0],[0x0,-0x1]])[_0x4da45a(0x180)](_0x49f157=>_0x49f157[_0x4da45a(0x182)](0x1)),'axes3':Group[_0x4da45a(0x1a2)]([[0x1,0x0],[0x0,-0x1],[-0x1,0x1],[0x1,0x1],[-0x1,-0.5],[0x1,-0.5],[-0.5,-0x1],[0.5,-0x1]])[_0x4da45a(0x180)](_0x2dae73=>_0x2dae73['$unit']()),'axesc':Group[_0x4da45a(0x1a2)]([[0x1,0x0],[0x0,-0x1]])[_0x4da45a(0x180)](_0x16d47f=>_0x16d47f[_0x4da45a(0x182)](0x1)),'axes2D':Group[_0x4da45a(0x1a2)]([[0x1,0x0],[0x0,-0x1]])['map'](_0x3c14b4=>_0x3c14b4[_0x4da45a(0x182)](0x1)),'stacks2D':Group[_0x4da45a(0x1a2)]([[0x1,0x0],[0x0,-0x1]])[_0x4da45a(0x180)](_0x1bc3d9=>_0x1bc3d9[_0x4da45a(0x182)](0x1)),'axes3D':Group['fromArray']([[-0.5,0.3],[0x1,0x0],[0x0,-0x1]])['map'](_0x534665=>_0x534665[_0x4da45a(0x182)](0x14)),'axesGnd':Group[_0x4da45a(0x1a2)]([[-0.5,0.3],[0x1,0x0]])[_0x4da45a(0x180)](_0x19d71c=>_0x19d71c[_0x4da45a(0x182)](0x14)),'base1':Group[_0x4da45a(0x1a2)]([[0x1,0x0]])['map'](_0x3b7762=>_0x3b7762[_0x4da45a(0x182)](0x1)),'tops1':Group[_0x4da45a(0x1a2)]([[0x0,-0x1]])[_0x4da45a(0x180)](_0x47683d=>_0x47683d['$multiply'](0x1)),'direct1':Group[_0x4da45a(0x1a2)]([[0x1,0x0]])[_0x4da45a(0x180)](_0x267d7c=>_0x267d7c[_0x4da45a(0x182)](0x1)),'direct2':Group['fromArray']([[0x0,-0x1]])[_0x4da45a(0x180)](_0x40a114=>_0x40a114[_0x4da45a(0x182)](0x1)),'stackBase1':Group['fromArray']([[0x1,0x0],[0x0,0x1]])[_0x4da45a(0x180)](_0x6be644=>_0x6be644[_0x4da45a(0x182)](0x1))},'SX':{'sx':0x1,'sxA':0x1,'sxa':1.6,'sx1':0.6,'sx2':0.8,'sx3':0x1,'sxc':0.6,'sxi1':1.2,'sxi2':0.12,'sx00':0.1,'sx01':0.1,'sx02':0.1,'sx03':0.1,'sx04':0.1,'sx05':0.1,'sx06':0.1,'sx07':0.1,'sx08':0.1,'sx09':0.1,'sx10':0.3,'sx11':0.3,'sx12':0.3,'sx13':0.3,'sx14':0.3,'sx15':0.3,'sx16':0.3,'sx17':0.5,'sx18':0.5,'sx19':0.5,'sx20':0.4,'sx21':0.4,'sx22':0.4,'sx23':0.25,'sx24':0.25,'sx25':0.25,'sx26':0.3,'sx27':0.5,'sx28':0.5,'sx29':0.5,'sx30':0.4,'sx31':0.4,'sx32':0.4,'sx33':0.25,'sx34':0.25,'sx35':0.25,'sx36':0.3,'sx37':0.5,'sx38':0.5,'sx39':0.5,'sx40':0.4,'sx41':0.4,'sx42':0.4,'sx43':0.25,'sx44':0.25,'sx45':0.25,'sx46':0.3,'sx47':0.5,'sx48':0.5,'sx49':0.5,'sx50':0.4,'sx51':0.4,'sx52':0.4,'sx53':0.35,'sx54':0.35,'sx55':0.35,'sx56':0.55,'sx57':0.5,'sx58':0.5,'sx59':0.5,'sx60':0.4,'sx61':0.4,'sx62':0.4,'sx63':0.35,'sx64':0.35,'sx65':0.35,'sx66':0.55,'sx67':0.5,'sx68':0.5,'sx69':0.5,'sx70':0.4,'sx71':0.6,'sx72':0.6,'sx73':0.4,'sx74':0.4,'sx75':0.4,'sx76':0.6,'sx77':0.6,'sx78':0.5,'sx79':0.5,'sx80':0.4,'sx81':0.3,'sx82':0.3,'sx83':0.3,'sx84':0.35,'sx85':0.35,'sx86':0.55,'sx87':0.5,'sx88':0.5,'sx89':0.5,'sx90':0.4,'sx91':0.2,'sx92':0.2,'sx93':0.2,'sx94':0.2,'sx95':0.2,'sx96':0.2,'sx97':0.2,'sx98':0.2,'sx99':0.2,'sx100':0.4,'sx101':sx1,'sx102':0.3,'sx103':0.3,'sx104':0.3,'sx105':0.3,'sx106':0.3,'sx107':0.3,'sx108':0.3,'sx109':0.3,'sx110':0.4,'sx111':sx2,'sx112':1.2,'sx113':0.4,'sx114':0.4,'sx115':0.4,'sx116':0.4,'sx117':0.4,'sx118':0.4,'sx119':0.4,'sx120':0.4,'sx121':0.4,'sx122':0.4,'sx123':0.4,'sx124':0.4,'sx125':0.4,'sx126':0.4,'sx127':0.4,'sx128':0.4,'sx129':0.4},'ORIG':{'origA':new Pt([0x9,0x9]),'origa':new Pt([9.2,0.8]),'orig1':new Pt([9.2,0.8]),'orig3':new Pt([9.2,0.8]),'origc':new Pt([9.2,0.8]),'orig2':new Pt([9.2,0.8]),'loc1':new Pt([9.2,0.8]),'orig00':new Pt([0.5,0.5]),'orig01':new Pt([1.5,0.5]),'orig02':new Pt([2.3,0.5]),'orig03':new Pt([8.8,posy6-1.5]),'orig04':new Pt([4.5,0.5]),'orig05':new Pt([0x3,0.5]),'orig06':new Pt([0x7,0x1]),'orig07':new Pt([0x8,0x1]),'orig08':new Pt([0x9,0x1]),'orig09':new Pt([0xa,0x1]),'orig10':new Pt([0.8,0x2]),'orig11':new Pt([0x2,0x2]),'orig12':new Pt([0x2,0x2]),'orig13':new Pt([3.2,0x2]),'orig14':new Pt([3.7,0x2]),'orig15':new Pt([4.2,0x2]),'orig16':new Pt([0x5,0x2]),'orig17':new Pt([0x8,0x2]),'orig18':new Pt([0x9,1.5]),'orig19':new Pt([0xa,1.5]),'orig20':new Pt([0.5,0x3]),'orig21':new Pt([0x2,0x3]),'orig22':new Pt([0x2,0x3]),'orig23':new Pt([3.2,0x3]),'orig24':new Pt([3.7,0x3]),'orig25':new Pt([4.2,0x3]),'orig26':new Pt([0x5,0x3]),'orig27':new Pt([0x8,0x3]),'orig28':new Pt([0x9,0x3]),'orig29':new Pt([0xa,0x3]),'orig30':new Pt([0.8,posy1+0x0]),'orig31':new Pt([0x2,posy1+0x0]),'orig32':new Pt([0x2,posy1+0x0]),'orig33':new Pt([0.7,posy1+0x0]),'orig34':new Pt([1.5,posy1+0x0]),'orig35':new Pt([2.3,posy1+0x0]),'orig36':new Pt([3.6,posy1+0x0]),'orig37':new Pt([0x8,posy1+0x0]),'orig38':new Pt([0x9,posy1+0x0]),'orig39':new Pt([0xa,posy1+0x0]),'orig40':new Pt([0.5,posx1+3.2]),'orig41':new Pt([1.7,posx1+3.2]),'orig42':new Pt([0x2,posx1+3.2]),'orig43':new Pt([2.8,posx1+3.2]),'orig44':new Pt([3.3,posx1+3.2]),'orig45':new Pt([3.8,posx1+3.2]),'orig46':new Pt([0x5,posx1+3.2]),'orig47':new Pt([0x8,posx1+3.2]),'orig48':new Pt([0x9,posx1+3.2]),'orig49':new Pt([0xa,posx1+3.2]),'orig50':new Pt([0.5,posy2+0x0]),'orig51':new Pt([1.8,posy2+0x0]),'orig52':new Pt([0x2,posy2+0x0]),'orig53':new Pt([0.7,posy2+0x0]),'orig54':new Pt([1.5,posy2+0x0]),'orig55':new Pt([2.3,posy2+0x0]),'orig56':new Pt([3.6,posy2+0x0]),'orig57':new Pt([0x8,posy2+0x0]),'orig58':new Pt([0x9,posy2+0x0]),'orig59':new Pt([0xa,posy2+0x0]),'orig60':new Pt([0.5,posy3+0x0]),'orig61':new Pt([1.8,posy3+0x0]),'orig62':new Pt([0x2,posy3+0x0]),'orig63':new Pt([0.7,posy3+0x0]),'orig64':new Pt([1.5,posy3+0x0]),'orig65':new Pt([2.3,posy3+0x0]),'orig66':new Pt([3.6,posy3+0x0]),'orig67':new Pt([0x8,posy3+0x0]),'orig68':new Pt([0x9,posy3+0x0]),'orig69':new Pt([0xa,posy3+0x0]),'orig70':new Pt([0.8,posy1+0x1]),'orig71':new Pt([0.5,posy1+0x1]),'orig72':new Pt([1.7,posy1+0x1]),'orig73':new Pt([0.7,posy1+0x1]),'orig74':new Pt([1.5,posy1+0x1]),'orig75':new Pt([2.3,posy1+0x1]),'orig76':new Pt([5.5,posy1+0x1]),'orig77':new Pt([3.6,posy1+0x1]),'orig78':new Pt([0x9,posy1+0x1]),'orig79':new Pt([0xa,posy1+0x1]),'orig80':new Pt([0.5,posy2+0x1]),'orig81':new Pt([0.5,posy2+0x1]),'orig82':new Pt([0x1,posy2+0x1]),'orig83':new Pt([1.5,posy2+0x1]),'orig84':new Pt([1.5,posy2+0x1]),'orig85':new Pt([2.3,posy2+0x1]),'orig86':new Pt([3.6,posy2+0x1]),'orig87':new Pt([0x8,posy2+0x1]),'orig88':new Pt([0x9,posy2+0x1]),'orig89':new Pt([0xa,posy2+0x1]),'orig90':new Pt([0.5,posy4+0x0]),'orig91':new Pt([0.5,posy4+0x0]),'orig92':new Pt([0x1,posy4+0x0]),'orig93':new Pt([1.5,posy4+0x0]),'orig94':new Pt([2.5,posy4+0x0]),'orig95':new Pt([0x3,posy4+0x0]),'orig96':new Pt([3.5,posy4+0x0]),'orig97':new Pt([4.5,posy4+0x0]),'orig98':new Pt([0x5,posy4+0x0]),'orig99':new Pt([5.5,posy4+0x0]),'orig100':new Pt([0.5,posy5+0x0]),'orig101':new Pt([posx2,posy5+0x0]),'orig104':new Pt([1.5,posy5+0x0]),'orig108':new Pt([2.5,posy5+0x0]),'orig102':new Pt([0x1,posy5+0x0]),'orig103':new Pt([1.5,posy5+0x0]),'orig105':new Pt([0x3,posy5+0x0]),'orig106':new Pt([3.5,posy5+0x0]),'orig107':new Pt([4.5,posy5+0x0]),'orig109':new Pt([5.5,posy5+0x0]),'orig110':new Pt([0.5,posy8]),'orig111':new Pt([posx6,posy8]),'orig112':new Pt([posx6-0.6,posy8]),'orig113':new Pt([1.5,posy8+0x0]),'orig114':new Pt([2.5,posy8+0x0]),'orig115':new Pt([0x3,posy6+0x0]),'orig116':new Pt([3.5,posy6+0x0]),'orig117':new Pt([4.5,posy6+0x0]),'orig118':new Pt([0x5,posy6+0x0]),'orig119':new Pt([5.5,posy6+0x0]),'orig120':new Pt([0.5,posy7+0x0]),'orig121':new Pt([0.5,posy7+0x0]),'orig122':new Pt([0x1,posy7+0x0]),'orig123':new Pt([1.5,posy7+0x0]),'orig124':new Pt([2.5,posy7+0x0]),'orig125':new Pt([0x3,posy7+0x0]),'orig126':new Pt([3.5,posy7+0x0]),'orig127':new Pt([4.5,posy7+0x0]),'orig128':new Pt([0x5,posy7+0x0]),'orig129':new Pt([5.5,posy7+0x0])},'SHAPE':{'slider_shapes_ind':0x0,'slider_dim_ind':0x0,'char1':Group['fromArray']([linspace(0x0,0x1,0xc8),math[_0x4da45a(0x1a8)](0xc8)[_0x4da45a(0x17e)]])[_0x4da45a(0x1a6)](),'slider_basic':Group[_0x4da45a(0x1a2)]([math[_0x4da45a(0x1a8)](0x3)[_0x4da45a(0x17e)],linspace(0x0,0x1,0x3)])[_0x4da45a(0x1a6)](),'slider_dims':Group[_0x4da45a(0x1a2)]([math[_0x4da45a(0x1a8)](0x5)[_0x4da45a(0x17e)],linspace(0x0,0x1,0x5)])[_0x4da45a(0x1a6)](),'slider_shapes':Group['fromArray']([math[_0x4da45a(0x1a8)](0x5)['_data'],linspace(0x0,0x1,0x5)])['$zip'](),'slider1':Group[_0x4da45a(0x1a2)]([math[_0x4da45a(0x1a8)](0x4)[_0x4da45a(0x17e)],linspace(0x0,0x1,0x4)])[_0x4da45a(0x1a6)](),'slider2':Group[_0x4da45a(0x1a2)]([math[_0x4da45a(0x1a8)](0x9)[_0x4da45a(0x17e)],linspace(0x0,0x1,0x9)])['$zip'](),'checkbox1':Group[_0x4da45a(0x1a2)]([math['zeros'](0xc)[_0x4da45a(0x17e)],linspace(0x0,0x1,0xc)])[_0x4da45a(0x1a6)](),'tabs1':Group[_0x4da45a(0x1a2)]([math[_0x4da45a(0x1a8)](0x3)[_0x4da45a(0x17e)],linspace(0x0,0x1,0x3)])[_0x4da45a(0x1a6)](),'mapsto':Group[_0x4da45a(0x1a2)]([[0x0,0.5],[-0x2,0.5],[-0x2,0x1],[-3.5,0x0],[-0x2,-0x1],[-0x2,-0.5],[0x0,-0.5]]),'stacks1':Group[_0x4da45a(0x1a2)]([linspace(0x0,0x1,0x9),math[_0x4da45a(0x1a8)](0x9)[_0x4da45a(0x17e)]])[_0x4da45a(0x1a6)](),'direct1':Group[_0x4da45a(0x1a2)]([[0x1,0x0]]),'direct2':Group[_0x4da45a(0x1a2)]([[0x1,0x0]]),'gridx':gridx['clone'](),'gridy':gridy[_0x4da45a(0x198)](),'gridx2':gridx2[_0x4da45a(0x198)](),'gridy2':gridy2['clone'](),'hdirectx':hdirectx[_0x4da45a(0x198)](),'hdirecty':hdirecty[_0x4da45a(0x198)](),'vdirectx':vdirectx[_0x4da45a(0x198)](),'vdirecty':vdirecty[_0x4da45a(0x198)](),'vertx':vertx[_0x4da45a(0x198)](),'verty':verty[_0x4da45a(0x198)](),'orig1a':new Pt([4.125,6.5]),'orig2a':new Pt([6.5,2.8]),'orig1b':new Pt([4.125,6.5]),'orig2b':new Pt([6.5,2.8]),'orig1c':new Pt([4.125,6.5]),'orig2c':new Pt([4.125,6.5]),'orig3c':new Pt([4.125,0x5]),'mSlider':Group['fromArray']([[0x0,0x0],[0x0,0x1],[0x0,0x2],[0x0,0x3],[0x0,0x4]])['map'](_0x12de7d=>_0x12de7d[_0x4da45a(0x182)](0.5)),'nSlider':Group[_0x4da45a(0x1a2)]([[0x0,0x0],[0x1,0x0],[0x2,0x0],[0x3,0x0],[0x4,0x0]])[_0x4da45a(0x180)](_0x1d4acd=>_0x1d4acd[_0x4da45a(0x182)](1.05)),'viewSlider':Group[_0x4da45a(0x1a2)]([[0x0,0x0],[0x1,0x0],[0x2,0x0],[0x3,0x0],[0x4,0x0]])[_0x4da45a(0x180)](_0x357fc1=>_0x357fc1[_0x4da45a(0x182)](0x1))}};export var dataInputs={'AAA':{'vals':AAA,'dims':[0x8,0x8]},'AA':{'vals':Group[_0x4da45a(0x1a2)]([[1.5,0x1],[0.5,0x1]]),'dims':[0x2,0x2]},'Ai':{'vals':Group[_0x4da45a(0x1a2)]([[0x0,0x0],[0x0,0x0]])},'sub1':{'vals':Group[_0x4da45a(0x1a2)]([[1.5,0x1],[0.5,0x1]])},'sub2':{'vals':Group[_0x4da45a(0x1a2)]([[0.1,0x1],[0.2,1.2],[0.3,1.2],[0.4,0x1],[0.5,1.2],[0.6,0x1],[0.7,0x1],[0.8,1.2]])['$matrixMultiply'](Group[_0x4da45a(0x1a2)]([[0x2,0x0],[0x0,0.5]]))},'sub3':{'vals':Group['fromArray']([[-0.3,0x0],[-0.15,0x0],[0.15,0x0],[0.3,0x0],[0.45,0x0],[0.6,0x0],[0.75,0x0],[0.9,0x0]])[_0x4da45a(0x186)](Group['fromArray']([[0x2,0x0],[0x0,0x1]]))},'coords':{'vals':Group[_0x4da45a(0x1a2)]([math[_0x4da45a(0x185)](0x8)[_0x4da45a(0x17e)]])[_0x4da45a(0x180)](_0x3d39d4=>_0x3d39d4[_0x4da45a(0x182)](0x1))},'vec1':{'vals':Group[_0x4da45a(0x1a2)]([math[_0x4da45a(0x185)](0x8)[_0x4da45a(0x17e)]])[_0x4da45a(0x180)](_0x24de74=>_0x24de74[_0x4da45a(0x182)](0x1))},'vec2':{'vals':Group[_0x4da45a(0x1a2)]([math['ones'](0x8)['_data']])[_0x4da45a(0x180)](_0x58923f=>_0x58923f['$multiply'](0x1))},'vec3a':{'vals':Group[_0x4da45a(0x1a2)]([math[_0x4da45a(0x185)](0x8)['_data']])[_0x4da45a(0x180)](_0x441925=>_0x441925[_0x4da45a(0x182)](0x1))},'vec3b':{'vals':Group[_0x4da45a(0x1a2)]([math[_0x4da45a(0x185)](0x8)[_0x4da45a(0x17e)]])[_0x4da45a(0x180)](_0x39f3cb=>_0x39f3cb[_0x4da45a(0x182)](0x1))},'vec3c':{'vals':Group[_0x4da45a(0x1a2)]([math['ones'](0x8)['_data']])['map'](_0x3731fc=>_0x3731fc[_0x4da45a(0x182)](0x1))},'mat1':{'vals':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)['_data'])[_0x4da45a(0x180)](_0x2273f5=>_0x2273f5[_0x4da45a(0x182)](-1.1))[_0x4da45a(0x187)](Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x8,0x8)['_data'])['map'](_0x4ae1e8=>_0x4ae1e8['$multiply'](0x1)))},'mat2':{'vals':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x22080f=>_0x22080f[_0x4da45a(0x182)](-1.3))[_0x4da45a(0x187)](Group[_0x4da45a(0x1a2)](math['ones'](0x8,0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x2d1675=>_0x2d1675[_0x4da45a(0x182)](0x1)))},'mat3a':{'vals':Group[_0x4da45a(0x1a2)](math['identity'](0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x2b8a24=>_0x2b8a24['$multiply'](-1.1))['$matrixAdd'](Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x8,0x8)[_0x4da45a(0x17e)])['map'](_0x332d0d=>_0x332d0d[_0x4da45a(0x182)](0x1)))},'mat3b':{'vals':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)['_data'])[_0x4da45a(0x180)](_0x2d7440=>_0x2d7440[_0x4da45a(0x182)](-1.1))[_0x4da45a(0x187)](Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x8,0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x1288bc=>_0x1288bc[_0x4da45a(0x182)](0x1)))},'mat3c':{'vals':Group[_0x4da45a(0x1a2)](math['identity'](0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x157cfa=>_0x157cfa[_0x4da45a(0x182)](-1.1))[_0x4da45a(0x187)](Group[_0x4da45a(0x1a2)](math['ones'](0x8,0x8)['_data'])[_0x4da45a(0x180)](_0x104456=>_0x104456[_0x4da45a(0x182)](0x1)))},'mat7':{'vals':Group[_0x4da45a(0x1a2)](math['identity'](0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x132ec8=>_0x132ec8[_0x4da45a(0x182)](-1.1))['$matrixAdd'](Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x8,0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0xea85ed=>_0xea85ed['$multiply'](0x1)))},'mat8':{'vals':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x1abda6=>_0x1abda6['$multiply'](-1.1))[_0x4da45a(0x187)](Group['fromArray'](math[_0x4da45a(0x185)](0x8,0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x4f7a59=>_0x4f7a59[_0x4da45a(0x182)](0x1)))},'mat9a':{'vals':Group['fromArray'](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x3259a5=>_0x3259a5[_0x4da45a(0x182)](-1.1))['$matrixAdd'](Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x8,0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x46e792=>_0x46e792[_0x4da45a(0x182)](0x1)))},'mat9b':{'vals':Group[_0x4da45a(0x1a2)](math['identity'](0x8)[_0x4da45a(0x17e)])['map'](_0x138f84=>_0x138f84[_0x4da45a(0x182)](-1.1))['$matrixAdd'](Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x8,0x8)['_data'])[_0x4da45a(0x180)](_0x436974=>_0x436974[_0x4da45a(0x182)](0x1)))},'mat9c':{'vals':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)['_data'])[_0x4da45a(0x180)](_0x52d700=>_0x52d700[_0x4da45a(0x182)](-1.1))[_0x4da45a(0x187)](Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x8,0x8)['_data'])[_0x4da45a(0x180)](_0x394e2a=>_0x394e2a[_0x4da45a(0x182)](0x1)))},'mat4a':{'vals':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)['_data'])['map'](_0xfb1bd9=>_0xfb1bd9[_0x4da45a(0x182)](-1.3))['$matrixAdd'](Group['fromArray'](math['ones'](0x8,0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x2b060d=>_0x2b060d[_0x4da45a(0x182)](1.2)))},'mat4b':{'vals':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)])['map'](_0x49bf6c=>_0x49bf6c[_0x4da45a(0x182)](-1.1))[_0x4da45a(0x187)](Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x8,0x8)['_data'])[_0x4da45a(0x180)](_0x2a663c=>_0x2a663c['$multiply'](0x1)))},'mat4c':{'vals':Group[_0x4da45a(0x1a2)](math['identity'](0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x1ef9bc=>_0x1ef9bc[_0x4da45a(0x182)](-1.1))[_0x4da45a(0x187)](Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x8,0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x2c54f5=>_0x2c54f5[_0x4da45a(0x182)](0x1)))},'mat5a':{'vals':Group['fromArray'](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x133702=>_0x133702['$multiply'](-1.1))[_0x4da45a(0x187)](Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x8,0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x24367f=>_0x24367f['$multiply'](0x1)))},'mat5b':{'vals':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)['_data'])[_0x4da45a(0x180)](_0x52b037=>_0x52b037[_0x4da45a(0x182)](-1.1))[_0x4da45a(0x187)](Group[_0x4da45a(0x1a2)](math['ones'](0x8,0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x234ca8=>_0x234ca8[_0x4da45a(0x182)](0x1)))},'mat5c':{'vals':Group[_0x4da45a(0x1a2)](math['identity'](0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x5594aa=>_0x5594aa[_0x4da45a(0x182)](-1.1))[_0x4da45a(0x187)](Group['fromArray'](math[_0x4da45a(0x185)](0x8,0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x39aa17=>_0x39aa17['$multiply'](0x1)))},'mat5d':{'vals':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)])['map'](_0x48e624=>_0x48e624[_0x4da45a(0x182)](-1.1))[_0x4da45a(0x187)](Group['fromArray'](math['ones'](0x8,0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x2f9826=>_0x2f9826['$multiply'](0x1)))},'mat5e':{'vals':Group['fromArray'](math[_0x4da45a(0x1a3)](0x8)['_data'])[_0x4da45a(0x180)](_0x130240=>_0x130240[_0x4da45a(0x182)](-1.1))[_0x4da45a(0x187)](Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x8,0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x26981a=>_0x26981a[_0x4da45a(0x182)](0x1)))},'mat5f':{'vals':Group[_0x4da45a(0x1a2)](math['identity'](0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x61ffbb=>_0x61ffbb[_0x4da45a(0x182)](-1.1))[_0x4da45a(0x187)](Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x8,0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x4de66b=>_0x4de66b['$multiply'](0x1)))},'mat11a':{'vals':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x259624=>_0x259624['$multiply'](-1.1))['$matrixAdd'](Group['fromArray'](math[_0x4da45a(0x185)](0x8,0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x4a6fe8=>_0x4a6fe8[_0x4da45a(0x182)](0x1)))},'mat11b':{'vals':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x6a7834=>_0x6a7834[_0x4da45a(0x182)](-1.1))[_0x4da45a(0x187)](Group['fromArray'](math[_0x4da45a(0x185)](0x8,0x8)[_0x4da45a(0x17e)])['map'](_0x1a522e=>_0x1a522e[_0x4da45a(0x182)](0x1)))},'mat11c':{'vals':Group[_0x4da45a(0x1a2)](math['identity'](0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x397255=>_0x397255[_0x4da45a(0x182)](-1.1))[_0x4da45a(0x187)](Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x8,0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x342b51=>_0x342b51[_0x4da45a(0x182)](0x1)))},'matA':{'vals':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)])['map'](_0x30755f=>_0x30755f[_0x4da45a(0x182)](0.5))[_0x4da45a(0x187)](Group['fromArray'](math[_0x4da45a(0x185)](0x8,0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x1ec3b8=>_0x1ec3b8[_0x4da45a(0x182)](0.5)))},'matB':{'vals':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)])['map'](_0x38bd76=>_0x38bd76[_0x4da45a(0x182)](0.5))},'matC':{'vals':Group['fromArray'](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)])['map'](_0x28964a=>_0x28964a['$multiply'](-1.3))[_0x4da45a(0x187)](Group['fromArray'](math[_0x4da45a(0x185)](0x8,0x8)['_data'])[_0x4da45a(0x180)](_0x23b6b2=>_0x23b6b2[_0x4da45a(0x182)](0x1)))},'matD':{'vals':Group['fromArray'](math['identity'](0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x4b5349=>_0x4b5349[_0x4da45a(0x182)](-1.3))[_0x4da45a(0x187)](Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x8,0x8)[_0x4da45a(0x17e)])['map'](_0x361928=>_0x361928['$multiply'](0x1)))},'matE':{'vals':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)['_data'])[_0x4da45a(0x180)](_0x5ce15e=>_0x5ce15e['$multiply'](-1.3))[_0x4da45a(0x187)](Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x8,0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x54d42b=>_0x54d42b['$multiply'](0x1)))},'matF':{'vals':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x3314b0=>_0x3314b0[_0x4da45a(0x182)](-1.3))[_0x4da45a(0x187)](Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x8,0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x533d6c=>_0x533d6c[_0x4da45a(0x182)](0x1)))},'matG':{'vals':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0xd173a4=>_0xd173a4[_0x4da45a(0x182)](-1.3))[_0x4da45a(0x187)](Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x8,0x8)['_data'])[_0x4da45a(0x180)](_0x31bcb4=>_0x31bcb4[_0x4da45a(0x182)](0x1)))},'matH':{'vals':Group['fromArray'](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)])['map'](_0x3ce5cc=>_0x3ce5cc[_0x4da45a(0x182)](-1.3))[_0x4da45a(0x187)](Group['fromArray'](math['ones'](0x8,0x8)['_data'])[_0x4da45a(0x180)](_0x3094ec=>_0x3094ec[_0x4da45a(0x182)](0x1)))},'matI':{'vals':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x367008=>_0x367008[_0x4da45a(0x182)](-1.3))[_0x4da45a(0x187)](Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x8,0x8)[_0x4da45a(0x17e)])[_0x4da45a(0x180)](_0x367724=>_0x367724['$multiply'](0x1)))},'move1':{'vals':Group['fromArray']([[0x0,0x0],[-1.5,0x0]])}};export var matrixInputs={};export var annotationInputs={};export var positionInputs={};export var controllerInputs={};export var handlerInputs={'stack2':{'pts':Group[_0x4da45a(0x1a2)]([[0x2,0x1],[0x1,0x2]])[_0x4da45a(0x180)](_0x26c3b8=>_0x26c3b8[_0x4da45a(0x182)](0x258)),'struct':{'name':null,'tag':null},'type':_0x4da45a(0x18d),'axes1':null,'axes2':null,'axes':_0x4da45a(0x17d),'view':null,'orig':_0x4da45a(0x184),'upto':0x1},'matAstacks':{'ptsx':gridx['clone'](),'ptsy':gridy[_0x4da45a(0x198)](),'struct':{'name':null,'tag':null},'type':_0x4da45a(0x18a),'axes1':null,'axes2':null,'axes':_0x4da45a(0x17d),'view':null,'orig':'orig2','upto':0x1},'matBstacks':{'ptsx':gridx[_0x4da45a(0x198)](),'ptsy':gridy[_0x4da45a(0x198)](),'struct':{'name':null,'tag':null},'type':'matstack','axes1':null,'axes2':null,'axes':_0x4da45a(0x17d),'view':null,'orig':_0x4da45a(0x184),'upto':0x1},'matAAstacks':{'ptsx':gridx[_0x4da45a(0x198)](),'ptsy':gridy[_0x4da45a(0x198)](),'struct':{'name':null,'tag':null},'type':_0x4da45a(0x18a),'axes1':null,'axes2':null,'axes':_0x4da45a(0x17d),'view':null,'orig':_0x4da45a(0x184),'upto':0x1},'matABstacks':{'ptsx':gridx[_0x4da45a(0x198)](),'ptsy':gridy['clone'](),'struct':{'name':null,'tag':null},'type':_0x4da45a(0x18a),'axes1':null,'axes2':null,'axes':'axesA','view':null,'orig':'orig2','upto':0x1},'matA':{'pts':Group[_0x4da45a(0x1a2)]([[0x2,0x1],[0x1,0x2]])[_0x4da45a(0x180)](_0x4a04fa=>_0x4a04fa[_0x4da45a(0x182)](0x258)),'struct':{'name':null,'tag':null},'type':_0x4da45a(0x1a1),'axes':'axesA','view':null,'orig':_0x4da45a(0x1a0),'upto':0x2},'matB':{'pts':Group[_0x4da45a(0x1a2)]([[0x2,0x1],[0x1,0x2]])[_0x4da45a(0x180)](_0x53b9ff=>_0x53b9ff[_0x4da45a(0x182)](0x258)),'struct':{'name':null,'tag':null},'type':_0x4da45a(0x1a1),'axes':_0x4da45a(0x17d),'view':null,'orig':_0x4da45a(0x1a0),'upto':0x2},'matA_mult':{'pts':Group[_0x4da45a(0x1a2)]([[0x2,0x1],[0x1,0x2]])[_0x4da45a(0x180)](_0x5bedb0=>_0x5bedb0[_0x4da45a(0x182)](0x258)),'struct':{'name':null,'tag':null},'type':_0x4da45a(0x1a1),'axes':_0x4da45a(0x17d),'view':null,'orig':_0x4da45a(0x1a0),'upto':0x2},'matB_mult':{'pts':Group[_0x4da45a(0x1a2)]([[0x2,0x1],[0x1,0x2]])['map'](_0x4550a1=>_0x4550a1['$multiply'](0x258)),'struct':{'name':null,'tag':null},'type':'pts','axes':_0x4da45a(0x17d),'view':null,'orig':_0x4da45a(0x1a0),'upto':0x2}};export var highlightInputs={};export var drawInputs={};export var structInputs={};export var eqnInputs={'eqn50':{'sx':0x1,'loc':[0.8,posy6-1.5],'scale':0.2,'matsx':0x1,'fontRatio':0.17,'h0s':[0.25,0.25],'w0s':[0.57,0.53],'uptoSliders':[_0x4da45a(0x191)],'upto':0x1,'uptoSteps':[0x0,0x1],'use':[0x1,0x1],'useMats':[0x1,0x1],'useSyms':[],'useSliders':[0x1],'useLocks':[0x1],'mats':[_0x4da45a(0x18f),_0x4da45a(0x19f)],'matSyms':['x',_0x4da45a(0x19d)],'matNumInds':[0x1,0x0],'matDims':[[0x3,0x1],[0x1,0x1]],'maxDims':[[0x8,0x8],[0x8,0x8]],'matSymShifts':[[-0.07,-0.17],[-0.05,-0.15]],'matPens':[_0x4da45a(0x1a5),_0x4da45a(0x19b)],'gapWids':[0x0,0.2],'preSyms':['\x20\x5cunderbrace{','\x20'],'postSyms':['}_{x}','\x20'],'syms':[],'symTex':[],'symInds':[],'symShifts':[],'symsx':0.15,'locksx':0.15,'slidersx':0x1,'wSyms':0x1,'hSyms':0x1,'sliders':['mSlider1'],'sliderInds':[0x0],'sliderTypes':[_0x4da45a(0x196)],'sliderWrites':[[_0x4da45a(0x18f),0x0]],'sliderShifts':[[-0.2,0x0]],'locks':[_0x4da45a(0x199)],'lockSliders':[_0x4da45a(0x1a7)],'lockShifts':[[0x0,0x0]],'lockLims':[[0x8,0x4]]}};export var xdataInputs={'AA':Group[_0x4da45a(0x1a2)]([[0xc8,0x64],[0x64,0xc8]]),'y':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x1,0x8)[_0x4da45a(0x17e)]),'A':Group[_0x4da45a(0x1a2)](math['identity'](0x8)[_0x4da45a(0x17e)]),'B':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)]),'C':Group['fromArray'](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)]),'D':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)]),'E':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)]),'F':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x1a3)](0x8)[_0x4da45a(0x17e)]),'x':Group[_0x4da45a(0x1a2)](math[_0x4da45a(0x185)](0x1,0x8)['_data'])};