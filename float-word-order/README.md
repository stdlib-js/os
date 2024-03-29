<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Float word Order

> Platform [float word order][endianness].

<section class="usage">

## Usage

```javascript
var FLOAT_WORD_ORDER = require( '@stdlib/os/float-word-order' );
```

#### FLOAT_WORD_ORDER

Platform float word order.

```javascript
console.log( FLOAT_WORD_ORDER );
// => <string>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The following values are possible:

    -   `'little-endian'`
    -   `'big-endian'`
    -   `'unknown'`

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var FLOAT_WORD_ORDER = require( '@stdlib/os/float-word-order' );

if ( FLOAT_WORD_ORDER === 'little-endian' ) {
    console.log( 'Least significant word comes first...' );
} else if ( FLOAT_WORD_ORDER === 'big-endian' ) {
    console.log( 'Most significant word comes first...' );
} else {
    console.log( 'This is uncommon...' );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/os/float_word_order.h"
```

#### STDLIB_OS_FLOAT_WORD_ORDER

Macro which equals either `__FLOAT_WORD_ORDER__` (host defined) or [`STDLIB_OS_BYTE_ORDER`][@stdlib/os/byte-order].

```c
#include "stdlib/os/byte_order.h"

#if defined(STDLIB_OS_FLOAT_WORD_ORDER)

#if STDLIB_OS_FLOAT_WORD_ORDER == STDLIB_OS_ORDER_LITTLE_ENDIAN

// Do something for little-endian...

#elif STDLIB_OS_FLOAT_WORD_ORDER == STDLIB_OS_ORDER_BIG_ENDIAN

// Do something for big-endian...

#endif

#endif
```

If compiled on an unrecognized/unsupported platform, the macro is **not** defined.

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/os/float_word_order.h"
#include "stdlib/os/byte_order.h"
#include <stdio.h>

int main( void ) {
#if defined(STDLIB_OS_FLOAT_WORD_ORDER)
#if STDLIB_OS_FLOAT_WORD_ORDER == STDLIB_OS_ORDER_LITTLE_ENDIAN
    printf( "Least significant word comes first...\n" );
#elif STDLIB_OS_FLOAT_WORD_ORDER == STDLIB_OS_ORDER_BIG_ENDIAN
    printf( "Most significant word comes first...\n" );
#else
    printf( "Platform float word order is unknown...\n" )
#endif
#endif
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: float-word-order [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ float-word-order
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/os/byte-order`][@stdlib/os/byte-order]</span><span class="delimiter">: </span><span class="description">platform byte order.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[endianness]: https://en.wikipedia.org/wiki/Endianness

<!-- <related-links> -->

[@stdlib/os/byte-order]: https://github.com/stdlib-js/os/tree/main/byte-order

<!-- </related-links> -->

</section>

<!-- /.links -->
