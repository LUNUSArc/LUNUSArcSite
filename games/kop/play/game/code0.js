gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.idToCallbackMap = new Map();
gdjs.startCode.GDlogoAnimatedObjects1= [];
gdjs.startCode.GDlogoAnimatedObjects2= [];
gdjs.startCode.GDbackDropObjects1= [];
gdjs.startCode.GDbackDropObjects2= [];
gdjs.startCode.GDinstructionsObjects1= [];
gdjs.startCode.GDinstructionsObjects2= [];


gdjs.startCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32411412);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.preloadSound(runtimeScene, "KOPmainMenu.wav");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "KOPsettingsMenu.wav");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "KOPlockerMenu.wav");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32412612);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}
}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDlogoAnimatedObjects1.length = 0;
gdjs.startCode.GDlogoAnimatedObjects2.length = 0;
gdjs.startCode.GDbackDropObjects1.length = 0;
gdjs.startCode.GDbackDropObjects2.length = 0;
gdjs.startCode.GDinstructionsObjects1.length = 0;
gdjs.startCode.GDinstructionsObjects2.length = 0;

gdjs.startCode.eventsList0(runtimeScene);
gdjs.startCode.GDlogoAnimatedObjects1.length = 0;
gdjs.startCode.GDlogoAnimatedObjects2.length = 0;
gdjs.startCode.GDbackDropObjects1.length = 0;
gdjs.startCode.GDbackDropObjects2.length = 0;
gdjs.startCode.GDinstructionsObjects1.length = 0;
gdjs.startCode.GDinstructionsObjects2.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;
