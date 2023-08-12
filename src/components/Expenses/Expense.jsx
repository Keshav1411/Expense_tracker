import React, { useState } from 'react'
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter"
import ExpensesList from './ExpensesList'
const Expense = (props) => {

  const [filterYear,setFilterYear] = useState('2020')
  const filterChangeHandler = selectedYear =>{
    setFilterYear(selectedYear)
  }

  const filterExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filterYear;
  })



  return (
    <div className='expenses'>

      <ExpenseFilter 
      selected={filterYear} 
      onChangeFilter={filterChangeHandler}
      />

      <ExpensesList items={filterExpenses}/>
      

    </div>
  )
}

export default Expense