acceess = {
    "car":"volvo",
    "model":"2007",
    "colour":"red"
}

x = acceess["model"]
print(x)



#it can also done by using get method 

acc = {
    "car":"volvo",
    "model":"2008",
    "colour":"red"
}

x = acc.get("model")
print(x)







#using key method


key = {
    "fruitts":"apple",
    "veg":"kicchadi",
    "non-veg":"mutton"
}
x = key.keys()
print(x)


#add new key in the dicitonary



key = {
    "fruitts":"apple",
    "veg":"kicchadi",
    "non-veg":"mutton"
}
x = key.keys()



key["biscuit"]="marrie"
print(x)



#get values 

values = {
    "phone":"vivo",
    "made in":"china",
    "price":"35000"
}

x = values.values()
print(x)




# to update the values means

values = {
    "phone":"vivo",
    "made in":"china",
    "price":"35000"
}

x = values.values()
print(x)


values["price"]="25000"
print(x)



# to add new item


values = {
    "phone":"vivo",
    "made in":"china",
    "price":"35000"
}

x = values.values()
print(x)


values["shop name"]="udumalai mobiles"
print(x)