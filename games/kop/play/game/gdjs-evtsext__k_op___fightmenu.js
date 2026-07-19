
gdjs.evtsExt__K_OP___fightMenu = gdjs.evtsExt__K_OP___fightMenu || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__K_OP___fightMenu.fightMenu = class fightMenu extends gdjs.CustomRuntimeObject2D {
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
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDfightObjects1= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDfightObjects2= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDfightObjects3= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDvContainerObjects1= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDvContainerObjects2= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDvContainerObjects3= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects1= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects2= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects3= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDautoMatchObjects1= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDautoMatchObjects2= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDautoMatchObjects3= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDgoToObjects1= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDgoToObjects2= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDgoToObjects3= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDjoinObjects1= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDjoinObjects2= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDjoinObjects3= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDIDTextObjects1= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDIDTextObjects2= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDIDTextObjects3= [];


gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.asyncCallback30447484 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.idToCallbackMap.set(30447484, gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.asyncCallback30447484);
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.asyncCallback30447484(runtimeScene, eventsFunctionContext, asyncObjectsList)), 30447484, asyncObjectsList);
}
}

}


};gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(asyncObjectsList.getObjects("back"), gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects2);

{for(var i = 0, len = gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects2.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects2[i].returnVariable(gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects2[i].getVariables().get("activated")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.asyncCallback30454804 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);

{ //Subevents
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.idToCallbackMap.set(30454804, gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.asyncCallback30454804);
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects1) asyncObjectsList.addObject("back", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.asyncCallback30454804(runtimeScene, eventsFunctionContext, asyncObjectsList)), 30454804, asyncObjectsList);
}
}

}


};gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30441972);
}
if (isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("state").getChild("networking").getChild("targetID").setString("0");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("state").getChild("networking").getChild("privateHost").setNumber(0);
}
{gdjs.adMob.setupBanner("ca-app-pub-7873959130285802/7923272991", "", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.adMob.isBannerLoaded();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30444492);
}
}
if (isConditionTrue_0) {
{gdjs.adMob.showBanner();
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.multiplayerVariablesManager.disableVariableSynchronization(runtimeScene, eventsFunctionContext.globalVariablesForExtension.getFromIndex(0));
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("goTo"), gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDgoToObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDgoToObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDgoToObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDgoToObjects1[k] = gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDgoToObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDgoToObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select", false, eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("sound").getChild("menuSFX").getAsNumber(), gdjs.evtsExt__Choose__RandomNumber.func(runtimeScene, "1.75,2,1.5", eventsFunctionContext));
}

{ //Subevents
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbiesWindowOpen(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isCurrentPlayerHost();
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("IDText"), gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDIDTextObjects1);
{for(var i = 0, len = gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDIDTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDIDTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(gdjs.multiplayer.getLobbyID());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustStarted();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "multiplayer", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbiesWindowOpen(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30451644);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("fight"), gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDfightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDfightObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDfightObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDfightObjects1[k] = gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDfightObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDfightObjects1.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("back"), gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects1[k] = gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "select", false, eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("sound").getChild("menuSFX").getAsNumber(), gdjs.evtsExt__Choose__RandomNumber.func(runtimeScene, "1.75,2,1.5", eventsFunctionContext));
}

{ //Subevents
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDfightObjectsList = [...runtimeScene.getObjects("fight")];
var GDfightObjects = Hashtable.newFrom({"fight": thisGDfightObjectsList});
var thisGDvContainerObjectsList = [...runtimeScene.getObjects("vContainer")];
var GDvContainerObjects = Hashtable.newFrom({"vContainer": thisGDvContainerObjectsList});
var thisGDbackObjectsList = [...runtimeScene.getObjects("back")];
var GDbackObjects = Hashtable.newFrom({"back": thisGDbackObjectsList});
var thisGDautoMatchObjectsList = [...runtimeScene.getObjects("autoMatch")];
var GDautoMatchObjects = Hashtable.newFrom({"autoMatch": thisGDautoMatchObjectsList});
var thisGDgoToObjectsList = [...runtimeScene.getObjects("goTo")];
var GDgoToObjects = Hashtable.newFrom({"goTo": thisGDgoToObjectsList});
var thisGDjoinObjectsList = [...runtimeScene.getObjects("join")];
var GDjoinObjects = Hashtable.newFrom({"join": thisGDjoinObjectsList});
var thisGDIDTextObjectsList = [...runtimeScene.getObjects("IDText")];
var GDIDTextObjects = Hashtable.newFrom({"IDText": thisGDIDTextObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "fight": GDfightObjects
, "vContainer": GDvContainerObjects
, "back": GDbackObjects
, "autoMatch": GDautoMatchObjects
, "goTo": GDgoToObjects
, "join": GDjoinObjects
, "IDText": GDIDTextObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "fight": thisGDfightObjectsList
, "vContainer": thisGDvContainerObjectsList
, "back": thisGDbackObjectsList
, "autoMatch": thisGDautoMatchObjectsList
, "goTo": thisGDgoToObjectsList
, "join": thisGDjoinObjectsList
, "IDText": thisGDIDTextObjectsList
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

gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDfightObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDfightObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDfightObjects3.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDvContainerObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDvContainerObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDvContainerObjects3.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects3.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDautoMatchObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDautoMatchObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDautoMatchObjects3.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDgoToObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDgoToObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDgoToObjects3.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDjoinObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDjoinObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDjoinObjects3.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDIDTextObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDIDTextObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDIDTextObjects3.length = 0;

gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDfightObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDfightObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDfightObjects3.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDvContainerObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDvContainerObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDvContainerObjects3.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDbackObjects3.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDautoMatchObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDautoMatchObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDautoMatchObjects3.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDgoToObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDgoToObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDgoToObjects3.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDjoinObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDjoinObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDjoinObjects3.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDIDTextObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDIDTextObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPostEventsContext.GDIDTextObjects3.length = 0;


return;
}
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext = {};
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDfightObjects1= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDfightObjects2= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDvContainerObjects1= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDvContainerObjects2= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDbackObjects1= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDbackObjects2= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDautoMatchObjects1= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDautoMatchObjects2= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDgoToObjects1= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDgoToObjects2= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDjoinObjects1= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDjoinObjects2= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDIDTextObjects1= [];
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDIDTextObjects2= [];


gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("back"), gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDbackObjects1);
{eventsFunctionContext.returnValue = ((gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDbackObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDbackObjects1[0].getVariables()).get("activated").getAsNumber();}
}

}


};

gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.close = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDfightObjectsList = [...runtimeScene.getObjects("fight")];
var GDfightObjects = Hashtable.newFrom({"fight": thisGDfightObjectsList});
var thisGDvContainerObjectsList = [...runtimeScene.getObjects("vContainer")];
var GDvContainerObjects = Hashtable.newFrom({"vContainer": thisGDvContainerObjectsList});
var thisGDbackObjectsList = [...runtimeScene.getObjects("back")];
var GDbackObjects = Hashtable.newFrom({"back": thisGDbackObjectsList});
var thisGDautoMatchObjectsList = [...runtimeScene.getObjects("autoMatch")];
var GDautoMatchObjects = Hashtable.newFrom({"autoMatch": thisGDautoMatchObjectsList});
var thisGDgoToObjectsList = [...runtimeScene.getObjects("goTo")];
var GDgoToObjects = Hashtable.newFrom({"goTo": thisGDgoToObjectsList});
var thisGDjoinObjectsList = [...runtimeScene.getObjects("join")];
var GDjoinObjects = Hashtable.newFrom({"join": thisGDjoinObjectsList});
var thisGDIDTextObjectsList = [...runtimeScene.getObjects("IDText")];
var GDIDTextObjects = Hashtable.newFrom({"IDText": thisGDIDTextObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "fight": GDfightObjects
, "vContainer": GDvContainerObjects
, "back": GDbackObjects
, "autoMatch": GDautoMatchObjects
, "goTo": GDgoToObjects
, "join": GDjoinObjects
, "IDText": GDIDTextObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "fight": thisGDfightObjectsList
, "vContainer": thisGDvContainerObjectsList
, "back": thisGDbackObjectsList
, "autoMatch": thisGDautoMatchObjectsList
, "goTo": thisGDgoToObjectsList
, "join": thisGDjoinObjectsList
, "IDText": thisGDIDTextObjectsList
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

gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDfightObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDfightObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDvContainerObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDvContainerObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDbackObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDbackObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDautoMatchObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDautoMatchObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDgoToObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDgoToObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDjoinObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDjoinObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDIDTextObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDIDTextObjects2.length = 0;

gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDfightObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDfightObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDvContainerObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDvContainerObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDbackObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDbackObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDautoMatchObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDautoMatchObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDgoToObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDgoToObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDjoinObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDjoinObjects2.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDIDTextObjects1.length = 0;
gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.closeContext.GDIDTextObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__K_OP___fightMenu.fightMenu.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("K_OP_::fightMenu", gdjs.evtsExt__K_OP___fightMenu.fightMenu);
