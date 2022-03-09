//------------------------------------------------------------------------------
// Global scope aliases
//------------------------------------------------------------------------------

/**
 * ...
 */
if (typeof window !== "undefined") {
	if (typeof window.smapi === "undefined") {
		window.SMAPI = smapi.system.Main;
	}
}