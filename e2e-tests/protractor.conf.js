exports.config = {
  allScriptsTimeout: 61000,

  specs: [
    '*.js'
  ],

  multiCapabilities: [{
  'browserName': 'firefox'
}, {
  'browserName': 'chrome'
}],
  directConnect:true,
  baseUrl: 'http://localhost:8000/app/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  },
  seleniumArgs: []
};
