<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Architecture

> Operating system CPU architecture for which the JavaScript runtime binary was compiled.

<section class="usage">

## Usage

```javascript
var ARCH = require( '@stdlib/os/arch' );
```

#### ARCH

Operating system CPU architecture for which the JavaScript runtime binary was compiled.

```javascript
console.log( ARCH );
// => <string>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In general, the target build architecture of the JavaScript runtime binary should match the host architecture; however, this is **not** guaranteed to always be true (e.g., if attempting to run an x64 build of Node.js on an arm64 host machine).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ARCH = require( '@stdlib/os/arch' );

if ( ARCH === 'arm' || ARCH === 'arm64' ) {
    console.log( 'Running on ARM...' );
} else {
    console.log( 'Running on something else...' );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: arch [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ arch
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/os/platform`][@stdlib/os/platform]</span><span class="delimiter">: </span><span class="description">platform on which the current process is running.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/os/platform]: https://github.com/stdlib-js/os/tree/main/platform

<!-- </related-links> -->

</section>

<!-- /.links -->
