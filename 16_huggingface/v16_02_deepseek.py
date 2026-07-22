import os
from huggingface_hub import InferenceClient

client = InferenceClient(
    api_key=os.environ["hf_token"],
)
answer = input("질문을 입력해주세요 : ")

completion = client.chat.completions.create(
    model="deepseek-ai/DeepSeek-V3.2:novita",
    messages=[
        {
            "role": "user",
            "content": answer
        }
    ],
)

print(completion.choices[0].message)