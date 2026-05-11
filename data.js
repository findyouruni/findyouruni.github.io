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
  }
    }
  }))
];
