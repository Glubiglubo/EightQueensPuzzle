let solver;

function setup() {
  createCanvas(400,400);
  solver = new Solver(8,8);
  solver.solver(0);
  console.log(solver.board);
}

function draw(){
  background(0);
  for(let y = 0; y<solver.board.length; y++){
    for(let x = 0; x<solver.board.length; x++){
      if(solver.board[y][x] == 1){
        fill(0,255,0);
      }
      else{
        fill(255,0,0);
      }
      rect(width/3+x*15,height/3+y*15,10,10);
    }
  }
}
