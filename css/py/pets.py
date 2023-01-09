#def describe_pet(animal_type,pet_name):
def describe_pet(pet_name,animal_type='dog'):
    print(f"\nI have a {animal_type}.")
    print(f"\nMy {animal_type}'s name is {pet_name.title()}")

#describe_pet('hamster','harry')
#describe_pet(pet_name='bob',animal_type='dog')

describe_pet('white')