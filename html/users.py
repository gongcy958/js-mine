users = {
    'aeinstein': {
        'first': 'albert',
        'last': 'einstein',
        'location': 'princeton',
        },

    'mcurie': {
        'first': 'marie',
        'last': 'curie',
        'location': 'paris',
        },
    }


for username,user_info in users.items():
    print(username)
    print("\n")
    full_name = f"{user_info['first']} {user_info['last']}"
    location = user_info['location']

    print(full_name)
    print(location)