new Vue({

  // targeting the div with id of 'events'

  el: '#events',
  // this is for values/data
  data: {
    event: { name: '', description: '', date: '' },
    events: []
  },
  // this will run app on load
  mounted: function() {
    this.fetchEvents();
  },
  // where methods are registered
  methods: {
    // This will retrieve and set data
    fetchEvents: function() {
      const events = [
        {
          id: 1,
          name: "TIFF",
          description: "Toronto International Film Festival",
          date: '2016-09-10'
        },
        {
          id: 2,
          name: 'The Martian Premiere',
          description: 'The Martian comes to theatres.',
          date: '2016-10-02'
        },
        {
          id: 3,
          name: 'SXSW',
          description: 'Music, film and interactive festival in Austin, TX.',
          date: '2016-03-11'
        }
      ];
      this.events = events;
    },
    // This will add new events
    addEvent: function() {
      if(this.event.name) {
        this.events.push(this.event);
        this.event = { name: '', description: '', date: '' };
      }
    },

    deleteEvent: function(index) {
      if(confirm("Are you sure you want to delete this event?")) {
        this.events.splice(index, 1);
      }
    }
  }

});
