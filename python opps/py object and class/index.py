class person:
    def __init__(self,name,sec=18):
        self.name = name
        self.sec = sec

p1 = person("name",25)
p2 = person("nk")
print(p1.name,p1.sec)
print(p2.name,p2.sec)