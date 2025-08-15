var record = [
  {
    "Name": "Gibo",
    "Age": 16,
    "SkillSet": [
      { "Skill": "SAP UI5" },
      { "Skill": "SAP HANA" }
    ]
  },
  {
    "Name": "Patrick",
    "Age": 22,
    "SkillSet": [
      { "Skill": "SAP UI5" },
      { "Skill": "SAP HANA" },
      { "Skill": "SAP ABAP" }
    ]
  },
  {
    "Name": "MJ",
    "Age": 24,
    "SkillSet": [
      { "Skill": "SAP HANA" }
    ]
  }
];

var mostSkilled = record[0];

for (var i = 1; i < record.length; i++) {
  if (record[i].SkillSet.length > mostSkilled.SkillSet.length) {
    mostSkilled = record[i];
  }
}

console.log("Name: " + mostSkilled.Name);
console.log("Age: " + mostSkilled.Age);