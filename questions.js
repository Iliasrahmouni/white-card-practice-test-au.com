// ==========================================================================
// WHITE CARD AUSTRALIA - ULTIMATE MASTER DATABASE (240 QUESTIONS)
// Source: Official CPCCWHS1001 PDF
// ==========================================================================

const questions = [
    // --- TOPIC A: LEGAL & RESPONSIBILITIES ---
    {
        id: 1, category: "legal",
        question: "What is the main purpose of the general construction induction (white card) training?",
        options: ["To provide basic knowledge of construction work health and safety", "To teach you how to use power tools", "To give you a license to drive a forklift", "To teach you how to read blueprints"],
        answer: 0,
        explanation: "The White Card is a general safety induction required for everyone on site."
    },
    {
        id: 2, category: "legal",
        question: "What does 'WHS' stand for in Australia?",
        options: ["Work Health and Safety", "Work Hard Safely", "Workers Health System", "Workplace Hazard Safety"],
        answer: 0,
        explanation: "WHS is the standard abbreviation for Australia's safety laws."
    },
    {
        id: 3, category: "legal",
        question: "Who has the primary duty of care under WHS legislation?",
        options: ["The PCBU (Person Conducting a Business or Undertaking)", "The HSR", "The Site Supervisor", "The Union"],
        answer: 0,
        explanation: "The PCBU (Employer) has the primary duty to ensure safety."
    },
    {
        id: 4, category: "legal",
        question: "What is a PCBU required to provide to workers?",
        options: ["A safe work environment, training, and PPE", "Lunch and transport", "Tools and boots", "Membership to a union"],
        answer: 0,
        explanation: "Employers must provide a safe workplace and necessary safety gear."
    },
    {
        id: 5, category: "legal",
        question: "What is a worker's main duty under WHS law?",
        options: ["To take reasonable care for their own health and safety", "To fix all hazards they find", "To write the safety policy", "To supervise contractors"],
        answer: 0,
        explanation: "Workers must care for their own safety and comply with instructions."
    },
    {
        id: 6, category: "legal",
        question: "Give one example of a person considered a 'worker' under WHS law.",
        options: ["A contractor or subcontractor", "A visitor", "A pedestrian", "A neighbour"],
        answer: 0,
        explanation: "Contractors, employees, apprentices, and trainees are all 'workers'."
    },
    {
        id: 7, category: "legal",
        question: "What is 'due diligence' for an officer (e.g., company director)?",
        options: ["Taking reasonable steps to ensure the business complies with WHS laws", "Checking the bank accounts", "Hiring the cheapest labour", "Ignoring safety reports"],
        answer: 0,
        explanation: "Officers must actively ensure the company meets its safety obligations."
    },
    {
        id: 8, category: "legal",
        question: "Why is 'reasonably practicable' an important concept in WHS?",
        options: ["It balances the level of risk against the cost and effort to control it", "It means you don't have to do anything", "It means safety is optional", "It allows you to ignore expensive safety measures"],
        answer: 0,
        explanation: "Safety measures must be practical and proportional to the risk."
    },
    {
        id: 9, category: "legal",
        question: "Who enforces WHS laws in each state or territory?",
        options: ["The State/Territory Regulator (e.g., SafeWork/WorkSafe)", "The Police", "The CFMEU", "The Australian Government"],
        answer: 0,
        explanation: "Regulators like SafeWork NSW or WorkSafe VIC enforce the laws."
    },
    {
        id: 10, category: "legal",
        question: "What can WHS inspectors do if they find serious safety breaches?",
        options: ["Issue fines and stop-work notices", "Only give a warning", "Ask you to go home", "Call your parents"],
        answer: 0,
        explanation: "Inspectors have the power to fine businesses and shut down sites."
    },
    {
        id: 11, category: "legal",
        question: "What is the legal status of a Safe Work Method Statement (SWMS) for high-risk work?",
        options: ["It is a mandatory legal document", "It is optional", "It is just a guideline", "It is only for the boss"],
        answer: 0,
        explanation: "SWMS is legally required for all high-risk construction work."
    },
    {
        id: 12, category: "legal",
        question: "Why must workers follow site safety rules and procedures?",
        options: ["To prevent injury and comply with the law", "To avoid getting fired", "Because the boss said so", "To save time"],
        answer: 0,
        explanation: "Following rules is a legal duty to keep everyone safe."
    },
    {
        id: 13, category: "legal",
        question: "Can a worker be fined for ignoring serious safety requirements?",
        options: ["Yes, workers can be personally fined", "No, only the company can be fined", "No, they just get fired", "Only if they injure someone"],
        answer: 0,
        explanation: "Workers have individual legal liability for reckless behaviour."
    },
    {
        id: 14, category: "legal",
        question: "What are 'codes of practice'?",
        options: ["Practical guides on how to achieve safety standards", "Strict laws you must memorize", "Suggestions you can ignore", "Rules for unions"],
        answer: 0,
        explanation: "Codes provide practical guidance on how to comply with the WHS Act."
    },
    {
        id: 15, category: "legal",
        question: "Are codes of practice legally binding like Acts and Regulations?",
        options: ["No, but they can be used in court as evidence of best practice", "Yes, they are exactly the same as laws", "No, they are irrelevant", "Only in Queensland"],
        answer: 0,
        explanation: "They are not laws, but ignoring them can prove negligence."
    },
    {
        id: 16, category: "legal",
        question: "What does 'health' include in WHS law besides physical health?",
        options: ["Psychological health", "Financial health", "Social status", "Fitness level"],
        answer: 0,
        explanation: "WHS laws cover mental health (stress, bullying) as well as physical."
    },
    {
        id: 17, category: "hazard",
        question: "Give one example of a psychological hazard on a construction site.",
        options: ["Bullying or harassment", "Heavy lifting", "Noise", "Dust"],
        answer: 0,
        explanation: "Psychological hazards affect mental well-being."
    },
    {
        id: 18, category: "legal",
        question: "Why is safety everyone's responsibility on a construction site?",
        options: ["Because hazards can affect anyone", "Because the boss is busy", "Because it saves money", "Because the police said so"],
        answer: 0,
        explanation: "Safety relies on everyone doing their part."
    },
    {
        id: 19, category: "legal",
        question: "What key document must a worker usually complete before starting work on a site?",
        options: ["Site Induction Form", "Tax Return", "Resume", "Leave Application"],
        answer: 0,
        explanation: "Induction ensures you know the specific site risks."
    },
    {
        id: 20, category: "legal",
        question: "What is the purpose of a site induction?",
        options: ["To inform workers of site-specific hazards and rules", "To introduce workers to each other", "To hand out paychecks", "To check trade qualifications"],
        answer: 0,
        explanation: "Every site has unique hazards; induction covers these specific risks."
    },
    {
        id: 21, category: "legal",
        question: "When can a PCBU refuse a worker access to site?",
        options: ["If the worker does not have a valid White Card", "If the worker is 5 minutes late", "If the worker is an apprentice", "If the worker has their own tools"],
        answer: 0,
        explanation: "You cannot legally enter a construction site without a White Card."
    },
    {
        id: 22, category: "legal",
        question: "How long is a white card generally valid?",
        options: ["Indefinitely (unless you leave the industry for 2 years)", "1 year", "5 years", "10 years"],
        answer: 0,
        explanation: "It does not expire, but some states require a refresher after 2 years absence."
    },
    {
        id: 23, category: "legal",
        question: "What should you do if you lose your white card?",
        options: ["Contact the RTO that issued it for a replacement", "Buy a fake one online", "Do the course again immediately", "Work without it"],
        answer: 0,
        explanation: "The RTO (Training Organisation) keeps your records and can reissue it."
    },
    {
        id: 24, category: "legal",
        question: "Can you lend your white card to someone else?",
        options: ["No, it is a personal document", "Yes, if they look like you", "Yes, for one day only", "Yes, if they are your brother"],
        answer: 0,
        explanation: "White Cards are non-transferable identification."
    },
    {
        id: 25, category: "legal",
        question: "Why is record-keeping important in WHS?",
        options: ["To prove compliance and manage safety", "To waste paper", "To keep the boss happy", "To hide mistakes"],
        answer: 0,
        explanation: "Records (like SWMS and inductions) prove that safety steps were taken."
    },
    {
        id: 26, category: "hazard",
        question: "What is a PCBU required to do before introducing new plant or equipment?",
        options: ["Assess the risks and train workers", "Paint it yellow", "Hide it", "Use it immediately"],
        answer: 0,
        explanation: "New equipment introduces new risks that must be managed."
    },
    {
        id: 27, category: "legal",
        question: "When must a PCBU review WHS risk controls?",
        options: ["After an incident or if a control fails", "Every Christmas", "Never", "Only when the police arrive"],
        answer: 0,
        explanation: "Risk controls must be reviewed to ensure they still work."
    },
    {
        id: 28, category: "legal",
        question: "Name one factor that may affect what is 'reasonably practicable'.",
        options: ["The cost of the safety measure versus the risk", "The weather", "The worker's mood", "The time of day"],
        answer: 0,
        explanation: "Cost is a factor, but safety comes first."
    },
    {
        id: 29, category: "legal",
        question: "Can subcontractors have WHS duties on site?",
        options: ["Yes, they are considered workers", "No, they are independent", "Only if they are paid extra", "Only if they stay for a week"],
        answer: 0,
        explanation: "Subcontractors have the same WHS duties as employees."
    },
    {
        id: 30, category: "legal",
        question: "What is the worker's duty regarding WHS training?",
        options: ["To attend and participate", "To ignore it", "To sleep through it", "To skip it"],
        answer: 0,
        explanation: "Workers must participate in training provided by the employer."
    },
    {
        id: 31, category: "legal",
        question: "What is WHS consultation?",
        options: ["Sharing information and views between employers and workers", "The boss telling everyone what to do", "A secret meeting", "Ignoring worker complaints"],
        answer: 0,
        explanation: "Consultation ensures everyone has a say in safety."
    },
    {
        id: 32, category: "legal",
        question: "Why is consultation important?",
        options: ["It helps identify hazards workers know about", "It wastes time", "It slows down work", "It is not important"],
        answer: 0,
        explanation: "Workers often know risks that managers miss."
    },
    {
        id: 33, category: "legal",
        question: "Name one common form of consultation on a construction site.",
        options: ["Toolbox meetings", "Email newsletters", "Phone calls", "Posters"],
        answer: 0,
        explanation: "Toolbox talks are the standard daily safety meeting."
    },
    {
        id: 34, category: "legal",
        question: "What is a Health and Safety Representative (HSR)?",
        options: ["A worker elected to represent others on safety", "A government inspector", "The site manager", "A union boss"],
        answer: 0,
        explanation: "HSRs are the voice of the workers for safety issues."
    },
    {
        id: 35, category: "legal",
        question: "Can workers raise safety issues directly with their HSR?",
        options: ["Yes, that is their role", "No, only with the boss", "No, HSRs are busy", "Only in writing"],
        answer: 0,
        explanation: "HSRs exist to hear worker concerns."
    },
    {
        id: 36, category: "legal",
        question: "What can an HSR request if they see unresolved safety issues?",
        options: ["Assistance from the regulator (WorkSafe)", "A pay rise", "A holiday", "A new job"],
        answer: 0,
        explanation: "HSRs have legal powers to call in help."
    },
    {
        id: 37, category: "legal",
        question: "What is a toolbox talk?",
        options: ["A short safety meeting on site", "A discussion about tools", "A lunch break", "A meeting with the client"],
        answer: 0,
        explanation: "It is a brief briefing on daily risks and tasks."
    },
    {
        id: 38, category: "legal",
        question: "What should workers do during toolbox talks?",
        options: ["Listen and ask questions about safety", "Look at their phones", "Sleep", "Leave"],
        answer: 0,
        explanation: "Active participation ensures understanding."
    },
    {
        id: 39, category: "hazard",
        question: "Why should workers report hazards and near misses?",
        options: ["To prevent future accidents", "To get someone in trouble", "To waste time", "To get a bonus"],
        answer: 0,
        explanation: "Reporting near misses fixes problems before they cause injury."
    },
    {
        id: 40, category: "legal",
        question: "Who should a worker report hazards or incidents to first?",
        options: ["Their immediate supervisor", "The police", "The media", "Their family"],
        answer: 0,
        explanation: "Always follow the site chain of command first."
    },
    {
        id: 41, category: "emergency",
        question: "What is an incident report used for?",
        options: ["To record details of an accident for investigation", "To punish workers", "To calculate pay", "To checking attendance"],
        answer: 0,
        explanation: "Records help prevent reoccurrence and are legal proof."
    },
    {
        id: 42, category: "emergency",
        question: "When should an incident be reported?",
        options: ["Immediately", "Next week", "Never", "Before lunch"],
        answer: 0,
        explanation: "Delaying reporting can lead to lost evidence or further injury."
    },
    {
        id: 43, category: "emergency",
        question: "What is a 'notifiable incident'?",
        options: ["A serious injury, death, or dangerous incident", "A small cut", "A lost tool", "Being late"],
        answer: 0,
        explanation: "Serious events must be reported to the State Regulator."
    },
    {
        id: 44, category: "emergency",
        question: "Who must notify the WHS regulator of a notifiable incident?",
        options: ["The PCBU (Employer)", "The victim", "The witness", "The apprentice"],
        answer: 0,
        explanation: "The employer has the strict legal duty to notify."
    },
    {
        id: 45, category: "emergency",
        question: "What must happen to the incident scene after a notifiable incident, unless it is unsafe?",
        options: ["It must be preserved (not disturbed)", "It must be cleaned up immediately", "Work must continue", "It should be painted"],
        answer: 0,
        explanation: "Evidence must be kept for the inspector."
    },
    {
        id: 46, category: "legal",
        question: "What is a worker's right regarding unsafe work?",
        options: ["The right to cease (stop) unsafe work", "The right to go home", "The right to double pay", "The right to sue immediately"],
        answer: 0,
        explanation: "You legally can stop work if there is an immediate threat."
    },
    {
        id: 47, category: "legal",
        question: "What should a worker do before refusing unsafe work?",
        options: ["Inform the supervisor of the risk", "Just walk off site", "Call the news", "Yell at everyone"],
        answer: 0,
        explanation: "Communication is key to resolving the safety issue."
    },
    {
        id: 48, category: "legal",
        question: "Can a worker be punished for raising genuine WHS concerns?",
        options: ["No, that is illegal discrimination", "Yes, they can be fired", "Yes, they can be demoted", "Yes, they can be fined"],
        answer: 0,
        explanation: "WHS laws protect whistleblowers."
    },
    {
        id: 49, category: "hazard",
        question: "Why are anonymous hazard reports sometimes used?",
        options: ["To encourage reporting without fear of blame", "To hide the truth", "To play tricks", "To confuse the boss"],
        answer: 0,
        explanation: "Anonymity increases the number of hazards reported."
    },
    {
        id: 50, category: "emergency",
        question: "What information is important in a hazard or incident report?",
        options: ["Date, time, location, and description of what happened", "The weather only", "Your lunch order", "The colour of the wall"],
        answer: 0,
        explanation: "Accurate details help the investigation."
    },
    {
        id: 51, category: "emergency",
        question: "Why should workers cooperate with incident investigations?",
        options: ["To find the root cause and prevent recurrence", "To get someone fired", "To waste time", "To earn extra money"],
        answer: 0,
        explanation: "The goal is prevention, not blame."
    },
    {
        id: 52, category: "emergency",
        question: "What is the benefit of learning from near misses?",
        options: ["It prevents serious accidents in the future", "It scares people", "It costs money", "It wastes time"],
        answer: 0,
        explanation: "A near miss is a free lesson in safety."
    },
    {
        id: 53, category: "legal",
        question: "Who is responsible for making sure workers understand WHS information?",
        options: ["The Employer (PCBU)", "The Worker", "The Government", "The Union"],
        answer: 0,
        explanation: "Employers must ensure communication is effective (e.g., translations)."
    },
    {
        id: 54, category: "legal",
        question: "Why might interpreters or bilingual supervisors be important on site?",
        options: ["To ensure all workers understand safety instructions", "To make friends", "To teach languages", "To translate lunch orders"],
        answer: 0,
        explanation: "Understanding safety instructions is critical for diverse workforces."
    },
    {
        id: 55, category: "legal",
        question: "What is a WHS policy?",
        options: ["A statement of the company's commitment to safety", "A list of holidays", "A menu", "A pay scale"],
        answer: 0,
        explanation: "It sets the standard for safety culture."
    },
    {
        id: 56, category: "legal",
        question: "Where should WHS policies and procedures be available?",
        options: ["Readily accessible to all workers (e.g., noticeboard, intranet)", "Locked in a safe", "In the CEO's car", "At home"],
        answer: 0,
        explanation: "Workers must be able to access the rules."
    },
    {
        id: 57, category: "legal",
        question: "What is one way to check that workers understood safety instructions?",
        options: ["Ask them to explain it back or demonstrate the task", "Ask them if they are happy", "Give them a high five", "Ignore them"],
        answer: 0,
        explanation: "Verification prevents misunderstanding."
    },
    {
        id: 58, category: "hazard",
        question: "When should you raise a safety concern if something changes in your work?",
        options: ["Immediately, before continuing work", "After the job is done", "Next week", "Never"],
        answer: 0,
        explanation: "Change often introduces new risks."
    },
    {
        id: 59, category: "legal",
        question: "What is 'stop work authority'?",
        options: ["The right of any worker to stop unsafe work", "The boss's right to fire people", "The police's right to arrest", "A lunch break"],
        answer: 0,
        explanation: "Safety empowers everyone to stop the job."
    },
    {
        id: 60, category: "legal",
        question: "Why should safety concerns be documented?",
        options: ["To provide a record of the issue and ensure it is fixed", "To waste paper", "To annoy the boss", "To make the site look busy"],
        answer: 0,
        explanation: "If it isn't written down, it didn't happen."
    },
    {
        id: 61, category: "hazard",
        question: "What are the four basic steps of risk management?",
        options: ["Identify, Assess, Control, Review", "Stop, Drop, Roll", "Plan, Execute, Finish", "Buy, Use, Throw away"],
        answer: 0,
        explanation: "The standard cycle for managing WHS risks."
    },
    {
        id: 62, category: "hazard",
        question: "What is a hazard?",
        options: ["Anything with the potential to cause harm", "The chance of injury", "A safety rule", "A type of PPE"],
        answer: 0,
        explanation: "Hazard = The source."
    },
    {
        id: 63, category: "hazard",
        question: "What is risk?",
        options: ["The likelihood that a hazard will cause harm", "The object itself", "The safety officer", "The cost of injury"],
        answer: 0,
        explanation: "Risk = Probability x Consequence."
    },
    {
        id: 64, category: "hazard",
        question: "Give one example of a physical hazard on a construction site.",
        options: ["Noise / Vibration", "Bacteria", "Stress", "Acid"],
        answer: 0,
        explanation: "Physical hazards are energy sources that harm the body."
    },
    {
        id: 65, category: "hazard",
        question: "Give one example of a chemical hazard on site.",
        options: ["Solvents / Asbestos dust", "Loud noise", "Heavy lifting", "Electricity"],
        answer: 0,
        explanation: "Chemicals damage health through inhalation or contact."
    },
    {
        id: 66, category: "hazard",
        question: "Give one example of a biological hazard on site.",
        options: ["Mould / Bacteria in soil", "Noise", "Heat", "Moving trucks"],
        answer: 0,
        explanation: "Biological hazards come from living organisms."
    },
    {
        id: 67, category: "hazard",
        question: "What is a common hazard associated with working at heights?",
        options: ["Falling from ladders or scaffolds", "Drowning", "Getting burnt", "Hearing loss"],
        answer: 0,
        explanation: "Falls are a major cause of death in construction."
    },
    {
        id: 68, category: "hazard",
        question: "What is a common hazard in excavation work?",
        options: ["Trench collapse / Buried services", "Sunburn", "Paper cuts", "Slippery floors"],
        answer: 0,
        explanation: "Trench collapse can crush workers instantly."
    },
    {
        id: 69, category: "hazard",
        question: "What hazard is associated with working near live traffic?",
        options: ["Being hit by moving vehicles", "Loud music", "Dust", "Cold weather"],
        answer: 0,
        explanation: "Traffic management is critical to separate workers from cars."
    },
    {
        id: 70, category: "hazard",
        question: "What hazard is associated with manual handling?",
        options: ["Musculoskeletal injuries / Back strain", "Burns", "Electric shock", "Poisoning"],
        answer: 0,
        explanation: "Lifting incorrectly causes long-term damage."
    },
    {
        id: 71, category: "hazard",
        question: "What hazard is linked to poor housekeeping?",
        options: ["Slips, trips, and falls", "Loud noise", "Sunburn", "Electrocution"],
        answer: 0,
        explanation: "Untidy sites cause unnecessary accidents."
    },
    {
        id: 72, category: "hazard",
        question: "How can you help identify hazards before starting a task?",
        options: ["Do a visual inspection / Risk assessment", "Guess", "Ask your mum", "Start working immediately"],
        answer: 0,
        explanation: "Look before you leap."
    },
    {
        id: 73, category: "legal",
        question: "What is a Job Safety Analysis (JSA) or JSEA?",
        options: ["A document detailing steps, hazards, and controls for a specific task", "A time sheet", "A lunch menu", "A contract"],
        answer: 0,
        explanation: "It breaks a job down to make it safer."
    },
    {
        id: 74, category: "legal",
        question: "Why is it important to follow the control measures listed in a SWMS or JSA?",
        options: ["To work safely and legally", "To finish faster", "To save money", "To look busy"],
        answer: 0,
        explanation: "SWMS are legally binding safety instructions."
    },
    {
        id: 75, category: "hazard",
        question: "What is the hierarchy of control?",
        options: ["A ranked list of risk controls from most to least effective", "A list of managers", "A list of tools", "A ladder"],
        answer: 0,
        explanation: "The Hierarchy guides you to the best safety solution."
    },
    {
        id: 76, category: "hazard",
        question: "Name the top three levels of the hierarchy of control.",
        options: ["Elimination, Substitution, Isolation", "PPE, Admin, Engineering", "Stop, Look, Listen", "Run, Hide, Fight"],
        answer: 0,
        explanation: "These are the most effective controls."
    },
    {
        id: 77, category: "hazard",
        question: "What does 'elimination' mean in risk control?",
        options: ["Physically removing the hazard", "Wearing a helmet", "Putting up a sign", "Training"],
        answer: 0,
        explanation: "If the hazard is gone, the risk is gone."
    },
    {
        id: 78, category: "hazard",
        question: "Give an example of substituting a hazard.",
        options: ["Using a battery drill instead of a corded one (no trip hazard)", "Wearing gloves", "Putting up a sign", "Working faster"],
        answer: 0,
        explanation: "Swapping a bad thing for a better thing."
    },
    {
        id: 79, category: "hazard",
        question: "Give an example of an engineering control.",
        options: ["Using a scissor lift instead of a ladder", "Wearing boots", "Reading a manual", "Yelling"],
        answer: 0,
        explanation: "Using equipment to make the job safer."
    },
    {
        id: 80, category: "hazard",
        question: "Give an example of an administrative control.",
        options: ["Training / Signage / Rosters", "Wearing a helmet", "Building a wall", "Removing the hazard"],
        answer: 0,
        explanation: "Changing how people work, not the hazard itself."
    },
    {
        id: 81, category: "hazard",
        question: "At what level of the hierarchy is PPE?",
        options: ["The lowest / Last resort", "The top / Best", "The middle", "It is not in the hierarchy"],
        answer: 0,
        explanation: "PPE is the least effective control."
    },
    {
        id: 82, category: "hazard",
        question: "Why cannot PPE be the only control measure?",
        options: ["It doesn't remove the hazard, only protects the worker if worn", "It is expensive", "It is ugly", "It is heavy"],
        answer: 0,
        explanation: "If PPE fails, the worker is exposed."
    },
    {
        id: 83, category: "hazard",
        question: "What should you do if you think a control measure is not working effectively?",
        options: ["Stop and report it so it can be reviewed", "Keep working", "Fix it with tape", "Ignore it"],
        answer: 0,
        explanation: "Controls must be reviewed if they fail."
    },
    {
        id: 84, category: "hazard",
        question: "Why is regular review of risk controls necessary?",
        options: ["To ensure they are still effective", "To waste time", "To make paperwork", "To annoy workers"],
        answer: 0,
        explanation: "Sites change, so controls must change too."
    },
    {
        id: 85, category: "hazard",
        question: "What is a dynamic risk assessment?",
        options: ["Assessing risks on the spot as conditions change", "A written exam", "A computer program", "A type of drill"],
        answer: 0,
        explanation: "Thinking on your feet about safety."
    },
    {
        id: 86, category: "notfall",
        question: "Why is weather important in risk assessment on outdoor sites?",
        options: ["Wind, rain, and heat introduce new hazards", "It affects lunch time", "It affects pay", "It changes the view"],
        answer: 0,
        explanation: "Weather is a major environmental hazard."
    },
    {
        id: 87, category: "notfall",
        question: "What is one risk of working in very hot conditions?",
        options: ["Heatstroke / Dehydration", "Frostbite", "Drowning", "Hearing loss"],
        answer: 0,
        explanation: "Heat stress is a serious medical emergency."
    },
    {
        id: 88, category: "notfall",
        question: "What is one control for working in hot conditions?",
        options: ["Drink plenty of water and take breaks in shade", "Work faster", "Wear more clothes", "Stop drinking water"],
        answer: 0,
        explanation: "Hydration and rest prevent heatstroke."
    },
    {
        id: 89, category: "hazard",
        question: "What can strong wind do to scaffolds, cranes, or materials?",
        options: ["Blow them over or dislodge objects", "Clean them", "Dry them", "Make them stronger"],
        answer: 0,
        explanation: "Wind loads can cause structural failure."
    },
    {
        id: 90, category: "hazard",
        question: "Why is poor visibility a risk factor on construction sites?",
        options: ["You might not see hazards or vehicles", "You might get lost", "It looks scary", "You can't read the paper"],
        answer: 0,
        explanation: "Seeing and being seen is critical."
    },
    {
        id: 91, category: "hazard",
        question: "What should you check before starting work each day?",
        options: ["Your tools, PPE, and work area", "Your phone", "The news", "Your emails"],
        answer: 0,
        explanation: "Pre-start checks prevent accidents."
    },
    {
        id: 92, category: "hazard",
        question: "Why can changes in other trades' activities affect your safety?",
        options: ["They might introduce new hazards into your area", "They might steal your lunch", "They might work faster", "They might leave early"],
        answer: 0,
        explanation: "Construction sites are dynamic; coordination is key."
    },
    {
        id: 93, category: "hazard",
        question: "How can you find out about known hazards on your site?",
        options: ["Site Induction and Safety Noticeboards", "Guessing", "Walking around blindly", "Asking a passerby"],
        answer: 0,
        explanation: "Information is provided at induction."
    },
    {
        id: 94, category: "hazard",
        question: "Why is it important not to bypass or remove safety guards?",
        options: ["They protect you from moving parts", "They look nice", "They are heavy", "They are expensive"],
        answer: 0,
        explanation: "Guards prevent amputation and injury."
    },
    {
        id: 95, category: "hazard",
        question: "What should you do if you see someone working unsafely?",
        options: ["Warn them or report it to a supervisor", "Laugh at them", "Film them", "Ignore them"],
        answer: 0,
        explanation: "Duty of care extends to others."
    },
    {
        id: 96, category: "mensch",
        question: "Why is fatigue a safety risk?",
        options: ["It slows reaction times and causes poor judgement", "It makes you hungry", "It makes you boring", "It saves time"],
        answer: 0,
        explanation: "Fatigue is a form of impairment."
    },
    {
        id: 97, category: "mensch",
        question: "Name one sign that a worker may be fatigued.",
        options: ["Yawning, slow reactions, lack of focus", "Singing", "Working fast", "Smiling"],
        answer: 0,
        explanation: "Recognising fatigue prevents accidents."
    },
    {
        id: 98, category: "mensch",
        question: "What can you do to manage your own fatigue?",
        options: ["Get enough sleep and take breaks", "Drink energy drinks only", "Work double shifts", "Ignore it"],
        answer: 0,
        explanation: "Rest is the only cure for fatigue."
    },
    {
        id: 99, category: "mensch",
        question: "What is the danger of becoming 'complacent' with familiar tasks?",
        options: ["You might skip safety steps and get hurt", "You get faster", "You get a promotion", "You get bored"],
        answer: 0,
        explanation: "Familiarity breeds contempt for risk."
    },
    {
        id: 100, category: "legal",
        question: "Why is it important to learn from previous incidents on your site or company?",
        options: ["To prevent them from happening again", "To gossip", "To blame people", "To fill paperwork"],
        answer: 0,
        explanation: "Lessons learned save lives."
    },
    {
        id: 101, category: "legal",
        question: "What is 'high-risk construction work' (HRCW)?",
        options: ["Work with higher potential for serious incidents (e.g., heights, asbestos)", "Office work", "Driving to work", "Painting a wall"],
        answer: 0,
        explanation: "There are 19 specific HRCW activities in the regulations."
    },
    {
        id: 102, category: "legal",
        question: "Name one example of high-risk construction work.",
        options: ["Working where there is a risk of falling more than 2 metres", "Sweeping the floor", "Answering the phone", "Making coffee"],
        answer: 0,
        explanation: "Falls from heights are a major killer."
    },
    {
        id: 103, category: "legal",
        question: "When must a SWMS be prepared for a task?",
        options: ["Before starting any high-risk construction work", "After the work is done", "If an accident happens", "Never"],
        answer: 0,
        explanation: "SWMS is a pre-start requirement for high risk."
    },
    {
        id: 104, category: "legal",
        question: "Who is responsible for ensuring a SWMS is prepared?",
        options: ["The PCBU (Employer)", "The Apprentice", "The Client", "The Government"],
        answer: 0,
        explanation: "The employer must ensure the system is safe."
    },
    {
        id: 105, category: "legal",
        question: "Who should know and understand the SWMS?",
        options: ["All workers involved in the task", "Only the boss", "The office staff", "No one"],
        answer: 0,
        explanation: "Workers must follow the SWMS, so they must understand it."
    },
    {
        id: 106, category: "legal",
        question: "What must happen if the work being done is not covered by the SWMS?",
        options: ["Stop work and update the SWMS", "Carry on regardless", "Guess what to do", "Ask a friend"],
        answer: 0,
        explanation: "Work must match the plan. If the plan is wrong, fix the plan."
    },
    {
        id: 107, category: "legal",
        question: "Why should SWMS be written in clear and simple language?",
        options: ["So workers can easily understand and follow it", "To look professional", "To use big words", "To confuse inspectors"],
        answer: 0,
        explanation: "Safety instructions must be understood by everyone."
    },
    {
        id: 108, category: "legal",
        question: "What is a permit-to-work system?",
        options: ["A formal system to control high-risk activities (e.g., hot work, confined space)", "A parking permit", "A building permit", "A lunch pass"],
        answer: 0,
        explanation: "Permits ensure safety checks are done before starting critical tasks."
    },
    {
        id: 109, category: "hazard",
        question: "Give one example of work that might need a hot work permit.",
        options: ["Welding or grinding near flammable materials", "Painting", "Digging a hole", "Climbing a ladder"],
        answer: 0,
        explanation: "Hot work creates sparks/heat that cause fires."
    },
    {
        id: 110, category: "hazard",
        question: "What additional controls may be needed during hot work?",
        options: ["Fire extinguisher nearby and a fire watch", "Air conditioning", "Louder music", "Faster tools"],
        answer: 0,
        explanation: "Fire risk requires fire controls."
    },
    {
        id: 111, category: "hazard",
        question: "What is a confined space?",
        options: ["An enclosed area not designed for people, with risks like poor air", "A small office", "A car", "A toilet cubicle"],
        answer: 0,
        explanation: "Confined spaces kill due to gas or lack of oxygen."
    },
    {
        id: 112, category: "hazard",
        question: "Can you enter a confined space without specific training and a permit?",
        options: ["No, never", "Yes, if you are quick", "Yes, if you hold your breath", "Yes, if you have a torch"],
        answer: 0,
        explanation: "Strict entry rules apply to save lives."
    },
    {
        id: 113, category: "hazard",
        question: "What is one hazard in confined spaces?",
        options: ["Lack of oxygen / Toxic gas", "It is dark", "It is boring", "No phone signal"],
        answer: 0,
        explanation: "Invisible atmospheric hazards are the biggest killer."
    },
    {
        id: 114, category: "signs",
        question: "What is an isolation tag or lockout system used for?",
        options: ["To prevent energy sources being turned on while working on equipment", "To label tools", "To reserve a machine", "To mark a price"],
        answer: 0,
        explanation: "LOTO (Lock Out Tag Out) prevents accidental startup."
    },
    {
        id: 115, category: "hazard",
        question: "Before starting work on electrical equipment, what should be done?",
        options: ["Isolate, Lockout, and Tagout", "Turn it off at the switch only", "Put gloves on", "Work fast"],
        answer: 0,
        explanation: "Prove dead before touching."
    },
    {
        id: 116, category: "hazard",
        question: "Why is working near overhead power lines high-risk?",
        options: ["Risk of electrocution (arcing)", "They block the sun", "They look ugly", "Birds sit on them"],
        answer: 0,
        explanation: "Electricity can jump (arc) gaps; contact isn't always needed."
    },
    {
        id: 117, category: "hazard",
        question: "What is one control for working near overhead power lines?",
        options: ["Use a spotter and maintain exclusion zones", "Wear rubber boots", "Work at night", "Ignore them"],
        answer: 0,
        explanation: "Keep a safe distance (e.g., 3m or more)."
    },
    {
        id: 118, category: "hazard",
        question: "Why is working near underground services high-risk?",
        options: ["Hitting gas or power lines can cause explosion or electrocution", "You might find treasure", "It gets muddy", "You might break a shovel"],
        answer: 0,
        explanation: "Buried services are hidden dangers."
    },
    {
        id: 119, category: "hazard",
        question: "How can you locate underground services before digging?",
        options: ["Dial Before You Dig (1100) plans and locators", "Guess", "Dig carefully", "Ask a neighbour"],
        answer: 0,
        explanation: "Always check plans before breaking ground."
    },
    {
        id: 120, category: "hazard",
        question: "When must a trench or excavation be shored or battered?",
        options: ["If it is deeper than 1.5 meters", "If it is deeper than 10 cm", "If it is raining", "If the boss says so"],
        answer: 0,
        explanation: "1.5m is the trigger for trench support to prevent collapse."
    },
    {
        id: 121, category: "hazard",
        question: "Why is working at height above 2 m considered high-risk?",
        options: ["A fall can cause serious injury or death", "It is windy", "You might drop tools", "You get dizzy"],
        answer: 0,
        explanation: "Falls are a leading cause of fatality."
    },
    {
        id: 122, category: "hazard",
        question: "What is a fall protection system?",
        options: ["Equipment like guardrails, nets, or harnesses to prevent falls", "A soft mat", "A warning sign", "A ladder"],
        answer: 0,
        explanation: "Systems designed to stop you hitting the ground."
    },
    {
        id: 123, category: "hazard",
        question: "What should be in place before using a harness system?",
        options: ["An anchor point and a rescue plan", "A comfy seat", "A lunch break", "A camera"],
        answer: 0,
        explanation: "You must be able to rescue a fallen worker quickly (suspension trauma)."
    },
    {
        id: 124, category: "hazard",
        question: "What must you do before using a mobile elevated work platform (EWP)?",
        options: ["Be trained and authorized (e.g., Yellow Card)", "Just jump in", "Watch a YouTube video", "Read the manual only"],
        answer: 0,
        explanation: "Competency is required for EWPs."
    },
    {
        id: 125, category: "hazard",
        question: "Why is crane operation considered high-risk?",
        options: ["Heavy loads can fall or the crane can tip over", "It is loud", "It blocks the view", "It is slow"],
        answer: 0,
        explanation: "Lifting operations carry massive potential energy."
    },
    {
        id: 126, category: "hazard",
        question: "Who is responsible for directing a crane when the operator cannot see the load?",
        options: ["A qualified Dogman/Rigger", "Anyone", "The truck driver", "The site manager"],
        answer: 0,
        explanation: "Only licensed Dogmen can direct cranes."
    },
    {
        id: 127, category: "signs",
        question: "What is a no-go zone around a crane or lifting operation?",
        options: ["An area where no one is allowed to enter for safety", "A lunch spot", "A parking spot", "A storage area"],
        answer: 0,
        explanation: "Exclusion zones prevent people being crushed."
    },
    {
        id: 128, category: "signs",
        question: "Why are exclusion zones used around high-risk tasks?",
        options: ["To separate people from hazards", "To keep the site tidy", "To mark out car parks", "To stop theft"],
        answer: 0,
        explanation: "Isolation is a key control measure."
    },
    {
        id: 129, category: "legal",
        question: "What should you do if you are asked to perform high-risk work you are not trained for?",
        options: ["Refuse and ask for training", "Do it anyway", "Guess", "Ask a friend to help"],
        answer: 0,
        explanation: "Never do work you are not competent to do."
    },
    {
        id: 130, category: "legal",
        question: "Why must permits and SWMS be kept available on site?",
        options: ["For reference by workers and inspectors", "To start a fire", "To show the client", "To look professional"],
        answer: 0,
        explanation: "Documents must be accessible to those doing the work."
    },
    {
        id: 131, category: "hazard",
        question: "What does PPE stand for?",
        options: ["Personal Protective Equipment", "People Protection Element", "Professional Practice Exam", "Personal Planning Event"],
        answer: 0,
        explanation: "Equipment worn to minimize exposure to hazards."
    },
    {
        id: 132, category: "hazard",
        question: "Give three examples of common PPE on construction sites.",
        options: ["Hard hat, safety boots, high-vis vest", "Sunglasses, cap, shorts", "Gloves, scarf, jacket", "Headphones, runners, t-shirt"],
        answer: 0,
        explanation: "The standard 'uniform' of safety."
    },
    {
        id: 133, category: "hazard",
        question: "What is the purpose of a hard hat?",
        options: ["To protect the head from falling objects", "To keep the sun off", "To look cool", "To hold a torch"],
        answer: 0,
        explanation: "Head protection is vital on construction sites."
    },
    {
        id: 134, category: "hazard",
        question: "When should you replace a hard hat?",
        options: ["If it is cracked, damaged, or past its expiry date", "Every week", "Never", "When it gets dirty"],
        answer: 0,
        explanation: "Damaged PPE offers no protection."
    },
    {
        id: 135, category: "hazard",
        question: "Why must you not drill holes or paint your hard hat?",
        options: ["It weakens the plastic structure", "It looks bad", "The boss says no", "It voids the warranty"],
        answer: 0,
        explanation: "Solvents and holes compromise integrity."
    },
    {
        id: 136, category: "hazard",
        question: "What is the purpose of safety boots with steel or composite caps?",
        options: ["To protect toes from crushing injuries", "To keep feet warm", "To look professional", "To walk faster"],
        answer: 0,
        explanation: "Foot protection against heavy objects."
    },
    {
        id: 137, category: "signs",
        question: "Why is high-visibility clothing important on site?",
        options: ["To make you visible to plant operators and drivers", "It is fashionable", "It is warm", "It is waterproof"],
        answer: 0,
        explanation: "Being seen saves lives."
    },
    {
        id: 138, category: "signs",
        question: "When is eye protection required?",
        options: ["When there is a risk of flying particles, dust, or chemicals", "Always", "Only when sunny", "Only indoors"],
        answer: 0,
        explanation: "Grinding, cutting, and drilling require eye protection."
    },
    {
        id: 139, category: "hazard",
        question: "What type of PPE might be needed for loud noise areas?",
        options: ["Ear muffs or ear plugs", "Headphones", "Cotton wool", "A hat"],
        answer: 0,
        explanation: "Hearing protection prevents deafness."
    },
    {
        id: 140, category: "hazard",
        question: "How can you tell if noise levels may require hearing protection?",
        options: ["If you have to raise your voice to be heard 1 metre away", "If you like the song", "If it is annoying", "If the radio is on"],
        answer: 0,
        explanation: "The '1 metre rule' is a good rule of thumb."
    },
    {
        id: 141, category: "hazard",
        question: "What is the purpose of gloves on site?",
        options: ["To protect hands from cuts, chemicals, and heat", "To keep hands clean", "To look tough", "To improve grip only"],
        answer: 0,
        explanation: "Hand injuries are very common."
    },
    {
        id: 142, category: "hazard",
        question: "Why must PPE be properly fitted?",
        options: ["To ensure it provides effective protection", "To look good", "To be comfortable only", "To stop it falling off"],
        answer: 0,
        explanation: "Loose PPE can get caught in machinery."
    },
    {
        id: 143, category: "legal",
        question: "Who is generally responsible for providing appropriate PPE?",
        options: ["The Employer (PCBU)", "The Worker", "The Government", "The Shop"],
        answer: 0,
        explanation: "Employers must provide PPE for their workers."
    },
    {
        id: 144, category: "hazard",
        question: "What should you do if your PPE is damaged or unsuitable?",
        options: ["Request a replacement immediately", "Use it anyway", "Work without it", "Fix it with tape"],
        answer: 0,
        explanation: "Damaged PPE is dangerous."
    },
    {
        id: 145, category: "hazard",
        question: "Why is it unsafe to modify PPE?",
        options: ["It may reduce its protective capability", "It voids the warranty", "It looks silly", "The boss gets mad"],
        answer: 0,
        explanation: "PPE is tested to standards; modifying it breaks that standard."
    },
    {
        id: 146, category: "hazard",
        question: "What is 'safe lifting technique' in manual handling?",
        options: ["Bend knees, back straight, load close to body", "Bend back, legs straight", "Twist and lift", "Lift quickly"],
        answer: 0,
        explanation: "Correct technique prevents back injury."
    },
    {
        id: 147, category: "hazard",
        question: "When should you ask for help or use mechanical aids for lifting?",
        options: ["When the load is too heavy, bulky, or awkward", "When you are lazy", "When you have time", "Never"],
        answer: 0,
        explanation: "Team lifting or trolleys reduce strain."
    },
    {
        id: 148, category: "hazard",
        question: "Why is it important to keep walkways clear?",
        options: ["To prevent slips, trips, and falls", "To look tidy", "To save space", "To walk faster"],
        answer: 0,
        explanation: "Housekeeping prevents accidents."
    },
    {
        id: 149, category: "hazard",
        question: "What should be done with waste materials on site?",
        options: ["Placed in designated bins or skips", "Thrown on the floor", "Hidden", "Burned"],
        answer: 0,
        explanation: "A tidy site is a safe site."
    },
    {
        id: 150, category: "hazard",
        question: "Why is it dangerous to leave tools or materials on ladders or scaffolds?",
        options: ["They can fall and injure people below", "They might get stolen", "They might get wet", "They look messy"],
        answer: 0,
        explanation: "Falling objects are a major hazard."
    },
    {
        id: 151, category: "hazard",
        question: "What is the correct way to climb a ladder?",
        options: ["Three points of contact at all times", "Hands full of tools", "Facing away from the ladder", "Jumping"],
        answer: 0,
        explanation: "Two hands, one foot / Two feet, one hand."
    },
    {
        id: 152, category: "hazard",
        question: "Why is it unsafe to stand on the top step of a step ladder (unless designed for it)?",
        options: ["You may lose balance and fall", "It is uncomfortable", "It is forbidden by law", "It damages the ladder"],
        answer: 0,
        explanation: "The top step is not a platform."
    },
    {
        id: 153, category: "hazard",
        question: "Why must ladders be placed on firm, level ground?",
        options: ["To prevent them from slipping or toppling", "To keep them clean", "To look professional", "To reach higher"],
        answer: 0,
        explanation: "Stability is key for ladder safety."
    },
    {
        id: 154, category: "hazard",
        question: "Why should you never use a metal ladder near live electrical equipment?",
        options: ["Metal conducts electricity (electrocution risk)", "It gets hot", "It is heavy", "It is shiny"],
        answer: 0,
        explanation: "Use fibreglass ladders near electricity."
    },
    {
        id: 155, category: "signs",
        question: "Why is it important to obey 'No Smoking' signs?",
        options: ["To prevent fire and explosion hazards", "Because smoking is bad for you", "To keep the air clean", "To save money"],
        answer: 0,
        explanation: "Flammable materials are common on sites."
    },
    {
        id: 156, category: "signs",
        question: "What is one sign that an area may be a restricted or controlled zone?",
        options: ["Barricades, tape, or 'Authorised Personnel Only' signs", "Open gates", "Welcome mat", "Green lights"],
        answer: 0,
        explanation: "Barriers indicate danger."
    },
    {
        id: 157, category: "legal",
        question: "Why is horseplay or practical joking dangerous on construction sites?",
        options: ["It distracts workers and can lead to accidents", "It is annoying", "It is unprofessional", "It wastes time"],
        answer: 0,
        explanation: "Construction sites are dangerous places requiring focus."
    },
    {
        id: 158, category: "legal",
        question: "What should you do if you are unsure how to use a piece of equipment safely?",
        options: ["Ask for training or instruction", "Guess", "Use it anyway", "Ask a friend"],
        answer: 0,
        explanation: "Never operate equipment without competency."
    },
    {
        id: 159, category: "hazard",
        question: "Why should mobile phones be used cautiously on site?",
        options: ["They are a distraction from hazards", "They might get dirty", "The boss hates them", "They lose signal"],
        answer: 0,
        explanation: "Distracted walking leads to accidents."
    },
    {
        id: 160, category: "hazard",
        question: "Why is it important to follow manufacturer's instructions for tools and equipment?",
        options: ["To ensure safe and correct operation", "To keep the warranty", "Because it is the law", "To read the manual"],
        answer: 0,
        explanation: "Using tools incorrectly is dangerous."
    },
    {
        id: 161, category: "hazard",
        question: "Why should extension leads not be run through water or mud?",
        options: ["Risk of electric shock", "They get dirty", "They might trip someone", "They get heavy"],
        answer: 0,
        explanation: "Water + Electricity = Danger."
    },
    {
        id: 162, category: "hazard",
        question: "Why is good housekeeping especially important around stairways and access routes?",
        options: ["To keep emergency exits clear and prevent trips", "To look nice", "To make cleaning easier", "To please the boss"],
        answer: 0,
        explanation: "Escape routes must always be clear."
    },
    {
        id: 163, category: "hazard",
        question: "What is the risk of working in loose clothing near rotating machinery?",
        options: ["Entanglement (getting pulled in)", "Getting dirty", "Looking untidy", "Getting cold"],
        answer: 0,
        explanation: "Loose items can be caught by moving parts."
    },
    {
        id: 164, category: "hazard",
        question: "Why is wearing jewellery sometimes prohibited on site?",
        options: ["It can get caught in machinery (entanglement) or conduct electricity", "It looks unprofessional", "It might get lost", "It is expensive"],
        answer: 0,
        explanation: "Rings and chains are snag hazards."
    },
    {
        id: 165, category: "hazard",
        question: "What is the purpose of a site traffic management plan?",
        options: ["To separate pedestrians and vehicles safely", "To park cars", "To stop traffic jams", "To direct deliveries"],
        answer: 0,
        explanation: "Separation prevents collision."
    },
    {
        id: 166, category: "hazard",
        question: "What is one control that can reduce risk from vehicles on site?",
        options: ["Designated walkways and exclusion zones", "Driving fast", "Using horns", "Wearing sunglasses"],
        answer: 0,
        explanation: "Physical separation is best."
    },
    {
        id: 167, category: "legal",
        question: "Why must you follow spotter or traffic controller directions?",
        options: ["They guide safe movement and protect pedestrians", "They are in charge", "They have a radio", "They are wearing orange"],
        answer: 0,
        explanation: "They are part of the traffic management system."
    },
    {
        id: 168, category: "hazard",
        question: "Why is it dangerous to ride on plant or vehicles not designed to carry passengers?",
        options: ["You could fall off or be crushed", "It is uncomfortable", "It is illegal", "It is slow"],
        answer: 0,
        explanation: "Only designated seats with seatbelts are safe."
    },
    {
        id: 169, category: "hazard",
        question: "Why should you report damaged guardrails or barriers immediately?",
        options: ["To prevent falls or unauthorized access", "To get them fixed", "To look good", "To avoid fines"],
        answer: 0,
        explanation: "A broken barrier is no barrier."
    },
    {
        id: 170, category: "legal",
        question: "What is the safest approach if you are pressured to rush and skip safety steps?",
        options: ["Stop, report the pressure, and work safely", "Rush and hope for the best", "Quit", "Argue"],
        answer: 0,
        explanation: "Safety is more important than speed."
    },
    {
        id: 171, category: "hazard",
        question: "What is meant by 'plant' in WHS terms?",
        options: ["Machinery, equipment, and tools", "Flowers", "The building", "The grass"],
        answer: 0,
        explanation: "Plant includes excavators, drills, lifts etc."
    },
    {
        id: 172, category: "hazard",
        question: "Why must plant be regularly inspected and maintained?",
        options: ["To ensure it is safe to use and won't fail", "To keep it shiny", "To sell it", "To check fuel"],
        answer: 0,
        explanation: "Faulty equipment causes accidents."
    },
    {
        id: 173, category: "hazard",
        question: "What should you do before using a power tool for the first time?",
        options: ["Inspect it for damage and check the tag", "Plug it in", "Turn it on", "Clean it"],
        answer: 0,
        explanation: "Pre-start check is mandatory."
    },
    {
        id: 174, category: "hazard",
        question: "Why is tagging and testing of electrical equipment important?",
        options: ["To ensure it is electrically safe and not faulty", "To know who owns it", "To check the brand", "To track inventory"],
        answer: 0,
        explanation: "Electrical faults are invisible until tested."
    },
    {
        id: 175, category: "hazard",
        question: "What does a test tag on a power lead indicate?",
        options: ["The date it was tested and when the next test is due", "The price", "The owner", "The voltage"],
        answer: 0,
        explanation: "Tags show the equipment is currently safe."
    },
    {
        id: 176, category: "hazard",
        question: "What should you do if you find a power tool with a damaged cord or plug?",
        options: ["Tag it 'Out of Service' and remove it from use", "Tape it up", "Use it carefully", "Throw it away"],
        answer: 0,
        explanation: "Never use damaged electrical gear."
    },
    {
        id: 177, category: "hazard",
        question: "Why is it unsafe to use homemade or altered electrical adaptors on site?",
        options: ["They may not meet safety standards and cause fire/shock", "They look ugly", "They are cheap", "They don't fit"],
        answer: 0,
        explanation: "Only compliant equipment is allowed."
    },
    {
        id: 178, category: "hazard",
        question: "What is a Residual Current Device (RCD) or safety switch?",
        options: ["A device that cuts power instantly if a leak is detected", "A fuse", "A light switch", "A battery"],
        answer: 0,
        explanation: "RCDs save lives by preventing electrocution."
    },
    {
        id: 179, category: "hazard",
        question: "Why are RCDs used on construction sites?",
        options: ["To protect workers from electric shock", "To save power", "To stop tools breaking", "To regulate voltage"],
        answer: 0,
        explanation: "Construction involves temporary power which is high risk."
    },
    {
        id: 180, category: "hazard",
        question: "What should you do before using a portable RCD?",
        options: ["Press the test button to ensure it trips", "Shake it", "Plug it in", "Clean it"],
        answer: 0,
        explanation: "Testing ensures the mechanism works."
    },
    {
        id: 181, category: "hazard",
        question: "Why is 'piggy-backing' multiple power boards or double adaptors unsafe?",
        options: ["It can overload the circuit and cause fire", "It looks messy", "It uses too much power", "It is expensive"],
        answer: 0,
        explanation: "Overloading leads to overheating."
    },
    {
        id: 182, category: "signs",
        question: "What is a lockout device?",
        options: ["A lock used to physically isolate energy sources", "A door lock", "A key", "A chain"],
        answer: 0,
        explanation: "Locks prevent equipment being turned on."
    },
    {
        id: 183, category: "hazard",
        question: "Why is it important to use the correct guards and shields on cutting tools?",
        options: ["To prevent contact with the blade and debris", "To keep the tool clean", "To cut straighter", "To reduce noise"],
        answer: 0,
        explanation: "Guards are an engineering control."
    },
    {
        id: 184, category: "hazard",
        question: "What is one sign that a tool is not suitable for use?",
        options: ["It has a damaged casing or exposed wires", "It is old", "It is dirty", "It is heavy"],
        answer: 0,
        explanation: "Visual damage indicates risk."
    },
    {
        id: 185, category: "hazard",
        question: "Why must compressed air not be used to clean dust from skin or clothing?",
        options: ["It can force air/particles into the skin or bloodstream", "It is cold", "It wastes air", "It is loud"],
        answer: 0,
        explanation: "Compressed air injection is a fatal injury."
    },
    {
        id: 186, category: "hazard",
        question: "What is one control measure when using a grinder?",
        options: ["Wear a face shield and check the disc", "Wear gloves", "Use water", "Stand back"],
        answer: 0,
        explanation: "Face shields protect from shattering discs."
    },
    {
        id: 187, category: "legal",
        question: "Why should only trained and authorised people operate cranes, EWPs, or forklifts?",
        options: ["It is high-risk work requiring specific skills", "They are fun to drive", "They are expensive", "The boss said so"],
        answer: 0,
        explanation: "Licensing ensures competency."
    },
    {
        id: 188, category: "hazard",
        question: "Why must you keep clear of the swing radius of excavators and cranes?",
        options: ["To avoid being crushed or struck", "To avoid dust", "To not distract the driver", "To stay clean"],
        answer: 0,
        explanation: "Crush zones are deadly."
    },
    {
        id: 189, category: "hazard",
        question: "Why should you never walk under a suspended load?",
        options: ["The load could fall and kill you", "It is bad luck", "It is dark", "You might trip"],
        answer: 0,
        explanation: "Never trust a hydraulic or mechanical lifting device."
    },
    {
        id: 190, category: "hazard",
        question: "What should you do if mobile plant is reversing near you?",
        options: ["Make eye contact with the operator and stay clear", "Run", "Yell", "Stand still"],
        answer: 0,
        explanation: "Positive communication confirms they see you."
    },
    {
        id: 191, category: "hazard",
        question: "Why are backup alarms and flashing lights used on mobile plant?",
        options: ["To warn pedestrians of movement", "To look good", "To clear traffic", "To work at night"],
        answer: 0,
        explanation: "Visual and audio warnings alert workers."
    },
    {
        id: 192, category: "hazard",
        question: "What is one hazard associated with poorly maintained scaffolding?",
        options: ["Collapse or falls", "Splinters", "Rust", "Dirt"],
        answer: 0,
        explanation: "Scaffold integrity is critical for safety."
    },
    {
        id: 193, category: "hazard",
        question: "Who may alter or remove components of a scaffold?",
        options: ["Only a licensed scaffolder", "Anyone", "The supervisor", "A carpenter"],
        answer: 0,
        explanation: "Modifying scaffolds is high risk work."
    },
    {
        id: 194, category: "hazard",
        question: "What must be done before using scaffolding after heavy rain, strong wind, or impact?",
        options: ["It must be inspected by a competent person", "It must be dried", "It must be painted", "It must be dismantled"],
        answer: 0,
        explanation: "Environmental factors can damage structural integrity."
    },
    {
        id: 195, category: "signs",
        question: "Why is it important that scaffold tags are current and displayed?",
        options: ["To show it is safe to use and inspected", "To show who built it", "To show the price", "To look official"],
        answer: 0,
        explanation: "Scafftag system indicates safety status."
    },
    {
        id: 196, category: "hazard",
        question: "What is a guardrail system on platforms or scaffolds meant to prevent?",
        options: ["People or objects falling", "People leaning", "Wind blowing", " Birds landing"],
        answer: 0,
        explanation: "Edge protection prevents falls."
    },
    {
        id: 197, category: "hazard",
        question: "Why must ladders and mobile platforms not be placed on top of scaffolding decks for extra height?",
        options: ["It creates a fall risk and instability", "It scratches the deck", "It looks unprofessional", "It is too high"],
        answer: 0,
        explanation: "Always work from the designed platform level."
    },
    {
        id: 198, category: "hazard",
        question: "Why should you not use makeshift work platforms such as stacked pallets?",
        options: ["They are unstable and can collapse", "They are ugly", "They are free", "They are heavy"],
        answer: 0,
        explanation: "Makeshift platforms are illegal and unsafe."
    },
    {
        id: 199, category: "hazard",
        question: "What is the first thing you should do before using any plant you are not familiar with?",
        options: ["Read the manual and get training", "Turn it on", "Ask a mate", "Guess"],
        answer: 0,
        explanation: "Competency requires knowledge of the specific machine."
    },
    {
        id: 200, category: "hazard",
        question: "Why is it dangerous to override safety switches or interlocks on machines?",
        options: ["It removes protection and can cause severe injury", "It breaks the machine", "It voids warranty", "It uses more power"],
        answer: 0,
        explanation: "Interlocks are there to stop the machine if it's unsafe."
    },
    {
        id: 201, category: "hazard",
        question: "What is a hazardous chemical?",
        options: ["A substance that can damage health (e.g., burns, fumes)", "Water", "Sand", "Wood"],
        answer: 0,
        explanation: "Chemicals can be toxic, corrosive, or flammable."
    },
    {
        id: 202, category: "emergency",
        question: "What is an SDS (Safety Data Sheet)?",
        options: ["A document providing safety info about a chemical", "A receipt", "A label", "A map"],
        answer: 0,
        explanation: "The SDS tells you how to handle the chemical safely."
    },
    {
        id: 203, category: "emergency",
        question: "Where should SDSs be available on site?",
        options: ["Readily accessible to workers using the chemicals", "In the head office", "In the truck", "Online only"],
        answer: 0,
        explanation: "You need immediate access in an emergency."
    },
    {
        id: 204, category: "emergency",
        question: "What information can you find in an SDS?",
        options: ["Hazards, first aid, PPE, storage, and disposal info", "Price and supplier", "Chemical formula", "History"],
        answer: 0,
        explanation: "It contains everything needed for safe use."
    },
    {
        id: 205, category: "hazard",
        question: "Why is it important to label all chemical containers?",
        options: ["So everyone knows what is inside and the risks", "To look tidy", "To prevent theft", "To check stock"],
        answer: 0,
        explanation: "Unidentified chemicals are a major risk."
    },
    {
        id: 206, category: "hazard",
        question: "Why should you never put chemicals into unlabelled drink bottles or food containers?",
        options: ["Someone might drink it by mistake", "It looks messy", "It ruins the bottle", "It is illegal"],
        answer: 0,
        explanation: "Ingestion of chemicals is a common accident."
    },
    {
        id: 207, category: "hazard",
        question: "What is one hazard associated with cement and concrete?",
        options: ["Skin burns / Dermatitis", "It is heavy", "It is grey", "It smells"],
        answer: 0,
        explanation: "Wet cement is highly alkaline and burns skin."
    },
    {
        id: 208, category: "hazard",
        question: "How can you protect yourself when handling wet cement?",
        options: ["Wear gloves, long sleeves, and eye protection", "Work fast", "Wash hands later", "Use a shovel"],
        answer: 0,
        explanation: "PPE prevents contact dermatitis."
    },
    {
        id: 209, category: "hazard",
        question: "Why is dust control important when cutting or grinding concrete, bricks, or tiles?",
        options: ["To prevent inhaling silica dust", "To keep the site clean", "To see better", "To save tools"],
        answer: 0,
        explanation: "Silica dust causes silicosis."
    },
    {
        id: 210, category: "hazard",
        question: "What can long-term exposure to respirable crystalline silica dust cause?",
        options: ["Silicosis and lung cancer", "Asthma", "Coughing", "Nothing"],
        answer: 0,
        explanation: "Silicosis is incurable and fatal."
    },
    {
        id: 211, category: "hazard",
        question: "What control measures can reduce exposure to silica dust?",
        options: ["Wet cutting or on-tool dust extraction", "Working outside", "Wearing a bandana", "Holding breath"],
        answer: 0,
        explanation: "Suppressing dust at the source is best."
    },
    {
        id: 212, category: "hazard",
        question: "Why should you not dry sweep dusty areas?",
        options: ["It puts dust back into the air", "It takes too long", "It ruins the broom", "It makes noise"],
        answer: 0,
        explanation: "Vacuuming or wet mopping is safer."
    },
    {
        id: 213, category: "hazard",
        question: "What is asbestos?",
        options: ["A fibrous mineral used in building materials that causes lung disease", "A type of wood", "A plastic", "A metal"],
        answer: 0,
        explanation: "Asbestos was widely used in Australia before 2003."
    },
    {
        id: 214, category: "hazard",
        question: "How can asbestos be identified?",
        options: ["Only by lab testing", "By looking at it", "By smell", "By breaking it"],
        answer: 0,
        explanation: "You cannot identify asbestos with the naked eye."
    },
    {
        id: 215, category: "legal",
        question: "Are unlicensed workers allowed to remove friable asbestos?",
        options: ["No, it requires a Class A license", "Yes, if careful", "Yes, if small amount", "Yes, with a mask"],
        answer: 0,
        explanation: "Friable asbestos is extremely dangerous."
    },
    {
        id: 216, category: "hazard",
        question: "What should you do if you suspect that material you are about to disturb may contain asbestos?",
        options: ["Stop work and report it immediately", "Break it to check", "Wear a mask and continue", "Wet it"],
        answer: 0,
        explanation: "Assume it is asbestos until proven otherwise."
    },
    {
        id: 217, category: "hazard",
        question: "Why is burning construction waste, especially treated timber or plastics, dangerous?",
        options: ["It releases toxic fumes", "It smells bad", "It makes smoke", "It is illegal"],
        answer: 0,
        explanation: "CCA treated timber releases arsenic when burnt."
    },
    {
        id: 218, category: "hazard",
        question: "Why is safe storage of flammable liquids important?",
        options: ["To prevent fire and explosion", "To keep them organized", "To stop evaporation", "To prevent theft"],
        answer: 0,
        explanation: "Fuels and solvents are fire hazards."
    },
    {
        id: 219, category: "emergency",
        question: "What should you do if you spill a hazardous chemical?",
        options: ["Follow the SDS instructions for clean-up", "Wash it away", "Leave it", "Cover it with dirt"],
        answer: 0,
        explanation: "The SDS dictates the correct spill response."
    },
    {
        id: 220, category: "hazard",
        question: "Why is washing your hands before eating or drinking important on site?",
        options: ["To prevent ingesting harmful substances (e.g., lead, silica)", "To be clean", "To follow rules", "To taste food better"],
        answer: 0,
        explanation: "Hygiene prevents ingestion of toxins."
    },
    {
        id: 221, category: "emergency",
        question: "What is the purpose of an emergency plan on a construction site?",
        options: ["To outline procedures for responding to emergencies effectively", "To list phone numbers", "To show exits", "To meet legal requirements"],
        answer: 0,
        explanation: "Plans save lives by reducing panic."
    },
    {
        id: 222, category: "emergency",
        question: "What information should you know about your site's emergency procedures?",
        options: ["Evacuation route, assembly point, and location of fire equipment", "The boss's number", "Where the cafe is", "When lunch is"],
        answer: 0,
        explanation: "These are the basics of survival."
    },
    {
        id: 223, category: "emergency",
        question: "What should you do when you hear the site evacuation alarm?",
        options: ["Stop work and proceed to the assembly point", "Finish your task", "Run", "Hide"],
        answer: 0,
        explanation: "Immediate evacuation is required."
    },
    {
        id: 224, category: "emergency",
        question: "Why must you not use lifts during a fire evacuation (if present)?",
        options: ["You could get trapped if power fails", "They are slow", "They are full", "They are for firefighters"],
        answer: 0,
        explanation: "Lifts are death traps in fires."
    },
    {
        id: 225, category: "emergency",
        question: "What is the role of a fire warden?",
        options: ["To assist in the safe evacuation of people", "To fight the fire", "To call the police", "To count people"],
        answer: 0,
        explanation: "Wardens guide people to safety."
    },
    {
        id: 226, category: "emergency",
        question: "Name the three elements of the fire triangle.",
        options: ["Fuel, Heat, Oxygen", "Wood, Paper, Plastic", "Water, Foam, Gas", "Earth, Wind, Fire"],
        answer: 0,
        explanation: "Remove one, and the fire goes out."
    },
    {
        id: 227, category: "emergency",
        question: "What is the general rule about using fire extinguishers on site?",
        options: ["Only use them if it is safe and you are trained", "Use them on every fire", "Run away", "Wait for fire brigade"],
        answer: 0,
        explanation: "Don't put yourself at risk."
    },
    {
        id: 228, category: "emergency",
        question: "What colour band is commonly used on water fire extinguishers in Australia?",
        options: ["No band (Solid Red)", "White", "Blue", "Black"],
        answer: 0,
        explanation: "Water = Red."
    },
    {
        id: 229, category: "emergency",
        question: "What fire type should water extinguishers not be used on?",
        options: ["Electrical or oil/fat fires", "Wood fires", "Paper fires", "Trash fires"],
        answer: 0,
        explanation: "Water spreads oil and conducts electricity."
    },
    {
        id: 230, category: "emergency",
        question: "What should you do first if someone receives an electric shock and is still attached to the source?",
        options: ["Isolate the power supply (turn it off)", "Grab them", "Throw water", "Call 000"],
        answer: 0,
        explanation: "Don't become a second victim."
    },
    {
        id: 231, category: "emergency",
        question: "What is the main priority when providing first aid?",
        options: ["Preserve life, prevent worsening, promote recovery", "Fill out forms", "Call the boss", "Clean the wound"],
        answer: 0,
        explanation: "The 3 Ps of First Aid."
    },
    {
        id: 232, category: "emergency",
        question: "Why should you know where first aid kits are located on site?",
        options: ["To access them quickly in an emergency", "To steal bandaids", "To inspect them", "To move them"],
        answer: 0,
        explanation: "Time is critical."
    },
    {
        id: 233, category: "emergency",
        question: "What should you do after using first aid supplies from a kit?",
        options: ["Report it so they can be restocked", "Hide it", "Leave it empty", "Buy new ones"],
        answer: 0,
        explanation: "An empty kit is useless for the next person."
    },
    {
        id: 234, category: "emergency",
        question: "Why is it important to report all injuries, even minor ones?",
        options: ["They could become infected or worsen, and need recording", "To get time off", "To sue", "To complain"],
        answer: 0,
        explanation: "Minor injuries can turn major."
    },
    {
        id: 235, category: "hazard",
        question: "How does good housekeeping support emergency response?",
        options: ["Clear pathways allow faster evacuation and access for emergency services", "It looks nice", "It prevents dust", "It saves tools"],
        answer: 0,
        explanation: "Clutter blocks escapes."
    },
    {
        id: 236, category: "emergency",
        question: "Why must fire exits and access routes never be blocked by materials or equipment?",
        options: ["It prevents escape during an emergency", "It looks messy", "It is annoying", "It breaks the door"],
        answer: 0,
        explanation: "Blocked exits kill."
    },
    {
        id: 237, category: "emergency",
        question: "What should you do if you see a fire extinguisher that has been used or is damaged?",
        options: ["Report it immediately so it can be serviced or replaced", "Put it back", "Ignore it", "Hide it"],
        answer: 0,
        explanation: "Safety equipment must be ready to use."
    },
    {
        id: 238, category: "emergency",
        question: "Why are regular emergency drills carried out?",
        options: ["To ensure everyone knows what to do and systems work", "To waste time", "To have a break", "To test the alarm"],
        answer: 0,
        explanation: "Practice makes perfect."
    },
    {
        id: 239, category: "emergency",
        question: "What is the purpose of an assembly area in an evacuation?",
        options: ["To account for all personnel", "To wait for a bus", "To smoke", "To chat"],
        answer: 0,
        explanation: "Headcounts save lives."
    },
    {
        id: 240, category: "mensch",
        question: "What should you do after an emergency where you witnessed something distressing?",
        options: ["Seek support or counselling if needed (e.g., EAP)", "Forget about it", "Drink alcohol", "Quit your job"],
        answer: 0,
        explanation: "Mental health support is crucial after trauma."
    }
];

// --- ZUFALLS-GENERATOR ---
function getRandomQuestions() {
    let tempQuestions = JSON.parse(JSON.stringify(questions));
    for (let i = tempQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempQuestions[i], tempQuestions[j]] = [tempQuestions[j], tempQuestions[i]];
    }
    
    tempQuestions.forEach(q => {
        let correctText = q.options[q.answer];
        for (let i = q.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [q.options[i], q.options[j]] = [q.options[j], q.options[i]];
        }
        q.answer = q.options.indexOf(correctText);
    });

    return tempQuestions.slice(0, 40);
}

const currentExamQuestions = getRandomQuestions();