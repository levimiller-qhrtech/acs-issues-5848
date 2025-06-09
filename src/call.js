import { loadCallComposite } from '@azure/communication-react/javascript-loaders';
import { AzureCommunicationTokenCredential } from '@azure/communication-common';
import { setLogLevel } from '@azure/logger';

let userId = '<ACS User Id>';
let token = '<ACS Token>';
let groupId = '<GUID for call>';
let container = document.getElementById('call-container');

setLogLevel('verbose');
loadCallComposite({
  userId: { communicationUserId: userId },
  credential: new AzureCommunicationTokenCredential(token),
  displayName: 'User',
  locator: {
    groupId: groupId
  },
  formFactor: 'mobile'
}, container).then((adapter) => {
  if (adapter) {
    adapter.on('callEnded', () => {
      adapter.dispose();
    });
  }
});
