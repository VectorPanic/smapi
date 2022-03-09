//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Skapar en ny objektinstans.
 *
 * @constructor
 * @extends smapi.controller.Controller
 * @see http://smapi.lnu.se/documentation/#smapi.attraction
 *
 * @param {string} key Giltig SMAPI-API-nyckel.
 *
 * @class
 * @classdesc
 * 
 * Denna klass representerar ett programmeringsbart gränssnitt för SMAPIs 
 * Attraction-kontrollant. För mer information se dokumentationen för 
 * SMAPI REST API.
 */
smapi.controller.Attraction = function(key) {
    
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * Extend Rectangle.
     */
    smapi.controller.Controller.call(this, key, 'Attraction');
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

smapi.controller.Attraction.prototype = Object.create(smapi.controller.Controller.prototype);
smapi.controller.Attraction.prototype.constructor = smapi.controller.Attraction;