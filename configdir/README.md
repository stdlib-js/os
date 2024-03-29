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

# configdir

> Return a directory for user-specific configuration files.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var configdir = require( '@stdlib/os/configdir' );
```

#### configdir( \[path] )

Returns a directory for user-specific configuration files.

```javascript
var dir = configdir();
// e.g., returns '/Users/<username>/Library/Preferences'
```

To append a `path` to the base directory, provide a `path` argument.

```javascript
var dir = configdir( 'appname/config' );
// e.g., returns '/Users/<username>/Library/Preferences/appname/config'
```

On non-Windows platforms, if the function is unable to locate the current user's [`home`][@stdlib/os/homedir] directory, the function returns `null`. Similarly, on Windows platforms, if the function is unable to locate an application data directory, the function also returns `null`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   On Windows platforms, the function first checks for a `LOCALAPPDATA` [environment variable][environment-variable-windows] before checking for an `APPDATA` [environment variable][environment-variable-windows]. This means that machine specific user configuration files have precedence over roaming user configuration files.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var configdir = require( '@stdlib/os/configdir' );

console.log( configdir( 'appy/config' ) );
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: configdir [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ configdir
e.g., /Users/<username>/Library/Preferences
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/os/homedir`][@stdlib/os/homedir]</span><span class="delimiter">: </span><span class="description">return the current user's home directory.</span>
-   <span class="package-name">[`@stdlib/os/tmpdir`][@stdlib/os/tmpdir]</span><span class="delimiter">: </span><span class="description">return the directory for storing temporary files.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[environment-variable-windows]: https://en.wikipedia.org/wiki/Environment_variable#Windows

<!-- <related-links> -->

[@stdlib/os/homedir]: https://github.com/stdlib-js/os/tree/main/homedir

[@stdlib/os/tmpdir]: https://github.com/stdlib-js/os/tree/main/tmpdir

<!-- </related-links> -->

</section>

<!-- /.links -->
