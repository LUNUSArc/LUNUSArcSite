gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.idToCallbackMap = new Map();
gdjs.menuCode.GDUIObjects1= [];
gdjs.menuCode.GDUIObjects2= [];
gdjs.menuCode.GDUIObjects3= [];
gdjs.menuCode.GDUIObjects4= [];
gdjs.menuCode.GDlogoAnimatedObjects1= [];
gdjs.menuCode.GDlogoAnimatedObjects2= [];
gdjs.menuCode.GDlogoAnimatedObjects3= [];
gdjs.menuCode.GDlogoAnimatedObjects4= [];
gdjs.menuCode.GDoponentObjects1= [];
gdjs.menuCode.GDoponentObjects2= [];
gdjs.menuCode.GDoponentObjects3= [];
gdjs.menuCode.GDoponentObjects4= [];
gdjs.menuCode.GDbgringObjects1= [];
gdjs.menuCode.GDbgringObjects2= [];
gdjs.menuCode.GDbgringObjects3= [];
gdjs.menuCode.GDbgringObjects4= [];
gdjs.menuCode.GDbackDropObjects1= [];
gdjs.menuCode.GDbackDropObjects2= [];
gdjs.menuCode.GDbackDropObjects3= [];
gdjs.menuCode.GDbackDropObjects4= [];
gdjs.menuCode.GDfightahObjects1= [];
gdjs.menuCode.GDfightahObjects2= [];
gdjs.menuCode.GDfightahObjects3= [];
gdjs.menuCode.GDfightahObjects4= [];
gdjs.menuCode.GDcameraAnchorObjects1= [];
gdjs.menuCode.GDcameraAnchorObjects2= [];
gdjs.menuCode.GDcameraAnchorObjects3= [];
gdjs.menuCode.GDcameraAnchorObjects4= [];
gdjs.menuCode.GDlockerRoomDioramaObjects1= [];
gdjs.menuCode.GDlockerRoomDioramaObjects2= [];
gdjs.menuCode.GDlockerRoomDioramaObjects3= [];
gdjs.menuCode.GDlockerRoomDioramaObjects4= [];
gdjs.menuCode.GDcameraAnchor2Objects1= [];
gdjs.menuCode.GDcameraAnchor2Objects2= [];
gdjs.menuCode.GDcameraAnchor2Objects3= [];
gdjs.menuCode.GDcameraAnchor2Objects4= [];
gdjs.menuCode.GDtrophy3Objects1= [];
gdjs.menuCode.GDtrophy3Objects2= [];
gdjs.menuCode.GDtrophy3Objects3= [];
gdjs.menuCode.GDtrophy3Objects4= [];
gdjs.menuCode.GDtrophy2Objects1= [];
gdjs.menuCode.GDtrophy2Objects2= [];
gdjs.menuCode.GDtrophy2Objects3= [];
gdjs.menuCode.GDtrophy2Objects4= [];
gdjs.menuCode.GDtrophy4Objects1= [];
gdjs.menuCode.GDtrophy4Objects2= [];
gdjs.menuCode.GDtrophy4Objects3= [];
gdjs.menuCode.GDtrophy4Objects4= [];
gdjs.menuCode.GDtrophy5Objects1= [];
gdjs.menuCode.GDtrophy5Objects2= [];
gdjs.menuCode.GDtrophy5Objects3= [];
gdjs.menuCode.GDtrophy5Objects4= [];
gdjs.menuCode.GDtrophy6Objects1= [];
gdjs.menuCode.GDtrophy6Objects2= [];
gdjs.menuCode.GDtrophy6Objects3= [];
gdjs.menuCode.GDtrophy6Objects4= [];
gdjs.menuCode.GDtrophy7Objects1= [];
gdjs.menuCode.GDtrophy7Objects2= [];
gdjs.menuCode.GDtrophy7Objects3= [];
gdjs.menuCode.GDtrophy7Objects4= [];
gdjs.menuCode.GDtrophy8Objects1= [];
gdjs.menuCode.GDtrophy8Objects2= [];
gdjs.menuCode.GDtrophy8Objects3= [];
gdjs.menuCode.GDtrophy8Objects4= [];
gdjs.menuCode.GDtrophy9Objects1= [];
gdjs.menuCode.GDtrophy9Objects2= [];
gdjs.menuCode.GDtrophy9Objects3= [];
gdjs.menuCode.GDtrophy9Objects4= [];
gdjs.menuCode.GDtrophy10Objects1= [];
gdjs.menuCode.GDtrophy10Objects2= [];
gdjs.menuCode.GDtrophy10Objects3= [];
gdjs.menuCode.GDtrophy10Objects4= [];
gdjs.menuCode.GDtrophy11Objects1= [];
gdjs.menuCode.GDtrophy11Objects2= [];
gdjs.menuCode.GDtrophy11Objects3= [];
gdjs.menuCode.GDtrophy11Objects4= [];
gdjs.menuCode.GDtrophy12Objects1= [];
gdjs.menuCode.GDtrophy12Objects2= [];
gdjs.menuCode.GDtrophy12Objects3= [];
gdjs.menuCode.GDtrophy12Objects4= [];
gdjs.menuCode.GDtrophy1Objects1= [];
gdjs.menuCode.GDtrophy1Objects2= [];
gdjs.menuCode.GDtrophy1Objects3= [];
gdjs.menuCode.GDtrophy1Objects4= [];
gdjs.menuCode.GDtrophy0Objects1= [];
gdjs.menuCode.GDtrophy0Objects2= [];
gdjs.menuCode.GDtrophy0Objects3= [];
gdjs.menuCode.GDtrophy0Objects4= [];


gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32466820);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects2);

