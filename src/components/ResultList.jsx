import React, { useState, useEffect } from 'react'
import * as api from "../yelp-api/api"

export default function ResultList(results) {
  const [businesses, setBusinesses] = useState([results.businesses])
  const [amount, setAmount] = useState(results.total)

  

  return (
    <div className='Results'>
      
    fe

    </div>
  )
}
