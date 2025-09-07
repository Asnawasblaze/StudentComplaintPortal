import { CreateComplaintData, ListComplaintsData, AddComplaintNoteData, GetUserData } from '../';
import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise} from '@angular/fire/data-connect';
import { CreateQueryResult, CreateMutationResult} from '@tanstack/angular-query-experimental';
import { CreateDataConnectQueryResult, CreateDataConnectQueryOptions, CreateDataConnectMutationResult, DataConnectMutationOptionsUndefinedMutationFn } from '@tanstack-query-firebase/angular/data-connect';
import { FirebaseError } from 'firebase/app';
import { Injector } from '@angular/core';

type CreateComplaintOptions = DataConnectMutationOptionsUndefinedMutationFn<CreateComplaintData, FirebaseError, undefined>;
export function injectCreateComplaint(options?: CreateComplaintOptions, injector?: Injector): CreateDataConnectMutationResult<CreateComplaintData, undefined, >;

export type ListComplaintsOptions = () => Omit<CreateDataConnectQueryOptions<ListComplaintsData, undefined>, 'queryFn'>;
export function injectListComplaints(options?: ListComplaintsOptions, injector?: Injector): CreateDataConnectQueryResult<ListComplaintsData, undefined>;

type AddComplaintNoteOptions = DataConnectMutationOptionsUndefinedMutationFn<AddComplaintNoteData, FirebaseError, undefined>;
export function injectAddComplaintNote(options?: AddComplaintNoteOptions, injector?: Injector): CreateDataConnectMutationResult<AddComplaintNoteData, undefined, >;

export type GetUserOptions = () => Omit<CreateDataConnectQueryOptions<GetUserData, undefined>, 'queryFn'>;
export function injectGetUser(options?: GetUserOptions, injector?: Injector): CreateDataConnectQueryResult<GetUserData, undefined>;
