# My Personal Website
**This repository includes source code of my personal website. MERN stack is used to develop this website.**

## Front Page Section:
This section is a static page that you can directly change from the source code.

## Blog Section:
Web Server lets users to modify blog section in ways such as adding, updating or deleting blogs. This section uses database for those operations. To use this feature, user should be authorized.

## Authorization Section:
To be authorized please use /authorization endpoint. Authorization token can be arranged via envrionment variables. You can see the details in the source code.

### We can set necessary environment variables as follows:

```
AUTH_KEY=auth_key
EMAIL_FROM=someone@example.com
EMAIL_PASS=password
EMAIL_TO=someone@example.com
CLIENT_URL=http://localhost:0000
PORT=0000
REACT_APP_SERVER_URL=http://localhost:0000
```
