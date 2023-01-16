# user_0 = {
#     "username": 'efermi',
#     'first': 'enrico',
#     'last': 'fermi',
#     }

# for key,value in user_0.items():
#     print(f"\nKey : {key}")
#     print(f"\nVal : {value}")

favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'python',
    'phil': 'ruby',
    }

for name in sorted(favorite_languages.keys()):
    print(name)


for language in set(favorite_languages.values()):
    print(language)