
gdjs.evtsExt__K_OP___careerMenu = gdjs.evtsExt__K_OP___careerMenu || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__K_OP___careerMenu.careerMenu = class careerMenu extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  

  

  
}

// Methods:
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDcareerObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDcareerObjects2= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDcareerObjects3= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDvContainerObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDvContainerObjects2= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDvContainerObjects3= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects2= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects3= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDhardObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDhardObjects2= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDhardObjects3= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDexpertObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDexpertObjects2= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDexpertObjects3= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDnormalObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDnormalObjects2= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDnormalObjects3= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDIDTextObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDIDTextObjects2= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDIDTextObjects3= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDeasyObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDeasyObjects2= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDeasyObjects3= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDtutorialObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDtutorialObjects2= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDtutorialObjects3= [];


gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.asyncCallback29973788 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "singlePlayer", false);
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.idToCallbackMap.set(29973788, gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.asyncCallback29973788);
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.asyncCallback29973788(runtimeScene, eventsFunctionContext, asyncObjectsList)), 29973788, asyncObjectsList);
}
}

}


};gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.asyncCallback29948348 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("tutorial").getChild("state").setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "singlePlayer", false);
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.idToCallbackMap.set(29948348, gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.asyncCallback29948348);
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.asyncCallback29948348(runtimeScene, eventsFunctionContext, asyncObjectsList)), 29948348, asyncObjectsList);
}
}

}


};gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.asyncCallback29951780 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("tutorial").getChild("state").setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "singlePlayer", false);
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.idToCallbackMap.set(29951780, gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.asyncCallback29951780);
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.asyncCallback29951780(runtimeScene, eventsFunctionContext, asyncObjectsList)), 29951780, asyncObjectsList);
}
}

}


};gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.asyncCallback29955228 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("tutorial").getChild("state").setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "singlePlayer", false);
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.idToCallbackMap.set(29955228, gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.asyncCallback29955228);
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.asyncCallback29955228(runtimeScene, eventsFunctionContext, asyncObjectsList)), 29955228, asyncObjectsList);
}
}

}


};gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.asyncCallback29949460 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("tutorial").getChild("state").setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "singlePlayer", false);
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.idToCallbackMap.set(29949460, gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.asyncCallback29949460);
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.asyncCallback29949460(runtimeScene, eventsFunctionContext, asyncObjectsList)), 29949460, asyncObjectsList);
}
}

}


};gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("tutorial"), gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDtutorialObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDtutorialObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDtutorialObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDtutorialObjects2[k] = gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDtutorialObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDtutorialObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select", false, eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("sound").getChild("menuSFX").getAsNumber(), gdjs.evtsExt__Choose__RandomNumber.func(runtimeScene, "1.75,2,1.5", eventsFunctionContext));
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("singlePlayer").getChild("difficulty").setNumber(0);
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("tutorial").getChild("state").setNumber(1);
}

{ //Subevents
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("easy"), gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDeasyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDeasyObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDeasyObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDeasyObjects2[k] = gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDeasyObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDeasyObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select", false, eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("sound").getChild("menuSFX").getAsNumber(), gdjs.evtsExt__Choose__RandomNumber.func(runtimeScene, "1.75,2,1.5", eventsFunctionContext));
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("singlePlayer").getChild("difficulty").setNumber(1);
}

{ //Subevents
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("normal"), gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDnormalObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDnormalObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDnormalObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDnormalObjects2[k] = gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDnormalObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDnormalObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select", false, eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("sound").getChild("menuSFX").getAsNumber(), gdjs.evtsExt__Choose__RandomNumber.func(runtimeScene, "1.75,2,1.5", eventsFunctionContext));
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("singlePlayer").getChild("difficulty").setNumber(2);
}

{ //Subevents
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("hard"), gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDhardObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDhardObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDhardObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDhardObjects2[k] = gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDhardObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDhardObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select", false, eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("sound").getChild("menuSFX").getAsNumber(), gdjs.evtsExt__Choose__RandomNumber.func(runtimeScene, "1.75,2,1.5", eventsFunctionContext));
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("singlePlayer").getChild("difficulty").setNumber(3);
}

