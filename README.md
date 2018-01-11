
Environemnt:
The code has been tested on a Windows 10 x64 machine. No guarantees that the development environment would work in other operating systems; hopefully it doees

Currentyly we are using development environment. Note that in production environment, we should turn off console logs by changing
NODE_ENV_ENVIRONMENT to be 'production'


Security:
Currently the database name, username, and password are hard-coded but ideally secure data should be saved as environment variables.
