class Adder {
    constructor(props) {
        this.props = props;
    }

    sum() {
        if(this.props.hasOwnProperty('a') && this.props.hasOwnProperty('b')) {
            return this.props.a + this.props.b;
        } else {
            return null;
        }
        
    }

    render() {
        return `<p>The sum of ${this.props.a} and ${this.props.b} is ${this.sum()}</p>`;
    }
}

module.exports = Adder;