
if (typeof gdjs.evtsExt__MeshMaterial__AnisotropyBySlot !== "undefined") {
  gdjs.evtsExt__MeshMaterial__AnisotropyBySlot.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MeshMaterial__AnisotropyBySlot = {};
gdjs.evtsExt__MeshMaterial__AnisotropyBySlot.idToCallbackMap = new Map();
gdjs.evtsExt__MeshMaterial__AnisotropyBySlot.GDObjectObjects1= [];


gdjs.evtsExt__MeshMaterial__AnisotropyBySlot.userFunc0x2ba5860 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length > 0) {
    const slotNum = eventsFunctionContext.getArgument("Slot");
    let index = 0;
    objects[0].get3DRendererObject().traverse((node) => {
        if (index <= slotNum && node.isMesh && node.material.isMaterial) {
            if (node.material.hasOwnProperty('map') && node.material.map.hasOwnProperty('anisotropy')) {
                if (index === slotNum) {
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
                }
                index++;
            } else {
                console.warn('Anisotropy property does not exist for this material type: ' + node.material.type + ', object name: ' + objects[0].getName());
            }
        }
    });
}
};
gdjs.evtsExt__MeshMaterial__AnisotropyBySlot.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MeshMaterial__AnisotropyBySlot.GDObjectObjects1);

const objects = gdjs.evtsExt__MeshMaterial__AnisotropyBySlot.GDObjectObjects1;
gdjs.evtsExt__MeshMaterial__AnisotropyBySlot.userFunc0x2ba5860(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__MeshMaterial__AnisotropyBySlot.func = function(runtimeScene, Object, Anisotropy, Slot, parentEventsFunctionContext) {
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
if (argName === "Slot") return Slot;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MeshMaterial__AnisotropyBySlot.GDObjectObjects1.length = 0;

gdjs.evtsExt__MeshMaterial__AnisotropyBySlot.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MeshMaterial__AnisotropyBySlot.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__MeshMaterial__AnisotropyBySlot.registeredGdjsCallbacks = [];