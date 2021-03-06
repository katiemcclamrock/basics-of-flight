define([
	'../../lib/helpers',
	'i18n',
	'../../views/display',
	'./common'
], function(helper, i18n, display, common) {
	'use strict';

	var scale = helper.scale;
	var FRAMES = 31;

	var bindings = display.create({
		title: i18n.t.rudder,
		max: FRAMES - 1,
		bindings: {
			prefix: 'rudder-interaction',
			options: [
				{
					title: i18n.t.altitude,
					calculate: function(p) {
						return scale(p, 5000, 10000);
					},
					format: function() { return ' ft'; }
				},
				{
					title: i18n.t.speed,
					calculate: function(p) { return 3200; },
					format: function() { return ' m/hr'; }
				},
				{
					title: i18n.t.lift,
					calculate: function(p) {
						return scale(p, 600, 1500);
					},
					format: function() { return ' coeffecient'; }
				},
				{
					title: 'range',
					renderable: false,
					sync: function(prefix, value) {
						if (!bindings) return;
						bindings.data.altitude =
						bindings.data.speed =
						bindings.data.lift = value;
					}
				}
			]
		}
	});

	return {
		bindings: bindings,
		interactive: common.interactiveFactory('rudder', FRAMES, bindings)
	};

});




