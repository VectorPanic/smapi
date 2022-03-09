//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Skapar en ny objektinstans.
 *
 * @constructor
 *
 * @param {Object} args Uppsättning nyckel-värde-par som skall representeras som GET-parametrar.
 * @param {Function} handler Händelsehanterare som exekveras då aktuell HTTP-förfrågan är slutförd.
 * @param {Object} [scope] Objekt som representerar det omfång inom hänvisad händelsehanterare skall exekveras.
 *
 * @class
 * @classdesc
 * 
 * Denna klass representerar en HTTP-förfrågan till SMAPI. Samtliga anrop som 
 * görs via SMAPI JavaScript API, är representationer av denna klass. 
 */
smapi.net.Request = function(args, handler, scope) {
    
    //--------------------------------------------------------------------------
    // Private prototype methods
    //--------------------------------------------------------------------------
    
    /**
     * ...
     *
     * @type {Object}
     * @private
     */
    this.m_args = args || {};
    
    /**
     * ...
     *
     * @type {string}
     * @private
     */
    this.m_endpoint = 'https://smapi.lnu.se/api/';
    
    /**
     * ...
     *
     * @type {Function}
     * @private
     */
    this.m_handler = handler || null;
    
    /**
     * ...
     *
     * @type {Object}
     * @private
     */
    this.m_scope = scope || window;
        
    /**
     * ...
     *
     * @type {XMLHttpRequest}
     * @private
     */
    this.m_xhr = null;
    
    //--------------------------------------------------------------------------
    // Constructor call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    this.m_construct();
};

//------------------------------------------------------------------------------
// Public getter and setter methods
//------------------------------------------------------------------------------

/**
 * Referens till det XHR-objekt som hanterar samtlig HTTP-kommunikation. Är 
 * användbar då exempelvis mer kontroll över pågående HTTP-anrop är önskvärd. 
 *
 * @member {XMLHttpRequest} xhr
 * @memberof smapi.net.Request
 * @instance
 * @readonly
 */
Object.defineProperty(smapi.net.Request.prototype, "xhr", {
    /**
     * @this smapi.net.Request
     * @ignore
     */
    get: function() {
        return this.m_xhr;
    }
});

//------------------------------------------------------------------------------
// Public prototype methods
//------------------------------------------------------------------------------

/**
 * Denna metod avbryter pågående HTTP-anrop.
 *
 * @return {undefined}
 */
smapi.net.Request.prototype.abort = function() {
    this.m_disposeXMLHttpRequest();
};

/**
 * Då denna metod anropas skickas aktuell konfiguration till SMAPI som ett 
 * HTTP-anrop.
 *
 * @return {undefined}
 */
smapi.net.Request.prototype.send = function() {
    this.m_xhr.open('GET', this.m_getURL(this.m_args));
    this.m_xhr.send();
};

//------------------------------------------------------------------------------
// Protected prototype methods
//------------------------------------------------------------------------------

/**
 * Klassens konstruktormetod.
 *
 * @return {undefined}
 * @protected
 * @ignore
 */
smapi.net.Request.prototype.m_construct = function() {
    this.m_constructXMLHttpRequest();
};

//------------------------------------------------------------------------------
// Private prototype methods
//------------------------------------------------------------------------------

/**
 * Skapar det XMLHttpRequest-objekt som används för asynkron kommunikation 
 * mellan klient och SMPI REST API.
 *
 * @return {undefined}
 * @private
 */
smapi.net.Request.prototype.m_constructXMLHttpRequest = function() {
    var m_this = this;
    this.m_disposeXMLHttpRequest();
    if (this.m_xhr === null) {
        this.m_xhr = new XMLHttpRequest();
        this.m_xhr.onreadystatechange = function(event) {
            m_this.m_onStateChange(event);
        };
    }
};

/**
 * Händelsehanterare för när det sker förändring av XHR-objektets tillstånd.
 *
 * @param {Event} event Ett Event-objekt.
 *
 * @return {undefined}
 * @private
 */
smapi.net.Request.prototype.m_onStateChange = function(event) {
    if (this.m_xhr && this.m_xhr.readyState === XMLHttpRequest.DONE) {
        if (typeof this.m_handler === 'function') {
            this.m_handler.call(this.m_scope, JSON.parse(this.m_xhr.responseText));
        }
    }
};

/**
 * Tar bort och frigör minne som allokerats av objektets underliggande 
 * XHR-objekt. Notera att pågående HTTP-anrop avbryts i samband med anrop till 
 * denna metod.
 *
 * @return {undefined}
 * @private
 */
smapi.net.Request.prototype.m_disposeXMLHttpRequest = function() {
    if (this.m_xhr instanceof XMLHttpRequest) {
        this.m_xhr.abort();
    }
    
    this.m_xhr = null;
};

/**
 * Omvandlar ett objekts nyckel-värde-par till en giltig fråge-/parametersträng.
 *
 * @param {Object} params Uppsättning av nyckel-värde-par.
 *
 * @return {string}
 * @private
 * @suppress {checkTypes}
 */
smapi.net.Request.prototype.m_getURL = function(params) {
    params = params || {};
    return this.m_endpoint + '?' + Object.keys(params).map(function(key) {
        return key+'='+encodeURIComponent(params[key])
    }).join('&');
};