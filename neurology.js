/* REGION 1: NEUROLOGY, "The Lantern Roads"
   Everything you want to edit lives in this one file. Read README.md first.
   Text goes between backticks ` ` so apostrophes and quotation marks are safe.
   Order inside the file: characters, codex lore, cases (the questions), chapters (the story path). */
Animed.addRegion({
 id:`neurology`, order:1, name:`The Lantern Roads`, system:`Neurology`,
 blurb:`Every thought, memory and movement in Lumara travels along glowing roads of light. The lanterns are going dark, and only someone who can read the body can find out why.`,
 palette:{a:`#080B2B`, b:`#1E1A66`, c:`#47237D`, glow:`#FFD36B`},

 /* ---------- people you meet ---------- */
 characters:{
  orrin:{name:`Orrin`,color:`#6FE3FF`}, maren:{name:`Maren`,color:`#FF9AB8`},
  tali:{name:`Tali`,color:`#FFD36B`}, gareth:{name:`Gareth`,color:`#A8E08A`}, dorin:{name:`Dorin`,color:`#C9A0FF`},
  lira:{name:`Lira`,color:`#FF9F6B`}, daren:{name:`Daren`,color:`#8AB4FF`}, kesh:{name:`Kesh`,color:`#FFC2E2`},
  josse:{name:`Josse`,color:`#9AE6B4`}, mireille:{name:`Mireille`,color:`#FF6FA3`},
  bram:{name:`Bram`,color:`#7FD1FF`}, nessa:{name:`Nessa`,color:`#F5B7FF`}, hollis:{name:`Hollis`,color:`#FFB07A`}, ossian:{name:`Warden Ossian`,color:`#FFD36B`},
  wendel:{name:`Wendel`,color:`#9CF0D0`}, dara:{name:`Dara`,color:`#FFD1A0`},
  pip:{name:`Pip`,color:`#FFE27A`}, harl:{name:`Harl`,color:`#B7C4FF`},
  elowen:{name:`Elowen`,color:`#FF9F9F`}, rua:{name:`Rua`,color:`#8FF0FF`},
  corvin:{name:`Corvin`,color:`#C7B08A`}, sabel:{name:`Sabel`,color:`#A0E8A0`}, vik:{name:`Vik`,color:`#FFE0A0`},
  raya:{name:`Raya`,color:`#D5A8FF`}, thorn:{name:`Thorn`,color:`#FF8C6B`}, kepler:{name:`Kepler`,color:`#9AB8FF`}, mara:{name:`Mara`,color:`#FFB0C8`}, dev:{name:`Dev`,color:`#9FE8D8`},
  ilsa:{name:`Ilsa`,color:`#FFD36B`}, teo:{name:`Teo`,color:`#FF9F7A`}, nell:{name:`Nell`,color:`#B8F0A0`},
  hale:{name:`Captain Hale`,color:`#C9D0F0`}
 },

 /* ---------- codex entries (unlocked by scenes) ---------- */
 lore:{
  lanterns:{title:`The Lantern Roads`,text:`Luminous pathways that carry thought, memory and movement across Lumara. When a lantern goes dark, everything that travels through it stalls.`},
  pulse:{title:`Pulse`,text:`A small lamplighter spirit who found you on the road. Cheerful, curious, and perhaps hiding more than it says.`},
  oldart:{title:`The Old Art`,text:`Reading the body for clues: find where the trouble is, confirm what it is, then decide what to do. Nobody in Lumara has a word for it.`},
  hush:{title:`The Hush`,text:`A creeping silence that darkens lanterns one by one. Nobody has seen its source, but it speaks.`},
  moonbell:{title:`Moonbells`,text:`Pale white flowers found at the foot of every dark lantern. They grow nowhere near the roads. Someone is leaving them.`},
  hourbell:{title:`The Hour Bell`,text:`Everyone who falls hears a bell just beforehand. No bell has ever existed in Lumara.`},
  dimvigil:{title:`The Dim Vigil`,text:`The night the oldest lantern, at the Old Gate, went out for good. Witnesses say a woman begged the keepers all night to leave it burning. The Gate has been sealed since.`},
  lightsong:{title:`Light for the One Who Stayed`,text:`A line from a half-remembered song. Mireille repeated it without knowing why.`},
  engraving:{title:`The Engraving`,text:`Scratched into the great lantern of the Silent Hall: a small star and the words "I will light them all." The hand is not Lumaran.`},
  nine:{title:`The Nine`,text:`In Wendel's tapestry, nine bright stars hang over a kneeling figure beside a dark lantern. The stars have turned their backs. Lumarans say the Nine decide who is lit and who is dimmed.`},
  letters:{title:`Letters to Aurel`,text:`A bundle of letters Pip has carried for years, all addressed to "Aurel, at the Old Gate." None has ever been answered or returned.`},
  darkmap:{title:`The Dark Map`,text:`When Elowen pinned every dark lantern on a map, they did not scatter. They form a path, and the path leads somewhere.`},
  lamplighter:{title:`The Lamplighter`,text:`A figure glimpsed at the edge of the lamplight, lighting lanterns by hand and leaving moonbells. Nobody has seen her face.`},
  oldgate:{title:`The Old Gate`,text:`Sealed by nine seals. The first lantern died here, and the dark roads of the Lantern Roads all lead toward it.`}
 },
 loreOrder:[`lanterns`,`pulse`,`oldart`,`hush`,`moonbell`,`hourbell`,`dimvigil`,`lightsong`,`engraving`,`nine`,`letters`,`darkmap`,`lamplighter`,`oldgate`],

 /* ---------- the questions ---------- */
 cases:{

  /* ===== Chapter 1: vertigo ===== */
  'n-101':{type:`mcq`,topic:`Benign paroxysmal positional vertigo`,difficulty:1,who:`orrin`,patient:`Orrin, ferryman, 54`,
   case:`For two weeks Orrin has had brief spells of spinning when he rolls onto his left side in bed or tips his head back to hang a lantern. Each spell lasts about 20 to 30 seconds with nausea, then settles. He has no hearing loss, tinnitus, headache, double vision or weakness. His neurologic exam is normal. A Dix-Hallpike test to the left brings on upbeating, rotatory nystagmus after a short delay that fades within a minute.`,
   ask:`What is the best next step?`,
   options:[`Canalith repositioning (Epley) maneuver`,`IV methylprednisolone for vestibular neuritis`,`Urgent MRI brain with diffusion imaging`,`Start long-term meclizine and review in a month`],answer:0,
   explain:`Brief, positional spells and a positive Dix-Hallpike (torsional upbeating nystagmus with latency, fatigability and duration under a minute) mean posterior canal BPPV. The treatment is a repositioning maneuver such as Epley. Vestibular suppressants are not a good long-term plan and can mask the response to testing. Imaging is not needed when the picture is typical and there are no red flags.`,
   pearl:`Brief, positional, fatigable vertigo with torsional upbeating nystagmus is BPPV. Do not give a vestibular suppressant before testing, because it can mask the nystagmus.`},

  'n-102':{type:`mcq`,topic:`Acute vestibular syndrome and HINTS`,difficulty:2,who:`maren`,patient:`Maren, innkeeper, 61`,
   case:`Maren has hypertension and diabetes. Three hours ago she developed severe, continuous spinning vertigo with vomiting. She cannot sit unsupported or walk without falling. She has spontaneous nystagmus that changes direction with the direction of gaze. The head impulse test is normal on both sides, and the cover test shows a vertical skew deviation.`,
   ask:`What do these findings suggest, and what should happen next?`,
   options:[`Vestibular neuritis: give steroids and discharge with follow-up`,`Central cause such as a posterior circulation stroke: urgent MRI with diffusion imaging and vascular imaging, on the stroke pathway`,`BPPV: perform an Epley maneuver`,`Meniere disease: low-salt diet and a diuretic`],answer:1,
   explain:`In continuous vertigo with spontaneous nystagmus, the HINTS "INFARCT" pattern points to a central cause: Impulse Normal, Fast-phase Alternating (direction-changing nystagmus), Refixation on cover test (skew). Inability to sit unsupported and her vascular risk factors raise the concern further. Treat as a brainstem or cerebellar stroke. Early diffusion MRI can be falsely negative in the first 24 to 48 hours in posterior fossa strokes, so a negative scan does not close the question when HINTS is central.`,
   pearl:`HINTS is only for continuous vertigo with spontaneous nystagmus. Never use it for brief positional vertigo.`},

  /* ===== Chapter 2: syncope ===== */
  'n-201':{type:`mcq`,topic:`Reflex (vasovagal) syncope`,difficulty:1,who:`tali`,patient:`Tali, courier, 23`,
   case:`Tali collapsed after standing for about 40 minutes in a hot, crowded square. She felt warm and nauseated, sweated, and her vision narrowed to a tunnel before she went down. She was out for under a minute, woke up oriented, and had no tongue bite or incontinence. Her ECG, cardiac exam and orthostatic vital signs are normal.`,
   ask:`What is the most likely diagnosis?`,
   options:[`Reflex (vasovagal) syncope`,`Cardiac arrhythmic syncope`,`Generalized tonic-clonic seizure`,`Orthostatic hypotension`],answer:0,
   explain:`Prolonged standing, heat, a warning prodrome (warmth, nausea, sweating, tunnel vision), brief unconsciousness and rapid full recovery point to reflex syncope with a normal ECG. A seizure usually brings prolonged post-event confusion, lateral tongue biting or incontinence. Management is reassurance, fluids, avoiding triggers and counter-pressure maneuvers.`,
   pearl:`Fast, complete recovery after a prodrome favors syncope. Prolonged confusion afterward points toward seizure or a metabolic cause.`},

  'n-202':{type:`mcq`,topic:`Cardiac syncope: severe aortic stenosis`,difficulty:2,who:`gareth`,patient:`Gareth, stair-warden, 68`,
   case:`Gareth fainted without warning while climbing the Beacon Stair at a brisk pace and woke within a minute. For several months he has had chest tightness and breathlessness on the climb. He has a harsh ejection systolic murmur radiating to the carotids, a slow-rising pulse and a soft second heart sound. His ECG shows left ventricular hypertrophy with strain.`,
   ask:`What is the best next step?`,
   options:[`Reassure and discharge: this is vasovagal`,`Admit for telemetry and urgent echocardiography`,`Start fludrocortisone`,`Arrange an outpatient tilt-table test`],answer:1,
   explain:`Syncope during exertion, no warning, a murmur of aortic stenosis and LVH are high-risk features for cardiac syncope. He needs inpatient evaluation: monitoring, echocardiography and early cardiology input. Aortic stenosis with symptoms usually needs valve replacement, and strenuous exertion should be avoided in the meantime.`,
   pearl:`Syncope during exertion, or without warning, in someone with structural heart disease is cardiac until proven otherwise.`},

  'n-203':{type:`mcq`,topic:`Orthostatic hypotension`,difficulty:1,who:`dorin`,patient:`Dorin, miller, 72`,
   case:`Dorin gets dizzy and nearly falls when he rises quickly from his chair. He takes tamsulosin and furosemide and drinks little water. Supine, his BP is 132/80 mmHg and heart rate 70. After 3 minutes standing, BP is 104/66 mmHg and heart rate 88.`,
   ask:`What is the diagnosis and the best first step?`,
   options:[`Orthostatic hypotension: review and adjust the likely culprit drugs, correct volume, and teach counter-measures`,`Postural tachycardia syndrome: start a beta-blocker`,`Reflex syncope: arrange a tilt-table test`,`Cardiac syncope: implant a pacemaker`],answer:0,
   explain:`A fall in systolic BP of at least 20 mmHg, or diastolic of at least 10 mmHg, within 3 minutes of standing is orthostatic hypotension. His heart rate rose appropriately, which fits volume depletion and drugs rather than autonomic failure. Review the alpha-blocker and diuretic, increase fluids, and teach slow position changes. POTS is a heart-rate rise of at least 30 per minute without hypotension.`,
   pearl:`A large heart-rate rise with the BP drop suggests a drug or volume cause. A fixed heart rate points toward autonomic failure.`},

  /* ===== Chapter 3: seizures ===== */
  'n-301':{type:`mcq`,topic:`Focal impaired awareness seizures (temporal lobe)`,difficulty:2,who:`lira`,patient:`Lira, lantern keeper, 31`,
   case:`For eight months Lira has had stereotyped episodes. A rising feeling in the stomach and a smell of burnt toast are followed by déjà vu, then 1 to 2 minutes of staring, lip-smacking and picking at her sleeve while she does not respond. Confusion lasts about 15 minutes afterward. She had a prolonged febrile seizure as a child.`,
   ask:`How would you classify these seizures, and which investigation best looks for a structural cause?`,
   options:[`Focal impaired awareness seizures; MRI brain with an epilepsy protocol (looking for hippocampal sclerosis)`,`Absence seizures; EEG with hyperventilation only`,`Generalized tonic-clonic seizures; CT head`,`Psychogenic non-epileptic events; video-EEG only`],answer:0,
   explain:`An aura (epigastric rising sensation, olfactory hallucination, déjà vu), followed by impaired awareness and automatisms, is a focal seizure of temporal lobe origin. A prolonged febrile seizure in childhood is a classic history in mesial temporal sclerosis. MRI with thin coronal FLAIR and T2 sections looks for hippocampal sclerosis, and EEG helps with localization.`,
   pearl:`Aura, then staring with automatisms, then slow recovery is temporal lobe epilepsy until proven otherwise. Ask about childhood febrile seizures.`},

  'n-302':{type:`mcq`,topic:`Status epilepticus: first-line treatment`,difficulty:1,who:`daren`,patient:`Daren, night watchman, 40`,
   case:`Daren has been in a continuous generalized convulsion for 7 minutes and has not regained consciousness. He weighs 80 kg, and an IV line is in place. A fingerstick glucose is 96 mg/dL.`,
   ask:`Which is the best initial drug?`,
   options:[`IV lorazepam (about 0.1 mg/kg, up to 4 mg per dose, repeat once if needed)`,`IV phenytoin loading dose first`,`Oral levetiracetam`,`IV propofol infusion`],answer:0,
   explain:`A seizure lasting 5 minutes or more is treated as status epilepticus. A benzodiazepine is first-line: IV lorazepam, IM midazolam if there is no IV, or IV diazepam. If seizures continue, a second-line agent follows (fosphenytoin, valproate or levetiracetam). Anesthetic infusions are for refractory status. Check glucose, and treat reversible causes at the same time.`,
   pearl:`Time matters. Give the benzodiazepine at 5 minutes, and do not wait for a loading dose to arrive.`},

  'n-303':{type:`mcq`,topic:`Juvenile myoclonic epilepsy and drug choice`,difficulty:2,who:`kesh`,patient:`Kesh, scribe, 19`,
   case:`Kesh spills her ink most mornings because of sudden jerks of both arms soon after waking. Last month, after a night with no sleep, she had a generalized convulsion. Her EEG shows generalized polyspike-and-wave discharges. She hopes to have children one day.`,
   ask:`Which treatment approach is most appropriate?`,
   options:[`Carbamazepine`,`Levetiracetam or lamotrigine, avoiding valproate where possible`,`Phenytoin`,`Valproate at high dose without further discussion`],answer:1,
   explain:`Morning myoclonus, generalized seizures after sleep loss and polyspike-wave on EEG fit juvenile myoclonic epilepsy. Carbamazepine, oxcarbazepine and phenytoin can worsen myoclonic and absence seizures. Valproate is highly effective but teratogenic (neural tube defects, lower IQ), so it is avoided in women who may become pregnant. Levetiracetam or lamotrigine are preferred, with counseling on sleep, alcohol and folic acid.`,
   pearl:`Early-morning jerks and seizures after sleep loss mean JME. Sodium-channel blockers can make generalized epilepsies worse.`},

  /* ===== Chapter 4: autoimmune encephalitis ===== */
  'n-401':{type:`mcq`,topic:`Anti-NMDA receptor encephalitis`,difficulty:3,who:`mireille`,patient:`Mireille, singer, 22`,
   case:`Over two weeks Mireille developed insomnia, anxiety and paranoid beliefs. Then she had a generalized seizure. Since then she has had orofacial grimacing and chewing movements, writhing arms, reduced responsiveness, fever and swings in heart rate and blood pressure. MRI brain is normal. EEG shows diffuse slowing with an "extreme delta brush" pattern. CSF shows a lymphocytic pleocytosis and mildly raised protein.`,
   ask:`What is the most likely diagnosis, and which test confirms it?`,
   options:[`Anti-NMDA receptor encephalitis; NMDAR antibodies in CSF (more sensitive than serum)`,`Primary psychotic disorder; start antipsychotics and observe`,`Neuroleptic malignant syndrome; serum CK`,`Herpes simplex encephalitis; repeat MRI only`],answer:0,
   explain:`The sequence of psychiatric change, seizure, orofacial dyskinesia, autonomic instability and falling consciousness in a young woman is classic. MRI is often normal. CSF antibody testing is more sensitive than serum for NMDAR. Send HSV PCR and cover with aciclovir until it returns negative, since HSV can mimic or precipitate autoimmune encephalitis. Avoid antipsychotics where possible, because of a risk of severe reactions.`,
   pearl:`Young woman, new psychosis, then seizures, then dyskinesias: think NMDAR encephalitis, and send CSF antibodies rather than relying on serum.`},

  'n-402':{type:`mcq`,topic:`Anti-NMDAR encephalitis: tumor search and first-line therapy`,difficulty:2,who:`mireille`,patient:`Mireille, singer, 22`,
   case:`Mireille's CSF is positive for NMDAR antibodies. HSV PCR is negative.`,
   ask:`What are the key next steps?`,
   options:[`Pelvic MRI or ultrasound for an ovarian teratoma, plus first-line immunotherapy (IV steroids with IVIG or plasma exchange)`,`Chest CT for thymoma, plus antiepileptic drugs only`,`Start rituximab alone and skip tumor screening`,`Discharge on antipsychotics with outpatient review`],answer:0,
   explain:`Screen for a tumor, most often an ovarian teratoma in young women, and remove it if found. First-line immunotherapy is IV methylprednisolone with IVIG or plasma exchange. If there is no improvement after about two weeks, second-line options such as rituximab or cyclophosphamide are considered. Early treatment improves outcomes, though recovery is slow.`,
   pearl:`Always look for the tumor. In a young woman with NMDAR antibodies, that means pelvic imaging for an ovarian teratoma.`},

  /* ===== Chapter 5: stroke ===== */
  'n-501':{type:`mcq`,topic:`Lateral medullary syndrome (Wallenberg)`,difficulty:2,who:`bram`,patient:`Bram, bridge-keeper, 57`,
   case:`Bram woke with sudden vertigo, a hoarse voice and difficulty swallowing. The right side of his face is numb to pain and temperature, and the left arm and leg have lost pain and temperature sensation. His right pupil is small, with a drooping right eyelid. He lists to the right when he tries to sit. Limb strength is normal.`,
   ask:`Which structure and vessel are most likely involved?`,
   options:[`Right lateral medulla; vertebral or posterior inferior cerebellar artery`,`Left lateral pons; anterior inferior cerebellar artery`,`Right medial medulla; anterior spinal artery`,`Right midbrain; posterior cerebral artery`],answer:0,
   explain:`Ipsilateral facial pain and temperature loss (spinal trigeminal nucleus), contralateral body loss (spinothalamic tract), Horner syndrome, hoarseness and dysphagia (nucleus ambiguus) and ataxia with vertigo make Wallenberg syndrome. The corticospinal tract runs medially and is spared, so strength is normal. Lateral pontine (AICA) syndrome adds ipsilateral hearing loss and facial weakness.`,
   pearl:`Crossed findings (face one side, body the other) with Horner syndrome and normal strength: lateral medulla.`},

  'n-502':{type:`mcq`,topic:`Anterior cerebral artery stroke`,difficulty:2,who:`nessa`,patient:`Nessa, weaver, 66`,
   case:`Nessa has sudden weakness of her right leg, more than her arm. Her face is spared. She has lost interest in everything, answers in a few words, and has had an episode of urinary incontinence. Her speech is sparse but not aphasic.`,
   ask:`Which vascular territory is most likely affected?`,
   options:[`Left anterior cerebral artery`,`Left middle cerebral artery`,`Left posterior cerebral artery`,`Right lenticulostriate arteries`],answer:0,
   explain:`The leg area of the motor cortex lies on the medial surface of the hemisphere, which the anterior cerebral artery supplies. Leg weakness greater than arm weakness, abulia and incontinence (medial frontal involvement) fit the ACA territory. MCA strokes affect face and arm more than leg.`,
   pearl:`Leg worse than arm points to ACA. Arm and face worse than leg points to MCA.`},

  'n-503':{type:`mcq`,topic:`Intracerebral hemorrhage: first priorities`,difficulty:2,who:`hollis`,patient:`Hollis, woodcutter, 63`,
   case:`Hollis has a sudden severe headache, vomiting and right-sided weakness. He takes warfarin. BP is 210/120 mmHg, INR 3.8, GCS 13. Non-contrast CT shows a hyperdense left putaminal hematoma without ventricular extension.`,
   ask:`Which is the most appropriate immediate management?`,
   options:[`Reverse warfarin urgently (prothrombin complex concentrate with vitamin K) and lower systolic BP to about 140 mmHg with an IV infusion such as nicardipine or labetalol`,`Give IV alteplase`,`Give aspirin and observe`,`Avoid lowering BP in all circumstances`],answer:0,
   explain:`Intracerebral hemorrhage is a medical emergency. Reverse anticoagulation within minutes to hours, and control BP. For presenting SBP of 150 to 220 mmHg, lowering to about 140 mmHg within an hour is considered safe, generally avoiding values below 130. Use titratable IV agents (nicardipine, labetalol) and avoid precipitous drops. Thrombolytics and antiplatelets are contraindicated.`,
   pearl:`In hemorrhage on anticoagulants, reversal and BP control are the first two moves.`},

  'n-boss1':{type:`boss`,topic:`The Silent Hall: large vessel occlusion stroke`,difficulty:3,who:`ossian`,patient:`Warden Ossian, 72`,
   case:`Warden Ossian has atrial fibrillation and stopped taking his anticoagulant. He was found 90 minutes ago with sudden left-sided weakness, and he ignores the left side of the room. BP is 168/96 mmHg, glucose 124 mg/dL, NIHSS 14.`,
   stages:[
    {ask:`Which vascular territory is most likely affected?`,
     options:[`Right middle cerebral artery`,`Left middle cerebral artery`,`Basilar artery`,`Left anterior cerebral artery`],answer:0,
     explain:`Left-sided weakness and left neglect point to the right hemisphere. Neglect is a classic non-dominant parietal sign. The MCA is the usual vessel, and atrial fibrillation is a typical embolic source.`},
    {ask:`A non-contrast CT shows no hemorrhage. Onset was 90 minutes ago and there are no contraindications. What now?`,
     options:[`Give IV thrombolysis now and obtain CT angiography without delaying it`,`Wait for an MRI before deciding`,`Start a heparin infusion`,`Give aspirin and observe for 24 hours`],answer:0,
     explain:`He is within the 4.5-hour window and BP is below 185/110 mmHg. Do not delay thrombolysis for vascular imaging. CT angiography runs at the same time to look for a large vessel occlusion.`},
    {ask:`CT angiography shows a right M1 occlusion. What additional treatment should you arrange?`,
     options:[`Mechanical thrombectomy`,`Continue thrombolysis alone`,`Aspirin immediately after thrombolysis`,`Lower BP below 120/80 mmHg right away`],answer:0,
     explain:`A proximal large vessel occlusion benefits from endovascular thrombectomy in addition to thrombolysis. Antiplatelets wait until about 24 hours after thrombolysis, and aggressive BP lowering can reduce perfusion of the penumbra.`}],
   pearl:`Time is brain, but so is imaging. In a suspected large vessel occlusion, get CT angiography and call the thrombectomy team early.`},

  /* ===== Chapter 6: Guillain-Barre and CIDP ===== */
  'n-601':{type:`mcq`,topic:`Guillain-Barre syndrome`,difficulty:2,who:`wendel`,patient:`Wendel, weaver, 29`,
   case:`Wendel had a diarrheal illness two weeks ago. Four days ago he noticed tingling in his toes. His legs are now weak on both sides, and the weakness is climbing. Reflexes are absent in the legs, with mild distal sensory loss. He has no sensory level and normal sphincter control.`,
   ask:`What is the likely diagnosis, and what is the most important thing to monitor?`,
   options:[`Guillain-Barre syndrome; respiratory function (forced vital capacity) and autonomic stability`,`Transverse myelitis; serial MRI only`,`Myasthenia gravis; ice-pack test`,`Hypokalemic periodic paralysis; potassium only`],answer:0,
   explain:`Ascending symmetric weakness with areflexia after an infection (often Campylobacter) is classic for GBS. CSF often shows raised protein with a normal cell count (albuminocytologic dissociation), though it can be normal in the first week. Nerve conduction studies show demyelination. The main danger is respiratory failure, so monitor forced vital capacity regularly, along with autonomic instability.`,
   pearl:`Reflexes are lost early in GBS. Ascending weakness with brisk reflexes should make you think again.`},

  'n-602':{type:`mcq`,topic:`Guillain-Barre syndrome: treatment`,difficulty:2,who:`wendel`,patient:`Wendel, weaver, 29`,
   case:`Two days later Wendel's weakness has reached his arms and face. He weighs 70 kg and his forced vital capacity has fallen to 1.3 liters (about 19 mL/kg). He is anxious and coughing weakly.`,
   ask:`What is the best management?`,
   options:[`ICU-level monitoring with consideration of elective intubation, plus IVIG or plasma exchange`,`Oral prednisolone and discharge`,`Observe on the ward with daily neurologic review`,`Give pyridostigmine`],answer:0,
   explain:`A forced vital capacity below about 20 mL/kg, or falling quickly, signals impending respiratory failure, so he needs ICU-level care. Treatment is IVIG (0.4 g/kg/day for 5 days) or plasma exchange. Corticosteroids do not help in GBS. Also watch swallowing and autonomic function.`,
   pearl:`In GBS, IVIG or plasma exchange treat the disease, but breathing support saves the patient.`},

  'n-603':{type:`mcq`,topic:`Chronic inflammatory demyelinating polyneuropathy (CIDP)`,difficulty:2,who:`dara`,patient:`Dara, dyer, 44`,
   case:`Dara's legs and arms have been getting weaker over four months, with tingling and balance trouble. Reflexes are absent. CSF protein is raised with a normal cell count, and nerve conduction studies show demyelination with conduction block.`,
   ask:`What is the likely diagnosis, and how is it treated?`,
   options:[`CIDP; corticosteroids, IVIG or plasma exchange`,`GBS; IVIG only and no further follow-up`,`Amyotrophic lateral sclerosis; riluzole`,`Diabetic neuropathy; tight glycemic control`],answer:0,
   explain:`A demyelinating polyneuropathy progressing for more than 8 weeks is CIDP rather than GBS. Unlike GBS, it responds to corticosteroids as well as IVIG and plasma exchange, and many patients need maintenance therapy.`,
   pearl:`Progression past 8 weeks means CIDP, and CIDP responds to steroids when GBS does not.`},

  /* ===== Chapter 7: neuromuscular junction ===== */
  'n-701':{type:`mcq`,topic:`Myasthenia gravis`,difficulty:2,who:`pip`,patient:`Pip, messenger, 27`,
   case:`Pip's eyelids droop and he sees double by the evening, but both improve after rest. His voice turns nasal as he counts, and his neck flexors are weak. Pupils are normal. An ice pack held on a drooping eyelid for two minutes makes the ptosis better.`,
   ask:`What is the most appropriate next step?`,
   options:[`Check acetylcholine receptor antibodies, image the chest for thymoma, and start pyridostigmine`,`Check voltage-gated calcium channel antibodies and image for lung cancer`,`Perform a muscle biopsy`,`Start high-dose corticosteroids without testing`],answer:0,
   explain:`Fatigable ptosis and diplopia, bulbar weakness and normal pupils are classic for myasthenia gravis. Most patients have anti-AChR antibodies, and a chest CT or MRI looks for thymoma or thymic hyperplasia. Pyridostigmine gives symptomatic relief. Immunotherapy and thymectomy follow when indicated. Antibodies against calcium channels belong to Lambert-Eaton syndrome.`,
   pearl:`Weakness that worsens with use and improves with rest is myasthenia until proven otherwise. An ice pack can improve ptosis.`},

  'n-702':{type:`mcq`,topic:`Myasthenic crisis`,difficulty:3,who:`pip`,patient:`Pip, messenger, 27`,
   case:`Pip develops pneumonia and is treated with an antibiotic. Over a day he becomes short of breath, cannot lift his head, and his speech is hard to understand. His forced vital capacity is falling.`,
   ask:`What is the best management, and what should be avoided?`,
   options:[`ICU with airway and ventilatory support, plus IVIG or plasma exchange; avoid drugs that worsen neuromuscular transmission (for example aminoglycosides, fluoroquinolones, macrolides, magnesium)`,`Increase pyridostigmine alone and observe on the ward`,`Give edrophonium to confirm the diagnosis again`,`High-dose steroids alone, with no airway plan`],answer:0,
   explain:`Worsening bulbar and respiratory weakness is myasthenic crisis, often triggered by infection or a drug. Manage in ICU with airway protection and early ventilatory support, and treat with IVIG or plasma exchange. Several antibiotics (aminoglycosides, fluoroquinolones, macrolides) and magnesium can worsen myasthenia, as can beta-blockers. High-dose steroids can transiently worsen weakness, so they are started with care.`,
   pearl:`In myasthenia, check every new drug before giving it. Infections and the wrong antibiotic are common triggers.`},

  'n-703':{type:`mcq`,topic:`Lambert-Eaton myasthenic syndrome`,difficulty:2,who:`harl`,patient:`Harl, retired lamp-maker, 63`,
   case:`Harl is a long-term smoker with weakness of his thighs and a dry mouth. His knee jerks are absent, but he can briefly strengthen his grip, and the reflexes return after a short exercise. His eyelids droop only a little.`,
   ask:`Which diagnosis, antibody and treatment are most appropriate?`,
   options:[`Lambert-Eaton syndrome; voltage-gated calcium channel antibodies; search for small cell lung cancer and treat with amifampridine (3,4-DAP)`,`Myasthenia gravis; AChR antibodies; thymectomy at once`,`Polymyositis; muscle biopsy`,`Guillain-Barre syndrome; plasma exchange`],answer:0,
   explain:`Proximal weakness that improves with brief exercise, hypo- or areflexia that returns after exercise and autonomic symptoms (dry mouth) are typical of Lambert-Eaton syndrome. It is often paraneoplastic, most often with small cell lung cancer, so look for the tumor. Amifampridine, a potassium channel blocker, is first-line symptomatic treatment, with immunotherapy added if needed.`,
   pearl:`Myasthenia gets worse with use. Lambert-Eaton gets briefly better with use, and it points toward the lung.`},

  /* ===== Chapter 8: demyelination ===== */
  'n-801':{type:`mcq`,topic:`Multiple sclerosis: relapse treatment`,difficulty:2,who:`elowen`,patient:`Elowen, glassblower, 28`,
   case:`Two years ago Elowen had painful loss of vision and color in the left eye that recovered. Now she has numbness below the waist and leg weakness that developed over a week. Heat in the foundry makes old symptoms return. MRI shows ovoid periventricular lesions perpendicular to the ventricles, a juxtacortical lesion and a short cord lesion. CSF has oligoclonal bands.`,
   ask:`What is the diagnosis, and how should the acute relapse be treated?`,
   options:[`Multiple sclerosis; IV methylprednisolone 1 g daily for 3 to 5 days`,`Neuromyelitis optica; interferon beta`,`Acute disseminated encephalomyelitis; antibiotics`,`Stroke; IV alteplase`],answer:0,
   explain:`Attacks separated in time and in different parts of the CNS, typical MRI lesions and oligoclonal bands support multiple sclerosis. An acute relapse that affects function is treated with high-dose IV methylprednisolone. After recovery, start disease-modifying therapy to reduce future relapses. Worsening of symptoms with heat is the Uhthoff phenomenon.`,
   pearl:`Heat makes old MS symptoms flare (Uhthoff), without a new relapse. Treat the relapse, not the flare.`},

  'n-802':{type:`mcq`,topic:`Neuromyelitis optica spectrum disorder`,difficulty:3,who:`rua`,patient:`Rua, glass-cutter, 35`,
   case:`For two weeks Rua had intractable hiccups and vomiting. Then both eyes lost vision with pain and poor recovery, and now he cannot move his legs. MRI shows a spinal cord lesion spanning about six vertebral segments.`,
   ask:`Which antibody is most likely, and what should be avoided?`,
   options:[`Aquaporin-4 antibody; avoid interferon beta and similar MS drugs that can worsen the disease`,`MOG antibody only; give interferon beta`,`Anti-NMDA receptor antibody; give antipsychotics`,`No antibody is relevant; treat as MS with interferon beta`],answer:0,
   explain:`Optic neuritis, a longitudinally extensive transverse myelitis (three or more vertebral segments) and area postrema syndrome (intractable hiccups, nausea and vomiting) point to NMOSD, usually with aquaporin-4 antibodies. Treat attacks with IV steroids and plasma exchange if the response is poor. Some MS drugs, including interferon beta, can worsen NMOSD, so the distinction matters.`,
   pearl:`Hiccups and vomiting, bad optic neuritis and a very long spinal cord lesion: think NMOSD before MS.`},

  /* ===== Chapter 9: spinal cord ===== */
  'n-901':{type:`mcq`,topic:`Brown-Sequard syndrome`,difficulty:2,who:`corvin`,patient:`Corvin, mason, 38`,
   case:`Corvin was stabbed in the right side of the mid-back. His right leg is weak with brisk reflexes and he cannot feel vibration or joint position on that side. His left leg moves normally but he cannot feel pain or temperature below about the level of the navel.`,
   ask:`What is the lesion?`,
   options:[`Right hemisection of the spinal cord (Brown-Sequard syndrome)`,`Central cord syndrome`,`Anterior spinal artery syndrome`,`Left hemisection of the spinal cord`],answer:0,
   explain:`A hemisection gives ipsilateral weakness below the lesion (corticospinal tract) with loss of vibration and position sense (dorsal column), and contralateral loss of pain and temperature beginning a few segments below, because spinothalamic fibers cross soon after entering the cord.`,
   pearl:`Crossed pain and temperature, same-side strength and position sense: the lesion is on the side of the weakness.`},

  'n-902':{type:`mcq`,topic:`Cauda equina syndrome`,difficulty:2,who:`sabel`,patient:`Sabel, drover, 45`,
   case:`Sabel has had two days of severe low back pain radiating down both legs. He now cannot pass urine, has numbness around the buttocks and genitals, and his ankles are weak. Ankle jerks are absent.`,
   ask:`What is the best next step?`,
   options:[`Emergency MRI of the lumbosacral spine and surgical decompression`,`Oral NSAIDs and physiotherapy`,`Nerve conduction studies in two weeks`,`Lumbar puncture`],answer:0,
   explain:`Bilateral radicular pain, saddle sensory loss, urinary retention and lower-limb weakness with absent ankle jerks are cauda equina syndrome, a surgical emergency. Urgent MRI confirms compression, and early decompression gives the best chance of preserving bladder, bowel and sexual function.`,
   pearl:`Saddle numbness plus new urinary retention is cauda equina until proven otherwise. Scan the same day.`},

  'n-903':{type:`mcq`,topic:`Subacute combined degeneration (vitamin B12 deficiency)`,difficulty:2,who:`vik`,patient:`Vik, monk, 40`,
   case:`Vik has followed a strict vegan diet for years. Over the past year he has had tingling in the feet and unsteady walking, worse in the dark. Ankle jerks are absent, but plantar responses are extensor and vibration sense is lost. Blood count shows macrocytic anemia and B12 is low. MRI shows T2 hyperintensity in the posterior columns.`,
   ask:`What is the best treatment, and what must be avoided?`,
   options:[`Parenteral vitamin B12; avoid treating with folic acid alone`,`Folic acid alone`,`High-dose steroids`,`Surgical decompression`],answer:0,
   explain:`Dorsal column and corticospinal tract involvement with neuropathy, macrocytosis and low B12 is subacute combined degeneration. Treat with parenteral B12 (intramuscular), followed by maintenance. Folic acid alone can correct the anemia while the neurologic damage progresses. Nitrous oxide misuse and vegan diets are recognized causes.`,
   pearl:`Never treat suspected B12 deficiency with folate alone. Absent ankle jerks with extensor plantars should make you think of B12.`},

  /* ===== Chapter 10: headaches ===== */
  'n-1001':{type:`mcq`,topic:`Migraine with aura`,difficulty:1,who:`raya`,patient:`Raya, hunter, 26`,
   case:`For three years Raya has had attacks that begin with 20 minutes of shimmering zigzag lights spreading across her vision. Then comes a throbbing one-sided headache lasting about 8 hours with nausea, light sensitivity and worsening on movement. Neurologic exam between attacks is normal.`,
   ask:`Which is the most appropriate acute treatment for a typical attack?`,
   options:[`An NSAID or a triptan early in the attack, with an antiemetic`,`Daily opioids`,`100% oxygen by mask`,`Indomethacin`],answer:0,
   explain:`Aura followed by unilateral throbbing headache with nausea and photophobia is migraine with aura. Mild to moderate attacks respond to NSAIDs, and moderate to severe attacks to a triptan (sometimes with an antiemetic such as metoclopramide). Oxygen is for cluster headache, and indomethacin for paroxysmal hemicrania. Opioids are not recommended. Preventive options such as propranolol, topiramate or amitriptyline are considered if attacks are frequent.`,
   pearl:`Treat migraine early in the attack. Do not combine a triptan with ergotamine.`},

  'n-1002':{type:`mcq`,topic:`Cluster headache`,difficulty:2,who:`thorn`,patient:`Thorn, trapper, 38`,
   case:`Thorn is a smoker. Every night around the same time he wakes with excruciating stabbing pain behind the right eye lasting about 45 minutes. The eye is red and tearing, the nostril runs, the eyelid droops, and he cannot lie still and paces the room. Attacks have come daily for three weeks.`,
   ask:`Which acute treatment is correct, and what is a typical preventive?`,
   options:[`100% oxygen at 12 to 15 L/min for 15 to 20 minutes or subcutaneous sumatriptan; verapamil for prevention (with ECG monitoring)`,`Paracetamol; propranolol for prevention`,`Indomethacin; amitriptyline for prevention`,`Opioids; gabapentin for prevention`],answer:0,
   explain:`Strictly unilateral, orbital pain with ipsilateral autonomic features, restlessness and clockwork timing is cluster headache. Acute treatment is high-flow 100% oxygen or subcutaneous sumatriptan (6 mg). Verapamil is the preferred preventive, with ECG monitoring for PR prolongation. Paroxysmal hemicrania, which looks similar, responds to indomethacin.`,
   pearl:`In cluster headache the patient paces. In migraine they lie still.`},

  'n-1003':{type:`mcq`,topic:`Trigeminal neuralgia`,difficulty:1,who:`kepler`,patient:`Kepler, fisher, 62`,
   case:`Kepler has brief electric-shock stabs of pain in the right cheek and jaw that last seconds. Shaving, chewing, brushing his teeth or a cold wind can trigger them. There is no sensory loss on examination.`,
   ask:`What is first-line treatment, and which test looks for a cause?`,
   options:[`Carbamazepine; MRI brain to look for neurovascular compression or another cause`,`Gabapentin; no imaging needed`,`Long-term opioids; MRI`,`Immediate surgery without drug trial`],answer:0,
   explain:`Paroxysmal, lancinating pain in a trigeminal division with trigger zones is trigeminal neuralgia. Carbamazepine is first-line (check sodium, liver function and blood count). Consider HLA-B*1502 testing before starting in people of Asian ancestry. MRI looks for vascular compression or other causes. Microvascular decompression is the definitive option for refractory cases.`,
   pearl:`Electric-shock facial pain triggered by touch: carbamazepine first, and image for a cause.`},

  'n-1004':{type:`mcq`,topic:`Thunderclap headache and subarachnoid hemorrhage`,difficulty:2,who:`mara`,patient:`Mara, cooper, 48`,
   case:`While lifting a barrel, Mara had a sudden headache that peaked within a minute and was the worst of her life. She vomited and has a stiff neck. She is awake and oriented. Two hours have passed since onset.`,
   ask:`What is the best first investigation?`,
   options:[`Immediate non-contrast CT head`,`MRI brain as the first test`,`Lumbar puncture first`,`Start a triptan and observe`],answer:0,
   explain:`Thunderclap onset means subarachnoid hemorrhage until proven otherwise. Non-contrast CT within six hours of onset is highly sensitive. If CT is negative and suspicion remains, a lumbar puncture (at least 12 hours after onset, looking for xanthochromia) and CT angiography are the next steps, depending on timing and local protocol.`,
   pearl:`A headache that peaks in under a minute needs a CT head now, even if the exam is normal.`},

  'n-1005':{type:`mcq`,topic:`Spontaneous intracranial hypotension`,difficulty:2,who:`dev`,patient:`Dev, trader, 34`,
   case:`After a spinal injection procedure, Dev has had a headache that is absent when he wakes, builds within 15 minutes of standing, and eases when he lies flat. MRI shows diffuse pachymeningeal enhancement and sagging of the brain.`,
   ask:`What is the diagnosis, and what is the definitive treatment if conservative care fails?`,
   options:[`Intracranial hypotension from a CSF leak; epidural blood patch`,`Migraine; propranolol`,`Idiopathic intracranial hypertension; acetazolamide`,`Cluster headache; high-flow oxygen`],answer:0,
   explain:`An orthostatic headache with pachymeningeal enhancement and brain sagging indicates low CSF volume from a leak. Start with rest, fluids and caffeine. The treatment of choice if that fails is an epidural blood patch, repeated or targeted at the leak if needed. Persistent leaks may need surgical repair.`,
   pearl:`A headache that is better lying down and worse upright points to low CSF pressure. Ask about recent spinal procedures.`},

  /* ===== Chapter 11: movement disorders ===== */
  'n-1101':{type:`mcq`,topic:`Parkinson disease`,difficulty:1,who:`ilsa`,patient:`Ilsa, cartographer, 67`,
   case:`Ilsa's handwriting has shrunk, and she has a tremor in her right hand that is present at rest and eases when she holds a quill. She moves slowly, her arm swing is reduced, and she has cogwheel rigidity. She has also lost her sense of smell.`,
   ask:`Which feature is required to diagnose parkinsonism, and what is the most effective symptomatic drug?`,
   options:[`Bradykinesia plus rest tremor or rigidity; levodopa`,`Rest tremor alone; propranolol`,`Postural instability alone; amantadine`,`Rigidity alone; benztropine`],answer:0,
   explain:`Bradykinesia (slowness with decrement) is required, together with at least one of rest tremor or rigidity. Levodopa with a decarboxylase inhibitor is the most effective symptomatic treatment, though dopamine agonists and MAO-B inhibitors are alternatives in early or younger patients. Loss of smell, constipation and REM sleep behavior disorder often precede motor symptoms.`,
   pearl:`No bradykinesia means no Parkinson disease. Rest tremor alone is not enough.`},

  'n-1102':{type:`mcq`,topic:`Huntington disease`,difficulty:2,who:`teo`,patient:`Teo, Ilsa's brother, 41`,
   case:`For two years Teo has been restless and irritable, forgetful, with quick, irregular, dance-like jerks of the arms and face. His father died with a similar illness at 55. MRI shows atrophy of the caudate nuclei.`,
   ask:`Which test confirms the diagnosis, and how is the chorea treated?`,
   options:[`HTT gene testing for CAG repeat expansion (over 40 repeats); VMAT2 inhibitors such as tetrabenazine or deutetrabenazine`,`Serum ceruloplasmin; chelation`,`EEG; valproate`,`Antibodies against NMDAR; plasma exchange`],answer:0,
   explain:`Autosomal dominant chorea with psychiatric and cognitive change, caudate atrophy and a family history point to Huntington disease. Confirm with genetic testing for the CAG repeat in the HTT gene on chromosome 4. Anticipation is greater with paternal transmission. VMAT2 inhibitors treat chorea. Genetic counseling should come before predictive testing of at-risk relatives.`,
   pearl:`Genetic counseling comes before a predictive test. The result affects the whole family.`},

  'n-1103':{type:`mcq`,topic:`Wilson disease`,difficulty:2,who:`nell`,patient:`Nell, apprentice, 19`,
   case:`Nell has developed a coarse, wing-beating tremor, slurred speech and sudden changes in mood. Earlier this year she had unexplained hemolysis and abnormal liver tests. A slit-lamp exam shows brown rings at the edges of the corneas.`,
   ask:`Which tests confirm the diagnosis, and what is the treatment?`,
   options:[`Low serum ceruloplasmin and raised 24-hour urinary copper; chelation (penicillamine or trientine) with zinc`,`HTT gene testing; tetrabenazine`,`Anti-AChR antibodies; pyridostigmine`,`Serum B12; injections`],answer:0,
   explain:`Movement disorder, psychiatric change, liver disease and Kayser-Fleischer rings in a young person are Wilson disease. Confirm with low serum ceruloplasmin, high 24-hour urinary copper and slit-lamp examination. Treat with a chelator (penicillamine or trientine) and zinc, and avoid high-copper foods. Screen siblings.`,
   pearl:`Any young person with an unexplained movement disorder, psychiatric symptoms or liver disease: check ceruloplasmin.`},

  /* ===== Chapter 12: coma and herniation ===== */
  'n-1201':{type:`mcq`,topic:`Altered mental status: thiamine and glucose`,difficulty:2,who:`hale`,patient:`Captain Hale, 59`,
   case:`Captain Hale was found unresponsive at the Old Gate. He is thin, smells of alcohol, and has nystagmus with limited eye movements. Fingerstick glucose is 34 mg/dL. GCS is 9.`,
   ask:`What is the best immediate treatment?`,
   options:[`IV thiamine together with (or just before) IV dextrose`,`IV dextrose alone, with thiamine later`,`CT head before any treatment`,`Naloxone only`],answer:0,
   explain:`Hypoglycemia must be corrected without delay, but in a malnourished or alcohol-dependent patient, glucose can precipitate Wernicke encephalopathy. Give IV thiamine before or together with dextrose. Do not delay the dextrose to wait for the thiamine. Imaging comes after stabilization.`,
   pearl:`In any suspected Wernicke or alcohol-related coma, thiamine goes in before or with the glucose.`},

  'n-1202':{type:`mcq`,topic:`Transtentorial (uncal) herniation`,difficulty:3,who:`hale`,patient:`Captain Hale, 59`,
   case:`Hours later Hale deteriorates after a fall at the Gate. His right pupil is dilated and fixed, GCS falls from 14 to 8, he has left hemiparesis, and his BP rises while his heart rate falls. CT shows a large right subdural hematoma with midline shift.`,
   ask:`What are the best immediate measures?`,
   options:[`Head of bed at 30 degrees, secure the airway, give hyperosmolar therapy (20% mannitol or 3% saline), brief hyperventilation as a bridge, and urgent neurosurgery`,`Lumbar puncture to release pressure`,`Give hypotonic IV fluids`,`Observe and repeat the CT in 24 hours`],answer:0,
   explain:`A unilateral blown pupil, falling consciousness and the Cushing response mean herniation from raised intracranial pressure. Elevate the head, protect the airway, give mannitol or hypertonic saline, and use brief hyperventilation only as a temporizing measure while arranging urgent neurosurgical decompression. Avoid lumbar puncture (it can worsen herniation) and hypotonic fluids.`,
   pearl:`A blown pupil is a surgical emergency. Never do a lumbar puncture in a patient with signs of herniation.`}
 },

 /* ---------- the story path ---------- */
 chapters:[

  /* ===== Chapter 1 ===== */
  {id:`n-ch1`,act:`Act I · The Roads Go Quiet`,title:`The Ferryman Who Spins`,topic:`Vertigo`,
   summary:`At Dusk Crossing, two people cannot keep their balance. Only one of them is safe to treat on the dock.`,
   outro:`Two people helped. One strange flower. Many questions.`,
   beats:[
    {k:`scene`,lines:[
     {who:`narrator`,t:`Dusk Crossing is a wide black river with a lantern on every post along its bank. Half of them are dark.`},
     {who:`pulse`,m:`idle`,t:`That is Orrin, the ferryman. Thirty years on this river, and now he will not let go of the dock post.`},
     {who:`orrin`,t:`Do not laugh, Descender. I roll onto my left side on my pallet, and the whole sky wheels around me like a lantern swung on a string.`},
     {who:`orrin`,t:`It lasts less than a bell-stroke, then settles. No ringing in my ears, no ache in my head, and I hear the river as well as ever. Roll back, and it spins again.`},
     {who:`pulse`,m:`happy`,t:`His body is telling a story, {you}. Listen to where it starts, and how long it lasts.`}]},
    {k:`case`,id:`n-101`},
    {k:`scene`,lines:[
     {who:`narrator`,t:`You guide Orrin through the slow turn of the head that the old art teaches. His eyes jump, then settle. The river stops moving.`},
     {who:`orrin`,t:`...Quiet. Thirty years, and nobody told me the river could hold still.`},
     {who:`narrator`,t:`A shout from the landing. Two porters carry a woman off the ferry, her face grey and wet with sweat.`},
     {who:`maren`,t:`I cannot stand. Everything is sliding sideways, and it will not stop. I was fine at breakfast.`}]},
    {k:`case`,id:`n-102`},
    {k:`scene`,unlock:[`lanterns`,`pulse`,`oldart`,`hush`,`moonbell`],lines:[
     {who:`pulse`,m:`oops`,t:`Look at the posts. At the foot of every dark lantern.`},
     {who:`narrator`,t:`Pale white flowers lie there, fresh, as though laid down this morning.`},
     {who:`orrin`,t:`Moonbells. They grow nowhere near here. Every lantern that goes dark, someone leaves one. I have never once seen who.`},
     {who:`hush`,t:`Do not read the flowers, healer. They are not for you.`},
     {who:`pulse`,m:`oops`,t:`...Did you hear that? Come on. The next road is worse.`}]}
   ]},

  /* ===== Chapter 2 ===== */
  {id:`n-ch2`,title:`The Courier Who Falls`,topic:`Syncope`,
   summary:`Three people fall in Hearthmarket Square, and each has a different reason.`,
   outro:`Three falls, three different stories. The art is asking why, not just who.`,
   beats:[
    {k:`scene`,lines:[
     {who:`narrator`,t:`Hearthmarket Square at noon: crowded, hot, banners hanging limp. A courier's satchel lies on the cobbles beside a girl who is slowly sitting up.`},
     {who:`tali`,t:`I was only waiting for the Bell Gate to open. It got so warm. The edges of everything went dark, like looking down a well, and the sounds drifted away. Then I was on the stones with strangers asking if I was alive.`},
     {who:`tali`,t:`It always warns me first. And before it, I hear a bell. Everyone who falls says so. But there is no bell in Lumara. Nobody ever built one.`},
     {who:`pulse`,m:`oops`,t:`Remember that. A bell nobody built.`}]},
    {k:`case`,id:`n-201`},
    {k:`scene`,lines:[
     {who:`narrator`,t:`From the foot of the Beacon Stair comes a heavy shout. Gareth, stair-warden for forty years, sits on the bottom step, pale and breathing hard.`},
     {who:`gareth`,t:`Went up at a march, same as always. No warning at all. One moment, step twelve. The next, a crowd and no memory of falling.`},
     {who:`gareth`,t:`Lately, a tightness in my chest on the climb. Short of breath at the top, which never used to happen.`}]},
    {k:`case`,id:`n-202`},
    {k:`scene`,lines:[
     {who:`narrator`,t:`By the well, Dorin the miller grips the rim and waits for the world to stop swaying.`},
     {who:`dorin`,t:`I stand up too quick, and the room goes grey. Last week I nearly went into the well. I take my pills. I just never remember to drink.`}]},
    {k:`case`,id:`n-203`},
    {k:`scene`,unlock:[`hourbell`],lines:[
     {who:`pulse`,m:`idle`,t:`Three falls and three stories. A hot square, a hard heart, a thirsty miller. That is the art, {you}.`},
     {who:`tali`,t:`And still the bell. Before all of it.`},
     {who:`narrator`,t:`High above the square, nothing hangs in the empty arch of the Bell Gate. Only wind.`},
     {who:`pulse`,m:`oops`,t:`A bell nobody built, ringing for everyone who falls. I do not like that at all.`}]}
   ]},

  /* ===== Chapter 3 ===== */
  {id:`n-ch3`,title:`The Keeper of Storms`,topic:`Seizures`,
   summary:`A lantern keeper, a watchman and a young scribe each carry a different storm.`,
   outro:`Lira's storms began the night of the Dim Vigil. Somebody begged that night. Nobody remembers who.`,
   beats:[
    {k:`scene`,lines:[
     {who:`narrator`,t:`The Watch House stands where three roads meet. Lira keeps the lamps here, and she keeps her own secret.`},
     {who:`lira`,t:`Before a storm, the air smells of burnt toast. A feeling rises from my stomach, like missing a step in the dark. Then I have already been somewhere else.`},
     {who:`lira`,t:`People tell me I stare, smack my lips and pick at my sleeve, and do not answer when called. A minute or two. Then I wander lost for a quarter of an hour.`},
     {who:`lira`,t:`When I was small, a fever took me with fits, and a long one. The storms came years later.`}]},
    {k:`case`,id:`n-301`},
    {k:`scene`,lines:[
     {who:`narrator`,t:`A crash from the lamp-room. Daren, the night watchman, lies on the floor, rigid, then jerking.`},
     {who:`pulse`,m:`oops`,t:`That is no ordinary storm. How long has it been going on?`},
     {who:`lira`,t:`The hourglass says seven minutes!`}]},
    {k:`case`,id:`n-302`},
    {k:`scene`,lines:[
     {who:`narrator`,t:`Daren's jerking slows, then stops. He breathes. The storm has broken.`},
     {who:`narrator`,t:`In the corner of the Watch House, a girl with ink-stained fingers is picking up a spilled pot, again.`},
     {who:`kesh`,t:`Every morning. My arms just jump, right after I wake, and I drop everything. Last month I stayed up all night copying a ledger, and the next thing I knew I was on the floor with the scribes around me.`}]},
    {k:`case`,id:`n-303`},
    {k:`scene`,unlock:[`dimvigil`],lines:[
     {who:`lira`,t:`My storms got worse the night of the Dim Vigil. The Old Gate lantern, the oldest on the roads, went out for good.`},
     {who:`lira`,t:`They say a woman begged the keepers all night to leave it burning. By morning it was dark, and the Gate was sealed. I never learned her name.`},
     {who:`pulse`,m:`oops`,t:`I remember that night too. Only... not clearly. Nothing is clear about that night.`}]}
   ]},

  /* ===== Chapter 4 ===== */
  {id:`n-ch4`,title:`The Girl Who Changed`,topic:`Autoimmune encephalitis`,
   summary:`A singer's mind has been rewritten in three weeks. Her brother wants answers.`,
   outro:`Mireille is waking. She sang a line she did not know, and a name she could not place.`,
   beats:[
    {k:`scene`,lines:[
     {who:`narrator`,t:`In a house with shuttered windows, a young man opens the door before you knock.`},
     {who:`josse`,t:`My sister Mireille was the best singer on the Southern Road. Three weeks ago she stopped sleeping. She said the lanterns were giving her orders, that strangers wished her harm.`},
     {who:`josse`,t:`Last week she fell to the floor shaking. Now she grimaces and chews at nothing, her arms writhe, and she looks straight through me. The healers called it the Hush and told me to pray.`},
     {who:`narrator`,t:`On the bed, Mireille hums a half-remembered tune, then repeats one line, again and again.`},
     {who:`mireille`,t:`Light for the one who stayed. Light for the one who stayed.`}]},
    {k:`case`,id:`n-401`},
    {k:`case`,id:`n-402`},
    {k:`scene`,unlock:[`lightsong`],lines:[
     {who:`pulse`,m:`idle`,t:`She is not lost. Her own defenders have turned on the wrong target. That is something we can answer.`},
     {who:`narrator`,t:`Days pass. The grimacing slows. Mireille's eyes find yours.`},
     {who:`mireille`,t:`I keep hearing a song I never learned. And a name. Aurel. Who is Aurel?`},
     {who:`josse`,t:`She has never said that name in her life.`},
     {who:`pulse`,m:`oops`,t:`...`}]}
   ]},

  /* ===== Chapter 5 ===== */
  {id:`n-ch5`,title:`The Silent Hall`,topic:`Stroke and intracerebral hemorrhage`,
   summary:`The road ends in a hall of frozen people. Four of them are close enough to reach.`,
   outro:`The Hall is lit. The first road is open. But someone from your world has been here.`,
   beats:[
    {k:`scene`,lines:[
     {who:`narrator`,t:`The road ends at a vast hall. Hundreds of people stand inside, motionless, mid-gesture. Every lantern in the hall is dark.`},
     {who:`pulse`,m:`oops`,t:`The Silent Hall. They are not dead. They are... waiting. And a few of them are hurt in ways I do not understand. Sudden ways.`},
     {who:`bram`,t:`I woke up with the floor tilting under me. My voice is gone, and swallowing feels like swallowing stones. One side of my face is numb, and I cannot feel the heat of my own lamp on the other side of my body.`}]},
    {k:`case`,id:`n-501`},
    {k:`scene`,lines:[
     {who:`nessa`,t:`My right leg will not lift. My arm is nearly fine. I do not want to move, I do not want to talk, I do not want anything. And I cannot stop wetting myself, and I do not even mind.`}]},
    {k:`case`,id:`n-502`},
    {k:`scene`,lines:[
     {who:`narrator`,t:`A heavy man in a woodcutter's coat is slumped against a pillar, holding his head. His speech is slurred.`},
     {who:`hollis`,t:`Worst headache of my life, and my right arm has gone to sleep. I take that blood-thinner for my heart.`}]},
    {k:`case`,id:`n-503`},
    {k:`scene`,lines:[
     {who:`narrator`,t:`At the foot of the great lantern, an old warden lies on his side. His left hand lies useless, and his eyes drift to the right.`},
     {who:`ossian`,t:`The bell tolled three times, and then... silence. I did not take my pills. I did not think it would matter.`},
     {who:`pulse`,m:`oops`,t:`This is the big one, {you}. Where is the trouble? How do we confirm it? What do we do about it? Take your time. But not too much.`}]},
    {k:`case`,id:`n-boss1`},
    {k:`scene`,unlock:[`engraving`],lines:[
     {who:`narrator`,t:`The great lantern wakes with a soft chime. Light pours down every road. The frozen people blink, stretch and begin to talk all at once.`},
     {who:`pulse`,m:`happy`,t:`We did it! The first road is lit!`},
     {who:`narrator`,t:`At the base of the great lantern you notice a scratch in the metal: a small star, and beneath it, in a handwriting that is not Lumaran, the words "I will light them all."`},
     {who:`you`,t:`That is the way people write where I come from.`},
     {who:`pulse`,m:`oops`,t:`Someone from your world has been here before. And I remember none of it. How is that possible?`},
     {who:`hush`,t:`She never finished either.`},
     {who:`narrator`,t:`The first road is open. The roads beyond it are still dark.`}]}
   ]},

  /* ===== Chapter 6 ===== */
  {id:`n-ch6`,act:`Act II · The Roads Beyond`,title:`The Weaver's Climbing Weakness`,topic:`Guillain-Barre syndrome and CIDP`,
   summary:`A weaver's legs turn to water, and a dyer's slow weakness has gone on for months.`,
   outro:`Wendel can breathe again. His tapestry holds a secret in its threads.`,
   beats:[
    {k:`scene`,lines:[
     {who:`narrator`,t:`In the Weavers' Loft, bright cloth hangs in sheets. One loom is still. A young man lies beside it, looking at his own toes.`},
     {who:`wendel`,t:`It began as tingling in my feet. Then my legs turned to water, and the water has been rising ever since. Two weeks ago, I was sick at the river fair with a fever and a loose stomach. Then I was fine.`},
     {who:`wendel`,t:`My fingers slip on the shuttle. It has reached my hips. Soon it will reach my chest.`}]},
    {k:`case`,id:`n-601`},
    {k:`scene`,lines:[
     {who:`narrator`,t:`Two days later, the loft is quiet. Wendel's breathing is shallow, and he speaks in short breaths.`},
     {who:`wendel`,t:`Hard... to cough. Hard... to breathe.`}]},
    {k:`case`,id:`n-602`},
    {k:`scene`,lines:[
     {who:`narrator`,t:`Across the loft, Dara the dyer has been waiting her turn. Her hands are stained blue to the wrist, and she walks with a stick.`},
     {who:`dara`,t:`Mine has been going on for months, not days. Slowly, my legs, then my arms, and my feet tingle. The healers say it will pass. It has not.`}]},
    {k:`case`,id:`n-603`},
    {k:`scene`,unlock:[`nine`],lines:[
     {who:`narrator`,t:`Wendel, recovering, points to a tapestry on the far wall. Nine bright stars hang over a figure kneeling beside a dark lantern.`},
     {who:`wendel`,t:`The Nine. Lumara says they decide who is lit and who is dimmed. I wove this when I was a boy, from a pattern my grandmother gave me.`},
     {who:`pulse`,m:`idle`,t:`Look at the stars, {you}. Every one of them has turned its back.`},
     {who:`wendel`,t:`That is how my grandmother wove it. She would never say why.`}]}
   ]},

  /* ===== Chapter 7 ===== */
  {id:`n-ch7`,title:`The Messenger Who Fades`,topic:`Neuromuscular junction`,
   summary:`A messenger runs like the wind in the morning and cannot lift his eyelids by night.`,
   outro:`Pip's strength comes back each morning. His letters have never been answered.`,
   beats:[
    {k:`scene`,lines:[
     {who:`narrator`,t:`At the Messenger Post, riders come and go at a gallop. One young man sits on the step with his eyes half-closed.`},
     {who:`pip`,t:`In the morning I can outrun a horse. By evening my eyelids droop, I see two lanterns where there is one, and my voice turns thick and nasal. I cannot even chew my bread.`},
     {who:`pip`,t:`Then I sleep, and by morning, I am fine again.`}]},
    {k:`case`,id:`n-701`},
    {k:`scene`,lines:[
     {who:`narrator`,t:`A week later, a fever takes Pip, and an apothecary gives him a strong remedy. By nightfall he is gasping on the post floor.`},
     {who:`pulse`,m:`oops`,t:`His breathing! Whatever that was, it made things worse.`}]},
    {k:`case`,id:`n-702`},
    {k:`scene`,lines:[
     {who:`narrator`,t:`In the corner, an old lamp-maker sits with his chin on his chest. He waves a hand, and nods toward the door.`},
     {who:`harl`,t:`My thighs are like jelly on the stairs. My mouth is always dry. Funny thing is, after I grip the rail a few times, my legs feel better. Forty years of pipe smoke, I suppose.`}]},
    {k:`case`,id:`n-703`},
    {k:`scene`,unlock:[`letters`],lines:[
     {who:`pip`,t:`There is something I never told anyone. For years I have carried a bundle of letters. All addressed to the same person. Aurel, at the Old Gate.`},
     {who:`pip`,t:`No one ever answers, and no one ever sends them back. I keep carrying them anyway. A rider is not supposed to give up a letter.`},
     {who:`pulse`,m:`oops`,t:`Aurel... That name again. Whoever wrote them never stopped writing.`}]}
   ]},

  /* ===== Chapter 8 ===== */
  {id:`n-ch8`,title:`Two Winters`,topic:`Demyelinating disease`,
   summary:`A glassblower's colors keep draining away, and a glass-cutter has gone blind and lame.`,
   outro:`Elowen's map shows something worrying: the dark lanterns are not random.`,
   beats:[
    {k:`scene`,lines:[
     {who:`narrator`,t:`The glass foundry glows orange. At the furnace mouth a young woman steadies herself against the wall, one eye shut.`},
     {who:`elowen`,t:`Two winters ago, the colors drained out of my left eye, and it hurt to move. Then they came back. I thought nothing of it. Now, from my waist down, my body feels like it belongs to someone else.`},
     {who:`elowen`,t:`And the heat of the furnace makes everything worse. Old weakness returns, even where I had forgotten it.`}]},
    {k:`case`,id:`n-801`},
    {k:`scene`,lines:[
     {who:`narrator`,t:`In the cutting room, a man sits at a bench, not working. His hands are open on the table.`},
     {who:`rua`,t:`Two weeks of hiccups I could not stop. I vomited everything. Then both my eyes went dark, one after the other, with pain behind them. This morning my legs would not move.`}]},
    {k:`case`,id:`n-802`},
    {k:`scene`,unlock:[`darkmap`],lines:[
     {who:`narrator`,t:`Elowen has pinned a map of Lumara on the foundry wall. Every dark lantern is marked with a red bead of glass.`},
     {who:`elowen`,t:`I have been tracking them since my eye went. At first, I thought they were scattered. They are not.`},
     {who:`narrator`,t:`The beads do not scatter. They form a line, stretching from the edge of the map inward, toward a single point.`},
     {who:`pulse`,m:`oops`,t:`The Hush is not wandering. It is going somewhere.`}]}
   ]},

  /* ===== Chapter 9 ===== */
  {id:`n-ch9`,title:`The Broken Bridge`,topic:`Spinal cord disorders`,
   summary:`The Hollow Span has snapped, and the people stranded at it are not all hurt in the same way.`,
   outro:`The Span was cut by a hand, not by the Hush. The Hush has a helper.`,
   beats:[
    {k:`scene`,lines:[
     {who:`narrator`,t:`The Hollow Span, the great bridge between the Southern and Western Roads, has snapped in the middle. People wait on both banks.`},
     {who:`corvin`,t:`I am a mason. I was working on the pier when somebody put a blade in my back. My right leg went limp and numb, but here is the strange part: my left leg moves fine, and yet it cannot feel the heat of the forge-stones.`}]},
    {k:`case`,id:`n-901`},
    {k:`scene`,lines:[
     {who:`narrator`,t:`On the far bank, a drover is propped against a cart, his face tight with pain.`},
     {who:`sabel`,t:`Two days of back pain that shoots down both legs. Now I cannot pass water, my ankles are weak, and I cannot feel the saddle when I sit on it.`}]},
    {k:`case`,id:`n-902`},
    {k:`scene`,lines:[
     {who:`narrator`,t:`In the shade of the broken pier, a thin monk in grey robes steadies himself on a stick.`},
     {who:`vik`,t:`I have eaten no meat or milk for many years. For a year now, my feet tingle, and I stagger in the dark. I cannot feel the ground properly.`}]},
    {k:`case`,id:`n-903`},
    {k:`scene`,lines:[
     {who:`corvin`,t:`Take a look at the break, {you}. The Hush rots things slowly. This was cut. Clean, from below, with a mason's skill.`},
     {who:`pulse`,m:`oops`,t:`Someone is helping it. Or... it is helping someone.`}]}
   ]},

  /* ===== Chapter 10 ===== */
  {id:`n-ch10`,act:`Act III · Toward the Gate`,title:`The Hunters of the Mistwood`,topic:`Headaches`,
   summary:`Five hunters in the Mistwood, five different kinds of head pain.`,
   outro:`In the mist, someone is lighting lanterns by hand. She does not look back.`,
   beats:[
    {k:`scene`,lines:[
     {who:`narrator`,t:`The Mistwood is quiet and white. Around a low fire, several hunters sit with their hands pressed to their heads.`},
     {who:`raya`,t:`Before it begins, I see zigzag lights spreading across the world. Twenty minutes. Then my head pounds on one side for hours, and I cannot stand light or noise.`}]},
    {k:`case`,id:`n-1001`},
    {k:`scene`,lines:[
     {who:`narrator`,t:`A big trapper stalks the edge of the firelight. He cannot sit still.`},
     {who:`thorn`,t:`Every night at the same hour. A knife behind my right eye. My eye pours, my nose runs, my eyelid sags. I pace until it ends, forty-five minutes or more. I cannot lie down. I would rather die.`}]},
    {k:`case`,id:`n-1002`},
    {k:`scene`,lines:[
     {who:`kepler`,t:`Mine lasts seconds. Like a bolt of lightning in my cheek. I shave, I feel it. I eat, I feel it. The cold wind finds it. I have stopped smiling.`}]},
    {k:`case`,id:`n-1003`},
    {k:`scene`,lines:[
     {who:`narrator`,t:`A cooper is carried in from the lumber yard, one hand clamped to the back of her neck.`},
     {who:`mara`,t:`I lifted a barrel and my head exploded. Not a headache that grew. One that arrived, all at once, like being struck.`}]},
    {k:`case`,id:`n-1004`},
    {k:`scene`,lines:[
     {who:`dev`,t:`Mine is different. I woke up fine after the healers put a needle in my spine. But the moment I stand, it builds. Lie down, and it fades. I have been in bed for a week.`}]},
    {k:`case`,id:`n-1005`},
    {k:`scene`,unlock:[`lamplighter`],lines:[
     {who:`raya`,t:`While I was waiting for the pain to pass, I saw something across the ravine. A woman in a dark cloak, a long red scarf trailing behind her.`},
     {who:`raya`,t:`She was lighting a lantern by hand. One flame at a time. Then she knelt and left something white at its foot. She did not look back once.`},
     {who:`pulse`,m:`oops`,t:`Moonbells. That is who has been leaving them.`},
     {who:`you`,t:`Can we catch her?`},
     {who:`pulse`,m:`oops`,t:`She is already gone. And she moved faster than anyone I have ever seen.`}]}
   ]},

  /* ===== Chapter 11 ===== */
  {id:`n-ch11`,title:`The Trembling Cartographer`,topic:`Movement disorders`,
   summary:`A mapmaker's hand trembles, her brother dances without meaning to, and a girl's body is out of sync.`,
   outro:`Ilsa's map is finished. Every dark road ends at the same place.`,
   beats:[
    {k:`scene`,lines:[
     {who:`narrator`,t:`High in the Cartographer's Tower, maps cover every wall. A woman in grey sits at the great table, drawing the last road.`},
     {who:`ilsa`,t:`My hand shakes when it rests, and stops when I take up the quill. My handwriting has shrunk, my steps shuffle, and my face feels like a mask. I can no longer smell the ink.`}]},
    {k:`case`,id:`n-1101`},
    {k:`scene`,lines:[
     {who:`narrator`,t:`A man bursts in from the stairwell, laughing, one arm flying out like a dancer's. He does not mean to. He stops, looks embarrassed.`},
     {who:`ilsa`,t:`My brother Teo. It started two years ago with a temper and a bad memory. Now this. Our father went the same way, at fifty-five.`}]},
    {k:`case`,id:`n-1102`},
    {k:`scene`,lines:[
     {who:`narrator`,t:`Last, a young apprentice is helped up the stairs. She cannot stop her arms flapping like wings. Her words slur.`},
     {who:`nell`,t:`I used to be quiet. Now I laugh and cry in the same breath. Last winter my skin went yellow, and the healers did not know why. The shaking only began after.`}]},
    {k:`case`,id:`n-1103`},
    {k:`scene`,lines:[
     {who:`ilsa`,t:`There. It is finished. Every dark lantern I have ever marked, joined.`},
     {who:`narrator`,t:`The red thread winds across the table and pulls tight at a single point near the edge of the map.`},
     {who:`pulse`,m:`oops`,t:`The Old Gate. Every road leads to the Old Gate.`},
     {who:`hush`,t:`Then you know where it ends. Come and see, healer.`}]}
   ]},

  /* ===== Chapter 12 ===== */
  {id:`n-ch12`,title:`The Sleeper at the Gate`,topic:`Coma and raised intracranial pressure`,
   summary:`At the end of every road lies the Old Gate, and a guard who will not wake.`,
   outro:`The first region is done. Nine seals. Eight more doors.`,
   beats:[
    {k:`scene`,lines:[
     {who:`narrator`,t:`The road narrows to a single lantern-lit path, and ends at a gate taller than the sky. A ring of white flowers lies around its foot.`},
     {who:`pulse`,m:`oops`,t:`This is where the first lantern died. And that is the Gate's captain, Hale. The only one who was here that night.`},
     {who:`narrator`,t:`Captain Hale lies on the cold stone, unresponsive. His breath smells of drink, and his eyes jerk strangely.`}]},
    {k:`case`,id:`n-1201`},
    {k:`scene`,lines:[
     {who:`narrator`,t:`Hale stirs, groans, and tries to stand. He staggers, and falls hard against the gatepost. When you reach him, his right pupil is wide and fixed.`},
     {who:`pulse`,m:`oops`,t:`His breathing is changing. This is the worst kind of trouble!`}]},
    {k:`case`,id:`n-1202`},
    {k:`scene`,unlock:[`oldgate`],lines:[
     {who:`narrator`,t:`Hale wakes, groggy and clear-eyed for the first time in years. He looks at the ring of flowers, then at you.`},
     {who:`hale`,t:`I was on watch that night. A woman came to the gate before dawn. She knelt in front of the lantern, and she begged. Not the keepers. Us. And something above us.`},
     {who:`hale`,t:`"Just one more night," she said. "Please. Just one more night." The bell rang. The lantern went dark. And she did not weep. She just... stopped being afraid.`},
     {who:`narrator`,t:`Nine seals glow faintly across the Gate. One of them is cracked.`},
     {who:`hush`,t:`Eight more roads, healer. Eight more doors. And on the other side of each one, a person you will not be able to save.`},
     {who:`pulse`,m:`idle`,t:`Do not listen to it. We lit the first road, {you}. We can light the others.`},
     {who:`narrator`,t:`The first region is lit. Beyond the Gate, the roads stop being roads, and begin to beat like a heart.`}]}
   ]}
 ]
});
