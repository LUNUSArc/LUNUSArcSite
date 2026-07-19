
gdjs.evtsExt__K_OP___awardDisplay = gdjs.evtsExt__K_OP___awardDisplay || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay = class awardDisplay extends gdjs.CustomRuntimeObject2D {
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
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDlockerObjects1= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDlockerObjects2= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDvContainerObjects1= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDvContainerObjects2= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDbackObjects1= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDbackObjects2= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDportraitObjects1= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDportraitObjects2= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDbackwallObjects1= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDbackwallObjects2= [];


gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("back"), gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDbackObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDbackObjects1[k] = gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDbackObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDbackObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDObjectObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDObjectObjects1[i].setZOrder(1000);
}
}
}

}


};

gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDlockerObjectsList = [...runtimeScene.getObjects("locker")];
var GDlockerObjects = Hashtable.newFrom({"locker": thisGDlockerObjectsList});
var thisGDvContainerObjectsList = [...runtimeScene.getObjects("vContainer")];
var GDvContainerObjects = Hashtable.newFrom({"vContainer": thisGDvContainerObjectsList});
var thisGDbackObjectsList = [...runtimeScene.getObjects("back")];
var GDbackObjects = Hashtable.newFrom({"back": thisGDbackObjectsList});
var thisGDportraitObjectsList = [...runtimeScene.getObjects("portrait")];
var GDportraitObjects = Hashtable.newFrom({"portrait": thisGDportraitObjectsList});
var thisGDbackwallObjectsList = [...runtimeScene.getObjects("backwall")];
var GDbackwallObjects = Hashtable.newFrom({"backwall": thisGDbackwallObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "locker": GDlockerObjects
, "vContainer": GDvContainerObjects
, "back": GDbackObjects
, "portrait": GDportraitObjects
, "backwall": GDbackwallObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "locker": thisGDlockerObjectsList
, "vContainer": thisGDvContainerObjectsList
, "back": thisGDbackObjectsList
, "portrait": thisGDportraitObjectsList
, "backwall": thisGDbackwallObjectsList
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

gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDlockerObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDlockerObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDvContainerObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDvContainerObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDbackObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDbackObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDportraitObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDportraitObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDbackwallObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDbackwallObjects2.length = 0;

gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDlockerObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDlockerObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDvContainerObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDvContainerObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDbackObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDbackObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDportraitObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDportraitObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDbackwallObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPostEventsContext.GDbackwallObjects2.length = 0;


return;
}
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext = {};
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDObjectObjects3= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDlockerObjects1= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDlockerObjects2= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDlockerObjects3= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDvContainerObjects1= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDvContainerObjects2= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDvContainerObjects3= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDbackObjects1= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDbackObjects2= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDbackObjects3= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDportraitObjects1= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDportraitObjects2= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDportraitObjects3= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDbackwallObjects1= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDbackwallObjects2= [];
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDbackwallObjects3= [];


gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.asyncCallback30534828 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "awardsound", false, eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("sound").getChild("menuSFX").getAsNumber(), 1);
}
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.idToCallbackMap.set(30534828, gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.asyncCallback30534828);
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.01), (runtimeScene) => (gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.asyncCallback30534828(runtimeScene, eventsFunctionContext, asyncObjectsList)), 30534828, asyncObjectsList);
}
}

}


};gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.writeStringInJSONFile("fighter", "profile", gdjs.evtTools.network.variableStructureToJSON(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile")));
}
{gdjs.evtTools.storage.writeStringInJSONFile("fighter", "settings", gdjs.evtTools.network.variableStructureToJSON(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings")));
}
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("portrait"), gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDportraitObjects1);
{for(var i = 0, len = gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDportraitObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDportraitObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName(eventsFunctionContext.getArgument("awardName"));
}
}
{for(var i = 0, len = gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDportraitObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDportraitObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Opacity")).setOpacity(255);
}
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("achievements").getChild(eventsFunctionContext.getArgument("awardName")).getChild("awarded").setNumber(1);
}

{ //Subevents
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAward = function(awardName, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDlockerObjectsList = [...runtimeScene.getObjects("locker")];
var GDlockerObjects = Hashtable.newFrom({"locker": thisGDlockerObjectsList});
var thisGDvContainerObjectsList = [...runtimeScene.getObjects("vContainer")];
var GDvContainerObjects = Hashtable.newFrom({"vContainer": thisGDvContainerObjectsList});
var thisGDbackObjectsList = [...runtimeScene.getObjects("back")];
var GDbackObjects = Hashtable.newFrom({"back": thisGDbackObjectsList});
var thisGDportraitObjectsList = [...runtimeScene.getObjects("portrait")];
var GDportraitObjects = Hashtable.newFrom({"portrait": thisGDportraitObjectsList});
var thisGDbackwallObjectsList = [...runtimeScene.getObjects("backwall")];
var GDbackwallObjects = Hashtable.newFrom({"backwall": thisGDbackwallObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "locker": GDlockerObjects
, "vContainer": GDvContainerObjects
, "back": GDbackObjects
, "portrait": GDportraitObjects
, "backwall": GDbackwallObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "locker": thisGDlockerObjectsList
, "vContainer": thisGDvContainerObjectsList
, "back": thisGDbackObjectsList
, "portrait": thisGDportraitObjectsList
, "backwall": thisGDbackwallObjectsList
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
if (argName === "awardName") return awardName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDlockerObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDlockerObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDlockerObjects3.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDvContainerObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDvContainerObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDvContainerObjects3.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDbackObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDbackObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDbackObjects3.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDportraitObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDportraitObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDportraitObjects3.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDbackwallObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDbackwallObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDbackwallObjects3.length = 0;

gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDlockerObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDlockerObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDlockerObjects3.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDvContainerObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDvContainerObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDvContainerObjects3.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDbackObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDbackObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDbackObjects3.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDportraitObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDportraitObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDportraitObjects3.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDbackwallObjects1.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDbackwallObjects2.length = 0;
gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.activateAwardContext.GDbackwallObjects3.length = 0;


return;
}

gdjs.evtsExt__K_OP___awardDisplay.awardDisplay.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("K_OP_::awardDisplay", gdjs.evtsExt__K_OP___awardDisplay.awardDisplay);
