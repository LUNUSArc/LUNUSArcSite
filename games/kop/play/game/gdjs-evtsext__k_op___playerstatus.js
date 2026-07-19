
gdjs.evtsExt__K_OP___playerStatus = gdjs.evtsExt__K_OP___playerStatus || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__K_OP___playerStatus.playerStatus = class playerStatus extends gdjs.CustomRuntimeObject2D {
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
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDplayerPortraitObjects1= [];
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDplayerPortraitObjects2= [];
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDplayerNameObjects1= [];
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDplayerNameObjects2= [];
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDstaminaObjects1= [];
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDstaminaObjects2= [];
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDhealthObjects1= [];
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDhealthObjects2= [];
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDNewTextObjects1= [];
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDNewTextObjects2= [];


gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30389924);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("playerName"), gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDplayerNameObjects1);
{for(var i = 0, len = gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDplayerNameObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDplayerNameObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("name").getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("stats").getChild("stamina").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("stamina"), gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDstaminaObjects1);
{for(var i = 0, len = gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDstaminaObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDstaminaObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth(430 * (eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("stats").getChild("stamina").getAsNumber() * 0.01));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("stats").getChild("stamina").getAsNumber() < 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("stamina"), gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDstaminaObjects1);
{for(var i = 0, len = gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDstaminaObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDstaminaObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("stats").getChild("health").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("health"), gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDhealthObjects1);
{for(var i = 0, len = gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDhealthObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDhealthObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth(430 * (eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("stats").getChild("health").getAsNumber() * 0.01));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("stats").getChild("health").getAsNumber() < 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("health"), gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDhealthObjects1);
{for(var i = 0, len = gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDhealthObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDhealthObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth(0);
}
}
}

}


};

gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDplayerPortraitObjectsList = [...runtimeScene.getObjects("playerPortrait")];
var GDplayerPortraitObjects = Hashtable.newFrom({"playerPortrait": thisGDplayerPortraitObjectsList});
var thisGDplayerNameObjectsList = [...runtimeScene.getObjects("playerName")];
var GDplayerNameObjects = Hashtable.newFrom({"playerName": thisGDplayerNameObjectsList});
var thisGDstaminaObjectsList = [...runtimeScene.getObjects("stamina")];
var GDstaminaObjects = Hashtable.newFrom({"stamina": thisGDstaminaObjectsList});
var thisGDhealthObjectsList = [...runtimeScene.getObjects("health")];
var GDhealthObjects = Hashtable.newFrom({"health": thisGDhealthObjectsList});
var thisGDNewTextObjectsList = [...runtimeScene.getObjects("NewText")];
var GDNewTextObjects = Hashtable.newFrom({"NewText": thisGDNewTextObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "playerPortrait": GDplayerPortraitObjects
, "playerName": GDplayerNameObjects
, "stamina": GDstaminaObjects
, "health": GDhealthObjects
, "NewText": GDNewTextObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "playerPortrait": thisGDplayerPortraitObjectsList
, "playerName": thisGDplayerNameObjectsList
, "stamina": thisGDstaminaObjectsList
, "health": thisGDhealthObjectsList
, "NewText": thisGDNewTextObjectsList
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

gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDplayerPortraitObjects1.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDplayerPortraitObjects2.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDplayerNameObjects1.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDplayerNameObjects2.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDstaminaObjects1.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDstaminaObjects2.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDhealthObjects1.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDhealthObjects2.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDNewTextObjects1.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDNewTextObjects2.length = 0;

gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDplayerPortraitObjects1.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDplayerPortraitObjects2.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDplayerNameObjects1.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDplayerNameObjects2.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDstaminaObjects1.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDstaminaObjects2.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDhealthObjects1.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDhealthObjects2.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDNewTextObjects1.length = 0;
gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPostEventsContext.GDNewTextObjects2.length = 0;


return;
}

gdjs.evtsExt__K_OP___playerStatus.playerStatus.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("K_OP_::playerStatus", gdjs.evtsExt__K_OP___playerStatus.playerStatus);
