/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import ARCH = require( './../../arch' );
import BYTE_ORDER = require( './../../byte-order' );
import configdir = require( './../../configdir' );
import FLOAT_WORD_ORDER = require( './../../float-word-order' );
import homedir = require( './../../homedir' );
import NUM_CPUS = require( './../../num-cpus' );
import PLATFORM = require( './../../platform' );
import tmpdir = require( './../../tmpdir' );

/**
* Interface describing the `os` namespace.
*/
interface Namespace {
	/**
	* Operating system CPU architecture for which the JavaScript runtime binary was compiled.
	*
	* ## Notes
	*
	* Current possible values:
	*
	*    - arm
	*    - arm64
	*    - ia32
	*    - mips
	*    - mipsel
	*    - ppc
	*    - ppc64
	*    - s390
	*    - s390x
	*    - x32
	*    - x64
	*
	* @example
	* if ( ns.ARCH === 'arm' || ns.ARCH === 'arm64' ) {
	*    console.log( 'Running on ARM...' );
	* } else {
	*    console.log( 'Running on something else...' );
	* }
	*/
	ARCH: typeof ARCH;

	/**
	* Platform byte order.
	*
	* ## Notes
	*
	* Possible values:
	*
	* -   `'little-endian'`
	* -   `'big-endian'`
	* -   `'mixed-endian'`
	* -   `'unknown'`
	*
	* @example
	* if ( ns.BYTE_ORDER === 'little-endian' ) {
	*    console.log( 'Least significant byte comes first...' );
	* } else if ( ns.BYTE_ORDER === 'big-endian' ) {
	*    console.log( 'Most significant byte comes first...' );
	* } else {
	*    console.log( 'This is uncommon...' );
	* }
	*/
	BYTE_ORDER: typeof BYTE_ORDER;

	/**
	* Returns a directory for user-specific configuration files.
	*
	* ## Notes
	*
	* -   On Windows platforms, the function first checks for a `LOCALAPPDATA` environment variable before checking for an `APPDATA` environment variable. This means that machine specific user configuration files have precedence over roaming user configuration files.
	* -   On non-Windows platforms, if the function is unable to locate the current  user's `home` directory, the function returns `null`. Similarly, on Windows platforms, if the function is unable to locate an application data directory, the function also returns `null`.
	*
	* @param [p] - path to append to a base directory
	* @returns directory
	*
	* @example
	* var dir = ns.configdir();
	* // e.g., returns '/Users/<username>/Library/Preferences'
	*
	* @example
	* var dir = ns.configdir( 'appname/config' );
	* // e.g., returns '/Users/<username>/Library/Preferences/appname/config'
	*/
	configdir: typeof configdir;

	/**
	* Platform float word order.
	*
	* ## Notes
	*
	* Possible values:
	*
	* -   `'little-endian'`
	* -   `'big-endian'`
	* -   `'unknown'`
	*
	* @example
	* if ( ns.FLOAT_WORD_ORDER === 'little-endian' ) {
	*    console.log( 'Least significant word comes first...' );
	* } else if ( ns.FLOAT_WORD_ORDER === 'big-endian' ) {
	*    console.log( 'Most significant word comes first...' );
	* } else {
	*    console.log( 'Unknown...' );
	* }
	*/
	FLOAT_WORD_ORDER: typeof FLOAT_WORD_ORDER;

	/**
	* Returns the current user's home directory.
	*
	* ## Notes
	*
	* -   If unable to locate a home directory, the function returns `null`.
	*
	* @returns home directory
	*
	* @example
	* var home = ns.homedir();
	* // e.g., returns '/Users/<username>'
	*/
	homedir: typeof homedir;

	/**
	* Number of CPUs.
	*
	* ## Notes
	*
	* -   In browser environments, the number of CPUs is determined by querying the hardware concurrency API.
	* -   In Node.js environments, the number of CPUs is determined via the `os` module.
	*
	* @example
	* var num = ns.NUM_CPUS;
	* // returns <number>
	*/
	NUM_CPUS: typeof NUM_CPUS;

	/**
	* Platform on which the current process is running.
	*
	* ## Notes
	*
	* Possible values:
	*
	* -   `'win32'`
	* -   `'darwin'`
	* -   `'linux'`
	* -   `'freebsd'`
	* -   `'sunos'`
	*
	* @example
	* if ( ns.PLATFORM === 'win32' ) {
	*    console.log( 'Running on a PC...' );
	* } else if ( ns.PLATFORM === 'darwin' ) {
	*    console.log( 'Running on a Mac...' );
	* } else {
	*    console.log( 'Running on something else...' );
	* }
	*/
	PLATFORM: typeof PLATFORM;

	/**
	* Returns the directory for storing temporary files.
	*
	* @returns directory for temporary files
	*
	* @example
	* var dir = ns.tmpdir();
	* // e.g., returns '/path/to/temporary/files/directory'
	*/
	tmpdir: typeof tmpdir;
}

/**
* OS utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
