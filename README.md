## Setup
- Add group id/user id/token to: [call.js](src/call.js)
- Setup ngrok (for https, or use squid and a reverse proxy):
  - Login to https://dashboard.ngrok.com/
  - Go to https://dashboard.ngrok.com/get-started/your-authtoken to get your auth token
- Run the following:
  - `npm install`
  - `npm run build`
  - `npm run start`
- Copy the ngrok link from the terminal

## Reproducing the error
- Open the link on Android/ios
- Join the call then hangup
- Rejoin is now broken with errors in the console
