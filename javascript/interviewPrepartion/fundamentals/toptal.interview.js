{
  console.time("loop");
  for (var i = 0; i < 1000000; i += 1){
      // Do nothing
  }
  console.timeEnd("loop");
}

// chrome took --> loop: 7.451904296875 ms
// node took ->  loop: 5.851 ms