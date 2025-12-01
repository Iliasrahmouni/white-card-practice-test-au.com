// ======================================================
// THE ULTIMATE WHITE CARD DATABASE (240 QUESTIONS)
// ======================================================

const coreData = [
    // --- TOPIC A: LEGAL & WHS ACT (1-15) ---
    {
        id: 1, category: "legal",
        fact: "The 'Duty of Care' applies to everyone on site (Employers, Workers, Contractors, Visitors).",
        right: "Everyone on site",
        wrong: ["Only the Site Supervisor", "Only the Employer", "Only Licensed Workers"],
        variations: [
            "Who has a 'Duty of Care' on a construction site?",
            "Under the WHS Act, which persons are responsible for safety?",
            "True or False: Visitors to a site do NOT have a Duty of Care.",
            "You see a visitor acting unsafely. Who is responsible for their safety?"
        ]
    },
    {
        id: 2, category: "legal",
        fact: "The main goal of the WHS Act is to protect the health and safety of workers.",
        right: "Protect worker health and safety",
        wrong: ["Speed up construction work", "Eliminate all paperwork", "Generate revenue for the government"],
        variations: [
            "What is the primary objective of the WHS Act?",
            "Why was the WHS Act introduced?",
            "The WHS Act is designed primarily to...",
            "Which of the following is the main purpose of WHS laws?"
        ]
    },
    {
        id: 3, category: "legal",
        fact: "If you spot a hazard you cannot fix, you must report it to a supervisor immediately.",
        right: "Report it to a supervisor",
        wrong: ["Ignore it and keep working", "Fix it later when you have time", "Leave it for the next shift"],
        variations: [
            "What is the immediate action if you find a hazard you cannot control?",
            "You see a hazard but lack the tools to fix it. You should...",
            "Who should you inform about an unmanageable hazard?",
            "True or False: You should ignore hazards that don't affect you."
        ]
    },
    {
        id: 4, category: "legal",
        fact: "Workers must legally comply with reasonable safety instructions.",
        right: "Comply with them",
        wrong: ["Ignore instructions they dislike", "Only follow instructions from friends", "Choose which rules to follow"],
        variations: [
            "What is a worker's legal obligation regarding safety instructions?",
            "If a supervisor gives a reasonable safety instruction, you must...",
            "Can a worker legally refuse a reasonable safety instruction?",
            "Under the WHS Act, compliance with safety instructions is..."
        ]
    },
    {
        id: 5, category: "legal",
        fact: "Workers must wear PPE (Personal Protective Equipment) if instructed to do so.",
        right: "Wear it immediately",
        wrong: ["Only wear PPE if they feel like it", "Refuse PPE if it is uncomfortable", "Buy their own PPE"],
        variations: [
            "If directed to wear a hard hat, a worker must...",
            "What is the rule regarding PPE usage on site?",
            "When is it optional to wear mandatory PPE?",
            "You are told to wear goggles but don't want to. What must you do?"
        ]
    },
    {
        id: 6, category: "legal",
        fact: "A HSR is a Health and Safety Representative elected by workers.",
        right: "Health and Safety Representative",
        wrong: ["Government Inspector", "Site Manager", "Union Official"],
        variations: [
            "What does the abbreviation 'HSR' stand for?",
            "Who elects a Health and Safety Representative (HSR)?",
            "What is the role of an HSR?",
            "Who represents the workers in safety matters?"
        ]
    },
    {
        id: 7, category: "legal",
        fact: "WorkSafe (or SafeWork) is the government regulator that enforces WHS laws.",
        right: "WorkSafe / SafeWork",
        wrong: ["The Police Force", "The Trade Union", "The Site Manager"],
        variations: [
            "Who is the government body responsible for enforcing WHS laws?",
            "If a serious accident occurs, which authority investigates?",
            "What is the role of WorkSafe/SafeWork?",
            "Which organisation issues WHS licences?"
        ]
    },
    {
        id: 8, category: "legal",
        fact: "You must not work under the influence of drugs or alcohol (0.00% BAC for high risk).",
        right: "0.00% (Zero)",
        wrong: ["0.05%", "0.02%", "Any amount is fine if you are careful"],
        variations: [
            "What is the standard regarding drugs and alcohol on a construction site?",
            "For high-risk construction work, the required Blood Alcohol Content (BAC) is usually...",
            "If you are under the influence of alcohol, you must...",
            "True or False: A couple of beers at lunch is acceptable on site."
        ]
    },
    {
        id: 9, category: "legal",
        fact: "Bullying and harassment are considered workplace hazards.",
        right: "A workplace hazard",
        wrong: ["Part of the job culture", "Character building", "Acceptable behaviour"],
        variations: [
            "How is workplace bullying classified under the WHS Act?",
            "Is psychological harm considered a safety issue?",
            "Which of the following is considered a psychosocial hazard?",
            "True or False: Bullying is just 'banter' and not a hazard."
        ]
    },
    {
        id: 10, category: "legal",
        fact: "Employers must provide essential PPE for free.",
        right: "The Employer",
        wrong: ["The Worker", "The Union", "The Government"],
        variations: [
            "Who pays for essential Personal Protective Equipment (PPE)?",
            "Can an employer charge you for a hard hat?",
            "If you need safety glasses for the job, your employer must...",
            "True or False: You must buy your own high-vis vest for a new job."
        ]
    },
    {
        id: 11, category: "legal",
        fact: "You have the right to cease work if it is immediately dangerous.",
        right: "Stop work immediately",
        wrong: ["Keep working carefully", "Wait for the shift to end", "Ask for a pay rise"],
        variations: [
            "If a task poses an immediate threat to life, you should...",
            "What right does a worker have regarding dangerous work?",
            "When can you legally refuse to work?",
            "If you feel unsafe, the first step is to..."
        ]
    },
    {
        id: 12, category: "legal",
        fact: "PCBU stands for Person Conducting a Business or Undertaking (The Employer).",
        right: "Person Conducting a Business or Undertaking",
        wrong: ["Personal Construction Building Union", "Private Contractor Building Unit", "Police Constable Business Unit"],
        variations: [
            "What does the acronym PCBU stand for?",
            "In WHS law, the employer is often referred to as the...",
            "Who is the primary duty holder under the WHS Act?",
            "The term PCBU refers to..."
        ]
    },
    {
        id: 13, category: "legal",
        fact: "Contractors have the same safety duties as direct employees.",
        right: "Yes, the same duties",
        wrong: ["No, they have fewer duties", "No, they are responsible for themselves only", "Only if they are full time"],
        variations: [
            "Do independent contractors have a Duty of Care?",
            "Are contractors subject to the same WHS rules as employees?",
            "True or False: Contractors can ignore site safety rules.",
            "Who is responsible for a contractor's safety?"
        ]
    },
    {
        id: 14, category: "legal",
        fact: "Horseplay and practical jokes are prohibited on site.",
        right: "Prohibited / Not allowed",
        wrong: ["Encouraged for morale", "Allowed during breaks", "Allowed in safe zones"],
        variations: [
            "How are practical jokes viewed on a construction site?",
            "Horseplay on site is...",
            "True or False: Pranks are a good way to relieve stress on site.",
            "Playing tricks on co-workers can lead to..."
        ]
    },
    {
        id: 15, category: "legal",
        fact: "Incident reports must be filled out as soon as possible after an event.",
        right: "As soon as possible",
        wrong: ["At the end of the month", "Only if someone asks", "Before the next payroll"],
        variations: [
            "When should an incident report be completed?",
            "If you witness a 'near miss', you should...",
            "Why is it important to report minor incidents immediately?",
            "Who is responsible for reporting incidents?"
        ]
    },

    // --- TOPIC B: HAZARDS & CONTROL (16-30) ---
    {
        id: 16, category: "hazard",
        fact: "A Hazard is anything with the potential to cause harm.",
        right: "A Hazard",
        wrong: ["A Risk", "An Accident", "A Control Measure"],
        variations: [
            "Anything with the potential to cause injury or disease is called...",
            "Which term describes a source of potential harm?",
            "Is a frayed electrical cord a hazard or a risk?",
            "What is the definition of a 'Hazard'?"
        ]
    },
    {
        id: 17, category: "hazard",
        fact: "A Risk is the likelihood that a hazard will cause injury.",
        right: "A Risk",
        wrong: ["A Hazard", "A Safety Plan", "An Incident"],
        variations: [
            "The chance or probability of a hazard causing harm is called...",
            "How does a risk differ from a hazard?",
            "Assessing how likely an accident is to occur is called...",
            "What is the definition of 'Risk'?"
        ]
    },
    {
        id: 18, category: "hazard",
        fact: "The best way to control a hazard is 'Elimination' (Removing it completely).",
        right: "Elimination",
        wrong: ["Substitution", "Engineering", "PPE"],
        variations: [
            "What is the most effective level in the Hierarchy of Control?",
            "If possible, the best way to handle a hazard is to...",
            "Which control measure is at the top of the Hierarchy?",
            "Removing a trip hazard completely is an example of..."
        ]
    },
    {
        id: 19, category: "hazard",
        fact: "The least effective way to control a hazard is 'PPE' (Last Resort).",
        right: "PPE (Personal Protective Equipment)",
        wrong: ["Elimination", "Isolation", "Administration"],
        variations: [
            "What is the LEAST effective control measure?",
            "Which control should be used only as a last resort?",
            "In the Hierarchy of Control, where does PPE sit?",
            "Why is PPE considered the lowest level of control?"
        ]
    },
    {
        id: 20, category: "hazard",
        fact: "'Substitution' means replacing a hazard with something safer.",
        right: "Substitution",
        wrong: ["Elimination", "Isolation", "Engineering"],
        variations: [
            "Replacing a toxic chemical with a non-toxic one is an example of...",
            "What does 'Substitution' mean in risk control?",
            "Using a battery drill instead of a corded drill to avoid trip hazards is...",
            "Which control measure involves swapping a danger for a safer alternative?"
        ]
    },
    {
        id: 21, category: "hazard",
        fact: "'Isolation' means separating people from the hazard (e.g., barriers).",
        right: "Isolation",
        wrong: ["Substitution", "Administration", "PPE"],
        variations: [
            "Putting up a fence around a deep hole is an example of...",
            "What does 'Isolation' mean in the context of safety?",
            "Using concrete barriers to separate workers from traffic is...",
            "Which control measure involves creating a distance or barrier?"
        ]
    },
    {
        id: 22, category: "hazard",
        fact: "'Engineering' controls involve using machines or guards to make work safer.",
        right: "Engineering Control",
        wrong: ["Administrative Control", "PPE", "Elimination"],
        variations: [
            "Using a trolley to move heavy loads instead of carrying them is an example of...",
            "Installing a guard on a saw blade is what type of control?",
            "What is an 'Engineering' control?",
            "Using mechanical aids to lift heavy items is..."
        ]
    },
    {
        id: 23, category: "hazard",
        fact: "'Administration' controls involve training, signs, and rosters.",
        right: "Administrative Control",
        wrong: ["Engineering Control", "Isolation", "Elimination"],
        variations: [
            "Putting up a warning sign is an example of what control?",
            "Rotating shifts to reduce fatigue is an example of...",
            "What are 'Administrative' controls?",
            "Training workers on safe lifting techniques is..."
        ]
    },
    {
        id: 24, category: "hazard",
        fact: "Manual Handling involves lifting, pushing, pulling, or holding.",
        right: "Manual Handling",
        wrong: ["Mechanical Lifting", "Static Load", "Ergonomics"],
        variations: [
            "Lifting, pushing, pulling, or holding objects is known as...",
            "Which task is the most common cause of back injuries?",
            "What activity covers moving items by hand?",
            "True or False: Pushing a trolley is a form of manual handling."
        ]
    },
    {
        id: 25, category: "hazard",
        fact: "Safe Lifting: Bend knees, keep back straight, load close to body.",
        right: "Bend knees, back straight",
        wrong: ["Bend back, legs straight", "Twist while lifting", "Hold load away from body"],
        variations: [
            "What is the correct technique for lifting a heavy box?",
            "When lifting, you should keep the load...",
            "The strongest muscles to use for lifting are in your...",
            "To avoid back injury, you should never..."
        ]
    },
    {
        id: 26, category: "hazard",
        fact: "Noise above 85 decibels (dB) requires hearing protection.",
        right: "85 dB",
        wrong: ["100 dB", "60 dB", "120 dB"],
        variations: [
            "At what noise level is hearing protection mandatory?",
            "Prolonged exposure to noise above ___ dB can cause permanent damage.",
            "If you have to shout to be heard 1 meter away, the noise is likely above...",
            "What is the safe exposure limit for noise over 8 hours?"
        ]
    },
    {
        id: 27, category: "hazard",
        fact: "UV Radiation (Sun) causes skin cancer and permanent eye damage.",
        right: "Skin cancer / Sunburn",
        wrong: ["Hearing loss", "Respiratory failure", "Chemical burns"],
        variations: [
            "What is the main risk of working outdoors in the sun?",
            "Long term exposure to UV radiation can lead to...",
            "Why should you wear long sleeves and sunscreen on site?",
            "Which disease is associated with UV radiation?"
        ]
    },
    {
        id: 28, category: "hazard",
        fact: "Asbestos removal requires a specific Class A or B licence.",
        right: "A specific Asbestos Licence",
        wrong: ["A standard White Card", "A driver's licence", "A university degree"],
        variations: [
            "Can you remove asbestos with just a White Card?",
            "What is required to legally remove large amounts of asbestos?",
            "Asbestos is classified as...",
            "Who should you call if you find unidentified fibrous material?"
        ]
    },
    {
        id: 29, category: "hazard",
        fact: "Silica dust (cutting concrete) is a respiratory hazard.",
        right: "Silica Dust",
        wrong: ["Wood chips", "Water vapour", "Plastic filings"],
        variations: [
            "Cutting concrete or brick creates which dangerous dust?",
            "Which dust can cause permanent lung disease (Silicosis)?",
            "Why must you use water or extraction when cutting tiles?",
            "Respirators are essential when working with..."
        ]
    },
    {
        id: 30, category: "hazard",
        fact: "Fatigue is a major cause of accidents; take breaks.",
        right: "Fatigue",
        wrong: ["Hunger", "Boredom", "Excitement"],
        variations: [
            "Being extremely tired at work is known as...",
            "Which factor reduces reaction time and increases accident risk?",
            "How should you manage fatigue on a long shift?",
            "True or False: Fatigue can be as dangerous as intoxication."
        ]
    },

    // --- TOPIC C: SIGNS & TAGS (31-40) ---
    {
        id: 31, category: "signs",
        fact: "A Blue Circle with a White Symbol is a MANDATORY sign (Must do).",
        right: "Mandatory (Must do)",
        wrong: ["Warning (Be careful)", "Prohibition (Do not do)", "Emergency Info"],
        variations: [
            "You see a BLUE circle with a white symbol. What does it mean?",
            "Which sign tells you that you MUST wear specific PPE?",
            "A sign indicating 'Eye Protection Must Be Worn' would be...",
            "Mandatory signs are always which colour?"
        ]
    },
    {
        id: 32, category: "signs",
        fact: "A Red Circle with a Diagonal Line is a PROHIBITION sign (Do not do).",
        right: "Prohibition (Do not do)",
        wrong: ["Mandatory (Must do)", "Warning (Be careful)", "First Aid"],
        variations: [
            "You see a RED circle with a line through it. What does it mean?",
            "A 'No Entry' sign is an example of which category?",
            "Which sign indicates that an action is forbidden?",
            "Prohibition signs are always which colour?"
        ]
    },
    {
        id: 33, category: "signs",
        fact: "A Yellow Triangle with a Black Symbol is a WARNING sign.",
        right: "Warning (Be careful)",
        wrong: ["Mandatory Action", "Prohibition", "Safe Condition"],
        variations: [
            "You see a YELLOW triangle with a black symbol. What does it mean?",
            "A 'Slippery Surface' sign is an example of...",
            "Which sign alerts you to a potential hazard?",
            "Warning signs are always which colour?"
        ]
    },
    {
        id: 34, category: "signs",
        fact: "A Green Rectangle with a White Symbol is an EMERGENCY/FIRST AID sign.",
        right: "Emergency / First Aid",
        wrong: ["Fire Safety", "Warning", "Mandatory Action"],
        variations: [
            "You see a GREEN sign with white text. What does it indicate?",
            "An 'Emergency Exit' sign is typically which colour?",
            "Where would you look to find the First Aid kit?",
            "Safe condition and First Aid signs are always..."
        ]
    },
    {
        id: 35, category: "signs",
        fact: "A Red Rectangle with a White Symbol is a FIRE SAFETY sign.",
        right: "Fire Safety",
        wrong: ["Emergency Exit", "Warning", "Mandatory Action"],
        variations: [
            "You see a RED rectangular sign. What does it indicate?",
            "A sign pointing to a Fire Hose Reel is which colour?",
            "Fire equipment locations are marked by...",
            "What distinguishes a Fire Safety sign from a Prohibition sign?"
        ]
    },
    {
        id: 36, category: "signs",
        fact: "A Lockout Tag means 'Do Not Operate' because someone is working on the machine.",
        right: "Do Not Operate",
        wrong: ["Operate with caution", "Machine is new", "Ready for service"],
        variations: [
            "What does a 'Personal Danger Tag' (Lockout Tag) mean?",
            "If you see a tag on a switch with a person's name and 'Do Not Operate', you must...",
            "Who is allowed to remove a personal lockout tag?",
            "Why are lockout tags used?"
        ]
    },
    {
        id: 37, category: "signs",
        fact: "An 'Out of Service' tag means the equipment is faulty and must not be used.",
        right: "Do not use the tool",
        wrong: ["Use carefully", "Fix it yourself", "Use only for light work"],
        variations: [
            "You see a yellow 'Out of Service' tag on a drill. What should you do?",
            "Which tag indicates that a tool is broken?",
            "Can you use a tool with an 'Out of Service' tag?",
            "If you find a faulty power tool, what should you attach to it?"
        ]
    },
    {
        id: 38, category: "signs",
        fact: "Traffic Management Plans separate pedestrians from vehicles/plant.",
        right: "Traffic Management Plan",
        wrong: ["Site Security Plan", "Environmental Plan", "Noise Control Plan"],
        variations: [
            "What is used to keep pedestrians safe from moving vehicles?",
            "Designated walkways are part of the...",
            "Why are barriers placed between workers and trucks?",
            "The main risk of working near plant (machines) is..."
        ]
    },
    {
        id: 39, category: "signs",
        fact: "Hoardings/Barricades prevent public access to the site.",
        right: "Hoardings / Fencing",
        wrong: ["Warning Tape", "Traffic Cones", "A Security Guard"],
        variations: [
            "What is used to secure the perimeter of a construction site?",
            "How do we protect the public from site hazards?",
            "Solid walls around a site are called...",
            "Why must a site be fully fenced?"
        ]
    },
    {
        id: 40, category: "signs",
        fact: "High Visibility (Hi-Vis) clothing makes you visible to machine operators.",
        right: "To be seen by operators",
        wrong: ["To keep warm", "To look professional", "To carry tools"],
        variations: [
            "Why is Hi-Vis clothing mandatory on construction sites?",
            "The best way to ensure plant operators see you is to...",
            "Yellow or Orange vests are worn for...",
            "What is the main safety feature of a vest?"
        ]
    },

    // --- TOPIC D: EMERGENCY & FIRE (41-50) ---
    {
        id: 41, category: "emergency",
        fact: "A Water Extinguisher is RED (No Band) and used for Wood/Paper fires.",
        right: "Red (No band)",
        wrong: ["Red with White Band", "Red with Black Band", "Blue"],
        variations: [
            "What colour is a Water fire extinguisher?",
            "Which extinguisher is suitable for a Class A fire (Wood, Paper)?",
            "You see a completely RED extinguisher. What is inside?",
            "Never use a Water extinguisher on..."
        ]
    },
    {
        id: 42, category: "emergency",
        fact: "A Dry Chemical Powder Extinguisher is RED with a WHITE Band.",
        right: "Red with White Band",
        wrong: ["Red with Blue Band", "Red with Black Band", "Red with Oatmeal Band"],
        variations: [
            "What colour band does a Dry Chemical Powder extinguisher have?",
            "Which extinguisher is the best 'all-rounder' for most fires?",
            "A red cylinder with a white band contains...",
            "Which extinguisher can be used on Electrical (E) and Flammable Liquid (B) fires?"
        ]
    },
    {
        id: 43, category: "emergency",
        fact: "A Foam Extinguisher is RED with a BLUE Band (for Liquid fires).",
        right: "Red with Blue Band",
        wrong: ["Red with White Band", "Red with Black Band", "Solid Red"],
        variations: [
            "What colour band does a Foam extinguisher have?",
            "Which extinguisher is best for a petrol or oil fire?",
            "A red cylinder with a blue band contains...",
            "To fight a flammable liquid fire, you should use..."
        ]
    },
    {
        id: 44, category: "emergency",
        fact: "A CO2 Extinguisher is RED with a BLACK Band (for Electrical fires).",
        right: "Red with Black Band",
        wrong: ["Red with White Band", "Red with Blue Band", "Solid Red"],
        variations: [
            "What colour band does a Carbon Dioxide (CO2) extinguisher have?",
            "Which extinguisher is best for sensitive electrical equipment?",
            "A red cylinder with a black band contains...",
            "To fight an electrical computer fire, you should choose..."
        ]
    },
    {
        id: 45, category: "emergency",
        fact: "A Wet Chemical Extinguisher is RED with an OATMEAL Band (Kitchen fires).",
        right: "Red with Oatmeal Band",
        wrong: ["Red with Green Band", "Red with Yellow Band", "Solid Red"],
        variations: [
            "What colour band indicates a Wet Chemical extinguisher?",
            "Which extinguisher is designed for deep fat fryer fires?",
            "In a canteen kitchen, you would expect to find which extinguisher?",
            "An Oatmeal band indicates..."
        ]
    },
    {
        id: 46, category: "emergency",
        fact: "SDS stands for 'Safety Data Sheet' (Chemical safety info).",
        right: "Safety Data Sheet",
        wrong: ["Site Daily Schedule", "Safety Design System", "Standard Drill Sequence"],
        variations: [
            "What does the acronym SDS stand for?",
            "Where would you find information about First Aid for a specific chemical?",
            "Before using a new chemical on site, you must read the...",
            "An SDS provides information on..."
        ]
    },
    {
        id: 47, category: "emergency",
        fact: "In an evacuation, go immediately to the 'Emergency Assembly Point'.",
        right: "Emergency Assembly Point",
        wrong: ["Your car", "The canteen", "The roof"],
        variations: [
            "When the evacuation alarm sounds, where should you go?",
            "The designated safe area during an emergency is called...",
            "What should you do if you hear the site emergency siren?",
            "After evacuating, you must wait at the..."
        ]
    },
    {
        id: 48, category: "emergency",
        fact: "Do not re-enter the building until the 'All Clear' is given.",
        right: "Wait for 'All Clear'",
        wrong: ["Go back when the noise stops", "Go back to get your keys", "Go back if you see smoke"],
        variations: [
            "When is it safe to return to work after an evacuation?",
            "Who gives the permission to re-enter a site?",
            "If the alarm stops, should you go back inside immediately?",
            "The 'All Clear' is usually given by..."
        ]
    },
    {
        id: 49, category: "emergency",
        fact: "An RCD (Residual Current Device) protects against electric shock.",
        right: "RCD (Safety Switch)",
        wrong: ["Standard Fuse", "Circuit Breaker", "Power Strip"],
        variations: [
            "What is the purpose of an RCD (Residual Current Device)?",
            "Which device cuts the power instantly if a fault is detected?",
            "To prevent electrocution, portable power boards must have an...",
            "What does RCD stand for?"
        ]
    },
    {
        id: 50, category: "emergency",
        fact: "First Aid kits must be accessible on every site.",
        right: "Accessible to everyone",
        wrong: ["Locked in the office", "Hidden in a van", "Only for managers"],
        variations: [
            "Where should First Aid kits be located?",
            "Who should have access to the First Aid kit?",
            "If you have a minor injury, you should use the...",
            "True or False: First Aid kits must be kept locked at all times."
        ]
    },

    // --- TOPIC E: HIGH RISK WORK (51-60) ---
    {
        id: 51, category: "hazard",
        fact: "Forklift operation requires a 'High Risk Work Licence' (LF).",
        right: "High Risk Work Licence",
        wrong: ["Car Licence", "White Card", "Forklift Certificate"],
        variations: [
            "What licence is required to operate a forklift?",
            "Does a White Card allow you to drive a forklift?",
            "The 'LF' class licence allows you to operate...",
            "Operating a forklift without a licence is..."
        ]
    },
    {
        id: 52, category: "hazard",
        fact: "Scaffolding over 4m requires a licence.",
        right: "4 meters",
        wrong: ["2 meters", "10 meters", "1 meter"],
        variations: [
            "At what height does scaffolding require a licensed scaffolder?",
            "Can a labourer build a 5-meter scaffold?",
            "A basic scaffolding licence is required for heights over...",
            "Who is allowed to alter a scaffold?"
        ]
    },
    {
        id: 53, category: "hazard",
        fact: "Working at Heights generally requires fall protection above 2 meters.",
        right: "2 meters",
        wrong: ["5 meters", "10 meters", "Ground level"],
        variations: [
            "Fall protection is generally mandatory at heights above...",
            "If working on a roof 3 meters high, you must use...",
            "A harness is required when there is a risk of falling more than...",
            "Working at heights involves..."
        ]
    },
    {
        id: 54, category: "hazard",
        fact: "Confined Spaces require a permit and a standby person (sentry).",
        right: "Standby Person / Sentry",
        wrong: ["A camera", "A phone", "A loud whistle"],
        variations: [
            "When working in a confined space, who must be stationed outside?",
            "Is a permit required to enter a confined space?",
            "A standby person's main role is to...",
            "Which of these is a confined space?"
        ]
    },
    {
        id: 55, category: "hazard",
        fact: "Excavations deeper than 1.5m must be shored or benched.",
        right: "1.5 meters",
        wrong: ["3 meters", "0.5 meters", "5 meters"],
        variations: [
            "At what depth must an excavation be shored or benched?",
            "The risk of trench collapse becomes critical at...",
            "What protection is needed for a 2m deep trench?",
            "Shoring prevents..."
        ]
    },
    {
        id: 56, category: "hazard",
        fact: "EWP stands for Elevating Work Platform (e.g., Scissor Lift).",
        right: "Elevating Work Platform",
        wrong: ["Electrical Work Platform", "Emergency Work Point", "External Wall Panel"],
        variations: [
            "What does the acronym EWP stand for?",
            "A Scissor Lift or Boom Lift is known as an...",
            "Do you need training to operate an EWP?",
            "Falls from EWPs are prevented by..."
        ]
    },
    {
        id: 57, category: "legal",
        fact: "SWMS (Safe Work Method Statement) is required for high-risk construction work.",
        right: "Safe Work Method Statement",
        wrong: ["Safety Work Management System", "Site Work Method Sheet", "Standard Work Manual"],
        variations: [
            "What does SWMS stand for?",
            "For all high-risk construction work, you must prepare a...",
            "A SWMS outlines the hazards and the...",
            "Who should sign the SWMS?"
        ]
    },
    {
        id: 58, category: "hazard",
        fact: "A White Card does NOT allow you to remove asbestos.",
        right: "No, never",
        wrong: ["Yes, up to 10sqm", "Yes, if you wear a mask", "Yes, if supervised"],
        variations: [
            "Does holding a White Card allow you to remove asbestos?",
            "True or False: Asbestos removal requires a separate licence.",
            "If you find asbestos, you should...",
            "General construction induction covers..."
        ]
    },
    {
        id: 59, category: "hazard",
        fact: "Electrical work must only be done by a licensed electrician.",
        right: "Licensed Electrician",
        wrong: ["Handyman", "Site Supervisor", "Experienced Labourer"],
        variations: [
            "Who is legally allowed to install or repair electrical wiring?",
            "Can a plumber fix a broken power point?",
            "Working on live electrical equipment is...",
            "If a tool gives you a tingle, you should..."
        ]
    },
    {
        id: 60, category: "hazard",
        fact: "'Test and Tag' on electrical tools must be done every 3 months.",
        right: "Every 3 months",
        wrong: ["Every year", "Every week", "Never"],
        variations: [
            "How often must electrical tools on a construction site be tested and tagged?",
            "A coloured tag on a power lead indicates...",
            "If a tag is out of date, the tool is considered...",
            "Who can perform Testing and Tagging?"
        ]
    }
];

// --- THE SMART GENERATOR ---
function generateQuestions() {
    let finalQ = [];
    
    coreData.forEach(item => {
        item.variations.forEach((variant, vIndex) => {
            
            // 1. Determine Correct Answer from data
            let right = item.right;

            // 2. Build Options (Right + Wrongs)
            // Ensure no duplicates
            let options = [right, ...item.wrong];

            // 3. Shuffle Options manually
            for (let i = options.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [options[i], options[j]] = [options[j], options[i]];
            }

            // 4. Find Correct Index
            let correctIndex = options.indexOf(right);

            // 5. Push Object (Double Format for Safety)
            // We provide BOTH 'text' and 'question' keys to prevent script errors
            // We provide BOTH 'answer' (index) and 'correct' (string/index) keys
            finalQ.push({
                id: item.id,
                category: item.category,
                
                // SAFETY NET: Variable names for different script versions
                question: variant, 
                text: variant,
                
                options: options,
                
                // SAFETY NET: Correct answer formats
                answer: correctIndex, // Index (0-3) for logic
                correct: correctIndex, // Index alias
                
                explanation: item.fact
            });
        });
    });
    
    return finalQ;
}

// EXPORT
const questions = generateQuestions();