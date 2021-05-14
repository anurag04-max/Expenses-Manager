import './Expenseslist.css';
import ExpenseItem from './ExpenseItem';
const Expenseslist = props =>{
  let expensesContent = <p>No expenses content </p>
if(props.items.length === 0){
  return <h2 className='expenses-list__fallback'> Found no expenses </h2>
}
  return <ul className="expenses-list">
  {props.items.map((expense) => ( <ExpenseItem
     key = {expense.id}
     title ={expense.title}
     date ={expense.date}
     amount ={expense.amount}/>)
   )}
    </ul>
};

export default Expenseslist;
