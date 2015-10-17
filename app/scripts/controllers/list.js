'use strict';

/**
 * @ngdoc function
 * @name crossoverApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the crossoverApp
 */
angular.module('crossoverApp')
  .controller('ListCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //collapse all items before open selected item
    $scope.$on('item:expanded', function () {
      $scope.$broadcast('list:collapse');
    });

    $scope.list = [
      {
        type: 'build',
        state: 'Complete',
        status: 'succeed',
        changelist: '423424',
        owner: 'Egor',
        timeStarted: 1288323623006,
        isDone: true,
        metrics: {
          status: 'succeed',
          widget: {
            test: {
              status: 'succeed',
              value: 90
            },
            mantainability: {
              status: 'succeed',
              value: 70
            },
            security: {
              status: 'succeed',
              value: 100
            },
            workmanship: {
              status: 'succeed',
              value: 84
            }
          }
        },
        build: {
          status: 'succeed',
          debug: true,
          release: true,
          time: 1288323623006
        },

        unitTest: {
          status: 'succeed',
          total: 3020,
          passed: 3001,
          covered: 90
        },

        functionalTest: {
          status: 'succeed',
          total: 2000,
          passed: 1908,
          covered: 65
        },

        result: {
          status: 'accepted',
          statusText: 'Change Accepted',
          actionText: 'Auto Merged',
          buttonText: 'Merged Build',
          url: '/somewhere'

        }
      },
      {
        type: 'firewall',
        state: 'Pending',
        status: 'pending',
        changelist: 'Tenrox-R1_1237',
        owner: 'Egor',
        timeStarted: 1289323623006,
        isDone: false,
        metrics: {},
        build: {},
        unitTest: {},
        functionalTest: {}
      },
      {
        type: 'firewall',
        state: 'Running',
        status: 'running',
        changelist: 'Tenrox-R1_1236',
        owner: 'Egor',
        timeStarted: 1289323623006,
        metrics: {
          percentage: 80
        },

        build: {
          percentage: 20
        },
        unitTest: {
          percentage: 45
        },
        functionalTest: {
          percentage: 80
        }
      },
      {
        type: 'firewall',
        state: 'Rejected',
        status: 'rejected',
        changelist: 'Tenrox-R1_1238',
        owner: 'Egor',
        timeStarted: 1298323623006,
        isDone: true,
        metrics: {
          status: 'rejected',
          widget: {
            test: {
              status: 'accepted',
              value: 80
            },
            mantainability: {
              status: 'rejected',
              value: 90
            },
            security: {
              status: 'accepted',
              value: 100
            },
            workmanship: {
              status: 'accepted',
              value: 84
            }
          }
        },
        build: {
          status: 'accepted',
          debug: true,
          release: true,
          time: 1288323623006
        },

        unitTest: {
          status: 'accepted',
          total: 3020,
          passed: 3001,
          covered: 90
        },

        functionalTest: {
          status: 'accepted',
          total: 2000,
          passed: 1908,
          covered: 65
        },

        result: {
          status: 'rejected',
          statusText: 'Change Rejected',
          actionText: 'Metrics Reduction',
          buttonText: 'Find Issues',
          url: '/somewhere'

        }
      },
      {
        type: 'firewall',
        state: 'Rejected',
        status: 'rejected',
        changelist: 'Tenrox-R1_1241',
        owner: 'Egor',
        timeStarted: 1298323623006,
        isDone: true,
        metrics: {
          status: 'accepted',
          widget: {
            test: {
              status: 'accepted',
              value: 80
            },
            mantainability: {
              status: 'accepted',
              value: 90
            },
            security: {
              status: 'accepted',
              value: 100
            },
            workmanship: {
              status: 'accepted',
              value: 84
            }
          }
        },
        build: {
          status: 'rejected',
          debug: false,
          release: true,
          time: 1288323623006
        },

        unitTest: {
          status: 'accepted',
          total: 3020,
          passed: 3001,
          covered: 90
        },

        functionalTest: {
          status: 'accepted',
          total: 2000,
          passed: 1908,
          covered: 65
        },

        result: {
          status: 'rejected',
          statusText: 'Change Rejected',
          actionText: 'Build Failed',
          buttonText: 'Find Issues',
          url: '/somewhere'

        }
      },
      {
        type: 'firewall',
        state: 'Rejected',
        status: 'rejected',
        changelist: 'Tenrox-R1_1239',
        owner: 'Egor',
        timeStarted: 1298323623006,
        isDone: true,
        metrics: {
          status: 'accepted',
          widget: {
            test: {
              status: 'accepted',
              value: 80
            },
            mantainability: {
              status: 'accepted',
              value: 90
            },
            security: {
              status: 'accepted',
              value: 100
            },
            workmanship: {
              status: 'accepted',
              value: 84
            }
          }
        },
        build: {
          status: 'rejected',
          debug: false,
          release: true,
          time: 1288323623006
        },

        unitTest: {
          status: 'accepted',
          total: 3020,
          passed: 3001,
          covered: 90
        },

        functionalTest: {
          status: 'rejected',
          total: 2000,
          passed: 1608,
          covered: 65
        },

        result: {
          status: 'rejected',
          statusText: 'Change Rejected',
          actionText: 'Function Test Failed',
          buttonText: 'Find Issues',
          url: '/somewhere'

        }
      },
      {
        type: 'build',
        state: 'Complete',
        status: 'succeed',
        changelist: '423425',
        owner: 'Egor',
        timeStarted: 1288323623006,
        isDone: true,
        metrics: {
          status: 'succeed',
          widget: {
            test: {
              status: 'succeed',
              value: 90
            },
            mantainability: {
              status: 'succeed',
              value: 70
            },
            security: {
              status: 'succeed',
              value: 100
            },
            workmanship: {
              status: 'succeed',
              value: 84
            }
          }
        },
        build: {
          status: 'succeed',
          debug: true,
          release: true,
          time: 1288323623006
        },

        unitTest: {
          status: 'succeed',
          total: 3020,
          passed: 3001,
          covered: 90
        },

        functionalTest: {
          status: 'succeed',
          total: 2000,
          passed: 1908,
          covered: 65
        },

        result: {
          status: 'accepted',
          statusText: 'Change Accepted',
          actionText: 'Auto Merged',
          buttonText: 'Merged Build',
          url: '/somewhere'

        }
      },
      {
        type: 'build',
        state: 'Complete',
        status: 'succeed',
        changelist: '423426',
        owner: 'Egor',
        timeStarted: 1288323623006,
        isDone: true,
        metrics: {
          status: 'succeed',
          widget: {
            test: {
              status: 'succeed',
              value: 90
            },
            mantainability: {
              status: 'succeed',
              value: 70
            },
            security: {
              status: 'succeed',
              value: 100
            },
            workmanship: {
              status: 'succeed',
              value: 84
            }
          }
        },
        build: {
          status: 'succeed',
          debug: true,
          release: true,
          time: 1288323623006
        },

        unitTest: {
          status: 'succeed',
          total: 3020,
          passed: 3001,
          covered: 90
        },

        functionalTest: {
          status: 'succeed',
          total: 2000,
          passed: 1908,
          covered: 65
        },

        result: {
          status: 'accepted',
          statusText: 'Change Accepted',
          actionText: 'Auto Merged',
          buttonText: 'Merged Build',
          url: '/somewhere'

        }
      },      {
        type: 'build',
        state: 'Complete',
        status: 'succeed',
        changelist: '423427',
        owner: 'Egor',
        timeStarted: 1288323623006,
        isDone: true,
        metrics: {
          status: 'succeed',
          widget: {
            test: {
              status: 'succeed',
              value: 90
            },
            mantainability: {
              status: 'succeed',
              value: 70
            },
            security: {
              status: 'succeed',
              value: 100
            },
            workmanship: {
              status: 'succeed',
              value: 84
            }
          }
        },
        build: {
          status: 'succeed',
          debug: true,
          release: true,
          time: 1288323623006
        },

        unitTest: {
          status: 'succeed',
          total: 3020,
          passed: 3001,
          covered: 90
        },

        functionalTest: {
          status: 'succeed',
          total: 2000,
          passed: 1908,
          covered: 65
        },

        result: {
          status: 'accepted',
          statusText: 'Change Accepted',
          actionText: 'Auto Merged',
          buttonText: 'Merged Build',
          url: '/somewhere'

        }
      },
      {
        type: 'build',
        state: 'Complete',
        status: 'succeed',
        changelist: '423428',
        owner: 'Egor',
        timeStarted: 1288323623006,
        isDone: true,
        metrics: {
          status: 'succeed',
          widget: {
            test: {
              status: 'succeed',
              value: 90
            },
            mantainability: {
              status: 'succeed',
              value: 70
            },
            security: {
              status: 'succeed',
              value: 100
            },
            workmanship: {
              status: 'succeed',
              value: 84
            }
          }
        },
        build: {
          status: 'succeed',
          debug: true,
          release: true,
          time: 1288323623006
        },

        unitTest: {
          status: 'succeed',
          total: 3020,
          passed: 3001,
          covered: 90
        },

        functionalTest: {
          status: 'succeed',
          total: 2000,
          passed: 1908,
          covered: 65
        },

        result: {
          status: 'accepted',
          statusText: 'Change Accepted',
          actionText: 'Auto Merged',
          buttonText: 'Merged Build',
          url: '/somewhere'

        }
      },      {
        type: 'build',
        state: 'Complete',
        status: 'succeed',
        changelist: '423429',
        owner: 'Egor',
        timeStarted: 1288323623006,
        isDone: true,
        metrics: {
          status: 'succeed',
          widget: {
            test: {
              status: 'succeed',
              value: 90
            },
            mantainability: {
              status: 'succeed',
              value: 70
            },
            security: {
              status: 'succeed',
              value: 100
            },
            workmanship: {
              status: 'succeed',
              value: 84
            }
          }
        },
        build: {
          status: 'succeed',
          debug: true,
          release: true,
          time: 1288323623006
        },

        unitTest: {
          status: 'succeed',
          total: 3020,
          passed: 3001,
          covered: 90
        },

        functionalTest: {
          status: 'succeed',
          total: 2000,
          passed: 1908,
          covered: 65
        },

        result: {
          status: 'accepted',
          statusText: 'Change Accepted',
          actionText: 'Auto Merged',
          buttonText: 'Merged Build',
          url: '/somewhere'

        }
      },      {
        type: 'build',
        state: 'Complete',
        status: 'succeed',
        changelist: '423430',
        owner: 'Egor',
        timeStarted: 1288323623006,
        isDone: true,
        metrics: {
          status: 'succeed',
          widget: {
            test: {
              status: 'succeed',
              value: 90
            },
            mantainability: {
              status: 'succeed',
              value: 70
            },
            security: {
              status: 'succeed',
              value: 100
            },
            workmanship: {
              status: 'succeed',
              value: 84
            }
          }
        },
        build: {
          status: 'succeed',
          debug: true,
          release: true,
          time: 1288323623006
        },

        unitTest: {
          status: 'succeed',
          total: 3020,
          passed: 3001,
          covered: 90
        },

        functionalTest: {
          status: 'succeed',
          total: 2000,
          passed: 1908,
          covered: 65
        },

        result: {
          status: 'accepted',
          statusText: 'Change Accepted',
          actionText: 'Auto Merged',
          buttonText: 'Merged Build',
          url: '/somewhere'

        }
      },      {
        type: 'build',
        state: 'Complete',
        status: 'succeed',
        changelist: '423431',
        owner: 'Egor',
        timeStarted: 1288323623006,
        isDone: true,
        metrics: {
          status: 'succeed',
          widget: {
            test: {
              status: 'succeed',
              value: 90
            },
            mantainability: {
              status: 'succeed',
              value: 70
            },
            security: {
              status: 'succeed',
              value: 100
            },
            workmanship: {
              status: 'succeed',
              value: 84
            }
          }
        },
        build: {
          status: 'succeed',
          debug: true,
          release: true,
          time: 1288323623006
        },

        unitTest: {
          status: 'succeed',
          total: 3020,
          passed: 3001,
          covered: 90
        },

        functionalTest: {
          status: 'succeed',
          total: 2000,
          passed: 1908,
          covered: 65
        },

        result: {
          status: 'accepted',
          statusText: 'Change Accepted',
          actionText: 'Auto Merged',
          buttonText: 'Merged Build',
          url: '/somewhere'

        }
      },      {
        type: 'firewall',
        state: 'Complete',
        status: 'accepted',
        changelist: '4239832',
        owner: 'Egor',
        timeStarted: 1288323623006,
        isDone: true,
        metrics: {
          status: 'accepted',
          widget: {
            test: {
              status: 'accepted',
              value: 90
            },
            mantainability: {
              status: 'accepted',
              value: 70
            },
            security: {
              status: 'accepted',
              value: 100
            },
            workmanship: {
              status: 'accepted',
              value: 84
            }
          }
        },
        build: {
          status: 'accepted',
          debug: true,
          release: true,
          time: 1288323623006
        },

        unitTest: {
          status: 'accepted',
          total: 3020,
          passed: 3001,
          covered: 90
        },

        functionalTest: {
          status: 'accepted',
          total: 2000,
          passed: 1908,
          covered: 65
        },

        result: {
          status: 'accepted',
          statusText: 'Change Accepted',
          actionText: 'Auto Merged',
          buttonText: 'Merged Build',
          url: '/somewhere'

        }
      }
    ];

  });
