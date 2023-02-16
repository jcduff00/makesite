import react, { useState } from 'react'
import './TipCalc.css'

function TipCalc() {
    const [bill, setBill] = useState(0)
    const [tip, setTip] = useState(0)
    const [split, setSplit] = useState(0)

    let tip_amount = bill * tip 
    let total_bill = tip_amount + bill
    let split_person = total_bill / split

     return (
        <div className='TipForm'>
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
            onChange={(e) => setSplit(e.targetvalue )}
         />
        </form>
        <div className='calc'>
            <div>Total bill: ${total_bill}</div>
            <div>Recommended tip: ${tip_amount}</div>
            <div>Recommended split per guest: ${split_person}</div>
        </div>
        </div>
     )
   }