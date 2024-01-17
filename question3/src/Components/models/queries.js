import { getAuthenticatedUser } from '../../utils/auths';

const addOneQuery = async (query) => {
    try {
        const authenticatedUser = getAuthenticatedUser();
        const options = {
            method: 'POST',
            body: JSON.stringify(query),
            headers: {
                'Content-Type': 'Application/json',
                Authorization: authenticatedUser.token,
            },
        };

        const reponse = await fetch('/api/queries/create', options);

        const createdQuery = await reponse.json();

        return createdQuery;
    } catch (error) {
        console.error('addOneMovie::error: ', error);
        throw error;
    }
};

const readAllQueries = async () => {
    try{
        const reponse = await fetch('/api/queries');
        const queries = await reponse.json();
        return queries;
    } catch (err){
        console.error('readAllMovies::error: ', err);
        throw err;
    }
};

export { addOneQuery , readAllQueries } ;