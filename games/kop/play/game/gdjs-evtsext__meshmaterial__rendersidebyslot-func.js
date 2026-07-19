
if (typeof gdjs.evtsExt__MeshMaterial__RenderSideBySlot !== "undefined") {
  gdjs.evtsExt__MeshMaterial__RenderSideBySlot.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MeshMaterial__RenderSideBySlot = {};
gdjs.evtsExt__MeshMaterial__RenderSideBySlot.idToCallbackMap = new Map();
gdjs.evtsExt__MeshMaterial__RenderSideBySlot.GDObjectObjects1= [];


gdjs.evtsExt__MeshMaterial__RenderSideBySlot.userFunc0x2bc7498 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length > 0) {
    const slotNum = eventsFunctionContext.getArgument("Slot");
    let index = 0;
    objects[0].get3DRendererObject().traverse((node) => {
        if (index <= slotNum && node.isMesh && node.material.isMaterial) {
            if (index === slotNum) {
                switch (eventsFunctionContext.getArgument("Side")) {
                    case 'Front side':
                        node.material.side = THREE.FrontSide;
                        break;
                    case 'Back side':
                        node.material.side = THREE.BackSide;
                        break;
                    case 'Double side':
                        node.material.side = THREE.DoubleSide;
                        break;
                    default:
                        node.material.side = THREE.DoubleSide;
                }
            }
            index++;
        }
    });
}
};
gdjs.evtsExt__MeshMaterial__RenderSideBySlot.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MeshMaterial__RenderSideBySlot.GDObjectObjects1);

const objects = gdjs.evtsExt__MeshMaterial__RenderSideBySlot.GDObjectObjects1;
gdjs.evtsExt__MeshMaterial__RenderSideBySlot.userFunc0x2bc7498(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__MeshMaterial__RenderSideBySlot.func = function(runtimeScene, Object, Side, Slot, parentEventsFunctionContext) {
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
if (argName === "Side") return Side;
if (argName === "Slot") return Slot;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MeshMaterial__RenderSideBySlot.GDObjectObjects1.length = 0;

gdjs.evtsExt__MeshMaterial__RenderSideBySlot.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MeshMaterial__RenderSideBySlot.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__MeshMaterial__RenderSideBySlot.registeredGdjsCallbacks = [];