var arrayTest = [1, 2, 3, 3, 2, 1, 4];

document.getElementById("app").innerHTML = `
  <h1>Unique Element Challenge</h1>

  <h2>Target</h2>
  <div>Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.</div>

  <h2>Considerations</h2>
  <ul>
    <li>Values are <b>duplicated only twice.</b></li>
    <li>There is <b>only one non duplicate value.</b></li>
    <li>The non duplicate value can be placed <b>anywhere on the array.</b></li>
    <li>The result must be an <b>integer.</b></li>
  </ul>
  
  <h2>Test Data</h2>
  <div>${arrayTest}</div>
    
  <h2>Expected result</h2>
  <div>4</div>

  <h2>Your Result</h2>
  <div>4</div>
`;
