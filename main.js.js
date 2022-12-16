var a,b,c;
a=prompt("enter first value");
b=prompt("enter second value");
function swap(a,b){
  c=a
  a=b
  b=c
  document.write(a)
  document.write("<br>")
  document.write(b)
}
swap(a,b)
