
if (typeof gdjs.evtsExt__MeshMaterial__MatcapTextureBySlot !== "undefined") {
  gdjs.evtsExt__MeshMaterial__MatcapTextureBySlot.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MeshMaterial__MatcapTextureBySlot = {};
gdjs.evtsExt__MeshMaterial__MatcapTextureBySlot.idToCallbackMap = new Map();
gdjs.evtsExt__MeshMaterial__MatcapTextureBySlot.GDObjectObjects1= [];


gdjs.evtsExt__MeshMaterial__MatcapTextureBySlot.userFunc0x2b87e40 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length > 0) {
    const slotNum = eventsFunctionContext.getArgument("Slot");
    let index = 0;
    objects[0].get3DRendererObject().traverse((node) => {
        if (index <= slotNum && node.isMesh && node.material.isMaterial) {
            if (node.material.hasOwnProperty('matcap')) {
                if (index === slotNum) {
                    if (node.material.matcap instanceof THREE.Texture) {
                        node.material.matcap.dispose();
                    }
                    var textureLoader = new THREE.TextureLoader();
                    var texture = textureLoader.load(eventsFunctionContext.getArgument("Texture").substring(eventsFunctionContext.getArgument("Texture").lastIndexOf('\\') + 1));
                    node.material.matcap = texture;
                }
                index++;
            } else {
                console.warn('Matcap texture property does not exist for this material type: ' + node.material.type + ', object name: ' + objects[0].getName());
            }
        }
    });
}
};
gdjs.evtsExt__MeshMaterial__MatcapTextureBySlot.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MeshMaterial__MatcapTextureBySlot.GDObjectObjects1);

const objects = gdjs.evtsExt__MeshMaterial__MatcapTextureBySlot.GDObjectObjects1;
gdjs.evtsExt__MeshMaterial__MatcapTextureBySlot.userFunc0x2b87e40(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__MeshMaterial__MatcapTextureBySlot.func = function(runtimeScene, Object, Texture, Slot, parentEventsFunctionContext) {
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
if (argName === "Texture") return Texture;
if (argName === "Slot") return Slot;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MeshMaterial__MatcapTextureBySlot.GDObjectObjects1.length = 0;

gdjs.evtsExt__MeshMaterial__MatcapTextureBySlot.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MeshMaterial__MatcapTextureBySlot.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__MeshMaterial__MatcapTextureBySlot.registeredGdjsCallbacks = [];