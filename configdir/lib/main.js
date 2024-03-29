/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var join = require( 'path' ).join;
var ENV = require( '@stdlib/process/env' );
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var PLATFORM = require( './../../platform' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var homedir = require( './../../homedir' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns a directory for user-specific configuration files.
*
* @param {string} [p] - path to append to a base directory
* @throws {TypeError} first argument must be a string
* @returns {(string|null)} directory
*
* @example
* var dir = configdir();
* // e.g., returns '/Users/<username>/Library/Preferences'
*
* @example
* var dir = configdir( 'appname/config' );
* // e.g., returns '/Users/<username>/Library/Preferences/appname/config'
*/
function configdir( p ) {
	var append;
	var home;
	var dir;

	if ( arguments.length ) {
		if ( !isString( p ) ) {
			throw new TypeError( format( 'invalid argument. Must provide a string. Value: `%s`.', p ) );
		}
		append = p;
	} else {
		append = '';
	}
	if ( IS_WINDOWS ) {
		// http://blogs.msdn.com/b/patricka/archive/2010/03/18/where-should-i-store-my-data-and-configuration-files-if-i-target-multiple-os-versions.aspx
		// https://en.wikipedia.org/wiki/Environment_variable#Windows
		dir = ENV[ 'LOCALAPPDATA' ] || ENV[ 'APPDATA' ];
		return ( dir ) ? join( dir, append ) : null;
	}
	home = homedir();
	if ( home === null ) {
		return null;
	}
	if ( PLATFORM === 'darwin' ) {
		// http://stackoverflow.com/questions/410013/where-do-osx-applications-typically-store-user-configuration-data
		return join( home, 'Library', 'Preferences', append );
	}
	// http://www.pathname.com/fhs/
	// http://www.pathname.com/fhs/pub/fhs-2.3.html
	// http://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html
	dir = ENV[ 'XDG_CONFIG_HOME' ] || join( home, '.config' );
	return join( dir, append );
}


// EXPORTS //

module.exports = configdir;
