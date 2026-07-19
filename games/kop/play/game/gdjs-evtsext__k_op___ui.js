
gdjs.evtsExt__K_OP___UI = gdjs.evtsExt__K_OP___UI || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__K_OP___UI.UI = class UI extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  

  

  
}

// Methods:
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDUIObjects3= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects3= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDplayerStatusObjects3= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDopponentStatusObjects3= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects3= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects3= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("touchIcon"), gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects2[k] = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("inputs").getChild("touch"));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("inputs").getChild("touch").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30254588);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("FlatDarkJoystick"), gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("touchIcon"), gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects2);
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("inputs").getChild("touchAsNumber").setNumber(0);
}
{for(var i = 0, len = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects2.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("iconTouch0");
}
}
{for(var i = 0, len = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects2.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("inputs").getChild("touch").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30256300);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("FlatDarkJoystick"), gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("touchIcon"), gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects1);
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("inputs").getChild("touchAsNumber").setNumber(1);
}
{for(var i = 0, len = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("iconKeys0");
}
}
{for(var i = 0, len = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1[i].hide(false);
}
}
}

}


};gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(29761708);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("FlatDarkJoystick"), gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1);
{for(var i = 0, len = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Opacity")).setOpacity(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("joystick").getChild("oppacity").getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDObjectObjects1[i].always(eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayerMessageManager.hasAnyPlayerJustLeft();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(29769924);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustEnded();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30248076);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("FlatDarkJoystick"), gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1[i].IsPressed(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1[k] = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1 */
{for(var i = 0, len = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1[i].returnVariable(gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1[i].getVariables().get("pressedState")).setNumber(0);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("FlatDarkJoystick"), gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1[i].IsPressed(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1[k] = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1 */
{for(var i = 0, len = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1[i].returnVariable(gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1[i].getVariables().get("pressedState")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("soundButton"), gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1[k] = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1 */
{for(var i = 0, len = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1[i].toggleVariableBoolean(gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1[i].getVariables().get("sound"));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("soundButton"), gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1[i].getVariableBoolean(gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1[i].getVariables().get("sound"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1[k] = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30251716);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1 */
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("sound").getChild("music").getAsNumber());
}
{for(var i = 0, len = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText("🔈");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("soundButton"), gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1[i].getVariableBoolean(gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1[i].getVariables().get("sound"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1[k] = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30252972);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1 */
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, 0);
}
{for(var i = 0, len = gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText("🔇");
}
}
}

}


{


gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDUIObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDplayerStatusObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDopponentStatusObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects3.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDUIObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDFlatDarkJoystickObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDplayerStatusObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDopponentStatusObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDsoundButtonObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPostEventsContext.GDtouchIconObjects3.length = 0;


return;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDObjectObjects1[i].playerInput(eventsFunctionContext);
}
}
{gdjs.multiplayerVariablesManager.disableVariableSynchronization(runtimeScene, eventsFunctionContext.globalVariablesForExtension.getFromIndex(0));
}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.always = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.alwaysContext.GDtouchIconObjects2.length = 0;


return;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDObjectObjects3= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDUIObjects3= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDFlatDarkJoystickObjects3= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDplayerStatusObjects3= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDopponentStatusObjects3= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDsoundButtonObjects3= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDtouchIconObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDtouchIconObjects3= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) <= gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("FlatDarkJoystick"), gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDFlatDarkJoystickObjects2);
{for(var i = 0, len = gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDFlatDarkJoystickObjects2.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDFlatDarkJoystickObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setSize(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) < gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("FlatDarkJoystick"), gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDFlatDarkJoystickObjects2);
{for(var i = 0, len = gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDFlatDarkJoystickObjects2.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDFlatDarkJoystickObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setSize(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FlatDarkJoystick"), gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDFlatDarkJoystickObjects1);
{for(var i = 0, len = gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDFlatDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDFlatDarkJoystickObjects1[i].setY(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - ((gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDFlatDarkJoystickObjects1[i].getHeight()) / 2));
}
}
}

}


};gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{/* Unknown instruction - skipped. */}
{/* Unknown instruction - skipped. */}
}

}


{


gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.playerInput = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDUIObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDFlatDarkJoystickObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDplayerStatusObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDopponentStatusObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDsoundButtonObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDtouchIconObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDtouchIconObjects3.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDUIObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDFlatDarkJoystickObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDplayerStatusObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDopponentStatusObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDsoundButtonObjects3.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDtouchIconObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerInputContext.GDtouchIconObjects3.length = 0;


return;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FlatDarkJoystick"), gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDFlatDarkJoystickObjects1);
{eventsFunctionContext.returnValue = gdjs.evtTools.common.toString((( gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDFlatDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDFlatDarkJoystickObjects1[0].StickForceX(eventsFunctionContext)));}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceXContext.GDtouchIconObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FlatDarkJoystick"), gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDFlatDarkJoystickObjects1);
{eventsFunctionContext.returnValue = gdjs.evtTools.common.toString((( gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDFlatDarkJoystickObjects1.length === 0 ) ? 0 :gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDFlatDarkJoystickObjects1[0].StickForceY(eventsFunctionContext)));}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickForceYContext.GDtouchIconObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FlatDarkJoystick"), gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDFlatDarkJoystickObjects1);
{eventsFunctionContext.returnValue = ((gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDFlatDarkJoystickObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDFlatDarkJoystickObjects1[0].getVariables()).get("pressedState").getAsNumber();}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.joystickPressedContext.GDtouchIconObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("stats").getChild("stamina").setNumber(eventsFunctionContext.getArgument("setSatTo"));
}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaTo = function(setSatTo, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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
if (argName === "setSatTo") return setSatTo;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStaminaToContext.GDtouchIconObjects2.length = 0;


return;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("punches").getChild("type").setString(eventsFunctionContext.getArgument("setPunchTo"));
}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationTo = function(setPunchTo, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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
if (argName === "setPunchTo") return setPunchTo;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setPlayerAnimationToContext.GDtouchIconObjects2.length = 0;


return;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("stats").getChild("health").setNumber(eventsFunctionContext.getArgument("setSatTo"));
}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthTo = function(setSatTo, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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
if (argName === "setSatTo") return setSatTo;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setHealthToContext.GDtouchIconObjects2.length = 0;


return;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("stats").getChild("stamina").sub(eventsFunctionContext.getArgument("setSatTo"));
}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtraction = function(setSatTo, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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
if (argName === "setSatTo") return setSatTo;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaSubtractionContext.GDtouchIconObjects2.length = 0;


return;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("stats").getChild("stamina").add(eventsFunctionContext.getArgument("setSatTo"));
}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAddition = function(setSatTo, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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
if (argName === "setSatTo") return setSatTo;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.staminaAdditionContext.GDtouchIconObjects2.length = 0;


return;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("stats").getChild("health").sub(eventsFunctionContext.getArgument("setSatTo"));
}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtraction = function(setSatTo, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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
if (argName === "setSatTo") return setSatTo;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.healthSubtractionContext.GDtouchIconObjects2.length = 0;


return;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("stats").getChild("stamina").getAsNumber();}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIs = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerStaminaIsContext.GDtouchIconObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("stats").getChild("health").getAsNumber();}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIs = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerHealthIsContext.GDtouchIconObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("glovesR").getChild("colour").getChild("r").getAsNumber()) + ";" + gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("glovesR").getChild("colour").getChild("g").getAsNumber()) + ";" + gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("glovesR").getChild("colour").getChild("b").getAsNumber());}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColour = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.gloveColourContext.GDtouchIconObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("glovesL").getChild("colour").getChild("r").getAsNumber()) + ";" + gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("glovesL").getChild("colour").getChild("g").getAsNumber()) + ";" + gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("glovesL").getChild("colour").getChild("b").getAsNumber());}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveL = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveLContext.GDtouchIconObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("glovesR").getChild("colour").getChild("r").getAsNumber()) + ";" + gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("glovesR").getChild("colour").getChild("g").getAsNumber()) + ";" + gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("glovesR").getChild("colour").getChild("b").getAsNumber());}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveR = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourGloveRContext.GDtouchIconObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("eyes").getChild("colour").getChild("r").getAsNumber()) + ";" + gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("eyes").getChild("colour").getChild("g").getAsNumber()) + ";" + gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("eyes").getChild("colour").getChild("b").getAsNumber());}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyes = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourEyesContext.GDtouchIconObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("sex").getAsString();}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.sex = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.sexContext.GDtouchIconObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("sportsBra").getChild("colour").getChild("r").getAsNumber()) + ";" + gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("sportsBra").getChild("colour").getChild("g").getAsNumber()) + ";" + gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("sportsBra").getChild("colour").getChild("b").getAsNumber());}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.colourBra = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBraContext.GDtouchIconObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("brows").getChild("colour").getChild("r").getAsNumber()) + ";" + gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("brows").getChild("colour").getChild("g").getAsNumber()) + ";" + gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("brows").getChild("colour").getChild("b").getAsNumber());}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrows = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourBrowsContext.GDtouchIconObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("hair").getChild("colour").getChild("r").getAsNumber()) + ";" + gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("hair").getChild("colour").getChild("g").getAsNumber()) + ";" + gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("hair").getChild("colour").getChild("b").getAsNumber());}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.colourHair = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourHairContext.GDtouchIconObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("hair").getChild("type").getAsString();}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.typeHair = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.typeHairContext.GDtouchIconObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("skin").getChild("colour").getChild("r").getAsNumber()) + ";" + gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("skin").getChild("colour").getChild("g").getAsNumber()) + ";" + gdjs.evtTools.common.toString(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("skin").getChild("colour").getChild("b").getAsNumber());}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkin = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.colourSkinContext.GDtouchIconObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("opponentStatus"), gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDopponentStatusObjects1);
{for(var i = 0, len = gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDopponentStatusObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDopponentStatusObjects1[i].setTheName(eventsFunctionContext.getArgument("name"), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemy = function(name, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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
if (argName === "name") return name;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.nameEnemyContext.GDtouchIconObjects2.length = 0;


return;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("name").getAsString() + eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("uniqueID").getAsString();}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.playerName = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.playerNameContext.GDtouchIconObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("sound").getChild("music").getAsNumber();}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolume = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.musicVolumeContext.GDtouchIconObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("sound").getChild("fightSFXfightSFX").getAsNumber();}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolume = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.fightVolumeContext.GDtouchIconObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("state").getChild("snapShot").getAsNumber();}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.snap = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.snapContext.GDtouchIconObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("state").getChild("snapShot").setNumber(eventsFunctionContext.getArgument("snapShotIs"));
}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.setSnap = function(snapShotIs, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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
if (argName === "snapShotIs") return snapShotIs;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setSnapContext.GDtouchIconObjects2.length = 0;


return;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("score").getChild("leaderboard").getAsNumber();}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScore = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.leaderboardScoreContext.GDtouchIconObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("score").getChild("leaderboard").setNumber(eventsFunctionContext.getArgument("scoreTarget"));
}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScore = function(scoreTarget, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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
if (argName === "scoreTarget") return scoreTarget;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setLeaderboardScoreContext.GDtouchIconObjects2.length = 0;


return;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("score").getChild("streak").setNumber(eventsFunctionContext.getArgument("scoreTarget"));
}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.setStreak = function(scoreTarget, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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
if (argName === "scoreTarget") return scoreTarget;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakContext.GDtouchIconObjects2.length = 0;


return;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("score").getChild("streak").getAsNumber();}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.strerak = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.strerakContext.GDtouchIconObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("buffs").getChild("streakProtection").setNumber(eventsFunctionContext.getArgument("scoreTarget"));
}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtection = function(scoreTarget, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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
if (argName === "scoreTarget") return scoreTarget;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.setStreakProtectionContext.GDtouchIconObjects2.length = 0;


return;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("buffs").getChild("streakProtection").getAsNumber();}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecion = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.streakProtecionContext.GDtouchIconObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDParameterObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDParameterObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("achievements").getChild("winABattleWithAPerfectCounter").getChild("unlocked").setNumber(1);
}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9 = function(Parameter, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
, "Parameter": Parameter
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
, "Parameter": gdjs.objectsListsToArray(Parameter)
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

gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDParameterObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDParameterObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDParameterObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDParameterObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock9Context.GDtouchIconObjects2.length = 0;


return;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("opponentStatus"), gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDopponentStatusObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDopponentStatusObjects1.length === 0 ) ? 0 :gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDopponentStatusObjects1[0].enemyHealthCurrently(eventsFunctionContext));}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIs = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.opponentHealthIsContext.GDtouchIconObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDParameterObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDParameterObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("achievements").getChild("loseABattleWithoutHittingTheOpponent").getChild("unlocked").setNumber(1);
}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3 = function(Parameter, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
, "Parameter": Parameter
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
, "Parameter": gdjs.objectsListsToArray(Parameter)
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

gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDParameterObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDParameterObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDParameterObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDParameterObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.unlock3Context.GDtouchIconObjects2.length = 0;


return;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("profile").getChild("score").getChild("onlineWins").add(1);
}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWin = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.addOnlineWinContext.GDtouchIconObjects2.length = 0;