gdjs.copyArray(runtimeScene.getObjects("backDrop"), gdjs.menuCode.GDbackDropObjects2);
gdjs.copyArray(runtimeScene.getObjects("bgring"), gdjs.menuCode.GDbgringObjects2);
gdjs.copyArray(runtimeScene.getObjects("fightah"), gdjs.menuCode.GDfightahObjects2);
gdjs.copyArray(runtimeScene.getObjects("lockerRoomDiorama"), gdjs.menuCode.GDlockerRoomDioramaObjects2);
gdjs.copyArray(runtimeScene.getObjects("logoAnimated"), gdjs.menuCode.GDlogoAnimatedObjects2);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
{for(var i = 0, len = gdjs.menuCode.GDbgringObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDbgringObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.menuCode.GDbackDropObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDbackDropObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.menuCode.GDlogoAnimatedObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDlogoAnimatedObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.menuCode.GDfightahObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDfightahObjects2[i].hide();
}
}
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "hemisphereLight", false);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "KOPmainMenu.wav", 1, true, (( gdjs.menuCode.GDUIObjects2.length === 0 ) ? 0 :gdjs.menuCode.GDUIObjects2[0].musicVolume(null)), 1);
}
{for(var i = 0, len = gdjs.menuCode.GDlockerRoomDioramaObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDlockerRoomDioramaObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.adMob.isBannerConfigured();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32467636);
}
}
if (isConditionTrue_0) {
{gdjs.adMob.showBanner();
}
}

}


};gdjs.menuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32470068);
}
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDUIObjects1 */
gdjs.copyArray(runtimeScene.getObjects("backDrop"), gdjs.menuCode.GDbackDropObjects1);
gdjs.copyArray(runtimeScene.getObjects("bgring"), gdjs.menuCode.GDbgringObjects1);
gdjs.copyArray(runtimeScene.getObjects("fightah"), gdjs.menuCode.GDfightahObjects1);
gdjs.copyArray(runtimeScene.getObjects("lockerRoomDiorama"), gdjs.menuCode.GDlockerRoomDioramaObjects1);
gdjs.copyArray(runtimeScene.getObjects("logoAnimated"), gdjs.menuCode.GDlogoAnimatedObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
{for(var i = 0, len = gdjs.menuCode.GDbgringObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDbgringObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.menuCode.GDbackDropObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDbackDropObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.menuCode.GDlogoAnimatedObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDlogoAnimatedObjects1[i].hide();
}
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "hemisphereLight", false);
}
{for(var i = 0, len = gdjs.menuCode.GDfightahObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDfightahObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "KOPsettingsMenu.wav", 1, true, (( gdjs.menuCode.GDUIObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDUIObjects1[0].musicVolume(null)), 1);
}
{gdjs.adMob.hideBanner();
}
{for(var i = 0, len = gdjs.menuCode.GDlockerRoomDioramaObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDlockerRoomDioramaObjects1[i].hide();
}
}
}

}


};gdjs.menuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32472868);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects2);

