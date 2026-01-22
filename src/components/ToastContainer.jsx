import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

const ToastContainer = forwardRef((props, ref) => {
  const [toasts, setToasts] = useState([]);

  useImperativeHandle(ref, () => ({
    addToast(message, type = 'info') {
      const id = Date.now();
      setToasts([...toasts, { id, message, type }]);
      setTimeout(() => setToasts(c => c.filter(t => t.id !== id)), 3000);
    }
  }));

  const styles = {
    container: { position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999, display: 'flex', flexDirection: 'column', gap: '10px' },
    toast: (type) => ({
      background: 'rgba(15, 12, 41, 0.95)', backdropFilter: 'blur(10px)', color: 'white', padding: '16px', borderRadius: '12px',
      borderLeft: `5px solid ${type === 'success' ? '#00b894' : '#ff7675'}`, boxShadow: '0 10px 30px rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', gap: '12px', minWidth: '300px', border: '1px solid rgba(255,255,255,0.1)'
    })
  };

  return (
    <div style={styles.container}>
      {toasts.map(t => (
        <div key={t.id} style={styles.toast(t.type)}>
          {t.type === 'success' ? <CheckCircle color="#00b894"/> : <AlertCircle color="#ff7675"/>}
          <span style={{flex:1}}>{t.message}</span>
          <button onClick={() => setToasts(toasts.filter(x => x.id !== t.id))} style={{background:'none', border:'none', color:'gray', cursor:'pointer'}}><X size={16}/></button>
        </div>
      ))}
    </div>
  );
});
export default ToastContainer;