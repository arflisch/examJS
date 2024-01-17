import { clearPage } from '../../utils/render';
import { readAllQueries } from '../models/queries';

const ViewQueryPage = async () => {
    clearPage();
    const main = document.querySelector('main');
    main.innerHTML = '<div id="queryWrapper"></div>';

    const queryWrapper = document.querySelector('#queryWrapper');

    const queries = await readAllQueries();
    const queriesAsHtmlList = getHtmlQueryListAsString(queries);

    queryWrapper.innerHTML = queriesAsHtmlList;

}

function getHtmlQueryListAsString(queries){
    const htmlQueriesList = `
    <h3>Manage queries Page</h3>
    <ul>
    ${queries.map(
        (element) => `
        <li>${element.subject}
        <select id="mySelect">
            <option value="requested">requested</option>
            <option value="accepted">accepted</option>
            <option value="refused">refused</option>
            <option value="done">done</option>
        </select>
        </li>`,
    )
    .join('')}
    </ul>
    `;
    
    return htmlQueriesList;
}

export default ViewQueryPage;