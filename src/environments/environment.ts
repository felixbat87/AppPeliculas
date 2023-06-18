// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url:'https://api.themoviedb.org/3',
  apikey:'686c191a44235b247a94b33bfb26afdc',
  imgPath:'https://image.tmdb.org/t/p/w500',
  complement:'/discover/movie',
  populares: '&sort_by=popularity.desc',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
