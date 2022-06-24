function Concat(separator){
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
} //Definiindo uma função que concatena várias strings.