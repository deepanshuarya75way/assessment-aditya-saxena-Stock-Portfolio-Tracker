const normalizeSymbol=(symbol)=>{
  if(typeof symbol!=='string') return '';
  return symbol.trim().toUpperCase();
};

const normalizeSymbols=(input)=>{
  const list=Array.isArray(input) ? input: [input];
  return [... new Set(list.map(normalizeSymbol).filter(Boolean))];
    
  
};
module.exports={normalizeSymbol, normalizeSymbols};