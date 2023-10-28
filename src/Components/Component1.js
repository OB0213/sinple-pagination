import React from 'react'

function Component1({data}) {
  return (
    <div>
      {
        data.map((values)=>{
            return(
                <div>
<h3>{values}</h3>
                    </div>
            )
        })
      }
    </div>
  )
}

export default Component1;
