#람다 공식
#함수명=lamda매개변수(파라미터):반환값

#def add(a,b)
 #   return a+b
#print(add(7,3))
#10
add=lambda a,b:a+b
print(add(7,3))
#10

#글자를 넣으면 큰 그림 글씨로 출력 (pyfiglet)해주는 lamda 함수
#import pyfiglet

#big_picturetext = lambda 글자: print(pyfiglet.figlet_format(글자))

#big_picturetext("Hello")


#def decprat_text(text)
 #   return pyfigle,figlet_format(text)


#함수명 =lambda 파라미터:반환값
decorate_text=lambda text:pyfiglet_format(text)
print(decrate_text)