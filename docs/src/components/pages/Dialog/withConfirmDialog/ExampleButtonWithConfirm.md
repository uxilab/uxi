
A ready-to-se Button is exported from under 'uxi/Button/'
```
import { ButtonWithConfirm } from 'uxi/Button'
```

The HOC will pass all the props except its own (confirmText, confirmLabel, cancelLabel) to the decorated compo. Button still has its full api available (e.g. icon, loading, etc.).
