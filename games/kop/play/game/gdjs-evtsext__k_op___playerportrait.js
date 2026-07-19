
gdjs.evtsExt__K_OP___playerPortrait = gdjs.evtsExt__K_OP___playerPortrait || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__K_OP___playerPortrait.playerPortrait = class playerPortrait extends gdjs.CustomRuntimeObject2D {
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

gdjs.evtsExt__K_OP___playerPortrait.playerPortrait.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("K_OP_::playerPortrait", gdjs.evtsExt__K_OP___playerPortrait.playerPortrait);
