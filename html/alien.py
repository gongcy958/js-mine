alien_0 = {'color':'green','points':5}

print(alien_0['color'])
print(alien_0['points'])

alien_0['x_position'] = 0
alien_0['y_position'] = 25

print(alien_0)

alien_0['color'] = "yellow"
print(alien_0)

alien_0['speed'] = 'medium'
print(alien_0)

del alien_0['points']
print(alien_0)

favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'python',
    'phil': 'ruby',
    }

language = favorite_languages['sarah'].title()
print(language)

# print(alien_0['points'])

print(alien_0.get('points','No point value assigned.'))
print(alien_0.get('points'))