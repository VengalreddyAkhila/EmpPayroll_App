window.addEventListener('DOMContentLoaded',(event) => { 
   createInnerHtml();
});
const createInnerHtml = () => {
  const headerHtml = "<th>Profile</th><th>Name</th><th>Gender</th><th>Department</th>"+
                     "<th>Salary</th><th>StartDate</th><th>Actions</th>";
  const innerHtml = `${headerHtml}                       
                      <tbody>
                        <tr>
                          <td><img class="profile" alt="" 
                            src="../Asserts/profileimage1.jpg" width="100px" height="100px"></img></td>
                          <td>AkhilaReddy</td>
                          <td>Female</td>
                          <td><div class='dept-label'>Engineering</div>
                            <div class='dept-label'>Finance</div>
                          </td>
                          <td>35000</td>
                          <td>21 dec 2020</td>
                          <td>
                            <img id="1" onclick="remove(this)" alt="delete" 
                                  src="../Asserts/delete.png" width="30px" height="30px"></img>
                            <img id="1" onclick="edit(this)" alt="update"
                                  src="../Asserts/edit.jpg" width="30px" height="30px"></img>
                          </td>
                        </tr>
                        
                      </tbody>
  `;
  document.querySelector('#table-display').innerHTML = innerHtml;
}

