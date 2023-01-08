from car import Car


class Battery:
    
    def __init__(self,battery_size=75):
        self.battery_size = battery_size

    def describe_battery(self):

        print(f"This car has a {self.battery_size}-KWH battery .")


class ElectricCar(Car):

    def __init__(self,make,model,year):

        super().__init__(make,model,year)
        #self.battery_size = 75
        self.battery = Battery()

    # def describe_battery(self):

    #     print(f"This car has a {self.battery_size}-KWH battery .")

