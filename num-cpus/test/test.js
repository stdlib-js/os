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

var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var NUM_CPUS = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a number', opts, function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof NUM_CPUS, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value is always a positive integer', opts, function test( t ) {
	t.equal( isPositiveInteger( NUM_CPUS ), true, 'returns a positive integer' );
	t.end();
});
