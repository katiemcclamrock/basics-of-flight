define(['./template'], function(template) {
	'use strict';
	var card = function() {/***
		<div class="card">
			<div class="card-primary">
				<h1>{{ title }}</h1>
				<p>{{ description }}</p>
			</div>
		</div>
	***/
	};

	return template(card);
});



