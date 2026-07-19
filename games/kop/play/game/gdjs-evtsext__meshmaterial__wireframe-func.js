
if (typeof gdjs.evtsExt__MeshMaterial__Wireframe !== "undefined") {
  gdjs.evtsExt__MeshMaterial__Wireframe.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MeshMaterial__Wireframe = {};
gdjs.evtsExt__MeshMaterial__Wireframe.idToCallbackMap = new Map();
gdjs.evtsExt__MeshMaterial__Wireframe.GDObjectObjects1= [];


gdjs.evtsExt__MeshMaterial__Wireframe.userFunc0x2b22240 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length > 0) {
    objects[0].get3DRendererObject().traverse((node) => {
        if (node.isMesh && node.material.isMaterial) {
            if (node.material.hasOwnProperty('wireframe')) {
                node.material.wireframe = eventsFunctionContext.getArgument("Wireframe");
                node.material.wireframeLinecap = eventsFunctionContext.getArgument("WireframeLinecap");
                node.material.wireframeLinejoin = eventsFunctionContext.getArgument("WireframeLinejoin");
                node.material.wireframeLinewidth = eventsFunctionContext.getArgument("WireframeLinewidth");
            } else {
                console.warn('Wireframe property does not exist for this material type: ' + node.material.type + ', object name: ' + objects[0].getName());
            }
        }
    });
}
};
gdjs.evtsExt__MeshMaterial__Wireframe.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MeshMaterial__Wireframe.GDObjectObjects1);

const objects = gdjs.evtsExt__MeshMaterial__Wireframe.GDObjectObjects1;
gdjs.evtsExt__MeshMaterial__Wireframe.userFunc0x2b22240(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__MeshMaterial__Wireframe.func = function(runtimeScene, Object, Wireframe, WireframeLinecap, WireframeLinejoin, WireframeLinewidth, parentEventsFunctionContext) {
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
if (argName === "Wireframe") return Wireframe;
if (argName === "WireframeLinecap") return WireframeLinecap;
if (argName === "WireframeLinejoin") return WireframeLinejoin;
if (argName === "WireframeLinewidth") return WireframeLinewidth;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MeshMaterial__Wireframe.GDObjectObjects1.length = 0;

gdjs.evtsExt__MeshMaterial__Wireframe.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MeshMaterial__Wireframe.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__MeshMaterial__Wireframe.registeredGdjsCallbacks = [];