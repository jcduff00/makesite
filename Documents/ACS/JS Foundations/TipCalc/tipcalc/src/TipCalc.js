import { useState } from 'react'
import './TipCalc.css'

function TipCalc() {
    const [bill, setBill] = useState(0)
    const [tip, setTip] = useState(0)
    const [split, setSplit] = useState(0)

    let tip_amount = parseFloat(bill) * parseFloat(tip) / (100);
    let total_bill = parseFloat(tip_amount) + parseFloat(bill);
    let split_person = parseFloat(total_bill) / parseFloat(split);

    console.log(split_person, total_bill, split);  

     return (
        <div className='calc'>
       <form>
         <input 
           type="number"
           value={ bill }
           onChange={(e) => setBill(e.target.value )}
         />
   
         <input 
           type="number"
           value={ tip }
           onChange={(e) => setTip(e.target.value )}
         />

         <input 
            type="number"
            value={ split }
            onChange={(e) => setSplit(e.target.value )}
         />
        </form>
        <div className='result'>
            <div>Recommended tip: ${tip_amount.toFixed(2)}</div>
            <div>Total bill: ${total_bill.toFixed(2)}</div>
            <div>Recommended split per guest: ${split_person.toFixed(2)}</div>
        </div>
    </div>
  )
}

export default TipCalc;