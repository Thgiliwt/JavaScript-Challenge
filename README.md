# JavaScript-Challenge
This is the 11th homework from my coding boot camp course.
This time we will be using d3 lib in javascript to create a datatable, filter and show selected data on a webpage.

## Key Reflects

### New Findings
1. Part1 of the homework is really easy. I have set the event on a button and a form to perform easy filtering process.
2. Part2 is a bit tricky as there will be multiple input fields to filter. After adding 4 new input fields within the html file, I used 'this' to make the function apply each individual fields. I have firstly tried for loop but it turned out that was too complicated and hard to get it filter individually. So instead checking the keys within the given data, I have created a new Json Object to store key-value pairs as 'inputID(same as in the data) : inputvalue(values which provided by the user)'. Hence all I need to do is to fitler it through the data based on whatever within the new Json Object. 
   When it comes to multiple fields search, I used the 'if, else if' statement so as long as the input field got something, it will keep it in and remove nan or empty fields.
3. I have also tried the drop-down menu on the index.html. It worked for a single search type.
4. I have added a 'restore' button where it can reset the search.
5. I have used 'let' and 'const' instead 'var' as well, although it won't make any big difference where those variables are only live within a function etc.
6. Using console.log() to debug is very helpful.

### Uncertainties
1. The drop-down menu was quite challenging. I have only tried the 'country' and 'shape' ones. It worked individually but it seems not taking filter-element together. I think it was because that I have set two functions regarding the country and shape. Maybe it should have a layout such as function contained with sub-functions, and each sub-function is for a particular drop-down, involving its values from each key of the element in the data... I am thinking it as:
    
    function(){
      
      function(date)
        (select inputs)
        (filter)
      function(city)
        ..
        ..
      function(state)
      function(country)
      function(shape)
      
      (loading to html)}
 
Well I have not worked out how to link all together such as how to select the <option> value and <select> id in this case, giving the current html file layout as:
  
  <body>
    ...
    ..
    .
    <li)
      <label>
      <input>
      <select>
        <option>
        
