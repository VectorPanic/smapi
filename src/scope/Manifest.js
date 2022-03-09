//------------------------------------------------------------------------------
// Namespace
//------------------------------------------------------------------------------

/**
 * Detta paket innehåller samtliga klasser som inkluderas i SMAPIs 
 * JavaScript API. Ingen programkod görs tillgänglig utanför detta paket.
 * 
 * @namespace smapi
 */
var smapi = function() {

	//--------------------------------------------------------------------------
	// Public static scope
	//--------------------------------------------------------------------------
	
	/**
	 * Public scope.
	 *
	 * @type {Object}
	 * @private
	 */
	var m_this = {};

	//--------------------------------------------------------------------------
	// Package structure
	//--------------------------------------------------------------------------
	
	/**
	 * Detta paket innehåller samtliga kontrollantklasser, dvs. klasser som 
	 * representerar en enskild kontrollant inom SMAPIs REST-API.
	 *
	 * @namespace controller
	 * @memberof smapi
	 * @since 1.0
	 */
	m_this.controller = {};
	
	/**
	 * Detta paket innehåller klasser som används för hantering av 
	 * dataöverföring via TCP/IP och HTTP.
	 *
	 * @namespace net
	 * @memberof smapi
	 * @since 1.0
	 */
	m_this.net = {};
	
	/**
	 * Detta paket innehåller klasser som representerar mjukvarans 
	 * grundläggande struktur och uppbyggnad.
	 *
	 * @namespace system
	 * @memberof smapi
	 * @since 1.0
	 */
	m_this.system = {};

	//--------------------------------------------------------------------------
	// Return public scope object
	//--------------------------------------------------------------------------

	/**
	 * Public scope.
	 */
	return m_this;

}();