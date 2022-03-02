$(".grid2").each((index, element) => {
    index += 1; 
    element = $(element);
    element.css("grid-row", index);
    if(index % 2 == 0){
      element.css("grid-column", 1);
    }
    else {
      element.css("grid-column", 2);
    }
  });
  
  AOS.init();