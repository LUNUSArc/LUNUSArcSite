
if (typeof gdjs.evtsExt__K_OP___onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__K_OP___onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__K_OP___onFirstSceneLoaded = {};
gdjs.evtsExt__K_OP___onFirstSceneLoaded.idToCallbackMap = new Map();


gdjs.evtsExt__K_OP___onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getAsString(), eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings"));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).setString("0");
}
}

}


};gdjs.evtsExt__K_OP___onFirstSceneLoaded.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getAsString(), eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile"));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).setString("0");
}
}

}


};gdjs.evtsExt__K_OP___onFirstSceneLoaded.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("fighter", "settings");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("fighter", "settings", runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4));
}

{ //Subevents
gdjs.evtsExt__K_OP___onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("fighter", "profile");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("fighter", "profile", runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4));
}

{ //Subevents
gdjs.evtsExt__K_OP___onFirstSceneLoaded.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__K_OP___onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__K_OP___onFirstSceneLoaded.eventsList2(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__K_OP___onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__K_OP___onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__K_OP___onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__K_OP___onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__K_OP___onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
