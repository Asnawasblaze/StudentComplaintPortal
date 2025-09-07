const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'registration',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const createComplaintRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateComplaint');
}
createComplaintRef.operationName = 'CreateComplaint';
exports.createComplaintRef = createComplaintRef;

exports.createComplaint = function createComplaint(dc) {
  return executeMutation(createComplaintRef(dc));
};

const listComplaintsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListComplaints');
}
listComplaintsRef.operationName = 'ListComplaints';
exports.listComplaintsRef = listComplaintsRef;

exports.listComplaints = function listComplaints(dc) {
  return executeQuery(listComplaintsRef(dc));
};

const addComplaintNoteRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddComplaintNote');
}
addComplaintNoteRef.operationName = 'AddComplaintNote';
exports.addComplaintNoteRef = addComplaintNoteRef;

exports.addComplaintNote = function addComplaintNote(dc) {
  return executeMutation(addComplaintNoteRef(dc));
};

const getUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUser');
}
getUserRef.operationName = 'GetUser';
exports.getUserRef = getUserRef;

exports.getUser = function getUser(dc) {
  return executeQuery(getUserRef(dc));
};
