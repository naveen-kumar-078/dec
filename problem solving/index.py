# num = int(input("Enter an integer (1-3999): "))

# # List of values and corresponding Roman symbols
# values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
# symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

# roman = ""
# i = 0

# while num > 0:
#     while num >= values[i]:
#         num -= values[i]
#         roman += symbols[i]
#     i += 1

# print("Roman numeral:", roman)


# n = int(input("enter your number"))

# if n<0:
#     print("enter your valid number")

# else:
#     reversed_num = 0
#     temp = n

#     while temp > 0:
#         digit  = temp%10
#         reversed_num = reversed_num*10+digit
#         temp //=10
#     print(reversed_num)




























    
# year  = int(input("enter your year"))
# if year % 4==0:
#     if year %100 == 0:
#         if year %400 == 0:
#             print("leap year ")
#         else:
#             print(" no leap year")
#     else:
#         print("leap year")
# else:
#     print("no leap year") 























# principal = float(input(" enter your principal:"))
# rate = float(input(" enter your rate %:"))
# year = float(input("enter your year"))

# si = (principal*year*rate)/100
# total = principal+si
# dis = (si*2)/100
# final = total-dis



# number_item = int(input(" enter your number"))
# id = number_item
# sum_of_factorial=0

# while id>0:
#     digit = id%10
#     fact = 1
#     for num in range(1,digit+1):
#         fact*=num
#     sum_of_factorial+=fact
#     id //=10
# if sum_of_factorial==number_item:
#     print("strong")
# else:
#     print("weak")







# the_password = input("enter your password: ")
# length = len(the_password)
# def validation(the_password,length):
#     has_upper = False
#     has_digit = False
#     if length < 4:
#         return 0 
#     if " " in the_password or "/" in the_password:
#         return 0
#     if "0" <=the_password[0]<="9":
#         return 0 
#     for char in the_password:
#         if "A"<=char<="z":
#             has_upper = True
#         if '0'<= char <='9':
#             has_digit = True
#     if has_upper and has_digit :
#         return 1 
#     else:
#         return 0
        
# if validation(the_password,length):
#     print("strong passworsd")
# else:
#     print("weak password")







 

# the_digit = int(input("enter your number"))
# id = the_digit
# sum_of_factorial = 0
# while id >0:
#     digit = id%10
#     fact = 1
#     for num in range(1,digit+1):
#         fact*=num
#     sum_of_factorial +=fact
#     id//=10
# if sum_of_factorial==the_digit:
#     print("strong number")
# else:
#      print("weak number  ")





# sentence = input("Enter the sentence:") 
# if sentence == "": 
#     print(-1) 
# else: 
#     alphaa = 0 
#     numbers = 0 
#     special = 0 
#     for char in sentence: 
#         if "A" <= char <= "Z" or "a" <= char <= "z": 
#             alphaa += 1 
#         elif "0" <= char <= "9": 
#             numbers += 1 
#         else: 
#             special += 1 
#     print("Total number of characters:",alphaa) 
#     print("Total number of Digits:",numbers) 
#     print("Total number of special characters:",special) 







# n = int(input("enter no of elements:"))
# a = ((list(map(int, input("Enter elements:").split()))))

# if len(set(a)) == 1:
#     print(0)
# else:
#     first = max(a)

#     while first in a:
#         a.remove(first)

#     second = max(a)
#     print(a.count(second))


# my_tuple = ("apple",10,"orange",20,"brinjal",30)

# print(my_tuple)

# print(len(my_tuple))
# print(my_tuple[0])
# print(my_tuple[1:4])
# new_tuple = ("dairy milk","kitkat")
# concate = new_tuple+my_tuple
# print(concate)
# print(my_tuple[::-1])









sentences = input("enter your sentencws  ")

the_split = sentences.split()


maximum_letter = 0
longest = ""

for word in the_split:
    single = len(word)
    if  single > maximum_letter:
        maximum_letter = single
        longest = word
print(longest)
print(maximum_letter)





















# n = int(input("enter no of elements:"))
# a = ((list(map(int, input("Enter elements:").split()))))

# if len(set(a)) == 1:
#     print(0)
# else:
#     first = max(a)

#     while first in a:
#         a.remove(first)

#     second = max(a)
#     print(a.count(second))




