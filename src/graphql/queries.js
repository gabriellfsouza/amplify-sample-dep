/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrivateNote = /* GraphQL */ `
  query GetPrivateNote($id: ID!) {
    getPrivateNote(id: $id) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPrivateNotes = /* GraphQL */ `
  query ListPrivateNotes(
    $filter: ModelPrivateNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const searchTasks = /* GraphQL */ `
  query SearchTasks(
    $filter: SearchableTaskFilterInput
    $sort: SearchableTaskSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchTasks(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        status
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchPrivateNotes = /* GraphQL */ `
  query SearchPrivateNotes(
    $filter: SearchablePrivateNoteFilterInput
    $sort: SearchablePrivateNoteSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchPrivateNotes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
    }
  }
`;
