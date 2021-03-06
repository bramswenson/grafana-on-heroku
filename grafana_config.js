// == Configuration
// config.js is where you will find the core Grafana configuration. This file contains parameter that
// must be set before Grafana is run for the first time.

define(['settings'],
function (Settings) {
  return new Settings({
    datasources: {
      // these are replaced with express middleware
      civiqs_influx: {
        type: 'influxdb',
        url: 'CIVIQS_INFLUXDB_URL',
        username: 'CIVIQS_INFLUXDB_USER',
        password: 'CIVIQS_INFLUXDB_PASS',
      },
      dk_influx: {
        type: 'influxdb',
        url: 'DK_INFLUXDB_URL',
        username: 'DK_INFLUXDB_USER',
        password: 'DK_INFLUXDB_PASS',
      },
      dk_ads_influx: {
        type: 'influxdb',
        url: 'DK_ADS_INFLUXDB_URL',
        username: 'DK_ADS_INFLUXDB_USER',
        password: 'DK_ADS_INFLUXDB_PASS',
      },
      grafana: {
        type: 'influxdb',
        url: 'GRAFANA_INFLUXDB_URL',
        username: 'GRAFANA_INFLUXDB_USER',
        password: 'GRAFANA_INFLUXDB_PASS',
        grafanaDB: true
      },
    },

    /* Global configuration options
    * ========================================================
    */

    // specify the limit for dashboard search results
    search: {
      max_results: 20
    },

    // default home dashboard
    default_route: '/dashboard/file/default.json',

    // set to false to disable unsaved changes warning
    unsaved_changes_warning: true,

    // set the default timespan for the playlist feature
    // Example: "1m", "1h"
    playlist_timespan: "1m",

    // If you want to specify password before saving, please specify it bellow
    // The purpose of this password is not security, but to stop some users from accidentally changing dashboards
    admin: {
      password: ''
    },

    // Change window title prefix from 'Grafana - <dashboard title>'
    window_title_prefix: 'Grafana - ',

    // Add your own custom panels
    plugins: {
      // list of plugin panels
      panels: [],
      // requirejs modules in plugins folder that should be loaded
      // for example custom datasources
      dependencies: [],
    }
  });
});
