import React from 'react';
import { 
  Heart, 
  Brain, 
  Microscope, 
  Settings as Lungs, 
  Atom as Stomach, 
  Droplets as Kidney, 
  Bone, 
  Droplets, 
  Dna, 
  Shield, 
  Pill, 
  Baby, 
  Eye 
} from 'lucide-react';

export interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Module {
  questions: Question[];
}

export interface SystemData {
  name: string;
  description: string;
  overview: string;
  keyTopics: string[];
  color: string;
  icon: React.ComponentType<any>;
  categories: string[];
  modules: { [key: string]: Module };
}

export const systemsData: { [key: string]: SystemData } = {
  cardiovascular: {
    name: 'Cardiovascular System',
    description: 'Heart anatomy, physiology, pathology, and cardiovascular diseases',
    overview: 'The cardiovascular system consists of the heart, blood vessels, and blood. It functions to transport oxygen, nutrients, hormones, and waste products throughout the body. Understanding cardiac anatomy, the cardiac cycle, hemodynamics, and common cardiovascular diseases is essential for medical practice.',
    keyTopics: [
      'Heart anatomy and chambers',
      'Cardiac cycle and heart sounds',
      'Coronary circulation',
      'Cardiac conduction system',
      'Blood pressure regulation',
      'Heart failure and arrhythmias',
      'Coronary artery disease',
      'Valvular heart disease'
    ],
    color: 'from-red-500 to-red-600',
    icon: Heart,
    categories: ['anatomy', 'physiology', 'pathology'],
    modules: {
      anatomy: {
        questions: [
          {
            question: "Which chamber of the heart has the thickest muscular wall?",
            options: [
              "Right atrium",
              "Left atrium", 
              "Right ventricle",
              "Left ventricle"
            ],
            correct: 3,
            explanation: "The left ventricle has the thickest muscular wall (myocardium) because it needs to generate enough pressure to pump blood throughout the entire systemic circulation, which requires much higher pressures than the pulmonary circulation."
          },
          {
            question: "The tricuspid valve is located between which two chambers?",
            options: [
              "Left atrium and left ventricle",
              "Right atrium and right ventricle",
              "Right ventricle and pulmonary artery",
              "Left ventricle and aorta"
            ],
            correct: 1,
            explanation: "The tricuspid valve (right atrioventricular valve) is located between the right atrium and right ventricle. It has three cusps and prevents backflow of blood from the ventricle to the atrium during ventricular contraction."
          },
          {
            question: "Which coronary artery typically supplies the posterior wall of the left ventricle?",
            options: [
              "Left anterior descending artery",
              "Left circumflex artery",
              "Right coronary artery",
              "Posterior descending artery"
            ],
            correct: 2,
            explanation: "In most people (85%), the right coronary artery gives rise to the posterior descending artery and supplies the posterior wall of the left ventricle. This is called right dominance. The remaining 15% have left dominance where the circumflex artery supplies this region."
          },
          {
            question: "The sinoatrial (SA) node is located in which part of the heart?",
            options: [
              "Right atrial wall near the superior vena cava",
              "Interventricular septum",
              "Left atrial wall",
              "Right ventricular wall"
            ],
            correct: 0,
            explanation: "The SA node is located in the right atrial wall near the opening of the superior vena cava. It serves as the heart's natural pacemaker, generating electrical impulses that initiate each heartbeat at a rate of 60-100 beats per minute."
          },
          {
            question: "Which structure prevents backflow of blood from the aorta into the left ventricle?",
            options: [
              "Mitral valve",
              "Tricuspid valve",
              "Pulmonary valve",
              "Aortic valve"
            ],
            correct: 3,
            explanation: "The aortic valve (aortic semilunar valve) prevents backflow of blood from the aorta into the left ventricle during ventricular diastole. It has three cusps and opens when ventricular pressure exceeds aortic pressure during systole."
          }
        ]
      },
      physiology: {
        questions: [
          {
            question: "During which phase of the cardiac cycle does most coronary blood flow occur?",
            options: [
              "Ventricular systole",
              "Ventricular diastole",
              "Atrial systole",
              "Isovolumetric contraction"
            ],
            correct: 1,
            explanation: "Most coronary blood flow occurs during ventricular diastole when the myocardium relaxes and coronary vessels are not compressed. During systole, especially in the left ventricle, the high intramyocardial pressure compresses coronary vessels, reducing blood flow."
          },
          {
            question: "What is the normal ejection fraction of the left ventricle?",
            options: [
              "35-45%",
              "45-55%",
              "55-70%",
              "70-85%"
            ],
            correct: 2,
            explanation: "The normal ejection fraction (EF) of the left ventricle is 55-70%. EF is calculated as (stroke volume/end-diastolic volume) × 100%. An EF below 40% indicates systolic heart failure, while EF above 50% with symptoms suggests heart failure with preserved ejection fraction."
          },
          {
            question: "Which factor has the greatest effect on stroke volume?",
            options: [
              "Heart rate",
              "Preload (venous return)",
              "Afterload (arterial pressure)",
              "Contractility"
            ],
            correct: 1,
            explanation: "Preload (venous return) has the greatest effect on stroke volume according to the Frank-Starling mechanism. Increased venous return stretches the ventricle, leading to stronger contraction and increased stroke volume, up to an optimal point."
          },
          {
            question: "The first heart sound (S1) is caused by:",
            options: [
              "Closure of aortic and pulmonary valves",
              "Closure of mitral and tricuspid valves",
              "Opening of aortic and pulmonary valves",
              "Ventricular filling"
            ],
            correct: 1,
            explanation: "S1 ('lub') is caused by closure of the mitral and tricuspid valves at the beginning of ventricular systole. The mitral component (M1) occurs slightly before the tricuspid component (T1), but they are usually heard as a single sound."
          },
          {
            question: "Mean arterial pressure (MAP) is best estimated by:",
            options: [
              "Systolic pressure + diastolic pressure / 2",
              "Diastolic pressure + 1/3(systolic - diastolic)",
              "Systolic pressure - diastolic pressure",
              "2 × diastolic pressure + systolic pressure / 3"
            ],
            correct: 1,
            explanation: "MAP = diastolic pressure + 1/3(pulse pressure), where pulse pressure = systolic - diastolic pressure. This formula accounts for the fact that diastole lasts longer than systole, so diastolic pressure contributes more to the average pressure."
          }
        ]
      },
      pathology: {
        questions: [
          {
            question: "Which type of myocardial infarction typically presents with ST elevation in leads II, III, and aVF?",
            options: [
              "Anterior MI",
              "Lateral MI",
              "Inferior MI",
              "Posterior MI"
            ],
            correct: 2,
            explanation: "Inferior MI typically presents with ST elevation in leads II, III, and aVF, which look at the inferior wall of the left ventricle. This is usually caused by occlusion of the right coronary artery or, less commonly, the left circumflex artery."
          },
          {
            question: "The most common cause of heart failure with reduced ejection fraction is:",
            options: [
              "Hypertensive heart disease",
              "Ischemic cardiomyopathy",
              "Dilated cardiomyopathy",
              "Valvular heart disease"
            ],
            correct: 1,
            explanation: "Ischemic cardiomyopathy (due to coronary artery disease) is the most common cause of heart failure with reduced ejection fraction (HFrEF) in developed countries, accounting for approximately 60-70% of cases."
          },
          {
            question: "Which arrhythmia is most commonly associated with acute myocardial infarction?",
            options: [
              "Atrial fibrillation",
              "Ventricular tachycardia",
              "Premature ventricular contractions",
              "Complete heart block"
            ],
            correct: 2,
            explanation: "Premature ventricular contractions (PVCs) are the most common arrhythmia in acute MI, occurring in over 90% of patients. They result from increased automaticity and re-entry circuits in ischemic myocardium."
          },
          {
            question: "Aortic stenosis most commonly causes which type of heart failure initially?",
            options: [
              "Right heart failure",
              "Left heart failure with reduced EF",
              "Left heart failure with preserved EF",
              "Biventricular failure"
            ],
            correct: 2,
            explanation: "Aortic stenosis initially causes left heart failure with preserved ejection fraction (HFpEF) due to diastolic dysfunction from left ventricular hypertrophy. The ventricle becomes stiff and has impaired relaxation, but systolic function is initially preserved."
          },
          {
            question: "Which finding is most characteristic of cardiac tamponade?",
            options: [
              "Pulsus paradoxus > 10 mmHg",
              "Elevated jugular venous pressure",
              "Muffled heart sounds",
              "Equalization of diastolic pressures"
            ],
            correct: 3,
            explanation: "Equalization of diastolic pressures in all cardiac chambers is the most characteristic hemodynamic finding in cardiac tamponade. This occurs because the rigid pericardium prevents normal filling, causing right atrial, right ventricular diastolic, pulmonary capillary wedge, and left ventricular diastolic pressures to equalize."
          }
        ]
      }
    }
  },
  cns: {
    name: 'Central Nervous System',
    description: 'Neuroanatomy, neurophysiology, and neurological disorders',
    overview: 'The central nervous system consists of the brain and spinal cord, serving as the control center for the entire nervous system. It processes sensory information, coordinates motor responses, and enables higher cognitive functions including consciousness, memory, and learning.',
    keyTopics: [
      'Brain anatomy and regions',
      'Spinal cord organization',
      'Cranial nerves',
      'Neurotransmission',
      'Cerebrospinal fluid',
      'Blood-brain barrier',
      'Neurological disorders',
      'Motor and sensory pathways'
    ],
    color: 'from-purple-500 to-purple-600',
    icon: Brain,
    categories: ['anatomy', 'physiology', 'pathology'],
    modules: {
      anatomy: {
        questions: [
          {
            question: "Which lobe of the brain contains the primary motor cortex?",
            options: [
              "Frontal lobe",
              "Parietal lobe",
              "Temporal lobe",
              "Occipital lobe"
            ],
            correct: 0,
            explanation: "The primary motor cortex is located in the precentral gyrus of the frontal lobe. It contains the motor homunculus and is responsible for voluntary motor control, with different regions controlling different parts of the body."
          },
          {
            question: "The optic chiasm is formed by the crossing of fibers from which cranial nerve?",
            options: [
              "Cranial nerve I (Olfactory)",
              "Cranial nerve II (Optic)",
              "Cranial nerve III (Oculomotor)",
              "Cranial nerve IV (Trochlear)"
            ],
            correct: 1,
            explanation: "The optic chiasm is formed by the partial crossing of fibers from cranial nerve II (optic nerve). Nasal retinal fibers cross to the opposite side, while temporal retinal fibers remain on the same side, allowing for binocular vision and depth perception."
          },
          {
            question: "Which structure connects the two cerebral hemispheres?",
            options: [
              "Fornix",
              "Corpus callosum",
              "Internal capsule",
              "Anterior commissure"
            ],
            correct: 1,
            explanation: "The corpus callosum is the largest commissural structure connecting the two cerebral hemispheres. It contains approximately 200 million axons that allow communication between the left and right sides of the brain."
          },
          {
            question: "The cell bodies of motor neurons that innervate skeletal muscles are located in:",
            options: [
              "Dorsal horn of spinal cord",
              "Ventral horn of spinal cord",
              "Dorsal root ganglia",
              "Sympathetic chain ganglia"
            ],
            correct: 1,
            explanation: "The cell bodies of lower motor neurons (alpha motor neurons) that directly innervate skeletal muscles are located in the ventral (anterior) horn of the spinal cord gray matter. These neurons form the final common pathway for motor control."
          },
          {
            question: "Which cranial nerve has the longest intracranial course?",
            options: [
              "Cranial nerve III (Oculomotor)",
              "Cranial nerve IV (Trochlear)",
              "Cranial nerve VI (Abducens)",
              "Cranial nerve VII (Facial)"
            ],
            correct: 1,
            explanation: "Cranial nerve IV (trochlear) has the longest intracranial course. It decussates completely in the superior medullary velum and has a long course around the brainstem, making it particularly vulnerable to injury in head trauma."
          }
        ]
      },
      physiology: {
        questions: [
          {
            question: "The resting membrane potential of a typical neuron is approximately:",
            options: [
              "-40 mV",
              "-55 mV",
              "-70 mV",
              "-90 mV"
            ],
            correct: 2,
            explanation: "The resting membrane potential of a typical neuron is approximately -70 mV. This is maintained by the sodium-potassium pump and selective membrane permeability, with the inside of the cell being negative relative to the outside."
          },
          {
            question: "Which neurotransmitter is primarily responsible for muscle contraction at the neuromuscular junction?",
            options: [
              "Dopamine",
              "Serotonin",
              "Acetylcholine",
              "GABA"
            ],
            correct: 2,
            explanation: "Acetylcholine (ACh) is the neurotransmitter responsible for muscle contraction at the neuromuscular junction. It binds to nicotinic receptors on the muscle fiber, causing depolarization and subsequent muscle contraction."
          },
          {
            question: "The blood-brain barrier is primarily formed by:",
            options: [
              "Astrocytes",
              "Tight junctions between capillary endothelial cells",
              "Microglia",
              "Oligodendrocytes"
            ],
            correct: 1,
            explanation: "The blood-brain barrier is primarily formed by tight junctions between capillary endothelial cells in the brain. These tight junctions prevent most substances from freely crossing from blood into brain tissue, protecting the brain from potentially harmful substances."
          },
          {
            question: "Cerebrospinal fluid is primarily produced by:",
            options: [
              "Arachnoid granulations",
              "Choroid plexus",
              "Ependymal cells",
              "Astrocytes"
            ],
            correct: 1,
            explanation: "Cerebrospinal fluid (CSF) is primarily produced by the choroid plexus, which is located in the ventricles of the brain. The choroid plexus consists of specialized ependymal cells that actively secrete CSF at a rate of about 500 mL per day."
          },
          {
            question: "Which type of glial cell is responsible for myelination in the central nervous system?",
            options: [
              "Astrocytes",
              "Microglia",
              "Oligodendrocytes",
              "Schwann cells"
            ],
            correct: 2,
            explanation: "Oligodendrocytes are responsible for myelination in the central nervous system. Each oligodendrocyte can myelinate multiple axons (up to 50), unlike Schwann cells in the peripheral nervous system, which myelinate only one axon segment each."
          }
        ]
      },
      pathology: {
        questions: [
          {
            question: "Which type of stroke is most common?",
            options: [
              "Hemorrhagic stroke",
              "Ischemic stroke",
              "Subarachnoid hemorrhage",
              "Transient ischemic attack"
            ],
            correct: 1,
            explanation: "Ischemic stroke accounts for approximately 85% of all strokes. It occurs when blood flow to part of the brain is blocked, usually by a blood clot (thrombotic) or embolism. Hemorrhagic strokes account for the remaining 15%."
          },
          {
            question: "Alzheimer's disease is characterized by the accumulation of:",
            options: [
              "Alpha-synuclein",
              "Tau protein and amyloid-beta plaques",
              "Huntingtin protein",
              "Prion protein"
            ],
            correct: 1,
            explanation: "Alzheimer's disease is characterized by the accumulation of tau protein (forming neurofibrillary tangles) and amyloid-beta plaques in the brain. These protein aggregates disrupt normal neuronal function and lead to progressive cognitive decline."
          },
          {
            question: "Parkinson's disease primarily affects which neurotransmitter system?",
            options: [
              "Cholinergic",
              "Dopaminergic",
              "Serotonergic",
              "GABAergic"
            ],
            correct: 1,
            explanation: "Parkinson's disease primarily affects the dopaminergic system, specifically the loss of dopamine-producing neurons in the substantia nigra. This leads to the characteristic motor symptoms: tremor, rigidity, bradykinesia, and postural instability."
          },
          {
            question: "Multiple sclerosis is characterized by:",
            options: [
              "Demyelination in the peripheral nervous system",
              "Demyelination in the central nervous system",
              "Neuronal loss in the hippocampus",
              "Vascular malformations"
            ],
            correct: 1,
            explanation: "Multiple sclerosis (MS) is an autoimmune disease characterized by demyelination in the central nervous system. The immune system attacks myelin sheaths, leading to inflammation, scarring (sclerosis), and disrupted nerve conduction."
          },
          {
            question: "Which condition is most commonly associated with berry aneurysms?",
            options: [
              "Hypertension",
              "Polycystic kidney disease",
              "Diabetes mellitus",
              "Atherosclerosis"
            ],
            correct: 1,
            explanation: "Berry (saccular) aneurysms are most commonly associated with polycystic kidney disease, occurring in 10-15% of patients with ADPKD. Other associations include connective tissue disorders, family history, and certain genetic conditions affecting vessel wall integrity."
          }
        ]
      }
    }
  },
  endocrine: {
    name: 'Endocrine System',
    description: 'Hormones, glands, and endocrine regulation mechanisms',
    overview: 'The endocrine system consists of glands that secrete hormones directly into the bloodstream to regulate various physiological processes. It works closely with the nervous system to maintain homeostasis, control metabolism, growth, reproduction, and stress responses.',
    keyTopics: [
      'Hypothalamic-pituitary axis',
      'Thyroid and parathyroid glands',
      'Adrenal glands',
      'Pancreatic islets',
      'Hormone synthesis and action',
      'Feedback mechanisms',
      'Diabetes mellitus',
      'Endocrine disorders'
    ],
    color: 'from-green-500 to-green-600',
    icon: Microscope,
    categories: ['anatomy', 'physiology', 'pathology'],
    modules: {
      anatomy: {
        questions: [
          {
            question: "The posterior pituitary gland stores and releases which hormones?",
            options: [
              "Growth hormone and prolactin",
              "ACTH and TSH",
              "ADH and oxytocin",
              "FSH and LH"
            ],
            correct: 2,
            explanation: "The posterior pituitary (neurohypophysis) stores and releases ADH (antidiuretic hormone/vasopressin) and oxytocin. These hormones are actually produced by neurons in the hypothalamus and transported down their axons to the posterior pituitary for storage and release."
          },
          {
            question: "Which cells in the pancreatic islets produce insulin?",
            options: [
              "Alpha cells",
              "Beta cells",
              "Delta cells",
              "PP cells"
            ],
            correct: 1,
            explanation: "Beta cells in the pancreatic islets of Langerhans produce insulin. These cells make up about 65-80% of the islet cells and are responsible for glucose homeostasis by secreting insulin in response to elevated blood glucose levels."
          },
          {
            question: "The adrenal medulla is derived from which embryological tissue?",
            options: [
              "Mesoderm",
              "Endoderm",
              "Neural crest",
              "Surface ectoderm"
            ],
            correct: 2,
            explanation: "The adrenal medulla is derived from neural crest cells, which explains why it functions as a modified sympathetic ganglion. It secretes catecholamines (epinephrine and norepinephrine) directly into the bloodstream rather than using synapses."
          },
          {
            question: "Which gland is located in the sella turcica of the sphenoid bone?",
            options: [
              "Pineal gland",
              "Thyroid gland",
              "Pituitary gland",
              "Parathyroid glands"
            ],
            correct: 2,
            explanation: "The pituitary gland is located in the sella turcica, a saddle-shaped depression in the sphenoid bone at the base of the skull. This bony structure protects the pituitary gland and is an important anatomical landmark in neurosurgery."
          },
          {
            question: "How many parathyroid glands are typically present in humans?",
            options: [
              "Two",
              "Three",
              "Four",
              "Six"
            ],
            correct: 2,
            explanation: "Humans typically have four parathyroid glands - two superior and two inferior glands located on the posterior surface of the thyroid gland. However, the number can vary from 2-6 glands, and their location can be variable, which is important during thyroid surgery."
          }
        ]
      },
      physiology: {
        questions: [
          {
            question: "Which hormone is the primary regulator of calcium homeostasis?",
            options: [
              "Calcitonin",
              "Parathyroid hormone (PTH)",
              "Vitamin D",
              "Growth hormone"
            ],
            correct: 1,
            explanation: "Parathyroid hormone (PTH) is the primary regulator of calcium homeostasis. It increases blood calcium by stimulating bone resorption, increasing renal calcium reabsorption, and promoting vitamin D activation, which increases intestinal calcium absorption."
          },
          {
            question: "Insulin resistance is primarily characterized by:",
            options: [
              "Decreased insulin production",
              "Increased insulin sensitivity",
              "Decreased cellular response to insulin",
              "Increased glucose production"
            ],
            correct: 2,
            explanation: "Insulin resistance is characterized by decreased cellular response to insulin, meaning cells require higher levels of insulin to achieve the same glucose uptake. This leads to compensatory hyperinsulinemia and eventually can progress to type 2 diabetes."
          },
          {
            question: "Which hormone stimulates the release of cortisol from the adrenal cortex?",
            options: [
              "CRH (Corticotropin-releasing hormone)",
              "ACTH (Adrenocorticotropic hormone)",
              "ADH (Antidiuretic hormone)",
              "TSH (Thyroid-stimulating hormone)"
            ],
            correct: 1,
            explanation: "ACTH (adrenocorticotropic hormone) from the anterior pituitary stimulates the release of cortisol from the zona fasciculata of the adrenal cortex. ACTH release is controlled by CRH from the hypothalamus in a classic hypothalamic-pituitary-adrenal axis."
          },
          {
            question: "The primary action of thyroid hormones (T3 and T4) is to:",
            options: [
              "Regulate blood glucose",
              "Control calcium levels",
              "Increase metabolic rate",
              "Stimulate growth hormone release"
            ],
            correct: 2,
            explanation: "The primary action of thyroid hormones (T3 and T4) is to increase metabolic rate. They affect virtually every cell in the body, increasing oxygen consumption, heat production, protein synthesis, and overall metabolic activity."
          },
          {
            question: "Which mechanism best describes how steroid hormones exert their effects?",
            options: [
              "Binding to cell surface receptors",
              "Activating second messenger systems",
              "Binding to intracellular receptors and affecting gene transcription",
              "Direct enzyme activation"
            ],
            correct: 2,
            explanation: "Steroid hormones are lipophilic and can cross cell membranes to bind to intracellular receptors. The hormone-receptor complex then acts as a transcription factor, binding to DNA and regulating gene expression, which leads to changes in protein synthesis."
          }
        ]
      },
      pathology: {
        questions: [
          {
            question: "Type 1 diabetes mellitus is primarily caused by:",
            options: [
              "Insulin resistance",
              "Autoimmune destruction of beta cells",
              "Obesity",
              "Genetic mutations in insulin receptors"
            ],
            correct: 1,
            explanation: "Type 1 diabetes mellitus is primarily caused by autoimmune destruction of pancreatic beta cells, leading to absolute insulin deficiency. This process is mediated by T-cells and associated with specific HLA types and autoantibodies against beta cell antigens."
          },
          {
            question: "Graves' disease is characterized by:",
            options: [
              "Hypothyroidism due to iodine deficiency",
              "Hyperthyroidism due to TSH-receptor antibodies",
              "Thyroid cancer",
              "Parathyroid adenoma"
            ],
            correct: 1,
            explanation: "Graves' disease is an autoimmune condition characterized by hyperthyroidism due to thyroid-stimulating immunoglobulins (TSI) that bind to and activate TSH receptors, leading to excessive thyroid hormone production, goiter, and sometimes ophthalmopathy."
          },
          {
            question: "Cushing's syndrome is most commonly caused by:",
            options: [
              "Pituitary adenoma secreting ACTH",
              "Adrenal adenoma",
              "Ectopic ACTH syndrome",
              "Exogenous corticosteroid administration"
            ],
            correct: 3,
            explanation: "Cushing's syndrome is most commonly caused by exogenous corticosteroid administration (iatrogenic). Among endogenous causes, pituitary adenomas secreting ACTH (Cushing's disease) are the most common, followed by adrenal causes and ectopic ACTH syndrome."
          },
          {
            question: "Primary hyperparathyroidism most commonly presents with:",
            options: [
              "Hypocalcemia and bone disease",
              "Hypercalcemia and kidney stones",
              "Normal calcium with elevated phosphate",
              "Hypocalcemia with tetany"
            ],
            correct: 1,
            explanation: "Primary hyperparathyroidism most commonly presents with hypercalcemia, which can lead to kidney stones, bone disease, peptic ulcers, and neuropsychiatric symptoms. The classic mnemonic is 'stones, bones, groans, and psychiatric moans.'"
          },
          {
            question: "Diabetic ketoacidosis (DKA) is characterized by:",
            options: [
              "Hyperglycemia, ketosis, and metabolic alkalosis",
              "Hyperglycemia, ketosis, and metabolic acidosis",
              "Hypoglycemia, ketosis, and metabolic acidosis",
              "Hyperglycemia, no ketosis, and normal pH"
            ],
            correct: 1,
            explanation: "Diabetic ketoacidosis (DKA) is characterized by the triad of hyperglycemia (>250 mg/dL), ketosis (ketones in blood/urine), and metabolic acidosis (pH <7.3, bicarbonate <15 mEq/L). It results from absolute or relative insulin deficiency."
          }
        ]
      }
    }
  },
  respiratory: {
    name: 'Respiratory System',
    description: 'Pulmonary anatomy, gas exchange, and respiratory diseases',
    overview: 'The respiratory system facilitates gas exchange between the atmosphere and blood, providing oxygen for cellular metabolism and removing carbon dioxide. It includes the conducting airways and respiratory zones, working in coordination with the cardiovascular system.',
    keyTopics: [
      'Airway anatomy',
      'Alveolar structure',
      'Ventilation mechanics',
      'Gas exchange',
      'Respiratory control',
      'Lung volumes and capacities',
      'Respiratory diseases',
      'Acid-base balance'
    ],
    color: 'from-blue-500 to-blue-600',
    icon: Lungs,
    categories: ['anatomy', 'physiology', 'pathology'],
    modules: {
      anatomy: {
        questions: [
          {
            question: "At which vertebral level does the trachea bifurcate into the main bronchi?",
            options: [
              "T3",
              "T4-T5",
              "T6-T7",
              "T8-T9"
            ],
            correct: 1,
            explanation: "The trachea bifurcates at the carina at the level of T4-T5 vertebrae (sternal angle). This is an important anatomical landmark for bronchoscopy and understanding the path of aspirated foreign bodies."
          },
          {
            question: "Which cells produce surfactant in the alveoli?",
            options: [
              "Type I pneumocytes",
              "Type II pneumocytes",
              "Alveolar macrophages",
              "Clara cells"
            ],
            correct: 1,
            explanation: "Type II pneumocytes produce surfactant, a phospholipid-protein complex that reduces surface tension in the alveoli, preventing alveolar collapse during expiration. Type I pneumocytes are involved in gas exchange."
          },
          {
            question: "The right main bronchus is more vertical than the left because:",
            options: [
              "The heart displaces the left bronchus",
              "The right lung is larger",
              "Anatomical asymmetry due to cardiac position",
              "The aortic arch crosses over the left bronchus"
            ],
            correct: 2,
            explanation: "The right main bronchus is shorter, wider, and more vertical than the left due to anatomical asymmetry caused by the heart's position. This makes the right bronchus more likely to receive aspirated foreign bodies."
          },
          {
            question: "How many lobes does the right lung have?",
            options: [
              "Two",
              "Three",
              "Four",
              "Five"
            ],
            correct: 1,
            explanation: "The right lung has three lobes: upper, middle, and lower, separated by the horizontal and oblique fissures. The left lung has only two lobes (upper and lower) due to the cardiac notch."
          },
          {
            question: "The phrenic nerve innervates the diaphragm and originates from which spinal segments?",
            options: [
              "C1-C3",
              "C3-C5",
              "C5-C7",
              "T1-T3"
            ],
            correct: 1,
            explanation: "The phrenic nerve originates from C3-C5 spinal segments ('C3, 4, 5 keep the diaphragm alive'). It provides motor innervation to the diaphragm and sensory innervation to the central diaphragm, pericardium, and pleura."
          }
        ]
      },
      physiology: {
        questions: [
          {
            question: "What is the normal tidal volume in a healthy adult?",
            options: [
              "350 mL",
              "500 mL",
              "750 mL",
              "1000 mL"
            ],
            correct: 1,
            explanation: "Normal tidal volume is approximately 500 mL (about 7 mL/kg body weight) in a healthy adult at rest. This represents the volume of air inhaled and exhaled during normal quiet breathing."
          },
          {
            question: "The primary drive for breathing in healthy individuals is:",
            options: [
              "Oxygen levels",
              "Carbon dioxide levels",
              "pH levels",
              "Blood pressure"
            ],
            correct: 1,
            explanation: "The primary drive for breathing in healthy individuals is CO2 levels (detected as H+ concentration by central chemoreceptors in the medulla). Hypoxic drive becomes important only when PaO2 falls below 60 mmHg."
          },
          {
            question: "Surfactant deficiency would result in:",
            options: [
              "Increased lung compliance",
              "Decreased surface tension",
              "Alveolar collapse",
              "Improved gas exchange"
            ],
            correct: 2,
            explanation: "Surfactant deficiency results in increased surface tension, leading to alveolar collapse (atelectasis), decreased lung compliance, and impaired gas exchange. This is seen in respiratory distress syndrome of newborns."
          },
          {
            question: "The oxygen-hemoglobin dissociation curve shifts to the right with:",
            options: [
              "Decreased temperature",
              "Increased pH",
              "Decreased 2,3-DPG",
              "Increased CO2"
            ],
            correct: 3,
            explanation: "The oxygen-hemoglobin dissociation curve shifts to the right (decreased oxygen affinity) with increased CO2, decreased pH, increased temperature, and increased 2,3-DPG. This facilitates oxygen unloading in tissues."
          },
          {
            question: "Dead space ventilation refers to:",
            options: [
              "Ventilation of non-perfused alveoli",
              "Ventilation of conducting airways",
              "Both anatomical and alveolar dead space",
              "Ventilation during expiration"
            ],
            correct: 2,
            explanation: "Dead space ventilation includes both anatomical dead space (conducting airways that don't participate in gas exchange) and alveolar dead space (alveoli that are ventilated but not perfused). Total dead space is normally about 150 mL."
          }
        ]
      },
      pathology: {
        questions: [
          {
            question: "Chronic obstructive pulmonary disease (COPD) is characterized by:",
            options: [
              "Reversible airway obstruction",
              "Irreversible airway obstruction",
              "Restrictive lung disease",
              "Pulmonary hypertension only"
            ],
            correct: 1,
            explanation: "COPD is characterized by irreversible airway obstruction due to chronic bronchitis and/or emphysema. Unlike asthma, the airway obstruction in COPD is not fully reversible with bronchodilators."
          },
          {
            question: "Asthma exacerbations are primarily caused by:",
            options: [
              "Alveolar destruction",
              "Bronchial smooth muscle constriction and inflammation",
              "Pulmonary embolism",
              "Pleural effusion"
            ],
            correct: 1,
            explanation: "Asthma exacerbations are caused by bronchial smooth muscle constriction, airway inflammation, and increased mucus production. This leads to reversible airway obstruction and characteristic wheezing."
          },
          {
            question: "Pneumonia most commonly affects which part of the respiratory system?",
            options: [
              "Upper respiratory tract",
              "Conducting airways",
              "Alveoli and surrounding tissue",
              "Pleural space"
            ],
            correct: 2,
            explanation: "Pneumonia is an infection that primarily affects the alveoli and surrounding lung tissue (parenchyma). It can be caused by bacteria, viruses, fungi, or other pathogens, leading to inflammation and fluid accumulation in alveoli."
          },
          {
            question: "Pulmonary embolism most commonly originates from:",
            options: [
              "Right heart",
              "Left heart",
              "Deep veins of the legs",
              "Pulmonary arteries"
            ],
            correct: 2,
            explanation: "Pulmonary embolism most commonly originates from deep vein thrombosis (DVT) in the legs. The clot travels through the venous system, right heart, and lodges in pulmonary arteries, causing ventilation-perfusion mismatch."
          },
          {
            question: "Respiratory distress syndrome in newborns is primarily due to:",
            options: [
              "Immature respiratory muscles",
              "Surfactant deficiency",
              "Congenital heart disease",
              "Airway malformation"
            ],
            correct: 1,
            explanation: "Neonatal respiratory distress syndrome (RDS) is primarily due to surfactant deficiency in premature infants. Immature type II pneumocytes produce insufficient surfactant, leading to alveolar collapse and respiratory failure."
          }
        ]
      }
    }
  },
  gastrointestinal: {
    name: 'Gastrointestinal System',
    description: 'Digestive system anatomy, physiology, and GI disorders',
    overview: 'The gastrointestinal system is responsible for digestion, absorption of nutrients, and elimination of waste. It includes the alimentary canal and accessory organs, working together to break down food and absorb essential nutrients.',
    keyTopics: [
      'GI tract anatomy',
      'Digestive enzymes',
      'Absorption mechanisms',
      'Liver function',
      'Pancreatic function',
      'GI hormones',
      'Peptic ulcer disease',
      'Inflammatory bowel disease'
    ],
    color: 'from-orange-500 to-orange-600',
    icon: Stomach,
    categories: ['anatomy', 'physiology', 'pathology'],
    modules: {
      anatomy: {
        questions: [
          {
            question: "Which part of the small intestine is the primary site for vitamin B12 absorption?",
            options: [
              "Duodenum",
              "Jejunum",
              "Ileum",
              "Cecum"
            ],
            correct: 2,
            explanation: "The terminal ileum is the primary site for vitamin B12 absorption. B12 binds to intrinsic factor (produced by gastric parietal cells) and this complex is absorbed via specific receptors in the terminal ileum."
          },
          {
            question: "The hepatic portal vein is formed by the confluence of which two veins?",
            options: [
              "Superior and inferior mesenteric veins",
              "Splenic and superior mesenteric veins",
              "Splenic and inferior mesenteric veins",
              "Superior mesenteric and gastric veins"
            ],
            correct: 1,
            explanation: "The hepatic portal vein is formed by the confluence of the splenic vein and superior mesenteric vein behind the neck of the pancreas. It carries nutrient-rich blood from the GI tract to the liver for processing."
          },
          {
            question: "Which cells in the stomach produce hydrochloric acid?",
            options: [
              "Chief cells",
              "Parietal cells",
              "G cells",
              "Mucous cells"
            ],
            correct: 1,
            explanation: "Parietal cells (oxyntic cells) in the gastric glands produce hydrochloric acid and intrinsic factor. They are located mainly in the fundus and body of the stomach and are stimulated by gastrin, acetylcholine, and histamine."
          },
          {
            question: "The ampulla of Vater is the opening of:",
            options: [
              "The cystic duct into the gallbladder",
              "The common bile duct and pancreatic duct into the duodenum",
              "The pyloric sphincter",
              "The ileocecal valve"
            ],
            correct: 1,
            explanation: "The ampulla of Vater (hepatopancreatic ampulla) is where the common bile duct and main pancreatic duct join and empty into the second part of the duodenum. It is surrounded by the sphincter of Oddi."
          },
          {
            question: "Which structure marks the transition from the foregut to the midgut?",
            options: [
              "Gastroesophageal junction",
              "Pyloric sphincter",
              "Ampulla of Vater",
              "Ileocecal valve"
            ],
            correct: 2,
            explanation: "The ampulla of Vater marks the embryological transition from foregut to midgut. The foregut includes esophagus, stomach, and proximal duodenum, while the midgut includes the rest of the small intestine and proximal colon."
          }
        ]
      },
      physiology: {
        questions: [
          {
            question: "Which hormone stimulates gastric acid secretion?",
            options: [
              "Secretin",
              "Cholecystokinin (CCK)",
              "Gastrin",
              "Somatostatin"
            ],
            correct: 2,
            explanation: "Gastrin, produced by G cells in the gastric antrum and duodenum, stimulates gastric acid secretion by parietal cells. It is released in response to protein in the stomach and is part of the gastric phase of digestion."
          },
          {
            question: "The primary function of bile salts is to:",
            options: [
              "Neutralize stomach acid",
              "Emulsify fats",
              "Activate pancreatic enzymes",
              "Stimulate peristalsis"
            ],
            correct: 1,
            explanation: "Bile salts emulsify fats, breaking large fat globules into smaller droplets to increase surface area for lipase action. This is essential for fat digestion and absorption in the small intestine."
          },
          {
            question: "Which pancreatic enzyme is responsible for protein digestion?",
            options: [
              "Amylase",
              "Lipase",
              "Trypsin",
              "Chymotrypsin"
            ],
            correct: 2,
            explanation: "Trypsin is a pancreatic protease that cleaves proteins at basic amino acids (lysine and arginine). It is secreted as inactive trypsinogen and activated by enterokinase in the duodenum. Chymotrypsin is also correct but trypsin is the primary activator."
          },
          {
            question: "Iron absorption primarily occurs in which part of the GI tract?",
            options: [
              "Stomach",
              "Duodenum and proximal jejunum",
              "Ileum",
              "Colon"
            ],
            correct: 1,
            explanation: "Iron absorption primarily occurs in the duodenum and proximal jejunum. The acidic environment helps convert ferric iron (Fe3+) to the more absorbable ferrous form (Fe2+). Heme iron from meat is more readily absorbed than non-heme iron from plants."
          },
          {
            question: "Which phase of gastric secretion is mediated by the vagus nerve?",
            options: [
              "Cephalic phase",
              "Gastric phase",
              "Intestinal phase",
              "Interdigestive phase"
            ],
            correct: 0,
            explanation: "The cephalic phase of gastric secretion is mediated by the vagus nerve in response to the sight, smell, taste, or thought of food. This accounts for about 30% of total gastric acid secretion and prepares the stomach for incoming food."
          }
        ]
      },
      pathology: {
        questions: [
          {
            question: "Helicobacter pylori infection is most strongly associated with:",
            options: [
              "Gastroesophageal reflux disease",
              "Peptic ulcer disease",
              "Inflammatory bowel disease",
              "Irritable bowel syndrome"
            ],
            correct: 1,
            explanation: "H. pylori infection is strongly associated with peptic ulcer disease, causing about 90% of duodenal ulcers and 70% of gastric ulcers. It also increases the risk of gastric adenocarcinoma and MALT lymphoma."
          },
          {
            question: "Crohn's disease differs from ulcerative colitis in that it:",
            options: [
              "Only affects the colon",
              "Causes continuous inflammation",
              "Can affect any part of the GI tract",
              "Never involves the rectum"
            ],
            correct: 2,
            explanation: "Crohn's disease can affect any part of the GI tract from mouth to anus, shows skip lesions (discontinuous inflammation), and involves all layers of the bowel wall (transmural). Ulcerative colitis is limited to the colon and rectum with continuous inflammation."
          },
          {
            question: "Celiac disease is characterized by:",
            options: [
              "Lactose intolerance",
              "Gluten sensitivity causing villous atrophy",
              "Pancreatic enzyme deficiency",
              "Bacterial overgrowth"
            ],
            correct: 1,
            explanation: "Celiac disease is an autoimmune condition triggered by gluten ingestion in genetically susceptible individuals. It causes villous atrophy in the small intestine, leading to malabsorption and is associated with HLA-DQ2 and HLA-DQ8."
          },
          {
            question: "Hepatitis B is primarily transmitted through:",
            options: [
              "Fecal-oral route",
              "Respiratory droplets",
              "Blood and body fluids",
              "Contaminated water"
            ],
            correct: 2,
            explanation: "Hepatitis B is primarily transmitted through blood and body fluids (parenteral transmission), including sexual contact, needle sharing, and mother-to-child transmission. Unlike hepatitis A and E, it is not transmitted via the fecal-oral route."
          },
          {
            question: "The most common cause of acute pancreatitis is:",
            options: [
              "Alcohol abuse",
              "Gallstones",
              "Hypertriglyceridemia",
              "Medications"
            ],
            correct: 1,
            explanation: "Gallstones are the most common cause of acute pancreatitis (40-50% of cases), followed by alcohol abuse (25-35%). Gallstones can obstruct the pancreatic duct at the ampulla of Vater, causing pancreatic enzyme activation and inflammation."
          }
        ]
      }
    }
  },
  renal: {
    name: 'Renal System',
    description: 'Kidney structure, function, and renal pathology',
    overview: 'The renal system maintains fluid and electrolyte balance, regulates blood pressure, and eliminates metabolic waste products. The kidneys also produce hormones and play a crucial role in acid-base homeostasis.',
    keyTopics: [
      'Nephron anatomy',
      'Glomerular filtration',
      'Tubular function',
      'Acid-base regulation',
      'Fluid and electrolyte balance',
      'Renal hormones',
      'Acute kidney injury',
      'Chronic kidney disease'
    ],
    color: 'from-yellow-500 to-yellow-600',
    icon: Kidney,
    categories: ['anatomy', 'physiology', 'pathology'],
    modules: {
      anatomy: {
        questions: [
          {
            question: "Which part of the nephron is impermeable to water?",
            options: [
              "Proximal convoluted tubule",
              "Descending limb of loop of Henle",
              "Ascending limb of loop of Henle",
              "Collecting duct"
            ],
            correct: 2,
            explanation: "The ascending limb of the loop of Henle is impermeable to water but actively transports sodium, potassium, and chloride. This creates the concentration gradient necessary for urine concentration and is the site of action for loop diuretics."
          },
          {
            question: "The juxtaglomerular apparatus consists of:",
            options: [
              "Glomerulus and Bowman's capsule",
              "Macula densa, juxtaglomerular cells, and extraglomerular mesangial cells",
              "Proximal and distal convoluted tubules",
              "Afferent and efferent arterioles"
            ],
            correct: 1,
            explanation: "The juxtaglomerular apparatus consists of the macula densa (specialized cells in the distal convoluted tubule), juxtaglomerular cells (in the afferent arteriole), and extraglomerular mesangial cells. It regulates blood pressure through renin secretion."
          },
          {
            question: "Which cells line the glomerular capillaries?",
            options: [
              "Podocytes",
              "Mesangial cells",
              "Endothelial cells",
              "Epithelial cells"
            ],
            correct: 2,
            explanation: "Fenestrated endothelial cells line the glomerular capillaries. The glomerular filtration barrier consists of three layers: fenestrated endothelium, glomerular basement membrane, and podocyte foot processes with filtration slits."
          },
          {
            question: "The renal corpuscle consists of:",
            options: [
              "Glomerulus and proximal tubule",
              "Glomerulus and Bowman's capsule",
              "Bowman's capsule and distal tubule",
              "Loop of Henle and collecting duct"
            ],
            correct: 1,
            explanation: "The renal corpuscle consists of the glomerulus (cluster of capillaries) surrounded by Bowman's capsule (Bowman's space). This is where ultrafiltration occurs, forming the initial filtrate that will become urine."
          },
          {
            question: "Which structure connects the renal pelvis to the bladder?",
            options: [
              "Urethra",
              "Ureter",
              "Renal artery",
              "Collecting duct"
            ],
            correct: 1,
            explanation: "The ureter connects the renal pelvis to the bladder. Each kidney has one ureter that carries urine from the kidney to the bladder via peristaltic contractions. The ureters enter the bladder at the ureteral orifices."
          }
        ]
      },
      physiology: {
        questions: [
          {
            question: "What is the normal glomerular filtration rate (GFR) in healthy adults?",
            options: [
              "60-80 mL/min/1.73m²",
              "90-120 mL/min/1.73m²",
              "120-150 mL/min/1.73m²",
              "150-180 mL/min/1.73m²"
            ],
            correct: 1,
            explanation: "The normal GFR in healthy adults is 90-120 mL/min/1.73m². GFR declines with age and is used to assess kidney function. A GFR below 60 mL/min/1.73m² for 3 months indicates chronic kidney disease."
          },
          {
            question: "Which hormone regulates water reabsorption in the collecting duct?",
            options: [
              "Aldosterone",
              "Antidiuretic hormone (ADH)",
              "Parathyroid hormone",
              "Atrial natriuretic peptide"
            ],
            correct: 1,
            explanation: "ADH (vasopressin) regulates water reabsorption in the collecting duct by increasing the number of aquaporin-2 water channels. High ADH levels lead to concentrated urine, while low ADH levels result in dilute urine."
          },
          {
            question: "The majority of sodium reabsorption occurs in which part of the nephron?",
            options: [
              "Glomerulus",
              "Proximal convoluted tubule",
              "Loop of Henle",
              "Distal convoluted tubule"
            ],
            correct: 1,
            explanation: "About 65-70% of filtered sodium is reabsorbed in the proximal convoluted tubule, along with water and other solutes. This is an energy-dependent process driven by the Na+/K+-ATPase pump on the basolateral membrane."
          },
          {
            question: "Which substance is used as a marker for glomerular filtration rate because it is freely filtered but not reabsorbed or secreted?",
            options: [
              "Urea",
              "Creatinine",
              "Inulin",
              "Glucose"
            ],
            correct: 2,
            explanation: "Inulin is the gold standard marker for GFR because it is freely filtered at the glomerulus but is neither reabsorbed nor secreted by the tubules. Creatinine is commonly used clinically as an approximation, though it is slightly secreted."
          },
          {
            question: "The renin-angiotensin-aldosterone system is activated by:",
            options: [
              "High blood pressure",
              "High sodium levels",
              "Low blood pressure and low sodium",
              "High potassium levels"
            ],
            correct: 2,
            explanation: "The RAAS is activated by low blood pressure, low sodium levels, or sympathetic stimulation. Juxtaglomerular cells release renin, which leads to angiotensin II formation and aldosterone release, increasing blood pressure and sodium retention."
          }
        ]
      },
      pathology: {
        questions: [
          {
            question: "Acute kidney injury is most commonly caused by:",
            options: [
              "Glomerulonephritis",
              "Prerenal causes (hypoperfusion)",
              "Intrinsic renal disease",
              "Postrenal obstruction"
            ],
            correct: 1,
            explanation: "Prerenal causes (hypoperfusion) account for about 70% of acute kidney injury cases. This includes dehydration, heart failure, sepsis, and medications that reduce renal perfusion. It's potentially reversible if the underlying cause is corrected promptly."
          },
          {
            question: "Diabetic nephropathy is characterized by:",
            options: [
              "Acute tubular necrosis",
              "Glomerulosclerosis and proteinuria",
              "Interstitial nephritis",
              "Renal artery stenosis"
            ],
            correct: 1,
            explanation: "Diabetic nephropathy is characterized by glomerulosclerosis (including nodular Kimmelstiel-Wilson lesions), thickening of the glomerular basement membrane, and progressive proteinuria. It's the leading cause of end-stage renal disease."
          },
          {
            question: "Which type of kidney stone is most common?",
            options: [
              "Uric acid stones",
              "Calcium oxalate stones",
              "Struvite stones",
              "Cystine stones"
            ],
            correct: 1,
            explanation: "Calcium oxalate stones are the most common type, accounting for about 80% of kidney stones. They are radiopaque and associated with hypercalciuria, hyperoxaluria, hypocitraturia, and low urine volume."
          },
          {
            question: "Polycystic kidney disease (autosomal dominant) is associated with:",
            options: [
              "Renal cell carcinoma",
              "Berry aneurysms",
              "Wilms tumor",
              "Renal artery stenosis"
            ],
            correct: 1,
            explanation: "Autosomal dominant polycystic kidney disease (ADPKD) is associated with berry aneurysms in about 10-15% of patients. Other extrarenal manifestations include liver cysts, mitral valve prolapse, and colonic diverticula."
          },
          {
            question: "Goodpasture syndrome affects which organs?",
            options: [
              "Kidneys only",
              "Lungs only",
              "Kidneys and lungs",
              "Kidneys and liver"
            ],
            correct: 2,
            explanation: "Goodpasture syndrome (anti-GBM disease) affects both kidneys and lungs due to antibodies against type IV collagen in basement membranes. It presents with rapidly progressive glomerulonephritis and pulmonary hemorrhage."
          }
        ]
      }
    }
  },
  reproductive: {
    name: 'Reproductive System',
    description: 'Male and female reproductive anatomy, physiology, and pathology',
    overview: 'The reproductive system is responsible for sexual development, gamete production, fertilization, and pregnancy. It includes both male and female reproductive organs and is regulated by complex hormonal interactions.',
    keyTopics: [
      'Male reproductive anatomy',
      'Female reproductive anatomy',
      'Menstrual cycle',
      'Spermatogenesis',
      'Oogenesis',
      'Pregnancy and development',
      'Reproductive hormones',
      'Reproductive disorders'
    ],
    color: 'from-pink-500 to-pink-600',
    icon: Baby,
    categories: ['anatomy', 'physiology', 'pathology'],
    modules: {
      anatomy: {
        questions: [
          {
            question: "Which structure produces testosterone in males?",
            options: [
              "Sertoli cells",
              "Leydig cells",
              "Spermatogonia",
              "Epididymis"
            ],
            correct: 1,
            explanation: "Leydig cells (interstitial cells) in the testes produce testosterone in response to luteinizing hormone (LH) from the anterior pituitary. These cells are located in the interstitial tissue between the seminiferous tubules."
          },
          {
            question: "The fallopian tubes are lined with which type of epithelium?",
            options: [
              "Simple squamous",
              "Stratified squamous",
              "Ciliated columnar",
              "Transitional"
            ],
            correct: 2,
            explanation: "The fallopian tubes are lined with ciliated columnar epithelium. The cilia help transport the ovum from the ovary toward the uterus, and fertilization typically occurs in the ampulla of the fallopian tube."
          },
          {
            question: "Which structure in the female reproductive system is the site of implantation?",
            options: [
              "Ovary",
              "Fallopian tube",
              "Endometrium of uterus",
              "Cervix"
            ],
            correct: 2,
            explanation: "The endometrium (inner lining of the uterus) is the site of implantation. The blastocyst implants into the endometrium about 6-7 days after fertilization, typically in the fundus or upper body of the uterus."
          },
          {
            question: "Spermatogenesis occurs in which part of the male reproductive system?",
            options: [
              "Epididymis",
              "Vas deferens",
              "Seminiferous tubules",
              "Prostate gland"
            ],
            correct: 2,
            explanation: "Spermatogenesis occurs in the seminiferous tubules of the testes. This process takes approximately 74 days and involves mitotic divisions, meiosis, and differentiation of spermatogonia into mature spermatozoa."
          },
          {
            question: "The corpus luteum is formed from:",
            options: [
              "The follicle after ovulation",
              "The endometrium",
              "The cervical mucus",
              "The fallopian tube"
            ],
            correct: 0,
            explanation: "The corpus luteum is formed from the follicle after ovulation. It secretes progesterone and estrogen to maintain the endometrium. If pregnancy doesn't occur, it degenerates into the corpus albicans."
          }
        ]
      },
      physiology: {
        questions: [
          {
            question: "Which hormone triggers ovulation?",
            options: [
              "Follicle-stimulating hormone (FSH)",
              "Luteinizing hormone (LH)",
              "Estrogen",
              "Progesterone"
            ],
            correct: 1,
            explanation: "The LH surge triggers ovulation around day 14 of a 28-day menstrual cycle. This surge causes the mature follicle to rupture and release the ovum, and subsequently forms the corpus luteum."
          },
          {
            question: "During which phase of the menstrual cycle does the endometrium thicken?",
            options: [
              "Menstrual phase",
              "Follicular phase",
              "Ovulatory phase",
              "Luteal phase"
            ],
            correct: 3,
            explanation: "During the luteal phase (secretory phase), the endometrium thickens under the influence of progesterone from the corpus luteum. This prepares the uterus for potential implantation of a fertilized ovum."
          },
          {
            question: "Sertoli cells in the testes function to:",
            options: [
              "Produce testosterone",
              "Support and nourish developing sperm",
              "Produce LH",
              "Store mature sperm"
            ],
            correct: 1,
            explanation: "Sertoli cells support and nourish developing sperm cells during spermatogenesis. They also form the blood-testis barrier, secrete inhibin and activin, and respond to FSH stimulation."
          },
          {
            question: "Human chorionic gonadotropin (hCG) is produced by:",
            options: [
              "The corpus luteum",
              "The placenta",
              "The pituitary gland",
              "The endometrium"
            ],
            correct: 1,
            explanation: "hCG is produced by the syncytiotrophoblast of the placenta. It maintains the corpus luteum during early pregnancy, ensuring continued progesterone production until the placenta can take over hormone production."
          },
          {
            question: "The normal duration of human pregnancy is:",
            options: [
              "38 weeks from conception",
              "40 weeks from last menstrual period",
              "42 weeks from conception",
              "Both A and B"
            ],
            correct: 3,
            explanation: "Normal pregnancy duration is 38 weeks from conception or 40 weeks from the last menstrual period (280 days). These are equivalent because ovulation typically occurs 2 weeks after the last menstrual period."
          }
        ]
      },
      pathology: {
        questions: [
          {
            question: "Polycystic ovary syndrome (PCOS) is characterized by:",
            options: [
              "Hyperandrogenism and irregular ovulation",
              "Hypoestrogenism",
              "Premature ovarian failure",
              "Excessive FSH production"
            ],
            correct: 0,
            explanation: "PCOS is characterized by hyperandrogenism, irregular ovulation or anovulation, and polycystic ovaries. It's associated with insulin resistance, metabolic syndrome, and increased risk of diabetes and cardiovascular disease."
          },
          {
            question: "Endometriosis is defined as:",
            options: [
              "Infection of the endometrium",
              "Endometrial tissue outside the uterus",
              "Thickening of the endometrium",
              "Cancer of the endometrium"
            ],
            correct: 1,
            explanation: "Endometriosis is the presence of endometrial tissue outside the uterus, commonly in the pelvis. This ectopic tissue responds to hormonal changes, causing cyclical pain, inflammation, and potentially infertility."
          },
          {
            question: "The most common cause of male infertility is:",
            options: [
              "Hormonal disorders",
              "Varicocele",
              "Cryptorchidism",
              "Ejaculatory dysfunction"
            ],
            correct: 1,
            explanation: "Varicocele (enlarged veins in the scrotum) is the most common correctable cause of male infertility, found in about 40% of men with primary infertility. It can impair sperm production and quality due to increased testicular temperature."
          },
          {
            question: "Preeclampsia is characterized by:",
            options: [
              "Hypertension and proteinuria after 20 weeks gestation",
              "Diabetes during pregnancy",
              "Bleeding in early pregnancy",
              "Premature rupture of membranes"
            ],
            correct: 0,
            explanation: "Preeclampsia is characterized by new-onset hypertension (≥140/90 mmHg) and proteinuria (≥300 mg/24 hours) after 20 weeks of gestation. It can progress to eclampsia (seizures) and is a leading cause of maternal and fetal morbidity."
          },
          {
            question: "Benign prostatic hyperplasia (BPH) most commonly affects which zone of the prostate?",
            options: [
              "Peripheral zone",
              "Central zone",
              "Transition zone",
              "Anterior zone"
            ],
            correct: 2,
            explanation: "BPH most commonly affects the transition zone of the prostate, which surrounds the urethra. This explains why BPH causes urinary symptoms, while prostate cancer typically occurs in the peripheral zone."
          }
        ]
      }
    }
  },
  musculoskeletal: {
    name: 'Musculoskeletal System',
    description: 'Bones, muscles, joints, and musculoskeletal disorders',
    overview: 'The musculoskeletal system provides structural support, enables movement, protects internal organs, and serves as a reservoir for minerals. It includes bones, muscles, joints, ligaments, and tendons working together for locomotion and stability.',
    keyTopics: [
      'Bone structure and development',
      'Muscle types and contraction',
      'Joint classification',
      'Fracture healing',
      'Calcium homeostasis',
      'Muscle metabolism',
      'Arthritis and joint diseases',
      'Bone diseases'
    ],
    color: 'from-gray-500 to-gray-600',
    icon: Bone,
    categories: ['anatomy', 'physiology', 'pathology'],
    modules: {
      anatomy: {
        questions: [
          {
            question: "Which type of bone cell is responsible for bone resorption?",
            options: [
              "Osteoblasts",
              "Osteocytes",
              "Osteoclasts",
              "Chondrocytes"
            ],
            correct: 2,
            explanation: "Osteoclasts are multinucleated cells responsible for bone resorption. They secrete acids and enzymes that dissolve bone matrix, playing a crucial role in bone remodeling, calcium homeostasis, and fracture repair."
          },
          {
            question: "The functional unit of skeletal muscle is:",
            options: [
              "Myofibril",
              "Sarcomere",
              "Muscle fiber",
              "Motor unit"
            ],
            correct: 1,
            explanation: "The sarcomere is the functional unit of skeletal muscle, extending from one Z-line to the next. It contains actin and myosin filaments that slide past each other during muscle contraction according to the sliding filament theory."
          },
          {
            question: "Which joint allows the greatest range of motion?",
            options: [
              "Hinge joint",
              "Pivot joint",
              "Ball and socket joint",
              "Saddle joint"
            ],
            correct: 2,
            explanation: "Ball and socket joints (like the shoulder and hip) allow the greatest range of motion, permitting movement in all planes: flexion/extension, abduction/adduction, and rotation. The spherical head fits into a cup-shaped socket."
          },
          {
            question: "The growth plate (epiphyseal plate) is composed of:",
            options: [
              "Compact bone",
              "Spongy bone",
              "Hyaline cartilage",
              "Fibrocartilage"
            ],
            correct: 2,
            explanation: "The growth plate is composed of hyaline cartilage organized into distinct zones. Chondrocytes proliferate, mature, and undergo endochondral ossification, allowing longitudinal bone growth until skeletal maturity."
          },
          {
            question: "Which muscle protein contains the binding site for calcium?",
            options: [
              "Actin",
              "Myosin",
              "Troponin",
              "Tropomyosin"
            ],
            correct: 2,
            explanation: "Troponin C contains the binding site for calcium in skeletal muscle. When calcium binds to troponin C, it causes a conformational change that moves tropomyosin away from myosin-binding sites on actin, allowing muscle contraction."
          }
        ]
      },
      physiology: {
        questions: [
          {
            question: "Muscle contraction is initiated by the release of calcium from:",
            options: [
              "Mitochondria",
              "Sarcoplasmic reticulum",
              "T-tubules",
              "Sarcolemma"
            ],
            correct: 1,
            explanation: "Muscle contraction is initiated by calcium release from the sarcoplasmic reticulum. The action potential travels down T-tubules, triggering calcium release, which then binds to troponin to initiate the cross-bridge cycle."
          },
          {
            question: "Which energy system provides immediate energy for muscle contraction?",
            options: [
              "Aerobic glycolysis",
              "Anaerobic glycolysis",
              "Phosphocreatine system",
              "Fat oxidation"
            ],
            correct: 2,
            explanation: "The phosphocreatine (PCr) system provides immediate energy for muscle contraction during the first 10-15 seconds of high-intensity exercise. PCr donates its phosphate group to ADP to rapidly regenerate ATP."
          },
          {
            question: "Bone remodeling is regulated by which hormone that increases bone resorption?",
            options: [
              "Calcitonin",
              "Parathyroid hormone (PTH)",
              "Growth hormone",
              "Insulin"
            ],
            correct: 1,
            explanation: "PTH increases bone resorption by stimulating osteoclast activity, either directly or indirectly through osteoblasts. This releases calcium from bone into the blood, helping maintain calcium homeostasis."
          },
          {
            question: "Type I muscle fibers are characterized by:",
            options: [
              "Fast contraction and high power",
              "Slow contraction and high endurance",
              "Fast contraction and high endurance",
              "Slow contraction and high power"
            ],
            correct: 1,
            explanation: "Type I (slow-twitch) muscle fibers are characterized by slow contraction speed, high oxidative capacity, high endurance, and resistance to fatigue. They are rich in mitochondria and myoglobin, appearing red in color."
          },
          {
            question: "The sliding filament theory explains muscle contraction through:",
            options: [
              "Shortening of actin and myosin filaments",
              "Sliding of actin and myosin filaments past each other",
              "Fusion of actin and myosin filaments",
              "Rotation of actin and myosin filaments"
            ],
            correct: 1,
            explanation: "The sliding filament theory explains that muscle contraction occurs when actin and myosin filaments slide past each other without changing their individual lengths. Cross-bridge cycling between myosin heads and actin generates the force."
          }
        ]
      },
      pathology: {
        questions: [
          {
            question: "Osteoporosis is characterized by:",
            options: [
              "Increased bone density",
              "Decreased bone density and increased fracture risk",
              "Bone infection",
              "Bone cancer"
            ],
            correct: 1,
            explanation: "Osteoporosis is characterized by decreased bone mineral density and deterioration of bone microarchitecture, leading to increased bone fragility and fracture risk. It commonly affects postmenopausal women due to estrogen deficiency."
          },
          {
            question: "Rheumatoid arthritis is:",
            options: [
              "A degenerative joint disease",
              "An autoimmune inflammatory joint disease",
              "A metabolic bone disease",
              "An infectious joint disease"
            ],
            correct: 1,
            explanation: "Rheumatoid arthritis is a chronic autoimmune inflammatory disease that primarily affects synovial joints. It involves immune system attack on joint tissues, causing inflammation, pain, stiffness, and potential joint destruction."
          },
          {
            question: "Duchenne muscular dystrophy is caused by mutations in the gene encoding:",
            options: [
              "Myosin",
              "Actin",
              "Dystrophin",
              "Troponin"
            ],
            correct: 2,
            explanation: "Duchenne muscular dystrophy is caused by mutations in the dystrophin gene on the X chromosome. Dystrophin is a protein that helps maintain muscle fiber integrity, and its absence leads to progressive muscle weakness and degeneration."
          },
          {
            question: "Osteoarthritis primarily affects:",
            options: [
              "Synovial membrane",
              "Articular cartilage",
              "Joint capsule",
              "Ligaments"
            ],
            correct: 1,
            explanation: "Osteoarthritis primarily affects articular cartilage, causing its breakdown and loss. This leads to joint space narrowing, bone-on-bone contact, osteophyte formation, and pain. It's the most common form of arthritis."
          },
          {
            question: "A greenstick fracture is:",
            options: [
              "A complete fracture through both cortices",
              "An incomplete fracture common in children",
              "A fracture that doesn't heal properly",
              "A fracture through the growth plate"
            ],
            correct: 1,
            explanation: "A greenstick fracture is an incomplete fracture where the bone is bent and partially broken, similar to breaking a green stick. It's common in children because their bones are more flexible and less brittle than adult bones."
          }
        ]
      }
    }
  },
  hematology: {
    name: 'Hematology',
    description: 'Blood cells, hemostasis, and hematological disorders',
    overview: 'Hematology studies blood and blood-forming organs, including red blood cells, white blood cells, platelets, and plasma proteins. It encompasses oxygen transport, immune function, hemostasis, and various blood disorders.',
    keyTopics: [
      'Hematopoiesis',
      'Red blood cell physiology',
      'White blood cell types',
      'Hemostasis and coagulation',
      'Anemia types',
      'Bleeding disorders',
      'Hematologic malignancies',
      'Blood transfusion'
    ],
    color: 'from-red-600 to-red-700',
    icon: Droplets,
    categories: ['general'],
    modules: {
      general: {
        questions: [
          {
            question: "Which cell is the precursor to all blood cells?",
            options: [
              "Lymphoblast",
              "Myeloblast",
              "Hematopoietic stem cell",
              "Reticulocyte"
            ],
            correct: 2,
            explanation: "Hematopoietic stem cells are pluripotent cells that give rise to all blood cell lineages through the process of hematopoiesis. They are found primarily in the bone marrow and have the ability to self-renew and differentiate."
          },
          {
            question: "The normal lifespan of a red blood cell is approximately:",
            options: [
              "30 days",
              "60 days",
              "120 days",
              "180 days"
            ],
            correct: 2,
            explanation: "Red blood cells have a lifespan of approximately 120 days (4 months). They are removed from circulation by the spleen when they become old or damaged, and their components are recycled."
          },
          {
            question: "Which clotting factor is deficient in hemophilia A?",
            options: [
              "Factor VII",
              "Factor VIII",
              "Factor IX",
              "Factor XI"
            ],
            correct: 1,
            explanation: "Hemophilia A is caused by deficiency of Factor VIII (antihemophilic factor). It's an X-linked recessive disorder that affects males primarily and causes prolonged bleeding due to impaired intrinsic coagulation pathway."
          },
          {
            question: "Iron deficiency anemia is characterized by:",
            options: [
              "Macrocytic, hyperchromic red blood cells",
              "Microcytic, hypochromic red blood cells",
              "Normocytic, normochromic red blood cells",
              "Sickle-shaped red blood cells"
            ],
            correct: 1,
            explanation: "Iron deficiency anemia is characterized by microcytic (small), hypochromic (pale) red blood cells due to inadequate hemoglobin synthesis. Iron is essential for heme production in hemoglobin."
          },
          {
            question: "Which type of white blood cell is most abundant in normal blood?",
            options: [
              "Lymphocytes",
              "Neutrophils",
              "Monocytes",
              "Eosinophils"
            ],
            correct: 1,
            explanation: "Neutrophils are the most abundant white blood cells in normal blood, comprising 50-70% of all leukocytes. They are the first responders to bacterial infections and are part of the innate immune system."
          }
        ]
      }
    }
  },
  microbiology: {
    name: 'Microbiology',
    description: 'Bacteria, viruses, fungi, and infectious diseases',
    overview: 'Microbiology studies microorganisms including bacteria, viruses, fungi, and parasites. It covers their structure, function, pathogenesis, and the diseases they cause, as well as antimicrobial therapy and infection control.',
    keyTopics: [
      'Bacterial structure and classification',
      'Viral replication',
      'Fungal infections',
      'Antibiotic mechanisms',
      'Immune response to pathogens',
      'Hospital-acquired infections',
      'Antimicrobial resistance',
      'Vaccination principles'
    ],
    color: 'from-indigo-500 to-indigo-600',
    icon: Eye,
    categories: ['general'],
    modules: {
      general: {
        questions: [
          {
            question: "Which structure is unique to bacterial cells and not found in human cells?",
            options: [
              "Cell membrane",
              "Ribosomes",
              "Peptidoglycan cell wall",
              "DNA"
            ],
            correct: 2,
            explanation: "Peptidoglycan cell wall is unique to bacterial cells and not found in human cells. This structural difference is exploited by antibiotics like penicillin, which inhibit peptidoglycan synthesis, making them selectively toxic to bacteria."
          },
          {
            question: "Gram-positive bacteria appear purple after Gram staining because:",
            options: [
              "They have a thin peptidoglycan layer",
              "They have a thick peptidoglycan layer",
              "They lack a cell wall",
              "They have an outer membrane"
            ],
            correct: 1,
            explanation: "Gram-positive bacteria appear purple because they have a thick peptidoglycan layer that retains the crystal violet dye. Gram-negative bacteria have a thin peptidoglycan layer and appear pink after counterstaining with safranin."
          },
          {
            question: "Which antibiotic mechanism involves inhibition of protein synthesis?",
            options: [
              "Penicillin",
              "Vancomycin",
              "Streptomycin",
              "Ciprofloxacin"
            ],
            correct: 2,
            explanation: "Streptomycin inhibits protein synthesis by binding to the 30S ribosomal subunit in bacteria. Other protein synthesis inhibitors include chloramphenicol, tetracycline, and erythromycin, each targeting different aspects of translation."
          },
          {
            question: "HIV primarily infects which type of immune cell?",
            options: [
              "B lymphocytes",
              "CD4+ T lymphocytes",
              "CD8+ T lymphocytes",
              "Natural killer cells"
            ],
            correct: 1,
            explanation: "HIV primarily infects CD4+ T helper cells by binding to the CD4 receptor and co-receptors (CCR5 or CXCR4). The progressive destruction of CD4+ cells leads to immunodeficiency and opportunistic infections."
          },
          {
            question: "Which fungal infection is most commonly associated with immunocompromised patients?",
            options: [
              "Candida albicans",
              "Dermatophytes",
              "Aspergillus fumigatus",
              "Cryptococcus neoformans"
            ],
            correct: 0,
            explanation: "Candida albicans is the most common opportunistic fungal pathogen in immunocompromised patients, causing oral thrush, esophagitis, and systemic candidiasis. It's part of normal flora but becomes pathogenic when host defenses are compromised."
          }
        ]
      }
    }
  },
  immunology: {
    name: 'Immunology',
    description: 'Immune system function and immunological disorders',
    overview: 'Immunology studies the immune system, including innate and adaptive immunity, immune responses to pathogens, autoimmune diseases, allergies, and immunodeficiencies. It covers cellular and molecular mechanisms of immune recognition and response.',
    keyTopics: [
      'Innate vs adaptive immunity',
      'Antigen presentation',
      'T cell and B cell function',
      'Antibody structure and function',
      'Complement system',
      'Hypersensitivity reactions',
      'Autoimmune diseases',
      'Immunodeficiency disorders'
    ],
    color: 'from-teal-500 to-teal-600',
    icon: Shield,
    categories: ['general'],
    modules: {
      general: {
        questions: [
          {
            question: "Which cells are responsible for antigen presentation to T cells?",
            options: [
              "B cells",
              "Dendritic cells",
              "Macrophages",
              "All of the above"
            ],
            correct: 3,
            explanation: "Dendritic cells, macrophages, and B cells are all antigen-presenting cells (APCs) that can present antigens to T cells via MHC molecules. Dendritic cells are the most potent APCs for naive T cell activation."
          },
          {
            question: "IgE antibodies are primarily associated with:",
            options: [
              "Bacterial infections",
              "Viral infections",
              "Allergic reactions and parasitic infections",
              "Autoimmune diseases"
            ],
            correct: 2,
            explanation: "IgE antibodies are associated with allergic reactions (Type I hypersensitivity) and parasitic infections. They bind to mast cells and basophils, triggering degranulation and release of inflammatory mediators like histamine."
          },
          {
            question: "CD4+ T cells differentiate into which effector cell types?",
            options: [
              "Th1 and Th2 cells only",
              "Th1, Th2, Th17, and Treg cells",
              "Cytotoxic T cells",
              "Memory B cells"
            ],
            correct: 1,
            explanation: "CD4+ T helper cells can differentiate into several subsets: Th1 (cellular immunity), Th2 (humoral immunity and allergies), Th17 (inflammation and autoimmunity), and Treg (immune regulation and tolerance)."
          },
          {
            question: "The complement system can be activated by:",
            options: [
              "Classical pathway only",
              "Alternative pathway only",
              "Classical, alternative, and lectin pathways",
              "Antibodies only"
            ],
            correct: 2,
            explanation: "The complement system has three activation pathways: classical (antibody-antigen complexes), alternative (pathogen surfaces), and lectin (mannose-binding lectin). All pathways converge to form the membrane attack complex."
          },
          {
            question: "Type I hypersensitivity reactions are mediated by:",
            options: [
              "IgG antibodies",
              "IgE antibodies and mast cells",
              "T cells",
              "Complement"
            ],
            correct: 1,
            explanation: "Type I hypersensitivity (immediate hypersensitivity) is mediated by IgE antibodies bound to mast cells and basophils. Upon re-exposure to antigen, cross-linking of IgE triggers rapid degranulation and allergic symptoms."
          }
        ]
      }
    }
  },
  pharmacology: {
    name: 'Pharmacology',
    description: 'Drug mechanisms, pharmacokinetics, and therapeutics',
    overview: 'Pharmacology studies drugs and their interactions with biological systems, including mechanisms of action, pharmacokinetics, pharmacodynamics, adverse effects, and therapeutic applications. It bridges basic science and clinical medicine.',
    keyTopics: [
      'Pharmacokinetics (ADME)',
      'Pharmacodynamics',
      'Drug receptors',
      'Autonomic pharmacology',
      'Cardiovascular drugs',
      'CNS drugs',
      'Antimicrobial agents',
      'Drug interactions and toxicity'
    ],
    color: 'from-cyan-500 to-cyan-600',
    icon: Pill,
    categories: ['general'],
    modules: {
      general: {
        questions: [
          {
            question: "First-pass metabolism primarily occurs in which organ?",
            options: [
              "Kidneys",
              "Lungs",
              "Liver",
              "Small intestine"
            ],
            correct: 2,
            explanation: "First-pass metabolism primarily occurs in the liver. Drugs absorbed from the GI tract pass through the hepatic portal circulation to the liver before reaching systemic circulation, where they may be extensively metabolized."
          },
          {
            question: "Which pharmacokinetic parameter describes how quickly a drug is eliminated from the body?",
            options: [
              "Bioavailability",
              "Volume of distribution",
              "Half-life",
              "Clearance"
            ],
            correct: 2,
            explanation: "Half-life (t½) describes how quickly a drug is eliminated from the body. It's the time required for the plasma concentration to decrease by 50%. After 5 half-lives, approximately 97% of the drug is eliminated."
          },
          {
            question: "Beta-blockers work by:",
            options: [
              "Blocking sodium channels",
              "Blocking beta-adrenergic receptors",
              "Activating parasympathetic receptors",
              "Inhibiting ACE"
            ],
            correct: 1,
            explanation: "Beta-blockers work by competitively blocking beta-adrenergic receptors, preventing the binding of norepinephrine and epinephrine. This reduces heart rate, contractility, and blood pressure."
          },
          {
            question: "Penicillin's mechanism of action involves:",
            options: [
              "Inhibiting protein synthesis",
              "Inhibiting DNA replication",
              "Inhibiting cell wall synthesis",
              "Disrupting cell membrane"
            ],
            correct: 2,
            explanation: "Penicillin inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins and preventing peptidoglycan cross-linking. This weakens the cell wall, leading to bacterial lysis, especially in actively dividing bacteria."
          },
          {
            question: "Which phase of drug metabolism typically involves conjugation reactions?",
            options: [
              "Phase I",
              "Phase II",
              "Phase III",
              "Phase IV"
            ],
            correct: 1,
            explanation: "Phase II metabolism involves conjugation reactions (glucuronidation, sulfation, acetylation) that typically make drugs more water-soluble for excretion. Phase I involves oxidation, reduction, and hydrolysis reactions."
          }
        ]
      }
    }
  },
  embryology: {
    name: 'Embryology',
    description: 'Embryonic development and developmental disorders',
    overview: 'Embryology studies the development of organisms from fertilization through the embryonic and fetal periods. It covers gametogenesis, fertilization, implantation, gastrulation, organogenesis, and congenital malformations.',
    keyTopics: [
      'Fertilization and implantation',
      'Gastrulation and germ layers',
      'Neurulation',
      'Cardiovascular development',
      'Limb development',
      'Organogenesis',
      'Congenital malformations',
      'Teratogens'
    ],
    color: 'from-violet-500 to-violet-600',
    icon: Dna,
    categories: ['general'],
    modules: {
      general: {
        questions: [
          {
            question: "Gastrulation results in the formation of how many primary germ layers?",
            options: [
              "Two",
              "Three",
              "Four",
              "Five"
            ],
            correct: 1,
            explanation: "Gastrulation results in the formation of three primary germ layers: ectoderm (nervous system, skin), mesoderm (muscles, bones, circulatory system), and endoderm (GI tract, lungs, liver). This occurs around week 3 of development."
          },
          {
            question: "The neural tube gives rise to:",
            options: [
              "The peripheral nervous system",
              "The central nervous system",
              "The autonomic nervous system",
              "All nervous tissue"
            ],
            correct: 1,
            explanation: "The neural tube gives rise to the central nervous system (brain and spinal cord). Neural crest cells, which separate from the neural tube, give rise to the peripheral nervous system, including sensory and autonomic ganglia."
          },
          {
            question: "Spina bifida results from failure of:",
            options: [
              "Neural tube closure",
              "Heart development",
              "Limb bud formation",
              "Kidney development"
            ],
            correct: 0,
            explanation: "Spina bifida results from failure of neural tube closure, specifically in the caudal (posterior) region. This leads to incomplete closure of the vertebral arches and exposure of spinal cord tissue. Folic acid supplementation can prevent this defect."
          },
          {
            question: "The heart begins beating during which week of embryonic development?",
            options: [
              "Week 2",
              "Week 4",
              "Week 6",
              "Week 8"
            ],
            correct: 1,
            explanation: "The heart begins beating during week 4 of embryonic development. The primitive heart tube forms and begins contracting even before the four-chamber heart is fully developed, making it one of the first functional organ systems."
          },
          {
            question: "Teratogens are most likely to cause major malformations during:",
            options: [
              "The first 2 weeks (pre-implantation)",
              "Weeks 3-8 (embryonic period)",
              "Weeks 9-38 (fetal period)",
              "After birth"
            ],
            correct: 1,
            explanation: "Teratogens are most likely to cause major malformations during weeks 3-8 (embryonic period) when organogenesis occurs. This is the critical period when organs are forming and are most susceptible to developmental disruption."
          }
        ]
      }
    }
  },
  histology: {
    name: 'Histology',
    description: 'Tissue structure and microscopic anatomy',
    overview: 'Histology studies the microscopic structure of tissues and organs. It covers the four basic tissue types (epithelial, connective, muscle, nervous) and their organization into organs, providing the foundation for understanding normal and pathological tissue architecture.',
    keyTopics: [
      'Epithelial tissue types',
      'Connective tissue components',
      'Muscle tissue types',
      'Nervous tissue organization',
      'Tissue staining techniques',
      'Organ histology',
      'Cell junctions',
      'Extracellular matrix'
    ],
    color: 'from-emerald-500 to-emerald-600',
    icon: Microscope,
    categories: ['general'],
    modules: {
      general: {
        questions: [
          {
            question: "Which type of epithelium lines the alveoli of the lungs?",
            options: [
              "Simple squamous epithelium",
              "Simple cuboidal epithelium",
              "Simple columnar epithelium",
              "Stratified squamous epithelium"
            ],
            correct: 0,
            explanation: "Simple squamous epithelium lines the alveoli of the lungs. This thin, single-layer epithelium allows for efficient gas exchange between the alveolar air and blood in the pulmonary capillaries."
          },
          {
            question: "Collagen is primarily produced by which type of cell?",
            options: [
              "Fibroblasts",
              "Chondrocytes",
              "Osteoblasts",
              "Myocytes"
            ],
            correct: 0,
            explanation: "Fibroblasts are the primary producers of collagen in connective tissue. They synthesize and secrete collagen fibers, elastic fibers, and ground substance components that form the extracellular matrix."
          },
          {
            question: "Cardiac muscle is characterized by:",
            options: [
              "Voluntary control and striations",
              "Involuntary control and striations",
              "Voluntary control without striations",
              "Involuntary control without striations"
            ],
            correct: 1,
            explanation: "Cardiac muscle is characterized by involuntary control and striations. It has intercalated discs containing gap junctions that allow electrical coupling between cells, enabling coordinated contraction of the heart."
          },
          {
            question: "The blood-brain barrier is formed by:",
            options: [
              "Astrocytes",
              "Tight junctions between endothelial cells",
              "Microglia",
              "Oligodendrocytes"
            ],
            correct: 1,
            explanation: "The blood-brain barrier is formed by tight junctions between endothelial cells of brain capillaries. These tight junctions prevent most substances from freely crossing from blood into brain tissue, protecting the brain from potentially harmful substances."
          },
          {
            question: "Goblet cells are specialized for:",
            options: [
              "Absorption",
              "Secretion of mucus",
              "Ciliary action",
              "Sensory reception"
            ],
            correct: 1,
            explanation: "Goblet cells are specialized epithelial cells that secrete mucus. They are found in the respiratory and digestive tracts, where mucus helps trap particles, lubricate surfaces, and protect underlying tissues."
          }
        ]
      }
    }
  }
};