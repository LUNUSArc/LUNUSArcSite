
if (typeof gdjs.evtsExt__K_OP___comunications !== "undefined") {
  gdjs.evtsExt__K_OP___comunications.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__K_OP___comunications = {};
gdjs.evtsExt__K_OP___comunications.idToCallbackMap = new Map();


gdjs.evtsExt__K_OP___comunications.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30217476);
}
if (isConditionTrue_0) {
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2));
}
}

}


};gdjs.evtsExt__K_OP___comunications.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30219540);
}
if (isConditionTrue_0) {
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0));
}
}

}


};gdjs.evtsExt__K_OP___comunications.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30214548);
}
if (isConditionTrue_0) {
{gdjs.multiplayerVariablesManager.disableVariableSynchronization(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3));
}
{gdjs.multiplayerVariablesManager.disableVariableSynchronization(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1));
}
{gdjs.multiplayerVariablesManager.disableVariableSynchronization(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4));
}
{gdjs.multiplayerVariablesManager.disableVariableSynchronization(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isCurrentPlayerHost();
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getChild("stats").getChild("health").setNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("stats").getChild("health").getAsNumber());
}

{ //Subevents
gdjs.evtsExt__K_OP___comunications.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isCurrentPlayerHost());
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild("stats").getChild("health").setNumber(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("stats").getChild("health").getAsNumber());
}

{ //Subevents
gdjs.evtsExt__K_OP___comunications.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__K_OP___comunications.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__K_OP___comunications.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__K_OP___comunications.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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


gdjs.evtsExt__K_OP___comunications.eventsList3(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__K_OP___comunications.registeredGdjsCallbacks = [];