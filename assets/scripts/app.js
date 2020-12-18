const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Data Structure",
				weight: 12.3
			}, {
				text: "Algorithm",
				weight: 8
			}, {
				text: "Competitive Programming",
				weight: 14
			}, {
				text: "Cloud Application Development",
				weight: 3
			}, {
				text: "Problem Solving",
				weight: 7
			}, {
				text: "Design Patterns with Java",
				weight: 10
			}, {
				text: "REST API",
				weight: 9
			}, {
				text: "Microservice",
				weight: 15
			}, {
				text: "Fintech",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Java Web Developer.", "love everything about code.", "love to solve problems.", "also love to learn and work with new technologies."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
