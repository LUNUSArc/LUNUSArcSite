
gdjs.evtsExt__K_OP___mainUi = gdjs.evtsExt__K_OP___mainUi || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__K_OP___mainUi.mainUi = class mainUi extends gdjs.CustomRuntimeObject2D {
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
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDObjectObjects4= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDcareerObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDcareerObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDcareerObjects3= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDcareerObjects4= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDlockerObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDlockerObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDlockerObjects3= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDlockerObjects4= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDsettingsObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDsettingsObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDsettingsObjects3= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDsettingsObjects4= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDfightObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDfightObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDfightObjects3= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDfightObjects4= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects3= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects4= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDleaderboardObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDleaderboardObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDleaderboardObjects3= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDleaderboardObjects4= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDdiscordObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDdiscordObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDdiscordObjects3= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDdiscordObjects4= [];


gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595mainUi_9546mainUi_9546prototype_9546doStepPostEventsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDObjectObjects2});
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("tutorial").getChild("step").getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("vContainer"), gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects3);
{for(var i = 0, len = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects3[i].returnVariable(gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects3[i].getVariables().get("selectedMenu")).setString("locker");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("tutorial").getChild("step").getAsNumber() == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("vContainer"), gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects3);
{for(var i = 0, len = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects3[i].returnVariable(gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects3[i].getVariables().get("selectedMenu")).setString("settings");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("tutorial").getChild("step").getAsNumber() == 77);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("vContainer"), gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2);
{for(var i = 0, len = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDObjectObjects2[i].unlock2(gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595mainUi_9546mainUi_9546prototype_9546doStepPostEventsContext_9546GDObjectObjects2Objects, eventsFunctionContext);
}
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("tutorial").getChild("step").setNumber(0);
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("tutorial").getChild("state").setNumber(0);
}
{gdjs.evtTools.storage.writeStringInJSONFile("fighter", "profile", gdjs.evtTools.network.variableStructureToJSON(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile")));
}
{gdjs.evtTools.storage.writeStringInJSONFile("fighter", "settings", gdjs.evtTools.network.variableStructureToJSON(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings")));
}
{for(var i = 0, len = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2[i].returnVariable(gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2[i].getVariables().get("selectedMenu")).setString("career");
}
}
}

}


};gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("tutorial").getChild("state").getAsNumber() == 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("singlePlayer").getChild("difficulty").setNumber(0);
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("tutorial").getChild("step").setNumber(0);
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("tutorial").getChild("state").setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "singlePlayer", false);
}
}

}


};gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30304772);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("fighter", "profile"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30412028);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.asyncCallback30417508 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(eventsFunctionContext.getObjects("vContainer"), gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2);
{for(var i = 0, len = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2[i].returnVariable(gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2[i].getVariables().get("selectedMenu")).setString("fight");
}
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.idToCallbackMap.set(30417508, gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.asyncCallback30417508);
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.asyncCallback30417508(runtimeScene, eventsFunctionContext, asyncObjectsList)), 30417508, asyncObjectsList);
}
}

}


};gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("uniqueID").getAsString() == "0");
}
if (isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("uniqueID").setString("[" + gdjs.evtsExt__Choose__RandomString.func(runtimeScene, "1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m,Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M", eventsFunctionContext) + gdjs.evtsExt__Choose__RandomString.func(runtimeScene, "1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m,Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M", eventsFunctionContext) + gdjs.evtsExt__Choose__RandomString.func(runtimeScene, "1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m,Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M", eventsFunctionContext) + gdjs.evtsExt__Choose__RandomString.func(runtimeScene, "1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m,Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M", eventsFunctionContext) + gdjs.evtsExt__Choose__RandomString.func(runtimeScene, "1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m,Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M", eventsFunctionContext) + gdjs.evtsExt__Choose__RandomString.func(runtimeScene, "1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m,Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M", eventsFunctionContext) + "]");
}
{gdjs.evtTools.storage.writeStringInJSONFile("fighter", "profile", gdjs.evtTools.network.variableStructureToJSON(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile")));
}
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("fight"), gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDfightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDfightObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDfightObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDfightObjects1[k] = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDfightObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDfightObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select", false, eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("sound").getChild("menuSFX").getAsNumber(), gdjs.evtsExt__Choose__RandomNumber.func(runtimeScene, "1.75,2,1.5", eventsFunctionContext));
}

{ //Subevents
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.asyncCallback30416108 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(eventsFunctionContext.getObjects("vContainer"), gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2);
{for(var i = 0, len = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2[i].returnVariable(gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2[i].getVariables().get("selectedMenu")).setString("career");
}
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.idToCallbackMap.set(30416108, gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.asyncCallback30416108);
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.asyncCallback30416108(runtimeScene, eventsFunctionContext, asyncObjectsList)), 30416108, asyncObjectsList);
}
}

}


};gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("career"), gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDcareerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDcareerObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDcareerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDcareerObjects1[k] = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDcareerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDcareerObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select", false, eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("sound").getChild("menuSFX").getAsNumber(), gdjs.evtsExt__Choose__RandomNumber.func(runtimeScene, "1.75,2,1.5", eventsFunctionContext));
}

