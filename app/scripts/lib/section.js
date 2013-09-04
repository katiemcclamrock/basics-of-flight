define([
	'../lib/helpers',
	'../views/sectionCard',
	'../lib/quiz',
	'../config',
	'../i18n/en',
], function(helper, card, Quiz, config, i18n) {
	'use strict';

	window.i18n = i18n;

	function Section() {
		this.name = this.constructor.toString().match(/^function (\w+)/)[1];
		this.interactive = document.createElement('div');
		this.interactive.classList.add('interactive');

		this.canvas = document.createElement('canvas');
		this.canvas.style.position = 'absolute';

		this.interactive.appendChild(this.canvas);

		var tmp = document.createElement('div');
		tmp.innerHTML = card(i18n[this.name.toLowerCase()]);
		this.card = tmp.firstChild;
		this.handleTap = this.handleTap.bind(this);
		this.isActive = false;
		this.init();
	}

	Section.prototype = {
		paperScope: undefined,
		paperProject: undefined,
		paperView: undefined,
		_page: undefined,
		_film: undefined,
		_quiz: undefined,
		init: function init(){},

		page: function(page) {
			if (page) this._page = page;
			return this._page;
		},

		film: function(url) {
			this._film = url;
			return this;
		},

		quiz: function(questions) {
			this._quiz = new Quiz(questions);
			this._quiz.appendTo(this.card.querySelector('.card-content[data-role="quiz"]'));
			return this;
		},

		activate: function activate() {
			if (this.isActive) return false;

			if (config.logger.sectionLifeCycle)
			 	config.logger.sectionLifeCycleFn.call(this, 'activate');

			if (!(this._page && this._page.element)) return;

			Hammer(this._page.element).on('tap', this.handleTap);

			this._page.rotateIn(this.card, 'north');
			this.startInteraction();
			this.isActive = true;
		},

		deactivate: function deactivate() {
			if (!this.isActive) return false;

			if (config.logger.sectionLifeCycle)
			 	config.logger.sectionLifeCycleFn.call(this, 'deactivate');

			if (!(this._page && this._page.element)) return;

			Hammer(this._page.element).off('tap', this.handleTap);
			this.stopInteraction();
			this.isActive = false;
		},

		startInteraction: function startInteraction(interaction) {
			this._page.element.insertBefore(this.interactive, this._page.element.firstChild);

			var section = this;
			if (interaction) {
				setImmediate(function() {
					interaction.setup(section.canvas);
					helper.createPaperScript(section, section.canvas, interaction.paperScript);
					if (config.logger.paperjsScope)
						config.logger.paperjsScopeFn.call(section, section.canvas.id);
				});
			}

			if (config.logger.sectionLifeCycle)
				config.logger.sectionLifeCycleFn.call(this, 'startInteraction');
		},

		stopInteraction: function stopInteraction() {
			if (this._page.element.contains(this.interactive))
				this._page.element.removeChild(this.interactive);

			helper.cleanupPaperScript(this);

			if (config.logger.sectionLifeCycle)
				config.logger.sectionLifeCycleFn.call(this, 'stopInteraction');
		},

		show: function show(section, targetButton) {
			var el, fn;
			if (section !== 'film') {
				el = this.card.querySelector('.card-content--active');
				el.classList.remove('card-content--active');
				el.classList.add('card-content--inactive');

				el = this.card.querySelector('.card-content[data-role="' + section + '"]');
				el.classList.remove('card-content--inactive');
				el.classList.add('card-content--active');

				if (targetButton) {
					el = (targetButton.matches('.btn-go-back')) ?
						this.card.querySelector('.btn--is-active') :
						targetButton.parentNode.querySelector('.btn--is-active');

					if (el) el.classList.remove('btn--is-active');

					// go back to index selector doesn't get this class
					if (!targetButton.matches('.btn-go-back'))
						targetButton.classList.add('btn--is-active');
				}
			}

			else {
				// close modal
				fn = function fn(_el) {
					el || (el = _el);
					el.parentNode.removeChild(el);
					el.classList.remove('modal--active');
					el.textContent = '';
					Hammer(el).off('tap', window.closeModal);
				}

				el = document.createElement('div');
				el.classList.add('modal');
				el.innerHTML = '<iframe width="900" height="600" src="' + this._film + '" frameborder="0" allowfullscreen></iframe>'
				el.appendChild(document.createElement('div'))
				el.lastChild.classList.add('modal-backdrop');
				this._page.element.appendChild(el);
				el.classList.add('modal--active');
				setTimeout(function() {
					// hack to let the close Modal be called globally
					window.closeModal = fn;
					Hammer(el).on('tap', fn);
				}, 4);
			}

			if (config.logger.sectionLifeCycle)
				config.logger.sectionLifeCycleFn.call(this, 'show#' + section);
		},

		handleTap: function(e) {
			var matches = helper.toArray(this.card.querySelectorAll('[data-action]'))
				.filter(function(el) {
					return el.contains(e.target);
				}),
				action = (matches[0] || e.target).getAttribute('data-action'),
				args;

			if (action) {
				if ((matches[0] || e.target).matches('.btn--is-active')) return;

				args = action.split('-');
				action = args.shift();
				if (this[action])
					this[action].apply(this, args.concat(matches[0]));
			}

			// Either Hammer's tap event or dynamically adding these labels to the DOM is preventing
			// default behavior so we have to manually handle the radio selected state
			else if (e.target.nodeName.toLowerCase() === 'label') {
				Array.prototype.slice.call(e.target.parentNode.parentNode.querySelectorAll('input[type="radio"]'), 0).forEach(function(el) {
					el.removeAttribute('checked');
				});
				document.getElementById(e.target.getAttribute('for')).setAttribute('checked', 'checked');
			}
		}
	};

	return Section;
});

