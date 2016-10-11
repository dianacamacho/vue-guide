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

  var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // whenever question changes, this function will run
    question: function (newQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    // _.debounce is a function provided by lodash to limit how
    // often a particularly expensive operation can be run.
    // In this case, we want to limit how often we access
    // yesno.wtf/api, waiting until the user has completely
    // finished typing before making the ajax request. To learn
    // more about the _.debounce function (and its cousin
    // _.throttle), visit: https://lodash.com/docs#debounce
    getAnswer: _.debounce(
      function () {
        var vm = this
        if (this.question.indexOf('?') === -1) {
          vm.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        vm.answer = 'Thinking...'
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      // This is the number of milliseconds we wait for the
      // user to stop typing.
      500
    )
  }
})

var vuefor = new Vue({
  el: '#testing-for',
  data: {
    parentMessage: "Parent",
    items: [
      { message: "Foo" },
      { message: "Bar" }
    ]
  }
})

Vue.component('todo-item', {
  props: ['title'],
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  '
})


var componentExample = new Vue({
  el: '#todo-list-example',
  data: {
    newToDoText: '',
    todos: ['todo 1', 'todo 2', 'todo 3']
  },
  methods: {
    addNewToDo: function() {
      this.todos.push(this.newToDoText);
      this.newToDoText = '';
    }
  }
})

// })

