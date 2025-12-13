thistuple1= ("apple","orange","banaaa","mango","pinapple")
if "orange" in thistuple1 :
    print(True)
else:
    print(False)



# changing the tuples
chahnge = ("apple","orange","blue")
x = list(chahnge)
x[0]="pink"
chahnge = tuple(x)
print(chahnge)




# add the values in the tuples
thetuple = ("orange","mango","pink","blue","purpplpe")
z = list(thetuple)
z.append("yellow")

thetuple = tuple(z)

print(thetuple)


# add values in tuples ny using tuples

add = ("bus","lorry","car")
x = ("bike",)

add +=x
print(add)

