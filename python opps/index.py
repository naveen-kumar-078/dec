# class myclass():
#     x = 5

# p1 = myclass()
# p2 = myclass()
# p3 = myclass()
# print(p1.x)
# print(p2.x)
# print(p3.x)












# class myclass :
#     def __init__(self ,name,age):
#         self.name = name
#         self.age = age
# p1  = myclass("emily" , 25)
# print(p1.name)
# print(p1.age)



# class person:
#     def __init__(self,name,age = 18) :
#         self.name=name
#         self.age = age
# p1 = person("ravi",26)
# p2 = person("kumar")

# print(p1.name,p1.age)
# print(p2.name,p2.age)










# class person:
#     def __init__(self ,name,age,city,country):
#         self.name = name
#         self.age =age
#         self.city =city
#         self.country=country

# p1 = person("emil",30,"cbe","india")

# print(p1.name)
# print(p1.age)
# print(p1.city)
# print(p1.country)










class person:
    def __init__(self ,name,age):
        self.name =name
        self.age = age

    def greet(self):
        print(f"hello,my name is {self.name} and my age is {self.age}")
p1 = person("emis",26)
p1.greet()