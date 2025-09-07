# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `Angular README`, you can find it at [`dataconnect-generated/angular/README.md`](./angular/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListComplaints*](#listcomplaints)
  - [*GetUser*](#getuser)
- [**Mutations**](#mutations)
  - [*CreateComplaint*](#createcomplaint)
  - [*AddComplaintNote*](#addcomplaintnote)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListComplaints
You can execute the `ListComplaints` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listComplaints(): QueryPromise<ListComplaintsData, undefined>;

interface ListComplaintsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListComplaintsData, undefined>;
}
export const listComplaintsRef: ListComplaintsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listComplaints(dc: DataConnect): QueryPromise<ListComplaintsData, undefined>;

interface ListComplaintsRef {
  ...
  (dc: DataConnect): QueryRef<ListComplaintsData, undefined>;
}
export const listComplaintsRef: ListComplaintsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listComplaintsRef:
```typescript
const name = listComplaintsRef.operationName;
console.log(name);
```

### Variables
The `ListComplaints` query has no variables.
### Return Type
Recall that executing the `ListComplaints` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListComplaintsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListComplaintsData {
  complaints: ({
    id: UUIDString;
    description: string;
    status: string;
    subject: string;
  } & Complaint_Key)[];
}
```
### Using `ListComplaints`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listComplaints } from '@dataconnect/generated';


// Call the `listComplaints()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listComplaints();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listComplaints(dataConnect);

console.log(data.complaints);

// Or, you can use the `Promise` API.
listComplaints().then((response) => {
  const data = response.data;
  console.log(data.complaints);
});
```

### Using `ListComplaints`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listComplaintsRef } from '@dataconnect/generated';


// Call the `listComplaintsRef()` function to get a reference to the query.
const ref = listComplaintsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listComplaintsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.complaints);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.complaints);
});
```

## GetUser
You can execute the `GetUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUser(): QueryPromise<GetUserData, undefined>;

interface GetUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
}
export const getUserRef: GetUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUser(dc: DataConnect): QueryPromise<GetUserData, undefined>;

interface GetUserRef {
  ...
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
}
export const getUserRef: GetUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserRef:
```typescript
const name = getUserRef.operationName;
console.log(name);
```

### Variables
The `GetUser` query has no variables.
### Return Type
Recall that executing the `GetUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserData {
  user?: {
    id: UUIDString;
    displayName?: string | null;
    email: string;
  } & User_Key;
}
```
### Using `GetUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUser } from '@dataconnect/generated';


// Call the `getUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUser(dataConnect);

console.log(data.user);

// Or, you can use the `Promise` API.
getUser().then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserRef } from '@dataconnect/generated';


// Call the `getUserRef()` function to get a reference to the query.
const ref = getUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateComplaint
You can execute the `CreateComplaint` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createComplaint(): MutationPromise<CreateComplaintData, undefined>;

interface CreateComplaintRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateComplaintData, undefined>;
}
export const createComplaintRef: CreateComplaintRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createComplaint(dc: DataConnect): MutationPromise<CreateComplaintData, undefined>;

interface CreateComplaintRef {
  ...
  (dc: DataConnect): MutationRef<CreateComplaintData, undefined>;
}
export const createComplaintRef: CreateComplaintRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createComplaintRef:
```typescript
const name = createComplaintRef.operationName;
console.log(name);
```

### Variables
The `CreateComplaint` mutation has no variables.
### Return Type
Recall that executing the `CreateComplaint` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateComplaintData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateComplaintData {
  complaint_insert: Complaint_Key;
}
```
### Using `CreateComplaint`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createComplaint } from '@dataconnect/generated';


// Call the `createComplaint()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createComplaint();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createComplaint(dataConnect);

console.log(data.complaint_insert);

// Or, you can use the `Promise` API.
createComplaint().then((response) => {
  const data = response.data;
  console.log(data.complaint_insert);
});
```

### Using `CreateComplaint`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createComplaintRef } from '@dataconnect/generated';


// Call the `createComplaintRef()` function to get a reference to the mutation.
const ref = createComplaintRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createComplaintRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.complaint_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.complaint_insert);
});
```

## AddComplaintNote
You can execute the `AddComplaintNote` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addComplaintNote(): MutationPromise<AddComplaintNoteData, undefined>;

interface AddComplaintNoteRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<AddComplaintNoteData, undefined>;
}
export const addComplaintNoteRef: AddComplaintNoteRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addComplaintNote(dc: DataConnect): MutationPromise<AddComplaintNoteData, undefined>;

interface AddComplaintNoteRef {
  ...
  (dc: DataConnect): MutationRef<AddComplaintNoteData, undefined>;
}
export const addComplaintNoteRef: AddComplaintNoteRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addComplaintNoteRef:
```typescript
const name = addComplaintNoteRef.operationName;
console.log(name);
```

### Variables
The `AddComplaintNote` mutation has no variables.
### Return Type
Recall that executing the `AddComplaintNote` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddComplaintNoteData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddComplaintNoteData {
  complaintNote_insert: ComplaintNote_Key;
}
```
### Using `AddComplaintNote`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addComplaintNote } from '@dataconnect/generated';


// Call the `addComplaintNote()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addComplaintNote();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addComplaintNote(dataConnect);

console.log(data.complaintNote_insert);

// Or, you can use the `Promise` API.
addComplaintNote().then((response) => {
  const data = response.data;
  console.log(data.complaintNote_insert);
});
```

### Using `AddComplaintNote`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addComplaintNoteRef } from '@dataconnect/generated';


// Call the `addComplaintNoteRef()` function to get a reference to the mutation.
const ref = addComplaintNoteRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addComplaintNoteRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.complaintNote_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.complaintNote_insert);
});
```

