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


n = int(input("enter your number"))

if n<0:
    print("enter your valid number")

else:
    reversed_num = 0
    temp = n

    while temp > 0:
        digit  = temp%10
        reversed_num = reversed_num*10+digit
        temp //=10
    print(reversed_num)