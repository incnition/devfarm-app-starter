import { graphQLConfig } from '../server/graphql/config'
import React from 'react'
import { useGraphQL } from 'graphql-react'

const Test = () => {
  const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    fetchOptionsOverride: graphQLConfig,
    operation: {
      query: /* GraphQL */ `
        {
          users {
            firstName
            lastName
            email
          }
        }
      `
    }
  })

  return (
    <article>
      <h2>list of users via GraphQL/MongoDB:</h2>
      <ul>
        {errors && JSON.stringify(errors)}
        {data &&
          data.users.map(user => (
            <li key={user.email}>
              {[user.firstName, user.lastName, user.email].join(' - ')}
            </li>
          ))}
      </ul>
      {/* {JSON.stringify(errors)} */}
      {loading && <div>loading...</div>}
    </article>
  )
}

export default Test
