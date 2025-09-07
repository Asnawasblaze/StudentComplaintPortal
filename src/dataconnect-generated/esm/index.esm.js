import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'registration',
  location: 'us-central1'
};

export const createComplaintRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateComplaint');
}
createComplaintRef.operationName = 'CreateComplaint';

export function createComplaint(dc) {
  return executeMutation(createComplaintRef(dc));
}

export const listComplaintsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListComplaints');
}
listComplaintsRef.operationName = 'ListComplaints';

export function listComplaints(dc) {
  return executeQuery(listComplaintsRef(dc));
}

export const addComplaintNoteRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddComplaintNote');
}
addComplaintNoteRef.operationName = 'AddComplaintNote';

export function addComplaintNote(dc) {
  return executeMutation(addComplaintNoteRef(dc));
}

export const getUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUser');
}
getUserRef.operationName = 'GetUser';

export function getUser(dc) {
  return executeQuery(getUserRef(dc));
}

