def meters_to_feet(meters):
    feet=meters*3.28084
    return feet
#사용자 입력 
user_input =input("미터 값을 입력해주세요:")

#예외처리
try:
    meters=user_input
    feet=meters_to_feet(meters)
    print(f"{meters}m는 {feet}ft 입니다")
except  valueError:
    print9("숫자를 입력해주세요.")
    try:
    meters = float(user_input)   # 숫자 변환 시도
    feet = meters * 3.28084
    print(f"{meters}m는 {feet:.2f}ft입니다.")
except ValueError:
    print("숫자를 입력해주세요.")  # 변환 실패 시 실행