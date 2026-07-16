def meters_to_feet(meters):

    whil True:
    #사용자입력
    user_input =input("미터값을 입력해주세요:")
    
    #예외 처리 
    try:
        meters=float(user_input)
        feet=meters_to_feet_(meters)
        print (f"{meters}m는 {feet}ft 입니다.")
        break
    except ValueError
    print("숫자를 입력해주세요.")