gdjs.copyArray(runtimeScene.getObjects("backDrop"), gdjs.menuCode.GDbackDropObjects2);
gdjs.copyArray(runtimeScene.getObjects("bgring"), gdjs.menuCode.GDbgringObjects2);
gdjs.copyArray(runtimeScene.getObjects("fightah"), gdjs.menuCode.GDfightahObjects2);
gdjs.copyArray(runtimeScene.getObjects("lockerRoomDiorama"), gdjs.menuCode.GDlockerRoomDioramaObjects2);
gdjs.copyArray(runtimeScene.getObjects("logoAnimated"), gdjs.menuCode.GDlogoAnimatedObjects2);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
{for(var i = 0, len = gdjs.menuCode.GDbgringObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDbgringObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.menuCode.GDbackDropObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDbackDropObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.menuCode.GDlogoAnimatedObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDlogoAnimatedObjects2[i].hide();
}
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "hemisphereLight", false);
}
{for(var i = 0, len = gdjs.menuCode.GDfightahObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDfightahObjects2[i].hide();
}
}
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "KOPsettingsMenu.wav", 1, true, (( gdjs.menuCode.GDUIObjects2.length === 0 ) ? 0 :gdjs.menuCode.GDUIObjects2[0].musicVolume(null)), 1);
}
{for(var i = 0, len = gdjs.menuCode.GDlockerRoomDioramaObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDlockerRoomDioramaObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.adMob.isBannerConfigured();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32475060);
}
}
if (isConditionTrue_0) {
{gdjs.adMob.showBanner();
}
}

}


};gdjs.menuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32476124);
}
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDUIObjects1 */
gdjs.copyArray(runtimeScene.getObjects("backDrop"), gdjs.menuCode.GDbackDropObjects1);
gdjs.copyArray(runtimeScene.getObjects("bgring"), gdjs.menuCode.GDbgringObjects1);
gdjs.copyArray(runtimeScene.getObjects("fightah"), gdjs.menuCode.GDfightahObjects1);
gdjs.copyArray(runtimeScene.getObjects("lockerRoomDiorama"), gdjs.menuCode.GDlockerRoomDioramaObjects1);
gdjs.copyArray(runtimeScene.getObjects("logoAnimated"), gdjs.menuCode.GDlogoAnimatedObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
{for(var i = 0, len = gdjs.menuCode.GDbgringObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDbgringObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.menuCode.GDbackDropObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDbackDropObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.menuCode.GDlogoAnimatedObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDlogoAnimatedObjects1[i].hide();
}
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "hemisphereLight", false);
}
{for(var i = 0, len = gdjs.menuCode.GDfightahObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDfightahObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "KOPsettingsMenu.wav", 1, true, (( gdjs.menuCode.GDUIObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDUIObjects1[0].musicVolume(null)), 1);
}
{gdjs.adMob.hideBanner();
}
{for(var i = 0, len = gdjs.menuCode.GDlockerRoomDioramaObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDlockerRoomDioramaObjects1[i].hide();
}
}
}

}


};gdjs.menuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cameraAnchor"), gdjs.menuCode.GDcameraAnchorObjects3);
gdjs.copyArray(runtimeScene.getObjects("fightah"), gdjs.menuCode.GDfightahObjects3);
{for(var i = 0, len = gdjs.menuCode.GDcameraAnchorObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDcameraAnchorObjects3[i].returnVariable(gdjs.menuCode.GDcameraAnchorObjects3[i].getVariables().getFromIndex(2)).add(0.125 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
{for(var i = 0, len = gdjs.menuCode.GDcameraAnchorObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDcameraAnchorObjects3[i].setX((( gdjs.menuCode.GDfightahObjects3.length === 0 ) ? 0 :gdjs.menuCode.GDfightahObjects3[0].getAABBCenterX()) + (Math.cos(gdjs.menuCode.GDcameraAnchorObjects3[i].getVariables().getFromIndex(2).getAsNumber()) * gdjs.menuCode.GDcameraAnchorObjects3[i].getVariables().getFromIndex(3).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.menuCode.GDcameraAnchorObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDcameraAnchorObjects3[i].getBehavior("Object3D").setZ((( gdjs.menuCode.GDfightahObjects3.length === 0 ) ? 0 :gdjs.menuCode.GDfightahObjects3[0].getBehavior("Object3D").getZ()) + (Math.sin(gdjs.menuCode.GDcameraAnchorObjects3[i].getVariables().getFromIndex(2).getAsNumber()) * gdjs.menuCode.GDcameraAnchorObjects3[i].getVariables().getFromIndex(3).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cameraAnchor"), gdjs.menuCode.GDcameraAnchorObjects2);
gdjs.copyArray(runtimeScene.getObjects("fightah"), gdjs.menuCode.GDfightahObjects2);
{gdjs.scene3d.camera.setCameraZ(runtimeScene, (( gdjs.menuCode.GDcameraAnchorObjects2.length === 0 ) ? 0 :gdjs.menuCode.GDcameraAnchorObjects2[0].getBehavior("Object3D").getCenterZInScene()), "", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.menuCode.GDcameraAnchorObjects2.length === 0 ) ? 0 :gdjs.menuCode.GDcameraAnchorObjects2[0].getAABBCenterX()), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.menuCode.GDcameraAnchorObjects2.length === 0 ) ? 0 :gdjs.menuCode.GDcameraAnchorObjects2[0].getAABBCenterY()), "", 0);
}
{gdjs.scene3d.camera.turnCameraTowardPosition(runtimeScene, (( gdjs.menuCode.GDfightahObjects2.length === 0 ) ? 0 :gdjs.menuCode.GDfightahObjects2[0].getAABBCenterX()), (( gdjs.menuCode.GDfightahObjects2.length === 0 ) ? 0 :gdjs.menuCode.GDfightahObjects2[0].getAABBCenterY()), (( gdjs.menuCode.GDfightahObjects2.length === 0 ) ? 0 :gdjs.menuCode.GDfightahObjects2[0].getBehavior("Object3D").getCenterZInScene()), "", 0, true);
}
}

}


};gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDtrophy3Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy2Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy4Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy6Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy7Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy5Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy9Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy8Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy10Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy11Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy12Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy1Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy0Objects2Objects = Hashtable.newFrom({"trophy3": gdjs.menuCode.GDtrophy3Objects2, "trophy2": gdjs.menuCode.GDtrophy2Objects2, "trophy4": gdjs.menuCode.GDtrophy4Objects2, "trophy6": gdjs.menuCode.GDtrophy6Objects2, "trophy7": gdjs.menuCode.GDtrophy7Objects2, "trophy5": gdjs.menuCode.GDtrophy5Objects2, "trophy9": gdjs.menuCode.GDtrophy9Objects2, "trophy8": gdjs.menuCode.GDtrophy8Objects2, "trophy10": gdjs.menuCode.GDtrophy10Objects2, "trophy11": gdjs.menuCode.GDtrophy11Objects2, "trophy12": gdjs.menuCode.GDtrophy12Objects2, "trophy1": gdjs.menuCode.GDtrophy1Objects2, "trophy0": gdjs.menuCode.GDtrophy0Objects2});
gdjs.menuCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("trophy0"), gdjs.menuCode.GDtrophy0Objects2);
gdjs.copyArray(runtimeScene.getObjects("trophy1"), gdjs.menuCode.GDtrophy1Objects2);
gdjs.copyArray(runtimeScene.getObjects("trophy10"), gdjs.menuCode.GDtrophy10Objects2);
gdjs.copyArray(runtimeScene.getObjects("trophy11"), gdjs.menuCode.GDtrophy11Objects2);
gdjs.copyArray(runtimeScene.getObjects("trophy12"), gdjs.menuCode.GDtrophy12Objects2);
gdjs.copyArray(runtimeScene.getObjects("trophy2"), gdjs.menuCode.GDtrophy2Objects2);
gdjs.copyArray(runtimeScene.getObjects("trophy3"), gdjs.menuCode.GDtrophy3Objects2);
gdjs.copyArray(runtimeScene.getObjects("trophy4"), gdjs.menuCode.GDtrophy4Objects2);
gdjs.copyArray(runtimeScene.getObjects("trophy5"), gdjs.menuCode.GDtrophy5Objects2);
gdjs.copyArray(runtimeScene.getObjects("trophy6"), gdjs.menuCode.GDtrophy6Objects2);
gdjs.copyArray(runtimeScene.getObjects("trophy7"), gdjs.menuCode.GDtrophy7Objects2);
gdjs.copyArray(runtimeScene.getObjects("trophy8"), gdjs.menuCode.GDtrophy8Objects2);
gdjs.copyArray(runtimeScene.getObjects("trophy9"), gdjs.menuCode.GDtrophy9Objects2);
{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDtrophy3Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy2Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy4Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy6Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy7Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy5Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy9Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy8Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy10Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy11Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy12Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy1Objects2ObjectsGDgdjs_9546menuCode_9546GDtrophy0Objects2Objects);
}
{for(var i = 0, len = gdjs.menuCode.GDtrophy3Objects2.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy3Objects2[i].hide();
}
for(var i = 0, len = gdjs.menuCode.GDtrophy2Objects2.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy2Objects2[i].hide();
}
for(var i = 0, len = gdjs.menuCode.GDtrophy4Objects2.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy4Objects2[i].hide();
}
for(var i = 0, len = gdjs.menuCode.GDtrophy6Objects2.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy6Objects2[i].hide();
}
for(var i = 0, len = gdjs.menuCode.GDtrophy7Objects2.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy7Objects2[i].hide();
}
for(var i = 0, len = gdjs.menuCode.GDtrophy5Objects2.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy5Objects2[i].hide();
}
for(var i = 0, len = gdjs.menuCode.GDtrophy9Objects2.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy9Objects2[i].hide();
}
for(var i = 0, len = gdjs.menuCode.GDtrophy8Objects2.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy8Objects2[i].hide();
}
for(var i = 0, len = gdjs.menuCode.GDtrophy10Objects2.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy10Objects2[i].hide();
}
for(var i = 0, len = gdjs.menuCode.GDtrophy11Objects2.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy11Objects2[i].hide();
}
for(var i = 0, len = gdjs.menuCode.GDtrophy12Objects2.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy12Objects2[i].hide();
}
for(var i = 0, len = gdjs.menuCode.GDtrophy1Objects2.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy1Objects2[i].hide();
}
for(var i = 0, len = gdjs.menuCode.GDtrophy0Objects2.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy0Objects2[i].hide();
}
}
}

}


};gdjs.menuCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.menuCode.GDUIObjects3.length === 0 ) ? 0 :gdjs.menuCode.GDUIObjects3[0].achv0(null)) == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32485556);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("trophy0"), gdjs.menuCode.GDtrophy0Objects3);
{for(var i = 0, len = gdjs.menuCode.GDtrophy0Objects3.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy0Objects3[i].hide(false);
}
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.menuCode.GDUIObjects3.length === 0 ) ? 0 :gdjs.menuCode.GDUIObjects3[0].achv1(null)) == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32486444);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("trophy1"), gdjs.menuCode.GDtrophy1Objects3);
{for(var i = 0, len = gdjs.menuCode.GDtrophy1Objects3.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy1Objects3[i].hide(false);
}
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.menuCode.GDUIObjects3.length === 0 ) ? 0 :gdjs.menuCode.GDUIObjects3[0].achv2(null)) == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32487172);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("trophy2"), gdjs.menuCode.GDtrophy2Objects3);
{for(var i = 0, len = gdjs.menuCode.GDtrophy2Objects3.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy2Objects3[i].hide(false);
}
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.menuCode.GDUIObjects3.length === 0 ) ? 0 :gdjs.menuCode.GDUIObjects3[0].achv3(null)) == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32487980);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("trophy3"), gdjs.menuCode.GDtrophy3Objects3);
{for(var i = 0, len = gdjs.menuCode.GDtrophy3Objects3.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy3Objects3[i].hide(false);
}
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.menuCode.GDUIObjects3.length === 0 ) ? 0 :gdjs.menuCode.GDUIObjects3[0].achv4(null)) == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32488868);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("trophy4"), gdjs.menuCode.GDtrophy4Objects3);
{for(var i = 0, len = gdjs.menuCode.GDtrophy4Objects3.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy4Objects3[i].hide(false);
}
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.menuCode.GDUIObjects3.length === 0 ) ? 0 :gdjs.menuCode.GDUIObjects3[0].achv5(null)) == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32489628);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("trophy5"), gdjs.menuCode.GDtrophy5Objects3);
{for(var i = 0, len = gdjs.menuCode.GDtrophy5Objects3.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy5Objects3[i].hide(false);
}
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.menuCode.GDUIObjects3.length === 0 ) ? 0 :gdjs.menuCode.GDUIObjects3[0].achv6(null)) == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32490492);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("trophy6"), gdjs.menuCode.GDtrophy6Objects3);
{for(var i = 0, len = gdjs.menuCode.GDtrophy6Objects3.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy6Objects3[i].hide(false);
}
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.menuCode.GDUIObjects3.length === 0 ) ? 0 :gdjs.menuCode.GDUIObjects3[0].achv7(null)) == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32491300);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("trophy7"), gdjs.menuCode.GDtrophy7Objects3);
{for(var i = 0, len = gdjs.menuCode.GDtrophy7Objects3.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy7Objects3[i].hide(false);
}
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.menuCode.GDUIObjects3.length === 0 ) ? 0 :gdjs.menuCode.GDUIObjects3[0].achv8(null)) == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32492108);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("trophy8"), gdjs.menuCode.GDtrophy8Objects3);
{for(var i = 0, len = gdjs.menuCode.GDtrophy8Objects3.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy8Objects3[i].hide(false);
}
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.menuCode.GDUIObjects3.length === 0 ) ? 0 :gdjs.menuCode.GDUIObjects3[0].achv9(null)) == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32492980);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("trophy9"), gdjs.menuCode.GDtrophy9Objects3);
{for(var i = 0, len = gdjs.menuCode.GDtrophy9Objects3.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy9Objects3[i].hide(false);
}
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.menuCode.GDUIObjects3.length === 0 ) ? 0 :gdjs.menuCode.GDUIObjects3[0].achv10(null)) == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32493748);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("trophy10"), gdjs.menuCode.GDtrophy10Objects3);
{for(var i = 0, len = gdjs.menuCode.GDtrophy10Objects3.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy10Objects3[i].hide(false);
}
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.menuCode.GDUIObjects3.length === 0 ) ? 0 :gdjs.menuCode.GDUIObjects3[0].achv11(null)) == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32494436);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("trophy11"), gdjs.menuCode.GDtrophy11Objects3);
{for(var i = 0, len = gdjs.menuCode.GDtrophy11Objects3.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy11Objects3[i].hide(false);
}
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.menuCode.GDUIObjects2.length === 0 ) ? 0 :gdjs.menuCode.GDUIObjects2[0].achv12(null)) == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32495292);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("trophy12"), gdjs.menuCode.GDtrophy12Objects2);
{for(var i = 0, len = gdjs.menuCode.GDtrophy12Objects2.length ;i < len;++i) {
    gdjs.menuCode.GDtrophy12Objects2[i].hide(false);
}
}
}

}


};gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects3Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects3});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects3Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects3});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects3Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects3});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects3Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects3});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects3Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects3});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDUIObjects3.length;i<l;++i) {
    if ( gdjs.menuCode.GDUIObjects3[i].sex(null) == "f" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDUIObjects3[k] = gdjs.menuCode.GDUIObjects3[i];
        ++k;
    }
}
gdjs.menuCode.GDUIObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.menuCode.GDfightahObjects1, gdjs.menuCode.GDfightahObjects3);

