class Store{
    constructor(state){
        // this.listener = () => {};
        this.state = state;
        this.listeners = [];
    }

    dispatch(reducer){
        this.state = reducer(this.state);
 
        this.listeners.forEach(
        (listener) => listener(this.state)
        );
        // this.listener(this.state);
}

    addListener(listener){
        this.listeners.push(listener);
        }
        // this.listener = listener
}

export default Store;