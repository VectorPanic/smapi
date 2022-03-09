#!/bin/bash

npx google-closure-compiler \
--language_in ECMASCRIPT5_STRICT \
--language_out ECMASCRIPT5_STRICT \
--warning_level VERBOSE \
--compilation_level SIMPLE_OPTIMIZATIONS \
--isolation_mode IIFE \
--js "./../../src/scope/Manifest.js" \
--js "./../../src/net/Request.js" \
--js "./../../src/controller/Controller.js" \
--js "./../../src/controller/Accommodation.js" \
--js "./../../src/controller/Activity.js" \
--js "./../../src/controller/Attraction.js" \
--js "./../../src/controller/Establishment.js" \
--js "./../../src/controller/Food.js" \
--js "./../../src/controller/Shop.js" \
--js "./../../src/system/Main.js" \
--js "./../../src/scope/Alias.js" \
--js_output_file "./../../dist/smapi.js";