{ //Subevents
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("expert"), gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDexpertObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDexpertObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDexpertObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDexpertObjects1[k] = gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDexpertObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDexpertObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select", false, eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("sound").getChild("menuSFX").getAsNumber(), gdjs.evtsExt__Choose__RandomNumber.func(runtimeScene, "1.75,2,1.5", eventsFunctionContext));
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("singlePlayer").getChild("difficulty").setNumber(4);
}

{ //Subevents
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(asyncObjectsList.getObjects("back"), gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects2);

{for(var i = 0, len = gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects2.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects2[i].returnVariable(gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects2[i].getVariables().get("activated")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.asyncCallback29954868 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.eventsList6(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.idToCallbackMap.set(29954868, gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.asyncCallback29954868);
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects1) asyncObjectsList.addObject("back", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.asyncCallback29954868(runtimeScene, eventsFunctionContext, asyncObjectsList)), 29954868, asyncObjectsList);
}
}

}


};gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(29972476);
}
if (isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("singlePlayer").getChild("difficulty").setNumber(0);
}
}

}


{


gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


{

gdjs.copyArray(eventsFunctionContext.getObjects("back"), gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects1[k] = gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select", false, eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("sound").getChild("menuSFX").getAsNumber(), gdjs.evtsExt__Choose__RandomNumber.func(runtimeScene, "1.75,2,1.5", eventsFunctionContext));
}

{ //Subevents
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDcareerObjectsList = [...runtimeScene.getObjects("career")];
var GDcareerObjects = Hashtable.newFrom({"career": thisGDcareerObjectsList});
var thisGDvContainerObjectsList = [...runtimeScene.getObjects("vContainer")];
var GDvContainerObjects = Hashtable.newFrom({"vContainer": thisGDvContainerObjectsList});
var thisGDbackObjectsList = [...runtimeScene.getObjects("back")];
var GDbackObjects = Hashtable.newFrom({"back": thisGDbackObjectsList});
var thisGDhardObjectsList = [...runtimeScene.getObjects("hard")];
var GDhardObjects = Hashtable.newFrom({"hard": thisGDhardObjectsList});
var thisGDexpertObjectsList = [...runtimeScene.getObjects("expert")];
var GDexpertObjects = Hashtable.newFrom({"expert": thisGDexpertObjectsList});
var thisGDnormalObjectsList = [...runtimeScene.getObjects("normal")];
var GDnormalObjects = Hashtable.newFrom({"normal": thisGDnormalObjectsList});
var thisGDIDTextObjectsList = [...runtimeScene.getObjects("IDText")];
var GDIDTextObjects = Hashtable.newFrom({"IDText": thisGDIDTextObjectsList});
var thisGDeasyObjectsList = [...runtimeScene.getObjects("easy")];
var GDeasyObjects = Hashtable.newFrom({"easy": thisGDeasyObjectsList});
var thisGDtutorialObjectsList = [...runtimeScene.getObjects("tutorial")];
var GDtutorialObjects = Hashtable.newFrom({"tutorial": thisGDtutorialObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "career": GDcareerObjects
, "vContainer": GDvContainerObjects
, "back": GDbackObjects
, "hard": GDhardObjects
, "expert": GDexpertObjects
, "normal": GDnormalObjects
, "IDText": GDIDTextObjects
, "easy": GDeasyObjects
, "tutorial": GDtutorialObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "career": thisGDcareerObjectsList
, "vContainer": thisGDvContainerObjectsList
, "back": thisGDbackObjectsList
, "hard": thisGDhardObjectsList
, "expert": thisGDexpertObjectsList
, "normal": thisGDnormalObjectsList
, "IDText": thisGDIDTextObjectsList
, "easy": thisGDeasyObjectsList
, "tutorial": thisGDtutorialObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("K_OP_"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("K_OP_"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDcareerObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDcareerObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDcareerObjects3.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDvContainerObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDvContainerObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDvContainerObjects3.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects3.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDhardObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDhardObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDhardObjects3.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDexpertObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDexpertObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDexpertObjects3.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDnormalObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDnormalObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDnormalObjects3.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDIDTextObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDIDTextObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDIDTextObjects3.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDeasyObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDeasyObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDeasyObjects3.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDtutorialObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDtutorialObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDtutorialObjects3.length = 0;

gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.eventsList8(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDcareerObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDcareerObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDcareerObjects3.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDvContainerObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDvContainerObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDvContainerObjects3.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDbackObjects3.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDhardObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDhardObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDhardObjects3.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDexpertObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDexpertObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDexpertObjects3.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDnormalObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDnormalObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDnormalObjects3.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDIDTextObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDIDTextObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDIDTextObjects3.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDeasyObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDeasyObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDeasyObjects3.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDtutorialObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDtutorialObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPostEventsContext.GDtutorialObjects3.length = 0;


return;
}
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext = {};
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDcareerObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDcareerObjects2= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDvContainerObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDvContainerObjects2= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDbackObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDbackObjects2= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDhardObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDhardObjects2= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDexpertObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDexpertObjects2= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDnormalObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDnormalObjects2= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDIDTextObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDIDTextObjects2= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDeasyObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDeasyObjects2= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDtutorialObjects1= [];
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDtutorialObjects2= [];


gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("back"), gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDbackObjects1);
{eventsFunctionContext.returnValue = ((gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDbackObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDbackObjects1[0].getVariables()).get("activated").getAsNumber();}
}

}


};

gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.close = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDcareerObjectsList = [...runtimeScene.getObjects("career")];
var GDcareerObjects = Hashtable.newFrom({"career": thisGDcareerObjectsList});
var thisGDvContainerObjectsList = [...runtimeScene.getObjects("vContainer")];
var GDvContainerObjects = Hashtable.newFrom({"vContainer": thisGDvContainerObjectsList});
var thisGDbackObjectsList = [...runtimeScene.getObjects("back")];
var GDbackObjects = Hashtable.newFrom({"back": thisGDbackObjectsList});
var thisGDhardObjectsList = [...runtimeScene.getObjects("hard")];
var GDhardObjects = Hashtable.newFrom({"hard": thisGDhardObjectsList});
var thisGDexpertObjectsList = [...runtimeScene.getObjects("expert")];
var GDexpertObjects = Hashtable.newFrom({"expert": thisGDexpertObjectsList});
var thisGDnormalObjectsList = [...runtimeScene.getObjects("normal")];
var GDnormalObjects = Hashtable.newFrom({"normal": thisGDnormalObjectsList});
var thisGDIDTextObjectsList = [...runtimeScene.getObjects("IDText")];
var GDIDTextObjects = Hashtable.newFrom({"IDText": thisGDIDTextObjectsList});
var thisGDeasyObjectsList = [...runtimeScene.getObjects("easy")];
var GDeasyObjects = Hashtable.newFrom({"easy": thisGDeasyObjectsList});
var thisGDtutorialObjectsList = [...runtimeScene.getObjects("tutorial")];
var GDtutorialObjects = Hashtable.newFrom({"tutorial": thisGDtutorialObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "career": GDcareerObjects
, "vContainer": GDvContainerObjects
, "back": GDbackObjects
, "hard": GDhardObjects
, "expert": GDexpertObjects
, "normal": GDnormalObjects
, "IDText": GDIDTextObjects
, "easy": GDeasyObjects
, "tutorial": GDtutorialObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "career": thisGDcareerObjectsList
, "vContainer": thisGDvContainerObjectsList
, "back": thisGDbackObjectsList
, "hard": thisGDhardObjectsList
, "expert": thisGDexpertObjectsList
, "normal": thisGDnormalObjectsList
, "IDText": thisGDIDTextObjectsList
, "easy": thisGDeasyObjectsList
, "tutorial": thisGDtutorialObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("K_OP_"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("K_OP_"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDcareerObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDcareerObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDvContainerObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDvContainerObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDbackObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDbackObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDhardObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDhardObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDexpertObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDexpertObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDnormalObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDnormalObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDIDTextObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDIDTextObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDeasyObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDeasyObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDtutorialObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDtutorialObjects2.length = 0;

gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDcareerObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDcareerObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDvContainerObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDvContainerObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDbackObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDbackObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDhardObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDhardObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDexpertObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDexpertObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDnormalObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDnormalObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDIDTextObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDIDTextObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDeasyObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDeasyObjects2.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDtutorialObjects1.length = 0;
gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.closeContext.GDtutorialObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__K_OP___careerMenu.careerMenu.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("K_OP_::careerMenu", gdjs.evtsExt__K_OP___careerMenu.careerMenu);
