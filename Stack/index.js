let Stack = function() {
    this.top = 0;
    this.items = [];

    // Adds a value onto the end of the stack
    this.push = function(value) {
        this.items[this.top] = value;
        this.top++;
    }

    //Removes and returns the value at the end of the stack
    this.pop = function() {
        if(this.top === 0) {
            return null;
        }

        this.top--;
        let result = this.items[this.top];
        delete this.items[this.top];

    }
}