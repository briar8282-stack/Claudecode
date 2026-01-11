const fs = require('fs');

// Read the current schools file
const schoolsContent = fs.readFileSync('/home/user/Claudecode/data/schools.ts', 'utf8');

// Define international fees based on school type
const getInternationalFee = (type, isPublic) => {
  if (!isPublic) return null; // Private schools same for all
  
  switch(type) {
    case 'Primary':
      return {
        en: "$13,000 - $15,000 per year (International)",
        zh: "每年 $13,000 - $15,000 纽币（国际生）"
      };
    case 'Secondary':
      return {
        en: "$16,000 - $18,000 per year (International)",
        zh: "每年 $16,000 - $18,000 纽币（国际生）"
      };
    case 'Intermediate':
      return {
        en: "$14,000 - $16,000 per year (International)",
        zh: "每年 $14,000 - $16,000 纽币（国际生）"
      };
    case 'Composite':
      return {
        en: "$14,000 - $18,000 per year (International)",
        zh: "每年 $14,000 - $18,000 纽币（国际生）"
      };
    default:
      return {
        en: "$15,000 - $18,000 per year (International)",
        zh: "每年 $15,000 - $18,000 纽币（国际生）"
      };
  }
};

// Common international tips
const commonIntlTips = {
  en: [
    "Student visa required",
    "English proficiency test may be needed",
    "Limited ESOL support available",
    "Apply at least 6 months in advance"
  ],
  zh: [
    "需要学生签证",
    "可能需要英语水平测试",
    "提供有限的英语辅导",
    "至少提前6个月申请"
  ]
};

console.log('Script for updating school data created');
