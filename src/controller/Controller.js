//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Skapar en ny objektinstans.
 *
 * @constructor
 * @abstract
 *
 * @param {string} key Giltig SMAPI-API-nyckel.
 * @param {string} name Kontrollantens beskrivningsnamn.
 *
 * @class
 * @classdesc
 * 
 * Klassen Controller fungerar som en abstrakt basklass för samtliga 
 * SMAPI-kontrollanter.
 */
smapi.controller.Controller = function(key, name) {
    
    //--------------------------------------------------------------------------
    // Protected prototype methods
    //--------------------------------------------------------------------------
    
    /**
     * API-nyckel till SMAPI REST API.
     *
     * @type {string}
     * @protected
     * @ignore
     */
    this.m_key = key || '';
    
    /**
     * Kontrollantens namn.
     *
     * @type {string}
     * @protected
     * @ignore
     */
    this.m_name = name;
    
    /**
     * URL till SMAPI REST API.
     *
     * @type {string}
     * @protected
     * @ignore
     */
    this.m_endpoint = 'http://172.18.8.151/api/';
};

//------------------------------------------------------------------------------
// Public prototype methods
//------------------------------------------------------------------------------

/**
 * Hämtar samtliga SMAPI-data från aktuell kontrollant. Argument kan användas 
 * för att filtrera informationshämtningen.
 *
 * @param {Object} args Objekt innehållande anropsargument.
 * @param {Object} handler Händelsehanterare i form av funktionsreferens som exekveras då aktuellt anrop slutförds.
 * @param {Object} [scope] Eventuellt omfång inom angiven händelsehanterare skall exekveras. 
 *
 * @return {smapi.net.Request}
 * @suppress {checkTypes}
 */
smapi.controller.Controller.prototype.getAll = function(args, handler, scope) {
    var req = new smapi.net.Request(this.m_parseArguments(args, {
        api_key: this.m_key,
        controller: this.m_name,
        method: 'getall',
    }), handler, scope);
    
    req.send();
    return req;
};

/**
 * Hämtar SMAPI-data utifrån en geografisk position. Metoden begränsar 
 * informationshämtningen till en radie kring den geografiska position som 
 * angivits i samband med API-anropet. Radien har ett standardvärde på 15 
 * kilometer (km) men kan modifieras efter behov via radius-argumentet.
 *
 * @param {Object} args Objekt innehållande anropsargument.
 * @param {Function} handler Händelsehanterare i form av funktionsreferens som exekveras då aktuellt anrop slutförds.
 * @param {Object} [scope] Eventuellt omfång inom angiven händelsehanterare skall exekveras.
 *
 * @return {smapi.net.Request}
 * @suppress {checkTypes}
 */
smapi.controller.Controller.prototype.getfromlatlng = function(args, handler, scope) {
    var req = new smapi.net.Request(this.m_parseArguments(args, {
        api_key: this.m_key,
        controller: this.m_name,
        method: 'getfromlatlng',
    }), handler, scope);
    
    req.send();
    return req;
};

//------------------------------------------------------------------------------
// Protected prototype methods
//------------------------------------------------------------------------------

/**
 * Metod för att slå samman två uppsättningar av argumentobjekt.
 *
 * @param {Object} a Det första objektet.
 * @param {Object} b Det andra objektet.
 *
 * @return {undefined}
 * @protected
 * @suppress {checkTypes}
 * @ignore
 */
smapi.controller.Controller.prototype.m_parseArguments = function(a, b) {
    return Object.assign(b, a, {js_api: true});
};