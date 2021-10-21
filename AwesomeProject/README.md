## These commands seem to be handy to reset the project's dependencies:

https://stackoverflow.com/a/58988371

```
rm -rf ios/Pods && rm -rf ios/build && cd ios && pod install && cd ../
rm -rf node_modules && rm yarn.lock && yarn install
```

## Resources

- https://medium.com/cybermonkey/deep-linking-push-notifications-with-react-navigation-5fce260ccca2 - showing how to implement navigation and deep linking
