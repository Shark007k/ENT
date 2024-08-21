const questions = [
    {
        question: "Protympanum is:",
        answers: [
          { text: "The developmental predecessor of the middle ear", correct: false },
          { text: "Part of middle ear around the Eustachian tube", correct: true },
          { text: "Anterior part of middle ear", correct: false },
          { text: "Part of the middle ear foremost in conduction of sound", correct: false },
        ],
      },
    
    {
        question: "Most common site for ear carcinoma is __ ",
        answers: [
          { text: "Cartilagenous External auditory meatus", correct: false },
          { text: "Pinna", correct: true },
          { text: "Isthmus of canal", correct: false },
          { text: "Mastoid", correct: false },
        ],
      },
    
    {
        question: "Otosclerosis is a disease of __ ",
        answers: [
          { text: "a.Otic labyrinth", correct: false },
          { text: "b.Periotic labyrinth", correct: false },
          { text: "c.Otic capsule", correct: true },
          { text: "d.Periotic capsule", correct: false },
        ],
      },
    
    {
        question: "Meniere's disease is also known as",
        answers: [
          { text: "a.Perilymphatic hydrops", correct: false },
          { text: "b.Endolymphatic hydrops", correct: true },
          { text: "c.Otospongiosis", correct: false },
          { text: "d.Coalescent Mastoiditis", correct: false },
        ],
      },
    
    {
        question: "All of the following statements about inverted papilloma are true except",
        answers: [
          { text: "a.Also known as Schneiderian papilloma", correct: false },
          { text: "b.Arises from the lateral wall of nose", correct: false },
          { text: "c.Presents with unilateral nasal obstruction and epistaxis", correct: false },
          { text: "d.More common in females", correct: true },
        ],
      },
    
    {
        question: "Most important primary care in faciomaxillary trauma is",
        answers: [
          { text: "a.Assessment of level of consciousness", correct: false },
          { text: "b.CNS evaluation", correct: false },
          { text: "c.Ensure adequate airway", correct: true },
          { text: "d.Fracture reduction", correct: false },
        ],
      },
    
    {
        question: "Percentage of newborns with deviation of nasal septum is _",
        answers: [
          { text: "A. 60%", correct: false },
          { text: "B. 40%", correct: false },
          { text: "C. 20%", correct: true },
          { text: "D. 80%", correct: false },
        ],
      },
    
    {
        question: "False statement about choanal atresia is:",
        answers: [
          { text: "a.It is due to persistence of bucconasal membrane", correct: false },
          { text: "b.Unilateral>bilateral", correct: false },
          { text: "c.Bony>membranous", correct: false },
          { text: "d.Epley’s maneuver is used in treatment", correct: true },
        ],
      },
    
    {
        question: "Pinna is made of",
        answers: [
          { text: "a.Tympanic part of mastoid", correct: false },
          { text: "b.Auricular cartilage", correct: true },
          { text: "c.Skin & fat alone", correct: false },
          { text: "d.Fat alone.", correct: false },
        ],
      },
    
    {
        question: "Floor of middle ear is related to ___",
        answers: [
          { text: "a.Internal carotid artery", correct: false },
          { text: "b.Internal jugular vein", correct: true },
          { text: "c.Parotid gland", correct: false },
          { text: "d.Mastoid", correct: false },
        ],
      },
    
    {
        question: "Most common site of sebaceous cyst is __ ",
        answers: [
          { text: "a.Helix", correct: false },
          { text: "b.Cymba concha", correct: false },
          { text: "c.Pre auricular area", correct: false },
          { text: "d.Post auricular area", correct: true },
        ],
      },
    
    {
        question: "Lever ratio of the ear ossicles is",
        answers: [
          { text: "a.14:1", correct: false },
          { text: "b.18:1", correct: false },
          { text: "c.1.3:1", correct: true },
          { text: "d.22:1", correct: false },
        ],
      },
    
    {
        question: "Otosclerosis involves the ____ layer of otic capsule",
        answers: [
          { text: "a.Enchondral", correct: true },
          { text: "b.Endosteal", correct: false },
          { text: "c.Periosteal", correct: false },
          { text: "d.Perichondral", correct: false },
        ],
      },
    
    {
        question: "Which of the following statements are true about Meniere's disease",
        answers: [
          { text: "a.Males are more commonly affected", correct: false },
          { text: "b.Usually affects age group of 35-60 years", correct: false },
          { text: "c.Usually unilateral condition", correct: false },
          { text: "d.All of the above", correct: true },
        ],
      },
    
    {
        question: "All are true about inverted papilloma except",
        answers: [
          { text: "a.Has a malignant potential", correct: false },
          { text: "b.Postoperative radiotherapy is usually given", correct: true },
          { text: "c.Recurrence after removal is common", correct: false },
          { text: "d.MRI is the first imaging modality in follow-up", correct: false },
        ],
      },
    
    {
        question: "Most commonly fractured bone on face is",
        answers: [
          { text: "a.Zygomatic", correct: false },
          { text: "b.Nasal", correct: true },
          { text: "c.Maxilla", correct: false },
          { text: "d.Mandible", correct: false },
        ],
      },
    
    {
        question: "Mulberry appearance of turbinate’s is seen in:",
        answers: [
          { text: "a.Atrophic rhinitis", correct: false },
          { text: "b.Coryza", correct: false },
          { text: "c.Hypertrophic rhinitis", correct: true },
          { text: "d.None of the aboved", correct: false },
        ],
      },
    
    {
        question: "Which of the following can cause DNS?",
        answers: [
          { text: "a.Birth trauma", correct: false },
          { text: "b.Developmental error", correct: false },
          { text: "c.Fractures of nasal septum", correct: false },
          { text: "d.all of the abbove", correct: true },
        ],
      },
    
    {
        question: "Most common presentation of bilateral choanal atresia is",
        answers: [
          { text: "a.Respiratory obstruction", correct: true },
          { text: "b.Vomiting", correct: false },
          { text: "c.Regurgitation of feeds", correct: false },
          { text: "d.Post nasal drip", correct: false },
        ],
      },
    
    {
        question: "The part of pinna devoid of cartilage is",
        answers: [
          { text: "a.Cymba concha", correct: false },
          { text: "b.lncisura terminalis", correct: true },
          { text: "c.Antitragus", correct: false },
          { text: "d.Scaphoid fossa", correct: false },
        ],
      },
    
    {
        question: "Tegmen tympani forms",
        answers: [
          { text: "a.Floor of middle ear", correct: false },
          { text: "b.lateral wall of middle ear", correct: false },
          { text: "c.Roof of middle ear", correct: true },
          { text: "d.Medial wall of middle ear", correct: false },
        ],
      },
    
    {
        question: "Ratio of effective vibratory area of tympanic membrane to area of footplate of stapes is",
        answers: [
          { text: "a.17:1", correct: true },
          { text: "b.1.3:1", correct: false },
          { text: "c.18:1", correct: false },
          { text: "d.6:1", correct: false },
        ],
      },
    
    {
        question: "In familial cases of Meniere's disease, mutations are seen in",
        answers: [
          { text: "a.Long arm of chromosome 6", correct: false },
          { text: "b.Short arm of chromosome 6", correct: true },
          { text: "c.Long arm of chromosome 8", correct: false },
          { text: "d.Short arm of chromosome 8", correct: false },
        ],
      },
    
    {
        question: "Most common malignant tumor of nasal cavity is:",
        answers: [
          { text: "a.Squamous cell carcinoma", correct: true },
          { text: "b.Basal cell carcinoma", correct: false },
          { text: "c.Neuroblastoma", correct: false },
          { text: "", correct: false },
        ],
      },
    
    {
        question: "The vertical and horizontal fracture of nasal septum is",
        answers: [
          { text: "a.Chevallet and Jarjaway fracture", correct: true },
          { text: "b.Citelli fracture", correct: false },
          { text: "c.Tripod fracture", correct: false },
          { text: "d.None of the above", correct: false },
        ],
      },
    
    {
        question: "0zaena is __",
        answers: [
          { text: "a.Atrophic rhinitis", correct: true },
          { text: "b.Allergic rhinitis", correct: false },
          { text: "c.Vasomotor rhinitis", correct: false },
          { text: "d.None of the above", correct: false },
        ],
      },
    
    {
        question: "Which of the following features is not primarily associated with DNS?",
        answers: [
          { text: "A. Hypertrophy of turbinates", correct: false },
          { text: "b. Atrophy of turbinates", correct: true },
          { text: "c. Epistaxis", correct: false },
          { text: "d.Recurrent sinusitis", correct: false },
        ],
      },
    
    {
        question: "Choanal atresia is associated with",
        answers: [
          { text: "a.Coloboma of eye", correct: false },
          { text: "b.Heart defects", correct: false },
          { text: "c.Retarded growth", correct: false },
          { text: "d.All of the above", correct: true },
        ],
    },
    {
        question: "The middle ear performs the following functions except",
        answers: [
          { text: "A.Impedance matching", correct: false },
          { text: "B.Protection of inner ear", correct: false },
          { text: "C.Transduction of sound", correct: true },
          { text: "D.Amplification of sound intensity", correct: false },
        ],
      },
    
    {
        question: "Common cold is usually due to infection by",
        answers: [
          { text: "A. Bacteria", correct: false },
          { text: "B. Viruses", correct: true },
          { text: "C. Fungi", correct: false },
          { text: "D. Allergy", correct: false },
        ],
      },
    
    
    {
        question: "Which of the following forms the promontory?",
        answers: [
          { text: "A. Basal tum of cochlea", correct: true },
          { text: "B. Semicircular canal", correct: false },
          { text: "C. Handle of malleus", correct: false },
          { text: "D. Short process of incus", correct: false },
        ],
      },
    
    {
        question: "Rodent ulcer is",
        answers: [
          { text: "A. Rhinophyma", correct: false },
          { text: "B. Squamous cell carcinoma", correct: false },
          { text: "C. Basal cell carcinoma", correct: true },
          { text: "D. None of the above", correct: false },
        ],
      },
    
    {
        question: "The earliest symptom of the glomus tumor is __ ",
        answers: [
          { text: "A. Sensory-neural deafness", correct: false },
          { text: "B. Headache", correct: false },
          { text: "C. Pulsatile tinnitus", correct: true },
          { text: "D. Vertigo", correct: false },
        ],
      },
    
    {
        question: "Rinne test positive indicates",
        answers: [
          { text: "A. AC>BC", correct: true },
          { text: "B. BC>AC", correct: false },
          { text: "C. AC=BC", correct: false },
          { text: "D. None of the above", correct: false },
        ],
      },
    
    {
        question: "A 25-year-old woman with a family history of hearing loss in mother developed hearing problem during pregnancy. Hearing loss is bilateral and progressive. The probable diagnosis is __ ",
        answers: [
          { text: "A. Otosclerosis", correct: true },
          { text: "B. Meniere's disease", correct: false },
          { text: "C. Acoustic neuroma", correct: false },
          { text: "D. Tympanosclerosis", correct: false },
        ],
      },
    
    {
        question: "When symptoms of Meniere's appears in reverse order:",
        answers: [
          { text: "A. Lermoyez syndrome", correct: true },
          { text: "B. Lemiere's syndrome", correct: false },
          { text: "C. Lehrich syndrome", correct: false },
          { text: "D. Le riche syndrome", correct: false },
        ],
      },
    
    {
        question: "Ground glass appearance of maxillary sinus in CT scan is seen in:",
        answers: [
          { text: "A. Osteoma", correct: false },
          { text: "B. Fibrous dysplasia", correct: true },
          { text: "C. Maxillary carcinoma", correct: false },
          { text: "D. Maxillary polyp", correct: false },
        ],
      },
    
    {
        question: "Young's operation is done for",
        answers: [
          { text: "A. DNS ", correct: false },
          { text: "B. Atrophic rhinitis ", correct: true },
          { text: "C. Allergic rhinitis", correct: false },
          { text: "D. Vasomotor rhinitis", correct: false },
        ],
      },
    
    {
        question: "True regarding isthmus is",
        answers: [
          { text: "A. It is just lateral to the petrotympanic suture", correct: false },
          { text: "B. It is at the bony cartilaginous junction of EAC", correct: false },
          { text: "C. It is the narrowest part of ear canal", correct: true },
          { text: "D. All of the above", correct: false },
        ],
      },
    
    {
        question: "False about septal haematoma",
        answers: [
          { text: "A. Trauma is an important cause ", correct: false },
          { text: "B. Conservative management", correct: true },
          { text: "C. Can lead to abscess formation", correct: false },
          { text: "D. Can result in saddle deformity", correct: false },
        ],
      },
    
    {
        question: "Oval window is covered by",
        answers: [
          { text: "A. Footplate of stapes", correct: true },
          { text: "B. Secondary tympanic membrane ", correct: false },
          { text: "C. Tympanic membrane", correct: false },
          { text: "D. None of the above", correct: false },
        ],
      },
    
    {
        question: "Rhinoscleroma is caused by",
        answers: [
          { text: "A. Rhinosporidium seeberi", correct: false },
          { text: "B. Klebsiella rhinoscleromatis", correct: true },
          { text: "C. Staphylococcus", correct: false },
          { text: "D. Spirochetes", correct: false },
        ],
      },
    
    {
        question: "Pulsatile tinnitus is seen in _",
        answers: [
          { text: "A. CSOM", correct: false },
          { text: "B. ASOM", correct: false },
          { text: "C. Mastoiditis", correct: false },
          { text: "D. Glomus jungulare tumor", correct: true },
        ],
      },
    
    {
        question: "Minimum hearing loss for Rinne test to be negative is",
        answers: [
          { text: "A. 5-10dB", correct: false },
          { text: "B. 15-20dB", correct: true },
          { text: "C. 25-30dB", correct: false },
          { text: "D. 35-40dB", correct: false },
        ],
      },
    
    {
        question: "Otosclerotic foci involving the entire footplate but not the annular ligament is called__",
        answers: [
          { text: "A. Circumferential", correct: false },
          { text: "B. Obliterative", correct: false },
          { text: "C. Biscuit", correct: true },
          { text: "D. Footplate", correct: false },
        ],
      },
    
    {
        question: "Sudden loss of tone in patients with Meniere's is called",
        answers: [
          { text: "A. Tullio phenomenon", correct: false },
          { text: "B. Tumarkin's otolithic crisis", correct: true },
          { text: "C. Lermoyez syndrome", correct: false },
          { text: "D. Vestibular hydrops", correct: false },
        ],
      },
    
    {
        question: "Most common histological variety among Para nasal sinus carcinoma is",
        answers: [
          { text: "A. Squamous cell carcinoma", correct: true },
          { text: "B. Basal cell carcinoma", correct: false },
          { text: "C. Adenocarcinoma", correct: false },
          { text: "D. Melanoma", correct: false },
        ],
      },
    
    {
        question: "Diplopia in orbital floor fracture is due to involvement of",
        answers: [
          { text: "A. Superior oblique", correct: false },
          { text: "B. Inferior rectus", correct: true },
          { text: "C. Superior rectus", correct: false },
          { text: "D. Medial rectus", correct: false },
        ],
      },
    
    {
        question: "False about rhinitis sicca is",
        answers: [
          { text: "A. More common in persons working in hot, dry dusty surroundings", correct: false },
          { text: "B. Squamous metaplasia is seen", correct: false },
          { text: "C. Mainly affects posterior 2/3rd of nose", correct: true },
          { text: "D. Antibiotic & steroid ointment is used for treatment ", correct: false },
        ],
      },
    
    {
        question: "6 year old boy fell from the bed and developed swelling in the nose and difficulty in breathing. Management includes",
        answers: [
          { text: "A. Observation ", correct: false },
          { text: "B. Systemic antibiotics only", correct: false },
          { text: "C. Surgical drainage", correct: true },
          { text: "D. None of the above", correct: false },
        ],
      },
    
    {
        question: "All are true about tympanic membrane except ",
        answers: [
          { text: "A. It has 3 layers", correct: false },
          { text: "B. It is derived from all 3 germ layers", correct: false },
          { text: "C. It separates External from middle ear", correct: false },
          { text: "D. Central part is more mobile", correct: true },
        ],
      },
    
    {
        question: "Movement of stapes footplate causes vibration in",
        answers: [
          { text: "A. Scala vestibuli", correct: true },
          { text: "B. Scala media", correct: false },
          { text: "C. Scala tympani", correct: false },
          { text: "D. Pyramid", correct: false },
        ],
      },
    
    {
        question: "Atrophic dry nasal mucosa, extensive crustations, woody hard external nose is suggestive of",
        answers: [
          { text: "A. Atrophic rhinitis", correct: false },
          { text: "B. Rhinophyma", correct: false },
          { text: "C. Rhinosporidiosis ", correct: false },
          { text: "D. Rhinoscleroma", correct: true },
        ],
      },
    
    {
        question: "Rising sun appearance is seen in ",
        answers: [
          { text: "A. Exostosis", correct: false },
          { text: "B. ASOM", correct: false },
          { text: "C. Glomus Tumor", correct: true },
          { text: "D. CSOM", correct: false },
        ],
      },
    
    {
        question: "In severe unilateral sensorineural hearing loss, Rinne test is",
        answers: [
          { text: "A. Positive", correct: false },
          { text: "B. Negative", correct: false },
          { text: "C. False negative ", correct: true },
          { text: "D. False positive", correct: false },
        ],
      },
    
    {
        question: "The cell of origin inGlomus tumors is __",
        answers: [
          { text: "a.Perivascular cells", correct: false },
          { text: "b.Peritubal cells", correct: false },
          { text: "c.Paraganglionic cells", correct: true },
          { text: "d.Paraneoplastic cells", correct: false },
        ],
      },
    
    {
        question: "Travellingwave theorywas proposed by",
        answers: [
          { text: "VonBekesy", correct: true },
          { text: "Young", correct: false },
          { text: "Helmholtz", correct: false },
          { text: "None of the above", correct: false },
        ],
      },
    
    {
        question: "The most common age groupaffected in otosclerosis is __",
        answers: [
          { text: "5-10", correct: false },
          { text: "10-20", correct: false },
          { text: "20-30", correct: true },
          { text: "30-40", correct: false },
        ],
      },
    
    {
        question: "The following is true about early Meniere ' s disease:",
        answers: [
          { text: "Higher frequencies affected", correct: false },
          { text: "Lower frequencies affected", correct: true },
          { text: "Middle frequencies affected", correct: false },
          { text: "All frequencies affected", correct: false },
        ],
      },
    
    {
        question: " Most common site for osteoma is",
        answers: [
          { text: " Maxillary sinus", correct: false },
          { text: " Frontal sinus", correct: true },
          { text: " Ethmoid sinus", correct: false },
          { text: " Sphenoid sinus", correct: false },
        ],
      },
    
    {
        question: " All of the following are features of fracture zygoma except",
        answers: [
          { text: " Trismus", correct: false },
          { text: " Diplopia ", correct: false },
          { text: " CSF rhinorrhea", correct: true },
          { text: " infraorbital anaesthesia", correct: false },
        ],
      },
    
    {
        question: "Nasal obstructioninatrophic rhinitis is due to:",
        answers: [
          { text: "Hypertrophy of turbinate’ s", correct: false },
          { text: "Excessive crust formation", correct: true },
          { text: "Synechiae", correct: false },
          { text: "Polyp", correct: false },
        ],
      },
    
    {
        question: "Killian ' s incision is used in",
        answers: [
          { text: "Submucosal Resection", correct: true },
          { text: "Myringoplasty", correct: false },
          { text: "Tympanoplasty", correct: false },
          { text: "Septoplasty", correct: false },
        ],
      },
    
    {
        question: "All of these can cause saddle nose except",
        answers: [
          { text: "Syphilis", correct: false },
          { text: "Leprosy", correct: false },
          { text: "Septal abscess", correct: false },
          { text: "Acromegaly", correct: true },
        ],
      },
    
    {
        question: ".Fissure of Santoriniis:",
        answers: [
          { text: "Deficiency in cartilaginous canal", correct: true },
          { text: "Connection between Middle ear and antrum", correct: false },
          { text: "Connection between Inner ear and middle ear ", correct: false },
          { text: "Deficiency in bony canal ", correct: false },
        ],
      },
    
    {
        question: " Most common site for residual cholesteatoma after surgery is",
        answers: [
          { text: " Facial recess", correct: false },
          { text: " Hypotympanum", correct: false },
          { text: " Sinus tympani", correct: true },
          { text: " Prussack' s space", correct: false },
        ],
      },
    
    {
        question: " All are true about glomus tumors except'---",
        answers: [
          { text: " Slow growing tumor", correct: false },
          { text: " More common in males", correct: true },
          { text: " usually seen in middle age", correct: false },
          { text: " Highly vascular tumor", correct: false },
        ],
      },
    
    {
        question: " .Endocochlear potential is",
        answers: [
          { text: " +80mV ", correct: true },
          { text: " -85mV", correct: false },
          { text: " +200mV", correct: false },
          { text: " -200mV", correct: false },
        ],
      },
    
    {
        question: " Van der Hoeve syndrome includes all except_",
        answers: [
          { text: " Osteogenesis imperfecta", correct: false },
          { text: " Otosclerosis", correct: false },
          { text: " Blue sclera", correct: false },
          { text: " Brown sclera", correct: true },
        ],
      },
    
    {
        question: " On electrocochleography ,SP(summating potential): AP (action potential) ratio diagnostic for Meniere ' s disease is:",
        answers: [
          { text: " 0.3", correct: false },
          { text: " 0.1", correct: false },
          { text: " 0.4 ", correct: true },
          { text: " 0.2", correct: false },
        ],
      },
    
    {
        question: "Most common site of ossifying fibroma is",
        answers: [
          { text: " Frontal sinus", correct: false },
          { text: " Maxilla", correct: false },
          { text: " Mandible", correct: true },
          { text: " Maxillary sinus", correct: false },
        ],
      },
    
    {
        question: "Nerve damaged in zygomatic fracture is",
        answers: [
          { text: "Supraorbital nerve", correct: false },
          { text: "Infraorbital nerve", correct: true },
          { text: "Lingual nerve", correct: false },
          { text: "Facial nerve", correct: false },
        ],
      },
    
    {
        question: "Alkaline solution used in atrophic rhinitis doesn 't contain ",
        answers: [
          { text: "Sodium chloride", correct: false },
          { text: "Potassium chloride", correct: true },
          { text: "Sodium bicarbonate", correct: false },
          { text: "Sodium biborate", correct: false },
        ],
      },
    
    {
        question: ".Alternativefor SMR is",
        answers: [
          { text: "A.Tympanoplasty", correct: false },
          { text: "B.Septoplasty", correct: true },
          { text: "C.FESS", correct: false },
          { text: "D.Rhinoplasty", correct: false },
        ],
      },
    
    {
        question: ".Rhinophyma is due to",
        answers: [
          { text: "Hypertrophy of sweat glands", correct: false },
          { text: "Hypertrophy of sebaceous glands", correct: true },
          { text: "Hypertrophy of cartilage", correct: false },
          { text: "Hypertrophy of epithelial cells", correct: false },
        ],
      },
    
    {
        question: "True aboutexternal auditory canalis",
        answers: [
          { text: "Outer2/3rd is cartilaginous and inner1/3rd is bony part", correct: false },
          { text: "Furuncles are seen in the cartilaginous part", correct: true },
          { text: "Fissures of Santorini are present in bony part and permits parotid and superficial mastoid infections to spread to canal", correct: false },
          { text: "Isthmus is present at junction of cartilaginous and fibrous part", correct: false },
        ],
      },
    
    {
        question: ".Fossa lncudis attaches",
        answers: [
          { text: "Incus head", correct: false },
          { text: "Incus short process", correct: true },
          { text: "Incus long process", correct: false },
          { text: "Lenticular process", correct: false },
        ],
      },
    
    {
        question: "Glomus jugular tumor invades ",
        answers: [
          { text: "Epitympanum", correct: false },
          { text: "Mesotympanum", correct: false },
          { text: "Hypotympanum", correct: true },
          { text: "Mastoid", correct: false },
        ],
      },
    
    {
        question: "Most commonly used tuning fork frequency in ENT is",
        answers: [
          { text: "126Hz", correct: false },
          { text: "512Hz ", correct: true },
          { text: "1024Hz", correct: false },
          { text: "2048Hz", correct: false },
        ],
      },
    
    {
        question: "All of the following statements are true regarding otosclerosis except_",
        answers: [
          { text: "More common in females", correct: false },
          { text: "Causes bilateral progressive conductive hearing loss", correct: false },
          { text: "Autosomal recessive inheritance", correct: true },
          { text: "May be associated with measles", correct: false },
        ],
      },
    
    {
        question: ".Useful test to diagnose Meniere ' s disease is",
        answers: [
          { text: "Oto acoustic emission ", correct: false },
          { text: "Caloric test", correct: false },
          { text: "Dix Hall pike test", correct: false },
          { text: "Glycerol test", correct: true },
        ],
      },
    
    {
        question: "Most common site of occurrence of fibrous dysplasia is",
        answers: [
          { text: "Maxillary sinus", correct: true },
          { text: "Mandible", correct: false },
          { text: "Frontal sinus", correct: false },
          { text: "Ethmoidal sinus", correct: false },
        ],
      },
    
    {
        question: "Blow out fracture refers to",
        answers: [
          { text: "Fracture of floor of orbit", correct: true },
          { text: "Fracture of nasal bone", correct: false },
          { text: "Fracture of mandible", correct: false },
          { text: "Fracture of maxilla", correct: false },
        ],
      },
    
    {
        question: ".Kemicetine antiozaena solutioncontains all except",
        answers: [
          { text: "Chloramphenicol", correct: false },
          { text: "Estradiol ", correct: false },
          { text: "Vitamin D2 ", correct: false },
          { text: "Sodium bicarbonate", correct: true },
        ],
      },
    
    {
        question: ".All ofthefollowing statements about septoplasty are true except:",
        answers: [
          { text: "Done in cases of symptomatic nasal obstruction", correct: false },
          { text: "Freer ' s incision is used", correct: false },
          { text: "C.Mucoperichondrial/ mucoperiosteal flap is raised on both sides", correct: true },
          { text: "D. It is a conservative procedure", correct: false },
        ],
      },
    
    {
        question: ".Which of the following statements is false regarding the condition depicted below? diagram",
        answers: [
          { text: "Also known as elephantiasis of nose", correct: false },
          { text: "Seen in long standing cases of acne rosacea", correct: false },
          { text: "It is commonly seen in middle aged women", correct: true },
          { text: "Hypertrophy of sebaceous gland", correct: false },
        ],
      },
    
    {
        question: "Ceruminous glands are",
        answers: [
          { text: "Modified Eccrine glands", correct: false },
          { text: "Modified apocrine glands", correct: true },
          { text: "Modified Holocrine glands", correct: false },
          { text: "Modified endocrine glands", correct: false },
        ],
      },
    
    {
        question: "Which of the following forms the promontory?",
        answers: [
          { text: "Basal tum of cochlea", correct: true },
          { text: "Semicircular canal", correct: false },
          { text: "Handle of malleus", correct: false },
          { text: "Short process of incus", correct: false },
        ],
      },
    
    {
        question: ".The earliest symptom of the glomus tumor is_",
        answers: [
          { text: "Sensory-neural deafness", correct: false },
          { text: "Headache", correct: false },
          { text: "Pulsatile tinnitus ", correct: true },
          { text: "Vertigo", correct: false },
        ],
      },
    
    {
        question: "Identify the sign seen in given X-ray.",
        answers: [
          { text: "A.Tear drop sign", correct: true },
          { text: "B.Phelp ' s sign", correct: false },
          { text: "C.Holman Miller sign ", correct: false },
          { text: "D.Antral sign", correct: false },
        ],
      },
    
    {
        question: ".Young ' s operation is done for",
        answers: [
          { text: "A.DNS", correct: false },
          { text: "B.Atrophic rhinitis", correct: true },
          { text: "C.Allergic rhinitis", correct: false },
          { text: "D.Vasomotor rhinitis", correct: false },
        ],
      },
    
    {
        question: "False about septal haematoma",
        answers: [
          { text: "A.Trauma is an important cause", correct: false },
          { text: "B.Conservative management", correct: true },
          { text: "C.Can lead to abscess formation", correct: false },
          { text: "D.Can result in saddle deformity", correct: false },
        ],
      },
    
    {
        question: "Rodent ulcer is",
        answers: [
          { text: "A.Rhinophyma", correct: false },
          { text: "B.Squamous cell carcinoma", correct: false },
          { text: "C.Basal cell carcinoma", correct: true },
          { text: "D.None of the above", correct: false },
        ],
      },
    
    {
        question: ".True regarding isthmus is",
        answers: [
          { text: "A.It is just lateral to the petrotympanic suture", correct: false },
          { text: "B.It is at the bony cartilaginous junction of EAC", correct: false },
          { text: "C.It is the narrowest part of ear canal", correct: true },
          { text: "D.All of the above", correct: false },
        ],
      },
    
    {
        question: "Oval window is covered by",
        answers: [
          { text: "A.Foot plate of stapes", correct: true },
          { text: "B.Secondary tympanic membrane", correct: false },
          { text: "C.Tympanic membrane", correct: false },
          { text: "D.None of the above", correct: false },
        ],
      },
    
    {
        question: "Pulsatile tinnitus is seen in___",
        answers: [
          { text: "A.CSOM", correct: false },
          { text: "B.ASOM", correct: false },
          { text: "C.Mastoiditis", correct: false },
          { text: "D.Glomus jungulare tumor", correct: true },
        ],
      },
    
    {
        question: "Minimumhearing loss forRinne testto be negative is",
        answers: [
          { text: "A.5-10dB", correct: false },
          { text: "B.15-20dB", correct: true },
          { text: "C.25-30dB", correct: false },
          { text: "D.35-40dB", correct: false },
        ],
      },
    
    {
        question: "Otosclerotic foci involving the entire footplate but not the annular ligament is called___",
        answers: [
          { text: "A.Circumferential", correct: false },
          { text: "B.Obliterative", correct: false },
          { text: "C.Biscuit", correct: true },
          { text: "D.Footplate", correct: false },
        ],
      },
    
    {
        question: "Sudden loss of tone inpatients with Meniere ' s is called",
        answers: [
          { text: "A.Tullio phenomenon", correct: false },
          { text: "B.Tumarkin ' s otolithiccrisis", correct: true },
          { text: "C.Lermoyez syndrome", correct: false },
          { text: "D.Vestibular hydrops ", correct: false },
        ],
      },
    
    {
        question: "Most common histological variety among Paranasal sinus carcinoma is",
        answers: [
          { text: "A.Squamous cell carcinoma", correct: true },
          { text: "B.Basal cell carcinoma", correct: false },
          { text: "C.Adenocarcinoma", correct: false },
          { text: "D.Melanoma", correct: false },
        ],
      },
    
    {
        question: "Diplopiain orbital floor fracture is due to involvement of",
        answers: [
          { text: "A.Superior oblique", correct: false },
          { text: "B.Inferior rectus", correct: true },
          { text: "C.Superior rectus", correct: false },
          { text: "D.Medial rectus", correct: false },
        ],
      },
    
    {
        question: "False about rhinitis siccais",
        answers: [
          { text: "A.More common in persons working in hot,dry dusty surroundings ", correct: false },
          { text: "B.Mainly affects posterior 2/3rd of nose", correct: true },
          { text: "C.Squamous metaplasia is seen", correct: false },
          { text: "D.Antibiotic &steroid ointment is used for treatment ", correct: false },
        ],
      },
    
    {
        question: "6year old boyfell from the bed and developed swelling in the nose and difficulty in breathing.Management includes",
        answers: [
          { text: "A.Observation", correct: false },
          { text: "B.Systemic antibiotics only", correct: false },
          { text: "C.Surgical drainage", correct: true },
          { text: "D.None of the above", correct: false },
        ],
      },
    
    {
        question: "Rhinoscleroma is caused by",
        answers: [
          { text: "A.Rhinosporidium seeberi", correct: false },
          { text: "B.Klebsiella rhinoscleromatis", correct: true },
          { text: "C.Staphylococcus", correct: false },
          { text: "D.Spirochetes", correct: false },
        ],
      },
    
    {
        question: "All are true about tympanic membrane except",
        answers: [
          { text: "A.It has 3 layers", correct: false },
          { text: "B.It is derived from all 3germ layers", correct: false },
          { text: "C.It separates External from middle ear", correct: false },
          { text: "D.Central part is more mobile", correct: true },
        ],
      },
    
    {
        question: "Movement of stapes footplate causes vibration in",
        answers: [
          { text: "A.Scala vestibuli", correct: true },
          { text: "B.Scala media", correct: false },
          { text: "C.Scala tympani", correct: false },
          { text: "D.Pyramid", correct: false },
        ],
      },
    
    {
        question: "Rising sun appearance is seen in_",
        answers: [
          { text: "A.Exostosis", correct: false },
          { text: "B.ASOM", correct: false },
          { text: "C.Glomus Tumor", correct: true },
          { text: "D.CSOM", correct: false },
        ],
      },
    
    {
        question: "In severe unilateral sensorineural hearing loss, Rinne testis",
        answers: [
          { text: "A.Positive", correct: false },
          { text: "B.Negative", correct: false },
          { text: "C.False negative", correct: true },
          { text: "D.False positive", correct: false },
        ],
      },
    
    {
        question: "The kind of hearing defect not seen in otosclerosis is __",
        answers: [
          { text: "A.Paracusis willisii", correct: false },
          { text: "B.Presbyacusis", correct: true },
          { text: "C.Progressive conductive hearing loss", correct: false },
          { text: "D.Sensorineural hearing loss", correct: false },
        ],
      },
    
    {
        question: "The following is not Meniere ' s disease",
        answers: [
          { text: "A.Vestibular hydrops", correct: false },
          { text: "B.Cochlear hydrops", correct: false },
          { text: "C.Perilymphatic hydrops", correct: true },
          { text: "D.Endolymphatic hydrops", correct: false },
        ],
      },
    
    {
        question: "Most common sinus involved in squamous cell carcinoma is",
        answers: [
          { text: "A.Maxillary sinus", correct: true },
          { text: "B.Frontal sinus", correct: false },
          { text: "C.Sphenoid sinus", correct: false },
          { text: "D.Ethmoid sinus", correct: false },
        ],
      },
    
    {
        question: "Le Forte classification is used for fractures of",
        answers: [
          { text: "A.Nasal bone", correct: false },
          { text: "B.Maxilla", correct: true },
          { text: "C.Mandible", correct: false },
          { text: "D.Zygoma", correct: false },
        ],
      },
    
    {
        question: "True about rhinitis caseosa is",
        answers: [
          { text: "A.Unilateral condition", correct: false },
          { text: "B.More common in males", correct: false },
          { text: "C.Also known as nasal cholesteatoma", correct: false },
          { text: "D.All of the above", correct: true },
        ],
      },
    
    {
        question: "Most common cause of septal perforation is",
        answers: [
          { text: "A.Septal abscess", correct: false },
          { text: "B.Trauma", correct: true },
          { text: "C.Syphilis", correct: false },
          { text: "D.Tuberculosis", correct: false },
        ],
      },
    
    {
        question: "Atrophic dry nasal mucosa, extensive crustations, woody hard external nose is suggestive of",
        answers: [
          { text: "A.Atrophic rhinitis", correct: false },
          { text: "B.Rhinophyma", correct: false },
          { text: "C.Rhinosporidiosis", correct: false },
          { text: "D.Rhinoscleroma", correct: true },
        ],
      },
    
    {
        question: " Colour of the normal tympanic membrane is ",
        answers: [
          { text: "Yellow", correct: false },
          { text: "Pearly grey", correct: true },
          { text: "Red", correct: false },
          { text: "Pink", correct: false },
        ],
      },
    
    
    {
        question: "Round window is covered by",
        answers: [
          { text: "Secondary tympanic membrane", correct: true },
          { text: "Footplate of stapes", correct: false },
          { text: "Tympanic membrane", correct: false },
          { text: "None of the above", correct: false },
        ],
      },
    
    {
        question: "Brown's sign is seen in ___",
        answers: [
          { text: "Acoustic neuroma", correct: false },
          { text: "Meniere's disease", correct: false },
          { text: "Otosclerosis", correct: false },
          { text: "Glomus tumor", correct: true },
        ],
      },
    
    {
        question: "A 25-year-old male diagnosed to have suppurative labyrinthitis, having positive fistula test and positive test on Rinne. He rejected treatment and later presented with deafness in the affected ear. On examination, the fistula test was now negative. Rinne is likely to be",
        answers: [
          { text: "True positive", correct: false },
          { text: "True negative", correct: false },
          { text: "False positive", correct: false },
          { text: "False negative", correct: true },
        ],
      },
    
    {
        question: "Blue Mantle sign is due to __",
        answers: [
          { text: "Blue staining of cement substance on HPE", correct: true },
          { text: "Bluish discoloration of post-auricular area", correct: false },
          { text: "Bluish discoloration of stapes footplate", correct: false },
          { text: "Has nothing to do with the color blue", correct: false },
        ],
      },
    
    {
        question: "The following is not a vestibular sedative",
        answers: [
          { text: "Dimenhydrinate", correct: false },
          { text: "Prochlorperazine", correct: false },
          { text: "Promethazine", correct: false },
          { text: "Carbogen", correct: true },
        ],
      },
    
    {
        question: "Which histological variety of sinonasal carcinoma is more common in woodworkers?",
        answers: [
          { text: "Squamous cell carcinoma", correct: false },
          { text: "Adenocarcinoma", correct: true },
          { text: "Melanoma", correct: false },
          { text: "Anaplastic carcinoma", correct: false },
        ],
      },
    
    {
        question: "Guerin's fracture is",
        answers: [
          { text: "Le Fort-I", correct: true },
          { text: "Le-Fort-II", correct: false },
          { text: "Le-Fort-Ill", correct: false },
          { text: "Le-Fort-IV", correct: false },
        ],
      },
    
    {
        question: "Allergic rhinitis is mediated by",
        answers: [
          { text: "IgA", correct: false },
          { text: "IgE", correct: true },
          { text: "IgD", correct: false },
          { text: "IgM", correct: false },
        ],
      },
    
    {
        question: "Bony septal perforation occurs in",
        answers: [
          { text: "Syphilis", correct: true },
          { text: "Tuberculosis", correct: false },
          { text: "Leprosy", correct: false },
          { text: "Sarcoidosis", correct: false },
        ],
      },
    
    {
        question: "Mikulicz cells and Russell bodies are characteristic of",
        answers: [
          { text: "Rhinoscleroma", correct: true },
          { text: "Rhinosporidiosis", correct: false },
          { text: "Lupus vulgaris", correct: false },
          { text: "None of the above", correct: false },
        ],
      },
    
    {
        question: "The following is false about tympanic membrane",
        answers: [
          { text: "0.2 mm thick", correct: true },
          { text: "90 mm2 in area", correct: false },
          { text: "Angle of 55 degree with horizontal", correct: false },
          { text: "Inner surface is convex", correct: false },
        ],
      },
    
    {
        question: "Processus cochleariformis is related to the",
        answers: [
          { text:  "Tendon of tensor tympani", correct: true },
          { text: "Tendon of stapedius", correct: false },
          { text: "Handle of malleus", correct: false },
          { text: "Incus", correct: false },
        ],
      },
    
    {
        question: "Polypoidal mass in middle ear which bleeds heavily on touch in a patient with history of hearing loss and tinnitus is due to ___",
        answers: [
          { text: "Angiofibroma", correct: false },
          { text: "Exostosis", correct: false },
          { text: "Glomus jugulare", correct: true },
          { text: "Acoustic neuroma", correct: false },
        ],
      },
    
    {
        question: "Rinne test is positive in",
        answers: [
          { text: "CSOM", correct: false },
          { text: "Impacted wax", correct: false },
          { text: "Presbycusis", correct: true },
          { text: "Otosclerosis", correct: false },
        ],
      },
    
    {
        question: "Conductive hearing loss with a normal TM is seen in __ ",
        answers: [
          { text: "Otosclerosis", correct: true },
          { text: "CSOM", correct: false },
          { text: "Meniere’s disease", correct: false },
          { text: "Bell's palsy", correct: false },
        ],
      },
    
    {
        question: "Vasodilator of the inner ear is",
        answers: [
          { text: "Nicotine", correct: false },
          { text: "Betahistine", correct: true },
          { text: "Antihistaminics", correct: false },
          { text: "Serotonin", correct: false },
        ],
      },
    
    {
        question: "Most common sinus involved in adenocarcinoma in workers of furniture industry is",
        answers: [
          { text: "Maxillary sinus", correct: false },
          { text: "Frontal sinus", correct: false },
          { text: "Ethmoid sinus", correct: true },
          { text: "Sphenoid sinus", correct: false },
        ],
      },
    
    {
        question: "Le Fort fracture doesn't involve",
        answers: [
          { text: "Maxilla", correct: false },
          { text: "Mandible", correct: true },
          { text: "Nasal bone", correct: false },
          { text: "Lacrimal bone", correct: false },
        ],
      },
    
    {
        question: "Which of the following is not associated with allergic rhinitis?",
        answers: [
          { text: "Allergic shiners", correct: false },
          { text: "Allergic salute", correct: false },
          { text: "Atrophy of turbinate’s", correct: true },
          { text: "Serous otitis media", correct: false },
        ],
      },
    
    {
        question: "Maggots in nasal cavity are most commonly treated by",
        answers: [
          { text: "Chloroform diluted with water", correct: true },
          { text: "Liquid paraffin", correct: false },
          { text: "Lignocaine spray", correct: false },
          { text: "Systemic antibiotics", correct: false },
        ],
      },
    
    {
        question: "All are true about rhinoscleroma except",
        answers: [
          { text: "Seen in endemic regions", correct: false },
          { text: "Biopsy is diagnostic", correct: false },
          { text: "Surgery is the treatment of choice", correct: true },
          { text: "Causative organism can be cultured", correct: false },
        ],
      },
    
    {
        question: "Shrapnell's membrane is also called",
        answers: [
          { text: "Basilar membrane", correct: false },
          { text: "Reissner's membrane", correct: false },
          { text: "Pars flaccida", correct: true },
          { text: "Secondary tympanic membrane", correct: false },
        ],
      },
    
    {
        question: "Facial nerve course in the middle ear:",
        answers: [
          { text: "Horizontal in the medial wall, vertical in the posterior wall", correct: true },
          { text: "Vertical in medial wall, horizontal in posterior wall", correct: false },
          { text: "Horizontal only", correct: false },
          { text: "Vertical only", correct: false },
        ],
      },
    
    {
        question: "A middle-aged woman presents with deafness, tinnitus, and bleeding from the ear. On examination, reddish mass is seen behind an intact tympanic membrane which blanches on the pressure with the pneumatic speculum. All of the following are true regarding its management except __",
        answers: [
          { text: "Preoperative biopsy", correct: true },
          { text: "Radiotherapy", correct: false },
          { text: "Preoperative embolization", correct: false },
          { text: "Surgery", correct: false },
        ],
      },
    
    {
        question: "Negative Rinne with 512 Hz indicates approximate hearing loss of",
        answers: [
          { text: "15dB", correct: false },
          { text: "30 dB", correct: true },
          { text: "45dB", correct: false },
          { text: "60 dB", correct: false },
        ],
      },
    
    {
        question: "Glycerol test is done in",
        answers: [
          { text: "BPPV", correct: false },
          { text: "Otosclerosis", correct: false },
          { text: "Meniere's disease", correct: true },
          { text: "ASOM", correct: false },
        ],
      },
    
    {
        question: "Early maxillary carcinoma presents as",
        answers: [
          { text: "Blood tinged nasal discharge", correct: true },
          { text: "Enlarged cervical lymph node", correct: false },
          { text: "Proptosis", correct: false },
          { text: "None of the above", correct: false },
        ],
      },
    
    {
        question: "Most common site of fracture of mandible in children is",
        answers: [
          { text: "Condyle", correct: true },
          { text: "Angle", correct: false },
          { text: "Body", correct: false },
          { text: "Symphysis", correct: false },
        ],
      },
    
    {
        question: "Nasal mucosa in allergic rhinitis is",
        answers: [
          { text: "Pale and edematous", correct: true },
          { text: "Congested and edematous", correct: false },
          { text: "Atrophied", correct: false },
          { text: "Any of the above", correct: false },
        ],
      },
    
    {
        question: "Bernoulli's phenomenon explains",
        answers: [
          { text: "Zenker's diverticulum", correct: false },
          { text: "Nasal polyp", correct: true },
          { text: "Thyroglossal duct", correct: false },
          { text: "Laryngomalacia", correct: false },
        ],
      },
    
    {
        question: "Snuffles are seen in",
        answers: [
          { text: "Early congenital syphilis", correct: true },
          { text: "Late congenital syphilis", correct: false },
          { text: "Primary syphilis", correct: false },
          { text: "Secondary syphilis", correct: false },
        ],
      },
    
    {
        question: "Cone of light is seen in which quadrant",
        answers: [
          { text: "Antero-superior", correct: false },
          { text: "Postero-superior", correct: false },
          { text: "Antero-inferior", correct: true },
          { text: "Postero-inferior", correct: false },
        ],
      },
    
    {
        question: "Lateral wall of the middle ear is formed by",
        answers: [
          { text: "Pars tensa", correct: false },
          { text: "Pars flaccida", correct: false },
          { text: "Scutum", correct: false },
          { text: "All of the above", correct: true },
        ],
      },
    
    {
        question: "The rule of 10 regarding glomus tumors does not include __",
        answers: [
          { text: "10% familial", correct: false },
          { text: "10% malignant transformation", correct: true },
          { text: "10% multicentric", correct: false },
          { text: "10% functional", correct: false },
        ],
      },
    
    {
        question: "Which of the following statements are true regarding Weber test",
        answers: [
          { text: "It is tested by placing tuning fork over forehead and asking patient to report in which ear he hears better", correct: false },
          { text: "It is heard equally on both sides in normal individual", correct: false },
          { text: "It is lateralised towards worst ear in conductive deafness and better ear in sensorineural deafness", correct: false },
          { text: " All of the above", correct: true },
        ],
      },
    
    {
        question: "Which of the following tests is used to diagnose otosclerosis",
        answers: [
          { text: "Gelle’s Test", correct: true},
          { text: "Stenger’s test", correct: false },
          { text: "Schwabach Test", correct: false },
          { text: "Rinne’s Test", correct: false },
        ],
      },
    
    {
        question: "Differential diagnosis of Meniere's disease includes all except",
        answers: [
          { text: "Vestibular neuronitis", correct: false },
          { text: "Labyrinthitis", correct: false },
          { text: "CSOM", correct: true },
          { text: "Perilymph fistula", correct: false },
        ],
      },
    
    {
        question: "Ohngren's classification is related to:",
        answers: [
          { text: "Maxillary sinusitis", correct: false },
          { text: "Maxillary osteoma", correct: false },
          { text: "Maxillary carcinoma", correct: true },
          { text: "Frontal sinusitis", correct: false },
        ],
      },
    
    {
        question: "Dingman's classification is used for fracture of_",
        answers: [
          { text: "Maxilla", correct: false },
          { text: "Mandible", correct: true },
          { text: "Zygoma", correct: false },
          { text: "Nasal bone", correct: false },
        ],
      },
    
    {
        question: "Vidian neurectomy is done in",
        answers: [
          { text: "Rhinitis sicca", correct: false },
          { text: "Atrophic rhinitis", correct: false },
          { text: "Vasomotor rhinitis", correct: true },
          { text: "All of the above", correct: false },
        ],
      },
    
    {
        question: ". Samter’s triad is related to",
        answers: [
          { text: "Ethmoidal polyp", correct: true },
          { text: "Angiofibroma", correct: false },
          { text: "Nasopharyngeal carcinoma", correct: false },
          { text: "Nasal glioma", correct: false },
        ],
      },
    
    {
        question: ". Nerve supply of external ear is by all except",
        answers: [
          { text: "Great auricular nerve", correct: false },
          { text: "Greater occipital nerve", correct: true },
          { text: "Lesser occipital nerve", correct: false },
          { text: "Auriculotemporal nerve", correct: false },
        ],
      },
    
    {
        question: "Most common site for primary cholesteatoma",
        answers: [
          { text: "Mastoid antrum", correct: false },
          { text: "Sinus tympani", correct: false },
          { text: "Facial Recess", correct: false },
          { text: "Prussack's space", correct: true },
        ],
      },
    
    {
        question: "The CT sign that helps differentiate Glomus jugulare and tympanicum",
        answers: [
          { text: "Ayre sign", correct: false },
          { text: "Lyre sign", correct: false },
          { text: "Phelp sign", correct: true },
          { text: "Philip sign", correct: false },
        ],
      },
    
    
    {
        question: "A vibrating tuning fork is placed on the mastoid while the examiner alternately closes and opens the ear canal by pressing on the tragus inwards. A normal person or one with sensorineural hearing loss hears louder when ear canal is occluded and softer when the canal is open. This test is known as",
        answers: [
          { text: "Absolute bone conduction test", correct: false },
          { text: "Schwabach test", correct: false },
          { text: "Bing test", correct: true },
          { text: "Gille's test", correct: false },
        ],
      },
    
    {
        question: "Carhart’s notch typically dips at __",
        answers: [
          { text: "1000 Hz in AC", correct: false },
          { text: "1000 Hz in BC", correct: false },
          { text: "2000 Hz in AC", correct: false },
          { text: "2000 Hz in BC", correct: true },
        ],
      },
    
    {
        question: "Drug used in chemical labyrinthectomy is",
        answers: [
          { text: "Cinnarizine", correct: false },
          { text: "Gentamicin", correct: true },
          { text: "Glucocorticoids", correct: false },
          { text: "Amoxicillin", correct: false },
        ],
      },
    
    {
        question: "Most common fracture causing CSF rhinorrhea is",
        answers: [
          { text: "Cribriform plate", correct: true },
          { text: "Tegmen tympani", correct: false },
          { text: "Frontal sinus", correct: false },
          { text: "Sphenoid sinus", correct: false },
        ],
      },
    
    {
        question: "Rhinitis medicamentosa is due to prolonged use of",
        answers: [
          { text: "Steroids", correct: false },
          { text: "Nasal decongestant", correct: true },
          { text: "Antihistaminics", correct: false },
          { text: "Leukotriene receptor antagonist", correct: false },
        ],
      },
    
    {
        question: "The clinical triad of Kartagener syndrome consists of all except",
        answers: [
          { text: "Bronchiectasis", correct: false },
          { text: "Sinusitis", correct: false },
          { text: "Azoospermia", correct: true },
          { text: "Situs inversus", correct: false },
        ],
      },
    
    {
        question: "Rhinosporidiosis is caused by",
        answers: [
          { text: "Klebsiella rhinoscleromatis", correct: false },
          { text: "Rhinosporidium seeberi", correct: true },
          { text: "HSV", correct: false },
          { text: "EBV", correct: false },
        ],
      },
    
    {
        question: "Major part of pinna is supplied by",
        answers: [
          { text: "Auriculotemporal nerve", correct: false },
          { text: "Greater auricular nerve", correct: true },
          { text: "Lesser occipital nerve", correct: false },
          { text: "Arnold's nerve", correct: false },
        ],
      },
    
    {
        question: "Narrowest part of middle ear is",
        answers: [
          { text: "Epitympanum", correct: false },
          { text: "Hypotympanum", correct: false },
          { text: "Mesotympanum", correct: true },
          { text: "None of the above", correct: false },
        ],
      },
    
    {
        question: "Most common CP angle tumor is. __",
        answers: [
          { text: "Acoustic neuroma", correct: true },
          { text: "Cholesteatoma", correct: false },
          { text: "Sarcoma", correct: false },
          { text: "None of ten above", correct: false },
        ],
      },
    
    {
        question: "In Bing test, a patient with conductive deafness will",
        answers: [
          { text: "Hear louder when canal is occluded", correct: false },
          { text: "Appreciate no change", correct: true },
          { text: "Hear less louder when canal is occluded", correct: false },
          { text: "None of the above", correct: false },
        ],
      },
    
    {
        question: "The finding on impedance audiometry in a long standing otosclerosis is __",
        answers: [
          { text: "As graph alone", correct: false },
          { text: "As graph with increased stapedial reflex", correct: false },
          { text: "As graph with loss of stapedial reflex", correct: true },
          { text: "As graph with increased stapedial reflex", correct: false },
        ],
      },
    
    {
        question: ". Microwick and microcatheter devices are used in",
        answers: [
          { text: "ASOM", correct: false },
          { text: "Meniere's disease", correct: false },
          { text: "Sudden sensorineural hearing loss", correct: false },
          { text: "Both b &c", correct: true },
        ],
      },
    
    {
        question: "The lymph node which is most commonly involved in maxillary sinus carcinoma is:",
        answers: [
          { text: "Submandibular", correct: true },
          { text: "Submental", correct: false },
          { text: "Clavicular", correct: false },
          { text: "Retropharyngeal", correct: false },
        ],
      },
    
    {
        question: "CSF rhinorrhea is seen in all except",
        answers: [
          { text: "Le-Fort I", correct: true },
          { text: "Le-Fort II", correct: false },
          { text: "Le-Fort III", correct: false },
          { text: "Naso-orbito-ethmoid fracture", correct: false },
        ],
      },
    
    {
        question: "Surgery where one nostril is partially or completely occluded is done for which condition?",
        answers: [
          { text: "vasomotor rhinitis", correct: false },
          { text: "Atrophic rhinitis", correct: true },
          { text: "Invasive aspergillosis", correct: false },
          { text: "Allergic rhinitis", correct: false },
        ],
      },
    
    {
        question: "Young's syndrome is",
        answers: [
          { text: "Neutrophilia with red popular rash", correct: false },
          { text: "Infertility with bronchiectasis", correct: true },
          { text: "Mitral stenosis with ASD", correct: false },
          { text: "Asthma, Aspirin hypersensitivity, nasal polyp", correct: false },
        ],
      },
    
    {
        question: "",
        answers: [
          { text: "", correct: false },
          { text: "", correct: false },
          { text: "", correct: false },
          { text: "", correct: true },
        ],
      },
    
    
 
]







const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    backButton.innerHTML = "Back";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    
    if(answer.correct){
        button.dataset.correct = answer.correct;  
    }
    button.addEventListener("click", selectAnswer)

})
}


function resetState(){
nextButton.style.display = "none";
backButton.style.display = "none";

while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);

}
}

function selectAnswer(e){

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
    selectedBtn.classList.add("inCorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
        button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "inline";
    backButton.style.display = "inline";

}


function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Solve Again";
    nextButton.style.display = "inline"
    backButton.style.display = "inline"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else { showScore()}
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
    handleNextButton();
    } else{
        startQuiz();
    }
});

function handlebackButton(){
  currentQuestionIndex--;
  if(currentQuestionIndex < questions.length){
      showQuestion();
  } else { showScore()}
}

backButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length) {
  handlebackButton();
  } else{
      startQuiz();
  }
});
startQuiz();