{ //Subevents
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.asyncCallback30419860 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(eventsFunctionContext.getObjects("vContainer"), gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2);
{for(var i = 0, len = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2[i].returnVariable(gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2[i].getVariables().get("selectedMenu")).setString("locker");
}
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.idToCallbackMap.set(30419860, gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.asyncCallback30419860);
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.asyncCallback30419860(runtimeScene, eventsFunctionContext, asyncObjectsList)), 30419860, asyncObjectsList);
}
}

}


};gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("locker"), gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDlockerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDlockerObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDlockerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDlockerObjects1[k] = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDlockerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDlockerObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select", false, eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("sound").getChild("menuSFX").getAsNumber(), gdjs.evtsExt__Choose__RandomNumber.func(runtimeScene, "1.75,2,1.5", eventsFunctionContext));
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("tutorial").getChild("state").setNumber(0);
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("tutorial").getChild("step").setNumber(0);
}

{ //Subevents
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("leaderboard"), gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDleaderboardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDleaderboardObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDleaderboardObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDleaderboardObjects1[k] = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDleaderboardObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDleaderboardObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "434962df-e4e8-494d-9c64-64c912595abf", false);
}
}

}


};gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.asyncCallback30422756 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(eventsFunctionContext.getObjects("vContainer"), gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2);
{for(var i = 0, len = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2[i].returnVariable(gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2[i].getVariables().get("selectedMenu")).setString("settings");
}
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.idToCallbackMap.set(30422756, gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.asyncCallback30422756);
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.asyncCallback30422756(runtimeScene, eventsFunctionContext, asyncObjectsList)), 30422756, asyncObjectsList);
}
}

}


};gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("settings"), gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDsettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDsettingsObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDsettingsObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDsettingsObjects1[k] = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDsettingsObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDsettingsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select", false, eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("sound").getChild("menuSFX").getAsNumber(), gdjs.evtsExt__Choose__RandomNumber.func(runtimeScene, "1.75,2,1.5", eventsFunctionContext));
}

