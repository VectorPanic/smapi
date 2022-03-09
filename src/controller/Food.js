//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Skapar en ny objektinstans.
 *
 * @constructor
 * @extends smapi.controller.Controller
 * @see http://smapi.lnu.se/documentation/#smapi.food
 *
 * @param {string} key Giltig SMAPI-API-nyckel.
 *
 * @class
 * @classdesc
 * 
 * Denna klass representerar ett programmeringsbart gränssnitt för SMAPIs 
 * Food-kontrollant. För mer information se dokumentationen för 
 * SMAPI REST API.
 */
smapi.controller.Food = function(key) {
    
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * Extend Rectangle.
     */
    smapi.controller.Controller.call(this, key, 'Food');
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

smapi.controller.Food.prototype = Object.create(smapi.controller.Controller.prototype);
smapi.controller.Food.prototype.constructor = smapi.controller.Food;