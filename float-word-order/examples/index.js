/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var FLOAT_WORD_ORDER = require( './../lib' );

if ( FLOAT_WORD_ORDER === 'little-endian' ) {
	console.log( 'Least significant word comes first...' );
} else if ( FLOAT_WORD_ORDER === 'big-endian' ) {
	console.log( 'Most significant word comes first...' );
} else {
	console.log( 'This is uncommon...' );
}