{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects3Objects, 1, gdjs.evtsExt__K_OP___bodyFSlot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects3Objects, 1, gdjs.evtsExt__K_OP___eyesFSlot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects3Objects, 0, gdjs.evtsExt__K_OP___bodyMSlot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects3Objects, 0, gdjs.evtsExt__K_OP___eyesMSlot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects3Objects, 1, gdjs.evtsExt__K_OP___sportsBraSlot.func(runtimeScene, null), null);
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDUIObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDUIObjects2[i].sex(null) == "m" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDUIObjects2[k] = gdjs.menuCode.GDUIObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDUIObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.menuCode.GDfightahObjects1, gdjs.menuCode.GDfightahObjects2);

{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___bodyFSlot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___eyesFSlot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 1, gdjs.evtsExt__K_OP___bodyMSlot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 1, gdjs.evtsExt__K_OP___eyesMSlot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___sportsBraSlot.func(runtimeScene, null), null);
}
}

}


};gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects = Hashtable.newFrom({"fightah": gdjs.menuCode.GDfightahObjects1});
gdjs.menuCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.menuCode.GDfightahObjects1, gdjs.menuCode.GDfightahObjects2);

{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairBaseSlot.func(runtimeScene, null), null);
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDUIObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDUIObjects2[i].typeHair(null) == "none" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDUIObjects2[k] = gdjs.menuCode.GDUIObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDUIObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.menuCode.GDfightahObjects1, gdjs.menuCode.GDfightahObjects2);

