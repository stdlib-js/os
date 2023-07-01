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

# OS

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> OS utilities.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/os@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { ARCH, BYTE_ORDER, FLOAT_WORD_ORDER, NUM_CPUS, PLATFORM, configdir, homedir, tmpdir } from 'https://cdn.jsdelivr.net/gh/stdlib-js/os@esm/index.mjs';
```

#### ns

Namespace containing OS utilities.

```javascript
var os = ns;
// returns {...}
```

The namespace contains a variety of OS-related utility methods:

<!-- <toc pattern="*" ignore="+(arch|num-cpus|platform|byte-order|float-word-order)" > -->

<div class="namespace-toc">

-   <span class="signature">[`configdir( [path] )`][@stdlib/os/configdir]</span><span class="delimiter">: </span><span class="description">return a directory for user-specific configuration files.</span>
-   <span class="signature">[`homedir()`][@stdlib/os/homedir]</span><span class="delimiter">: </span><span class="description">return the current user's home directory.</span>
-   <span class="signature">[`tmpdir()`][@stdlib/os/tmpdir]</span><span class="delimiter">: </span><span class="description">return the directory for storing temporary files.</span>

</div>

<!-- </toc> -->

In addition, it exports the following constants:

<!-- <toc pattern="+(arch|num-cpus|platform|byte-order|float-word-order)" > -->

<div class="namespace-toc">

-   <span class="signature">[`ARCH`][@stdlib/os/arch]</span><span class="delimiter">: </span><span class="description">operating system CPU architecture for which the JavaScript runtime binary was compiled.</span>
-   <span class="signature">[`BYTE_ORDER`][@stdlib/os/byte-order]</span><span class="delimiter">: </span><span class="description">platform byte order.</span>
-   <span class="signature">[`FLOAT_WORD_ORDER`][@stdlib/os/float-word-order]</span><span class="delimiter">: </span><span class="description">platform float word order.</span>
-   <span class="signature">[`NUM_CPUS`][@stdlib/os/num-cpus]</span><span class="delimiter">: </span><span class="description">number of CPUs.</span>
-   <span class="signature">[`PLATFORM`][@stdlib/os/platform]</span><span class="delimiter">: </span><span class="description">platform on which the current process is running.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils/keys@esm/index.mjs';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/os@esm/index.mjs';

console.log( objectKeys( ns ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/os.svg
[npm-url]: https://npmjs.org/package/@stdlib/os

[test-image]: https://github.com/stdlib-js/os/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/os/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/os/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/os?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/os.svg
[dependencies-url]: https://david-dm.org/stdlib-js/os/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/os/tree/deno
[umd-url]: https://github.com/stdlib-js/os/tree/umd
[esm-url]: https://github.com/stdlib-js/os/tree/esm
[branches-url]: https://github.com/stdlib-js/os/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/os/main/LICENSE

<!-- <toc-links> -->

[@stdlib/os/arch]: https://github.com/stdlib-js/os/tree/main/arch

[@stdlib/os/byte-order]: https://github.com/stdlib-js/os/tree/main/byte-order

[@stdlib/os/float-word-order]: https://github.com/stdlib-js/os/tree/main/float-word-order

[@stdlib/os/num-cpus]: https://github.com/stdlib-js/os/tree/main/num-cpus

[@stdlib/os/platform]: https://github.com/stdlib-js/os/tree/main/platform

[@stdlib/os/configdir]: https://github.com/stdlib-js/os/tree/main/configdir

[@stdlib/os/homedir]: https://github.com/stdlib-js/os/tree/main/homedir

[@stdlib/os/tmpdir]: https://github.com/stdlib-js/os/tree/main/tmpdir

<!-- </toc-links> -->

</section>

<!-- /.links -->
