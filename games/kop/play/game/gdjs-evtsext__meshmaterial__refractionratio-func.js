
if (typeof gdjs.evtsExt__MeshMaterial__RefractionRatio !== "undefined") {
  gdjs.evtsExt__MeshMaterial__RefractionRatio.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MeshMaterial__RefractionRatio = {};
gdjs.evtsExt__MeshMaterial__RefractionRatio.idToCallbackMap = new Map();
gdjs.evtsExt__MeshMaterial__RefractionRatio.GDObjectObjects1= [];


gdjs.evtsExt__MeshMaterial__RefractionRatio.userFunc0x2b5a248 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length > 0) {
    objects[0].get3DRendererObject().traverse((node) => {
        if (node.isMesh && node.material.isMaterial) {
            if (node.material.hasOwnProperty('refractionRatio')) {
                node.material.refractionRatio = eventsFunctionContext.getArgument("RefractionRatio");
            } else {
                console.warn('Refraction ratio property does not exist for this material type: ' + node.material.type + ', object name: ' + objects[0].getName());
            }
        }
    });
}
};
gdjs.evtsExt__MeshMaterial__RefractionRatio.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MeshMaterial__RefractionRatio.GDObjectObjects1);

const objects = gdjs.evtsExt__MeshMaterial__RefractionRatio.GDObjectObjects1;
gdjs.evtsExt__MeshMaterial__RefractionRatio.userFunc0x2b5a248(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__MeshMaterial__RefractionRatio.func = function(runtimeScene, Object, RefractionRatio, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MeshMaterial"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MeshMaterial"),
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
if (argName === "RefractionRatio") return RefractionRatio;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MeshMaterial__RefractionRatio.GDObjectObjects1.length = 0;

gdjs.evtsExt__MeshMaterial__RefractionRatio.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MeshMaterial__RefractionRatio.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__MeshMaterial__RefractionRatio.registeredGdjsCallbacks = [];