{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV0Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV1Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV2Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV3Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV4Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV5Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV6Slot.func(runtimeScene, null), null);
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDUIObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDUIObjects2[i].typeHair(null) == "afro" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDUIObjects2[k] = gdjs.menuCode.GDUIObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDUIObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.menuCode.GDfightahObjects1, gdjs.menuCode.GDfightahObjects2);

{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 1, gdjs.evtsExt__K_OP___hairV0Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV1Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV2Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV3Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV4Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV5Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV6Slot.func(runtimeScene, null), null);
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDUIObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDUIObjects2[i].typeHair(null) == "mohawk" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDUIObjects2[k] = gdjs.menuCode.GDUIObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDUIObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.menuCode.GDfightahObjects1, gdjs.menuCode.GDfightahObjects2);

{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV0Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 1, gdjs.evtsExt__K_OP___hairV1Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV2Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV3Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV4Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV5Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV6Slot.func(runtimeScene, null), null);
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDUIObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDUIObjects2[i].typeHair(null) == "shonen" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDUIObjects2[k] = gdjs.menuCode.GDUIObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDUIObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.menuCode.GDfightahObjects1, gdjs.menuCode.GDfightahObjects2);

{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV0Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV1Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 1, gdjs.evtsExt__K_OP___hairV2Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV3Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV4Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV5Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV6Slot.func(runtimeScene, null), null);
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDUIObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDUIObjects2[i].typeHair(null) == "shaggy" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDUIObjects2[k] = gdjs.menuCode.GDUIObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDUIObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.menuCode.GDfightahObjects1, gdjs.menuCode.GDfightahObjects2);

{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV0Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV1Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV2Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 1, gdjs.evtsExt__K_OP___hairV3Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV4Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV5Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV6Slot.func(runtimeScene, null), null);
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDUIObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDUIObjects2[i].typeHair(null) == "long" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDUIObjects2[k] = gdjs.menuCode.GDUIObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDUIObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.menuCode.GDfightahObjects1, gdjs.menuCode.GDfightahObjects2);

{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV0Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV1Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV2Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV3Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 1, gdjs.evtsExt__K_OP___hairV4Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV5Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV6Slot.func(runtimeScene, null), null);
}
}

}


{

gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDUIObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDUIObjects2[i].typeHair(null) == "shiesty" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDUIObjects2[k] = gdjs.menuCode.GDUIObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDUIObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.menuCode.GDfightahObjects1, gdjs.menuCode.GDfightahObjects2);

{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV0Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV1Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV2Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV3Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV4Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 1, gdjs.evtsExt__K_OP___hairV5Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects2Objects, 0, gdjs.evtsExt__K_OP___hairV6Slot.func(runtimeScene, null), null);
}
}

}


{

/* Reuse gdjs.menuCode.GDUIObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDUIObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDUIObjects1[i].typeHair(null) == "pomp" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDUIObjects1[k] = gdjs.menuCode.GDUIObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDUIObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDfightahObjects1 */
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, 0, gdjs.evtsExt__K_OP___hairV0Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, 0, gdjs.evtsExt__K_OP___hairV1Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, 0, gdjs.evtsExt__K_OP___hairV2Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, 0, gdjs.evtsExt__K_OP___hairV3Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, 0, gdjs.evtsExt__K_OP___hairV4Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, 0, gdjs.evtsExt__K_OP___hairV5Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, 1, gdjs.evtsExt__K_OP___hairV6Slot.func(runtimeScene, null), null);
}
}

}


};gdjs.menuCode.eventsList9 = function(runtimeScene) {

{


gdjs.menuCode.eventsList7(runtimeScene);
}


{


gdjs.menuCode.eventsList8(runtimeScene);
}


};gdjs.menuCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.menuCode.GDUIObjects1 */
gdjs.copyArray(runtimeScene.getObjects("fightah"), gdjs.menuCode.GDfightahObjects1);
{gdjs.evtsExt__MeshMaterial__ColorBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, (( gdjs.menuCode.GDUIObjects1.length === 0 ) ? "" :gdjs.menuCode.GDUIObjects1[0].colourBra(null)), gdjs.evtsExt__K_OP___sportsBraSlot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__ColorBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, (( gdjs.menuCode.GDUIObjects1.length === 0 ) ? "" :gdjs.menuCode.GDUIObjects1[0].colourSkin(null)), gdjs.evtsExt__K_OP___bodyFSlot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__ColorBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, (( gdjs.menuCode.GDUIObjects1.length === 0 ) ? "" :gdjs.menuCode.GDUIObjects1[0].colourSkin(null)), gdjs.evtsExt__K_OP___bodyMSlot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__ColorBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, (( gdjs.menuCode.GDUIObjects1.length === 0 ) ? "" :gdjs.menuCode.GDUIObjects1[0].colourSkin(null)), gdjs.evtsExt__K_OP___headSlot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__ColorBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, (( gdjs.menuCode.GDUIObjects1.length === 0 ) ? "" :gdjs.menuCode.GDUIObjects1[0].colourBrows(null)), gdjs.evtsExt__K_OP___browSlot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__ColorBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, "255;255;255", gdjs.evtsExt__K_OP___eyesFSlot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__ColorBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, "255;255;255", gdjs.evtsExt__K_OP___eyesMSlot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__ColorBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, (( gdjs.menuCode.GDUIObjects1.length === 0 ) ? "" :gdjs.menuCode.GDUIObjects1[0].colourEyes(null)), gdjs.evtsExt__K_OP___eyesSlot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__ColorBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, (( gdjs.menuCode.GDUIObjects1.length === 0 ) ? "" :gdjs.menuCode.GDUIObjects1[0].colourGloveL(null)), gdjs.evtsExt__K_OP___glovesLSlot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__ColorBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, (( gdjs.menuCode.GDUIObjects1.length === 0 ) ? "" :gdjs.menuCode.GDUIObjects1[0].colourGloveR(null)), gdjs.evtsExt__K_OP___glovesRSlot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__ColorBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, (( gdjs.menuCode.GDUIObjects1.length === 0 ) ? "" :gdjs.menuCode.GDUIObjects1[0].colourHair(null)), gdjs.evtsExt__K_OP___hairV0Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__ColorBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, (( gdjs.menuCode.GDUIObjects1.length === 0 ) ? "" :gdjs.menuCode.GDUIObjects1[0].colourHair(null)), gdjs.evtsExt__K_OP___hairV1Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__ColorBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, (( gdjs.menuCode.GDUIObjects1.length === 0 ) ? "" :gdjs.menuCode.GDUIObjects1[0].colourHair(null)), gdjs.evtsExt__K_OP___hairV2Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__ColorBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, (( gdjs.menuCode.GDUIObjects1.length === 0 ) ? "" :gdjs.menuCode.GDUIObjects1[0].colourHair(null)), gdjs.evtsExt__K_OP___hairV3Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__ColorBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, (( gdjs.menuCode.GDUIObjects1.length === 0 ) ? "" :gdjs.menuCode.GDUIObjects1[0].colourHair(null)), gdjs.evtsExt__K_OP___hairV4Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__ColorBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, (( gdjs.menuCode.GDUIObjects1.length === 0 ) ? "" :gdjs.menuCode.GDUIObjects1[0].colourHair(null)), gdjs.evtsExt__K_OP___hairV5Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__ColorBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, (( gdjs.menuCode.GDUIObjects1.length === 0 ) ? "" :gdjs.menuCode.GDUIObjects1[0].colourHair(null)), gdjs.evtsExt__K_OP___hairV6Slot.func(runtimeScene, null), null);
}
{gdjs.evtsExt__MeshMaterial__ColorBySlot.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, "0;0;0", gdjs.evtsExt__K_OP___eyesCSlot.func(runtimeScene, null), null);
}

