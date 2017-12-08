// Shim definition to export a namespace. Cypress is actually a global module
// so import/export isn't allowed there. We import here and define a global module
// so that Cypress can get and use the Blob type
import * as BluebirdStatic from 'bluebird';

export = Bluebird;
export as namespace Bluebird;

declare namespace Bluebird {
  type BluebirdStatic = typeof BluebirdStatic;
}
