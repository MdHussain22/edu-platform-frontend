import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { X, CheckCircle, AlertTriangle, Info, AlertCircle } from 'lucide-react';

const ToastContainer = forwardRef((props, ref) => {
  const [toasts, setToasts] = useState([]);

  // This function allows other components to call addToast
  useImperativeHandle(ref, () => ({
    addToast(message, type = 'info') {
      const id = Date.now();
      setToasts([...toasts, { id, message, type }]);

      // Auto-remove after 3 seconds
      setTimeout(() => {
        setToasts(current => current.filter(t => t.id !== id));
      }, 3000);
    }
  }));

  const removeToast = (id) => {
    setToasts(toasts.filter(t => t.id !== id));
  };

  const styles = {
    container: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    toast: (type) => ({
      background: 'rgba(15, 12, 41, 0.95)',
      backdropFilter: 'blur(10px)',
      color: 'white',
      padding: '16px 20px',
      borderRadius: '12px',
      borderLeft: `5px solid ${
        type === 'success' ? '#00b894' : 
        type === 'error' ? '#ff7675' : 
        type === 'warning' ? '#fdcb6e' : '#0984e3'
      }`,
      boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      minWidth: '300px',
      animation: 'slideIn 0.3s ease-out',
      border: '1px solid rgba(255,255,255,0.1)'
    })
  };

  return (
    <div style={styles.container}>
      {toasts.map(toast => (
        <div key={toast.id} style={styles.toast(toast.type)}>
          {toast.type === 'success' && <CheckCircle color="#00b894" size={20} />}
          {toast.type === 'error' && <AlertCircle color="#ff7675" size={20} />}
          {toast.type === 'warning' && <AlertTriangle color="#fdcb6e" size={20} />}
          {toast.type === 'info' && <Info color="#0984e3" size={20} />}
          
          <span style={{ flex: 1, fontSize: '0.95rem' }}>{toast.message}</span>
          
          <button onClick={() => removeToast(toast.id)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>
            <X size={16} />
          </button>
        </div>
      ))}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
});

export default ToastContainer;