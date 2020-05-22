// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseAPIKey: 'AIzaSyCTmVdrVIHwSjj0_uyUSwxUnXXlAi_Zhq8',
  signUpUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
  signInUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
  fetchRecipesUrl: 'https://ng-course-recipe-book-aece7.firebaseio.com/recipes.json',
  storeRecipes: 'https://ng-course-recipe-book-aece7.firebaseio.com/recipes.json'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
