const universities = [
  {
    name: "Massachusetts Institute of Technology",
    country: "USA",
    website: "https://www.mit.edu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg",
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

  ...Array.from({ length: 97 }, (_, i) => ({
    name: `Global University ${i + 4}`,
    country: "Various",
    website: "https://www.qs.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    majors: {
      engineering: i + 4,
      computer_science: i + 4,
      business: i + 4,
      economics: i + 4,
      medicine: i + 4,
      general: i + 4
    }
  }))
];
