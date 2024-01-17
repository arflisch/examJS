import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';
import { addOneQuery } from '../models/queries';

const AddQueryPage = () => {
  clearPage();
  
  const addQueryPage = `
  <div>
    <h3>Create a query Page</h3>
    <form class="px-5">
      <div class="mb-3">
        <label for="query-subject">Subject of your query</lable><br>
        <input class="form-control" type="text" name="query-subject" id="query-subject" required/>
        <p>Please provide the subject of your query regarding some new content</p>
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>`;

  const main = document.querySelector('main');
  main.innerHTML = addQueryPage;

  const myForm = document.querySelector('form');
  const subject = document.querySelector('#query-subject').Value;

  myForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const queryToBeCreated = {
      subject,
      status: "requested",
    }

    await addOneQuery(queryToBeCreated);
    Navigate('/view');
  })
};


export default AddQueryPage;