return;
}
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext = {};
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDUIObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDUIObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDFlatDarkJoystickObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDFlatDarkJoystickObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDplayerStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDplayerStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDopponentStatusObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDopponentStatusObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDsoundButtonObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDsoundButtonObjects2= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDtouchIconObjects1= [];
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDtouchIconObjects2= [];


gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getChild("settings").getChild("inputs").getChild("touchAsNumber").getAsNumber();}
}

}


};

gdjs.evtsExt__K_OP___UI.UI.prototype.touchInput = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDUIObjectsList = [...runtimeScene.getObjects("UI")];
var GDUIObjects = Hashtable.newFrom({"UI": thisGDUIObjectsList});
var thisGDFlatDarkJoystickObjectsList = [...runtimeScene.getObjects("FlatDarkJoystick")];
var GDFlatDarkJoystickObjects = Hashtable.newFrom({"FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList});
var thisGDplayerStatusObjectsList = [...runtimeScene.getObjects("playerStatus")];
var GDplayerStatusObjects = Hashtable.newFrom({"playerStatus": thisGDplayerStatusObjectsList});
var thisGDopponentStatusObjectsList = [...runtimeScene.getObjects("opponentStatus")];
var GDopponentStatusObjects = Hashtable.newFrom({"opponentStatus": thisGDopponentStatusObjectsList});
var thisGDsoundButtonObjectsList = [...runtimeScene.getObjects("soundButton")];
var GDsoundButtonObjects = Hashtable.newFrom({"soundButton": thisGDsoundButtonObjectsList});
var thisGDtouchIconObjectsList = [...runtimeScene.getObjects("touchIcon")];
var GDtouchIconObjects = Hashtable.newFrom({"touchIcon": thisGDtouchIconObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "UI": GDUIObjects
, "FlatDarkJoystick": GDFlatDarkJoystickObjects
, "playerStatus": GDplayerStatusObjects
, "opponentStatus": GDopponentStatusObjects
, "soundButton": GDsoundButtonObjects
, "touchIcon": GDtouchIconObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "UI": thisGDUIObjectsList
, "FlatDarkJoystick": thisGDFlatDarkJoystickObjectsList
, "playerStatus": thisGDplayerStatusObjectsList
, "opponentStatus": thisGDopponentStatusObjectsList
, "soundButton": thisGDsoundButtonObjectsList
, "touchIcon": thisGDtouchIconObjectsList
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

gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDtouchIconObjects2.length = 0;

gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDUIObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDUIObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDFlatDarkJoystickObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDFlatDarkJoystickObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDplayerStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDplayerStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDopponentStatusObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDopponentStatusObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDsoundButtonObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDsoundButtonObjects2.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDtouchIconObjects1.length = 0;
gdjs.evtsExt__K_OP___UI.UI.prototype.touchInputContext.GDtouchIconObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__K_OP___UI.UI.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("K_OP_::UI", gdjs.evtsExt__K_OP___UI.UI);
