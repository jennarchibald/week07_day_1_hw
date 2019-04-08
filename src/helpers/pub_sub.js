const PubSub = {
  publish: (channel, payload)=>{
    console.log(`published on channel: ${channel}. payload: ${payload}`);
    const event = new CustomEvent( channel, { detail: payload }  );
    document.dispatchEvent( event );
  },
  subscribe: ( channel, callback )=>{
    console.log(`subscribed to channel: ${channel}`);
    document.addEventListener( channel, callback );
  }
};

module.exports = PubSub;
