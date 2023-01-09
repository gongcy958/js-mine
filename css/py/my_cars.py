#from car import Car,ElectricCar
import car

my_bettle = car.Car('volkswagen','beetle',2021)
print(my_bettle.get_descriptive_name())

my_tesla = car.ElectricCar('tesla','roadster',2020)
print(my_tesla.get_descriptive_name())