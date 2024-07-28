import json
import os

# 카테고리 파일 경로 설정
category_files = {
    'technology': 'E:/Personal/Coding/nodejs/jsScript/jsScript/pythonPrograms/jsonFiles/response_technology.json',
    'sports': 'E:/Personal/Coding/nodejs/jsScript/jsScript/pythonPrograms/jsonFiles/response_sports.json',
    'business': 'E:/Personal/Coding/nodejs/jsScript/jsScript/pythonPrograms/jsonFiles/response_business.json',
    'entertainment': 'E:/Personal/Coding/nodejs/jsScript/jsScript/pythonPrograms/jsonFiles/response_entertainment.json',
    'health': 'E:/Personal/Coding/nodejs/jsScript/jsScript/pythonPrograms/jsonFiles/response_health.json',
    'science': 'E:/Personal/Coding/nodejs/jsScript/jsScript/pythonPrograms/jsonFiles/response_science.json'
}

# 각 파일에 카테고리 메타데이터 추가
category_data = []

for category, file_path in category_files.items():
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
        for article in data['articles']:
            article['category'] = category
        category_data.extend(data['articles'])

# 결합된 데이터 구조 생성
combined_data = {
    "status": "ok",
    "totalResults": len(category_data),
    "articles": category_data
}

# 결합된 데이터를 response_after.json에 저장
response_after_file = 'E:/Personal/Coding/nodejs/jsScript/jsScript/pythonPrograms/response_after.json'
with open(response_after_file, 'w', encoding='utf-8') as file:
    json.dump(combined_data, file, ensure_ascii=False, indent=2)

print(f"Combined JSON saved to {response_after_file}")