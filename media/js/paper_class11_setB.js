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

var set =[

	{
      'num':1,
      'cat':'chemistry',
      'ques':'<b>INSTRUCTIONS FOR (Q 1 – Q 4).<b> Read the following passage and answer the questions below (Q 1 - Q 4)<br><b>Spectroscopy:</b><br>Analysis of electromagnetic radiation absorbed, emitted, or scattered by atoms and molecules is called spectroscopy.The 1H NMR spectroscopy works on the principle that the different Hydrogen nuclei in a molecule are in different chemical environment. So the no. of peaks observed for a molecule is equal to the no. of hydrogen atoms having a different chemical environment. The intensity of peak is more for the H-atom which is more electron deficient.<br>For example,CH3–CH3 has 6 H-atoms, all of same type but <sup>a</sup>CH2=<sup>b</sup>CH–<sup>c</sup>CH3 has 3 types of H-atoms ( 1st type- 2 H attached to <sup>a</sup>C, 2nd type- 1 H attached to <sup>b</sup>C, 3rd type- 3 H attached to <sup>c</sup>C).<br>Now, answer the following questions:<br>How many peaks will be observed in 1H NMR spectroscopy for 2,2-Chloro,nitropropane?',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'1'
      	},
      	{
      		'type':'text',
      		'desc':'2'
      	},
      	{
      		'type':'text',
      		'desc':'3'
      	},
      	{
      		'type':'text',
      		'desc':'4'
      	}

      ],
      'correct':0,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

	{
      'num':2,
      'cat':'chemistry',
      'ques':'How many peaks will be observed in 1H NMR spectroscopy for 1,4-Dimethylbenzene?',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'1'
      	},
      	{
      		'type':'text',
      		'desc':'2'
      	},
      	{
      		'type':'text',
      		'desc':'3'
      	},
      	{
      		'type':'text',
      		'desc':'4'
      	}

      ],
      'correct':1,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},	

	{
      'num':3,
      'cat':'chemistry',
      'ques':'In the molecule, CH2=*CH–CR the most intense peak (for H attached to *C) will be observed if R is',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'OH'
      	},
      	{
      		'type':'text',
      		'desc':'NO<sub>2</sub>'
      	},
      	{
      		'type':'text',
      		'desc':'OCH<sub>3</sub>'
      	},
      	{
      		'type':'text',
      		'desc':'Cl'
      	}

      ],
      'correct':1,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},	

	{
      'num':4,
      'cat':'chemistry',
      'ques':'In the previous question, the least intense peak would be observed if R is,',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'OH'
      	},
      	{
      		'type':'text',
      		'desc':'NO<sub>2</sub>'
      	},
      	{
      		'type':'text',
      		'desc':'OCH<sub>3</sub>'
      	},
      	{
      		'type':'text',
      		'desc':'Cl'
      	}

      ],
      'correct':2,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},		

	{
      'num':5,
      'cat':'chemistry',
      'ques':'<b>INSTRUCTIONS FOR (Q 5 – Q 8)</b><br>Read the following passage and answer the questions below (Q 5 - Q 8)<br>We know that, for ideal gases, the mathematical relation of enthalpy, H with internal energy, E and PV can be written as<br> H = U + PV. <br>Therefore, change in enthalpy: <br> ΔU + Δ(PV) = ΔU + Δ(nRT). <br>The <b>standard molar enthalpy of formation</b> of a compound, ΔfHo is defined as the amount of heat either liberated or absorbed when one mole of that compound is formed from its constituent elements in the standard state.<br> Also, the <b>standard molar enthalpy of combustion</b> of a substance is defined as the amount of heat liberated when one mole of that substance is burned completely in excess of air (so that complete oxidation is ensured).<br> Now, answer the following questions:<br><br>Two moles of an ideal gas undergoes isothermal reversible expansion from 2 L to 8 L at 300 K. The enthalpy change of the gas is:', 
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'4.8kj'
      	},
      	{
      		'type':'text',
      		'desc':'11.4kj'
      	},
      	{
      		'type':'text',
      		'desc':'0'
      	},
      	{
      		'type':'text',
      		'desc':'-11.4kj'
      	}

      ],
      'correct':2,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},		

	{
      'num':6,
      'cat':'chemistry',
      'ques':'One mole of a non-ideal gas undergoes a change of state(2.0 atm, 3.0 L, 95 K) to (4.0 atm, 5.0 L, 245 K) with a change in internal energy, ΔU = 30 L atm. The change in enthalpy (ΔH) of the process in L atm is:',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'40'
      	},
      	{
      		'type':'text',
      		'desc':'42.3'
      	},
      	{
      		'type':'text',
      		'desc':'44.0'
      	},
      	{
      		'type':'text',
      		'desc':'Not defined, because pressure is not constant'
      	}

      ],
      'correct':2,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},		
	
	{
      'num':7,
      'cat':'chemistry',
      'ques':'If the door of a refrigerator is kept open then which of following is true?',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'Room is cooled'
      	},
      	{
      		'type':'text',
      		'desc':'Room is heated'
      	},
      	{
      		'type':'text',
      		'desc':'Room is either heated or cooled'
      	},
      	{
      		'type':'text',
      		'desc':'Room is neither cooled nor heated'
      	}

      ],
      'correct':1,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},	

	{
      'num':8,
      'cat':'chemistry',
      'ques':'Standard molar enthalpy of formation of CO2 is:',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'The standard molar enthalpy of combustion of gaseous carbon. '
      	},
      	{
      		'type':'text',
      		'desc':'The sum of standard molar enthalpies of formation of CO and O2.'
      	},
      	{
      		'type':'text',
      		'desc':'The standard molar enthalpy of combustion of graphite.'
      	},
      	{
      		'type':'text',
      		'desc':'zero'
      	}

      ],
      'correct':2,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},	

	{
      'num':9,
      'cat':'chemistry',
      'ques':'The correct order of stability for the following super oxides is:',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'KO2 > RbO2 > CsO2'
      	},
      	{
      		'type':'text',
      		'desc':'RbO2 > CsO2 > KO2'
      	},
      	{
      		'type':'text',
      		'desc':'CsO2 > RbO2 > KO2'
      	},
      	{
      		'type':'text',
      		'desc':'KO2 > CsO2 > RbO2'
      	}

      ],
      'correct':2,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},	

	{
      'num':10,
      'cat':'chemistry',
      'ques':'In the reaction, CaCO3(s) ⇌ CaO(s) + CO2(g), at equilibrium:',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'Increasing the amount of CaCO3 will increase the pressure of the reaction mixture.'
      	},
      	{
      		'type':'text',
      		'desc':'Increasing the amount of CaCO3 will decrease the pressure of the reaction mixture.'
      	},
      	{
      		'type':'text',
      		'desc':'Increasing the amount of CaCO3 will make no change to the pressure of the reaction mixture.'
      	},
      	{
      		'type':'text',
      		'desc':'Nothing can be said.'
      	}

      ],
      'correct':2,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},	

	{
      'num':11,
      'cat':'physics',
      'ques':'A uniform circular disk of mass M radius R is acted upon by a number of forces at different locations (not all of them act on the rim). The net force produced by them is F. Then one can surely conclude that:',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'The angular acceleration will be F/MR.'
      	},
      	{
      		'type':'text',
      		'desc':'The linear acceleration of the disk will be F/M'
      	},
      	{
      		'type':'text',
      		'desc':'Both 1 and 2'
      	},
      	{
      		'type':'text',
      		'desc':'Neither 1 nor 2'
      	}

      ],
      'correct':1,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},	

	{
      'num':12,
      'cat':'physics',
      'ques':'A Helium gas filled balloon and carbon dioxide gas filled balloon are attached with the floor and the ceiling of a train with a thread. If the train starts accelerating, then:',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'The Helium filled balloon tilts in the direction of acceleration of the train and the carbon dioxide filled balloon tilts in the opposite direction.'
      	},
      	{
      		'type':'text',
      		'desc':'The converse of option A happens'
      	},
      	{
      		'type':'text',
      		'desc':'Both tilt in the direction of the acceleration of the train'
      	},
      	{
      		'type':'text',
      		'desc':'Both tilt in the opposite direction of the acceleration of the train'
      	}

      ],
      'correct':0,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},	

	{
      'num':13,
      'cat':'physics',
      'ques':'<b>INSTRUCTIONS FOR (Q 13 – Q 16)</b><br>Read the following passage and answer the questions below (Q 13 - Q 16)<br>(Unless otherwise specified, a <b>bold</b> text represents a vector quantity) Analysis of forces is a key component in Physics. An interesting branch of forces is conservative forces. A conservative force is a force for which the work done around a closed path is zero. This essentially means that no work is done by the conservative force on a body when it is brought back to its starting point during the application of that force. This is why conservative forces are sometimes referred to as non-dissipative forces. For the analysis of conservative forces, we use certain mathematical tools derived from the <b>gradient operator</b>. The gradient operator for three dimensions of space is defined as: <b>∇</b> = δ/δx <b>i</b> + δ/δy <b>j</b> + δ/δz <b>k</b>. where <b>i</b>, <b>j</b>, <b>k</b> are unit vectors along the x, y and z axes. δ/δx give the partial derivative with respect to x, assuming y and z constant (similar definitions for δ/δy and δ/δz). It is a unary operator and operates only on one quantity. A potential function can only be defined for a conservative force. The potential function f(x,y,z) and the force F(x,y,z) can be related as <b>F(x,y,z)</b> = -<b>∇</b>f(x,y,z) = - (δf/δx <b>i</b> + δf/δy <b>j</b> + δf/δz <b>k</b>) (mind the negative sign!). A test object kept in space under the effect of the force has the tendency to go from a point with a higher potential to a lower potential. A tool defined using the gradient operator is the Curl Operator. The curl of a vector is defined as: <b>Curl (F)</b> = ∇ × F (vector cross product) where F is a vector quantity (of not more than 3 dimensions). For a conservative force <b>F</b> the Curl(F) = 0 (throughout the 3D space). <br>Now answer the following:<br><br> Which of the following is a conservative force:',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'F = xyz <b>i</b> + x<sup>2</sup> y <b>j</b>'
      	},
      	{
      		'type':'text',
      		'desc':'F = 3x <b>i</b> + 4y <b>j</b> + 5z <b>k</b>'
      	},
      	{
      		'type':'text',
      		'desc':'F =y<sup>2</sup> z<sup>3</sup>  <b>i</b> + 2xz <b>j</b> + x<sup>3</sup> y<sup>2</sup>  <b>k</b>'
      	},
      	{
      		'type':'text',
      		'desc':'F = 8z <b>i</b> + 7x <b>j</b> + 8y <b>k</b>'
      	}

      ],
      'correct':1,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},	

	{
      'num':14,
      'cat':'physics',
      'ques':'Which of the following is not a conservative force:',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'Electrostatic force'
      	},
      	{
      		'type':'text',
      		'desc':'Gravitational force between you and Aarohan 2016 question paper'
      	},
      	{
      		'type':'text',
      		'desc':'Viscous force'
      	},
      	{
      		'type':'text',
      		'desc':'Force produced by a spring following Hooke Law'
      	}

      ],
      'correct':2,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},	

	{
      'num':15,
      'cat':'physics',
      'ques':'You are an astronaut observing the Earth from the International Space Station. Suddenly a thruster activates which applies a "non-conservative" force on the ISS satellite. From your frame of reference which of the following will <b>not be conserved</b> (neglect relativistic effects):',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'Gravitational Potential Energy of the Earth in the gravitational field of all celestial bodies'
      	},
      	{
      		'type':'text',
      		'desc':'Angular momentum of the Earth about its center of mass'
      	},
      	{
      		'type':'text',
      		'desc':'Both 1 and 2'
      	},
      	{
      		'type':'text',
      		'desc':'Neither 1 nor 2'
      	}

      ],
      'correct':3,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

	{
      'num':16,
      'cat':'physics',
      'ques':'If the potential function of a conservative force is defined as f(x,y,z) =z<sup>2</sup>e<sup>xy</sup>  + sin(yz), the effect of the force will be <b>least</b> observed where:',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'xy = 1'
      	},
      	{
      		'type':'text',
      		'desc':'z = 0'
      	},
      	{
      		'type':'text',
      		'desc':'y = x<sup>2</sup>+z<sup>2</sup>'
      	},
      	{
      		'type':'text',
      		'desc':'x<sup>2</sup>+y<sup>2</sup>+z<sup>2</sup>  = 0'
      	}

      ],
      'correct':1,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},	

	{
      'num':17,
      'cat':'physics',
      'ques':'<b>INSTRUCTIONS FOR (Q 17 – Q 20)</b><br>Read the following passage and answer the questions below (Q 17 - Q 20). Q 17 carries 3 marks only. From Q 18 to Q 20, the marks allotment will be in Arithmetic progression with Q 18 carrying 3 marks and increasing at the rate of 1 mark per question till Q 20. This means, Q 18 carries 3 marks, Q 19 carries 4 marks and Q 20 carries 5 marks. NEGATIVE MARKS AWARDED PER QUESTION IS EQUAL TO POSITIVE MARKS ALLOTTED TO RESPECTIVE QUESTION.<br>Newtonian mechanics also deal with Vibrations and Waves. As the name suggests, vibrations are repeating oscillations of particles. Waves are disturbances in space which may or may not need a medium to propagate. A plane progressive wave propagating in a medium has the general equation of the form: y = A sin(ωt - kx) where y is the displacement of a medium particle (at a position x) from its equilibrium position. Multiple waves can superimpose and produce a combined effect. This superposition can also cause "standing" waves. The energy of the oscillating particle would be composed of both kinetic and potential energies. Consider a thought experiment. You take a cuboidal glass box of length L and fill it with sawdust. Now you close it at both ends and shake it vigorously so that all the dust is suspended in air. At one end you make a small orifice and fix a small speaker at that orifice (look at the figure). The speaker produces a sinusoidal sound wave of 400 Hz frequency which travels at a speed of 353 m/s. Assume adiabatic conditions.<br>In the above thought experiment, if it was found that in the glass box, there was one and only one region where the grains of saw dust piled up then the length of the glass box would be about',
      'ques_img':'../aarohan-2k16-software/media/qimg/class11_setB/qpic1.png',
      'options':[

      	{
      		'type':'text',
      		'desc':'72.4cm'
      	},
      	{
      		'type':'text',
      		'desc':'36.2cm'
      	},
      	{
      		'type':'text',
      		'desc':'66.2cm'
      	},
      	{
      		'type':'text',
      		'desc':'33.1cm'
      	}

      ],
      'correct':2,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},	

	{
      'num':18,
      'cat':'physics',
      'ques':'Consider the following two statements:  <br>  STATEMENT 1: If we remove the speakers, all the sawdust particles would settle down.<br> STATEMENT 2: When the situation is set up, energy is transferred from the sawdust particles at the left of the pile to those at the right of the pile',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'Statement 1 is true and statement 2 is true and statement 2 is the correct explanation of statement 1.'
      	},
      	{
      		'type':'text',
      		'desc':'Statement 1 is true and statement 2 is true but statement 2 is not the correct explanation of statement 1.'
      	},
      	{
      		'type':'text',
      		'desc':'Statement 1 is true and statement 2 is false.'
      	},
      	{
      		'type':'text',
      		'desc':'Statement 1 is false and statement 2 is true.'
      	}

      ],
      'correct':2,
      'scoring':[
      	3,
      	-3,
      	0.5
      ]
	},		

	{
      'num':19,
      'cat':'physics',
      'ques':'If a transverse wave propagates uniformly radially outwards from a point source (located at x=0, y=0) then the equation of the oscillation of the medium particles would be of the form (z is the displacement of the particle):',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'z = A sin[ωt - k(x<sup>2</sup>+y<sup>2</sup>)<sup>1/2</sup>]'
      	},
      	{
      		'type':'text',
      		'desc':'z = A sin⁡(ω(x<sup>2</sup>+y<sup>2</sup> )t - kxy)'
      	},
      	{
      		'type':'text',
      		'desc':'z = A sin (ωyt - kxt)'
      	},
      	{
      		'type':'text',
      		'desc':'z = A sin (ωt - kxy)'
      	}

      ],
      'correct':0,
      'scoring':[
      	4,
      	-4,
      	0.5
      ]
	},			

	{
      'num':20,
      'cat':'physics',
      'ques':'If we replace the speaker with a rubber sheath which is oscillated back and forth with constant velocity and with a constant amplitude such that its graphical representation of equation of motion is of the form (Y(t) is the displacement of the sheath from its mean position):',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'Only one such pile of sawdust will be observed at the same location'
      	},
      	{
      		'type':'text',
      		'desc':'Only one such pile of sawdust will be observed but at a different location'
      	},
      	{
      		'type':'text',
      		'desc':'Many such piles of sawdust will be observed at different locations'
      	},
      	{
      		'type':'text',
      		'desc':'No such piles of sawdust will be persistent'
      	}

      ],
      'correct':3,
      'scoring':[
      	5,
      	-5,
      	0.5
      ]
	},	

	{
      'num':21,
      'cat':'mathematics',
      'ques':'<b>INSTRUCTIONS FOR (Q 21 – Q 24)</b><br>Read the following passage and answer the questions below (Q 21 - Q 24)<br>Given a sequence of numbers {a<sub>n</sub>}, an expression of the form <br>a<sub>1</sub>+a<sub>2</sub>+ a<sub>3</sub>+...+ a<sub>n</sub>+...<br> is an <b>infinite series</b>. The number <b>a<sub>n</sub></b> is the <b>nth term</b> of the series. The sequence {s<sub>n</sub> } defined by<br>s<sub>1</sub> = a<sub>1</sub><br>s<sub>2</sub> =  a<sub>1</sub> + a<sub>2</sub><br>s<sub>3</sub> =  a<sub>1</sub> + a<sub>2</sub> + a<sub>3</sub><br>s<sub>n</sub> =  a<sub>1</sub> + a<sub>2</sub> + a<sub>3</sub>  +... + a<sub>n</sub> =Σ a<sub>k</sub> (where ‘k’ varies from 1 to n)<br>is the <b>sequence of partial sums</b> of the series, the number s<sub>n</sub> being the <b>nth partial sum</b>. If the sequence of partial sums <b>converges</b> to a limit L, we say that the series converges and that its sum is L. In this case, we also write a<sub>1</sub> + a<sub>2</sub> + a<sub>3</sub>  +... + a<sub>n</sub> +... = Σ a<sub>n</sub> = L (where ‘n’ varies from 1 to ∞ ) If the sequence of partial sums of the series does not converge, we say that the series <b>diverges</b>. <br> Based on above paragraph answer the following questions:<br>Tell about the nature of following series:<br> Σ  [ ( ln(n+2) )<sup>-1</sup> – ( ln(n+1) )<sub>-1</sub>  ]	(where ‘n’ varies from 1 to ∞ )',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'diverges'
      	},
      	{
      		'type':'text',
      		'desc':'converges'
      	},
      	{
      		'type':'text',
      		'desc':'first converges then diverges'
      	},
      	{
      		'type':'text',
      		'desc':'first diverges then converges'
      	}

      ],
      'correct':1,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},			

	{
      'num':22,
      'cat':'mathematics',
      'ques':'Tell about the nature of following series: Σ (cos(nπ))	(where ‘n’ varies from 0 to ∞ )',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'diverges'
      	},
      	{
      		'type':'text',
      		'desc':'converges'
      	},
      	{
      		'type':'text',
      		'desc':'first converges then diverges'
      	},
      	{
      		'type':'text',
      		'desc':'first diverges then converges'
      	}

      ],
      'correct':0,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

	{
      'num':23,
      'cat':'mathematics',
      'ques':'Find the limit ‘<b>L</b>’, if the following series converges: Σ ln(1/3<sup>n</sup>) 	(where ‘n’ varies from 0 to ∞ )',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'ln(2/3)'
      	},
      	{
      		'type':'text',
      		'desc':'ln(3/2)'
      	},
      	{
      		'type':'text',
      		'desc':'ln(1/2)'
      	},
      	{
      		'type':'text',
      		'desc':'the above series does not converge'
      	}

      ],
      'correct':3,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},	

	{
      'num':24,
      'cat':'mathematics',
      'ques':'Find the limit ‘<b>L</b>’ of the following <b>sequence {an}</b>: an = (3<sup>n</sup> + 5<sup>n</sup>)<sup>1/n</sup>	(where n→∞)',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'3'
      	},
      	{
      		'type':'text',
      		'desc':'5'
      	},
      	{
      		'type':'text',
      		'desc':'3/5'
      	},
      	{
      		'type':'text',
      		'desc':'5/3'
      	}

      ],
      'correct':1,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},	

	{
      'num':25,
      'cat':'mathematics',
      'ques':'<b>INSTRUCTIONS FOR (Q 25 – Q 28)</b><br>Read the following passage and answer the questions below (Q 25 - Q 28)<br><b>Permutation:</b> These are the different arrangements of a given number of things by taking some or all at a time<br><b>Examples:-</b><br>All permutations (or arrangements) formed with the letters a, b, c by taking three at a time are (abc, acb, bac, bca, cab, cba).<br>All permutations (or arrangements) formed with the letters a, b, c by taking two at a time are (ab, ac, ba, bc, ca, cb).<br><b>Combination:</b> Each of the different groups or selections formed by taking some or all of a number of objects is called a combination.<br><b>Examples:-</b><br>Suppose we want to select two out of three girls P, Q, R. Then, possible combinations are PQ, QR and RP. (Note that PQ and QP represent the same selection).<br>Suppose we want to select three out of three girls P, Q, R. Then, only possible combination is PQR.<br>Now answer the following questions:<br> A box contains 2 white balls, 3 black balls and 4 red balls. The number of ways in which three balls can be drawn from the box so that <b>at least</b> one of the balls is black is:',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'74'
      	},
      	{
      		'type':'text',
      		'desc':'84'
      	},
      	{
      		'type':'text',
      		'desc':'64'
      	},
      	{
      		'type':'text',
      		'desc':'20'
      	}

      ],
      'correct':2,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},	

	{
      'num':26,
      'cat':'mathematics',
      'ques':'Six points in a plane be joined in all possible ways by indefinite straight lines and if <b>no two of them be coincident or parallel</b> and no three pass through the same point(with the exceptions of the original 6).The number of distinct points of intersection is equal to:',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'105'
      	},
      	{
      		'type':'text',
      		'desc':'45'
      	},
      	{
      		'type':'text',
      		'desc':'51'
      	},
      	{
      		'type':'text',
      		'desc':'none of these'
      	}

      ],
      'correct':2,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

	{
      'num':27,
      'cat':'mathematics',
      'ques':'Passengers are to travel by double decked bus which can accommodate 13 in the upper deck and 7 in the lower deck. The number of ways that they can be distributed if <b>5 refuse to sit in the upper deck</b> and <b>8 refuse to sit in the lower deck</b> is:',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'25'
      	},
      	{
      		'type':'text',
      		'desc':'21'
      	},
      	{
      		'type':'text',
      		'desc':'18'
      	},
      	{
      		'type':'text',
      		'desc':'15'
      	}

      ],
      'correct':1,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

	{
      'num':28,
      'cat':'mathematics',
      'ques':'If a polygon has 44 diagonals, then the number of its sides are?',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'11'
      	},
      	{
      		'type':'text',
      		'desc':'7'
      	},
      	{
      		'type':'text',
      		'desc':'8'
      	},
      	{
      		'type':'text',
      		'desc':'none of these'
      	}

      ],
      'correct':0,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

    {
      'num':29,
      'cat':'mathematics',
      'ques':'If ‘𝒘’ is an imaginary cube root of unity, then (1 + w - w<sup>2</sup>)<sup>7</sup> equals:',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'128w'
      	},
      	{
      		'type':'text',
      		'desc':'-128w'
      	},
      	{
      		'type':'text',
      		'desc':'128w<sup>2</sup>'
      	},
      	{
      		'type':'text',
      		'desc':'-128w<sup>2</sup>'
      	}

      ],
      'correct':3,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

    {
      'num':30,
      'cat':'mathematics',
      'ques':'A line passes through the point L(m,n) is parallel to the x-axis. It forms a triangle with the lines y=x & x+y=2 of area 4m<sup>2</sup>, then the locus of ‘L’ is:',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'concentric circles with variable radii'
      	},
      	{
      		'type':'text',
      		'desc':'parabolas with variable focus'
      	},
      	{
      		'type':'text',
      		'desc':'a pair of straight lines'
      	},
      	{
      		'type':'text',
      		'desc':'ellipses with variable focii and centre'
      	}

      ],
      'correct':2,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

    {
      'num':31,
      'cat':'logical reasoning',
      'ques':'It is true that it is against international law to provide aid to certain countries that are building nuclear programs. But, if Russian companies do not provide aid, companies in other countries will. Which of the following is most like the argument above in its logical structure?',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'It is true that it is against United States policy to negotiate with kidnappers. But if the United States wants to prevent loss of life, it must negotiate in some cases.'
      	},
      	{
      		'type':'text',
      		'desc':'It is true that it is illegal to sell diamonds that originate in certain countries. But there is a long tradition in Russia of stockpiling diamonds.'
      	},
      	{
      		'type':'text',
      		'desc':'It is true that it is illegal for an attorney to participate in a transaction in which there is an apparent conflict of interest. But, if the facts are examined carefully, it will clearly be seen that there is no actual conflict of interest in the defendants case.'
      	},
      	{
      		'type':'text',
      		'desc':'It is true that it is against the law to steal cars. But someone else certainly would have stolen that car if the defendant had not done so first.'
      	}

      ],
      'correct':3,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

    {
      'num':32,
      'cat':'logical reasoning',
      'ques':'Town Y is populated almost exclusively by retired people and has almost no families with small children. Yet Town Y is home to a thriving business specializing in the rental of furniture for infants and small children.<br>Which of the following, if true, best reconciles the seeming discrepancy described above?',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'The business specializing in the rental of childrens furniture buys its furniture from distributors outside of Town Y.'
      	},
      	{
      		'type':'text',
      		'desc':'Many residents of Town Y must provide for the needs of visiting grandchildren several weeks a year.'
      	},
      	{
      		'type':'text',
      		'desc':'The few children who do reside in Town Y all know each other and often stay overnight at each other houses.'
      	},
      	{
      		'type':'text',
      		'desc':'Many residents of Town Y who move frequently prefer to rent their furniture rather than buy it outright.'
      	}

      ],
      'correct':1,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

    {
      'num':33,
      'cat':'logical reasoning',
      'ques':'Which is the next figure?',
      'ques_img':'../aarohan-2k16-software/media/qimg/class11_setB/qpic2.png',
      'options':[

      	{
      		'type':'image',
      		'desc':'../aarohan-2k16-software/media/qimg/class11_setB/qpic2a.png'
      	},
      	{
      		'type':'image',
      		'desc':'../aarohan-2k16-software/media/qimg/class11_setB/qpic2b.png'
      	},
      	{
      		'type':'image',
      		'desc':'../aarohan-2k16-software/media/qimg/class11_setB/qpic2c.png'
      	},
      	{
      		'type':'image',
      		'desc':'../aarohan-2k16-software/media/qimg/class11_setB/qpic2d.png'
      	}

      ],
      'correct':3,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

    {
      'num':34,
      'cat':'logical reasoning',
      'ques':'Find the missing character? ',
      'ques_img':'../aarohan-2k16-software/media/qimg/class11_setB/qpic3.png',
      'options':[

      	{
      		'type':'text',
      		'desc':'860'
      	},
      	{
      		'type':'text',
      		'desc':'1140'
      	},
      	{
      		'type':'text',
      		'desc':'2880'
      	},
      	{
      		'type':'text',
      		'desc':'3240'
      	}

      ],
      'correct':2,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

    {
      'num':35,
      'cat':'logical reasoning',
      'ques':'In a family, the father took 1/4 of the cake and he had 3 times as much as each of the other members had. The total number of family members is ',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'3'
      	},
      	{
      		'type':'text',
      		'desc':'7'
      	},
      	{
      		'type':'text',
      		'desc':'10'
      	},
      	{
      		'type':'text',
      		'desc':'12'
      	}

      ],
      'correct':2,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

    {
      'num':36,
      'cat':'logical reasoning',
      'ques':'2, 15, 4, 12, 6, 7, ?, ? .',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'8,8'
      	},
      	{
      		'type':'text',
      		'desc':'8,0'
      	},
      	{
      		'type':'text',
      		'desc':'3,8'
      	},
      	{
      		'type':'text',
      		'desc':'none of these'
      	}

      ],
      'correct':1,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

    {
      'num':37,
      'cat':'logical reasoning',
      'ques':' M, N, O, L, R, I, V, ?',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'A'
      	},
      	{
      		'type':'text',
      		'desc':'E'
      	},
      	{
      		'type':'text',
      		'desc':'F'
      	},
      	{
      		'type':'text',
      		'desc':'H'
      	}

      ],
      'correct':1,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

    {
      'num':38,
      'cat':'logical reasoning',
      'ques':'24576, 6144, 1536, 386, 96, 24, ?',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'96'
      	},
      	{
      		'type':'text',
      		'desc':'386'
      	},
      	{
      		'type':'text',
      		'desc':'1536'
      	},
      	{
      		'type':'text',
      		'desc':'6144'
      	}

      ],
      'correct':1,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

    {
      'num':39,
      'cat':'logical reasoning',
      'ques':'D-4, F-6, H-8, J-10, ?, ? ',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'K-12, M-13'
      	},
      	{
      		'type':'text',
      		'desc':'L-12, M-14'
      	},
      	{
      		'type':'text',
      		'desc':'L-12, N-14'
      	},
      	{
      		'type':'text',
      		'desc':'K-12, M-14'
      	}

      ],
      'correct':2,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

    {
      'num':40,
      'cat':'logical reasoning',
      'ques':'MK : 169/121 :: JH : ?',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'100/64'
      	},
      	{
      		'type':'text',
      		'desc':'100/81'
      	},
      	{
      		'type':'text',
      		'desc':'64/120'
      	},
      	{
      		'type':'text',
      		'desc':'81/100'
      	}

      ],
      'correct':0,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

    {
      'num':41,
      'cat':'logical reasoning',
      'ques':'Synonym of USURP is -',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'Punish'
      	},
      	{
      		'type':'text',
      		'desc':'Forgive'
      	},
      	{
      		'type':'text',
      		'desc':'Grant'
      	},
      	{
      		'type':'text',
      		'desc':'Seize'
      	}

      ],
      'correct':3,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

    {
      'num':42,
      'cat':'logical reasoning',
      'ques':'Which is correct spelling -',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'Qestalt'
      	},
      	{
      		'type':'text',
      		'desc':'Imbrolios'
      	},
      	{
      		'type':'text',
      		'desc':'Ampasse'
      	},
      	{
      		'type':'text',
      		'desc':'Recondite'
      	}

      ],
      'correct':3,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},		

    {
      'num':43,
      'cat':'logical reasoning',
      'ques':'INSTRUCTIONS FOR (Q 43 TO Q 44).<br>Change the Voice of the sentences given in (Q 43 and Q 44).<br>Q 43. Do you imitate others?',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'Are others being imitated by you?'
      	},
      	{
      		'type':'text',
      		'desc':'Are others imitated by you?'
      	},
      	{
      		'type':'text',
      		'desc':'Have others being imitated by you?'
      	},
      	{
      		'type':'text',
      		'desc':'Were others being imitated by you?'
      	}

      ],
      'correct':1,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

    {
      'num':44,
      'cat':'logical reasoning',
      'ques':'You need to clean your shoes properly.',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'Your shoes are needed to clean properly.'
      	},
      	{
      		'type':'text',
      		'desc':'You are needed to clean your shoes properly.'
      	},
      	{
      		'type':'text',
      		'desc':'Your shoes need to be cleaned properly.'
      	},
      	{
      		'type':'text',
      		'desc':'Your shoes are needed by you to clean properly.'
      	}

      ],
      'correct':2,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

    {
      'num':45,
      'cat':'logical reasoning',
      'ques':'Antonym of Autonomous is -',
      'ques_img':null,
      'options':[

      	{
      		'type':'text',
      		'desc':'Self-government'
      	},
      	{
      		'type':'text',
      		'desc':'Dependent'
      	},
      	{
      		'type':'text',
      		'desc':'Defensive'
      	},
      	{
      		'type':'text',
      		'desc':'Neutral'
      	}

      ],
      'correct':1,
      'scoring':[
      	3,
      	-1,
      	0.5
      ]
	},

]