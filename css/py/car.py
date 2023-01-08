class Car:

    def __init__(self,make,model,year):

        self.make = make
        self.model = model
        self.year = year

        # 不需要通过形参定义 默认值
        self.odometer_reading = 0


    def get_descriptive_name(self):

        long_name = f"{self.year} {self.make} {self.model} "
        return long_name.title()

    def read_odometer(self):

        print(f"This car has {self.odometer_reading} miles on it .")

    def update_odometer(self,mileage):
        self.odometer_reading = mileage
