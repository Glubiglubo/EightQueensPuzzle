class Solver{
  constructor(){
    this.board = [[0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0]];
    this.counter = 0;
    //console.log(this.board);
  }

  solver(row){
    this.counter++;
    if (row == this.board.length) {
      return true;
    }
    for(let i = 0; i<this.board.length; i++){
      this.board[row][i] = 1;
      console.log(this.board);
      let newpos = createVector(i,row);
      if(this.checkpos(newpos) === true){
        let newrow = row + 1;
        if(this.solver(newrow) === true){
          return true;
        }
      }
      this.board[row][i] = 0;
    }
    return false;
  }

  checkpos(newpos){
    for(let i = 0; i<this.board.length; i++){
      if(this.board[i][newpos.x] == 1 && i != newpos.y){
        //console.log("first error");
        return false;
      }
    }
    for(let j = 1; j<this.board.length; j++){
      if(newpos.y-j > -1 && newpos.x-j > -1){
        if(this.board[newpos.y-j][newpos.x-j] == 1){
          //console.log("second error");
          return false;
        }
      }
    }
    for(let k = 1; k<this.board.length; k++){
      if(newpos.y-k > -1 && newpos.x+k < this.board.length){
        if(this.board[newpos.y-k][newpos.x+k] == 1){
          //console.log("third error");
          return false;
        }
      }
    }
    return true;
  }
}
