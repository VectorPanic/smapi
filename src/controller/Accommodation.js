//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Skapar en ny objektinstans.
 *
 * @constructor
 * @extends smapi.controller.Controller
 * @see http://smapi.lnu.se/documentation/#smapi.accommodation
 *
 * @param {string} key Giltig SMAPI-API-nyckel.
 *
 * @class
 * @classdesc
 * 
 * Denna klass representerar ett programmeringsbart gränssnitt för SMAPIs 
 * Accommodation-kontrollant. För mer information se dokumentationen för 
 * SMAPI REST API.
 */
smapi.controller.Accommodation = function(key) {
    
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * Extend Rectangle.
     */
    smapi.controller.Controller.call(this, key, 'Accommodation');
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

smapi.controller.Accommodation.prototype = Object.create(smapi.controller.Controller.prototype);
smapi.controller.Accommodation.prototype.constructor = smapi.controller.Accommodation;