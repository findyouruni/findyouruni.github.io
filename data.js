const universities = [

{
  name: "Massachusetts Institute of Technology",
  rank: 1,
  website: "https://www.mit.edu",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/512px-MIT_logo.svg.png"
},

{
  name: "Imperial College London",
  rank: 2,
  website: "https://www.imperial.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Imperial_College_London_new_logo.png/512px-Imperial_College_London_new_logo.png"
},

{
  name: "Stanford University",
  rank: 3,
  website: "https://www.stanford.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Stanford_University_seal_2003.svg/512px-Stanford_University_seal_2003.svg.png"
},

{
  name: "University of Oxford",
  rank: 4,
  website: "https://www.ox.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Oxford_University_Circlet.svg/512px-Oxford_University_Circlet.svg.png"
},

{
  name: "Harvard University",
  rank: 5,
  website: "https://www.harvard.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/512px-Harvard_shield_wreath.svg.png"
},

{
  name: "University of Cambridge",
  rank: 6,
  website: "https://www.cam.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/University_of_Cambridge_coat_of_arms.svg/512px-University_of_Cambridge_coat_of_arms.svg.png"
},

{
  name: "ETH Zurich",
  rank: 7,
  website: "https://ethz.ch",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/ETH_Zurich_Logo.svg/512px-ETH_Zurich_Logo.svg.png"
},

{
  name: "National University of Singapore",
  rank: 8,
  website: "https://www.nus.edu.sg",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/NUS_coat_of_arms.svg/512px-NUS_coat_of_arms.svg.png"
},

{
  name: "UCL",
  rank: 9,
  website: "https://www.ucl.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/UCL_logo.svg/512px-UCL_logo.svg.png"
},

{
  name: "California Institute of Technology",
  rank: 10,
  website: "https://www.caltech.edu",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Caltech_Logo.svg/512px-Caltech_Logo.svg.png"
},

{
  name: "University of Pennsylvania",
  rank: 11,
  website: "https://www.upenn.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/University_of_Pennsylvania_Shield.svg/512px-University_of_Pennsylvania_Shield.svg.png"
},

{
  name: "University of California, Berkeley",
  rank: 12,
  website: "https://www.berkeley.edu",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/UC_Berkeley_Seal.svg/512px-UC_Berkeley_Seal.svg.png"
},

{
  name: "Peking University",
  rank: 13,
  website: "https://english.pku.edu.cn",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Peking_University_logo.svg/512px-Peking_University_logo.svg.png"
},

{
  name: "Cornell University",
  rank: 14,
  website: "https://www.cornell.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Cornell_University_seal.svg/512px-Cornell_University_seal.svg.png"
},

{
  name: "Tsinghua University",
  rank: 15,
  website: "https://www.tsinghua.edu.cn",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Tsinghua_University_Logo.svg/512px-Tsinghua_University_Logo.svg.png"
},

{
  name: "Yale University",
  rank: 16,
  website: "https://www.yale.edu",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Yale_University_Shield_1.svg/512px-Yale_University_Shield_1.svg.png"
},

{
  name: "Princeton University",
  rank: 17,
  website: "https://www.princeton.edu",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/512px-Princeton_seal.svg.png"
},

{
  name: "Columbia University",
  rank: 18,
  website: "https://www.columbia.edu",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Columbia_University_shield.svg/512px-Columbia_University_shield.svg.png"
},

{
  name: "University of Toronto",
  rank: 19,
  website: "https://www.utoronto.ca",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/512px-Utoronto_coa.svg.png"
},

{
  name: "Carnegie Mellon University",
  rank: 21,
  website: "https://www.cmu.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Carnegie_Mellon_University_seal.svg/512px-Carnegie_Mellon_University_seal.svg.png"
},

{
  name: "University of Melbourne",
  rank: 22,
  website: "https://www.unimelb.edu.au",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/University_of_Melbourne_coat_of_arms.svg/512px-University_of_Melbourne_coat_of_arms.svg.png"
},

{
  name: "University of Sydney",
  rank: 23,
  website: "https://www.sydney.edu.au",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/University_of_Sydney_coat_of_arms.svg/512px-University_of_Sydney_coat_of_arms.svg.png"
},

{
  name: "University of New South Wales",
  rank: 24,
  website: "https://www.unsw.edu.au",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/University_of_New_South_Wales_coat_of_arms.svg/512px-University_of_New_South_Wales_coat_of_arms.svg.png"
},

{
  name: "University of Chicago",
  rank: 25,
  website: "https://www.uchicago.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/University_of_Chicago_shield.svg/512px-University_of_Chicago_shield.svg.png"
},

{
  name: "Technical University of Munich",
  rank: 26,
  website: "https://www.tum.de",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Technical_University_of_Munich.svg/512px-Logo_of_the_Technical_University_of_Munich.svg.png"
},

{
  name: "McGill University",
  rank: 27,
  website: "https://www.mcgill.ca",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/McGill_University_CoA.svg/512px-McGill_University_CoA.svg.png"
},

{
  name: "University of Hong Kong",
  rank: 28,
  website: "https://www.hku.hk",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/HKU_CoA.svg/512px-HKU_CoA.svg.png"
},

{
  name: "Kyoto University",
  rank: 29,
  website: "https://www.kyoto-u.ac.jp",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Kyoto_University_logo.svg/512px-Kyoto_University_logo.svg.png"
},

{
  name: "Seoul National University",
  rank: 30,
  website: "https://en.snu.ac.kr",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Seoul_national_university_emblem.svg/512px-Seoul_national_university_emblem.svg.png"
},

{
  name: "KAIST",
  rank: 31,
  website: "https://www.kaist.ac.kr",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/KAIST_logo.svg/512px-KAIST_logo.svg.png"
},

{
  name: "Delft University of Technology",
  rank: 32,
  website: "https://www.tudelft.nl",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/TU_Delft_logo.svg/512px-TU_Delft_logo.svg.png"
},

{
  name: "University of Manchester",
  rank: 33,
  website: "https://www.manchester.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/University_of_Manchester_coat_of_arms.svg/512px-University_of_Manchester_coat_of_arms.svg.png"
},

{
  name: "Monash University",
  rank: 34,
  website: "https://www.monash.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Monash_University_logo.svg/512px-Monash_University_logo.svg.png"
},

{
  name: "University of British Columbia",
  rank: 35,
  website: "https://www.ubc.ca",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/UBC_CoA.svg/512px-UBC_CoA.svg.png"
},

{
  name: "Northwestern University",
  rank: 36,
  website: "https://www.northwestern.edu",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Northwestern_University_seal.svg/512px-Northwestern_University_seal.svg.png"
},

{
  name: "Fudan University",
  rank: 37,
  website: "https://www.fudan.edu.cn",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Fudan_University_Logo.svg/512px-Fudan_University_Logo.svg.png"
},

{
  name: "Zhejiang University",
  rank: 38,
  website: "https://www.zju.edu.cn",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Zhejiang_University_Logo.svg/512px-Zhejiang_University_Logo.svg.png"
},

{
  name: "University of California, Los Angeles",
  rank: 39,
  website: "https://www.ucla.edu",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/The_University_of_California_UCLA.svg/512px-The_University_of_California_UCLA.svg.png"
},

{
  name: "New York University",
  rank: 41,
  website: "https://www.nyu.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/New_York_University_Seal.svg/512px-New_York_University_Seal.svg.png"
},

{
  name: "King's College London",
  rank: 42,
  website: "https://www.kcl.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/King%27s_College_London_logo.svg/512px-King%27s_College_London_logo.svg.png"
},

{
  name: "University of Bristol",
  rank: 43,
  website: "https://www.bristol.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/University_of_Bristol_logo.svg/512px-University_of_Bristol_logo.svg.png"
},

{
  name: "Tokyo Institute of Technology",
  rank: 44,
  website: "https://www.titech.ac.jp",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tokyo_Institute_of_Technology_Logo.svg/512px-Tokyo_Institute_of_Technology_Logo.svg.png"
},

{
  name: "Ludwig Maximilian University of Munich",
  rank: 45,
  website: "https://www.lmu.de",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/LMU_Muenchen_Logo.svg/512px-LMU_Muenchen_Logo.svg.png"
},

{
  name: "Sorbonne University",
  rank: 46,
  website: "https://www.sorbonne-universite.fr",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Logo_Sorbonne_Universit%C3%A9.svg/512px-Logo_Sorbonne_Universit%C3%A9.svg.png"
},

{
  name: "KU Leuven",
  rank: 47,
  website: "https://www.kuleuven.be",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/KU_Leuven_logo.svg/512px-KU_Leuven_logo.svg.png"
},

{
  name: "University of Amsterdam",
  rank: 48,
  website: "https://www.uva.nl",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Universiteit_van_Amsterdam_logo.svg/512px-Universiteit_van_Amsterdam_logo.svg.png"
},

{
  name: "Australian National University",
  rank: 49,
  website: "https://www.anu.edu.au",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Australian_National_University_coat_of_arms.svg/512px-Australian_National_University_coat_of_arms.svg.png"
},

{
  name: "Brown University",
  rank: 50,
  website: "https://www.brown.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Brown_University_coat_of_arms.svg/512px-Brown_University_coat_of_arms.svg.png”
},
{
  name: "University of Warwick",
  website: "https://warwick.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/University_of_Warwick_logo.svg/512px-University_of_Warwick_logo.svg.png",
  rank: 51
},

{
  name: "Leiden University",
  website: "https://www.universiteitleiden.nl",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/UniversiteitLeidenLogo.svg/512px-UniversiteitLeidenLogo.svg.png",
  rank: 52
},

{
  name: "Osaka University",
  website: "https://www.osaka-u.ac.jp",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Osaka_University_logo.svg/512px-Osaka_University_logo.svg.png",
  rank: 53
},

{
  name: "University of Birmingham",
  website: "https://www.birmingham.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/University_of_Birmingham_Logo.svg/512px-University_of_Birmingham_Logo.svg.png",
  rank: 54
},

{
  name: "Pennsylvania State University",
  website: "https://www.psu.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Penn_State_University_shield.svg/512px-Penn_State_University_shield.svg.png",
  rank: 55
},

{
  name: "University of Glasgow",
  website: "https://www.gla.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/University_of_Glasgow_coat_of_arms.svg/512px-University_of_Glasgow_coat_of_arms.svg.png",
  rank: 56
},

{
  name: "Georgia Institute of Technology",
  website: "https://www.gatech.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Georgia_Tech_seal.svg/512px-Georgia_Tech_seal.svg.png",
  rank: 57
},

{
  name: "University of Copenhagen",
  website: "https://www.ku.dk",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/University_of_Copenhagen_logo.svg/512px-University_of_Copenhagen_logo.svg.png",
  rank: 58
},

{
  name: "Durham University",
  website: "https://www.durham.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Durham_University_logo.svg/512px-Durham_University_logo.svg.png",
  rank: 59
},

{
  name: "University of Illinois Urbana-Champaign",
  website: "https://illinois.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/University_of_Illinois_seal.svg/512px-University_of_Illinois_seal.svg.png",
  rank: 60
},

{
  name: "University of Texas at Austin",
  website: "https://www.utexas.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/University_of_Texas_at_Austin_seal.svg/512px-University_of_Texas_at_Austin_seal.svg.png",
  rank: 61
},

{
  name: "University of Washington",
  website: "https://www.washington.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/University_of_Washington_seal.svg/512px-University_of_Washington_seal.svg.png",
  rank: 62
},

{
  name: "University of California, San Diego",
  website: "https://ucsd.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/UCSD_Seal.svg/512px-UCSD_Seal.svg.png",
  rank: 63
},

{
  name: "University of Auckland",
  website: "https://www.auckland.ac.nz",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/University_of_Auckland_CoA.svg/512px-University_of_Auckland_CoA.svg.png",
  rank: 64
},

{
  name: "Lund University",
  website: "https://www.lunduniversity.lu.se",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Lund_University_logo.svg/512px-Lund_University_logo.svg.png",
  rank: 65
},

{
  name: "University of Nottingham",
  website: "https://www.nottingham.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/University_of_Nottingham_logo.svg/512px-University_of_Nottingham_logo.svg.png",
  rank: 66
},

{
  name: "University of Zurich",
  website: "https://www.uzh.ch",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Universit%C3%A4t_Z%C3%BCrich_logo.svg/512px-Universit%C3%A4t_Z%C3%BCrich_logo.svg.png",
  rank: 67
},

{
  name: "University of Helsinki",
  website: "https://www.helsinki.fi",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Helsingin_yliopiston_logo.svg/512px-Helsingin_yliopiston_logo.svg.png",
  rank: 68
},

{
  name: "Tohoku University",
  website: "https://www.tohoku.ac.jp",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Tohoku_University_logo.svg/512px-Tohoku_University_logo.svg.png",
  rank: 69
},

{
  name: "University of Alberta",
  website: "https://www.ualberta.ca",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/University_of_Alberta_coat_of_arms.svg/512px-University_of_Alberta_coat_of_arms.svg.png",
  rank: 70
},

{
  name: "Boston University",
  website: "https://www.bu.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Boston_University_seal.svg/512px-Boston_University_seal.svg.png",
  rank: 71
},

{
  name: "Purdue University",
  website: "https://www.purdue.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Purdue_Boilermakers_logo.svg/512px-Purdue_Boilermakers_logo.svg.png",
  rank: 72
},

{
  name: "University of Leeds",
  website: "https://www.leeds.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/University_of_Leeds_logo.svg/512px-University_of_Leeds_logo.svg.png",
  rank: 73
},

{
  name: "Rice University",
  website: "https://www.rice.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Rice_University_seal.svg/512px-Rice_University_seal.svg.png",
  rank: 74
},

{
  name: "University of Southampton",
  website: "https://www.southampton.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/University_of_Southampton_logo.svg/512px-University_of_Southampton_logo.svg.png",
  rank: 75
},

{
  name: "Eindhoven University of Technology",
  website: "https://www.tue.nl",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Logo_TU_Eindhoven.svg/512px-Logo_TU_Eindhoven.svg.png",
  rank: 76
},

{
  name: "University of Oslo",
  website: "https://www.uio.no",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/University_of_Oslo_logo.svg/512px-University_of_Oslo_logo.svg.png",
  rank: 77
},

{
  name: "University of Vienna",
  website: "https://www.univie.ac.at",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/University_of_Vienna_logo.svg/512px-University_of_Vienna_logo.svg.png",
  rank: 78
},

{
  name: "Sapienza University of Rome",
  website: "https://www.uniroma1.it",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Sapienza_University_of_Rome_logo.svg/512px-Sapienza_University_of_Rome_logo.svg.png",
  rank: 79
},

{
  name: "University of Barcelona",
  website: "https://www.ub.edu",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Universitat_de_Barcelona_logo.svg/512px-Universitat_de_Barcelona_logo.svg.png",
  rank: 80
},

{
  name: "University of North Carolina at Chapel Hill",
  website: "https://www.unc.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/University_of_North_Carolina_seal.svg/512px-University_of_North_Carolina_seal.svg.png",
  rank: 81
},

{
  name: "University of Sheffield",
  website: "https://www.sheffield.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/University_of_Sheffield_logo.svg/512px-University_of_Sheffield_logo.svg.png",
  rank: 82
},

{
  name: "University of Basel",
  website: "https://www.unibas.ch",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/University_of_Basel_logo.svg/512px-University_of_Basel_logo.svg.png",
  rank: 83
},

{
  name: "KTH Royal Institute of Technology",
  website: "https://www.kth.se",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/KTH_Royal_Institute_of_Technology_logo.svg/512px-KTH_Royal_Institute_of_Technology_logo.svg.png",
  rank: 84
},

{
  name: "University of Waterloo",
  website: "https://uwaterloo.ca",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/University_of_Waterloo_seal.svg/512px-University_of_Waterloo_seal.svg.png",
  rank: 85
},

{
  name: "RWTH Aachen University",
  website: "https://www.rwth-aachen.de",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/RWTH_Aachen_Logo.svg/512px-RWTH_Aachen_Logo.svg.png",
  rank: 86
},

{
  name: "University of Geneva",
  website: "https://www.unige.ch",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/University_of_Geneva_logo.svg/512px-University_of_Geneva_logo.svg.png",
  rank: 87
},

{
  name: "Michigan State University",
  website: "https://msu.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Michigan_State_University_seal.svg/512px-Michigan_State_University_seal.svg.png",
  rank: 88
},

{
  name: "University of Freiburg",
  website: "https://www.uni-freiburg.de",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Albert_Ludwigs_University_of_Freiburg_logo.svg/512px-Albert_Ludwigs_University_of_Freiburg_logo.svg.png",
  rank: 89
},

{
  name: "Case Western Reserve University",
  website: "https://case.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Case_Western_Reserve_University_seal.svg/512px-Case_Western_Reserve_University_seal.svg.png",
  rank: 90
},

{
  name: "University of Adelaide",
  website: "https://www.adelaide.edu.au",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/University_of_Adelaide_logo.svg/512px-University_of_Adelaide_logo.svg.png",
  rank: 91
},

{
  name: "University of Bath",
  website: "https://www.bath.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/University_of_Bath_logo.svg/512px-University_of_Bath_logo.svg.png",
  rank: 92
},

{
  name: "University of York",
  website: "https://www.york.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/University_of_York_logo.svg/512px-University_of_York_logo.svg.png",
  rank: 93
},

{
  name: "Wageningen University & Research",
  website: "https://www.wur.nl",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Wageningen_University_logo.svg/512px-Wageningen_University_logo.svg.png",
  rank: 94
},

{
  name: "University of Rochester",
  website: "https://www.rochester.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/University_of_Rochester_seal.svg/512px-University_of_Rochester_seal.svg.png",
  rank: 95
},

{
  name: "University of Exeter",
  website: "https://www.exeter.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/University_of_Exeter_logo.svg/512px-University_of_Exeter_logo.svg.png",
  rank: 96
},

{
  name: "Arizona State University",
  website: "https://www.asu.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Arizona_State_University_logo.svg/512px-Arizona_State_University_logo.svg.png",
  rank: 97
},

{
  name: "University of Twente",
  website: "https://www.utwente.nl",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/University_of_Twente_logo.svg/512px-University_of_Twente_logo.svg.png",
  rank: 98
},

{
  name: "University of Reading",
  website: "https://www.reading.ac.uk",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/University_of_Reading_logo.svg/512px-University_of_Reading_logo.svg.png",
  rank: 99
},

{
  name: "University of Arizona",
  website: "https://www.arizona.edu",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/University_of_Arizona_Seal.svg/512px-University_of_Arizona_Seal.svg.png",
  rank: 100
}

];
