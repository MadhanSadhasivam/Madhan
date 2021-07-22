var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ]
  //for
  for(i=0;i<obj.length;i++)
  {
      console.log(obj[i]);
  }
  //for of
  for(let details of obj)
  {
      console.log(details);
  }
  //for each
  obj.forEach(function(details)
  {
      console.log(details);
  });
  //for in
  for(let details in obj)
  {
      console.log(obj[details]);
  }
  