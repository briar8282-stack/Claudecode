export interface School {
  id: number;
  name: string;
  nameCn: string; // Chinese name
  type: 'Primary' | 'Secondary' | 'Intermediate' | 'Composite';
  area: string;
  decile: number;
  rating: number; // Overall rating out of 10
  academicPerformance: number; // Out of 10
  facilities: number; // Out of 10
  extracurricular: number; // Out of 10
  teachingQuality: number; // Out of 10
  address: string;
  website?: string;
  description: string;
  descriptionCn: string; // Chinese description
  tuitionFee: string; // Domestic fees
  tuitionFeeCn: string; // Chinese version
  internationalFee: string; // International student fees
  internationalFeeCn: string; // Chinese version
  admissionRules: string[];
  admissionRulesCn: string[];
  tips: string[];
  tipsCn: string[];
  internationalTips: string[]; // Tips for international students
  internationalTipsCn: string[]; // Chinese version
}

export const aucklandSchools: School[] = [
  {
    id: 1,
    name: "Auckland Grammar School",
    nameCn: "奥克兰文法学校",
    type: "Secondary",
    area: "Epsom",
    decile: 10,
    rating: 9.5,
    academicPerformance: 9.8,
    facilities: 9.5,
    extracurricular: 9.3,
    teachingQuality: 9.5,
    address: "Mountain Road, Epsom, Auckland 1023",
    website: "https://www.ags.school.nz",
    description: "One of Auckland's premier boys' secondary schools with outstanding academic results and extensive facilities.",
    descriptionCn: "奥克兰顶尖的男子中学之一，学术成绩优异，设施齐全。",
    tuitionFee: "Free (Domestic Students)",
    tuitionFeeCn: "免费（本地学生）",
    internationalFee: "$16,000 - $18,000 per year",
    internationalFeeCn: "每年 $16,000 - $18,000 纽币",
    admissionRules: [
      "Boys only",
      "Year 9-13",
      "Zone enrollment or entrance exam required",
      "Out-of-zone places available through ballot"
    ],
    admissionRulesCn: [
      "仅限男生",
      "Year 9-13（初三至高三）",
      "需要在学区内或通过入学考试",
      "学区外可通过抽签方式入学"
    ],
    tips: [
      "Highly competitive entrance exam",
      "Strong rugby and rowing programs",
      "Apply early for out-of-zone enrollment",
      "Excellent NCEA and Cambridge results"
    ],
    tipsCn: [
      "入学考试竞争激烈",
      "橄榄球和赛艇项目强",
      "学区外入学需提前申请",
      "NCEA和剑桥成绩优异"
    ],
    internationalTips: [
      "Student visa required",
      "English language test required (IELTS 5.5+)",
      "Limited international student places",
      "Excellent academic support for international students",
      "Strong international student community"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语考试（雅思5.5+）",
      "国际生名额有限",
      "为国际生提供优质学术支持",
      "国际生社区活跃"
    ]
  },
  {
    id: 2,
    name: "Diocesan School for Girls",
    nameCn: "教区女子学校",
    type: "Secondary",
    area: "Epsom",
    decile: 10,
    rating: 9.3,
    academicPerformance: 9.5,
    facilities: 9.2,
    extracurricular: 9.4,
    teachingQuality: 9.3,
    address: "Clyde Street, Epsom, Auckland 1023",
    website: "https://www.dio.school.nz",
    description: "Leading independent girls' school known for academic excellence and strong pastoral care.",
    descriptionCn: "领先的私立女校，以卓越的学术成绩和优质的牧养关怀而闻名。",
    tuitionFee: "$32,000 - $38,000 per year",
    tuitionFeeCn: "每年 $32,000 - $38,000 纽币",
    admissionRules: [
      "Girls only",
      "Year 7-13",
      "Entrance assessment required",
      "Limited scholarships available"
    ],
    admissionRulesCn: [
      "仅限女生",
      "Year 7-13（初一至高三）",
      "需要入学评估",
      "提供有限奖学金"
    ],
    tips: [
      "Strong performing arts program",
      "Excellent pastoral care system",
      "Apply 1-2 years in advance",
      "Anglican foundation with inclusive culture"
    ],
    tipsCn: [
      "表演艺术项目强大",
      "优质的学生关怀体系",
      "需提前1-2年申请",
      "圣公会背景但包容多元文化"
    ]
,
    internationalFee: "Same as domestic fees",
    internationalFeeCn: "与本地生学费相同",
    internationalTips: [
      "Student visa required",
      "English proficiency test required",
      "Interview and assessment needed",
      "Apply 1-2 years in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语水平测试",
      "需要面试和评估",
      "提前1-2年申请"
    ]
  },
  {
    id: 3,
    name: "Macleans College",
    nameCn: "麦克林斯中学",
    type: "Secondary",
    area: "Bucklands Beach",
    decile: 10,
    rating: 9.1,
    academicPerformance: 9.3,
    facilities: 9.0,
    extracurricular: 9.2,
    teachingQuality: 9.0,
    address: "2 Macleans Road, Bucklands Beach, Auckland 2012",
    website: "https://www.macleans.school.nz",
    description: "Co-educational state school with a unique Whanau house system and excellent academic results.",
    descriptionCn: "男女混校公立学校，独特的Whanau学院制，学术成绩优异。",
    tuitionFee: "Free (State School)",
    tuitionFeeCn: "免费（公立学校）",
    admissionRules: [
      "Co-educational",
      "Year 9-13",
      "In-zone enrollment priority",
      "Strict attendance area boundaries"
    ],
    admissionRulesCn: [
      "男女混校",
      "Year 9-13（初三至高三）",
      "学区内优先入学",
      "严格的学区边界"
    ],
    tips: [
      "Popular Whanau house system",
      "Strong Asian student community",
      "Excellent NCEA results",
      "Check zone boundaries carefully"
    ],
    tipsCn: [
      "受欢迎的学院制系统",
      "亚裔学生社区活跃",
      "NCEA成绩优秀",
      "请仔细查看学区边界"
    ]
,
    internationalFee: "$16,000 - $18,000 per year",
    internationalFeeCn: "每年 $16,000 - $18,000 纽币",
    internationalTips: [
      "Student visa required",
      "English language test required (IELTS 5.0+)",
      "Limited ESOL support available",
      "Apply at least 6 months in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语考试（雅思5.0+）",
      "提供有限的英语辅导",
      "至少提前6个月申请"
    ]
  },
  {
    id: 4,
    name: "Westlake Boys High School",
    nameCn: "西湖男子高中",
    type: "Secondary",
    area: "Forrest Hill",
    decile: 9,
    rating: 8.9,
    academicPerformance: 9.1,
    facilities: 8.8,
    extracurricular: 9.0,
    teachingQuality: 8.8,
    address: "2 Forrest Hill Road, Forrest Hill, Auckland 0620",
    website: "https://www.westlake.school.nz",
    description: "High-performing boys' secondary school with strong academic and sporting traditions.",
    descriptionCn: "高水平男子中学，具有优良的学术和体育传统。",
    tuitionFee: "Free (State School)",
    tuitionFeeCn: "免费（公立学校）",
    admissionRules: [
      "Boys only",
      "Year 9-13",
      "In-zone priority enrollment",
      "Out-of-zone ballot system"
    ],
    admissionRulesCn: [
      "仅限男生",
      "Year 9-13",
      "学区内优先入学",
      "学区外抽签制"
    ],
    tips: [
      "Competitive sports programs",
      "Strong academic focus",
      "Very popular school - zone tightly enforced",
      "Good pathway to university"
    ],
    tipsCn: [
      "竞技体育项目强",
      "学术重点突出",
      "非常受欢迎 - 学区严格",
      "大学升学率高"
    ]
,
    internationalFee: "$16,000 - $18,000 per year",
    internationalFeeCn: "每年 $16,000 - $18,000 纽币",
    internationalTips: [
      "Student visa required",
      "English language test required (IELTS 5.0+)",
      "Limited ESOL support available",
      "Apply at least 6 months in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语考试（雅思5.0+）",
      "提供有限的英语辅导",
      "至少提前6个月申请"
    ]
  },
  {
    id: 5,
    name: "Westlake Girls High School",
    nameCn: "西湖女子高中",
    type: "Secondary",
    area: "Takapuna",
    decile: 9,
    rating: 8.8,
    academicPerformance: 9.0,
    facilities: 8.7,
    extracurricular: 8.9,
    teachingQuality: 8.8,
    address: "2 Wairau Road, Takapuna, Auckland 0622",
    website: "https://www.westlakegirls.school.nz",
    description: "Excellent girls' secondary school with outstanding academic achievements and cultural programs.",
    descriptionCn: "优秀的女子中学，学术成就突出，文化项目丰富。",
    tuitionFee: "Free (State School)",
    tuitionFeeCn: "免费（公立学校）",
    admissionRules: [
      "Girls only",
      "Year 9-13",
      "In-zone priority",
      "Limited out-of-zone places"
    ],
    admissionRulesCn: [
      "仅限女生",
      "Year 9-13",
      "学区内优先",
      "学区外名额有限"
    ],
    tips: [
      "Strong performing arts",
      "Excellent academic results",
      "Supportive environment",
      "Check enrollment zones early"
    ],
    tipsCn: [
      "表演艺术强",
      "学术成绩优异",
      "支持性环境",
      "提前查看学区"
    ]
,
    internationalFee: "$16,000 - $18,000 per year",
    internationalFeeCn: "每年 $16,000 - $18,000 纽币",
    internationalTips: [
      "Student visa required",
      "English language test required (IELTS 5.0+)",
      "Limited ESOL support available",
      "Apply at least 6 months in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语考试（雅思5.0+）",
      "提供有限的英语辅导",
      "至少提前6个月申请"
    ]
  },
  {
    id: 6,
    name: "Rangitoto College",
    nameCn: "朗吉托托学院",
    type: "Secondary",
    area: "Mairangi Bay",
    decile: 9,
    rating: 8.7,
    academicPerformance: 8.8,
    facilities: 9.0,
    extracurricular: 8.9,
    teachingQuality: 8.5,
    address: "564 East Coast Road, Mairangi Bay, Auckland 0630",
    website: "https://www.rangitoto.school.nz",
    description: "New Zealand's largest secondary school offering diverse programs and extensive facilities.",
    descriptionCn: "新西兰最大的中学，提供多样化课程和广泛设施。",
    tuitionFee: "Free (State School)",
    tuitionFeeCn: "免费（公立学校）",
    admissionRules: [
      "Co-educational",
      "Year 9-13",
      "In-zone automatic enrollment",
      "Out-of-zone limited spaces"
    ],
    admissionRulesCn: [
      "男女混校",
      "Year 9-13",
      "学区内自动入学",
      "学区外名额有限"
    ],
    tips: [
      "Largest school in NZ (3000+ students)",
      "Wide range of subject choices",
      "Excellent sports facilities",
      "May feel overwhelming for some students"
    ],
    tipsCn: [
      "新西兰最大学校（3000+学生）",
      "科目选择范围广",
      "优秀的体育设施",
      "部分学生可能觉得规模太大"
    ]
,
    internationalFee: "$16,000 - $18,000 per year",
    internationalFeeCn: "每年 $16,000 - $18,000 纽币",
    internationalTips: [
      "Student visa required",
      "English language test required (IELTS 5.0+)",
      "Limited ESOL support available",
      "Apply at least 6 months in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语考试（雅思5.0+）",
      "提供有限的英语辅导",
      "至少提前6个月申请"
    ]
  },
  {
    id: 7,
    name: "Epsom Girls Grammar School",
    nameCn: "爱普森女子文法学校",
    type: "Secondary",
    area: "Epsom",
    decile: 8,
    rating: 8.6,
    academicPerformance: 8.9,
    facilities: 8.5,
    extracurricular: 8.7,
    teachingQuality: 8.5,
    address: "Silver Road, Epsom, Auckland 1023",
    website: "https://www.eggs.school.nz",
    description: "Historic girls' school with strong academic record and emphasis on all-round education.",
    descriptionCn: "历史悠久的女子学校，学术记录优秀，注重全面教育。",
    tuitionFee: "Free (State School)",
    tuitionFeeCn: "免费（公立学校）",
    admissionRules: [
      "Girls only",
      "Year 9-13",
      "In-zone priority",
      "Ballot for out-of-zone"
    ],
    admissionRulesCn: [
      "仅限女生",
      "Year 9-13",
      "学区内优先",
      "学区外抽签"
    ],
    tips: [
      "Strong traditions and history",
      "Good academic results",
      "Active parent community",
      "Central location"
    ],
    tipsCn: [
      "传统深厚，历史悠久",
      "学术成绩良好",
      "家长社区活跃",
      "地理位置中心"
    ]
,
    internationalFee: "$16,000 - $18,000 per year",
    internationalFeeCn: "每年 $16,000 - $18,000 纽币",
    internationalTips: [
      "Student visa required",
      "English language test required (IELTS 5.0+)",
      "Limited ESOL support available",
      "Apply at least 6 months in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语考试（雅思5.0+）",
      "提供有限的英语辅导",
      "至少提前6个月申请"
    ]
  },
  {
    id: 8,
    name: "ACG Parnell College",
    nameCn: "ACG帕内尔学院",
    type: "Composite",
    area: "Parnell",
    decile: 10,
    rating: 8.9,
    academicPerformance: 9.2,
    facilities: 9.0,
    extracurricular: 8.7,
    teachingQuality: 8.8,
    address: "2 Titoki Street, Parnell, Auckland 1052",
    website: "https://www.parnell.acgedu.com",
    description: "Premium independent school offering IB and Cambridge curricula with modern facilities.",
    descriptionCn: "高端私立学校，提供IB和剑桥课程，设施现代化。",
    tuitionFee: "$28,000 - $42,000 per year",
    tuitionFeeCn: "每年 $28,000 - $42,000 纽币",
    admissionRules: [
      "Co-educational",
      "Year 1-13",
      "Entrance assessment",
      "Interview required"
    ],
    admissionRulesCn: [
      "男女混校",
      "Year 1-13",
      "入学评估",
      "需要面试"
    ],
    tips: [
      "IB and Cambridge pathways",
      "Small class sizes",
      "Modern campus facilities",
      "High fees but scholarships available"
    ],
    tipsCn: [
      "IB和剑桥双课程",
      "小班教学",
      "现代化校园",
      "学费较高但有奖学金"
    ]
,
    internationalFee: "Same as domestic fees",
    internationalFeeCn: "与本地生学费相同",
    internationalTips: [
      "Student visa required",
      "English proficiency test required",
      "Interview and assessment needed",
      "Apply 1-2 years in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语水平测试",
      "需要面试和评估",
      "提前1-2年申请"
    ]
  },
  {
    id: 9,
    name: "Kristin School",
    nameCn: "克里斯汀学校",
    type: "Composite",
    area: "Albany",
    decile: 10,
    rating: 8.7,
    academicPerformance: 8.9,
    facilities: 9.2,
    extracurricular: 8.6,
    teachingQuality: 8.5,
    address: "360 Albany Highway, Albany, Auckland 0632",
    website: "https://www.kristin.school.nz",
    description: "Large independent school with IB program and comprehensive sports facilities.",
    descriptionCn: "大型私立学校，IB课程，体育设施完善。",
    tuitionFee: "$26,000 - $38,000 per year",
    tuitionFeeCn: "每年 $26,000 - $38,000 纽币",
    admissionRules: [
      "Co-educational",
      "Year 1-13",
      "Assessment and interview",
      "Sibling priority"
    ],
    admissionRulesCn: [
      "男女混校",
      "Year 1-13",
      "评估和面试",
      "兄弟姐妹优先"
    ],
    tips: [
      "IB World School",
      "Excellent sports facilities",
      "Large campus with pool and courts",
      "Strong music program"
    ],
    tipsCn: [
      "IB世界学校",
      "优秀的体育设施",
      "大型校园，有泳池和球场",
      "音乐项目强大"
    ]
,
    internationalFee: "Same as domestic fees",
    internationalFeeCn: "与本地生学费相同",
    internationalTips: [
      "Student visa required",
      "English proficiency test required",
      "Interview and assessment needed",
      "Apply 1-2 years in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语水平测试",
      "需要面试和评估",
      "提前1-2年申请"
    ]
  },
  {
    id: 10,
    name: "Saint Kentigern College",
    nameCn: "圣肯特格恩学院",
    type: "Composite",
    area: "Pakuranga",
    decile: 10,
    rating: 8.8,
    academicPerformance: 9.0,
    facilities: 9.1,
    extracurricular: 8.8,
    teachingQuality: 8.6,
    address: "130 Pakuranga Road, Pakuranga, Auckland 2010",
    website: "https://www.saintkentigern.com",
    description: "Presbyterian school with excellent facilities and strong focus on Christian values.",
    descriptionCn: "长老会学校，设施优良，注重基督教价值观。",
    tuitionFee: "$24,000 - $36,000 per year",
    tuitionFeeCn: "每年 $24,000 - $36,000 纽币",
    admissionRules: [
      "Co-educational",
      "Year 1-13",
      "Entrance assessment",
      "Christian foundation"
    ],
    admissionRulesCn: [
      "男女混校",
      "Year 1-13",
      "入学评估",
      "基督教背景"
    ],
    tips: [
      "Strong Christian values",
      "Excellent facilities",
      "Good academic results",
      "Active parent involvement"
    ],
    tipsCn: [
      "重视基督教价值观",
      "设施优秀",
      "学术成绩良好",
      "家长参与度高"
    ]
,
    internationalFee: "Same as domestic fees",
    internationalFeeCn: "与本地生学费相同",
    internationalTips: [
      "Student visa required",
      "English proficiency test required",
      "Interview and assessment needed",
      "Apply 1-2 years in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语水平测试",
      "需要面试和评估",
      "提前1-2年申请"
    ]
  },
  {
    id: 11,
    name: "Ponsonby Primary School",
    nameCn: "庞森比小学",
    type: "Primary",
    area: "Ponsonby",
    decile: 10,
    rating: 8.5,
    academicPerformance: 8.7,
    facilities: 8.3,
    extracurricular: 8.6,
    teachingQuality: 8.5,
    address: "5 Curran Street, Ponsonby, Auckland 1011",
    website: "https://www.ponsonby.school.nz",
    description: "Popular inner-city primary school with diverse community and strong arts program.",
    descriptionCn: "热门市中心小学，社区多元，艺术项目强。",
    tuitionFee: "Free (State School)",
    tuitionFeeCn: "免费（公立学校）",
    admissionRules: [
      "Co-educational",
      "Year 1-6",
      "In-zone priority",
      "Very limited out-of-zone spaces"
    ],
    admissionRulesCn: [
      "男女混校",
      "Year 1-6",
      "学区内优先",
      "学区外名额极少"
    ],
    tips: [
      "Very popular - check zone early",
      "Strong arts focus",
      "Diverse community",
      "Central location"
    ],
    tipsCn: [
      "非常热门 - 提前查看学区",
      "艺术重点强",
      "社区多元化",
      "地理位置中心"
    ]
,
    internationalFee: "$13,000 - $15,000 per year",
    internationalFeeCn: "每年 $13,000 - $15,000 纽币",
    internationalTips: [
      "Student visa required",
      "English language test required (IELTS 5.0+)",
      "Limited ESOL support available",
      "Apply at least 6 months in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语考试（雅思5.0+）",
      "提供有限的英语辅导",
      "至少提前6个月申请"
    ]
  },
  {
    id: 12,
    name: "Remuera Primary School",
    nameCn: "瑞穆拉小学",
    type: "Primary",
    area: "Remuera",
    decile: 10,
    rating: 8.4,
    academicPerformance: 8.6,
    facilities: 8.2,
    extracurricular: 8.5,
    teachingQuality: 8.4,
    address: "18 Ascot Avenue, Remuera, Auckland 1050",
    website: "https://www.remuera.school.nz",
    description: "Well-established primary school in affluent suburb with strong academic tradition.",
    descriptionCn: "富裕社区的知名小学，学术传统优良。",
    tuitionFee: "Free (State School)",
    tuitionFeeCn: "免费（公立学校）",
    admissionRules: [
      "Co-educational",
      "Year 1-6",
      "In-zone enrollment",
      "Strict zone boundaries"
    ],
    admissionRulesCn: [
      "男女混校",
      "Year 1-6",
      "学区内入学",
      "严格的学区边界"
    ],
    tips: [
      "Traditional academic focus",
      "Well-resourced school",
      "Strong parent community",
      "Property in zone very expensive"
    ],
    tipsCn: [
      "传统学术重点",
      "资源充足",
      "家长社区强大",
      "学区内房产昂贵"
    ]
,
    internationalFee: "$13,000 - $15,000 per year",
    internationalFeeCn: "每年 $13,000 - $15,000 纽币",
    internationalTips: [
      "Student visa required",
      "English language test required (IELTS 5.0+)",
      "Limited ESOL support available",
      "Apply at least 6 months in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语考试（雅思5.0+）",
      "提供有限的英语辅导",
      "至少提前6个月申请"
    ]
  },
  {
    id: 13,
    name: "Mt Albert Grammar School",
    nameCn: "艾伯特山文法学校",
    type: "Secondary",
    area: "Mt Albert",
    decile: 7,
    rating: 8.3,
    academicPerformance: 8.5,
    facilities: 8.2,
    extracurricular: 8.4,
    teachingQuality: 8.2,
    address: "Alberton Avenue, Mt Albert, Auckland 1025",
    website: "https://www.mags.school.nz",
    description: "Large co-educational school with strong sporting and academic programs.",
    descriptionCn: "大型男女混校，体育和学术项目都很强。",
    tuitionFee: "Free (State School)",
    tuitionFeeCn: "免费（公立学校）",
    admissionRules: [
      "Co-educational",
      "Year 9-13",
      "In-zone priority",
      "Special character - focus on rugby"
    ],
    admissionRulesCn: [
      "男女混校",
      "Year 9-13",
      "学区内优先",
      "橄榄球特色学校"
    ],
    tips: [
      "Famous rugby program",
      "Large diverse school",
      "Good academic options",
      "Central Auckland location"
    ],
    tipsCn: [
      "著名橄榄球项目",
      "大型多元化学校",
      "良好的学术选择",
      "中央奥克兰地理位置"
    ]
,
    internationalFee: "$16,000 - $18,000 per year",
    internationalFeeCn: "每年 $16,000 - $18,000 纽币",
    internationalTips: [
      "Student visa required",
      "English language test required (IELTS 5.0+)",
      "Limited ESOL support available",
      "Apply at least 6 months in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语考试（雅思5.0+）",
      "提供有限的英语辅导",
      "至少提前6个月申请"
    ]
  },
  {
    id: 14,
    name: "Baradene College",
    nameCn: "巴拉丹学院",
    type: "Secondary",
    area: "Remuera",
    decile: 10,
    rating: 8.6,
    academicPerformance: 8.8,
    facilities: 8.5,
    extracurricular: 8.7,
    teachingQuality: 8.5,
    address: "Sturdee Street, Remuera, Auckland 1050",
    website: "https://www.baradene.school.nz",
    description: "Catholic girls' school with excellent academic record and strong community values.",
    descriptionCn: "天主教女子学校，学术记录优秀，社区价值观强。",
    tuitionFee: "$500 - $1,500 per year (Catholic integrated)",
    tuitionFeeCn: "每年 $500 - $1,500 纽币（天主教融合学校）",
    admissionRules: [
      "Girls only",
      "Year 7-13",
      "Catholic preference",
      "Character reference required"
    ],
    admissionRulesCn: [
      "仅限女生",
      "Year 7-13",
      "天主教优先",
      "需要品格推荐信"
    ],
    tips: [
      "Catholic values important",
      "Strong sense of community",
      "Good academic results",
      "Lower fees than independent schools"
    ],
    tipsCn: [
      "重视天主教价值观",
      "社区意识强",
      "学术成绩好",
      "学费比私立学校低"
    ]
,
    internationalFee: "Same as domestic fees",
    internationalFeeCn: "与本地生学费相同",
    internationalTips: [
      "Student visa required",
      "English proficiency test required",
      "Interview and assessment needed",
      "Apply 1-2 years in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语水平测试",
      "需要面试和评估",
      "提前1-2年申请"
    ]
  },
  {
    id: 15,
    name: "Takapuna Grammar School",
    nameCn: "塔卡普纳文法学校",
    type: "Secondary",
    area: "Takapuna",
    decile: 8,
    rating: 8.2,
    academicPerformance: 8.4,
    facilities: 8.1,
    extracurricular: 8.3,
    teachingQuality: 8.1,
    address: "210 Lake Road, Takapuna, Auckland 0622",
    website: "https://www.takapuna.school.nz",
    description: "Co-educational state school on the North Shore with strong community links.",
    descriptionCn: "北岸男女混校公立学校，社区联系紧密。",
    tuitionFee: "Free (State School)",
    tuitionFeeCn: "免费（公立学校）",
    admissionRules: [
      "Co-educational",
      "Year 9-13",
      "In-zone priority",
      "Out-of-zone ballot"
    ],
    admissionRulesCn: [
      "男女混校",
      "Year 9-13",
      "学区内优先",
      "学区外抽签"
    ],
    tips: [
      "Good all-round school",
      "Beach community vibe",
      "Solid academic program",
      "Good sports facilities"
    ],
    tipsCn: [
      "综合性优良学校",
      "海滨社区氛围",
      "学术项目稳健",
      "体育设施良好"
    ]
,
    internationalFee: "$16,000 - $18,000 per year",
    internationalFeeCn: "每年 $16,000 - $18,000 纽币",
    internationalTips: [
      "Student visa required",
      "English language test required (IELTS 5.0+)",
      "Limited ESOL support available",
      "Apply at least 6 months in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语考试（雅思5.0+）",
      "提供有限的英语辅导",
      "至少提前6个月申请"
    ]
  },
  {
    id: 16,
    name: "King's College",
    nameCn: "国王学院",
    type: "Secondary",
    area: "Otahuhu",
    decile: 10,
    rating: 8.5,
    academicPerformance: 8.7,
    facilities: 8.8,
    extracurricular: 8.6,
    teachingQuality: 8.3,
    address: "363 Middlemore Road, Otahuhu, Auckland 2025",
    website: "https://www.kingscollege.school.nz",
    description: "Independent boys' boarding and day school with extensive grounds and facilities.",
    descriptionCn: "独立男子寄宿和走读学校，场地和设施广阔。",
    tuitionFee: "$38,000 - $55,000 per year (boarding higher)",
    tuitionFeeCn: "每年 $38,000 - $55,000 纽币（寄宿更高）",
    admissionRules: [
      "Boys only",
      "Year 9-13",
      "Entrance exam required",
      "Boarding and day options"
    ],
    admissionRulesCn: [
      "仅限男生",
      "Year 9-13",
      "需要入学考试",
      "寄宿和走读选项"
    ],
    tips: [
      "Prestigious boys' school",
      "Excellent boarding facilities",
      "Strong rugby tradition",
      "Apply early for boarding"
    ],
    tipsCn: [
      "名牌男子学校",
      "优秀的寄宿设施",
      "橄榄球传统强",
      "寄宿需提前申请"
    ]
,
    internationalFee: "Same as domestic fees",
    internationalFeeCn: "与本地生学费相同",
    internationalTips: [
      "Student visa required",
      "English proficiency test required",
      "Interview and assessment needed",
      "Apply 1-2 years in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语水平测试",
      "需要面试和评估",
      "提前1-2年申请"
    ]
  },
  {
    id: 17,
    name: "St Cuthbert's College",
    nameCn: "圣卡斯伯特学院",
    type: "Composite",
    area: "Epsom",
    decile: 10,
    rating: 8.7,
    academicPerformance: 8.9,
    facilities: 8.8,
    extracurricular: 8.7,
    teachingQuality: 8.6,
    address: "122 Market Road, Epsom, Auckland 1023",
    website: "https://www.stcuthberts.school.nz",
    description: "Presbyterian girls' school with IB program and strong performing arts tradition.",
    descriptionCn: "长老会女子学校，IB课程，表演艺术传统强。",
    tuitionFee: "$30,000 - $40,000 per year",
    tuitionFeeCn: "每年 $30,000 - $40,000 纽币",
    admissionRules: [
      "Girls only",
      "Year 1-13",
      "Entrance assessment",
      "Interview for senior years"
    ],
    admissionRulesCn: [
      "仅限女生",
      "Year 1-13",
      "入学评估",
      "高年级需面试"
    ],
    tips: [
      "IB World School",
      "Strong performing arts",
      "Excellent facilities",
      "Apply 1-2 years ahead"
    ],
    tipsCn: [
      "IB世界学校",
      "表演艺术强",
      "设施优秀",
      "提前1-2年申请"
    ]
,
    internationalFee: "Same as domestic fees",
    internationalFeeCn: "与本地生学费相同",
    internationalTips: [
      "Student visa required",
      "English proficiency test required",
      "Interview and assessment needed",
      "Apply 1-2 years in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语水平测试",
      "需要面试和评估",
      "提前1-2年申请"
    ]
  },
  {
    id: 18,
    name: "Glendowie College",
    nameCn: "格伦多伊学院",
    type: "Secondary",
    area: "Glendowie",
    decile: 9,
    rating: 8.1,
    academicPerformance: 8.3,
    facilities: 8.0,
    extracurricular: 8.2,
    teachingQuality: 8.0,
    address: "1 Crossfield Road, Glendowie, Auckland 1071",
    website: "https://www.glendowie.school.nz",
    description: "Co-educational state school with positive learning environment and good results.",
    descriptionCn: "男女混校公立学校，学习环境积极，成绩良好。",
    tuitionFee: "Free (State School)",
    tuitionFeeCn: "免费（公立学校）",
    admissionRules: [
      "Co-educational",
      "Year 9-13",
      "In-zone priority",
      "Limited out-of-zone"
    ],
    admissionRulesCn: [
      "男女混校",
      "Year 9-13",
      "学区内优先",
      "学区外名额有限"
    ],
    tips: [
      "Medium-sized school",
      "Good community feel",
      "Solid academic results",
      "Eastern suburbs location"
    ],
    tipsCn: [
      "中等规模学校",
      "社区感好",
      "学术成绩稳健",
      "东区地理位置"
    ]
,
    internationalFee: "$16,000 - $18,000 per year",
    internationalFeeCn: "每年 $16,000 - $18,000 纽币",
    internationalTips: [
      "Student visa required",
      "English language test required (IELTS 5.0+)",
      "Limited ESOL support available",
      "Apply at least 6 months in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语考试（雅思5.0+）",
      "提供有限的英语辅导",
      "至少提前6个月申请"
    ]
  },
  {
    id: 19,
    name: "Carmel College",
    nameCn: "卡梅尔学院",
    type: "Secondary",
    area: "Milford",
    decile: 10,
    rating: 8.4,
    academicPerformance: 8.6,
    facilities: 8.3,
    extracurricular: 8.5,
    teachingQuality: 8.3,
    address: "100 Carmel Road, Milford, Auckland 0620",
    website: "https://www.carmel.school.nz",
    description: "Catholic girls' school with strong values-based education and academic focus.",
    descriptionCn: "天主教女子学校，重视价值观教育和学术。",
    tuitionFee: "$800 - $2,000 per year (Catholic integrated)",
    tuitionFeeCn: "每年 $800 - $2,000 纽币（天主教融合学校）",
    admissionRules: [
      "Girls only",
      "Year 7-13",
      "Catholic preference",
      "Character reference"
    ],
    admissionRulesCn: [
      "仅限女生",
      "Year 7-13",
      "天主教优先",
      "需品格推荐"
    ],
    tips: [
      "Strong Catholic ethos",
      "Good academic results",
      "Supportive environment",
      "Lower fees than private schools"
    ],
    tipsCn: [
      "天主教精神强",
      "学术成绩好",
      "支持性环境",
      "学费比私校低"
    ]
,
    internationalFee: "Same as domestic fees",
    internationalFeeCn: "与本地生学费相同",
    internationalTips: [
      "Student visa required",
      "English proficiency test required",
      "Interview and assessment needed",
      "Apply 1-2 years in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语水平测试",
      "需要面试和评估",
      "提前1-2年申请"
    ]
  },
  {
    id: 20,
    name: "Long Bay College",
    nameCn: "长湾学院",
    type: "Secondary",
    area: "Torbay",
    decile: 9,
    rating: 8.0,
    academicPerformance: 8.2,
    facilities: 8.3,
    extracurricular: 8.0,
    teachingQuality: 7.9,
    address: "30 Chapel Road, Torbay, Auckland 0630",
    website: "https://www.longbay.school.nz",
    description: "Modern co-educational school serving the North Shore's beach communities.",
    descriptionCn: "现代化男女混校，服务北岸海滨社区。",
    tuitionFee: "Free (State School)",
    tuitionFeeCn: "免费（公立学校）",
    admissionRules: [
      "Co-educational",
      "Year 9-13",
      "In-zone priority",
      "Out-of-zone ballot"
    ],
    admissionRulesCn: [
      "男女混校",
      "Year 9-13",
      "学区内优先",
      "学区外抽签"
    ],
    tips: [
      "Beach community school",
      "Modern facilities",
      "Good outdoor education",
      "Growing area"
    ],
    tipsCn: [
      "海滨社区学校",
      "现代化设施",
      "户外教育好",
      "发展中地区"
    ]
,
    internationalFee: "$16,000 - $18,000 per year",
    internationalFeeCn: "每年 $16,000 - $18,000 纽币",
    internationalTips: [
      "Student visa required",
      "English language test required (IELTS 5.0+)",
      "Limited ESOL support available",
      "Apply at least 6 months in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语考试（雅思5.0+）",
      "提供有限的英语辅导",
      "至少提前6个月申请"
    ]
  },
  {
    id: 21,
    name: "Avondale College",
    nameCn: "艾文代尔学院",
    type: "Secondary",
    area: "Avondale",
    decile: 4,
    rating: 7.5,
    academicPerformance: 7.6,
    facilities: 7.4,
    extracurricular: 7.7,
    teachingQuality: 7.5,
    address: "356 Rosebank Road, Avondale, Auckland 1026",
    website: "https://www.avondale.school.nz",
    description: "Large diverse school with strong multicultural community and improving results.",
    descriptionCn: "大型多元化学校，多元文化社区，成绩不断提升。",
    tuitionFee: "Free (State School)",
    tuitionFeeCn: "免费（公立学校）",
    admissionRules: [
      "Co-educational",
      "Year 9-13",
      "Open enrollment",
      "Accepts many out-of-zone students"
    ],
    admissionRulesCn: [
      "男女混校",
      "Year 9-13",
      "开放招生",
      "接受学区外学生"
    ],
    tips: [
      "Very diverse community",
      "Many international students",
      "Wide subject choices",
      "Good for multicultural experience"
    ],
    tipsCn: [
      "社区非常多元",
      "国际学生多",
      "科目选择广",
      "适合多元文化体验"
    ]
,
    internationalFee: "$16,000 - $18,000 per year",
    internationalFeeCn: "每年 $16,000 - $18,000 纽币",
    internationalTips: [
      "Student visa required",
      "English language test required (IELTS 5.0+)",
      "Limited ESOL support available",
      "Apply at least 6 months in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语考试（雅思5.0+）",
      "提供有限的英语辅导",
      "至少提前6个月申请"
    ]
  },
  {
    id: 22,
    name: "Auckland International College",
    nameCn: "奥克兰国际学院",
    type: "Secondary",
    area: "Blockhouse Bay",
    decile: 10,
    rating: 8.6,
    academicPerformance: 9.0,
    facilities: 8.5,
    extracurricular: 8.4,
    teachingQuality: 8.5,
    address: "37 Blockhouse Bay Road, Blockhouse Bay, Auckland 0600",
    website: "https://www.aic.ac.nz",
    description: "Specialist IB school with strong international focus and excellent exam results.",
    descriptionCn: "专业IB学校，国际化重点，考试成绩优异。",
    tuitionFee: "$35,000 - $45,000 per year",
    tuitionFeeCn: "每年 $35,000 - $45,000 纽币",
    admissionRules: [
      "Co-educational",
      "Year 11-13 (IB only)",
      "Academic assessment required",
      "International students welcome"
    ],
    admissionRulesCn: [
      "男女混校",
      "Year 11-13（仅IB）",
      "需要学术评估",
      "欢迎国际学生"
    ],
    tips: [
      "IB specialists - no NCEA",
      "Top IB results in NZ",
      "Many international students",
      "Intense academic focus"
    ],
    tipsCn: [
      "IB专业 - 无NCEA",
      "新西兰顶级IB成绩",
      "国际学生多",
      "学术强度大"
    ]
,
    internationalFee: "Same as domestic fees",
    internationalFeeCn: "与本地生学费相同",
    internationalTips: [
      "Student visa required",
      "English proficiency test required",
      "Interview and assessment needed",
      "Apply 1-2 years in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语水平测试",
      "需要面试和评估",
      "提前1-2年申请"
    ]
  },
  {
    id: 23,
    name: "Massey High School",
    nameCn: "马西高中",
    type: "Secondary",
    area: "Massey",
    decile: 5,
    rating: 7.3,
    academicPerformance: 7.4,
    facilities: 7.2,
    extracurricular: 7.5,
    teachingQuality: 7.3,
    address: "Don Buck Road, Massey, Auckland 0614",
    website: "https://www.massey.school.nz",
    description: "West Auckland school with supportive environment and focus on student success.",
    descriptionCn: "西奥克兰学校，环境支持性强，注重学生成功。",
    tuitionFee: "Free (State School)",
    tuitionFeeCn: "免费（公立学校）",
    admissionRules: [
      "Co-educational",
      "Year 9-13",
      "Open enrollment",
      "Out-of-zone welcome"
    ],
    admissionRulesCn: [
      "男女混校",
      "Year 9-13",
      "开放招生",
      "欢迎学区外学生"
    ],
    tips: [
      "Supportive environment",
      "Good for diverse learners",
      "West Auckland location",
      "Focus on individual success"
    ],
    tipsCn: [
      "支持性环境",
      "适合多元学习者",
      "西奥克兰地理位置",
      "注重个体成功"
    ]
,
    internationalFee: "$16,000 - $18,000 per year",
    internationalFeeCn: "每年 $16,000 - $18,000 纽币",
    internationalTips: [
      "Student visa required",
      "English language test required (IELTS 5.0+)",
      "Limited ESOL support available",
      "Apply at least 6 months in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语考试（雅思5.0+）",
      "提供有限的英语辅导",
      "至少提前6个月申请"
    ]
  },
  {
    id: 24,
    name: "Lynfield College",
    nameCn: "林菲尔德学院",
    type: "Secondary",
    area: "Lynfield",
    decile: 7,
    rating: 7.8,
    academicPerformance: 8.0,
    facilities: 7.7,
    extracurricular: 7.9,
    teachingQuality: 7.7,
    address: "191 White Swan Road, Lynfield, Auckland 1042",
    website: "https://www.lynfield.school.nz",
    description: "Co-educational school with good academic programs and community engagement.",
    descriptionCn: "男女混校，学术项目好，社区参与度高。",
    tuitionFee: "Free (State School)",
    tuitionFeeCn: "免费（公立学校）",
    admissionRules: [
      "Co-educational",
      "Year 9-13",
      "In-zone priority",
      "Out-of-zone accepted"
    ],
    admissionRulesCn: [
      "男女混校",
      "Year 9-13",
      "学区内优先",
      "接受学区外学生"
    ],
    tips: [
      "Good all-rounder school",
      "Strong sports programs",
      "Community focused",
      "Central-west location"
    ],
    tipsCn: [
      "综合性良好学校",
      "体育项目强",
      "注重社区",
      "中西部地理位置"
    ]
,
    internationalFee: "$16,000 - $18,000 per year",
    internationalFeeCn: "每年 $16,000 - $18,000 纽币",
    internationalTips: [
      "Student visa required",
      "English language test required (IELTS 5.0+)",
      "Limited ESOL support available",
      "Apply at least 6 months in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语考试（雅思5.0+）",
      "提供有限的英语辅导",
      "至少提前6个月申请"
    ]
  },
  {
    id: 25,
    name: "Ormiston Junior College",
    nameCn: "奥米斯顿初中",
    type: "Intermediate",
    area: "Flat Bush",
    decile: 6,
    rating: 7.6,
    academicPerformance: 7.8,
    facilities: 8.2,
    extracurricular: 7.5,
    teachingQuality: 7.4,
    address: "435 Flat Bush School Road, Flat Bush, Auckland 2016",
    website: "https://www.ormistonjuniorcollege.school.nz",
    description: "Modern school in growing area with innovative learning spaces and technology focus.",
    descriptionCn: "发展中地区的现代学校，创新学习空间，注重科技。",
    tuitionFee: "Free (State School)",
    tuitionFeeCn: "免费（公立学校）",
    admissionRules: [
      "Co-educational",
      "Year 7-10",
      "In-zone priority",
      "New school - growing enrollment"
    ],
    admissionRulesCn: [
      "男女混校",
      "Year 7-10",
      "学区内优先",
      "新学校 - 招生增长中"
    ],
    tips: [
      "Modern facilities",
      "Technology focused",
      "Growing community",
      "South Auckland location"
    ],
    tipsCn: [
      "现代化设施",
      "注重科技",
      "发展中社区",
      "南奥克兰地理位置"
    ],
    internationalFee: "$14,000 - $16,000 per year",
    internationalFeeCn: "每年 $14,000 - $16,000 纽币",
    internationalTips: [
      "Student visa required",
      "English language test required (IELTS 5.0+)",
      "Limited ESOL support available",
      "Apply at least 6 months in advance"
    ],
    internationalTipsCn: [
      "需要学生签证",
      "需要英语考试（雅思5.0+）",
      "提供有限的英语辅导",
      "至少提前6个月申请"
    ]
  }
];
