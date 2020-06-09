 import React from 'react'

    const Data = ({ data }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {data.map((details) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{details.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{details.email}</h6>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Data