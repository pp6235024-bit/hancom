from ultralytics import solutions

# 1. Streamlit 추론 인스턴스 생성
inf = solutions.Inference(model="yolo11n.pt")
model="yolo11n.pt"