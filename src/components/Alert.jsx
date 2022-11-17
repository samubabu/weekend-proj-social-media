import React from 'react'

export default function Alert({message,category,flashMessage}) {
  return (
    <div className={`alert alert-${category} alert-dismissible fade show`} role="alert">
            <strong>{message}</strong>
            <button type="button" className="btn-close" onClick={() => flashMessage(null, null)}></button>
        
        </div>
    
    
  )
}
