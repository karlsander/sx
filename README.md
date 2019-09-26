# @lightmode/sx

This helper function creates a jsx pragma the enables the Styled System/Theme UI `sx` prop with a theme and without any provider.

Create your jsx pragma like so:

```js
import { makePragma } from '@lightmode/sx';
import theme from './theme';

const jsx = makePragma(theme);

export default jsx;
export { jsx };
```

Then use it like the jsx prop from Theme UI but import your own file:

```js
/** @jsx jsx */
import { jsx } from '../util/jsx';
```

The raw css prop is not supported. An interesting possibilty of this approach (not yet implemented) is providing full typescript support, including custom theme values.
