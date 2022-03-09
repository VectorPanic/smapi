//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Skapar en ny objektinstans.
 *
 * @constructor
 * @extends smapi.controller.Controller
 * @see http://smapi.lnu.se/documentation/#smapi.establishment
 *
 * @param {string} key Giltig SMAPI-API-nyckel.
 *
 * @class
 * @classdesc
 * 
 * Denna klass representerar ett programmeringsbart gränssnitt för SMAPIs 
 * Establishment-kontrollant. För mer information se dokumentationen för 
 * SMAPI REST API.
 */
smapi.controller.Establishment = function(key) {
    
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * Extend Rectangle.
     */
    smapi.controller.Controller.call(this, key, 'Establishment');
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

smapi.controller.Establishment.prototype = Object.create(smapi.controller.Controller.prototype);
smapi.controller.Establishment.prototype.constructor = smapi.controller.Establishment;

//------------------------------------------------------------------------------
// Public prototype methods
//------------------------------------------------------------------------------

/**
 * ...
 *
 * @see {@link http://smapi.lnu.se/documentation/#smapi.establishment.getreviews}
 *
 * @param {Object} args Objekt innehållande anropsargument.
 * @param {Function} handler Funktionsreferens som exekveras då aktuellt anrop slutförds.
 *
 * @return {smapi.net.Request}
 * @suppress {checkTypes}
 */
smapi.controller.Establishment.prototype.getDescriptions = function(handler) {
    var req = new smapi.net.Request({
        api_key: this.m_key,
        controller: this.m_name,
        method: 'getdescriptions',
    }, handler);
    
    req.send();
    return req;
};

/**
 * Hämtar eventuella recensioner av specifik affärsverksamhet. Recensioner 
 * används för att beräkna affärsverksamheters betyg.
 *
 * @see {@link http://smapi.lnu.se/documentation/#smapi.establishment.getreviews}
 *
 * @param {Object} args Objekt innehållande anropsargument.
 * @param {Function} handler Funktionsreferens som exekveras då aktuellt anrop slutförds.
 *
 * @return {smapi.net.Request}
 * @suppress {checkTypes}
 */
smapi.controller.Establishment.prototype.getReviews = function(args, handler) {
    var req = new smapi.net.Request(this.m_parseArguments(args, {
        api_key: this.m_key,
        controller: this.m_name,
        method: 'getreviews',
    }), handler);
    
    req.send();
    return req;
};

/**
 * ...
 *
 * @see {@link http://smapi.lnu.se/documentation/#smapi.establishment.getreviews}
 *
 * @param {Object} args Objekt innehållande anropsargument.
 * @param {Function} handler Funktionsreferens som exekveras då aktuellt anrop slutförds.
 *
 * @return {smapi.net.Request}
 * @suppress {checkTypes}
 */
smapi.controller.Establishment.prototype.getStats = function(handler) {
    var req = new smapi.net.Request({
        api_key: this.m_key,
        controller: this.m_name,
        method: 'getstats',
    }, handler);
    
    req.send();
    return req;
};