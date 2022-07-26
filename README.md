# Bolio Icons

The SVG icons components for Bolio UI.

[![npm Version](https://img.shields.io/npm/v/@bolio-ui/icons)](https://www.npmjs.com/package/@bolio-ui/icons)

## Install

```
$ yarn add @bolio-ui/icons
OR
$ npm install @bolio-ui/icons
```

## Usage

```tsx
import React from 'react';
import { Box } from '@bolio-ui/icons';

const App = () => {
  return <Box />;
};

export default App;
```

Icons can be configured with `color`, `fontSize` and any SVG props:

```ts
<Box color="purple" fontSize={36} />
<Box color="green" strokeWidth={3} />
```

## Other ways

1. You can include the whole icon pack:

```tsx
import * as Icons from '@bolio-ui/icons';

const App = () => {
  return <Icons.Box />;
};
```

### Community

We're excited to see the community adopt Bolio UI, raise issues, and provide feedback.
Whether it's a feature request, bug report, or a project to showcase, please get involved!

- [Twitter](https://twitter.com/bolio_ui/)
- [Instagram](https://www.instagram.com/bolio.ui/)
- [GitHub](https://github.com/bolio-ui/bolio-ui/)

## License

[MIT](https://choosealicense.com/licenses/mit/) © [brunnoandrade](https://github.com/brunnoandrade/)
