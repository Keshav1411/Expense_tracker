import React,{useState} from 'react'
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    const [enterTitle,setEnteredTitle] = useState('');
    const [enterAmount,setEnteredAmount]= useState('');
    const [enterDate,setEnteredDate] = useState('');

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title:enterTitle,
            amount:enterAmount,
            date:new Date(enterDate)
        };
        props.onSaveExpenseData(expenseData);
    
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    const inputChangeHandler =(identifier,value) =>{
        if(identifier === 'title'){
            setEnteredTitle(value)
        }else if(identifier === 'date'){  
            setEnteredDate(value)
        }else{
            setEnteredAmount(value)
        }
    }
  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enterTitle} onChange={(event)=>{inputChangeHandler('title',event.target.value)}}/>
            </div>

            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enterAmount} min="0.01" step="0.01" onChange={(event) =>{inputChangeHandler('amount',event.target.value)}}/>
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={enterDate} min="2019-01-01" max="2023-12-12" onChange={(event)=>{inputChangeHandler('date',event.target.value)}}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm