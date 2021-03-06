/*
 Modular version of the multi bar chart nvd3-directive
 */
"use strict";

var module = {
  name: 'Multi Bar Chart',
  slug: 'multiBarChart',
  data: require('./data')
};

var template = ['<nvd3 options="dataStore.options" ',
                 'data="dataStore.data" ',
                 'colors="dataStore.colors" ',
                 'events="$root.events" ',
                 'config="{ extended: true }"></nvd3>'].join('');

angular

  .module('chartbuilder.nvd3.multiBarChart', ['chartbuilderServices', 'chartbuilder.nvd3'])

  /**
   * Add this module's state to ui-router routes
   */
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('chartbuilder.' + module.slug, {
      url: '/' + module.slug,
      views: {
        'graph': {
          template: template,
          controller: module.slug + 'Controller'
        }
      }
    });
  }])

  .run(['chartbuilderModuleRegistry', function(chartbuilderModuleRegistry) {
      var moduleOpts = {};
      moduleOpts[module.name] = {
        name: module.name,
        slug: module.slug,
        data: module.data,
        dataFormat: [{ 'key': 'x', 'type': 'text' }, { 'key': 'y', 'type': 'number' }],
        template: template,
        meta: {
          title: module.name,
          subtitle: 'Subtitle for a multi bar chart',
          caption: '1a. Edit a caption for the graph',
        },
        options: {
          chart: {
            type: module.slug,
            height: 600,
            clipEdge: true,
            forceY: [null, null],
            forceX: [null, null],
            x: 'function:x/y',
            y: 'function:key/y',
            tooltip: 'function:multiBarChart',
            wrapLabels: true
          }
        }
      }

      // Add the slug and name definitions to chartbuilder
      angular.extend(chartbuilderModuleRegistry, moduleOpts);
    }
  ])

  .controller(module.slug + 'Controller', [
    '$scope',
    'chartbuilderData',
    'chartbuilderModuleRegistry',
    function($scope, chartbuilderData, chartbuilderModuleRegistry) {
      // Localize the datastore for the view
      $scope.dataStore = chartbuilderData;

      // Initialize the data -- store sample data and set structure
      chartbuilderData.init(chartbuilderModuleRegistry[module.name]);
    }
  ]);
