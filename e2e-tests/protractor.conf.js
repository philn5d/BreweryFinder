exports.config = {
  allScriptsTimeout: 61000,

  specs: [
    '*.js'
  ],

  capabilities: {        
	'browserName': 'internet explorer',
        'platform': 'ANY',
        'version': '11'
  },

  baseUrl: 'http://localhost:8000/app/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  },
  seleniumArgs: ['-Dwebdriver.ie.driver=c:/IEDriverServer.exe']
};
