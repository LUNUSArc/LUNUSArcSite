
if (typeof gdjs.evtsExt__MeshMaterial__ColorBySlot !== "undefined") {
  gdjs.evtsExt__MeshMaterial__ColorBySlot.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MeshMaterial__ColorBySlot = {};
gdjs.evtsExt__MeshMaterial__ColorBySlot.idToCallbackMap = new Map();
gdjs.evtsExt__MeshMaterial__ColorBySlot.GDObjectObjects1= [];


gdjs.evtsExt__MeshMaterial__ColorBySlot.userFunc0x2aaa400 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length > 0) {
    const rgbcolor = gdjs.rgbOrHexToRGBColor(eventsFunctionContext.getArgument("Color"))
    const hexColor = "0x" + gdjs.rgbToHex(rgbcolor[0], rgbcolor[1], rgbcolor[2]);
    const slotNum = eventsFunctionContext.getArgument("Slot");
    let index = 0;
    objects[0].get3DRendererObject().traverse((node) => {
        if (index <= slotNum && node.isMesh && node.material.isMaterial) {
            if (node.material.hasOwnProperty('color')) {
                if (index === slotNum) {
                    node.material.color.setHex(hexColor);
                }
                index++;
            } else {
                console.warn('Color property does not exist for this material type: ' + node.material.type + ', object name: ' + objects[0].getName());
            }
        }
    });
}
};
gdjs.evtsExt__MeshMaterial__ColorBySlot.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MeshMaterial__ColorBySlot.GDObjectObjects1);

const objects = gdjs.evtsExt__MeshMaterial__ColorBySlot.GDObjectObjects1;
gdjs.evtsExt__MeshMaterial__ColorBySlot.userFunc0x2aaa400(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__MeshMaterial__ColorBySlot.func = function(runtimeScene, Object, Color, Slot, parentEventsFunctionContext) {
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
if (argName === "Color") return Color;
if (argName === "Slot") return Slot;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MeshMaterial__ColorBySlot.GDObjectObjects1.length = 0;

gdjs.evtsExt__MeshMaterial__ColorBySlot.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MeshMaterial__ColorBySlot.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__MeshMaterial__ColorBySlot.registeredGdjsCallbacks = [];