// Funcion nuevo formato datos del back
const reformat = (inputs) => {
    const monthNumber = [
    
    ];
  
    const data = []; 
    const netPerMonth = Array.from({ length: 12 }, () => 0);
  
    inputs.map((input) => {
      const date = new Date(input.date);
      const month = date.getMonth();
      netPerMonth[month] += input.input;
    });
  

    return { data, netPerMonth };
  };
  export default reformat;