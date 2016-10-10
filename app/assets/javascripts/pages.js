// $(document).on('ready', function() {
  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })

  var app = new Vue({
    el: "#app",
    data: {
      message: "Hello Vue!",
      inputMessage: "Type something",
      computedMessage: "Reversed",
      seen: true,
      todos: [ 
        { text: "task1" }, 
        { text: "task2" }, 
        { text: "task3" }
      ],
      newTask: '',
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar',
      first: 'Diana',
      last: 'Camacho',
      nameFirst: 'Pia',
      nameLast: 'Douwes'
    },
    methods: {
      addTask: function () {
        this.todos.push({ text: this.newTask });
        console.log({ text: this.newTask });
        this.newTask = '';
      },
      changeSeen: function() {
        this.seen = !this.seen;
      },
      dateNow: function() {
        return Date.now();
      }
    },
    computed: {
      reversedComputedMessage: function () {
        return this.computedMessage.split('').reverse().join('');
      },
      now: function () {
        return Date.now();
      },
      full: function() {
        return this.first + ' ' + this.last;
      },
      // computed properties are by default getter only, but can set-up setter
      // when needed so resetting value of the computed property also updates the data objects
      nameFull: {
        get: function() {
          return this.nameFirst + ' ' + this.nameLast;
        },
        set: function(newfullName) {
          var updatedFullName = newfullName.split(' ');
          this.nameFirst = updatedFullName[0];
          this.nameLast = updatedFullName[updatedFullName.length - 1];
        }
      }
    },
    watch: {
      firstName: function (val) {
        this.fullName = val + ' ' + this.lastName
      },
      lastName: function (val) {
        this.fullName = this.firstName + ' ' + val
      }
    }
  })
// })

