# Electorn problem

## Occurs when one bundles the whole application and then uses remote objects

This example is with menu. It seems that Electron ignores "dunno why" calls to remote object Menu from rendern process

To run it:
```
yarn build && yarn start
```

Event though menu is required (console logs) it does not propagate it's effects to main process.
