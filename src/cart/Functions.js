
// Add To Cart 
export const addToCart = (items,itemAdd) => {
    let tempCart = items.find(item => item.id === itemAdd.id);
    if(tempCart) {
       return items.map(item => item.id === itemAdd.id ? {...item,count:item.count <= item.avalb_cnt ? item.count+1:item.count} : {...item})
     
    }
    return [...items,{...itemAdd}];
}

// increas item 
export const increas_item = (items,id) => {
    return items.map(item => item.id === id ? {...item,count :  item.count <= item.avalb_cnt ? item.count+1:item.count} : {...item});
}

// decrease item  
export const decreas_item = (items,id) => {
    return items.map(item => item.id === id ? {...item,count :  item.count > 1 ? item.count-1:item.count} : {...item});
}


// Get Totals 
export const getTotal  = (items) => {
 
   const total = items.reduce((item,itemcheck) => { 
     
       item +=  itemcheck.price * itemcheck.count;
   
       return item;
   },0);
   return total;
}

// Get Totals 
export const getCountProducts  = (items) => {
   
   const itemsCount = items.reduce((item,itemcheck) => { 
       
       item += itemcheck.count;
     
       return item;
   },0);
   return itemsCount;
}