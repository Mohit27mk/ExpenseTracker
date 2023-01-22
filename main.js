const myForm=document.querySelector('#my-form');
const userList = document.querySelector('#users');
const expenseInput = document.querySelector('#expense');
const descriptionInput = document.querySelector('#description');
const categoryInput = document.querySelector('#category');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  
    let myobj={
       'Expense':expenseInput.value,
       'Description':descriptionInput.value,
       'Category':categoryInput.value
    }
    
    let myobjs=JSON.stringify(myobj);
    localStorage.setItem(descriptionInput.value,myobjs);
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${expenseInput.value} - ${descriptionInput.value}-${categoryInput.value}`));
    userList.appendChild(li);
    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm  delete';
    deleteBtn.appendChild(document.createTextNode('delete'));
    li.appendChild(deleteBtn);

    var editBtn=document.createElement('button');
editBtn.className='btn btn-primary btn-sm  edit';
editBtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editBtn);
    deleteBtn.onclick=()=>{
        localStorage.removeItem(myobj.Description);
        userList.removeChild(li);
    } 
    editBtn.onclick=()=>{ 
        localStorage.removeItem(myobj.Description);
        userList.removeChild(li);
        expenseInput.value = myobj.Expense;
    descriptionInput.value = myobj.Description;
    categoryInput.value=myobj.Category;
    } 
    expenseInput.value = '';
    descriptionInput.value = '';
    categoryInput.value=1;
  
}
