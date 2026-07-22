from transformers import pipeline

# 1. 텍스트 생성 파이프라인 생성
generator = pipeline(
    "text-generation", 
    model="gpt2"
    )

# 2. 시드 문장 입력
answer = input("생성 문장을 입력해주세요 : ")

# 3. 텍스트 생성 실행
result = generator(
    answer,
    max_new_tokens=50,       # 추가 생성할 토큰 수(길수록 추론 시간 길어짐)
    num_return_sequences=1,  # 반환 문장 개수
    truncation=True          # 입력이 모델 최대 길이 초과 시 자르기
)

# 4. 결과 확인
print(result[0]["generated_text"])

#결과
# Ignoring clean_up_tokenization_spaces=True for BPE tokenizer GPT2Tokenizer. The clean_up_tokenization post-processing step is designed for WordPiece tokenizers and is destructive for BPE (it strips spaces before punctuation). Set clean_up_tokenization_spaces=False to suppress this warning, or set clean_up_tokenization_spaces_for_bpe_even_though_it_will_corrupt_output=True to force cleanup anyway.
hello and his wife, who also live in the area, said she was shocked.

"I was so shocked," she said. "I thought it was a big mistake."

The couple, who have three children, also have two other