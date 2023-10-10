n = int(input())
Joe_string = input().split()
True_string = input().split()
flag = False
Joe_string = list(Joe_string)
True_string = list(True_string)
for i in range(len(Joe_string)-1):
    for j in range(1, len(Joe_string)):
        mass = Joe_string[i]
        dop = 0
        
        for z in range(i+1,j+1):
            mass += Joe_string[z]
        
        mass = list(mass)
        mass.sort()
         
        for z in range(i,j+1):
            Joe_string[i] = mass [dop]
            dop += 1

        if Joe_string == True_string:
            flag = True 
if flag == True:
    print("YES")
else:
    print("NO")