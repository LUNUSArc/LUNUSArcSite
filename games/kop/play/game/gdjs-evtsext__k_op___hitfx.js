
gdjs.evtsExt__K_OP___hitFX = gdjs.evtsExt__K_OP___hitFX || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__K_OP___hitFX.hitFX = class hitFX extends gdjs.CustomRuntimeObject3D {
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
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects1= [];
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2= [];
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects3= [];


gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30129612);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("hitFX"), gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2);
{gdjs.evtsExt__MeshMaterial__NewMaterialInstance.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, eventsFunctionContext);
}
{for(var i = 0, len = gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2[i].resetTimer("animat");
}
}
{gdjs.evtsExt__MeshMaterial__EmissiveColor.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, "83;24;24", eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__EmissiveIntensity.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 1, eventsFunctionContext);
}
}

}


};gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("hitFX"), gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2[i].getTimerElapsedTimeInSecondsOrNaN("animat") >= 0.1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2[k] = gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30130700);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2 */
{for(var i = 0, len = gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2[i].resetTimer("animat");
}
}
{for(var i = 0, len = gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2[i].returnVariable(gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2[i].getVariables().get("frame")).add(1);
}
}
}

}


};gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("hitFX"), gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2[0].getVariables()).get("frame").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30104972);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDObjectObjects2);
/* Reuse gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2 */
{gdjs.evtsExt__A3F__ChangeOpacityV2.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, eventsFunctionContext.getBehaviorName("Object3D"), "=", 155, true, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), 0, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 1, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 2, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 3, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 4, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 5, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 6, eventsFunctionContext);
}
{for(var i = 0, len = gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDObjectObjects2[i].hide(false);
}
}
}

}


};gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("hitFX"), gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2[0].getVariables()).get("frame").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30110252);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2 */
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 0, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), 1, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 2, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 3, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 4, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 5, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 6, eventsFunctionContext);
}
}

}


};gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("hitFX"), gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2[0].getVariables()).get("frame").getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30552460);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2 */
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 0, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 1, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), 2, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 3, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 4, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 5, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 6, eventsFunctionContext);
}
}

}


};gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("hitFX"), gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2[0].getVariables()).get("frame").getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30555012);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2 */
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 0, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 1, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 2, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), 3, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 4, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 5, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 6, eventsFunctionContext);
}
}

}


};gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("hitFX"), gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2[0].getVariables()).get("frame").getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30557644);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2 */
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 0, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 1, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 2, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 3, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), 4, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 5, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 6, eventsFunctionContext);
}
}

}


};gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("hitFX"), gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2[0].getVariables()).get("frame").getAsNumber() == 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30560244);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2 */
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 0, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 1, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 2, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 3, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 4, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), 5, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 6, eventsFunctionContext);
}
}

}


};gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("hitFX"), gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2[0].getVariables()).get("frame").getAsNumber() == 6);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30562916);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2 */
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 0, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 1, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 2, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 3, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 4, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, 0, 5, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects2Objects, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), 6, eventsFunctionContext);
}
}

}


};gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects1Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects1});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects1Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects1});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects1Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects1});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects1Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects1});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects1Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects1});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects1Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects1});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects1Objects = Hashtable.newFrom({"hitFX": gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects1});
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("hitFX"), gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (((gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects1[0].getVariables()).get("frame").getAsNumber() == 7);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30565300);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDObjectObjects1);
/* Reuse gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects1 */
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects1Objects, 0, 0, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects1Objects, 0, 1, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects1Objects, 0, 2, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects1Objects, 0, 3, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects1Objects, 0, 4, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects1Objects, 0, 5, eventsFunctionContext);
}
{gdjs.evtsExt__MeshMaterial__OpacityBySlot.func(runtimeScene, gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595K_9595OP_9595_9595_9595hitFX_9546hitFX_9546prototype_9546doStepPostEventsContext_9546GDhitFXObjects1Objects, 0, 6, eventsFunctionContext);
}
{for(var i = 0, len = gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDObjectObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList6(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList7(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList8(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList9(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0.8);
variables._declare("loppacity", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList11(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDhitFXObjectsList = [...runtimeScene.getObjects("hitFX")];
var GDhitFXObjects = Hashtable.newFrom({"hitFX": thisGDhitFXObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "hitFX": GDhitFXObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "hitFX": thisGDhitFXObjectsList
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

gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects1.length = 0;
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2.length = 0;
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects3.length = 0;

gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.eventsList13(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects1.length = 0;
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects2.length = 0;
gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPostEventsContext.GDhitFXObjects3.length = 0;


return;
}

gdjs.evtsExt__K_OP___hitFX.hitFX.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("K_OP_::hitFX", gdjs.evtsExt__K_OP___hitFX.hitFX);
