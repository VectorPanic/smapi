//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Skapar en ny objektinstans.
 *
 * @constructor
 * @extends smapi.controller.Controller
 * @see http://smapi.lnu.se/documentation/#smapi.shop
 *
 * @param {string} key Giltig SMAPI-API-nyckel.
 *
 * @class
 * @classdesc
 * 
 * Denna klass representerar ett programmeringsbart gränssnitt för SMAPIs 
 * Shop-kontrollant. För mer information se dokumentationen för 
 * SMAPI REST API.
 */
smapi.controller.Shop = function(key) {
    
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * Extend Rectangle.
     */
    smapi.controller.Controller.call(this, key, 'Shop');
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

smapi.controller.Shop.prototype = Object.create(smapi.controller.Controller.prototype);
smapi.controller.Shop.prototype.constructor = smapi.controller.Shop;