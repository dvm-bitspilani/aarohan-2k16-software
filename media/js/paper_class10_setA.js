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
   {  
      "num":1,
      "cat":"chemistry",
      "ques":"[ The marks allotment will be in Arithmetic progression with Q 1 carrying 3 marks and increasing at the rate of 1 mark per question till Q 3. This means, Q 1 carries 3 marks, Q 2 carries 4 marks and Q 3 carries 5 marks. NEGATIVE MARKS AWARDED PER QUESTION IS EQUAL TO POSITIVE MARKS ALLOTTED TO RESPECTIVE QUESTION. ] <br><br> Read the following paragraph and answer the following questions (Q 1 to Q 3)-<br> Electrons tend to arrange themselves around nuclei so that they have the lowest possible energy. They would all like to get into the lowest energy level, sometimes called the K-shell, but are prevented from doing so by some rules that pop up in quantum mechanics. Each shell contains subshells inside them. Electrons are filled up into various subshells according to some rules. <br><ol><li>Electrons are not filled inside new subshell until previous subshell isn’t completely filled</li><li>Electrons are filled such that they maintain the lowest energy level possible.</li><li>Energy order of subshells is = s < p < d < f and of shells is = K < L < M < N</li></ol><br> You can see how electrons are arranged in a particular atom by taking a look at Periodic Table of Elements and the table below.<br><table><tr><th>energy level</th><th>sub-shells</th><th>number of electrons</th></tr><tr><td>k-shell</td><td>s</td><td>2(2 in s)</td></tr><tr><td>l-shell</td><td>s,p</td><td>8(2 in s, 6 in p)</td></tr><tr><td>m-shell</td><td>s.p.d</td><td>18(2 in s,6 in p,10 in d,14 in f)</td></tr><tr><td>n-shell</td><td>s,p,d,f</td><td>32(2 in s,6 in p,10 in d, 14 in f)</td></tr></table><br>The syntax for writing electronic configurations is < shell_name > < subshell_name > < no. of electrons >:-<br>Example- electronic configuration of helium (2 electrons) is written as 1s<sup>2</sup>.<br>Electronic configuration of boron (5 electrons) is written as 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>1</sup>.<br>Now answer the following questions-<br>What is the electronic configuration of Oxygen? (Hint: O has 8 electrons)",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup>."
         },
         {  
            "type":"text",
            "desc":"1s<sup>2</sup>2s<sup>2</sup>3s<sup>2</sup>4s<sup>2</sup>."
         },
         {  
            "type":"text",
            "desc":"1s<sup>2</sup>2p<sup>2</sup>2s<sup>4</sup>"
         },
         {  
            "type":"text",
            "desc":"1s<sup>8</sup>."
         }
      ],
      "correct":0,
      "scoring":[  
         3,
         -3,
         0
      ]
   },
   {  
      "num":2,
      "cat":"chemistry",
      "ques":"Which of the following electron is of lowest energy?",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"3s<sup>1</sup>"
         },
         {  
            "type":"text",
            "desc":"2s<sup>1</sup>."
         },
         {  
            "type":"text",
            "desc":"2p<sup>1</sup>."
         },
         {  
            "type":"text",
            "desc":"1s<sup>1</sup>."
         }
      ],
      "correct":3,
      "scoring":[  
         4,
         -4,
         0
      ]
   },
   {  
      "num":3,
      "cat":"chemistry",
      "ques":"What is the electronic configuration of Al<sup>3+</sup>(hint: Al<sup>3+</sup>) has 13 electrons?",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3p<sup>3</sup>"
         },
         {  
            "type":"text",
            "desc":"1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>"
         },
         {  
            "type":"text",
            "desc":"1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>1</sup>"
         },
         {  
            "type":"text",
            "desc":"1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>3</sup>"
         }
      ],
      "correct":1,
      "scoring":[  
         5,
         -5,
         0
      ]
   },
   {  
      "num":4,
      "cat":"chemistry",
      "ques":"Which of the following have highest thermal expansion?",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"Solids."
         },
         {  
            "type":"text",
            "desc":"Liquids"
         },
         {  
            "type":"text",
            "desc":"Gases."
         },
         {  
            "type":"text",
            "desc":"All states have same thermal expansion"
         }
      ],
      "correct":2,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":5,
      "cat":"chemistry",
      "ques":"[ INSTRUCTIONS FOR Q 5]<br>Q 5 will be awarded 3 marks if answered correctly. If answered incorrectly 3 marks will be deducted. 0.5 marks will be awarded if not attempted.<br>\"The natural physical state of bromine is gaseous.” This statement is-",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"TRUE"
         },
         {  
            "type":"text",
            "desc":"FALSE"
         }
      ],
      "correct":1,
      "scoring":[  
         3,
         -3,
         0.5
      ]
   },
   {  
      "num":6,
      "cat":"chemistry",
      "ques":"Which of the following is a lustrous nonmetal?",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"Iodine"
         },
         {  
            "type":"text",
            "desc":"Hydrogen"
         },
         {  
            "type":"text",
            "desc":"Iron"
         },
         {  
            "type":"text",
            "desc":"Gold"
         }
      ],
      "correct":0,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":7,
      "cat":"chemistry",
      "ques":"Which of the following form Dobereiner’s traid?",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"Fe Co Ni"
         },
         {  
            "type":"text",
            "desc":"Ca Sr Ba"
         },
         {  
            "type":"text",
            "desc":"P S Ar "
         },
         {  
            "type":"text",
            "desc":"H He Be "
         }
      ],
      "correct":1,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":8,
      "cat":"chemistry",
      "ques":"Which of the following acids is found in tomato?",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"Tartaric acid"
         },
         {  
            "type":"text",
            "desc":"Formic acid"
         },
         {  
            "type":"text",
            "desc":"Oxalic acid "
         },
         {  
            "type":"text",
            "desc":"Tomato doesn’t contain any acid."
         }
      ],
      "correct":2,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":9,
      "cat":"chemistry",
      "ques":"What is D in following reaction?<br>Acid + Base -> Salt + D",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"H<sub>2</sub>O"
         },
         {  
            "type":"text",
            "desc":"H<sub>2</sub>"
         },
         {  
            "type":"text",
            "desc":"N<sub>2</sub>"
         },
         {  
            "type":"text",
            "desc":"SO<sub>2</sub>"
         }
      ],
      "correct":0,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":10,
      "cat":"chemistry",
      "ques":"What is the color of corrosive coating on silver?",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"Blue"
         },
         {  
            "type":"text",
            "desc":"Black"
         },
         {  
            "type":"text",
            "desc":"Red"
         },
         {  
            "type":"text",
            "desc":"Green"
         }
      ],
      "correct":1,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":11,
      "cat":"physics",
      "ques":"In a circuit containing two unequal resistors connected in parallel:",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"The current is same in both the resistors"
         },
         {  
            "type":"text",
            "desc":"The current is larger in larger resistance"
         },
         {  
            "type":"text",
            "desc":"The voltage drop is same across both the resistance."
         },
         {  
            "type":"text",
            "desc":"The voltage drop is larger across larger resistance"
         }
      ],
      "correct":2,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":12,
      "cat":"physics",
      "ques":"Certain substances lose their electrical resistance at very low temperature. These substances are called:",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"Good conductors"
         },
         {  
            "type":"text",
            "desc":"Semi conductors"
         },
         {  
            "type":"text",
            "desc":"Super conductors"
         },
         {  
            "type":"text",
            "desc":"Dielectrics"
         }
      ],
      "correct":2,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":13,
      "cat":"physics",
      "ques":"A metal wire of specific Resistance 64 x 10-6 ohm. cm and length 198 cm has a resistance of 7 ohms, the radius of the wire will be: ",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"2.4 cm"
         },
         {  
            "type":"text",
            "desc":"0.24 cm"
         },
         {  
            "type":"text",
            "desc":"0.024 cm"
         },
         {  
            "type":"text",
            "desc":"24 cm"
         }
      ],
      "correct":1,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":14,
      "cat":"physics",
      "ques":"Magnetic field inside a solenoid is ",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"Non-uniform"
         },
         {  
            "type":"text",
            "desc":"Circular"
         },
         {  
            "type":"text",
            "desc":"Uniform"
         },
         {  
            "type":"text",
            "desc":"None"
         }
      ],
      "correct":2,
      "scoring":[  
         3,
         -3,
         0.5
      ]
   },
   {  
      "num":15,
      "cat":"physics",
      "ques":"Which of the following statement is not correct about two parallel conductors carrying equal currents in the same direction?",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"Each of the conductors will experience a force"
         },
         {  
            "type":"text",
            "desc":"The two conductors will repel each other."
         },
         {  
            "type":"text",
            "desc":"There are concentric lines of force around each conductor."
         },
         {  
            "type":"text",
            "desc":"Each of the conductors will move if not prevented from doing so."
         }
      ],
      "correct":1,
      "scoring":[  
         4,
         -4,
         0.5
      ]
   },
   {  
      "num":16,
      "cat":"physics",
      "ques":"According to international convention of color coding in a wire ",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"Live is red, neutral is black and earth is green "
         },
         {  
            "type":"text",
            "desc":"Live is brown, neutral is blue and earth is green "
         },
         {  
            "type":"text",
            "desc":"Live is brown, neutral is green and earth is black "
         },
         {  
            "type":"text",
            "desc":"Live is red, neutral is yellow and earth is blue "
         }
      ],
      "correct":1,
      "scoring":[  
         5,
         -5,
         0.5
      ]
   },
   {  
      "num":17,
      "cat":"physics",
      "ques":"Speed of a car increases from 20 km/h to 50 km/h in 2 seconds. What is its acceleration?",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"10 m/s<sup>2</sup>"
         },
         {  
            "type":"text",
            "desc":"15 m/s<sup>2</sup>"
         },
         {  
            "type":"text",
            "desc":"1.5 m/s<sup>2</sup>"
         },
         {  
            "type":"text",
            "desc":"4.17 m/s<sup>2</sup>"
         }
      ],
      "correct":3,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":18,
      "cat":"physics",
      "ques":"At a given temperature, sound travels fastest in",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"Solids"
         },
         {  
            "type":"text",
            "desc":"Gases"
         },
         {  
            "type":"text",
            "desc":"Liquids"
         },
         {  
            "type":"text",
            "desc":"Vaccum"
         }
      ],
      "correct":0,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":19,
      "cat":"physics",
      "ques":"If momentum of a body is doubled, the K.E. becomes",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"Two times"
         },
         {  
            "type":"text",
            "desc":"Three times"
         },
         {  
            "type":"text",
            "desc":"Four times"
         },
         {  
            "type":"text",
            "desc":"Half"
         }
      ],
      "correct":2,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":20,
      "cat":"physics",
      "ques":"The angle through which a ray of light turns on passing through a prism is called- ",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"Angle of reflection"
         },
         {  
            "type":"text",
            "desc":"Angle of emergence"
         },
         {  
            "type":"text",
            "desc":"Angle of incidence"
         },
         {  
            "type":"text",
            "desc":"Angle of deviation"
         }
      ],
      "correct":3,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":21,
      "cat":"mathematics",
      "ques":"The sum of all the angles in a hexagon is-",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"360 degrees"
         },
         {  
            "type":"text",
            "desc":"180 degrees"
         },
         {  
            "type":"text",
            "desc":"720 degrees"
         },
         {  
            "type":"text",
            "desc":"600 degrees"
         }
      ],
      "correct":2,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":22,
      "cat":"mathematics",
      "ques":"A coin is tossed one time. The probability of getting a head is-",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"1/2"
         },
         {  
            "type":"text",
            "desc":"1/4"
         },
         {  
            "type":"text",
            "desc":"1"
         },
         {  
            "type":"text",
            "desc":"Cant be determined "
         }
      ],
      "correct":0,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":23,
      "cat":"mathematics",
      "ques":"Find the sum of area enclosed by lines {x=±2; y=±2} and {x+y=4; x=0; y=0}",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"32 units"
         },
         {  
            "type":"text",
            "desc":"16 units"
         },
         {  
            "type":"text",
            "desc":"24 units"
         },
         {  
            "type":"text",
            "desc":"8 units"
         }
      ],
      "correct":2,
      "scoring":[  
         3,
         -3,
         0.5
      ]
   },
   {  
      "num":24,
      "cat":"mathematics",
      "ques":"Find the value of k if (2, 3) is the solution of equation x<sup>2</sup>+3y-2xy<sup>2</sup>+xy=k.",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"15"
         },
         {  
            "type":"text",
            "desc":"-15"
         },
         {  
            "type":"text",
            "desc":"0"
         },
         {  
            "type":"text",
            "desc":"-1"
         }
      ],
      "correct":1,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":25,
      "cat":"mathematics",
      "ques":"Expansion of ((1/4)x + (1/2)y - z)<sup>2</sup> is?",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"(1/16)x<sup>2</sup> + (1/4)y<sup>2</sup> + z<sup>2</sup> + (1/4)xy - yz - (1/2)zx"
         },
         {  
            "type":"text",
            "desc":"(1/16)x<sup>2</sup> + (1/4)y<sup>2</sup> - z<sup>2</sup> + (1/4)xy + yz + (1/2)zx"
         },
         {  
            "type":"text",
            "desc":"(1/16)x<sup>2</sup> + (1/4)y<sup>2</sup> + z<sup>2</sup> + (1/8)xy - (1/2)yz - (1/4)zx"
         },
         {  
            "type":"text",
            "desc":"None of these"
         }
      ],
      "correct":0,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":26,
      "cat":"mathematics",
      "ques":"If I flip a fair coin 10 times, which of the following is true?",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"The number of heads will equal the number of tails"
         },
         {  
            "type":"text",
            "desc":"The probability of all heads is greater than the probability of all tails."
         },
         {  
            "type":"text",
            "desc":"The probability of HHHHHHHHHH = the probability of HTHTHTHTHT"
         },
         {  
            "type":"text",
            "desc":"The probability of HHHHHHHHHH < the probability of HTHTHTHTHT"
         }
      ],
      "correct":2,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":27,
      "cat":"mathematics",
      "ques":"In the given figure, l||m, n||PB, AB||CD, and BX||PY.<br>If the area of ΔPBY is 15 cm<sup>2</sup>, then what is the area of quadrilateral ABCD?",
      "ques_img":"media/qimg/class10_setA/q27.png",
      "options":[  
         {  
            "type":"text",
            "desc":"15 cm<sup>2</sup>"
         },
         {  
            "type":"text",
            "desc":"22.5 cm<sup>2</sup>"
         },
         {  
            "type":"text",
            "desc":"30 cm<sup>2</sup>"
         },
         {  
            "type":"text",
            "desc":"37.5 cm<sup>2</sup>"
         }
      ],
      "correct":2,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":28,
      "cat":"mathematics",
      "ques":"If the HCF of 65 and 117 is expressible in the form 65m – 117, then the value of m is:",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"1"
         },
         {  
            "type":"text",
            "desc":"2"
         },
         {  
            "type":"text",
            "desc":"3"
         },
         {  
            "type":"text",
            "desc":"4"
         }
      ],
      "correct":1,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":29,
      "cat":"mathematics",
      "ques":"(n + 1)<sup>2</sup> – 1 is divisible by 8, if n is:",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"An odd integer"
         },
         {  
            "type":"text",
            "desc":"An even integer"
         },
         {  
            "type":"text",
            "desc":"A natural integer"
         },
         {  
            "type":"text",
            "desc":"A integer"
         }
      ],
      "correct":1,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":30,
      "cat":"mathematics",
      "ques":"The father’s age is six times his son’s age. Four years hence, the age of the father will be four times his son’s age. The present ages, in years, of son and father are, respectively",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"4 and 24"
         },
         {  
            "type":"text",
            "desc":"5 and 30"
         },
         {  
            "type":"text",
            "desc":"6 and 36"
         },
         {  
            "type":"text",
            "desc":"3 and 24"
         }
      ],
      "correct":2,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":31,
      "cat":"logical reasoning",
      "ques":"",
      "ques_img":"media/qimg/class10_setA/q31.jpg",
      "options":[  
         {  
            "type":"image",
            "desc":"media/qimg/class10_setA/a31.1.jpg"
         },
         {  
            "type":"image",
            "desc":"media/qimg/class10_setA/a31.2.jpg"
         },
         {  
            "type":"image",
            "desc":"media/qimg/class10_setA/a31.3.jpg"
         },
         {  
            "type":"image",
            "desc":"media/qimg/class10_setA/a31.4.jpg"
         }
      ],
      "correct":2,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":32,
      "cat":"logical reasoning",
      "ques":"Three years after the Hydraulic Falls Dam was built, none of the six fish species native to the area was still reproducing adequately in the river below the dam. Because the dam reduced the average temperature range of the water from approximately 40° to approximately 10°, biologists have hypothesized that sharp increases in water temperature must be involved in signaling the affected species to begin their reproduction activities. Which of the following statements, if true, would most strengthen the scientists hypothesis?",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"The native fish species were still able to reproduce in nearby streams where the annual -temperature range remains approximately 40°."
         },
         {  
            "type":"text",
            "desc":"Before the dam was built, the river annually overflowed its banks, creating temporary backwaters that were used as breeding areas for the local fish population."
         },
         {  
            "type":"text",
            "desc":"The lowest temperature ever recorded in the river prior to dam construction was 30°; whereas the lowest recorded river temperature after construction was completed has been 40°."
         },
         {  
            "type":"text",
            "desc":"Nonnative fish species, introduced after the dam was completed, have begun competing with the native species for food."
         }
      ],
      "correct":0,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":33,
      "cat":"logical reasoning",
      "ques":"Although dentures produced through a new computer-aided design process will cost more than twice as much as ordinary dentures, they should still be cost effective. Not only will fitting time and X-ray expense be reduced, but the new dentures should fit better, diminishing the need for frequent refitting visits to the dentists office. Which of the following must be studied in order to evaluate the argument presented above?",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"The amount of time a patient spends in the fitting process versus the amount of money spent on X-rays"
         },
         {  
            "type":"text",
            "desc":"The amount by which the cost of producing dentures has declined with the introduction of the new technique for producing them"
         },
         {  
            "type":"text",
            "desc":"The degree to which the use of the new dentures is likely to reduce the need for refitting visits when compared to the use of ordinary dentures"
         },
         {  
            "type":"text",
            "desc":"The degree to which the new dentures are more carefully manufactured than are ordinary dentures"
         }
      ],
      "correct":2,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":34,
      "cat":"logical reasoning",
      "ques":"BAS, ___?____, DCQ, DDP, FEO",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"CBT"
         },
         {  
            "type":"text",
            "desc":"ABR"
         },
         {  
            "type":"text",
            "desc":"BBR"
         },
         {  
            "type":"text",
            "desc":"BBT"
         }
      ],
      "correct":2,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":35,
      "cat":"logical reasoning",
      "ques":"B,D,F,I,L,P,__?__",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"R"
         },
         {  
            "type":"text",
            "desc":"S"
         },
         {  
            "type":"text",
            "desc":"T"
         },
         {  
            "type":"text",
            "desc":"U"
         }
      ],
      "correct":2,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":36,
      "cat":"logical reasoning",
      "ques":"In the following question, a matrix of certain characters is given. These characters follow a certain trend, row-wise or column-wise. Find out this trend and choose the missing character accordingly.",
      "ques_img":"media/qimg/class10_setA/q36.jpg",
      "options":[  
         {  
            "type":"text",
            "desc":"10C"
         },
         {  
            "type":"text",
            "desc":"12C"
         },
         {  
            "type":"text",
            "desc":"13C"
         },
         {  
            "type":"text",
            "desc":"7C"
         }
      ],
      "correct":0,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":37,
      "cat":"logical reasoning",
      "ques":"6 ,20, 8, 14, 10, 8, 12, _____?",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"14 10"
         },
         {  
            "type":"text",
            "desc":"2 18"
         },
         {  
            "type":"text",
            "desc":"4 12"
         },
         {  
            "type":"text",
            "desc":"2 14"
         }
      ],
      "correct":3,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":38,
      "cat":"logical reasoning",
      "ques":"A waiters salary consists of his salary and tips. During one week his tips were 5/4 of his salary. What fraction of his income came from tips? ",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"4/9"
         },
         {  
            "type":"text",
            "desc":"5/4"
         },
         {  
            "type":"text",
            "desc":"5/8"
         },
         {  
            "type":"text",
            "desc":"5/9"
         }
      ],
      "correct":3,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":39,
      "cat":"logical reasoning",
      "ques":"If A + B means A is the brother of B; A % B means A is the father of B and A x B means A is the sister of B. Which of the following means M is the uncle of P?",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"M % N x P"
         },
         {  
            "type":"text",
            "desc":"N x P % M"
         },
         {  
            "type":"text",
            "desc":"M + S % R % P "
         },
         {  
            "type":"text",
            "desc":"M + K % T x P"
         }
      ],
      "correct":3,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":40,
      "cat":"logical reasoning",
      "ques":"If a clock takes seven seconds to strike seven, how long will it take to strike ten? ",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"7 seconds"
         },
         {  
            "type":"text",
            "desc":"9 seconds"
         },
         {  
            "type":"text",
            "desc":"10 seconds"
         },
         {  
            "type":"text",
            "desc":"none of these"
         }
      ],
      "correct":3,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":41,
      "cat":"logical reasoning",
      "ques":"Synonym of THRONG is - ",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"Crowd"
         },
         {  
            "type":"text",
            "desc":"Peace"
         },
         {  
            "type":"text",
            "desc":"Handful"
         },
         {  
            "type":"text",
            "desc":"Timid"
         }
      ],
      "correct":0,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":42,
      "cat":"logical reasoning",
      "ques":"Which is correct spelling among the following?",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"adversery"
         },
         {  
            "type":"text",
            "desc":"adultary"
         },
         {  
            "type":"text",
            "desc":"advisory"
         },
         {  
            "type":"text",
            "desc":"arbitary"
         }
      ],
      "correct":2,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":43,
      "cat":"logical reasoning",
      "ques":"Change the voice of the following sentence.<br><br>Darjeeling grows tea",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"tea is being grown in Darjeeling"
         },
         {  
            "type":"text",
            "desc":"Let the tea be grown in Darjeeling"
         },
         {  
            "type":"text",
            "desc":"tea is grown in Darjeeling"
         },
         {  
            "type":"text",
            "desc":"Tea grows in Darjeeling"
         }
      ],
      "correct":3,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":44,
      "cat":"logical reasoning",
      "ques":"Change the voice of the following sentence<br><br>They have built a perfect dam across the river.",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"Across the river a perfect dam was built."
         },
         {  
            "type":"text",
            "desc":"A perfect dam has been built by them across the river."
         },
         {  
            "type":"text",
            "desc":"A perfect dam should have been built by them"
         },
         {  
            "type":"text",
            "desc":"Across the river was a perfect dam."
         }
      ],
      "correct":1,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   },
   {  
      "num":45,
      "cat":"logical reasoning",
      "ques":"Antonym of Poignant is-",
      "ques_img":null,
      "options":[  
         {  
            "type":"text",
            "desc":"Showy"
         },
         {  
            "type":"text",
            "desc":"Sad"
         },
         {  
            "type":"text",
            "desc":"Silly"
         },
         {  
            "type":"text",
            "desc":"Snobbish"
         }
      ],
      "correct":0,
      "scoring":[  
         3,
         -1,
         0.5
      ]
   }
]