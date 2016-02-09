'use strict';

angular.module('breweryFinder.version', [
  'breweryFinder.version.interpolate-filter',
  'breweryFinder.version.version-directive'
])

.value('version', '0.1');
