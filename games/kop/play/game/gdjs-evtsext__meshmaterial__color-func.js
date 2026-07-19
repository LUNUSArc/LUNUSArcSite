
if (typeof gdjs.evtsExt__MeshMaterial__Color !== "undefined") {
  gdjs.evtsExt__MeshMaterial__Color.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MeshMaterial__Color = {};
gdjs.evtsExt__MeshMaterial__Color.idToCallbackMap = new Map();
gdjs.evtsExt__MeshMaterial__Color.GDObjectObjects1= [];


gdjs.evtsExt__MeshMaterial__Color.userFunc0x2a65800 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length > 0) {
    const rgbcolor = gdjs.rgbOrHexToRGBColor(eventsFunctionContext.getArgument("Color"));
    const hexColor = "0x" + gdjs.rgbToHex(rgbcolor[0], rgbcolor[1], rgbcolor[2]);
    objects[0].get3DRendererObject().traverse((node) => {
        if (node.isMesh && node.material.isMaterial) {
            if (node.material.hasOwnProperty('color')) {
                node.material.color.setHex(hexColor);
            } else {
                console.warn('Color property does not exist for this material type: ' + node.material.type + ', object name: ' + objects[0].getName());
            }
        }
    });
}
};
gdjs.evtsExt__MeshMaterial__Color.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MeshMaterial__Color.GDObjectObjects1);

const objects = gdjs.evtsExt__MeshMaterial__Color.GDObjectObjects1;
gdjs.evtsExt__MeshMaterial__Color.userFunc0x2a65800(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__MeshMaterial__Color.func = function(runtimeScene, Object, Color, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MeshMaterial__Color.GDObjectObjects1.length = 0;

gdjs.evtsExt__MeshMaterial__Color.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MeshMaterial__Color.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__MeshMaterial__Color.registeredGdjsCallbacks = [];