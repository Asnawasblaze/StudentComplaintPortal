import { createComplaintRef, listComplaintsRef, addComplaintNoteRef, getUserRef } from '../../';
import { DataConnect, CallerSdkTypeEnum } from '@angular/fire/data-connect';
import { injectDataConnectQuery, injectDataConnectMutation } from '@tanstack-query-firebase/angular/data-connect';
import { inject, EnvironmentInjector } from '@angular/core';
export function injectCreateComplaint(args, injector) {
  return injectDataConnectMutation(createComplaintRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectListComplaints(options, injector) {
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

export function injectAddComplaintNote(args, injector) {
  return injectDataConnectMutation(addComplaintNoteRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectGetUser(options, injector) {
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

