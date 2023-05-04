add_user = True
update_user = False
delete_user = False
read_user = False

import requests

# Set the URL of your Node.js app
url = 'http://localhost:3000/users'

# Define the user ID to use (hard-coded as 33 for this example)
user_id = 33

# Set the data for the new user (replace with your own values)
new_user_data = {
    'name': 'John Doe',
    'email': 'john.doe@example.com',
    'password': 'mysecretpassword'
}

# Set the data for updating the user (replace with your own values)
updated_user_data = {
    'name': 'Jane Smith',
    'email': 'jane.smith@example.com'
}

# Make a POST request to add the new user
if add_user:
    response = requests.post(url, data=new_user_data)
    if response.status_code == 200:
        print('User added successfully!')
    else:
        print('Failed to add user:', response.text)

# Make a PUT request to update the user
if update_user:
    update_url = f'{url}/{user_id}'
    response = requests.put(update_url, data=updated_user_data)
    if response.status_code == 200:
        print('User updated successfully!')
    else:
        print(f'Failed to update user {user_id}:', response.text)

# Make a DELETE request to delete the user
if delete_user:
    delete_url = f'{url}/{user_id}'
    response = requests.delete(delete_url)
    if response.status_code == 200:
        print('User deleted successfully!')
    else:
        print(f'Failed to delete user {user_id}:', response.text)

# Make a GET request to read the user
if read_user:
    read_url = f'{url}/{user_id}'
    response = requests.get(read_url)
    if response.status_code == 200:
        print('User found:', response.json())
    else:
        print(f'Failed to read user {user_id}:', response.text)
