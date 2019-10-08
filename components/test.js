import { useGraphQL } from "graphql-react";
import { graphQLConfig } from "../graphql/config";

const Test = _props => {
    console.warn(graphQLConfig);
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
    });

    return (
        <article>
            <h2>list of users via GraphQL/MongoDB:</h2>
            <ul>
                {data &&
                    data.users.map(user => (
                        <li>
                            {[user.firstName, user.lastName, user.email].join(
                                " - "
                            )}
                        </li>
                    ))}
            </ul>
            {/* {JSON.stringify(errors)} */}
            {loading && <div>loading...</div>}
        </article>
    );
};

export default Test;
