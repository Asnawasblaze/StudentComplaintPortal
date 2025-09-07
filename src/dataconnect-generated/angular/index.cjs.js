const { createComplaintRef, listComplaintsRef, addComplaintNoteRef, getUserRef } = require('../');
const { DataConnect, CallerSdkTypeEnum } = require('@angular/fire/data-connect');
const { injectDataConnectQuery, injectDataConnectMutation } = require('@tanstack-query-firebase/angular/data-connect');
const { inject, EnvironmentInjector } = require('@angular/core');

exports.injectCreateComplaint = function injectCreateComplaint(args, injector) {
  return injectDataConnectMutation(createComplaintRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectListComplaints = function injectListComplaints(options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  listComplaintsRef(dc),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectAddComplaintNote = function injectAddComplaintNote(args, injector) {
  return injectDataConnectMutation(addComplaintNoteRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectGetUser = function injectGetUser(options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  getUserRef(dc),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

