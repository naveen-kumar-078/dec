fruits = {
    "name":"apple",
    "rupees":"50",
    "shop name":"pk fruits"

}

fruits["color"]="red"
print(fruits)



fruitss = {
    "name":"apple",
    "rupees":"50",
    "shop name":"pk fruits"

}

fruitss.pop("rupees")
print(fruitss)


#last inserted item


fruitsd = {
    "name":"apple",
    "rupees":"50",
    "shop name":"pk fruits"

}

fruitsd.popitem()
print(fruitsd)




# del keyword removes the specified key name 
dell = {
    "name":"apple",
    "rupees":"50",
    "shop name":"pk fruits"

}
dell.clear()
print(dell)


fruits = {
    "name":"apple",
    "rupees":"50",
    "shop name":"pk fruits"

}

del fruits["name"]

print(fruits)



