import React, { useState } from 'react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import { Search } from 'lucide-react';

const Courses = () => {
  const [term, setTerm] = useState('');
  const [cat, setCat] = useState('All');
  const categories = ['All', 'Development', 'Design', 'Data Science'];

  const filtered = courses.filter(c => 
    (cat === 'All' || c.category === cat) && 
    c.title.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <div style={{paddingTop:'120px', minHeight:'100vh', paddingBottom:'60px'}}>
      <div className="container">
        <div style={{textAlign:'center', marginBottom:'60px'}}>
          <h2 className="section-title">Explore Catalog</h2>
          <div style={{maxWidth:'500px', margin:'20px auto', position:'relative'}}>
            <Search style={{position:'absolute', left:'20px', top:'15px', color:'gray'}}/>
            <input type="text" placeholder="Search..." value={term} onChange={e=>setTerm(e.target.value)} 
              style={{width:'100%', padding:'15px 15px 15px 50px', borderRadius:'50px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', color:'white', outline:'none'}}/>
          </div>
          <div style={{display:'flex', justifyContent:'center', gap:'10px'}}>
            {categories.map(c => (
              <button key={c} onClick={()=>setCat(c)} 
                style={{padding:'8px 20px', borderRadius:'20px', background: cat === c ? '#fca311' : 'rgba(255,255,255,0.1)', color: cat === c ? 'black' : 'white', border:'none', cursor:'pointer'}}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'30px'}}>
          {filtered.map(c => <CourseCard key={c.id} course={c} />)}
        </div>
      </div>
    </div>
  );
};
export default Courses;