{ //Subevents
gdjs.menuCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.menuCode.eventsList11 = function(runtimeScene) {

{


gdjs.menuCode.eventsList4(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32481804);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.menuCode.GDUIObjects1, gdjs.menuCode.GDUIObjects2);

gdjs.copyArray(runtimeScene.getObjects("backDrop"), gdjs.menuCode.GDbackDropObjects2);
gdjs.copyArray(runtimeScene.getObjects("bgring"), gdjs.menuCode.GDbgringObjects2);
gdjs.copyArray(runtimeScene.getObjects("fightah"), gdjs.menuCode.GDfightahObjects2);
gdjs.copyArray(runtimeScene.getObjects("lockerRoomDiorama"), gdjs.menuCode.GDlockerRoomDioramaObjects2);
gdjs.copyArray(runtimeScene.getObjects("logoAnimated"), gdjs.menuCode.GDlogoAnimatedObjects2);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
{for(var i = 0, len = gdjs.menuCode.GDbackDropObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDbackDropObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.menuCode.GDbgringObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDbgringObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.menuCode.GDlogoAnimatedObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDlogoAnimatedObjects2[i].hide();
}
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "hemisphereLight", true);
}
{for(var i = 0, len = gdjs.menuCode.GDfightahObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDfightahObjects2[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "228;171;85");
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "KOPlockerMenu.wav", 1, true, (( gdjs.menuCode.GDUIObjects2.length === 0 ) ? 0 :gdjs.menuCode.GDUIObjects2[0].musicVolume(null)), 1);
}
{gdjs.adMob.hideBanner();
}
{for(var i = 0, len = gdjs.menuCode.GDlockerRoomDioramaObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDlockerRoomDioramaObjects2[i].hide(false);
}
}

{ //Subevents
gdjs.menuCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.menuCode.eventsList6(runtimeScene);
}


{


gdjs.menuCode.eventsList10(runtimeScene);
}


};gdjs.menuCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cameraAnchor"), gdjs.menuCode.GDcameraAnchorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fightah"), gdjs.menuCode.GDfightahObjects1);
{gdjs.adMob.setTestMode(true);
}
{gdjs.adMob.setupBanner("ca-app-pub-7873959130285802/7923272991", "", false);
}
{for(var i = 0, len = gdjs.menuCode.GDcameraAnchorObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDcameraAnchorObjects1[i].setCenterXInScene((( gdjs.menuCode.GDfightahObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDfightahObjects1[0].getAABBCenterX()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32464748);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fightah"), gdjs.menuCode.GDfightahObjects1);
{gdjs.evtsExt__MeshMaterial__NewMaterialInstance.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfightahObjects1Objects, null);
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "KOPmainMenu.wav");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "KOPsettingsMenu.wav");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "KOPlockerMenu.wav");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "KOPmultiplayerFight.mp3");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UI"), gdjs.menuCode.GDUIObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDUIObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDUIObjects1[i].menuSelection(null) == "main" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDUIObjects1[k] = gdjs.menuCode.GDUIObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDUIObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.menuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UI"), gdjs.menuCode.GDUIObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDUIObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDUIObjects1[i].menuSelection(null) == "fight" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDUIObjects1[k] = gdjs.menuCode.GDUIObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDUIObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.menuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UI"), gdjs.menuCode.GDUIObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDUIObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDUIObjects1[i].menuSelection(null) == "career" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDUIObjects1[k] = gdjs.menuCode.GDUIObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDUIObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.menuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UI"), gdjs.menuCode.GDUIObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDUIObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDUIObjects1[i].menuSelection(null) == "settings" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDUIObjects1[k] = gdjs.menuCode.GDUIObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDUIObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.menuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UI"), gdjs.menuCode.GDUIObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDUIObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDUIObjects1[i].menuSelection(null) == "locker" ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDUIObjects1[k] = gdjs.menuCode.GDUIObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDUIObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.menuCode.eventsList11(runtimeScene);} //End of subevents
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDUIObjects1.length = 0;
gdjs.menuCode.GDUIObjects2.length = 0;
gdjs.menuCode.GDUIObjects3.length = 0;
gdjs.menuCode.GDUIObjects4.length = 0;
gdjs.menuCode.GDlogoAnimatedObjects1.length = 0;
gdjs.menuCode.GDlogoAnimatedObjects2.length = 0;
gdjs.menuCode.GDlogoAnimatedObjects3.length = 0;
gdjs.menuCode.GDlogoAnimatedObjects4.length = 0;
gdjs.menuCode.GDoponentObjects1.length = 0;
gdjs.menuCode.GDoponentObjects2.length = 0;
gdjs.menuCode.GDoponentObjects3.length = 0;
gdjs.menuCode.GDoponentObjects4.length = 0;
gdjs.menuCode.GDbgringObjects1.length = 0;
gdjs.menuCode.GDbgringObjects2.length = 0;
gdjs.menuCode.GDbgringObjects3.length = 0;
gdjs.menuCode.GDbgringObjects4.length = 0;
gdjs.menuCode.GDbackDropObjects1.length = 0;
gdjs.menuCode.GDbackDropObjects2.length = 0;
gdjs.menuCode.GDbackDropObjects3.length = 0;
gdjs.menuCode.GDbackDropObjects4.length = 0;
gdjs.menuCode.GDfightahObjects1.length = 0;
gdjs.menuCode.GDfightahObjects2.length = 0;
gdjs.menuCode.GDfightahObjects3.length = 0;
gdjs.menuCode.GDfightahObjects4.length = 0;
gdjs.menuCode.GDcameraAnchorObjects1.length = 0;
gdjs.menuCode.GDcameraAnchorObjects2.length = 0;
gdjs.menuCode.GDcameraAnchorObjects3.length = 0;
gdjs.menuCode.GDcameraAnchorObjects4.length = 0;
gdjs.menuCode.GDlockerRoomDioramaObjects1.length = 0;
gdjs.menuCode.GDlockerRoomDioramaObjects2.length = 0;
gdjs.menuCode.GDlockerRoomDioramaObjects3.length = 0;
gdjs.menuCode.GDlockerRoomDioramaObjects4.length = 0;
gdjs.menuCode.GDcameraAnchor2Objects1.length = 0;
gdjs.menuCode.GDcameraAnchor2Objects2.length = 0;
gdjs.menuCode.GDcameraAnchor2Objects3.length = 0;
gdjs.menuCode.GDcameraAnchor2Objects4.length = 0;
gdjs.menuCode.GDtrophy3Objects1.length = 0;
gdjs.menuCode.GDtrophy3Objects2.length = 0;
gdjs.menuCode.GDtrophy3Objects3.length = 0;
gdjs.menuCode.GDtrophy3Objects4.length = 0;
gdjs.menuCode.GDtrophy2Objects1.length = 0;
gdjs.menuCode.GDtrophy2Objects2.length = 0;
gdjs.menuCode.GDtrophy2Objects3.length = 0;
gdjs.menuCode.GDtrophy2Objects4.length = 0;
gdjs.menuCode.GDtrophy4Objects1.length = 0;
gdjs.menuCode.GDtrophy4Objects2.length = 0;
gdjs.menuCode.GDtrophy4Objects3.length = 0;
gdjs.menuCode.GDtrophy4Objects4.length = 0;
gdjs.menuCode.GDtrophy5Objects1.length = 0;
gdjs.menuCode.GDtrophy5Objects2.length = 0;
gdjs.menuCode.GDtrophy5Objects3.length = 0;
gdjs.menuCode.GDtrophy5Objects4.length = 0;
gdjs.menuCode.GDtrophy6Objects1.length = 0;
gdjs.menuCode.GDtrophy6Objects2.length = 0;
gdjs.menuCode.GDtrophy6Objects3.length = 0;
gdjs.menuCode.GDtrophy6Objects4.length = 0;
gdjs.menuCode.GDtrophy7Objects1.length = 0;
gdjs.menuCode.GDtrophy7Objects2.length = 0;
gdjs.menuCode.GDtrophy7Objects3.length = 0;
gdjs.menuCode.GDtrophy7Objects4.length = 0;
gdjs.menuCode.GDtrophy8Objects1.length = 0;
gdjs.menuCode.GDtrophy8Objects2.length = 0;
gdjs.menuCode.GDtrophy8Objects3.length = 0;
gdjs.menuCode.GDtrophy8Objects4.length = 0;
gdjs.menuCode.GDtrophy9Objects1.length = 0;
gdjs.menuCode.GDtrophy9Objects2.length = 0;
gdjs.menuCode.GDtrophy9Objects3.length = 0;
gdjs.menuCode.GDtrophy9Objects4.length = 0;
gdjs.menuCode.GDtrophy10Objects1.length = 0;
gdjs.menuCode.GDtrophy10Objects2.length = 0;
gdjs.menuCode.GDtrophy10Objects3.length = 0;
gdjs.menuCode.GDtrophy10Objects4.length = 0;
gdjs.menuCode.GDtrophy11Objects1.length = 0;
gdjs.menuCode.GDtrophy11Objects2.length = 0;
gdjs.menuCode.GDtrophy11Objects3.length = 0;
gdjs.menuCode.GDtrophy11Objects4.length = 0;
gdjs.menuCode.GDtrophy12Objects1.length = 0;
gdjs.menuCode.GDtrophy12Objects2.length = 0;
gdjs.menuCode.GDtrophy12Objects3.length = 0;
gdjs.menuCode.GDtrophy12Objects4.length = 0;
gdjs.menuCode.GDtrophy1Objects1.length = 0;
gdjs.menuCode.GDtrophy1Objects2.length = 0;
gdjs.menuCode.GDtrophy1Objects3.length = 0;
gdjs.menuCode.GDtrophy1Objects4.length = 0;
gdjs.menuCode.GDtrophy0Objects1.length = 0;
gdjs.menuCode.GDtrophy0Objects2.length = 0;
gdjs.menuCode.GDtrophy0Objects3.length = 0;
gdjs.menuCode.GDtrophy0Objects4.length = 0;

