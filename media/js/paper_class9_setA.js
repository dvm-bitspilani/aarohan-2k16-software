/*
QUESTION SET : 
	# num - serial number of the question
	# cat - one of the category : chemistry, physics, maths, logic
	# ques - Question text
	# ques_image - link to any image in question if there
	# options - set of options to the question
		# type - type of the option (image/text)
		# desc - if image then link, else text
	correct - correct option (0,1,2,3)
	scoring - marks to get on correct answer, wrong answer, unattempted (idiots !)

	Hope this is more than clear !!!
*/


var set = [ 
	{ 'num' : 1, 'cat' : 'chemistry' ,'ques' : 'A diver is able to cut through the water in the sea. Which property of water does not satisfy this observation?', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'Intermolecular forces between the molecules of water are not very strong.'}, {'type' : 'text' , 'desc' : 'Water shows the properties of fluids.'}, {'type' : 'text' , 'desc' : 'Particles of liquid can be easily displaced from their positions.'}, {'type' : 'text' , 'desc' : 'The particles of water take up the shape of container, they are kept into.'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},
	{ 'num' : 2, 'cat' : 'chemistry' ,'ques' : 'What is the value of freezing point of water? <br> (Hint: K = Kelvin scale and T<sub>(°F)</sub> = T<sub>(°C)</sub> × 9/5 + 32)', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '0°C or 373.16 K or 212 Fahrenheit.'}, {'type' : 'text' , 'desc' : '0°C or 0 K or 32 Fahrenheit.'}, {'type' : 'text' , 'desc' : '0°C or 273.16 K or 0 Fahrenheit.'}, {'type' : 'text' , 'desc' : '0°C or 273.16 K or 32 Fahrenheit.'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},
	{ 'num' : 3, 'cat' : 'chemistry' ,'ques' : 'Which is more effective in cooling?', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'Ice at 0°C.'}, {'type' : 'text' , 'desc' : 'Water at 0°C'}, {'type' : 'text' , 'desc' : 'Steam at 100°C.'}, {'type' : 'text' , 'desc' : 'Water at 100°C.'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},
	{ 'num' : 4, 'cat' : 'chemistry' ,'ques' : 'Who proposed law of definite proportions?', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'Joseph Proust.'}, {'type' : 'text' , 'desc' : 'Lavoisier'}, {'type' : 'text' , 'desc' : 'John Dalton.'}, {'type' : 'text' , 'desc' : 'Ostwald'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},
	{ 'num' : 5, 'cat' : 'chemistry' ,'ques' : 'Formula for aluminum oxide is _____?', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'AlO<sub>3</sub>'}, {'type' : 'text' , 'desc' : 'AlO'}, {'type' : 'text' , 'desc' : 'Al<sub>2</sub>O<sub>3</sub>'}, {'type' : 'text' , 'desc' : 'Al<sub>2</sub>O'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},
	{ 'num' : 6, 'cat' : 'chemistry' ,'ques' : 'The element X is tetravalent and Y is trivalent. Which of the following is possible ?', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'X<sub>4</sub>Y<sub>3</sub>'}, {'type' : 'text' , 'desc' : 'X<sub>2</sub>Y<sub>3</sub>'}, {'type' : 'text' , 'desc' : 'X<sub>3</sub>Y<sub>4</sub>'}, {'type' : 'text' , 'desc' : 'X<sub>3</sub>Y<sub>2</sub>'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},
	{ 'num' : 7, 'cat' : 'chemistry' ,'ques' : 'Which of the following are not affected by electric or magnetic field ?', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'Proton'}, {'type' : 'text' , 'desc' : 'Anode Ray'}, {'type' : 'text' , 'desc' : 'Cathode Ray'}, {'type' : 'text' , 'desc' : 'Neutron'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},
	{ 'num' : 8, 'cat' : 'chemistry' ,'ques' : 'The total number of electrons in Al<sup>+3</sup> ion is ________ ?', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '10'}, {'type' : 'text' , 'desc' : '13'}, {'type' : 'text' , 'desc' : '24'}, {'type' : 'text' , 'desc' : '11'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},
	
	{ 'num' : 9, 'cat' : 'chemistry' ,'ques' : 'Electrons present in the valence shell are called _______ ?', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'Orbital Electrons'}, {'type' : 'text' , 'desc' : 'Electrons in penultimate shells'}, {'type' : 'text' , 'desc' : 'Valence electrons'}, {'type' : 'text' , 'desc' : 'none of these'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},

	{ 'num' : 10, 'cat' : 'chemistry' ,'ques' : 'Energy packets or bundle of light energy are called______?', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'Anions'}, {'type' : 'text' , 'desc' : 'Cations'}, {'type' : 'text' , 'desc' : 'Pions'}, {'type' : 'text' , 'desc' : 'Photon'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},
	
	{ 'num' : 11, 'cat' : 'physics' ,'ques' : 'Which of the following is called Law of Inertia.', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'Newton’s first law of motion.'}, {'type' : 'text' , 'desc' : 'Newton’s second law of motion.'}, {'type' : 'text' , 'desc' : 'Newton’s third law of motion.'}, {'type' : 'text' , 'desc' : 'Universal law of Gravitation'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},
	
	{ 'num' : 12, 'cat' : 'physics' ,'ques' : 'A body A of mass m covers a distance of x meters in t time. Another body of mass 4m covers a distance of 2x metres in time t/4. Calculate the ratio of momentum of the objects (A: B).', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '1:4'}, {'type' : 'text' , 'desc' : '1:2'}, {'type' : 'text' , 'desc' : '1:16'}, {'type' : 'text' , 'desc' : '1:32'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},

	{ 'num' : 13, 'cat' : 'physics' ,'ques' : 'If a body is acted upon by no force, which of the following is necessary ?', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'The body must be at complete rest.'}, {'type' : 'text' , 'desc' : 'The body must be in uniform motion.'}, {'type' : 'text' , 'desc' : 'The body must not be accelerating.'}, {'type' : 'text' , 'desc' : 'None of the above'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},
	
	{ 'num' : 14, 'cat' : 'physics' ,'ques' : '[ The marks allotment will be in Arithmetic progression with Q 14 carrying 3 marks and increasing at the rate of 1 mark per question till Q 17. This means, Q 14 carries 3 marks, Q 15 carries 4 marks and Q 16 carries 5 marks. NEGATIVE MARKS AWARDED PER QUESTION IS EQUAL TO POSITIVE MARKS ALLOTTED TO RESPECTIVE QUESTION. ] <br><br> Read the following paragraph and answer the following questions (Q 14 to Q 17)-<br> An astronaut of mass 60 kg is at rest in space, 60 metres away from his spaceship. He is wearing his spacesuit and is not attached to the spaceship by means of rope, cable, etc. Suddenly he sneezes, and air of mass 10 grams leaves his mouth at the speed of 45 m/s in 0.001 second.<br><br>How far will the astronaut be from his spaceship after 1 second? ', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '105m'}, {'type' : 'text' , 'desc' : '0m'}, {'type' : 'text' , 'desc' : '60m'}, {'type' : 'text' , 'desc' : '2760m'}], 'correct' : 0, 'scoring' : [3,-3,0.5]},

	{ 'num' : 15, 'cat' : 'physics' ,'ques' : 'What will be his velocity after 0.01 second after sneezing ?', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '45 m/s'}, {'type' : 'text' , 'desc' : '9 m/s'}, {'type' : 'text' , 'desc' : '22.5 m/s'}, {'type' : 'text' , 'desc' : 'None of the above'}], 'correct' : 0, 'scoring' : [4,-4,0.5]},
	
	{ 'num' : 16, 'cat' : 'physics' ,'ques' : 'Using the above analogy, determine in which of the following situations there will be a change in state of motion or change in velocity of the bus (friction between bus and road is small).', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'A person standing inside a stationary bus and pushing it forward'}, {'type' : 'text' , 'desc' : 'A person standing outside a stationary bus and pushing it forward.'}, {'type' : 'text' , 'desc' : 'A person standing inside a moving bus and pushing it backward.'}, {'type' : 'text' , 'desc' : 'None of the above'}], 'correct' : 0, 'scoring' : [5,-5,0.5]},

	{ 'num' : 17, 'cat' : 'physics' ,'ques' : 'What is the reading on a spring balance attached to a mass 2kg in outer space ?', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '20 N'}, {'type' : 'text' , 'desc' : '19.6 N'}, {'type' : 'text' , 'desc' : '0 N'}, {'type' : 'text' , 'desc' : '2 N'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},
	
	{ 'num' : 18, 'cat' : 'physics' ,'ques' : 'Two objects A (m= 60 gm) and B (m= 30 gm) are travelling in opposite directions towards each other with speed of 15 m/s each. They collide and A comes to rest immediately after the collision. Find the speed of B immediately after collision.', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '15 m/s'}, {'type' : 'text' , 'desc' : '90 m/s'}, {'type' : 'text' , 'desc' : '10 m/s'}, {'type' : 'text' , 'desc' : '45 m/s'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},

	{ 'num' : 19, 'cat' : 'physics' ,'ques' : 'SI unit of retardation is -', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'm/s<sup>2</sup>'}, {'type' : 'text' , 'desc' : 'km/s<sup>2</sup>'}, {'type' : 'text' , 'desc' : 'm-s'}, {'type' : 'text' , 'desc' : 'Both A and B'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},
	
	{ 'num' : 20, 'cat' : 'physics' ,'ques' : 'A frame that travels with a constant velocity in a straight line and without any rotation is called ____ ?', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'Non inertial frame'}, {'type' : 'text' , 'desc' : 'Inertial frame'}, {'type' : 'text' , 'desc' : 'Non-rotatory frame'}, {'type' : 'text' , 'desc' : 'Stationary frame'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},

	{ 'num' : 21, 'cat' : 'mathematics' ,'ques' : 'The number of lines which can pass through a single point are -', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '1'}, {'type' : 'text' , 'desc' : '2'}, {'type' : 'text' , 'desc' : '100'}, {'type' : 'text' , 'desc' : 'Infinite'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},

	{ 'num' : 22, 'cat' : 'mathematics' ,'ques' : 'Sum of two supplementary and complementary angles, respectively is -', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '360, 90'}, {'type' : 'text' , 'desc' : '90. 180'}, {'type' : 'text' , 'desc' : '90, 90'}, {'type' : 'text' , 'desc' : '180, 90'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},

	{ 'num' : 23, 'cat' : 'physics' ,'ques' : '[Q 23 will be awarded 3 marks if answered correctly. If answered incorrectly 3 marks will be deducted. 0.5 marks will be awarded if not attempted] <br><br>“Three points should always lie on a same line”. This statement is _____.', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'TRUE'}, {'type' : 'text' , 'desc' : 'FALSE'}], 'correct' : 0, 'scoring' : [3,-3,0.5]},

	{ 'num' : 24, 'cat' : 'mathematics' ,'ques' : 'Find the value of k if 4x+ky = 9k passes through (2, 7)', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '2'}, {'type' : 'text' , 'desc' : '1'}, {'type' : 'text' , 'desc' : '4'}, {'type' : 'text' , 'desc' : '8'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},

	{ 'num' : 25, 'cat' : 'mathematics' ,'ques' : 'A solid right circular cylinder has radius 2 cm and height 4 cm. Find its curved surface area and volume.', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '32ᴨ cm<sup>2</sup> , 32ᴨ cm<sup>3</sup>'}, {'type' : 'text' , 'desc' : '16ᴨ cm<sup>2</sup> , 16ᴨ cm<sup>3</sup>'}, {'type' : 'text' , 'desc' : '16ᴨ cm<sup>2</sup> , 32ᴨ cm<sup>3</sup>'}, {'type' : 'text' , 'desc' : '32ᴨ cm<sup>2</sup> , 16ᴨ cm<sup>3</sup>'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},

	{ 'num' : 26, 'cat' : 'physics' ,'ques' : 'Coefficient of x<sup>2</sup> in (x<sup>2</sup> + y<sup>2</sup> +2xy)(x<sup>3</sup> + y + x) is-', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '2 + y'}, {'type' : 'text' , 'desc' : '3y'}, {'type' : 'text' , 'desc' : '0'}, {'type' : 'text' , 'desc' : '9'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},

	{ 'num' : 27, 'cat' : 'mathematics' ,'ques' : 'The standard deviation of the following observation is- <br>\t\t12, 12, 12, 12, 12, 12, 12, 12, 12, 12.', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '12'}, {'type' : 'text' , 'desc' : '0'}, {'type' : 'text' , 'desc' : '120'}, {'type' : 'text' , 'desc' : '10'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},

	{ 'num' : 28, 'cat' : 'mathematics' ,'ques' : 'a = 1 - (2)<sup>0.5</sup>. Then (a + 1/a) is - ', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '(2)<sup>0.5</sup>'}, {'type' : 'text' , 'desc' : '2'}, {'type' : 'text' , 'desc' : '2*(2)<sup>0.5</sup>'}, {'type' : 'text' , 'desc' : '1'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},

	{ 'num' : 29, 'cat' : 'mathematics' ,'ques' : 'Find the value of angle x if AB is parallel to DE.', 'ques_img' : 'media/qimg/class9_setA/q29.jpg', 'options' : [{'type' : 'text' , 'desc' : '100°'}, {'type' : 'text' , 'desc' : '120°'}, {'type' : 'text' , 'desc' : '140°'}, {'type' : 'text' , 'desc' : '90°'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},

	{ 'num' : 30, 'cat' : 'mathematics' ,'ques' : 'In a rhombus ABCD the measure of angle A is 75°. The measure of angle B in degrees is - ', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '15'}, {'type' : 'text' , 'desc' : '105'}, {'type' : 'text' , 'desc' : '115'}, {'type' : 'text' , 'desc' : '95'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},

	{ 'num' : 31, 'cat' : 'logical reasoning' ,'ques' : '<b>Sue:</b> Commercial flights currently contribute more carbon dioxide to the atmosphere in one year than does the whole of Africa. If we want to reduce global warming we need to restrict the number of flights we take. <br><b>Dave:</b> Did you know that by taking one inter-continental flight you cause more pollution than you would in twelve months of car travel?<br><br> Dave’s response to Sue’s comment serves to', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'Reinforce Sue’s contention that flights are a major contributor to increased carbon dioxide levels '}, {'type' : 'text' , 'desc' : 'add more weight to her contention that we should reduce the number of flights we take'}, {'type' : 'text' , 'desc' : 'mitigate the force of her argument by suggesting that there is an alternative approach '}, {'type' : 'text' , 'desc' : 'suggest an alternative that will reduce the effect of pollution '}], 'correct' : 0, 'scoring' : [3,-1,0.5]},

	{ 'num' : 32, 'cat' : 'logical reasoning' ,'ques' : 'Josh has twenty years of typing experience behind him; therefore, if you are looking for an efficient typist to enter your data into the new system, you need look no further.The speaker assumes that', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'Twenty years of practice ensures typing efficiency'}, {'type' : 'text' , 'desc' : 'The type of typing required for the new system is identical to what Josh has been doing'}, {'type' : 'text' , 'desc' : 'Josh’s job profile is the best that the new employer is going to get '}, {'type' : 'text' , 'desc' : 'Josh is an outstandingly fast and accurate typist'}], 'correct' : 0, 'scoring' : [3,-1,0.5]},

	{ 'num' : 33, 'cat' : 'logical reasoning' ,'ques' : '', 'ques_img' : 'media/qimg/class9_setA/q33.jpg', 'options' : [{'type' : 'image' , 'desc' : 'media/qimg/class9_setA/a33.0.jpg'}, {'type' : 'image' , 'desc' : 'media/qimg/class9_setA/a33.1.jpg'}, {'type' : 'image' , 'desc' : 'media/qimg/class9_setA/a33.2.jpg'}, {'type' : 'image' , 'desc' : 'media/qimg/class9_setA/a33.3.jpg'} ], 'correct' : 0, 'scoring' : [3,-1,0.5]},

	{ 'num' : 34, 'cat' : 'logical reasoning' ,'ques' : '4, 7, 12, 19, 28, ____ ? ', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '30'}, {'type' : 'text' , 'desc' : '36'}, {'type' : 'text' , 'desc' : '39'}, {'type' : 'text' , 'desc' : '49'} ], 'correct' : 0, 'scoring' : [3,-1,0.5]},


	{ 'num' : 35, 'cat' : 'logical reasoning' ,'ques' : 'In the given series either one term is missing or is wrong which has been given as one of the four alternatives under it find that. <br><br>2, 3, 5, 8, 13, 34 ', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '21'}, {'type' : 'text' , 'desc' : '25'}, {'type' : 'text' , 'desc' : '29'}, {'type' : 'text' , 'desc' : '34'} ], 'correct' : 0, 'scoring' : [3,-1,0.5]},


	{ 'num' : 36, 'cat' : 'logical reasoning' ,'ques' : 'Find the term which does not fit into the series: <br><br>1CV, 5FU, 9IT, 15LS, 17OR ', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '5FU'}, {'type' : 'text' , 'desc' : '15LS'}, {'type' : 'text' , 'desc' : '9IT'}, {'type' : 'text' , 'desc' : '17OR'} ], 'correct' : 0, 'scoring' : [3,-1,0.5]},


	{ 'num' : 37, 'cat' : 'logical reasoning' ,'ques' : '8 : 512 :: _____?', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '7 : 343 '}, {'type' : 'text' , 'desc' : '9 : 243'}, {'type' : 'text' , 'desc' : '10 : 500 '}, {'type' : 'text' , 'desc' : '5 : 75 '} ], 'correct' : 0, 'scoring' : [3,-1,0.5]},


	{ 'num' : 38, 'cat' : 'logical reasoning' ,'ques' : 'A woman says, "If you reverse my own age, the figures represent my husband\'s age. He is, of course, senior to me and the difference between our ages is one-eleventh of their sum." The woman\'s age is ', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '23 years'}, {'type' : 'text' , 'desc' : '34 years'}, {'type' : 'text' , 'desc' : '45 years'}, {'type' : 'text' , 'desc' : 'None of the above'} ], 'correct' : 0, 'scoring' : [3,-1,0.5]},

	{ 'num' : 39, 'cat' : 'logical reasoning' ,'ques' : 'Find the missing character from the given figure? ', 'ques_img' : 'media/qimg/class9_setA/q39.jpg', 'options' : [{'type' : 'text' , 'desc' : '144'}, {'type' : 'text' , 'desc' : '215'}, {'type' : 'text' , 'desc' : '50'}, {'type' : 'text' , 'desc' : '10'} ], 'correct' : 0, 'scoring' : [3,-1,0.5]},

	{ 'num' : 40, 'cat' : 'logical reasoning' ,'ques' : '16 26 56 36 46 68 56 ___  ___ ? ', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : '80 66'}, {'type' : 'text' , 'desc' : '64 82'}, {'type' : 'text' , 'desc' : '66 80'}, {'type' : 'text' , 'desc' : '78 68'} ], 'correct' : 0, 'scoring' : [3,-1,0.5]},


	{ 'num' : 41, 'cat' : 'logical reasoning' ,'ques' : 'Synonym of Enigma is - ', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'Question'}, {'type' : 'text' , 'desc' : 'Puzzle'}, {'type' : 'text' , 'desc' : 'Answer'}, {'type' : 'text' , 'desc' : 'Content'} ], 'correct' : 0, 'scoring' : [3,-1,0.5]},


	{ 'num' : 42, 'cat' : 'logical reasoning' ,'ques' : 'Antonym of Audacious is -', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'Brilliant'}, {'type' : 'text' , 'desc' : 'Powerful'}, {'type' : 'text' , 'desc' : 'Bold'}, {'type' : 'text' , 'desc' : 'Frightening'} ], 'correct' : 0, 'scoring' : [3,-1,0.5]},


	{ 'num' : 43, 'cat' : 'logical reasoning' ,'ques' : 'Change the voice of the following sentence<br><br>You can play with these kittens quite safely.', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'These kittens can played with quite safely.'}, {'type' : 'text' , 'desc' : 'These kittens can play with you quite safely.'}, {'type' : 'text' , 'desc' : 'These kittens can be played with you quite safely.'}, {'type' : 'text' , 'desc' : 'These kittens can be played with quite safely.'} ], 'correct' : 0, 'scoring' : [3,-1,0.5]},


	{ 'num' : 44, 'cat' : 'logical reasoning' ,'ques' : 'Change the voice of the following sentence<br><br>A child could not have done this mischief.', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'This mischief could not be done by a child.'}, {'type' : 'text' , 'desc' : 'This mischief could not been done by a child.'}, {'type' : 'text' , 'desc' : 'This mischief could not have been done by a child.'}, {'type' : 'text' , 'desc' : 'This mischief a child could not have been done.'} ], 'correct' : 0, 'scoring' : [3,-1,0.5]},


	{ 'num' : 45, 'cat' : 'logical reasoning' ,'ques' : 'Which is correct spelling ?', 'ques_img' : null, 'options' : [{'type' : 'text' , 'desc' : 'Rogun'}, {'type' : 'text' , 'desc' : 'Colleague'}, {'type' : 'text' , 'desc' : 'Diluge'}, {'type' : 'text' , 'desc' : 'Alege'} ], 'correct' : 0, 'scoring' : [3,-1,0.5]}




	
	
	]