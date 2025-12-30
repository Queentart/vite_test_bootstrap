import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      
      <h1 className="display-4 fw-bold text-primary mb-5">Bootstrap Counter</h1>
      
      {/* w-100 & style max-width: 카드가 너무 커지지 않게 제한하면서 중앙 배치 
      */}
      <div className="card shadow-lg border-0 overflow-hidden" style={{ width: '100%', maxWidth: '400px', borderRadius: '20px' }}>
        
        <div className="card-header bg-primary text-white py-3 text-center">
          <h5 className="mb-0 fw-bold">DASHBOARD COUNTER</h5>
        </div>

        <div className="card-body p-5 text-center">
          <span className="badge rounded-pill bg-info text-dark mb-3">Status: Active</span>
          <div className="display-1 fw-bold text-dark mb-4">{count}</div>
          
          <div className="btn-group w-100 shadow-sm">
            <button className="btn btn-outline-primary btn-lg py-3" onClick={() => setCount(count + 1)}>증가</button>
            <button className="btn btn-outline-danger btn-lg py-3" onClick={() => setCount(count - 1)}>감소</button>
          </div>
        </div>

        <div className="card-footer bg-white text-muted text-center py-2 small">
          Bootstrap v5.3 Standard UI
        </div>
      </div>

    </div>
  )
}

export default App