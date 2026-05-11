const universities = [
  {
    name: "Massachusetts Institute of Technology",
    country: "USA",
    website: "https://www.mit.edu",
    logo: "https://www.topuniversities.com/sites/default/files/profiles/logos/massachusetts-institute-of-technology-mit_410_large.jpg",
    majors: { engineering: 1, computer_science: 1, business: 5, economics: 3, medicine: 20, general: 1 }
  },
   {
    name: "Imperial college of London",
    country: "UK",
    website: "https://www.imperial.ac.uk/",
    logo: "https://www.topuniversities.com/sites/default/files/profiles/logos/240430033452pm869301QS-Imperial-Logo-white-text-blue-background-200x200.jpg",
    majo
  {
    name: "Stanford University",
    country: "USA",
    website: "https://www.stanford.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Stanford_University_seal_2003.svg",
    majors: { engineering: 2, computer_science: 2, business: 2, economics: 2, medicine: 5, general: 6 }
  },
  {
    name: "Harvard University",
    country: "USA",
    website: "https://www.harvard.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/29/Harvard_shield_wreath.svg",
    majors: { engineering: 10, computer_science: 8, business: 1, economics: 1, medicine: 1, general: 4 }
  },

   {
    name: "University of Oxford",
    country: "United Kingdom",
    website: "https://www.ox.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d5/Oxford_University_Circlet.svg",
    majors: { engineering: 8, computer_science: 5, business: 3, economics: 2, medicine: 1, general: 4 }
  },
  {
    name: "Harvard University",
    country: "USA",
    website: "https://www.harvard.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/29/Harvard_shield_wreath.svg",
    majors: { engineering: 10, computer_science: 7, business: 1, economics: 1, medicine: 1, general: 3 }
  },
  {
    name: "University of Cambridge",
    country: "United Kingdom",
    website: "https://www.cam.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/8a/University_of_Cambridge_coat_of_arms.svg",
    majors: { engineering: 9, computer_science: 6, business: 4, economics: 2, medicine: 2, general: 4 }
  },
  {
    name: "Stanford University",
    country: "USA",
    website: "https://www.stanford.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Stanford_University_seal_2003.svg",
    majors: { engineering: 3, computer_science: 2, business: 1, economics: 4, medicine: 2, general: 2 }
  },
  {
    name: "ETH Zurich",
    country: "Switzerland",
    website: "https://ethz.ch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/ETH_Zurich_Logo.svg",
    majors: { engineering: 2, computer_science: 3, business: 999, economics: 999, medicine: 999, general: 4 }
  },
  {
    name: "National University of Singapore",
    country: "Singapore",
    website: "https://www.nus.edu.sg",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9a/NUS_coat_of_arms.svg",
    majors: { engineering: 5, computer_science: 4, business: 5, economics: 5, medicine: 3, general: 4 }
  },
  {
    name: "UCL",
    country: "United Kingdom",
    website: "https://www.ucl.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/UCL_logo.svg",
    majors: { engineering: 11, computer_science: 9, business: 7, economics: 6, medicine: 4, general: 4 }
  },
  {
    name: "California Institute of Technology",
    country: "USA",
    website: "https://www.caltech.edu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Caltech_Logo.svg",
    majors: { engineering: 1, computer_science: 3, business: 999, economics: 999, medicine: 10, general: 3 }
  },

  {
    name: "University of Pennsylvania",
    country: "USA",
    website: "https://www.upenn.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9a/University_of_Pennsylvania_Shield.svg",
    majors: { engineering: 14, computer_science: 10, business: 2, economics: 3, medicine: 5, general: 5 }
  },

  {
    name: "University of California, Berkeley",
    country: "USA",
    website: "https://www.berkeley.edu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/UC_Berkeley_Seal.svg",
    majors: { engineering: 4, computer_science: 3, business: 6, economics: 5, medicine: 9, general: 5 }
  },

  {
    name: "The University of Melbourne",
    country: "Australia",
    website: "https://www.unimelb.edu.au",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b4/University_of_Melbourne_coat_of_arms.svg",
    majors: { engineering: 13, computer_science: 12, business: 9, economics: 8, medicine: 6, general: 5 }
  },

  {
    name: "Peking University",
    country: "China",
    website: "https://english.pku.edu.cn",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/17/Peking_University_logo.svg",
    majors: { engineering: 15, computer_science: 8, business: 7, economics: 4, medicine: 4, general: 5 }
  },

  {
    name: "Nanyang Technological University",
    country: "Singapore",
    website: "https://www.ntu.edu.sg",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/48/Nanyang_Technological_University.svg",
    majors: { engineering: 6, computer_science: 5, business: 8, economics: 10, medicine: 999, general: 4 }
  },

  {
    name: "Cornell University",
    country: "USA",
    website: "https://www.cornell.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/47/Cornell_University_seal.svg",
    majors: { engineering: 7, computer_science: 9, business: 9, economics: 6, medicine: 6, general: 4 }
  },

  {
    name: "Tsinghua University",
    country: "China",
    website: "https://www.tsinghua.edu.cn",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/ec/Tsinghua_University_Logo.svg",
    majors: { engineering: 1, computer_science: 2, business: 10, economics: 7, medicine: 999, general: 4 }
  },

  {
    name: "Yale University",
    country: "USA",
    website: "https://www.yale.edu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Yale_University_Shield_1.svg",
    majors: { engineering: 18, computer_science: 15, business: 5, economics: 2, medicine: 3, general: 4 }
  },

  {
    name: "Princeton University",
    country: "USA",
    website: "https://www.princeton.edu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Princeton_seal.svg",
    majors: { engineering: 11, computer_science: 6, business: 999, economics: 1, medicine: 999, general: 3 }
  },

  {
    name: "University of Chicago",
    country: "USA",
    website: "https://www.uchicago.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/79/University_of_Chicago_shield.svg",
    majors: { engineering: 20, computer_science: 14, business: 3, economics: 1, medicine: 7, general: 4 }
  },
  {
    name: "Columbia University",
    country: "USA",
    website: "https://www.columbia.edu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Columbia_University_shield.svg",
    majors: { engineering: 16, computer_science: 11, business: 4, economics: 4, medicine: 4, general: 4 }
  },

  {
    name: "University of Toronto",
    country: "Canada",
    website: "https://www.utoronto.ca",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/04/Utoronto_coa.svg",
    majors: { engineering: 12, computer_science: 10, business: 7, economics: 6, medicine: 5, general: 5 }
  },

  {
    name: "University of New South Wales",
    country: "Australia",
    website: "https://www.unsw.edu.au",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5b/University_of_New_South_Wales_coat_of_arms.svg",
    majors: { engineering: 9, computer_science: 8, business: 10, economics: 9, medicine: 8, general: 5 }
  },

  {
    name: "University of Sydney",
    country: "Australia",
    website: "https://www.sydney.edu.au",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9c/University_of_Sydney_coat_of_arms.svg",
    majors: { engineering: 14, computer_science: 12, business: 9, economics: 8, medicine: 5, general: 5 }
  },

  {
    name: "University of Edinburgh",
    country: "United Kingdom",
    website: "https://www.ed.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/04/University_of_Edinburgh_ceremonial_roundel.svg",
    majors: { engineering: 17, computer_science: 11, business: 11, economics: 9, medicine: 4, general: 5 }
  },

  {
    name: "Technical University of Munich",
    country: "Germany",
    website: "https://www.tum.de",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Logo_of_the_Technical_University_of_Munich.svg",
    majors: { engineering: 3, computer_science: 5, business: 14, economics: 15, medicine: 999, general: 5 }
  },

  {
    name: "McGill University",
    country: "Canada",
    website: "https://www.mcgill.ca",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/92/McGill_University_CoA.svg",
    majors: { engineering: 18, computer_science: 14, business: 12, economics: 11, medicine: 4, general: 5 }
  },

  {
    name: "University of Hong Kong",
    country: "Hong Kong",
    website: "https://www.hku.hk",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/82/HKU_CoA.svg",
    majors: { engineering: 15, computer_science: 9, business: 8, economics: 7, medicine: 2, general: 5 }
  },

  {
    name: "Kyoto University",
    country: "Japan",
    website: "https://www.kyoto-u.ac.jp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Kyoto_University_logo.svg",
    majors: { engineering: 7, computer_science: 10, business: 20, economics: 12, medicine: 5, general: 5 }
  },

  {
    name: "Seoul National University",
    country: "South Korea",
    website: "https://en.snu.ac.kr",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Seoul_national_university_emblem.svg",
    majors: { engineering: 8, computer_science: 7, business: 11, economics: 10, medicine: 3, general: 5 }
  },

  {
    name: "KAIST",
    country: "South Korea",
    website: "https://www.kaist.ac.kr",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/KAIST_logo.svg",
    majors: { engineering: 2, computer_science: 4, business: 999, economics: 999, medicine: 999, general: 4 }
  },

  {
    name: "Delft University of Technology",
    country: "Netherlands",
    website: "https://www.tudelft.nl",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/07/TU_Delft_logo.svg",
    majors: { engineering: 4, computer_science: 8, business: 999, economics: 999, medicine: 999, general: 4 }
  },

  {
    name: "University of Manchester",
    country: "United Kingdom",
    website: "https://www.manchester.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/72/University_of_Manchester_coat_of_arms.svg",
    majors: { engineering: 19, computer_science: 15, business: 10, economics: 11, medicine: 7, general: 5 }
  },

  {
    name: "Monash University",
    country: "Australia",
    website: "https://www.monash.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f9/Monash_University_logo.svg",
    majors: { engineering: 16, computer_science: 14, business: 12, economics: 13, medicine: 6, general: 5 }
  },

  {
    name: "University of British Columbia",
    country: "Canada",
    website: "https://www.ubc.ca",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/UBC_CoA.svg",
    majors: { engineering: 15, computer_science: 11, business: 10, economics: 9, medicine: 5, general: 5 }
  },

  {
    name: "Northwestern University",
    country: "USA",
    website: "https://www.northwestern.edu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Northwestern_University_seal.svg",
    majors: { engineering: 18, computer_science: 16, business: 6, economics: 7, medicine: 5, general: 5 }
  },

  {
    name: "Fudan University",
    country: "China",
    website: "https://www.fudan.edu.cn",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Fudan_University_Logo.svg",
    majors: { engineering: 20, computer_science: 13, business: 9, economics: 6, medicine: 6, general: 5 }
  },

  {
    name: "Zhejiang University",
    country: "China",
    website: "https://www.zju.edu.cn",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/Zhejiang_University_Logo.svg",
    majors: { engineering: 6, computer_science: 7, business: 13, economics: 12, medicine: 7, general: 5 }
  },

  {
    name: "University of California, Los Angeles",
    country: "USA",
    website: "https://www.ucla.edu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/The_University_of_California_UCLA.svg",
    majors: { engineering: 13, computer_science: 9, business: 10, economics: 8, medicine: 3, general: 5 }
  },

  {
    name: "Carnegie Mellon University",
    country: "USA",
    website: "https://www.cmu.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bb/Carnegie_Mellon_University_seal.svg",
    majors: { engineering: 5, computer_science: 1, business: 15, economics: 20, medicine: 999, general: 4 }
  },
  {
    name: "New York University",
    country: "USA",
    website: "https://www.nyu.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/ec/New_York_University_Seal.svg",
    majors: { engineering: 22, computer_science: 17, business: 4, economics: 5, medicine: 8, general: 5 }
  },

  {
    name: "King's College London",
    country: "United Kingdom",
    website: "https://www.kcl.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bf/King%27s_College_London_logo.svg",
    majors: { engineering: 24, computer_science: 18, business: 12, economics: 10, medicine: 3, general: 5 }
  },

  {
    name: "University of Bristol",
    country: "United Kingdom",
    website: "https://www.bristol.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/30/University_of_Bristol_logo.svg",
    majors: { engineering: 15, computer_science: 12, business: 18, economics: 13, medicine: 9, general: 5 }
  },

  {
    name: "Tokyo Institute of Technology",
    country: "Japan",
    website: "https://www.titech.ac.jp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Tokyo_Institute_of_Technology_Logo.svg",
    majors: { engineering: 3, computer_science: 6, business: 999, economics: 999, medicine: 999, general: 4 }
  },

  {
    name: "Ludwig Maximilian University of Munich",
    country: "Germany",
    website: "https://www.lmu.de",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/LMU_Muenchen_Logo.svg",
    majors: { engineering: 30, computer_science: 25, business: 15, economics: 11, medicine: 4, general: 5 }
  },

  {
    name: "Sorbonne University",
    country: "France",
    website: "https://www.sorbonne-universite.fr",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Logo_Sorbonne_Universit%C3%A9.svg",
    majors: { engineering: 28, computer_science: 19, business: 999, economics: 16, medicine: 5, general: 5 }
  },

  {
    name: "KU Leuven",
    country: "Belgium",
    website: "https://www.kuleuven.be",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/KU_Leuven_logo.svg",
    majors: { engineering: 16, computer_science: 14, business: 14, economics: 13, medicine: 5, general: 5 }
  },

  {
    name: "University of Amsterdam",
    country: "Netherlands",
    website: "https://www.uva.nl",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Universiteit_van_Amsterdam_logo.svg",
    majors: { engineering: 35, computer_science: 18, business: 9, economics: 7, medicine: 12, general: 5 }
  },

  {
    name: "Australian National University",
    country: "Australia",
    website: "https://www.anu.edu.au",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Australian_National_University_coat_of_arms.svg",
    majors: { engineering: 22, computer_science: 17, business: 11, economics: 6, medicine: 10, general: 5 }
  },

  {
    name: "Brown University",
    country: "USA",
    website: "https://www.brown.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/51/Brown_University_coat_of_arms.svg",
    majors: { engineering: 21, computer_science: 13, business: 20, economics: 8, medicine: 9, general: 5 }
  },

  {
    name: "University of Warwick",
    country: "United Kingdom",
    website: "https://warwick.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/66/University_of_Warwick_logo.svg",
    majors: { engineering: 19, computer_science: 11, business: 5, economics: 3, medicine: 999, general: 5 }
  },

  {
    name: "Leiden University",
    country: "Netherlands",
    website: "https://www.universiteitleiden.nl",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/09/UniversiteitLeidenLogo.svg",
    majors: { engineering: 999, computer_science: 35, business: 18, economics: 14, medicine: 6, general: 5 }
  },

  {
    name: "Osaka University",
    country: "Japan",
    website: "https://www.osaka-u.ac.jp",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0b/Osaka_University_logo.svg",
    majors: { engineering: 10, computer_science: 12, business: 20, economics: 18, medicine: 4, general: 5 }
  },

  {
    name: "University of Birmingham",
    country: "United Kingdom",
    website: "https://www.birmingham.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/12/University_of_Birmingham_Logo.svg",
    majors: { engineering: 23, computer_science: 19, business: 16, economics: 14, medicine: 8, general: 5 }
  },

  {
    name: "Pennsylvania State University",
    country: "USA",
    website: "https://www.psu.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/70/Penn_State_University_shield.svg",
    majors: { engineering: 17, computer_science: 15, business: 18, economics: 16, medicine: 15, general: 5 }
  },

  {
    name: "University of Glasgow",
    country: "United Kingdom",
    website: "https://www.gla.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3d/University_of_Glasgow_coat_of_arms.svg",
    majors: { engineering: 24, computer_science: 20, business: 17, economics: 13, medicine: 7, general: 5 }
  },

  {
    name: "Georgia Institute of Technology",
    country: "USA",
    website: "https://www.gatech.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Georgia_Tech_seal.svg",
    majors: { engineering: 2, computer_science: 5, business: 14, economics: 25, medicine: 999, general: 4 }
  },

  {
    name: "University of Copenhagen",
    country: "Denmark",
    website: "https://www.ku.dk",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/54/University_of_Copenhagen_logo.svg",
    majors: { engineering: 25, computer_science: 22, business: 16, economics: 15, medicine: 6, general: 5 }
  },

  {
    name: "Durham University",
    country: "United Kingdom",
    website: "https://www.durham.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/57/Durham_University_logo.svg",
    majors: { engineering: 28, computer_science: 24, business: 12, economics: 10, medicine: 999, general: 5 }
  },

  {
    name: "University of Illinois Urbana-Champaign",
    country: "USA",
    website: "https://illinois.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/67/University_of_Illinois_seal.svg",
    majors: { engineering: 5, computer_science: 4, business: 9, economics: 14, medicine: 999, general: 4 }
  },
  {
    name: "University of Texas at Austin",
    country: "USA",
    website: "https://www.utexas.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/48/University_of_Texas_at_Austin_seal.svg",
    majors: { engineering: 9, computer_science: 8, business: 6, economics: 9, medicine: 11, general: 5 }
  },

  {
    name: "University of Washington",
    country: "USA",
    website: "https://www.washington.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/58/University_of_Washington_seal.svg",
    majors: { engineering: 11, computer_science: 7, business: 14, economics: 16, medicine: 5, general: 5 }
  },

  {
    name: "University of California, San Diego",
    country: "USA",
    website: "https://ucsd.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/8a/UCSD_Seal.svg",
    majors: { engineering: 13, computer_science: 10, business: 25, economics: 17, medicine: 6, general: 5 }
  },

  {
    name: "University of Auckland",
    country: "New Zealand",
    website: "https://www.auckland.ac.nz",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/fc/University_of_Auckland_CoA.svg",
    majors: { engineering: 20, computer_science: 18, business: 15, economics: 13, medicine: 9, general: 5 }
  },

  {
    name: "Lund University",
    country: "Sweden",
    website: "https://www.lunduniversity.lu.se",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5f/Lund_University_logo.svg",
    majors: { engineering: 18, computer_science: 20, business: 19, economics: 17, medicine: 8, general: 5 }
  },

  {
    name: "University of Nottingham",
    country: "United Kingdom",
    website: "https://www.nottingham.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/02/University_of_Nottingham_logo.svg",
    majors: { engineering: 26, computer_science: 22, business: 18, economics: 16, medicine: 10, general: 5 }
  },

  {
    name: "University of Zurich",
    country: "Switzerland",
    website: "https://www.uzh.ch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Universit%C3%A4t_Z%C3%BCrich_logo.svg",
    majors: { engineering: 999, computer_science: 25, business: 20, economics: 14, medicine: 4, general: 5 }
  },

  {
    name: "University of Helsinki",
    country: "Finland",
    website: "https://www.helsinki.fi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Helsingin_yliopiston_logo.svg",
    majors: { engineering: 999, computer_science: 21, business: 24, economics: 18, medicine: 7, general: 5 }
  },

  {
    name: "Tohoku University",
    country: "Japan",
    website: "https://www.tohoku.ac.jp",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/c5/Tohoku_University_logo.svg",
    majors: { engineering: 8, computer_science: 11, business: 999, economics: 999, medicine: 6, general: 4 }
  },

  {
    name: "University of Alberta",
    country: "Canada",
    website: "https://www.ualberta.ca",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/16/University_of_Alberta_coat_of_arms.svg",
    majors: { engineering: 21, computer_science: 19, business: 16, economics: 15, medicine: 8, general: 5 }
  },

  {
    name: "Boston University",
    country: "USA",
    website: "https://www.bu.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/15/Boston_University_seal.svg",
    majors: { engineering: 22, computer_science: 18, business: 9, economics: 12, medicine: 7, general: 5 }
  },

  {
    name: "Purdue University",
    country: "USA",
    website: "https://www.purdue.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/35/Purdue_Boilermakers_logo.svg",
    majors: { engineering: 4, computer_science: 6, business: 18, economics: 24, medicine: 999, general: 4 }
  },

  {
    name: "University of Leeds",
    country: "United Kingdom",
    website: "https://www.leeds.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/c7/University_of_Leeds_logo.svg",
    majors: { engineering: 24, computer_science: 20, business: 15, economics: 14, medicine: 12, general: 5 }
  },

  {
    name: "Rice University",
    country: "USA",
    website: "https://www.rice.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/Rice_University_seal.svg",
    majors: { engineering: 12, computer_science: 10, business: 17, economics: 13, medicine: 10, general: 5 }
  },

  {
    name: "University of Southampton",
    country: "United Kingdom",
    website: "https://www.southampton.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/University_of_Southampton_logo.svg",
    majors: { engineering: 14, computer_science: 13, business: 22, economics: 18, medicine: 14, general: 5 }
  },

  {
    name: "Eindhoven University of Technology",
    country: "Netherlands",
    website: "https://www.tue.nl",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Logo_TU_Eindhoven.svg",
    majors: { engineering: 6, computer_science: 9, business: 999, economics: 999, medicine: 999, general: 4 }
  },

  {
    name: "University of Oslo",
    country: "Norway",
    website: "https://www.uio.no",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/University_of_Oslo_logo.svg",
    majors: { engineering: 999, computer_science: 24, business: 19, economics: 15, medicine: 7, general: 5 }
  },

  {
    name: "University of Vienna",
    country: "Austria",
    website: "https://www.univie.ac.at",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/University_of_Vienna_logo.svg",
    majors: { engineering: 999, computer_science: 28, business: 20, economics: 17, medicine: 9, general: 5 }
  },

  {
    name: "Sapienza University of Rome",
    country: "Italy",
    website: "https://www.uniroma1.it",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/42/Sapienza_University_of_Rome_logo.svg",
    majors: { engineering: 18, computer_science: 19, business: 22, economics: 21, medicine: 8, general: 5 }
  },

  {
    name: "University of Barcelona",
    country: "Spain",
    website: "https://www.ub.edu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Universitat_de_Barcelona_logo.svg",
    majors: { engineering: 26, computer_science: 24, business: 18, economics: 16, medicine: 9, general: 5 }
  },
  {
    name: "University of North Carolina at Chapel Hill",
    country: "USA",
    website: "https://www.unc.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5f/University_of_North_Carolina_seal.svg",
    majors: { engineering: 27, computer_science: 18, business: 11, economics: 10, medicine: 5, general: 5 }
  },

  {
    name: "University of Sheffield",
    country: "United Kingdom",
    website: "https://www.sheffield.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2b/University_of_Sheffield_logo.svg",
    majors: { engineering: 20, computer_science: 19, business: 20, economics: 18, medicine: 11, general: 5 }
  },

  {
    name: "University of Basel",
    country: "Switzerland",
    website: "https://www.unibas.ch",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/63/University_of_Basel_logo.svg",
    majors: { engineering: 999, computer_science: 32, business: 25, economics: 21, medicine: 5, general: 5 }
  },

  {
    name: "KTH Royal Institute of Technology",
    country: "Sweden",
    website: "https://www.kth.se",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/56/KTH_Royal_Institute_of_Technology_logo.svg",
    majors: { engineering: 7, computer_science: 10, business: 999, economics: 999, medicine: 999, general: 4 }
  },

  {
    name: "University of Waterloo",
    country: "Canada",
    website: "https://uwaterloo.ca",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/72/University_of_Waterloo_seal.svg",
    majors: { engineering: 8, computer_science: 3, business: 18, economics: 19, medicine: 999, general: 4 }
  },

  {
    name: "RWTH Aachen University",
    country: "Germany",
    website: "https://www.rwth-aachen.de",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/RWTH_Aachen_Logo.svg",
    majors: { engineering: 5, computer_science: 8, business: 999, economics: 999, medicine: 999, general: 4 }
  },

  {
    name: "University of Geneva",
    country: "Switzerland",
    website: "https://www.unige.ch",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0e/University_of_Geneva_logo.svg",
    majors: { engineering: 999, computer_science: 30, business: 18, economics: 15, medicine: 7, general: 5 }
  },

  {
    name: "Michigan State University",
    country: "USA",
    website: "https://msu.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Michigan_State_University_seal.svg",
    majors: { engineering: 22, computer_science: 24, business: 17, economics: 19, medicine: 12, general: 5 }
  },

  {
    name: "University of Freiburg",
    country: "Germany",
    website: "https://www.uni-freiburg.de",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Albert_Ludwigs_University_of_Freiburg_logo.svg",
    majors: { engineering: 28, computer_science: 26, business: 23, economics: 18, medicine: 6, general: 5 }
  },

  {
    name: "Case Western Reserve University",
    country: "USA",
    website: "https://case.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/12/Case_Western_Reserve_University_seal.svg",
    majors: { engineering: 19, computer_science: 21, business: 20, economics: 24, medicine: 8, general: 5 }
  },

  {
    name: "University of Adelaide",
    country: "Australia",
    website: "https://www.adelaide.edu.au",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/36/University_of_Adelaide_logo.svg",
    majors: { engineering: 21, computer_science: 23, business: 18, economics: 20, medicine: 10, general: 5 }
  },

  {
    name: "University of Bath",
    country: "United Kingdom",
    website: "https://www.bath.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e3/University_of_Bath_logo.svg",
    majors: { engineering: 17, computer_science: 15, business: 13, economics: 11, medicine: 999, general: 5 }
  },

  {
    name: "University of York",
    country: "United Kingdom",
    website: "https://www.york.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/06/University_of_York_logo.svg",
    majors: { engineering: 29, computer_science: 22, business: 16, economics: 14, medicine: 999, general: 5 }
  },

  {
    name: "Wageningen University & Research",
    country: "Netherlands",
    website: "https://www.wur.nl",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/88/Wageningen_University_logo.svg",
    majors: { engineering: 35, computer_science: 30, business: 28, economics: 22, medicine: 999, general: 5 }
  },

  {
    name: "University of Rochester",
    country: "USA",
    website: "https://www.rochester.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/63/University_of_Rochester_seal.svg",
    majors: { engineering: 24, computer_science: 22, business: 19, economics: 17, medicine: 10, general: 5 }
  },

  {
    name: "University of Exeter",
    country: "United Kingdom",
    website: "https://www.exeter.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/University_of_Exeter_logo.svg",
    majors: { engineering: 30, computer_science: 26, business: 14, economics: 13, medicine: 999, general: 5 }
  },

  {
    name: "Arizona State University",
    country: "USA",
    website: "https://www.asu.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f8/Arizona_State_University_logo.svg",
    majors: { engineering: 16, computer_science: 14, business: 18, economics: 20, medicine: 11, general: 5 }
  },

  {
    name: "University of Twente",
    country: "Netherlands",
    website: "https://www.utwente.nl",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/72/University_of_Twente_logo.svg",
    majors: { engineering: 14, computer_science: 12, business: 999, economics: 999, medicine: 999, general: 4 }
  },

  {
    name: "University of Reading",
    country: "United Kingdom",
    website: "https://www.reading.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/63/University_of_Reading_logo.svg",
    majors: { engineering: 32, computer_science: 28, business: 17, economics: 15, medicine: 999, general: 5 }
  },

  {
    name: "University of Arizona",
    country: "USA",
    website: "https://www.arizona.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/68/University_of_Arizona_Seal.svg",
    majors: { engineering: 20, computer_science: 18, business: 22, economics: 24, medicine: 9, general: 5 }
  }
];
