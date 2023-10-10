# Программа для вычисления положения мяча при вертикальном движении

v0 = 50  #Начальная скорость (м/с)

g = int(9.80665) # Ускорение свободного падения (м/с^2)

t = (0.1) # Время (с)

 

y = v0*t - 1/2*g*t**2 # (м)

 

print (y)

print('{:<30} {:.5e} м/с'.format('Начальная скорость', v0))

#error 1 --->

del v0, g, t, y

'''
errors:
1. name 'hi' is not defined
2. v0 = 50  Начальная скорость (м/с)
             ^
SyntaxError: invalid syntax
3. v0  50  #Начальная скорость (м/с)
        ^
SyntaxError: invalid syntax
4. pint (y)
NameError: name 'pint' is not defined
5. print (x)
NameError: name 'x' is not defined
6. 4.955
Начальная скорость             5.00000e+01 м/с
 
'''
