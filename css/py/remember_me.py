import json
 
def greet_user():

    username = get_stored_username()
    if username:
        print(f"Welcome back {username}")
    else:
        username = get_new_username()
        print(f"We'll remeber you when you come back,{username}")


def get_stored_username():
    filename = 'username.json'
    try:
        with open(filename) as f:
            username = json.load(f)
    except FileNotFoundError:
        return None
    else:
        return username

def get_new_username():
    username = input("what is your name? ")
    filename = 'username.json'
    with open(filename,'w') as f:
        json.dump(username,f)
    return username

greet_user()