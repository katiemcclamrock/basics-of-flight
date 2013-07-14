define([
	'../lib/animations',
	'../lib/helpers',
], function(draw, helper) {

	var transform = '-webkit-transform';

	function Interaction() {
		this.name = this.constructor.toString().match(/^function (\w+)/)[1];
		var canvas = this.canvas = document.createElement('canvas');
		canvas.id = 'weightInteraction';
		canvas.setAttribute('data-paper-resize', 'true');
		canvas.classList.add('hardware-hack');
		canvas.style.position = 'absolute';
		canvas.style.backgroundColor = '#000';
		canvas.style.top = 0;
		canvas.style.left = 0;
		canvas.style.right = 0;
		canvas.style.zIndex = 2;
	}

	Interaction.prototype = {
		constructor: Interaction,

		prependTo: function(el) {
			el.insertBefore(this.canvas, el.firstChild);
		},

		appendTo: function(el) {
			el.appendChild(this.canvas);
		},

		remove: function() {
			if (this.canvas.parentNode)
				this.canvas.parentNode.removeChild(this.canvas);
		},

		start: function() {
			var scope = helper.createPaperScript(this.canvas, mainInteraction)
			if (config.logger.paperjsScope) config.logger.paperjsScopeFn.call(this, this.canvas.id);
		},

		stop: function() {
			var self = this;
			this.canvas.style[transform] = 'translate(100%, 0)';
			self.remove();
		}
	}

	return new Interaction();

	function intro(callback) {
		// Code ported to Paper.js from http://the389.com/9/1/
		// with permission.

		var values = {
			friction: 0.8,
			timeStep: 0.01,
			amount: 15,
			mass: 2,
			count: 0
		};
		values.invMass = 1 / values.mass;

		var path, springs;
		var size = view.size * [1.2, 1];

		var Spring = function(a, b, strength, restLength) {
			this.a = a;
			this.b = b;
			this.restLength = restLength || 80;
			this.strength = strength ? strength : 0.55;
			this.mamb = values.invMass * values.invMass;
		};

		Spring.prototype.update = function() {
			var delta = this.b - this.a;
			var dist = delta.length;
			var normDistStrength = (dist - this.restLength) /
					(dist * this.mamb) * this.strength;
			delta.y *= normDistStrength * values.invMass * 0.2;
			if (!this.a.fixed)
				this.a.y += delta.y;
			if (!this.b.fixed)
				this.b.y -= delta.y;
		};


		function createPath(strength) {
			var path = new Path({
				fillColor: 'red'
			});
			springs = [];
			for (var i = 0; i <= values.amount; i++) {
				var segment = path.add(new Point(i / values.amount, 0.5) * size);
				var point = segment.point;
				if (i == 0 || i == values.amount)
					point.y += size.height;
				point.px = point.x;
				point.py = point.y;
				// The first two and last two points are fixed:
				point.fixed = i < 2 || i > values.amount - 2;
				if (i > 0) {
					var spring = new Spring(segment.previous.point, point, strength);
					springs.push(spring);
				}
			}
			path.position.x -= size.width / 4;
			return path;
		}

		function onResize() {
			if (path)
				path.remove();
			size = view.bounds.size * [2, 1];
			path = createPath(0.1);
		}

		function onMouseMove(event) {
			var location = path.getNearestLocation(event.point);
			var segment = location.segment;
			var point = segment.point;

			if (!point.fixed && location.distance < size.height / 4) {
				var y = event.point.y;
				point.y += (y - point.y) / 6;
				if (segment.previous && !segment.previous.fixed) {
					var previous = segment.previous.point;
					previous.y += (y - previous.y) / 24;
				}
				if (segment.next && !segment.next.fixed) {
					var next = segment.next.point;
					next.y += (y - next.y) / 24;
				}
			}
		}

		function onFrame(event) {
			updateWave(path);
		}

		function updateWave(path) {
			var force = 1 - values.friction * values.timeStep * values.timeStep;
			for (var i = 0, l = path.segments.length; i < l; i++) {
				var point = path.segments[i].point;
				var dy = (point.y - point.py) * force;
				point.py = point.y;
				point.y = Math.max(point.y + dy, 0);
			}

			for (var j = 0, l = springs.length; j < l; j++) {
				springs[j].update();
			}
			path.smooth();
		}

		function onKeyDown(event) {
			if (event.key == 'space') {
				path.fullySelected = !path.fullySelected;
				path.fillColor = path.fullySelected ? null : 'black';
			}
		}
	}

	function mainInteraction() {
		var numberOfLines = 20
		var lines = [], line;
		var top = new Point(0, 0);
		var bottom = new Point(0, view.element.height);
		var offset;

		while (numberOfLines--) {
			offset = state.rand(10, 40);
			top.x -= offset;
			bottom.x -= offset;
			line = new Path.Line(top, bottom);
			line.strokeColor = '#fff';
			line.strokeWidth = state.rand(1, 10);
			lines.push(line);
		}

		var cessna = project.importSVG(document.getElementById('cessna-elevation'));

		cessna.position.x = 400;
		cessna.position.y = 400;
		window.cessna = cessna;

		var w = view.element.width;
		var CESSNA_SIN_MULTIPLIER = 4;
		var CESSNA_SIN_ADDITIVE = 0.04;

		var angle = -Math.PI;
		var frame = 0

		function onFrame(event) {
			console.log('onFrame');
			if (!lines) return;
			if (config.fps) config.fps(event.delta);

			var w = view._element.width;
			lines.forEach(function(l) {
				l.position.x += 3;
				if (l.position.x > w) l.position.x = -10;
			});

			cessna.position.y = Math.floor(CESSNA_SIN_MULTIPLIER * Math.sin(frame) + 330) || 0;
			if (frame > 100) frame = 0;
			frame += CESSNA_SIN_ADDITIVE;
		};

		function resize() {
			console.log('resize');
		}
	}
});