{ //Subevents
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList7(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList9(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList10(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList12(runtimeScene, eventsFunctionContext);
}


{

gdjs.copyArray(eventsFunctionContext.getObjects("discord"), gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDdiscordObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDdiscordObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDdiscordObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDdiscordObjects1[k] = gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDdiscordObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDdiscordObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("achievements").getChild("joinDiscord").getChild("unlocked").setNumber(1);
}
{gdjs.evtTools.window.openURL("https://discord.gg/Nh5V5w6TB", runtimeScene);
}
}

}


};

gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDcareerObjectsList = [...runtimeScene.getObjects("career")];
var GDcareerObjects = Hashtable.newFrom({"career": thisGDcareerObjectsList});
var thisGDlockerObjectsList = [...runtimeScene.getObjects("locker")];
var GDlockerObjects = Hashtable.newFrom({"locker": thisGDlockerObjectsList});
var thisGDsettingsObjectsList = [...runtimeScene.getObjects("settings")];
var GDsettingsObjects = Hashtable.newFrom({"settings": thisGDsettingsObjectsList});
var thisGDfightObjectsList = [...runtimeScene.getObjects("fight")];
var GDfightObjects = Hashtable.newFrom({"fight": thisGDfightObjectsList});
var thisGDvContainerObjectsList = [...runtimeScene.getObjects("vContainer")];
var GDvContainerObjects = Hashtable.newFrom({"vContainer": thisGDvContainerObjectsList});
var thisGDleaderboardObjectsList = [...runtimeScene.getObjects("leaderboard")];
var GDleaderboardObjects = Hashtable.newFrom({"leaderboard": thisGDleaderboardObjectsList});
var thisGDdiscordObjectsList = [...runtimeScene.getObjects("discord")];
var GDdiscordObjects = Hashtable.newFrom({"discord": thisGDdiscordObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "career": GDcareerObjects
, "locker": GDlockerObjects
, "settings": GDsettingsObjects
, "fight": GDfightObjects
, "vContainer": GDvContainerObjects
, "leaderboard": GDleaderboardObjects
, "discord": GDdiscordObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "career": thisGDcareerObjectsList
, "locker": thisGDlockerObjectsList
, "settings": thisGDsettingsObjectsList
, "fight": thisGDfightObjectsList
, "vContainer": thisGDvContainerObjectsList
, "leaderboard": thisGDleaderboardObjectsList
, "discord": thisGDdiscordObjectsList
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

gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDcareerObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDcareerObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDcareerObjects3.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDcareerObjects4.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDlockerObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDlockerObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDlockerObjects3.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDlockerObjects4.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDsettingsObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDsettingsObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDsettingsObjects3.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDsettingsObjects4.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDfightObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDfightObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDfightObjects3.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDfightObjects4.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects3.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects4.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDleaderboardObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDleaderboardObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDleaderboardObjects3.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDleaderboardObjects4.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDdiscordObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDdiscordObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDdiscordObjects3.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDdiscordObjects4.length = 0;

gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.eventsList13(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDcareerObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDcareerObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDcareerObjects3.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDcareerObjects4.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDlockerObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDlockerObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDlockerObjects3.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDlockerObjects4.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDsettingsObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDsettingsObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDsettingsObjects3.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDsettingsObjects4.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDfightObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDfightObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDfightObjects3.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDfightObjects4.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects3.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDvContainerObjects4.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDleaderboardObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDleaderboardObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDleaderboardObjects3.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDleaderboardObjects4.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDdiscordObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDdiscordObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDdiscordObjects3.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPostEventsContext.GDdiscordObjects4.length = 0;


return;
}
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext = {};
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDcareerObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDcareerObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDlockerObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDlockerObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDsettingsObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDsettingsObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDfightObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDfightObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDvContainerObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDvContainerObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDleaderboardObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDleaderboardObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDdiscordObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDdiscordObjects2= [];


gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("vContainer"), gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDvContainerObjects1);
{eventsFunctionContext.returnValue = ((gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDvContainerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDvContainerObjects1[0].getVariables()).get("selectedMenu").getAsString();}
}

}


};

gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelection = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDcareerObjectsList = [...runtimeScene.getObjects("career")];
var GDcareerObjects = Hashtable.newFrom({"career": thisGDcareerObjectsList});
var thisGDlockerObjectsList = [...runtimeScene.getObjects("locker")];
var GDlockerObjects = Hashtable.newFrom({"locker": thisGDlockerObjectsList});
var thisGDsettingsObjectsList = [...runtimeScene.getObjects("settings")];
var GDsettingsObjects = Hashtable.newFrom({"settings": thisGDsettingsObjectsList});
var thisGDfightObjectsList = [...runtimeScene.getObjects("fight")];
var GDfightObjects = Hashtable.newFrom({"fight": thisGDfightObjectsList});
var thisGDvContainerObjectsList = [...runtimeScene.getObjects("vContainer")];
var GDvContainerObjects = Hashtable.newFrom({"vContainer": thisGDvContainerObjectsList});
var thisGDleaderboardObjectsList = [...runtimeScene.getObjects("leaderboard")];
var GDleaderboardObjects = Hashtable.newFrom({"leaderboard": thisGDleaderboardObjectsList});
var thisGDdiscordObjectsList = [...runtimeScene.getObjects("discord")];
var GDdiscordObjects = Hashtable.newFrom({"discord": thisGDdiscordObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "career": GDcareerObjects
, "locker": GDlockerObjects
, "settings": GDsettingsObjects
, "fight": GDfightObjects
, "vContainer": GDvContainerObjects
, "leaderboard": GDleaderboardObjects
, "discord": GDdiscordObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "career": thisGDcareerObjectsList
, "locker": thisGDlockerObjectsList
, "settings": thisGDsettingsObjectsList
, "fight": thisGDfightObjectsList
, "vContainer": thisGDvContainerObjectsList
, "leaderboard": thisGDleaderboardObjectsList
, "discord": thisGDdiscordObjectsList
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

gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDcareerObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDcareerObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDlockerObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDlockerObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDsettingsObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDsettingsObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDfightObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDfightObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDvContainerObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDvContainerObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDleaderboardObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDleaderboardObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDdiscordObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDdiscordObjects2.length = 0;

gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDcareerObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDcareerObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDlockerObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDlockerObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDsettingsObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDsettingsObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDfightObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDfightObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDvContainerObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDvContainerObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDleaderboardObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDleaderboardObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDdiscordObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.menuSelectionContext.GDdiscordObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context = {};
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDParameterObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDParameterObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDcareerObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDcareerObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDlockerObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDlockerObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDsettingsObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDsettingsObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDfightObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDfightObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDvContainerObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDvContainerObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDleaderboardObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDleaderboardObjects2= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDdiscordObjects1= [];
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDdiscordObjects2= [];


gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("achievements").getChild("completeTutorial").getChild("unlocked").setNumber(1);
}
}

}


};

gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2 = function(Parameter, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDcareerObjectsList = [...runtimeScene.getObjects("career")];
var GDcareerObjects = Hashtable.newFrom({"career": thisGDcareerObjectsList});
var thisGDlockerObjectsList = [...runtimeScene.getObjects("locker")];
var GDlockerObjects = Hashtable.newFrom({"locker": thisGDlockerObjectsList});
var thisGDsettingsObjectsList = [...runtimeScene.getObjects("settings")];
var GDsettingsObjects = Hashtable.newFrom({"settings": thisGDsettingsObjectsList});
var thisGDfightObjectsList = [...runtimeScene.getObjects("fight")];
var GDfightObjects = Hashtable.newFrom({"fight": thisGDfightObjectsList});
var thisGDvContainerObjectsList = [...runtimeScene.getObjects("vContainer")];
var GDvContainerObjects = Hashtable.newFrom({"vContainer": thisGDvContainerObjectsList});
var thisGDleaderboardObjectsList = [...runtimeScene.getObjects("leaderboard")];
var GDleaderboardObjects = Hashtable.newFrom({"leaderboard": thisGDleaderboardObjectsList});
var thisGDdiscordObjectsList = [...runtimeScene.getObjects("discord")];
var GDdiscordObjects = Hashtable.newFrom({"discord": thisGDdiscordObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "career": GDcareerObjects
, "locker": GDlockerObjects
, "settings": GDsettingsObjects
, "fight": GDfightObjects
, "vContainer": GDvContainerObjects
, "leaderboard": GDleaderboardObjects
, "discord": GDdiscordObjects
, "Parameter": Parameter
},
  _objectArraysMap: {
"Object": thisObjectList
, "career": thisGDcareerObjectsList
, "locker": thisGDlockerObjectsList
, "settings": thisGDsettingsObjectsList
, "fight": thisGDfightObjectsList
, "vContainer": thisGDvContainerObjectsList
, "leaderboard": thisGDleaderboardObjectsList
, "discord": thisGDdiscordObjectsList
, "Parameter": gdjs.objectsListsToArray(Parameter)
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

gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDParameterObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDParameterObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDcareerObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDcareerObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDlockerObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDlockerObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDsettingsObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDsettingsObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDfightObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDfightObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDvContainerObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDvContainerObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDleaderboardObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDleaderboardObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDdiscordObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDdiscordObjects2.length = 0;

gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDParameterObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDParameterObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDcareerObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDcareerObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDlockerObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDlockerObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDsettingsObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDsettingsObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDfightObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDfightObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDvContainerObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDvContainerObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDleaderboardObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDleaderboardObjects2.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDdiscordObjects1.length = 0;
gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.unlock2Context.GDdiscordObjects2.length = 0;


return;
}

gdjs.evtsExt__K_OP___mainUi.mainUi.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("K_OP_::mainUi", gdjs.evtsExt__K_OP___mainUi.mainUi);
