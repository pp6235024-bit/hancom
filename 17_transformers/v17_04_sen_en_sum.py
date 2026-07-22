from transformers import pipeline

# 1. 요약 파이프라인 생성
summarizer = pipeline(
    "summarization",
      model="t5-small"
      )

# 2. 요약할 원문
I won’t describe what I look like. Whatever you’re thinking, it’s probably worse.

August Pullman was born with a facial difference that, up until now, has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated as an ordinary kid-but his new classmates can’t get past Auggie’s extraordinary face. WONDER, now a #1 New York Times bestseller and included on the Texas Bluebonnet Award master list, begins from Auggie’s point of view, but soon switches to include his classmates, his sister, her boyfriend, and others. These perspectives converge in a portrait of one community’s struggle with empathy, compassion, and acceptance.

“Wonder is the best kids’ book of the year,” said Emily Bazelon, senior editor at Slate.com and author of Sticks and Stones: Defeating the Culture of Bullying and Rediscovering the Power of Character and Empathy. In a world where bullying among young people is an epidemic, this is a refreshing new narrative full of heart and hope. R.J. Palacio has called her debut novel “a meditation on kindness” -indeed, every reader will come away with a greater appreciation for the simple courage of friendship. Auggie is a hero to root for, a diamond in the rough who proves that you can’t blend in when you were born to stand out.

Join the conversation: #thewonderofwonder

#결과
 I won’t describe what I look like. Whatever you’re thinking, it’s probably worse.
         ^
SyntaxError: invalid character '’' (U+2019)


# 3. 요약 실행
summary = summarizer(
    text,
    min_length=20,   # 최소 토큰 수 → 너무 짧은 요약 방지
    max_length=60,   # 최대 토큰 수 → 길이 폭주 방지
    do_sample=False
)
# 4. 결과확인
sum_text = summary[0]['summary_text']  
print(f"요약된 문장 : {sum_text}")
