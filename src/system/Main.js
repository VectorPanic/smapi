//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Skapar en ny objektinstans.
 *
 * @constructor
 *
 * @param {string} key Giltig SMAPI-API-nyckel. 
 * 
 * @class
 * @classdesc
 * 
 * Klassen Main representerar SMAPIs JavaScripts API och förutsätter att en 
 * giltig API-nyckel bifogas i samband med instansiering. Som instansierat 
 * objekt ges tillgång till egenskaper som representerar SMAPIs kontrollanter. 
 * All hantering av SMAPIs JavaScript API sker således via en instans av denna 
 * klass.
 */
smapi.system.Main = function(key) {
    
    /**
     * ...
     *
     * @type {smapi.controller.Accommodation}
     * @private
     */
    this.m_accommodation = new smapi.controller.Accommodation(key);
    
    /**
     * ...
     *
     * @type {smapi.controller.Activity}
     * @private
     */
    this.m_activity = new smapi.controller.Activity(key);
    
    /**
     * ...
     *
     * @type {smapi.controller.Attraction}
     * @private
     */
    this.m_attraction = new smapi.controller.Attraction(key);
    
    /**
     * ...
     *
     * @type {smapi.controller.Establishment}
     * @private
     */
    this.m_establishment = new smapi.controller.Establishment(key);
    
    /**
     * ...
     *
     * @type {smapi.controller.Food}
     * @private
     */
    this.m_food = new smapi.controller.Food(key);
    
    /**
     * ...
     *
     * @type {smapi.controller.Shop}
     * @private
     */
    this.m_shop = new smapi.controller.Shop(key);
    
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
 * Representerar SMAPIs accommodation-kontrollant och ger således åtkomst till 
 * metoder som är associerade med kontrollanten.
 *
 * @member {smapi.controller.Accommodation} accommodation
 * @memberof smapi.system.Main
 * @instance
 * @readonly
 */
Object.defineProperty(smapi.system.Main.prototype, "accommodation", {
    /**
     * @this smapi.system.Main
     * @ignore
     */
    get: function() {
        return this.m_accommodation;
    }
});

/**
 * Representerar SMAPIs activity-kontrollant och ger således åtkomst till 
 * metoder som är associerade med kontrollanten.
 *
 * @member {smapi.controller.Activity} activity
 * @memberof smapi.system.Main
 * @instance
 * @readonly
 */
Object.defineProperty(smapi.system.Main.prototype, "activity", {
    /**
     * @this smapi.system.Main
     * @ignore
     */
    get: function() {
        return this.m_activity;
    }
});

/**
 * Representerar SMAPIs attraction-kontrollant och ger således åtkomst till 
 * metoder som är associerade med kontrollanten.
 *
 * @member {smapi.controller.Attraction} attraction
 * @memberof smapi.system.Main
 * @instance
 * @readonly
 */
Object.defineProperty(smapi.system.Main.prototype, "attraction", {
    /**
     * @this smapi.system.Main
     * @ignore
     */
    get: function() {
        return this.m_attraction;
    }
});

/**
 * Representerar SMAPIs establishment-kontrollant och ger således åtkomst till 
 * metoder som är associerade med kontrollanten.
 *
 * @member {smapi.controller.Establishment} establishment
 * @memberof smapi.system.Main
 * @instance
 * @readonly
 */
Object.defineProperty(smapi.system.Main.prototype, "establishment", {
    /**
     * @this smapi.system.Main
     * @ignore
     */
    get: function() {
        return this.m_establishment;
    }
});

/**
 * Representerar SMAPIs food-kontrollant och ger således åtkomst till 
 * metoder som är associerade med kontrollanten.
 *
 * @member {smapi.controller.Food} food
 * @memberof smapi.system.Main
 * @instance
 * @readonly
 */
Object.defineProperty(smapi.system.Main.prototype, "food", {
    /**
     * @this smapi.system.Main
     * @ignore
     */
    get: function() {
        return this.m_food;
    }
});

/**
 * Representerar SMAPIs shop-kontrollant och ger således åtkomst till 
 * metoder som är associerade med kontrollanten.
 *
 * @member {smapi.controller.Shop} shop
 * @memberof smapi.system.Main
 * @instance
 * @readonly
 */
Object.defineProperty(smapi.system.Main.prototype, "shop", {
    /**
     * @this smapi.system.Main
     * @ignore
     */
    get: function() {
        return this.m_shop;
    }
});

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
smapi.system.Main.prototype.m_construct = function() {
    
};