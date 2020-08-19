function extractTable(targetElem){

  const oTable = targetElem;

  //gets rows of table
  const rowLength = oTable.rows.length;

  //loops through rows    
  for (i = 0; i < rowLength; i++){

    //gets cells of current row  
     let oCells = oTable.rows.item(i).cells;

    //gets amount of cells of current row
    let cellLength = oCells.length;

    //loops through each cell in current row
    for(let j = 0; j < cellLength; j++){

      // get your cell info here

      let cellVal = oCells.item(j).innerHTML;
      alert(cellVal);
    }
  }
}