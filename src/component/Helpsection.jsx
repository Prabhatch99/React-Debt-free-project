import React from 'react'

function Helpsection() {
  return (
    <>
      <div className="help_section">
        <div className="container">
          <h1>Debts we can help you with...</h1>
          <div className='row'>
            <div className='col-sm-4 col-12'>
              <li>Utility Arrears </li> <li>Payday Loans</li> <li>Overdrafts</li> <li>HMRC Debts</li>
            </div>
            <div className='col-sm-4 col-12'>
              <li>Council Arrears</li><li>Catalogues</li><li>Loans</li><li>Bailiffs</li>
            </div>
            <div className='col-sm-4 col-12'>
              <li>Store Debts</li> <li>CCJ Debts</li><li>Credit Cards</li> <li>Debt Collectors</li>
            </div>
          </div>
          <ul className="no-list"></ul>
        </div>
      </div>
    </>
  )
}

export default Helpsection