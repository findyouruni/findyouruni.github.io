const universities = [

  {
    name: "Massachusetts Institute of Technology",
    rank: 1,
    website: "https://www.mit.edu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg"
  },

  {
    name: "Imperial College London",
    rank: 2,
    website: "https://www.imperial.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Imperial_College_London_new_logo.png"
  },

  {
    name: "Stanford University",
    rank: 3,
    website: "https://www.stanford.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Stanford_University_seal_2003.svg"
  },

  {
    name: "University of Oxford",
    rank: 4,
    website: "https://www.ox.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d5/Oxford_University_Circlet.svg"
  },

  {
    name: "Harvard University",
    rank: 5,
    website: "https://www.harvard.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/29/Harvard_shield_wreath.svg"
  },

  {
    name: "University of Cambridge",
    rank: 6,
    website: "https://www.cam.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/8a/University_of_Cambridge_coat_of_arms.svg"
  },

  {
    name: "ETH Zurich",
    rank: 7,
    website: "https://ethz.ch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/ETH_Zurich_Logo.svg"
  },

  {
    name: "National University of Singapore",
    rank: 8,
    website: "https://www.nus.edu.sg",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9a/NUS_coat_of_arms.svg"
  },

  {
    name: "UCL",
    rank: 9,
    website: "https://www.ucl.ac.uk",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/UCL_logo.svg"
  },

  {
    name: "California Institute of Technology",
    rank: 10,
    website: "https://www.caltech.edu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Caltech_Logo.svg"
  },

  {
    name: "University of Pennsylvania",
    rank: 11,
    website: "https://www.upenn.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9a/University_of_Pennsylvania_Shield.svg"
  },

  {
    name: "University of California, Berkeley",
    rank: 12,
    website: "https://www.berkeley.edu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/UC_Berkeley_Seal.svg"
  },

  {
    name: "Peking University",
    rank: 13,
    website: "https://english.pku.edu.cn",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/17/Peking_University_logo.svg"
  },

  {
    name: "Cornell University",
    rank: 14,
    website: "https://www.cornell.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/47/Cornell_University_seal.svg"
  },

  {
    name: "Tsinghua University",
    rank: 15,
    website: "https://www.tsinghua.edu.cn",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/ec/Tsinghua_University_Logo.svg"
  },

  {
    name: "Yale University",
    rank: 16,
    website: "https://www.yale.edu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Yale_University_Shield_1.svg"
  },

  {
    name: "Princeton University",
    rank: 17,
    website: "https://www.princeton.edu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Princeton_seal.svg"
  },

  {
    name: "Columbia University",
    rank: 18,
    website: "https://www.columbia.edu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Columbia_University_shield.svg"
  },

  {
    name: "University of Toronto",
    rank: 19,
    website: "https://www.utoronto.ca",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/04/Utoronto_coa.svg"
  },

  {
    name: "National University of Singapore",
    rank: 20,
    website: "https://www.nus.edu.sg",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9a/NUS_coat_of_arms.svg"
  },

  {
    name: "Carnegie Mellon University",
    rank: 21,
    website: "https://www.cmu.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bb/Carnegie_Mellon_University_seal.svg"
  },

  {
    name: "University of Melbourne",
    rank: 22,
    website: "https://www.unimelb.edu.au",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b4/University_of_Melbourne_coat_of_arms.svg"
  },

  {
    name: "University of Sydney",
    rank: 23,
    website: "https://www.sydney.edu.au",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9c/University_of_Sydney_coat_of_arms.svg"
  },

  {
    name: "University of New South Wales",
    rank: 24,
    website: "https://www.unsw.edu.au",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5b/University_of_New_South_Wales_coat_of_arms.svg"
  },

  {
    name: "University of Chicago",
    rank: 25,
    website: "https://www.uchicago.edu",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/79/University_of_Chicago_shield.svg"
  },

  // ADD THIS BELOW RANK 25 INSIDE data.js

{
  name: "Technical University of Munich",
  website: "https://www.tum.de",
  logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Logo_of_the_Technical_University_of_Munich.svg",
  rank: 26
},

{
  name: "McGill University",
  website: "https://www.mcgill.ca",
  logo: "https://upload.wikimedia.org/wikipedia/en/9/92/McGill_University_CoA.svg",
  rank: 27
},

{
  name: "University of Hong Kong",
  website: "https://www.hku.hk",
  logo: "https://upload.wikimedia.org/wikipedia/en/8/82/HKU_CoA.svg",
  rank: 28
},

{
  name: "Kyoto University",
  website: "https://www.kyoto-u.ac.jp",
  logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Kyoto_University_logo.svg",
  rank: 29
},

{
  name: "Seoul National University",
  website: "https://en.snu.ac.kr",
  logo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Seoul_national_university_emblem.svg",
  rank: 30
},

{
  name: "KAIST",
  website: "https://www.kaist.ac.kr",
  logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/KAIST_logo.svg",
  rank: 31
},

{
  name: "Delft University of Technology",
  website: "https://www.tudelft.nl",
  logo: "https://upload.wikimedia.org/wikipedia/commons/0/07/TU_Delft_logo.svg",
  rank: 32
},

{
  name: "University of Manchester",
  website: "https://www.manchester.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/7/72/University_of_Manchester_coat_of_arms.svg",
  rank: 33
},

{
  name: "Monash University",
  website: "https://www.monash.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/f/f9/Monash_University_logo.svg",
  rank: 34
},

{
  name: "University of British Columbia",
  website: "https://www.ubc.ca",
  logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/UBC_CoA.svg",
  rank: 35
},

{
  name: "Northwestern University",
  website: "https://www.northwestern.edu",
  logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Northwestern_University_seal.svg",
  rank: 36
},

{
  name: "Fudan University",
  website: "https://www.fudan.edu.cn",
  logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Fudan_University_Logo.svg",
  rank: 37
},

{
  name: "Zhejiang University",
  website: "https://www.zju.edu.cn",
  logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/Zhejiang_University_Logo.svg",
  rank: 38
},

{
  name: "University of California, Los Angeles",
  website: "https://www.ucla.edu",
  logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/The_University_of_California_UCLA.svg",
  rank: 39
},

{
  name: "Carnegie Mellon University",
  website: "https://www.cmu.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/b/bb/Carnegie_Mellon_University_seal.svg",
  rank: 40
},

{
  name: "New York University",
  website: "https://www.nyu.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/e/ec/New_York_University_Seal.svg",
  rank: 41
},

{
  name: "King's College London",
  website: "https://www.kcl.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/b/bf/King%27s_College_London_logo.svg",
  rank: 42
},

{
  name: "University of Bristol",
  website: "https://www.bristol.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/3/30/University_of_Bristol_logo.svg",
  rank: 43
},

{
  name: "Tokyo Institute of Technology",
  website: "https://www.titech.ac.jp",
  logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Tokyo_Institute_of_Technology_Logo.svg",
  rank: 44
},

{
  name: "Ludwig Maximilian University of Munich",
  website: "https://www.lmu.de",
  logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/LMU_Muenchen_Logo.svg",
  rank: 45
},

{
  name: "Sorbonne University",
  website: "https://www.sorbonne-universite.fr",
  logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Logo_Sorbonne_Universit%C3%A9.svg",
  rank: 46
},

{
  name: "KU Leuven",
  website: "https://www.kuleuven.be",
  logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/KU_Leuven_logo.svg",
  rank: 47
},

{
  name: "University of Amsterdam",
  website: "https://www.uva.nl",
  logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Universiteit_van_Amsterdam_logo.svg",
  rank: 48
},

{
  name: "Australian National University",
  website: "https://www.anu.edu.au",
  logo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Australian_National_University_coat_of_arms.svg",
  rank: 49
},

{
  name: "Brown University",
  website: "https://www.brown.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/5/51/Brown_University_coat_of_arms.svg",
  rank: 50
},

  {
  name: "University of Warwick",
  website: "https://warwick.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/6/66/University_of_Warwick_logo.svg",
  rank: 51
},

{
  name: "Leiden University",
  website: "https://www.universiteitleiden.nl",
  logo: "https://upload.wikimedia.org/wikipedia/en/0/09/UniversiteitLeidenLogo.svg",
  rank: 52
},

{
  name: "Osaka University",
  website: "https://www.osaka-u.ac.jp",
  logo: "https://upload.wikimedia.org/wikipedia/en/0/0b/Osaka_University_logo.svg",
  rank: 53
},

{
  name: "University of Birmingham",
  website: "https://www.birmingham.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/1/12/University_of_Birmingham_Logo.svg",
  rank: 54
},

{
  name: "Pennsylvania State University",
  website: "https://www.psu.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/7/70/Penn_State_University_shield.svg",
  rank: 55
},

{
  name: "University of Glasgow",
  website: "https://www.gla.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/3/3d/University_of_Glasgow_coat_of_arms.svg",
  rank: 56
},

{
  name: "Georgia Institute of Technology",
  website: "https://www.gatech.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Georgia_Tech_seal.svg",
  rank: 57
},

{
  name: "University of Copenhagen",
  website: "https://www.ku.dk",
  logo: "https://upload.wikimedia.org/wikipedia/en/5/54/University_of_Copenhagen_logo.svg",
  rank: 58
},

{
  name: "Durham University",
  website: "https://www.durham.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/5/57/Durham_University_logo.svg",
  rank: 59
},

{
  name: "University of Illinois Urbana-Champaign",
  website: "https://illinois.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/6/67/University_of_Illinois_seal.svg",
  rank: 60
},

{
  name: "University of Texas at Austin",
  website: "https://www.utexas.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/4/48/University_of_Texas_at_Austin_seal.svg",
  rank: 61
},

{
  name: "University of Washington",
  website: "https://www.washington.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/5/58/University_of_Washington_seal.svg",
  rank: 62
},

{
  name: "University of California, San Diego",
  website: "https://ucsd.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/8/8a/UCSD_Seal.svg",
  rank: 63
},

{
  name: "University of Auckland",
  website: "https://www.auckland.ac.nz",
  logo: "https://upload.wikimedia.org/wikipedia/en/f/fc/University_of_Auckland_CoA.svg",
  rank: 64
},

{
  name: "Lund University",
  website: "https://www.lunduniversity.lu.se",
  logo: "https://upload.wikimedia.org/wikipedia/en/5/5f/Lund_University_logo.svg",
  rank: 65
},

{
  name: "University of Nottingham",
  website: "https://www.nottingham.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/0/02/University_of_Nottingham_logo.svg",
  rank: 66
},

{
  name: "University of Zurich",
  website: "https://www.uzh.ch",
  logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Universit%C3%A4t_Z%C3%BCrich_logo.svg",
  rank: 67
},

{
  name: "University of Helsinki",
  website: "https://www.helsinki.fi",
  logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Helsingin_yliopiston_logo.svg",
  rank: 68
},

{
  name: "Tohoku University",
  website: "https://www.tohoku.ac.jp",
  logo: "https://upload.wikimedia.org/wikipedia/en/c/c5/Tohoku_University_logo.svg",
  rank: 69
},

{
  name: "University of Alberta",
  website: "https://www.ualberta.ca",
  logo: "https://upload.wikimedia.org/wikipedia/en/1/16/University_of_Alberta_coat_of_arms.svg",
  rank: 70
},

{
  name: "Boston University",
  website: "https://www.bu.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/1/15/Boston_University_seal.svg",
  rank: 71
},

{
  name: "Purdue University",
  website: "https://www.purdue.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/3/35/Purdue_Boilermakers_logo.svg",
  rank: 72
},

{
  name: "University of Leeds",
  website: "https://www.leeds.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/c/c7/University_of_Leeds_logo.svg",
  rank: 73
},

{
  name: "Rice University",
  website: "https://www.rice.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/Rice_University_seal.svg",
  rank: 74
},

{
  name: "University of Southampton",
  website: "https://www.southampton.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/University_of_Southampton_logo.svg",
  rank: 75
},

{
  name: "Eindhoven University of Technology",
  website: "https://www.tue.nl",
  logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Logo_TU_Eindhoven.svg",
  rank: 76
},

{
  name: "University of Oslo",
  website: "https://www.uio.no",
  logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/University_of_Oslo_logo.svg",
  rank: 77
},

{
  name: "University of Vienna",
  website: "https://www.univie.ac.at",
  logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/University_of_Vienna_logo.svg",
  rank: 78
},

{
  name: "Sapienza University of Rome",
  website: "https://www.uniroma1.it",
  logo: "https://upload.wikimedia.org/wikipedia/en/4/42/Sapienza_University_of_Rome_logo.svg",
  rank: 79
},

{
  name: "University of Barcelona",
  website: "https://www.ub.edu",
  logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Universitat_de_Barcelona_logo.svg",
  rank: 80
},

{
  name: "University of North Carolina at Chapel Hill",
  website: "https://www.unc.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/5/5f/University_of_North_Carolina_seal.svg",
  rank: 81
},

{
  name: "University of Sheffield",
  website: "https://www.sheffield.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/2/2b/University_of_Sheffield_logo.svg",
  rank: 82
},

{
  name: "University of Basel",
  website: "https://www.unibas.ch",
  logo: "https://upload.wikimedia.org/wikipedia/en/6/63/University_of_Basel_logo.svg",
  rank: 83
},

{
  name: "KTH Royal Institute of Technology",
  website: "https://www.kth.se",
  logo: "https://upload.wikimedia.org/wikipedia/en/5/56/KTH_Royal_Institute_of_Technology_logo.svg",
  rank: 84
},

{
  name: "University of Waterloo",
  website: "https://uwaterloo.ca",
  logo: "https://upload.wikimedia.org/wikipedia/en/7/72/University_of_Waterloo_seal.svg",
  rank: 85
},

{
  name: "RWTH Aachen University",
  website: "https://www.rwth-aachen.de",
  logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/RWTH_Aachen_Logo.svg",
  rank: 86
},

{
  name: "University of Geneva",
  website: "https://www.unige.ch",
  logo: "https://upload.wikimedia.org/wikipedia/en/0/0e/University_of_Geneva_logo.svg",
  rank: 87
},

{
  name: "Michigan State University",
  website: "https://msu.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Michigan_State_University_seal.svg",
  rank: 88
},

{
  name: "University of Freiburg",
  website: "https://www.uni-freiburg.de",
  logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Albert_Ludwigs_University_of_Freiburg_logo.svg",
  rank: 89
},

{
  name: "Case Western Reserve University",
  website: "https://case.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/1/12/Case_Western_Reserve_University_seal.svg",
  rank: 90
},

{
  name: "University of Adelaide",
  website: "https://www.adelaide.edu.au",
  logo: "https://upload.wikimedia.org/wikipedia/en/3/36/University_of_Adelaide_logo.svg",
  rank: 91
},

{
  name: "University of Bath",
  website: "https://www.bath.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/e/e3/University_of_Bath_logo.svg",
  rank: 92
},

{
  name: "University of York",
  website: "https://www.york.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/0/06/University_of_York_logo.svg",
  rank: 93
},

{
  name: "Wageningen University & Research",
  website: "https://www.wur.nl",
  logo: "https://upload.wikimedia.org/wikipedia/en/8/88/Wageningen_University_logo.svg",
  rank: 94
},

{
  name: "University of Rochester",
  website: "https://www.rochester.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/6/63/University_of_Rochester_seal.svg",
  rank: 95
},

{
  name: "University of Exeter",
  website: "https://www.exeter.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/University_of_Exeter_logo.svg",
  rank: 96
},

{
  name: "Arizona State University",
  website: "https://www.asu.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/f/f8/Arizona_State_University_logo.svg",
  rank: 97
},

{
  name: "University of Twente",
  website: "https://www.utwente.nl",
  logo: "https://upload.wikimedia.org/wikipedia/commons/7/72/University_of_Twente_logo.svg",
  rank: 98
},

{
  name: "University of Reading",
  website: "https://www.reading.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/6/63/University_of_Reading_logo.svg",
  rank: 99
},

{
  name: "University of Arizona",
  website: "https://www.arizona.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/6/68/University_of_Arizona_Seal.svg",
  rank: 100
}

];
