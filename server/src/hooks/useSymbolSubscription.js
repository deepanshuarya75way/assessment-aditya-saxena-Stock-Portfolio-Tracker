import {useEffect } from 'react';
const usage=new WeakMap();
const clean =(s)=>String(s ||'').trim().toUpperCase();
export default function useSymbolSubscription(socket, symbols){
  const key =[... new Set((symbols || []).map(clean).filter(Boolean))]
    .sort()
    .join(',');

    useEffect(()=>{
      if(!socket || ! key) return;
      const list =key.split(',');
      let counts =usage.get(socket);
      if(!counts){
        counts=new  Map();
        usage.set(socket,counts);

      }
      list.forEach((s)=> counts.set(s,( cou)))

    })
}