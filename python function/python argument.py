# def my_function(fname):
#     print("my name is "+fname)
# my_function("ravi")
# my_function("paul")





# def my_function(fname):
#     print("my name is"+fname)
# my_function("emil")
# my_function("lornd")




#number of arguments
def my_functoin(fname,lname):
    print("my name is "+fname+" "+lname)
my_functoin("naveen","kumar")





#default parameter:
def the_function(name  ="naveen"):
    print("my name is "+name)
the_function("emil")
the_function()



# keyword argumnet:

def y_function(fname,last):
    print("my name is "+fname)
    print("hi im "+ fname+ " and my last name "+last)
y_function(fname="naveen",last="kumar")



#positional argument:

def position(ani,na):
    print("i have an "+ani)
    print("my "+ani+"'s name is "+na)
position("dog","buddy")








#mixed positional and keyword argumnets
def functionll_(animal,nk,agg):
    print("i have a",agg,"old ",animal,"called",nk)
functionll_("dog",nk="buddy",agg=2)


 


#data type fruits:
def my_function(person):
  print("Name:", person["name"])
  print("Age:", person["age"])

my_person = {"name": "Emil", "age": 25}
my_function(my_person)