/* eslint-env node */
'use strict';

module.exports = function(environment/* , appConfig */) {
  const ENV = {
    modulePrefix: 'sub-app2',
    environment,
  }
  return ENV;
};
