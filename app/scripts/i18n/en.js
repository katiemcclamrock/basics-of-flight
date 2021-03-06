define({
	t: function(prop) {
		console.log('TODO: i18n.t()', this);
	},
	// === FORCES
	forces: {
		title: 'Forces',
		description: '<p>To fly an airplane, you have to master the four basic aerodynamic forces: lift, weight, thrust and drag. You can think of them as four arms holding the plane in the air, each pushing them from a different direction. Every aircraft, whether an airplane, helicopter or rocket, is affected by four opposing forces: Thrust, Lift, Drag and Weight.</p>'
	},
	drag: {
		introduction: {
			title: 'What is drag?',
			description: '<p>Drag is a mechanical force. It is generated by the interaction and contact of a solid body with a fluid (liquid or gas). Drag is the aerodynamic force opposing thrust. Often called wind resistance, it slows an airplane down as it moves through the air.There are many types of drag, but each is a force opposing thrust.  There are many factors that affect drag. We can group these factors into (a) those associated with the object, (b) those associated with the motion of the object through the air, and (c) those associated with the air itself.</p>'
		},
		science: {
			title: 'How is drag calculated?',
			equation: 'F<sub>D</sub> = 1/2pv<sup>2</sup>C<sub>D</sub>A',
			description: '<p>Drag is a force and is therefore a vector quantity having both a magnitude and a direction. Drag acts in a direction that is opposite to the motion of the aircraft. Drag also depends on the properties of the fluid and on the size, shape, and speed of the object.</p>' +
				    '<p>FD is the drag force, ρ is the density of the fluid, v is the speed of the object relative to the fluid, A is the cross-sectional area, and CD is the drag coefficient – a dimensionless number</p>'
		},
		history: {
			title: 'Drag Breakthroughs',
			figure: 'throwaway-wrights.jpg',
			description: '<p>Aviation technology developed rapidly following the Wright Brothers first flight. By 1947, Chuck Yeager broke the sound barrier in the Bell X-1. The Air Force and Navy were immediately looking for the next generation of aircraft that could operate at supersonic speeds. However, it quickly became apparent that the sharp increase in drag from flying at such high speeds was creating development problems.</p>' +
				'<p>Richard T. Whitcomb, a young aerodynamicist at the National Advisory Committee for Aeronautics (NACA) came up with a solution with the development of the &ldquo;area rule.&rdquo; This revolutionized how engineers looked at high-speed drag and impacted the design of virtually every transonic and supersonic aircraft ever built.</p>' +
				'<p>Whitcomb was part of the team that developed a slotted throat modification to an eight foot wind tunnel enabling NACA to test transonic speeds. For the first time investigators had a chance to see what happened to airflow at the speed of sound. Ultimately, researchers found that shock waves created by airflow at the speed of sound were different and bigger than anticipated.</p>' +
				'<p>Whitcomb figured out that the shockwaves were larger around the wing and the fuselage. Something had to be done to compensate for the increase in cross sectional area around the wing and the fuselage. An early solution was to indent the fuselage in the area, creating "coke" bottle effect.</p>'
		},
		quiz: [
			{
				question: 'What happens to the plane when it reaches an altitude of ?????',
				correctAnswer: 0,
				answers: [
					'It goes slower',
					'It turns left',
					'It goes faster',
				]
			}
		]
	},
	lift: {
		introduction: {
			title: 'What is lift?',
			description: '<p>Lift is the force that pulls the airplane into the air. Wings and helicopter rotors are different methods of producing lift. Lift acts perpendicular to the motion so whichever the direction the airfoil is pointed in, lift will be generated perpendicular to that direction.</p>'
		},
		science: {
			title: 'The Science of Lift',
			//equation: 'L\' =  \rho v \Gamma\,',
			description: '<p>There are two prominent physic principles that come into play to create lift. Bernoulli&rsquo;s Principle and Newton&rsquo;s Third Law.</p>' +
				'<p>Bernoulli&rsquo;s principle states that an increase in flow creates a decrease in pressure. When airflow hits the rounded edge of an airfoil the air about the wing travels faster than the air below. The pressure below the wing is higher than the air pressure above the wing. This difference in pressure creates lift. Lift pushes the wings upward.</p>' +
				'<p>Newton&rsquo;s Third Law states that for every action there is an equal and opposite reaction. Birds fly by moving their wings. Their wings push the air downwards. The equal reaction to this is the air also pushing the bird&rsquo;s wings upwards.</p>'
		},
		history: {
			title: 'Some History of Lift',
			figure: 'throwaway-kutta.jpg',
			description: '<p>Otto Lilienthal was a German engineer who from 1891-1896 succeeded with many different glider flights and designs. He died testing a glider, but his ideas lived on in his book, Birdflight: The Basis of Aviation.</p>' +
				'<p>This book was used by Orville and Wilbur Wright. They were inspired by Lilienthal&rsquo;s early aviation experiments and research and wanted to expand on his knowledge. Wilbur Wright stated, &ldquo;As a missionary he was wonderful. He presented the cause of human flight to his readers so earnestly, so attractively, and so convincingly that it was difficult for anyone to resist the temptation to make an attempt at it himself, …he was without question the greatest of the precursors, and the world owes to him a great debt.&ldquo;</p>' +
				'<p>In the early 1900s the Wrights started testing gliders they had built to test lift. After disappointing test flights they began retesting Lilienthal&rsquo;s lift theory. It was from this belief that they built their wind tunnel. They began testing airfoils and figured out that Lilienthal&rsquo;s theories of lift needed to be modified. Almost every aspect of the Wright&rsquo;s scientific approach can be linked to Lilenthal&rsquo;s work.</p>' +
				'<p>Including theories based on observation, design based on reliable data, experiments carried out in controlled environments and recorded in detail. When they began to question his experimental data following the disappointing flights of 1901, they began their wind tunnel experiments to confirm his work, not disprove it.</p>'
		},
		quiz: [
			{
				question: 'What happens to the plane as its lift increases?',
				answers: [
					'It goes faster.',
					'It loses weight.',
					'It goes slower',
				]
			}
		]
	},
	thrust: {
		introduction: {
			title: 'What is thrust?',
			description: '<p>Thrust is the aerodynamic force that pushes or pulls the airplane forward through the air. Thrust is produced by an aircraft’s propulsion system or engine.</p>' +
				'<p>The direction of the thrust dictates the direction in which the aircraft will move. For example, the engines on an airliner point backwards, which means that generally speaking, the airplane’s thrust vector will point forwards.</p>'
		},
		science: {
			title: 'How is thrust calculated?',
			equation: 'T = (dm / dt) * v',
			description: '<p>T is the thrust generated (force){dm} {dt} is the rate of change of mass with respect to time (mass flow rate of exhaust); v is the speed</p>',
		},
		history: {
			title: 'The history of thrust',
			figure: 'throwaway-thrust.png',
			description: '<p>Sir George Cayley, born in Scarborough, England, was testing gliders that he built nearly 100 years before the Wright Brothers became first in flight. Cayley was the first to identify the four forces.</p>' +
				'<p>In engineering terms, he was the first to understand lift and thrust. Prior, researchers thought that the propulsion system should generate both lift and forward motion at the same time, just like birds. Flying machines were constructed with flapping wings (called ornithopters) to resemble the motion of birds.</p>' +
				'<p>Cayley realized that the propulsion system should generate thrust but that the wings should be shaped to create lift.</p>'
		},
		quiz: [
			{
				question: 'What happens to the plane as it loses thrust? ',
				answers: [
					'It goes faster',
					'It gets drag',
					'It goes slower',
				]
			}
		]
	},
	weight: {
		introduction: {
			title: 'What is weight?',
			description: '<p>A product of both gravity and the mass of an airplane, draws the plane toward the earth.</p>'
		},
		science: {
			title: 'How is weight calculated?',
			equation: 'W = mg',
			description: '<p>The weight of an object is defined as the force of gravity on the object and may be calculated as the mass times the acceleration of gravity, w = mg</p>' +
									 '<p>Weight is a force that is always directed toward the center of the earth due to gravity. The magnitude of the weight is the sum of all the airplane parts, plus the fuel, people and cargo.</p>' +
									 '<p>While the weight is distributed throughout the entire airplane, its effect is on a single point called the center of gravity.</p>'
		},
		history: {
			title: 'The history of Weight',
			figure: 'throwaway-newton.jpg',
			description: '<p>Airlines have to be sensitive to take-off weight because every pound burns fuel. In aviation&rsquo;s early days, bags were weighed along with people.</p>' +
				'<p>In 1933 when Boeing Air Transport had its inagural flight in a 247, passenger and crew were weighed prior to the flight. Boeing historian Michael Lombardi stated, &ldquo;The 247 was not exactly a 747. The weight of the stewardess and her equipment—lunches, thermos jugs of coffee, blankets, pillows, magazines, fly swatter—was figured in as a constant part of the airplane.&rdquo; The airline had a weight limit of 135 lbs for stewardesses.</p>' +
				'<p>By the early 1950s most U.S. airlines had stopped weighing passengers, but weight before take-off is still important. They relied on the Federal Aviation Administration&rsquo;s (FAA) regulations, which accounts for an average man&rsquo;s weight at 200 lbs and an average woman&rsquo;s weight at 179 lbs. In the winter they add 5 lbs to each.</p>'
		},
		quiz: [
			{
				question: 'What happens to the plane as its weight increases?',
				answers: [
					'It goes faster',
					'It loses lift',
					'It goes slower',
				]
			}
		]
	},

	// === CONTROLS
	controls: {
		title: 'Controls',
		description: '<p>To fly an airplane you have to master manipulating the forces.</p>'
	},
	elevators: {
		introduction: {
			title: 'Elevators',
			description: '<p>There are shaft engines, reaction engines, and now even the Wankel engine.</p>',
		},
		science: {
			equation: '',
			description: '<p>There are shaft engines, reaction engines, and now even the Wankel engine.</p>',
		},
		history: {
			figure: 'throwaway-engine.jpg',
			description: '<p>A Rolls-Royce Merlin installed in a preserved Avro York. From http://en.wikipedia.org/wiki/Aircraft_engine</p>'
		},
		quiz: []
	},
	flaps: {
		introduction: {
			title: 'Flaps',
			description: '<p>Most flaps are located on the trailing edge of each wing, usually between the fuselage and the ailerons, and extend downward (and often outward) from the wing when put into use. The purpose of the flaps is to generate more lift at slower airspeed, which enables the airplane to fly at a greatly reduced speed with a lower risk of stalling.</p>' +
				'<p>This is especially useful during takeoff and landing. When extended further, flaps also generate more drag which slows the airplane down much faster than just reducing throttle.</p>'
		},
		science: {
			equation: '',
			description: '<p>Flaps are responsible for increasing drag.</p>',
		},
		history: {
			figure: 'throwaway-flaps.jpg',
			description: '<p>Flaps are hinged surfaces mounted on the trailing edges of the wings of a fixed-wing aircraft to reduce the speed at which an aircraft can be safely flown and to increase the angle of descent for landing. They shorten takeoff and landing distances. Flaps do this by lowering the stall speed and increasing the drag.</p>'
		},
		quiz: [
			{
				question: 'What happens to the plane as the flaps are down?',
				answers: [
					'It goes up',
					'It gets drag',
					'It goes down'
				]
			}
		]
	},
	ailerons: {
		introduction: {
			title: 'What&rsquo;s an aileron?',
			description: '<p>Ailerons are small hinged sections on the outboard portion of a wing. Ailerons usually work in opposition: while one moves down the other moves up.</p>' +
				'<p>Their job is to increase the lift on one wing and reduce the lift on the other. This rolls the aircraft sideways allowing it to turn. Airplanes turn because of banking created by the ailerons, not because of rudder input.</p>'
		},
		science: {
			equation: 'F = m * a',
			description: '<p>French for &lsquo;little wing&rsquo;</p>',
		},
		history: {
			figure: 'throwaway-aileron.gif',
			description: '<p>Glenn Curtiss was one of many innovators that expanded on the idea of wing warping developed by the Wright Brothers. He developed an aileron that gave aircraft more lateral control.</p>' +
			 '<p>Curtiss was born in 1878 in Hammondsport, New York. Similar to the Wright Brothers, Curtiss opend a bicycle shop and manufactured his own bikes. He later started another company and developed the Hercules motorcycle. The motorized engines on his bikes were the best in the country. It was his work with engines that brought him into the aviation realm.</p>' +
			 '<p>Early aviatiors asked him to supply engines for their aircrafts. In 1908, Curtiss attracted the attention of Alexander Graham Bell, the telephone inventor. Curtiss joined Bell and others to start the Aerial Experiment Association. Curtiss made a controlled flight of over 1,000 feet in an aircraft called the White Wing. This was the first American aircraft to use ailerons for control purposes. Curtiss designed an aircraft called the June Bug, providing it with wing flaps that would later be known as ailerons.</p>'
		},
		quiz: [
			{
				question: 'What happens to the plane as the rudder left is on the right?',
				answers: [
					'It goes right',
					'It goes left',
					'It goes faster',
				]
			}
		]
	},
	rudder: {
		introduction: {
			title: 'Rudder',
			description: '<p>The rudder is the small moving section at the rear of the vertical stabilizer. Because the rudder moves, it varies the amount of force generated by the tail surface and is used to generate and control the yawing motion of the aircraft.</p>',
		},
		science: {
			equation: 'W = mg',
			description: '',
		},
		history: {
			figure: 'throwaway-rudder.gif',
			description: '<p>The rudder is a directional control surface along with the rudder-like elevator. It is usually attached to the fin  which allows the pilot to control yaw about the vertical axis, i.e. change the horizontal direction in which the nose is pointing.</p>'
		},
		quiz: [
			{
				question: 'What happens to the plane as the elevators are up?',
				answers: [
					'It goes up',
					'It goes down',
					'It goes slower',
				]
			}
		]
	},

	// === PREFLIGHT
	preflight: {
		title: 'Preflight',
		description: '<p>Every flight is preceded by a preflight inspection of the airplane. Here you can follow the steps of the preflight inspection to prepare your Cessna for takeoff.</p>'
	},
	interior: {
		introduction: {
			title: 'The Interior',
			description: '<p>You will need to make sure all cockpit equipment is operating and the fuel tanks have sufficient fuel for your flight.</p>',
		},
		history: {
			figure: 'throwaway-engine.jpg',
			description: '<p>A Rolls-Royce Merlin installed in a preserved Avro York. From http://en.wikipedia.org/wiki/Aircraft_engine</p>'
		},
		part: {
			'wing': '<p>Begin at the right wing and look at the forward wing surface for nicks, loose fasteners, dents, or other damage. Look at the flight control surfaces, flaps, and ailerons. Make sure that items are secure and have no loose fasteners.</p>',
			'wing fuel tank': '<p>Remove the fuel cap(for wing fuel tanks) and visually confirm they have sufficient fuel to make your flight. Drain a small quantity of fuel from the right fuel tankdrain valve and check for water, sediment and proper fuel grade. Replace the fuel cap securely.</p>',
			'tail assembly': '<p>Move to the tail assembly. While at the tail, you may remove the wheel chock or tail tie-down. Look at the elevators and the rudder. As with all control surfaces, these should be tight, with no loose motion or free play.</p>',
			'left wing fuel tank': '<p>Move to the opposite side of the aircraft, continuig to look over the aircraftskin as you reach the left wing. Remove the fuel cap and look into the tank to be sure it is fuelled, replacethe tank cap securely, and check out the control surfaces (again, the ailerons and flaps).</p>',
			'left wing ailerons and flaps': '<p>Check the engine oil, the ignition wires, the magneto electrical connections, and the fuel lines and other hoses to be sure they are seated properly and tightly clamped.</p>',
			'engine oil, ignition wires': '<p>Move to the front of the aircraft. Check the engine oil, the ignition wires, the magneto electrical connections, and the fuel lines and other hoses to be sure they are sealedproperly and tightlyclamped. Look at the alternator belt to make sure it is tight, and air intake to be sure it is not obstructed.</p>'
		}
	},
	exterior: {
		introduction: {
			title: 'The Exterior',
			description: '<p>During the exterior part of the pre-flight inspection, look for anything that appears to be mechanically unsound. Items such a loose or missing rivets or fasteners, wrinkled surfaces, or anything that just does not look right should be suspect. If in doubt, do not fly!</p>',
		},
		part: {
			'registration': '<p>Make sure the aircraft registration, certification, and other paperwork is in the cabin and up to date.</p>',
			'master power': '<p>Turn on the master power switch</p>',
			'fuel gauges': '<p>Check the fuel gaugues. If the fuel is low, call for the service truck to bring your fuel out while you continue to do the rest of your checks.</p>',
			'sounds': '<p>Listen to the sounds of equipment powering on. Radio cooling fans, instrument gyros, and other equipment make noticeable sounds and when unusual sounds are heard, it may be a warning an instrument or radio could fail in flight.</p>',
			'flaps, landing gear': '<p>Check flaps, landing gear lockdown levers, and other flight controllers for smooth, normal function.</p>'
		}
	},

	t: {
		closeSection: 'Close Section',
		correctAnswers: 'Correct Answers',
		altitude: 'Altitude',
		speed: 'Speed',
		gravity: 'Gravity',
		weight: 'Weight',
		drag: 'Drag',
		lift: 'Lift',
		thrust: 'Thrust',
		elevators: 'Elevators',
		flaps: 'Flaps',
		ailerons: 'Ailerons',
		rudder: 'Rudder',
		answeredCorrectly: 'Correct! You got it right!',
		answeredIncorrectly: 'I&rsquo;m sorry. That&rsquo;s not quite right. Try again?',
		touchToEnter: 'Touch to enter'
	}
});

