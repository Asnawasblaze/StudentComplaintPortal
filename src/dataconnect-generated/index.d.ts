import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddComplaintNoteData {
  complaintNote_insert: ComplaintNote_Key;
}

export interface ComplaintNote_Key {
  id: UUIDString;
  __typename?: 'ComplaintNote_Key';
}

export interface Complaint_Key {
  id: UUIDString;
  __typename?: 'Complaint_Key';
}

export interface CreateComplaintData {
  complaint_insert: Complaint_Key;
}

export interface GetUserData {
  user?: {
    id: UUIDString;
    displayName?: string | null;
    email: string;
  } & User_Key;
}

export interface ListComplaintsData {
  complaints: ({
    id: UUIDString;
    description: string;
    status: string;
    subject: string;
  } & Complaint_Key)[];
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateComplaintRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateComplaintData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateComplaintData, undefined>;
  operationName: string;
}
export const createComplaintRef: CreateComplaintRef;

export function createComplaint(): MutationPromise<CreateComplaintData, undefined>;
export function createComplaint(dc: DataConnect): MutationPromise<CreateComplaintData, undefined>;

interface ListComplaintsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListComplaintsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListComplaintsData, undefined>;
  operationName: string;
}
export const listComplaintsRef: ListComplaintsRef;

export function listComplaints(): QueryPromise<ListComplaintsData, undefined>;
export function listComplaints(dc: DataConnect): QueryPromise<ListComplaintsData, undefined>;

interface AddComplaintNoteRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<AddComplaintNoteData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<AddComplaintNoteData, undefined>;
  operationName: string;
}
export const addComplaintNoteRef: AddComplaintNoteRef;

export function addComplaintNote(): MutationPromise<AddComplaintNoteData, undefined>;
export function addComplaintNote(dc: DataConnect): MutationPromise<AddComplaintNoteData, undefined>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(): QueryPromise<GetUserData, undefined>;
export function getUser(dc: DataConnect): QueryPromise<GetUserData, undefined>;

