
gdjs.evtsExt__K_OP___boxingRing = gdjs.evtsExt__K_OP___boxingRing || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__K_OP___boxingRing.boxingRing = class boxingRing extends gdjs.CustomRuntimeObject3D {
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

gdjs.evtsExt__K_OP___boxingRing.boxingRing.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("K_OP_::boxingRing", gdjs.evtsExt__K_OP___boxingRing.boxingRing);
