define([
	'../../lib/helpers',
	'i18n',
	'../../views/display',
	'../../lib/grid',
	'./common',
	'../../config'
], function(helper, i18n, display, grid, common, config) {
	'use strict';

	var scale = helper.scale;

	var bindings = display.create({
		title: i18n.t.weight,
		bindings: {
			prefix: 'weight-interaction',
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
					title: i18n.t.weight,
					calculate: function(p) {
						return scale(p, 11.113, 11.113).toFixed(3);
					},
					format: function() { return ' kN'; }
				},
				{
					title: 'range',
					renderable: false,
					sync: function(prefix, value) {
						if (!bindings) return;
						bindings.data.altitude =
						bindings.data.speed =
						bindings.data.weight = value;
					}
				}
			]
		}
	});

	var grangerChange;

	function interactive(canvas) {
		var ctx = canvas.getContext('2d');
		var img = common.setupCessna(this, canvas);
		var forces = common.setupForces(canvas, bindings.granger);
		var field = forces.field;
		var origin = forces.origin;
		var particle = forces.particle;
		var value = forces.value;

		if (grangerChange) bindings.granger.element.removeEventListener('change', grangerChange);

		grangerChange = function(e) {
			var diff = (+this.value - value) * 4;
			field.position.x = origin.x + diff * 1.5;
			field.position.y = origin.y + diff;
		}

		bindings.granger.element.addEventListener('change', grangerChange, false);

		function onUpdate() {
			particle.moveTowardField(field);
			particle.move();

			if (config.showField) field.draw(ctx);
			var y = (Math.sin(this.t) * 20);

			var transform = 'translate(' + (particle.position.x - img.clientWidth / 2) + 'px,' + (particle.position.y + y - img.clientHeight / 2) + 'px)';
			img.style.webkitTransform = transform;
		}

		var tween = grid(this, canvas, { onUpdate: onUpdate });

		return tween;
	}

	return {
		bindings: bindings,
		interactive: interactive
	}

});
