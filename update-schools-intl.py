#!/usr/bin/env python3
import re

# Read the file
with open('/home/user/Claudecode/data/schools.ts', 'r') as f:
    content = f.read()

# Define international fees and tips for different school types
def get_intl_data(school_type, is_public):
    """Get international fees and tips based on school type"""

    if not is_public:
        # Private schools - same fees for all
        return {
            'fee_en': 'Same as domestic fees',
            'fee_zh': '与本地生学费相同',
            'tips_en': [
                "Student visa required",
                "English proficiency test required",
                "Interview and assessment needed",
                "Apply 1-2 years in advance"
            ],
            'tips_zh': [
                "需要学生签证",
                "需要英语水平测试",
                "需要面试和评估",
                "提前1-2年申请"
            ]
        }

    # Public schools - different fees by type
    fees = {
        'Primary': {
            'en': "$13,000 - $15,000 per year",
            'zh': "每年 $13,000 - $15,000 纽币"
        },
        'Secondary': {
            'en': "$16,000 - $18,000 per year",
            'zh': "每年 $16,000 - $18,000 纽币"
        },
        'Intermediate': {
            'en': "$14,000 - $16,000 per year",
            'zh': "每年 $14,000 - $16,000 纽币"
        },
        'Composite': {
            'en': "$14,000 - $18,000 per year",
            'zh': "每年 $14,000 - $18,000 纽币"
        }
    }

    fee = fees.get(school_type, fees['Secondary'])

    return {
        'fee_en': fee['en'],
        'fee_zh': fee['zh'],
        'tips_en': [
            "Student visa required",
            "English language test required (IELTS 5.0+)",
            "Limited ESOL support available",
            "Apply at least 6 months in advance"
        ],
        'tips_zh': [
            "需要学生签证",
            "需要英语考试（雅思5.0+）",
            "提供有限的英语辅导",
            "至少提前6个月申请"
        ]
    }

# Find all schools that need updating (those without internationalFee)
# Match school objects
pattern = r'(\s+\{\s+id: \d+,.*?)(  \},)'

def add_intl_fields(match):
    school_block = match.group(1)
    closing = match.group(2)

    # Skip if already has internationalFee
    if 'internationalFee:' in school_block:
        return match.group(0)

    # Extract school type
    type_match = re.search(r'type: ["\'](\w+)["\']', school_block)
    school_type = type_match.group(1) if type_match else 'Secondary'

    # Determine if public (check tuitionFee for "Free")
    is_public = 'Free (' in school_block or '免费' in school_block

    # Get international data
    intl_data = get_intl_data(school_type, is_public)

    # Find position after tipsCn
    tips_cn_end = school_block.rfind(']')
    if tips_cn_end == -1:
        return match.group(0)

    # Insert international fields
    insert_text = f''',
    internationalFee: "{intl_data['fee_en']}",
    internationalFeeCn: "{intl_data['fee_zh']}",
    internationalTips: [
      "{intl_data['tips_en'][0]}",
      "{intl_data['tips_en'][1]}",
      "{intl_data['tips_en'][2]}",
      "{intl_data['tips_en'][3]}"
    ],
    internationalTipsCn: [
      "{intl_data['tips_zh'][0]}",
      "{intl_data['tips_zh'][1]}",
      "{intl_data['tips_zh'][2]}",
      "{intl_data['tips_zh'][3]}"
    ]'''

    result = school_block + insert_text + '\n' + closing
    return result

# Apply the transformation
updated_content = re.sub(pattern, add_intl_fields, content, flags=re.DOTALL)

# Write back
with open('/home/user/Claudecode/data/schools.ts', 'w') as f:
    f.write(updated_content)

print("Successfully updated all schools with international student data!")
