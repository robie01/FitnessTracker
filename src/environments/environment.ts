// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCw1qhjKmSx2o7Y3Q0-L50T6puHWCKCb4U',
    authDomain: 'ng-fitness-tracker-54cb1.firebaseapp.com',
    databaseURL: 'https://ng-fitness-tracker-54cb1.firebaseio.com',
    projectId: 'ng-fitness-tracker-54cb1',
    storageBucket: 'ng-fitness-tracker-54cb1.appspot.com',
    messagingSenderId: '1064930660136'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
