import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomerAction, removeCustomerAction, fetchManyCustomers, removeManyCustomers } from './Redux/Actions/customerAction/customerAction'
import { addCashAction, getCashAction } from './Redux/Actions/cashAction/cashAction'

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const [valid, setValid] = React.useState(false)

  React.useEffect(() => {
    if (customers.length > 0) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [customers])

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }

  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }

  const addCustomer = (name) => {
    let customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))

  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div style = {{fontSize: "2rem"}}>
        Денег на счету: {cash}
      </div>
        <div style = {{display: "flex", marginTop: "10px"}}>
            <button onClick = {() => addCash(Number(prompt()))}>Пополнить счёт</button>
            <button onClick = {() => getCash(Number(prompt()))}>Снять со счёта</button>
            <button onClick = {() => addCustomer(prompt())}>Добавить клиента</button>
            <button onClick = {() => dispatch(fetchManyCustomers())}>Получить список клиентов из базы</button>
            <button disabled = {!valid} onClick = {() => dispatch(removeManyCustomers([]))}>Очистить всех клиентов</button>
        </div>
        {
          customers.length > 0 
        ?
          <div>
              {customers.map((customer, index) => {
                return (
                  <h3 
                    onClick = {() => removeCustomer(customer)} 
                    style = {{cursor: "pointer"}}
                    key = {index + 123}
                  >
                    {customer.name}
                  </h3>
                )
              })}
          </div>
        :
          <div style={{fontSize: "2rem", marginTop: "20px"}}>
            Клиентов нет :(
          </div>
        }
    </div>
  );
}

export default App;
