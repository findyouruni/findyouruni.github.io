function getGPAByRank(rank) {
  if (rank <= 10) return { min: 3.7, avg: 3.9 };
  if (rank <= 30) return { min: 3.5, avg: 3.8 };
  if (rank <= 60) return { min: 3.3, avg: 3.7 };
  return { min: 3.0, avg: 3.5 };
}

const uniNames = [
  "MIT","Imperial College London","Oxford","Harvard","Cambridge","Stanford","ETH Zurich","NUS","UCL","Caltech",
  "UPenn","UC Berkeley","Melbourne","Peking","NTU","Cornell","Yale","Columbia","EPFL","Edinburgh",
  "Michigan","Johns Hopkins","Tsinghua","Toronto","HKU","ANU","Tokyo","UCLA","Manchester","Sydney",
  "UBC","Seoul National","UNSW","KCL","Monash","Queensland","KU Leuven","Bristol","Amsterdam","TUM",
  "Warwick","Glasgow","Heidelberg","Copenhagen","Zurich","UT Austin","Washington","Georgia Tech","Osaka","Sorbonne",
  "Helsinki","Durham","Auckland","Lund","UIUC","Alberta","Birmingham","Southampton","Leeds","Nottingham",
  "Sheffield","St Andrews","Oslo","Vienna","Groningen","Basel","Freiburg","Bern","Geneva","Lausanne",
  "Barcelona","Madrid","Lisbon","Porto","Warsaw","Prague","Budapest","Trinity Dublin","UCD","Cape Town",
  "Wits","AUB","KAUST","KFUPM","Malaya","Universitas Indonesia","UKM","Chulalongkorn","Mahidol","UP Diliman",
  "NTU Taiwan","HKUST","CityU HK","Politecnico di Milano","Sapienza","Lomonosov","Kyoto","Fudan","Shanghai Jiao Tong","KAIST"
];

const countries = new Array(100).fill("Global");

const majorPools = {
  cs: ["MIT","Stanford","UC Berkeley","NUS","Tsinghua","KAIST"],
  business: ["Harvard","UPenn","Columbia"],
  engineering: ["MIT","Stanford","ETH Zurich","NTU"],
  medicine: ["Johns Hopkins","Harvard","Oxford"]
};

const universities = uniNames.map((name, i) => {
  const rank = i + 1;
  const gpa = getGPAByRank(rank);

  return {
    name,
    country: countries[i],
    rank,
    minGPA: gpa.min,
    avgGPA: gpa.avg,
    majors: {
      cs: majorPools.cs.includes(name),
      business: majorPools.business.includes(name),
      engineering: majorPools.engineering.includes(name),
      medicine: majorPools.medicine.includes(name)
    }
  };
});
