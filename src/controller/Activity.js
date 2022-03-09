//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Skapar en ny objektinstans.
 *
 * @constructor
 * @extends smapi.controller.Controller
 * @see http://smapi.lnu.se/documentation/#smapi.activity
 *
 * @param {string} key Giltig SMAPI-API-nyckel.
 *
 * @class
 * @classdesc
 * 
 * Denna klass representerar ett programmeringsbart gränssnitt för SMAPIs 
 * Activity-kontrollant. För mer information se dokumentationen för 
 * SMAPI REST API.
 */
smapi.controller.Activity = function(key) {
    
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * Extend Rectangle.
     */
    smapi.controller.Controller.call(this, key, 'Activity');
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

smapi.controller.Activity.prototype = Object.create(smapi.controller.Controller.prototype);
smapi.controller.Activity.prototype.constructor = smapi.controller.Activity;