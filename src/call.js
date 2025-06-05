import { loadCallComposite } from '@azure/communication-react/javascript-loaders';
import { AzureCommunicationTokenCredential } from '@azure/communication-common';

let userId = '<ACS User Id>';
let token = '<ACS Token>';
let displayName = 'User';
let groupId = '<GUID for call>';
let container = document.getElementById('call-container');

loadCallComposite({
  userId: { communicationUserId: userId },
  credential: new AzureCommunicationTokenCredential(token),
  displayName: displayName,
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