gdjs.menuCode.eventsList12(runtimeScene);
gdjs.menuCode.GDUIObjects1.length = 0;
gdjs.menuCode.GDUIObjects2.length = 0;
gdjs.menuCode.GDUIObjects3.length = 0;
gdjs.menuCode.GDUIObjects4.length = 0;
gdjs.menuCode.GDlogoAnimatedObjects1.length = 0;
gdjs.menuCode.GDlogoAnimatedObjects2.length = 0;
gdjs.menuCode.GDlogoAnimatedObjects3.length = 0;
gdjs.menuCode.GDlogoAnimatedObjects4.length = 0;
gdjs.menuCode.GDoponentObjects1.length = 0;
gdjs.menuCode.GDoponentObjects2.length = 0;
gdjs.menuCode.GDoponentObjects3.length = 0;
gdjs.menuCode.GDoponentObjects4.length = 0;
gdjs.menuCode.GDbgringObjects1.length = 0;
gdjs.menuCode.GDbgringObjects2.length = 0;
gdjs.menuCode.GDbgringObjects3.length = 0;
gdjs.menuCode.GDbgringObjects4.length = 0;
gdjs.menuCode.GDbackDropObjects1.length = 0;
gdjs.menuCode.GDbackDropObjects2.length = 0;
gdjs.menuCode.GDbackDropObjects3.length = 0;
gdjs.menuCode.GDbackDropObjects4.length = 0;
gdjs.menuCode.GDfightahObjects1.length = 0;
gdjs.menuCode.GDfightahObjects2.length = 0;
gdjs.menuCode.GDfightahObjects3.length = 0;
gdjs.menuCode.GDfightahObjects4.length = 0;
gdjs.menuCode.GDcameraAnchorObjects1.length = 0;
gdjs.menuCode.GDcameraAnchorObjects2.length = 0;
gdjs.menuCode.GDcameraAnchorObjects3.length = 0;
gdjs.menuCode.GDcameraAnchorObjects4.length = 0;
gdjs.menuCode.GDlockerRoomDioramaObjects1.length = 0;
gdjs.menuCode.GDlockerRoomDioramaObjects2.length = 0;
gdjs.menuCode.GDlockerRoomDioramaObjects3.length = 0;
gdjs.menuCode.GDlockerRoomDioramaObjects4.length = 0;
gdjs.menuCode.GDcameraAnchor2Objects1.length = 0;
gdjs.menuCode.GDcameraAnchor2Objects2.length = 0;
gdjs.menuCode.GDcameraAnchor2Objects3.length = 0;
gdjs.menuCode.GDcameraAnchor2Objects4.length = 0;
gdjs.menuCode.GDtrophy3Objects1.length = 0;
gdjs.menuCode.GDtrophy3Objects2.length = 0;
gdjs.menuCode.GDtrophy3Objects3.length = 0;
gdjs.menuCode.GDtrophy3Objects4.length = 0;
gdjs.menuCode.GDtrophy2Objects1.length = 0;
gdjs.menuCode.GDtrophy2Objects2.length = 0;
gdjs.menuCode.GDtrophy2Objects3.length = 0;
gdjs.menuCode.GDtrophy2Objects4.length = 0;
gdjs.menuCode.GDtrophy4Objects1.length = 0;
gdjs.menuCode.GDtrophy4Objects2.length = 0;
gdjs.menuCode.GDtrophy4Objects3.length = 0;
gdjs.menuCode.GDtrophy4Objects4.length = 0;
gdjs.menuCode.GDtrophy5Objects1.length = 0;
gdjs.menuCode.GDtrophy5Objects2.length = 0;
gdjs.menuCode.GDtrophy5Objects3.length = 0;
gdjs.menuCode.GDtrophy5Objects4.length = 0;
gdjs.menuCode.GDtrophy6Objects1.length = 0;
gdjs.menuCode.GDtrophy6Objects2.length = 0;
gdjs.menuCode.GDtrophy6Objects3.length = 0;
gdjs.menuCode.GDtrophy6Objects4.length = 0;
gdjs.menuCode.GDtrophy7Objects1.length = 0;
gdjs.menuCode.GDtrophy7Objects2.length = 0;
gdjs.menuCode.GDtrophy7Objects3.length = 0;
gdjs.menuCode.GDtrophy7Objects4.length = 0;
gdjs.menuCode.GDtrophy8Objects1.length = 0;
gdjs.menuCode.GDtrophy8Objects2.length = 0;
gdjs.menuCode.GDtrophy8Objects3.length = 0;
gdjs.menuCode.GDtrophy8Objects4.length = 0;
gdjs.menuCode.GDtrophy9Objects1.length = 0;
gdjs.menuCode.GDtrophy9Objects2.length = 0;
gdjs.menuCode.GDtrophy9Objects3.length = 0;
gdjs.menuCode.GDtrophy9Objects4.length = 0;
gdjs.menuCode.GDtrophy10Objects1.length = 0;
gdjs.menuCode.GDtrophy10Objects2.length = 0;
gdjs.menuCode.GDtrophy10Objects3.length = 0;
gdjs.menuCode.GDtrophy10Objects4.length = 0;
gdjs.menuCode.GDtrophy11Objects1.length = 0;
gdjs.menuCode.GDtrophy11Objects2.length = 0;
gdjs.menuCode.GDtrophy11Objects3.length = 0;
gdjs.menuCode.GDtrophy11Objects4.length = 0;
gdjs.menuCode.GDtrophy12Objects1.length = 0;
gdjs.menuCode.GDtrophy12Objects2.length = 0;
gdjs.menuCode.GDtrophy12Objects3.length = 0;
gdjs.menuCode.GDtrophy12Objects4.length = 0;
gdjs.menuCode.GDtrophy1Objects1.length = 0;
gdjs.menuCode.GDtrophy1Objects2.length = 0;
gdjs.menuCode.GDtrophy1Objects3.length = 0;
gdjs.menuCode.GDtrophy1Objects4.length = 0;
gdjs.menuCode.GDtrophy0Objects1.length = 0;
gdjs.menuCode.GDtrophy0Objects2.length = 0;
gdjs.menuCode.GDtrophy0Objects3.length = 0;
gdjs.menuCode.GDtrophy0Objects4.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
