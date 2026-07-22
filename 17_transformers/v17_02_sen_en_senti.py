from transformers import pipeline
#pipeline:텍스트, 이미지 등 다양한 AI 테스크를 쉽게 실행할 수 잇는 도구 
# 1. 감정 분석 파이프라인 생성
classifier = pipeline("sentiment-analysis")

# 2. 감정 분석할 문장 입력 
#text = "I'm feeling really great today"
  
#결과
#감정 분석 결과 : POSITIVE
#감정 분석 점수 : 0.9999

text="I'm having a hard time today"


# 3. 결과 확인 
print(f"감정 분석 결과 : {results[0]['label']}")  #neagtive|positive 
print(f"감정 분석 점수 : {results[0]['score']:.4f}")#확률 값 0~1

#결과
#감정 분석 결과 : POSITIVE
#감정 분석 점수 : 0.9999