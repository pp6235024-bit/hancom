from ultralytics import FastSAM
import cv2

# 1.이미지 경로 
source = "output-fast_sam_result.jpg"

# 2. FastSAM 모델 로드 (s = small, 가장 가벼움)
model = FastSAM("FastSAM-s.pt")

# 3. 텍스트 프롬프트로 
results = model(source, texts="rabbit")

# 4. 결과 이미지로 
output_path = "output-fast_sam_result.jpg"
output_image = results[0].plot()   # 마스크가 합성된 numpy 이미지 배열

# 5. 결과 이미지 저장
cv2.imwrite(output_path, output_image)

# output_image는 이미지 '배열'이라 그대로 출력하면 숫자가 수천 줄 쏟아짐 → 경로를 출력
print(f"결과 이미지가 잘 저장 됐습니다. {output_path}")