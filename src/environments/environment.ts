// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  googleMapsApiKey: 'AIzaSyCMQddpPC_tiNchIMM9Gp3YPYnZM_e_i2Y',
  emailConfig: {
    apiUrl: 'https://services.arnaugarcia.com',
    companyName: 'arnaugarcia.com',
    email: 'arnau.garcia.gallego@gmail.com'
  },
  reCaptcha: {
    siteKey: '6Lfi9vAUAAAAAMo29FEGmbCHr1OyTNg8tgCoG66T'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
