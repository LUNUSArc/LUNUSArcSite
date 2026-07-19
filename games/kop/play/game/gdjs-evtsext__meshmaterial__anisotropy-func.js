
if (typeof gdjs.evtsExt__MeshMaterial__Anisotropy !== "undefined") {
  gdjs.evtsExt__MeshMaterial__Anisotropy.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MeshMaterial__Anisotropy = {};
gdjs.evtsExt__MeshMaterial__Anisotropy.idToCallbackMap = new Map();
gdjs.evtsExt__MeshMaterial__Anisotropy.GDObjectObjects1= [];


gdjs.evtsExt__MeshMaterial__Anisotropy.userFunc0x2bbe168 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length > 0) {
    objects[0].get3DRendererObject().traverse((node) => {
        if (node.isMesh && node.material.isMaterial) {
            if (node.material.hasOwnProperty('map') && node.material.map.hasOwnProperty('anisotropy')) {
                switch (eventsFunctionContext.getArgument("Anisotropy")) {
                    case '1':
                        node.material.map.anisotropy = 1
                        break;
                    case '2':
                        node.material.map.anisotropy = 2
                        break;
                    case '4':
                        node.material.map.anisotropy = 4
                        break;
                    case '8':
                        node.material.map.anisotropy = 8
                        break;
                    case '16':
                        node.material.map.anisotropy = 16
                        break;
                    default:
                        node.material.map.anisotropy = 1
                }
            } else {
                console.warn('Anisotropy property does not exist for this material type: ' + node.material.type + ', object name: ' + objects[0].getName());
            }
        }
    });
}
};
gdjs.evtsExt__MeshMaterial__Anisotropy.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MeshMaterial__Anisotropy.GDObjectObjects1);

const objects = gdjs.evtsExt__MeshMaterial__Anisotropy.GDObjectObjects1;
gdjs.evtsExt__MeshMaterial__Anisotropy.userFunc0x2bbe168(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__MeshMaterial__Anisotropy.func = function(runtimeScene, Object, Anisotropy, parentEventsFunctionContext) {
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
if (argName === "Anisotropy") return Anisotropy;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MeshMaterial__Anisotropy.GDObjectObjects1.length = 0;

gdjs.evtsExt__MeshMaterial__Anisotropy.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MeshMaterial__Anisotropy.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__MeshMaterial__Anisotropy.registeredGdjsCallbacks = [];