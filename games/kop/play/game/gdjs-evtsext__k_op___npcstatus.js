
gdjs.evtsExt__K_OP___NPCStatus = gdjs.evtsExt__K_OP___NPCStatus || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus = class NPCStatus extends gdjs.CustomRuntimeObject2D {
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
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDhealthObjects1= [];
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDhealthObjects2= [];
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDplayerNameObjects1= [];
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDplayerNameObjects2= [];


gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild("stats").getChild("health").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("health"), gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDhealthObjects1);
{for(var i = 0, len = gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDhealthObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDhealthObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth(235 * (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild("stats").getChild("health").getAsNumber() / gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDhealthObjects1[i].getVariables().get("maxHealth").getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild("stats").getChild("health").getAsNumber() < 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("health"), gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDhealthObjects1);
{for(var i = 0, len = gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDhealthObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDhealthObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth(0);
}
}
}

}


};

gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDhealthObjectsList = [...runtimeScene.getObjects("health")];
var GDhealthObjects = Hashtable.newFrom({"health": thisGDhealthObjectsList});
var thisGDplayerNameObjectsList = [...runtimeScene.getObjects("playerName")];
var GDplayerNameObjects = Hashtable.newFrom({"playerName": thisGDplayerNameObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "health": GDhealthObjects
, "playerName": GDplayerNameObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "health": thisGDhealthObjectsList
, "playerName": thisGDplayerNameObjectsList
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

gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDhealthObjects1.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDhealthObjects2.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDplayerNameObjects1.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDplayerNameObjects2.length = 0;

gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDhealthObjects1.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDhealthObjects2.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDplayerNameObjects1.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPostEventsContext.GDplayerNameObjects2.length = 0;


return;
}
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext = {};
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDhealthObjects1= [];
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDhealthObjects2= [];
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDplayerNameObjects1= [];
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDplayerNameObjects2= [];


gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("health"), gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDhealthObjects1);
{for(var i = 0, len = gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDhealthObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDhealthObjects1[i].returnVariable(gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDhealthObjects1[i].getVariables().get("maxHealth")).setNumber(eventsFunctionContext.getArgument("maxHealthWillBe"));
}
}
}

}


};

gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealth = function(maxHealthWillBe, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDhealthObjectsList = [...runtimeScene.getObjects("health")];
var GDhealthObjects = Hashtable.newFrom({"health": thisGDhealthObjectsList});
var thisGDplayerNameObjectsList = [...runtimeScene.getObjects("playerName")];
var GDplayerNameObjects = Hashtable.newFrom({"playerName": thisGDplayerNameObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "health": GDhealthObjects
, "playerName": GDplayerNameObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "health": thisGDhealthObjectsList
, "playerName": thisGDplayerNameObjectsList
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
if (argName === "maxHealthWillBe") return maxHealthWillBe;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDhealthObjects1.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDhealthObjects2.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDplayerNameObjects1.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDplayerNameObjects2.length = 0;

gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDhealthObjects1.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDhealthObjects2.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDplayerNameObjects1.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setMaxHealthContext.GDplayerNameObjects2.length = 0;


return;
}
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext = {};
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDhealthObjects1= [];
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDhealthObjects2= [];
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDplayerNameObjects1= [];
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDplayerNameObjects2= [];


gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("playerName"), gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDplayerNameObjects1);
{for(var i = 0, len = gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDplayerNameObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDplayerNameObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getArgument("theNameIs"));
}
}
}

}


};

gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheName = function(theNameIs, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDhealthObjectsList = [...runtimeScene.getObjects("health")];
var GDhealthObjects = Hashtable.newFrom({"health": thisGDhealthObjectsList});
var thisGDplayerNameObjectsList = [...runtimeScene.getObjects("playerName")];
var GDplayerNameObjects = Hashtable.newFrom({"playerName": thisGDplayerNameObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "health": GDhealthObjects
, "playerName": GDplayerNameObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "health": thisGDhealthObjectsList
, "playerName": thisGDplayerNameObjectsList
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
if (argName === "theNameIs") return theNameIs;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDhealthObjects1.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDhealthObjects2.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDplayerNameObjects1.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDplayerNameObjects2.length = 0;

gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDhealthObjects1.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDhealthObjects2.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDplayerNameObjects1.length = 0;
gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.setTheNameContext.GDplayerNameObjects2.length = 0;


return;
}

gdjs.evtsExt__K_OP___NPCStatus.NPCStatus.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("K_OP_::NPCStatus", gdjs.evtsExt__K_OP___NPCStatus.NPCStatus);
