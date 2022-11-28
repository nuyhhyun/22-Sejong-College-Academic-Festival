import React from 'react';
import './remote.css';

function Remote() {

  const OnChangeText = (e) => {
    //location = document.querySelector(e.target.value).offsetTop;
  }
  return (
    <div class="remote">
      <div class="h_area"> 리모컨 </div>
      <div class="remote_cont">
        <div class="pg_area">
          <input type="text" size="3" onChange={OnChangeText} />
          <button onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}> Move </button>
          <button onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}> Top </button>
          <button onClick={() => { window.scrollTo({ top: 99999999, behavior: "smooth" }) }}> Bottom </button>
        </div>
        <div>
          <button onClick={() => {}}> Save </button>
        </div>
      </div>
    </div>
  )
}

export default Remote;